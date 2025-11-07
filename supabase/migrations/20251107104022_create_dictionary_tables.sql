/*
  # Create Dictionary Tables

  1. New Tables
    - `dictionary_entries`
      - `id` (uuid, primary key)
      - `english` (text, indexed) - English word
      - `marathi` (text, indexed) - Marathi translation
      - `hindi` (text, optional) - Hindi translation
      - `part_of_speech` (text) - noun, verb, adjective, etc.
      - `pronunciation` (text) - Romanized pronunciation
      - `definition` (text) - English definition
      - `ipa_pronunciation` (text, optional) - IPA pronunciation
      - `audio_url` (text, optional) - URL to pronunciation audio
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
      - `created_by` (uuid, optional) - User who added entry
      - `verified` (boolean) - Whether entry is verified

    - `dictionary_examples`
      - `id` (uuid, primary key)
      - `entry_id` (uuid, foreign key) - References dictionary_entries
      - `english_sentence` (text) - Example in English
      - `marathi_sentence` (text) - Example in Marathi
      - `source` (text) - Source of example
      - `created_at` (timestamptz)

    - `dictionary_sources`
      - `id` (uuid, primary key)
      - `entry_id` (uuid, foreign key) - References dictionary_entries
      - `name` (text) - Source name
      - `type` (text) - government, academic, dictionary, community
      - `reference` (text, optional) - Reference info
      - `url` (text, optional) - External link
      - `credibility` (integer) - Rating 1-10
      - `created_at` (timestamptz)

    - `user_contributions`
      - `id` (uuid, primary key)
      - `user_id` (uuid, optional) - References auth.users
      - `entry_id` (uuid, foreign key) - References dictionary_entries
      - `contribution_type` (text) - new_entry, example, correction
      - `status` (text) - pending, approved, rejected
      - `data` (jsonb) - Contribution data
      - `created_at` (timestamptz)

    - `user_favorites`
      - `id` (uuid, primary key)
      - `user_id` (uuid) - References auth.users
      - `entry_id` (uuid, foreign key) - References dictionary_entries
      - `created_at` (timestamptz)
      - Unique constraint on (user_id, entry_id)

    - `search_history`
      - `id` (uuid, primary key)
      - `user_id` (uuid, optional) - References auth.users
      - `search_term` (text)
      - `language` (text) - english or marathi
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Public read access for dictionary_entries, examples, and sources
    - Authenticated users can add to favorites and search history
    - Authenticated users can submit contributions

  3. Indexes
    - Full-text search indexes on english and marathi columns
    - Indexes on frequently queried columns
*/

-- Create dictionary_entries table
CREATE TABLE IF NOT EXISTS dictionary_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  english text NOT NULL,
  marathi text NOT NULL,
  hindi text,
  part_of_speech text NOT NULL,
  pronunciation text NOT NULL,
  definition text NOT NULL,
  ipa_pronunciation text,
  audio_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  created_by uuid,
  verified boolean DEFAULT false
);

-- Create indexes for better search performance
CREATE INDEX IF NOT EXISTS idx_dictionary_entries_english ON dictionary_entries USING gin(to_tsvector('english', english));
CREATE INDEX IF NOT EXISTS idx_dictionary_entries_marathi ON dictionary_entries(marathi);
CREATE INDEX IF NOT EXISTS idx_dictionary_entries_verified ON dictionary_entries(verified);

