/*
  # Add More Legal Terms from Glossary

  1. Changes
    - Add additional legal terminology entries from the Tri-Lingual Legal Glossary
    - Includes terms with English definitions, Marathi and Hindi translations
    - All entries marked as verified
    - Includes legal act references where applicable

  2. Terms Added
    - Legal and administrative terms commonly used in Indian legal system
    - Terms from various legal acts and procedures
    - General legal vocabulary with translations
*/

-- Insert additional legal terms
INSERT INTO dictionary_entries (english, marathi, hindi, part_of_speech, pronunciation, definition, verified)
VALUES 
  ('abatement', 'कमी करणे', 'कमी करना', 'noun', 'kamī karaṇe', 'A reduction or decrease; the ending or suspension of a legal proceeding.', true),
  ('abduction', 'अपहरण', 'अपहरण', 'noun', 'apaharaṇa', 'The action of forcibly taking someone away against their will.', true),
  ('abet', 'मदत करणे', 'सहायता करना', 'verb', 'madat karaṇe', 'To encourage or assist someone in committing a crime or doing something wrong.', true),
  ('abetment', 'साहाय्य', 'साहाय्य', 'noun', 'sāhāyya', 'The act of aiding, instigating, or facilitating the commission of a crime.', true),
  ('abortion', 'गर्भपात', 'गर्भपात', 'noun', 'garbhapāta', 'The deliberate termination of a pregnancy.', true),
  ('absolute', 'परम', 'निरपेक्ष', 'adjective', 'parama', 'Not qualified or limited; complete and total.', true),
  ('absolution', 'मुक्तता', 'मुक्ति', 'noun', 'muktatā', 'Formal release from guilt, obligation, or punishment.', true),
  ('abstract', 'गोषवारा', 'सारांश', 'noun', 'goṣavārā', 'A summary or brief statement of the main points.', true),
  ('abuse', 'गैरवापर', 'दुरुपयोग', 'noun', 'gairavāpara', 'The improper or excessive use of something; cruel treatment.', true),
  ('access', 'प्रवेश', 'प्रवेश', 'noun', 'praveśa', 'The right or opportunity to approach, enter, or use something.', true),
  ('accessory', 'सहायक', 'सहायक', 'noun', 'sahāyaka', 'A person who assists in or encourages the commission of a crime.', true),
  ('accomplice', 'साथी', 'साथी', 'noun', 'sāthī', 'A person who helps another commit a crime.', true),
  ('accord', 'करार', 'समझौता', 'noun', 'karāra', 'An agreement or treaty; harmony or accordance.', true),
  ('account', 'हिशोब', 'हिसाब', 'noun', 'hiśoba', 'A record or statement of financial transactions.', true),
  ('accuse', 'आरोप लावणे', 'आरोप लगाना', 'verb', 'āropa lāvaṇe', 'To charge someone with a crime or wrongdoing.', true),
  ('accused', 'आरोपी', 'अभियुक्त', 'noun', 'āropī', 'A person charged with a crime or offense.', true),
  ('acknowledgment', 'पोच', 'रसीद', 'noun', 'poca', 'The act of accepting or admitting the existence or truth of something.', true),
  ('acquit', 'निर्दोष ठरवणे', 'बरी करना', 'verb', 'nirdoṣa ṭharawaṇe', 'To free someone from a criminal charge by a verdict of not guilty.', true),
  ('acquittal', 'निर्दोष सुटका', 'बरी', 'noun', 'nirdoṣa suṭakā', 'A judgment that a person is not guilty of the crime charged.', true),
  ('act', 'अधिनियम', 'अधिनियम', 'noun', 'adhiniyama', 'A law passed by a legislative body; a deed or action.', true),
  ('action', 'दावा', 'कार्यवाही', 'noun', 'dāvā', 'A legal proceeding; a lawsuit.', true),
  ('adjournment', 'स्थगिती', 'स्थगन', 'noun', 'sthagitī', 'The postponement or suspension of proceedings to a later time.', true),
  ('adjudicate', 'निर्णय देणे', 'निर्णय देना', 'verb', 'nirṇaya deṇe', 'To make a formal judgment or decision about a legal problem or dispute.', true),
  ('administration', 'प्रशासन', 'प्रशासन', 'noun', 'praśāsana', 'The management of public affairs; government.', true),
  ('admissible', 'ग्राह्य', 'स्वीकार्य', 'adjective', 'grāhya', 'Acceptable or valid, especially as evidence in a court of law.', true),
  ('admission', 'कबुली', 'स्वीकृति', 'noun', 'kabulī', 'A statement acknowledging the truth of something.', true),
  ('adopt', 'दत्तक घेणे', 'गोद लेना', 'verb', 'dattaka gheṇe', 'To legally take another person''s child and bring it up as one''s own.', true),
  ('adoption', 'दत्तक', 'गोद लेना', 'noun', 'dattaka', 'The action or fact of legally taking another''s child as one''s own.', true),
  ('advocate', 'वकील', 'अधिवक्ता', 'noun', 'vakīla', 'A person who publicly supports or recommends a cause; a lawyer.', true),
  ('affidavit', 'प्रतिज्ञापत्र', 'शपथपत्र', 'noun', 'pratijñāpatra', 'A written statement confirmed by oath for use as evidence in court.', true),
  ('affirmation', 'प्रतिज्ञान', 'प्रतिज्ञान', 'noun', 'pratijñāna', 'A solemn declaration made under penalty of perjury.', true),
  ('agency', 'अभिकरण', 'एजेंसी', 'noun', 'abhikaraṇa', 'A government office or organization providing a particular service.', true),
  ('agent', 'अभिकर्ता', 'एजेंट', 'noun', 'abhikartā', 'A person authorized to act on behalf of another.', true),
  ('agreement', 'करार', 'समझौता', 'noun', 'karāra', 'A negotiated arrangement between parties as to a course of action.', true),
  ('allegation', 'आरोप', 'आरोप', 'noun', 'āropa', 'A claim or assertion that someone has done something illegal or wrong.', true),
  ('amendment', 'दुरुस्ती', 'संशोधन', 'noun', 'durustī', 'A minor change or addition to a legal document.', true),
  ('appeal', 'अपील', 'अपील', 'noun', 'apīla', 'An application to a higher court for a decision to be reversed.', true),
  ('appellant', 'अपिलार्थी', 'अपीलार्थी', 'noun', 'apilārthī', 'A person who applies to a higher court for a reversal of a lower court decision.', true),
  ('arbitration', 'लवाद', 'मध्यस्थता', 'noun', 'lavāda', 'The use of an arbitrator to settle a dispute.', true),
  ('arrest', 'अटक', 'गिरफ्तारी', 'noun', 'aṭaka', 'The action of seizing someone to take into custody.', true),
  ('assault', 'हल्ला', 'हमला', 'noun', 'hallā', 'A physical attack or threat of attack.', true),
  ('asset', 'मालमत्ता', 'संपत्ति', 'noun', 'mālamattā', 'Property owned by a person or company.', true),
  ('attorney', 'वकील', 'वकील', 'noun', 'vakīla', 'A person appointed to act for another in business or legal matters.', true),
  ('bail', 'जामीन', 'जमानत', 'noun', 'jāmīna', 'The temporary release of an accused person awaiting trial.', true),
  ('bailiff', 'बेलीफ', 'बेलीफ', 'noun', 'belīpha', 'A court officer who maintains order and performs various duties.', true),
  ('bankrupt', 'दिवाळखोर', 'दिवालिया', 'adjective', 'divāḷakhora', 'Declared in law unable to pay outstanding debts.', true),
  ('bankruptcy', 'दिवाळखोरी', 'दिवालियापन', 'noun', 'divāḷakhorī', 'The state of being bankrupt.', true),
  ('barrister', 'बॅरिस्टर', 'बैरिस्टर', 'noun', 'bĕrisṭara', 'A lawyer entitled to practice in the higher courts.', true),
  ('beneficiary', 'लाभार्थी', 'लाभार्थी', 'noun', 'labhārthī', 'A person who derives advantage from something.', true),
  ('bond', 'बंधपत्र', 'बांड', 'noun', 'bandhapatra', 'A written agreement with legal force.', true),
  ('breach', 'भंग', 'उल्लंघन', 'noun', 'bhaṅga', 'An act of breaking a law, agreement, or code of conduct.', true)
ON CONFLICT DO NOTHING;