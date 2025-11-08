/*
  # Add Emotions and Descriptions Vocabulary

  1. Changes
    - Add vocabulary for emotions and feelings
    - Descriptive adjectives for appearance and character
    - Size, quantity, and quality descriptors
    - Abstract concepts and states
    - All entries marked as verified

  2. Categories Covered
    - Emotions and feelings
    - Character and personality
    - Physical descriptions
    - Size and quantity
    - Quality descriptors
    - Abstract concepts
*/

INSERT INTO dictionary_entries (english, marathi, hindi, part_of_speech, pronunciation, definition, verified)
VALUES 
  -- Emotions & Feelings
  ('happy', 'आनंदी', 'खुश', 'adjective', 'ānandī', 'Feeling or showing pleasure or contentment.', true),
  ('sad', 'दुःखी', 'उदास', 'adjective', 'duḥkhī', 'Feeling or showing sorrow; unhappy.', true),
  ('angry', 'रागावलेला', 'गुस्सा', 'adjective', 'rāgāvalelā', 'Having a strong feeling of displeasure.', true),
  ('afraid', 'घाबरलेला', 'डरा हुआ', 'adjective', 'ghābaralelā', 'Feeling fear or anxiety; frightened.', true),
  ('excited', 'उत्साहित', 'उत्साहित', 'adjective', 'utsāhita', 'Feeling very enthusiastic and eager.', true),
  ('worried', 'काळजीत', 'चिंतित', 'adjective', 'kāḷajīta', 'Anxious or troubled about actual or potential problems.', true),
  ('tired', 'थकलेला', 'थका हुआ', 'adjective', 'thakalelā', 'In need of sleep or rest; weary.', true),
  ('hungry', 'भुकेला', 'भूखा', 'adjective', 'bhukelā', 'Feeling a need or desire to eat.', true),
  ('thirsty', 'तहानलेला', 'प्यासा', 'adjective', 'tahānalelā', 'Feeling a need to drink.', true),
  ('surprised', 'आश्चर्यचकित', 'हैरान', 'adjective', 'āścaryacakita', 'Feeling or showing surprise.', true),
  ('confused', 'गोंधळलेला', 'भ्रमित', 'adjective', 'gondhaḷalelā', 'Unable to think clearly; bewildered.', true),
  ('proud', 'अभिमानी', 'गर्वित', 'adjective', 'abhimānī', 'Feeling deep pleasure or satisfaction.', true),
  ('jealous', 'मत्सर', 'ईर्ष्यालु', 'adjective', 'matsara', 'Feeling envy of someone or their achievements.', true),
  ('lonely', 'एकटा', 'अकेला', 'adjective', 'ekaṭā', 'Sad because one has no friends or company.', true),
  ('bored', 'कंटाळलेला', 'ऊबा हुआ', 'adjective', 'kaṇṭāḷalelā', 'Feeling weary because of lack of interest.', true),
  ('nervous', 'चिंताग्रस्त', 'घबराया', 'adjective', 'cintāgrasta', 'Easily agitated or alarmed; anxious.', true),
  ('calm', 'शांत', 'शांत', 'adjective', 'śānta', 'Not showing or feeling nervousness or anger.', true),
  ('brave', 'धैर्यवान', 'बहादुर', 'adjective', 'dhairyavāna', 'Ready to face danger or pain; showing courage.', true),
  ('kind', 'दयाळू', 'दयालु', 'adjective', 'dayāḷū', 'Having or showing a friendly and generous nature.', true),
  ('cruel', 'क्रूर', 'क्रूर', 'adjective', 'krūra', 'Willfully causing pain or suffering to others.', true),

  -- Character & Personality
  ('good', 'चांगला', 'अच्छा', 'adjective', 'cāṅgalā', 'Of a high quality or standard; morally right.', true),
  ('bad', 'वाईट', 'बुरा', 'adjective', 'vāīṭa', 'Of poor quality; not good.', true),
  ('honest', 'प्रामाणिक', 'ईमानदार', 'adjective', 'prāmāṇika', 'Free of deceit; truthful and sincere.', true),
  ('smart', 'हुशार', 'चालाक', 'adjective', 'huśāra', 'Having intelligence or quick-wittedness.', true),
  ('stupid', 'मूर्ख', 'बेवकूफ़', 'adjective', 'mūrkha', 'Lacking intelligence or common sense.', true),
  ('lazy', 'आळशी', 'आलसी', 'adjective', 'āḷaśī', 'Unwilling to work or use energy.', true),
  ('hardworking', 'मेहनती', 'मेहनती', 'adjective', 'mehanatī', 'Tending to work with energy and commitment.', true),
  ('polite', 'सभ्य', 'विनम्र', 'adjective', 'sabhya', 'Having good manners; respectful and considerate.', true),
  ('rude', 'उद्धट', 'असभ्य', 'adjective', 'uddhaṭa', 'Offensively impolite or ill-mannered.', true),
  ('wise', 'शहाणा', 'बुद्धिमान', 'adjective', 'śahāṇā', 'Having or showing experience and good judgment.', true),
  ('foolish', 'मूर्ख', 'मूर्ख', 'adjective', 'mūrkha', 'Lacking good sense or judgment.', true),
  ('patient', 'धीरगंभीर', 'धैर्यवान', 'adjective', 'dhīragambhīra', 'Able to accept delay or suffering without complaint.', true),
  ('greedy', 'लोभी', 'लालची', 'adjective', 'lobhī', 'Having an excessive desire for wealth or possessions.', true),
  ('generous', 'उदार', 'उदार', 'adjective', 'udāra', 'Showing willingness to give more than necessary.', true),
  ('selfish', 'स्वार्थी', 'स्वार्थी', 'adjective', 'svārthī', 'Concerned chiefly with one''s own advantage.', true),

  -- Physical Descriptions
  ('beautiful', 'सुंदर', 'सुंदर', 'adjective', 'sundara', 'Pleasing to the senses or mind aesthetically.', true),
  ('ugly', 'कुरूप', 'बदसूरत', 'adjective', 'kurūpa', 'Unpleasant or repulsive in appearance.', true),
  ('handsome', 'देखणा', 'सुंदर', 'adjective', 'dekhṇā', 'Attractive in a strong, dignified way.', true),
  ('pretty', 'सुंदर', 'सुंदर', 'adjective', 'sundara', 'Attractive in a delicate way.', true),
  ('tall', 'उंच', 'लंबा', 'adjective', 'uñca', 'Of great or more than average height.', true),
  ('short', 'लहान', 'छोटा', 'adjective', 'lahāna', 'Of a small height; not tall.', true),
  ('fat', 'जाड', 'मोटा', 'adjective', 'jāḍa', 'Having too much flesh; overweight.', true),
  ('thin', 'पातळ', 'पतला', 'adjective', 'pātaḷa', 'Having little flesh or fat on the body.', true),
  ('strong', 'बलवान', 'मजबूत', 'adjective', 'balavāna', 'Having physical power and ability.', true),
  ('weak', 'कमकुवत', 'कमज़ोर', 'adjective', 'kamakuvata', 'Lacking physical strength or energy.', true),
  ('young', 'तरुण', 'जवान', 'adjective', 'taruṇa', 'Having lived or existed for only a short time.', true),
  ('old', 'म्हातारा', 'बूढ़ा', 'adjective', 'mhātārā', 'Having lived for a long time; no longer young.', true),
  ('clean', 'स्वच्छ', 'साफ़', 'adjective', 'svaccha', 'Free from dirt, marks, or stains.', true),
  ('dirty', 'घाणेरडा', 'गंदा', 'adjective', 'ghāṇeraḍā', 'Covered or marked with dirt.', true),

  -- Size & Quantity
  ('big', 'मोठा', 'बड़ा', 'adjective', 'moṭhā', 'Of considerable size or extent.', true),
  ('small', 'लहान', 'छोटा', 'adjective', 'lahāna', 'Of a size that is less than normal.', true),
  ('large', 'विशाल', 'विशाल', 'adjective', 'viśāla', 'Of considerable or relatively great size.', true),
  ('tiny', 'लहानसा', 'नन्हा', 'adjective', 'lahānasā', 'Very small.', true),
  ('huge', 'अवाढव्य', 'विशाल', 'adjective', 'avāḍhavya', 'Extremely large; enormous.', true),
  ('heavy', 'जड', 'भारी', 'adjective', 'jaḍa', 'Of great weight; difficult to lift or move.', true),
  ('light', 'हलका', 'हल्का', 'adjective', 'halakā', 'Of little weight; not heavy.', true),
  ('long', 'लांब', 'लंबा', 'adjective', 'lāmba', 'Measuring a great distance from end to end.', true),
  ('wide', 'रुंद', 'चौड़ा', 'adjective', 'runda', 'Of great extent from side to side; broad.', true),
  ('narrow', 'अरुंद', 'संकीर्ण', 'adjective', 'arunda', 'Of small width in relation to length.', true),
  ('thick', 'जाड', 'मोटा', 'adjective', 'jāḍa', 'With opposite sides relatively far apart.', true),
  ('deep', 'खोल', 'गहरा', 'adjective', 'khola', 'Extending far down from the top or surface.', true),
  ('shallow', 'उथळ', 'उथला', 'adjective', 'uthaḷa', 'Of little depth.', true),
  ('many', 'अनेक', 'बहुत', 'determiner', 'aneka', 'A large number of.', true),
  ('few', 'थोडे', 'कुछ', 'determiner', 'thoḍe', 'A small number of.', true),
  ('much', 'भरपूर', 'बहुत', 'determiner', 'bharapūra', 'A large amount.', true),
  ('little', 'थोडा', 'थोड़ा', 'determiner', 'thoḍā', 'Small in size, amount, or degree.', true),
  ('all', 'सर्व', 'सब', 'determiner', 'sarva', 'The whole quantity or extent of.', true),
  ('some', 'काही', 'कुछ', 'determiner', 'kāhī', 'An unspecified amount or number of.', true),
  ('none', 'काहीही नाही', 'कोई नहीं', 'pronoun', 'kāhīhī nāhī', 'Not any; no one.', true),

  -- Quality Descriptors
  ('new', 'नवीन', 'नया', 'adjective', 'navīna', 'Not existing before; recently created or acquired.', true),
  ('fresh', 'ताजा', 'ताज़ा', 'adjective', 'tājā', 'Recently made or obtained; not stale.', true),
  ('easy', 'सोपा', 'आसान', 'adjective', 'sopā', 'Achieved without great effort; not difficult.', true),
  ('difficult', 'कठीण', 'मुश्किल', 'adjective', 'kaṭhīṇa', 'Needing much effort or skill; hard.', true),
  ('hard', 'कठीण', 'कठिन', 'adjective', 'kaṭhīṇa', 'Solid and resistant to pressure; difficult.', true),
  ('soft', 'मऊ', 'नरम', 'adjective', 'maū', 'Easy to mold or compress; not hard.', true),
  ('fast', 'जलद', 'तेज़', 'adjective', 'jalada', 'Moving or capable of moving at high speed.', true),
  ('slow', 'मंद', 'धीमा', 'adjective', 'manda', 'Moving at a low speed; not fast.', true),
  ('quick', 'त्वरित', 'जल्दी', 'adjective', 'tvarita', 'Moving fast or doing something rapidly.', true),
  ('loud', 'मोठ्याने', 'ज़ोर से', 'adjective', 'moṭhyāne', 'Producing much noise; not quiet.', true),
  ('quiet', 'शांत', 'शांत', 'adjective', 'śānta', 'Making little or no noise.', true),
  ('bright', 'तेजस्वी', 'चमकीला', 'adjective', 'tejasvī', 'Giving out or reflecting much light.', true),
  ('dark', 'गडद', 'अंधेरा', 'adjective', 'gaḍada', 'With little or no light.', true),
  ('rich', 'श्रीमंत', 'अमीर', 'adjective', 'śrīmanta', 'Having a great deal of money or assets.', true),
  ('poor', 'गरीब', 'ग़रीब', 'adjective', 'garība', 'Lacking sufficient money to live comfortably.', true),
  ('cheap', 'स्वस्त', 'सस्ता', 'adjective', 'svasta', 'Low in price; inexpensive.', true),
  ('expensive', 'महाग', 'महंगा', 'adjective', 'mahāga', 'Costing a lot of money.', true),
  ('full', 'भरलेला', 'भरा', 'adjective', 'bharalelā', 'Containing as much as possible; not empty.', true),
  ('empty', 'रिकामा', 'खाली', 'adjective', 'rikāmā', 'Containing nothing; not filled.', true),
  ('open', 'उघडा', 'खुला', 'adjective', 'ughaḍā', 'Not closed or fastened; accessible.', true),
  ('closed', 'बंद', 'बंद', 'adjective', 'banda', 'Not open; shut.', true),

  -- Abstract Concepts
  ('life', 'जीवन', 'जीवन', 'noun', 'jīvana', 'The condition that distinguishes living organisms.', true),
  ('death', 'मृत्यू', 'मृत्यु', 'noun', 'mṛtyū', 'The end of life; the permanent cessation of vital functions.', true),
  ('birth', 'जन्म', 'जन्म', 'noun', 'janma', 'The emergence of a baby from the body of its mother.', true),
  ('truth', 'सत्य', 'सच', 'noun', 'satya', 'The quality or state of being in accordance with fact.', true),
  ('lie', 'खोटे', 'झूठ', 'noun', 'khoṭe', 'An intentionally false statement.', true),
  ('peace', 'शांती', 'शांति', 'noun', 'śāntī', 'Freedom from disturbance; tranquility.', true),
  ('war', 'युद्ध', 'युद्ध', 'noun', 'yuddha', 'A state of armed conflict between nations or groups.', true),
  ('freedom', 'स्वातंत्र्य', 'आज़ादी', 'noun', 'svātantrya', 'The power to act, speak, or think without restraint.', true),
  ('power', 'शक्ती', 'शक्ति', 'noun', 'śaktī', 'The ability to do something or act in a particular way.', true),
  ('knowledge', 'ज्ञान', 'ज्ञान', 'noun', 'jñāna', 'Facts, information, and skills acquired through experience.', true),
  ('wisdom', 'बुद्धी', 'बुद्धि', 'noun', 'buddhī', 'The quality of having experience and good judgment.', true),
  ('question', 'प्रश्न', 'सवाल', 'noun', 'praśna', 'A sentence worded to elicit information.', true),
  ('answer', 'उत्तर', 'जवाब', 'noun', 'uttara', 'A spoken or written response to a question.', true),
  ('problem', 'समस्या', 'समस्या', 'noun', 'samasyā', 'A matter or situation regarded as unwelcome or harmful.', true),
  ('solution', 'उपाय', 'समाधान', 'noun', 'upāya', 'A means of solving a problem or dealing with a situation.', true)
ON CONFLICT DO NOTHING;