-- Create dictionary_examples table
CREATE TABLE IF NOT EXISTS dictionary_examples (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  entry_id uuid NOT NULL REFERENCES dictionary_entries(id) ON DELETE CASCADE,
  english_sentence text NOT NULL,
  marathi_sentence text NOT NULL,
  source text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_dictionary_examples_entry_id ON dictionary_examples(entry_id);

-- Create dictionary_sources table
CREATE TABLE IF NOT EXISTS dictionary_sources (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  entry_id uuid NOT NULL REFERENCES dictionary_entries(id) ON DELETE CASCADE,
  name text NOT NULL,
  type text NOT NULL CHECK (type IN ('government', 'academic', 'dictionary', 'community')),
  reference text,
  url text,
  credibility integer NOT NULL CHECK (credibility >= 1 AND credibility <= 10),
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_dictionary_sources_entry_id ON dictionary_sources(entry_id);

-- Create user_contributions table
CREATE TABLE IF NOT EXISTS user_contributions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid,
  entry_id uuid REFERENCES dictionary_entries(id) ON DELETE CASCADE,
  contribution_type text NOT NULL CHECK (contribution_type IN ('new_entry', 'example', 'correction', 'audio')),
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  data jsonb NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_user_contributions_user_id ON user_contributions(user_id);
CREATE INDEX IF NOT EXISTS idx_user_contributions_status ON user_contributions(status);

-- Create user_favorites table
CREATE TABLE IF NOT EXISTS user_favorites (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  entry_id uuid NOT NULL REFERENCES dictionary_entries(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, entry_id)
);

CREATE INDEX IF NOT EXISTS idx_user_favorites_user_id ON user_favorites(user_id);

-- Create search_history table
CREATE TABLE IF NOT EXISTS search_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid,
  search_term text NOT NULL,
  language text NOT NULL CHECK (language IN ('english', 'marathi')),
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_search_history_user_id ON search_history(user_id);
CREATE INDEX IF NOT EXISTS idx_search_history_created_at ON search_history(created_at DESC);

-- Enable Row Level Security
ALTER TABLE dictionary_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE dictionary_examples ENABLE ROW LEVEL SECURITY;
ALTER TABLE dictionary_sources ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_contributions ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE search_history ENABLE ROW LEVEL SECURITY;

-- RLS Policies for dictionary_entries
CREATE POLICY "Anyone can view verified dictionary entries"
  ON dictionary_entries FOR SELECT
  USING (verified = true);

CREATE POLICY "Authenticated users can view all entries"
  ON dictionary_entries FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert entries"
  ON dictionary_entries FOR INSERT
  TO authenticated
  WITH CHECK (created_by = auth.uid());

CREATE POLICY "Users can update own entries"
  ON dictionary_entries FOR UPDATE
  TO authenticated
  USING (created_by = auth.uid())
  WITH CHECK (created_by = auth.uid());

-- RLS Policies for dictionary_examples
CREATE POLICY "Anyone can view examples"
  ON dictionary_examples FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can add examples"
  ON dictionary_examples FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- RLS Policies for dictionary_sources
CREATE POLICY "Anyone can view sources"
  ON dictionary_sources FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can add sources"
  ON dictionary_sources FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- RLS Policies for user_contributions
CREATE POLICY "Users can view own contributions"
  ON user_contributions FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can insert contributions"
  ON user_contributions FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

-- RLS Policies for user_favorites
CREATE POLICY "Users can view own favorites"
  ON user_favorites FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can add favorites"
  ON user_favorites FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can remove favorites"
  ON user_favorites FOR DELETE
  TO authenticated
  USING (user_id = auth.uid());

-- RLS Policies for search_history
CREATE POLICY "Users can view own search history"
  ON search_history FOR SELECT
  TO authenticated
  USING (user_id = auth.uid() OR user_id IS NULL);

CREATE POLICY "Anyone can add to search history"
  ON search_history FOR INSERT
  WITH CHECK (true);

-- Insert sample data
INSERT INTO dictionary_entries (english, marathi, hindi, part_of_speech, pronunciation, definition, verified)
VALUES 
  ('abandon', 'सोडून देणे', 'परित्याग करना', 'verb', 'soḍūn deṇe', 'To give up completely; to desert or leave behind.', true),
  ('court', 'न्यायालय', 'न्यायालय', 'noun', 'nyāyālaya', 'A tribunal presided over by a judge for the administration of justice.', true),
  ('justice', 'न्याय', 'न्याय', 'noun', 'nyāya', 'The quality of being fair and reasonable; the administration of law.', true),
  ('law', 'कायदा', 'कानून', 'noun', 'kāyadā', 'The system of rules that a particular country or community recognizes.', true),
  ('evidence', 'पुरावा', 'सबूत', 'noun', 'purāvā', 'Information or signs that indicate whether something is true or valid.', true);

-- Insert examples for abandon
DO $$
DECLARE
  abandon_id uuid;
BEGIN
  SELECT id INTO abandon_id FROM dictionary_entries WHERE english = 'abandon';
  
  IF abandon_id IS NOT NULL THEN
    INSERT INTO dictionary_examples (entry_id, english_sentence, marathi_sentence, source)
    VALUES 
      (abandon_id, 'The defendant decided to abandon the case.', 'प्रतिवादीने खटला सोडून देण्याचा निर्णय घेतला.', 'Legal corpus'),
      (abandon_id, 'Never abandon your principles.', 'आपली तत्त्वे कधीही सोडू नका.', 'General usage');
  END IF;
END $$;

-- Insert sources for abandon
DO $$
DECLARE
  abandon_id uuid;
BEGIN
  SELECT id INTO abandon_id FROM dictionary_entries WHERE english = 'abandon';
  
  IF abandon_id IS NOT NULL THEN
    INSERT INTO dictionary_sources (entry_id, name, type, reference, credibility)
    VALUES 
      (abandon_id, 'Tri-Lingual Legal Glossary - Ministry of Law & Justice', 'government', 'O.XXIII R. 1(1) Code of Civil Procedure, 1908', 10),
      (abandon_id, 'Wiktionary English-Marathi', 'dictionary', NULL, 8);
  END IF;
END $$;

-- Insert examples for court
DO $$
DECLARE
  court_id uuid;
BEGIN
  SELECT id INTO court_id FROM dictionary_entries WHERE english = 'court';
  
  IF court_id IS NOT NULL THEN
    INSERT INTO dictionary_examples (entry_id, english_sentence, marathi_sentence, source)
    VALUES 
      (court_id, 'The case will be heard in court tomorrow.', 'उद्या न्यायालयात खटल्याची सुनावणी होईल.', 'Legal documents');
      
    INSERT INTO dictionary_sources (entry_id, name, type, reference, credibility)
    VALUES 
      (court_id, 'Tri-Lingual Legal Glossary - Ministry of Law & Justice', 'government', 'Legal terminology database', 10);
  END IF;
END $$;