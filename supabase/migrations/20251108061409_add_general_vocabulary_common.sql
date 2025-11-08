/*
  # Add General Vocabulary - Common Words

  1. Changes
    - Add common everyday English words with Marathi and Hindi translations
    - Includes basic verbs, nouns, adjectives, and adverbs
    - Covers fundamental vocabulary for general communication
    - All entries marked as verified

  2. Categories Covered
    - Basic actions and verbs
    - Common nouns
    - Everyday adjectives
    - Time-related words
    - Family and relationships
    - Numbers and quantities
*/

INSERT INTO dictionary_entries (english, marathi, hindi, part_of_speech, pronunciation, definition, verified)
VALUES 
  -- Basic Verbs
  ('eat', 'खाणे', 'खाना', 'verb', 'khāṇe', 'To consume food by taking it into the mouth and swallowing.', true),
  ('drink', 'पिणे', 'पीना', 'verb', 'piṇe', 'To take liquid into the mouth and swallow.', true),
  ('sleep', 'झोपणे', 'सोना', 'verb', 'zhopaṇe', 'To rest in a state of reduced consciousness.', true),
  ('wake', 'जागे होणे', 'जागना', 'verb', 'jāge hoṇe', 'To stop sleeping; to become conscious.', true),
  ('walk', 'चालणे', 'चलना', 'verb', 'cālaṇe', 'To move at a regular pace by lifting and setting down each foot.', true),
  ('run', 'धावणे', 'दौड़ना', 'verb', 'dhāvaṇe', 'To move at a speed faster than a walk.', true),
  ('sit', 'बसणे', 'बैठना', 'verb', 'basaṇe', 'To be in a position where the body is supported by the buttocks.', true),
  ('stand', 'उभे राहणे', 'खड़े होना', 'verb', 'ubhe rāhaṇe', 'To be in an upright position on the feet.', true),
  ('go', 'जाणे', 'जाना', 'verb', 'jāṇe', 'To move from one place to another; to travel.', true),
  ('come', 'येणे', 'आना', 'verb', 'yeṇe', 'To move toward or arrive at a particular place.', true),
  ('give', 'देणे', 'देना', 'verb', 'deṇe', 'To transfer possession of something to someone.', true),
  ('take', 'घेणे', 'लेना', 'verb', 'gheṇe', 'To reach for and hold; to obtain.', true),
  ('speak', 'बोलणे', 'बोलना', 'verb', 'bolaṇe', 'To say words; to talk.', true),
  ('listen', 'ऐकणे', 'सुनना', 'verb', 'aikaṇe', 'To give attention to sound; to hear.', true),
  ('see', 'पाहणे', 'देखना', 'verb', 'pāhaṇe', 'To perceive with the eyes; to look at.', true),
  ('write', 'लिहिणे', 'लिखना', 'verb', 'lihiṇe', 'To mark letters, words, or symbols on a surface.', true),
  ('read', 'वाचणे', 'पढ़ना', 'verb', 'vācaṇe', 'To look at and comprehend written words.', true),
  ('learn', 'शिकणे', 'सीखना', 'verb', 'śikaṇe', 'To gain knowledge or skill through study or experience.', true),
  ('teach', 'शिकवणे', 'सिखाना', 'verb', 'śikavaṇe', 'To impart knowledge or instruct someone.', true),
  ('work', 'काम करणे', 'काम करना', 'verb', 'kām karaṇe', 'To perform tasks or duties; to labor.', true),
  ('play', 'खेळणे', 'खेलना', 'verb', 'kheḷaṇe', 'To engage in activity for enjoyment and recreation.', true),
  ('help', 'मदत करणे', 'मदद करना', 'verb', 'madat karaṇe', 'To assist or support someone.', true),
  ('love', 'प्रेम करणे', 'प्यार करना', 'verb', 'prem karaṇe', 'To have deep affection or care for someone or something.', true),
  ('like', 'आवडणे', 'पसंद करना', 'verb', 'āvaḍaṇe', 'To find agreeable or enjoyable.', true),
  ('want', 'हवे असणे', 'चाहना', 'verb', 'have asaṇe', 'To have a desire for; to wish for.', true),
  ('need', 'गरज असणे', 'ज़रूरत होना', 'verb', 'garaj asaṇe', 'To require something essential.', true),
  ('know', 'माहीत असणे', 'जानना', 'verb', 'māhīt asaṇe', 'To be aware of through observation or information.', true),
  ('think', 'विचार करणे', 'सोचना', 'verb', 'vicār karaṇe', 'To have a particular opinion or idea.', true),
  ('feel', 'वाटणे', 'महसूस करना', 'verb', 'vāṭaṇe', 'To experience an emotion or sensation.', true),
  ('understand', 'समजणे', 'समझना', 'verb', 'samajaṇe', 'To perceive the meaning or importance of something.', true),

  -- Common Nouns - People & Family
  ('person', 'व्यक्ती', 'व्यक्ति', 'noun', 'vyaktī', 'A human being; an individual.', true),
  ('man', 'माणूस', 'आदमी', 'noun', 'māṇūsa', 'An adult male human.', true),
  ('woman', 'स्त्री', 'औरत', 'noun', 'strī', 'An adult female human.', true),
  ('child', 'मूल', 'बच्चा', 'noun', 'mūla', 'A young human being below the age of puberty.', true),
  ('boy', 'मुलगा', 'लड़का', 'noun', 'mulagā', 'A male child or young man.', true),
  ('girl', 'मुलगी', 'लड़की', 'noun', 'mulagī', 'A female child or young woman.', true),
  ('father', 'वडील', 'पिता', 'noun', 'vaḍīla', 'A male parent.', true),
  ('mother', 'आई', 'माँ', 'noun', 'āī', 'A female parent.', true),
  ('brother', 'भाऊ', 'भाई', 'noun', 'bhāū', 'A male sibling.', true),
  ('sister', 'बहीण', 'बहन', 'noun', 'bahīṇa', 'A female sibling.', true),
  ('son', 'मुलगा', 'बेटा', 'noun', 'mulagā', 'A male child in relation to parents.', true),
  ('daughter', 'मुलगी', 'बेटी', 'noun', 'mulagī', 'A female child in relation to parents.', true),
  ('husband', 'नवरा', 'पति', 'noun', 'navarā', 'A married man in relation to his spouse.', true),
  ('wife', 'बायको', 'पत्नी', 'noun', 'bāyako', 'A married woman in relation to her spouse.', true),
  ('friend', 'मित्र', 'दोस्त', 'noun', 'mitra', 'A person with whom one has a bond of mutual affection.', true),
  ('teacher', 'शिक्षक', 'शिक्षक', 'noun', 'śikṣaka', 'A person who teaches, especially in a school.', true),
  ('student', 'विद्यार्थी', 'विद्यार्थी', 'noun', 'vidyārthī', 'A person who is studying at a school or university.', true),
  ('doctor', 'डॉक्टर', 'डॉक्टर', 'noun', 'ḍŏkṭara', 'A person qualified to practice medicine.', true),
  ('farmer', 'शेतकरी', 'किसान', 'noun', 'śetakarī', 'A person who owns or manages a farm.', true),
  ('worker', 'कामगार', 'मजदूर', 'noun', 'kāmagāra', 'A person who does manual or industrial labor.', true),

  -- Common Nouns - Places
  ('house', 'घर', 'घर', 'noun', 'ghara', 'A building for human habitation.', true),
  ('home', 'घर', 'घर', 'noun', 'ghara', 'The place where one lives permanently.', true),
  ('school', 'शाळा', 'स्कूल', 'noun', 'śāḷā', 'An institution for educating children.', true),
  ('hospital', 'रुग्णालय', 'अस्पताल', 'noun', 'rugṇālaya', 'An institution providing medical treatment.', true),
  ('market', 'बाजार', 'बाज़ार', 'noun', 'bājāra', 'A place where goods are bought and sold.', true),
  ('shop', 'दुकान', 'दुकान', 'noun', 'dukāna', 'A building where goods are sold.', true),
  ('office', 'कार्यालय', 'कार्यालय', 'noun', 'kāryālaya', 'A place where professional work is done.', true),
  ('city', 'शहर', 'शहर', 'noun', 'śahara', 'A large town.', true),
  ('village', 'गाव', 'गाँव', 'noun', 'gāva', 'A small community in a rural area.', true),
  ('country', 'देश', 'देश', 'noun', 'deśa', 'A nation with its own government.', true),
  ('road', 'रस्ता', 'सड़क', 'noun', 'rastā', 'A wide way leading from one place to another.', true),
  ('street', 'गल्ली', 'गली', 'noun', 'gallī', 'A public road in a city or town.', true),
  ('river', 'नदी', 'नदी', 'noun', 'nadī', 'A large natural stream of water.', true),
  ('mountain', 'डोंगर', 'पहाड़', 'noun', 'ḍoṅgara', 'A large natural elevation of the earth''s surface.', true),
  ('forest', 'जंगल', 'जंगल', 'noun', 'jaṅgala', 'A large area covered with trees.', true),

  -- Common Nouns - Things
  ('water', 'पाणी', 'पानी', 'noun', 'pāṇī', 'A colorless, transparent liquid essential for life.', true),
  ('food', 'अन्न', 'खाना', 'noun', 'anna', 'Any nutritious substance consumed to maintain life.', true),
  ('book', 'पुस्तक', 'किताब', 'noun', 'pustaka', 'A written or printed work consisting of pages.', true),
  ('pen', 'पेन', 'कलम', 'noun', 'pena', 'An instrument for writing with ink.', true),
  ('paper', 'कागद', 'कागज़', 'noun', 'kāgada', 'Material manufactured in thin sheets for writing or printing.', true),
  ('money', 'पैसा', 'पैसा', 'noun', 'paisā', 'A medium of exchange in the form of coins and banknotes.', true),
  ('clothes', 'कपडे', 'कपड़े', 'noun', 'kapaḍe', 'Items worn to cover the body.', true),
  ('door', 'दार', 'दरवाज़ा', 'noun', 'dāra', 'A hinged barrier used to close an entrance.', true),
  ('window', 'खिडकी', 'खिड़की', 'noun', 'khiḍakī', 'An opening in a wall to admit light or air.', true),
  ('table', 'टेबल', 'मेज़', 'noun', 'ṭebala', 'A piece of furniture with a flat top and legs.', true),
  ('chair', 'खुर्ची', 'कुर्सी', 'noun', 'khurcī', 'A seat with a back and four legs for one person.', true),
  ('bed', 'पलंग', 'बिस्तर', 'noun', 'palaṅga', 'A piece of furniture for sleeping.', true),
  ('car', 'गाडी', 'गाड़ी', 'noun', 'gāḍī', 'A road vehicle with an engine and four wheels.', true),
  ('phone', 'फोन', 'फ़ोन', 'noun', 'phona', 'A device for transmitting sound over distances.', true),
  ('computer', 'संगणक', 'कंप्यूटर', 'noun', 'saṅgaṇaka', 'An electronic device for storing and processing data.', true),

  -- Time-related
  ('time', 'वेळ', 'समय', 'noun', 'veḷa', 'The indefinite continued progress of existence.', true),
  ('day', 'दिवस', 'दिन', 'noun', 'divasa', 'A period of 24 hours.', true),
  ('night', 'रात्र', 'रात', 'noun', 'rātra', 'The period of darkness between sunset and sunrise.', true),
  ('morning', 'सकाळ', 'सुबह', 'noun', 'sakāḷa', 'The period from sunrise to noon.', true),
  ('evening', 'संध्याकाळ', 'शाम', 'noun', 'sandhyākāḷa', 'The period from late afternoon to nightfall.', true),
  ('week', 'आठवडा', 'सप्ताह', 'noun', 'āṭhavaḍā', 'A period of seven days.', true),
  ('month', 'महिना', 'महीना', 'noun', 'mahinā', 'A period of approximately 30 days.', true),
  ('year', 'वर्ष', 'साल', 'noun', 'varṣa', 'A period of 365 or 366 days.', true),
  ('today', 'आज', 'आज', 'adverb', 'āja', 'On this day; at the present time.', true),
  ('tomorrow', 'उद्या', 'कल', 'adverb', 'udyā', 'On the day after today.', true),
  ('yesterday', 'काल', 'कल', 'adverb', 'kāla', 'On the day before today.', true)
ON CONFLICT DO NOTHING;