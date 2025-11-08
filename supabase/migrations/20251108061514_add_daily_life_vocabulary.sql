/*
  # Add Daily Life and Activities Vocabulary

  1. Changes
    - Add vocabulary related to daily activities and routines
    - Food and meals vocabulary
    - Body parts and health
    - Weather and seasons
    - Colors and directions
    - All entries marked as verified

  2. Categories Covered
    - Food and cooking
    - Body parts
    - Health and medicine
    - Weather
    - Colors
    - Directions and positions
*/

INSERT INTO dictionary_entries (english, marathi, hindi, part_of_speech, pronunciation, definition, verified)
VALUES 
  -- Food & Meals
  ('breakfast', 'नाश्ता', 'नाश्ता', 'noun', 'nāśtā', 'The first meal of the day, usually eaten in the morning.', true),
  ('lunch', 'जेवण', 'दोपहर का खाना', 'noun', 'jevaṇa', 'A meal eaten in the middle of the day.', true),
  ('dinner', 'रात्रीचे जेवण', 'रात का खाना', 'noun', 'rātrīce jevaṇa', 'The main meal of the day, eaten in the evening.', true),
  ('rice', 'भात', 'चावल', 'noun', 'bhāta', 'Grains from a cereal plant used as food.', true),
  ('bread', 'पाव', 'रोटी', 'noun', 'pāva', 'Food made of flour, water, and yeast mixed and baked.', true),
  ('milk', 'दूध', 'दूध', 'noun', 'dūdha', 'A white liquid produced by mammals to feed their young.', true),
  ('tea', 'चहा', 'चाय', 'noun', 'cahā', 'A hot drink made by infusing tea leaves in boiling water.', true),
  ('coffee', 'कॉफी', 'कॉफी', 'noun', 'kŏphī', 'A hot drink made from roasted coffee beans.', true),
  ('fruit', 'फळ', 'फल', 'noun', 'phaḷa', 'The sweet product of a tree or plant containing seed.', true),
  ('vegetable', 'भाजी', 'सब्ज़ी', 'noun', 'bhājī', 'A plant or part of a plant used as food.', true),
  ('meat', 'मांस', 'मांस', 'noun', 'māṁsa', 'The flesh of an animal used as food.', true),
  ('fish', 'मासा', 'मछली', 'noun', 'māsā', 'A cold-blooded aquatic animal; its flesh used as food.', true),
  ('egg', 'अंडे', 'अंडा', 'noun', 'aṇḍe', 'An oval object laid by female birds, used as food.', true),
  ('salt', 'मीठ', 'नमक', 'noun', 'mīṭha', 'A white crystalline substance used to season food.', true),
  ('sugar', 'साखर', 'चीनी', 'noun', 'sākhara', 'A sweet crystalline substance obtained from plants.', true),
  ('oil', 'तेल', 'तेल', 'noun', 'tela', 'A viscous liquid used in cooking or lubrication.', true),
  ('spice', 'मसाला', 'मसाला', 'noun', 'masālā', 'An aromatic substance used to flavor food.', true),

  -- Body Parts
  ('body', 'शरीर', 'शरीर', 'noun', 'śarīra', 'The physical structure of a person or animal.', true),
  ('head', 'डोके', 'सिर', 'noun', 'ḍoke', 'The upper part of the body containing the brain.', true),
  ('face', 'चेहरा', 'चेहरा', 'noun', 'cehrā', 'The front part of the head from forehead to chin.', true),
  ('eye', 'डोळा', 'आँख', 'noun', 'ḍoḷā', 'The organ of sight.', true),
  ('ear', 'कान', 'कान', 'noun', 'kāna', 'The organ of hearing.', true),
  ('nose', 'नाक', 'नाक', 'noun', 'nāka', 'The organ of smell projecting above the mouth.', true),
  ('mouth', 'तोंड', 'मुँह', 'noun', 'toṇḍa', 'The opening through which food is taken in.', true),
  ('tooth', 'दात', 'दांत', 'noun', 'dāta', 'One of the hard white structures in the mouth.', true),
  ('tongue', 'जीभ', 'जीभ', 'noun', 'jībha', 'The muscular organ in the mouth used for tasting.', true),
  ('hand', 'हात', 'हाथ', 'noun', 'hāta', 'The end part of the arm beyond the wrist.', true),
  ('finger', 'बोट', 'उंगली', 'noun', 'boṭa', 'Each of the five digits on a hand.', true),
  ('leg', 'पाय', 'पैर', 'noun', 'pāya', 'Each of the limbs used for standing and walking.', true),
  ('foot', 'पाय', 'पैर', 'noun', 'pāya', 'The lower extremity of the leg below the ankle.', true),
  ('heart', 'हृदय', 'दिल', 'noun', 'hṛdaya', 'The organ that pumps blood through the body.', true),
  ('stomach', 'पोट', 'पेट', 'noun', 'poṭa', 'The organ where food is digested.', true),
  ('back', 'पाठ', 'पीठ', 'noun', 'pāṭha', 'The rear surface of the body from shoulders to hips.', true),
  ('skin', 'त्वचा', 'त्वचा', 'noun', 'tvacā', 'The outer covering of the body.', true),
  ('hair', 'केस', 'बाल', 'noun', 'kesa', 'The fine threadlike strands growing from the skin.', true),
  ('blood', 'रक्त', 'खून', 'noun', 'rakta', 'The red liquid that circulates in the body.', true),

  -- Health & Medicine
  ('health', 'आरोग्य', 'स्वास्थ्य', 'noun', 'ārogya', 'The state of being free from illness or injury.', true),
  ('disease', 'रोग', 'बीमारी', 'noun', 'roga', 'A disorder of structure or function in the body.', true),
  ('medicine', 'औषध', 'दवा', 'noun', 'auṣadha', 'A drug or preparation used for treating disease.', true),
  ('pain', 'वेदना', 'दर्द', 'noun', 'vedanā', 'Physical suffering caused by illness or injury.', true),
  ('fever', 'ताप', 'बुखार', 'noun', 'tāpa', 'An abnormally high body temperature.', true),
  ('cold', 'सर्दी', 'सर्दी', 'noun', 'sardī', 'A common viral infection causing sneezing and coughing.', true),
  ('cough', 'खोकला', 'खांसी', 'noun', 'khokalā', 'A sudden expulsion of air from the lungs.', true),
  ('injury', 'दुखापत', 'चोट', 'noun', 'dukhāpata', 'Physical harm or damage to the body.', true),

  -- Weather & Seasons
  ('weather', 'हवामान', 'मौसम', 'noun', 'havāmāna', 'The state of the atmosphere at a place and time.', true),
  ('sun', 'सूर्य', 'सूरज', 'noun', 'sūrya', 'The star around which the earth orbits.', true),
  ('moon', 'चंद्र', 'चाँद', 'noun', 'candra', 'The natural satellite of the earth.', true),
  ('rain', 'पाऊस', 'बारिश', 'noun', 'pāūsa', 'Water falling from clouds in drops.', true),
  ('wind', 'वारा', 'हवा', 'noun', 'vārā', 'Moving air, especially a natural current.', true),
  ('cloud', 'ढग', 'बादल', 'noun', 'ḍhaga', 'A visible mass of water droplets in the atmosphere.', true),
  ('storm', 'वादळ', 'तूफ़ान', 'noun', 'vādaḷa', 'A violent disturbance of the atmosphere with wind and rain.', true),
  ('snow', 'बर्फ', 'बर्फ़', 'noun', 'barpha', 'Frozen water vapor falling in white flakes.', true),
  ('hot', 'गरम', 'गरम', 'adjective', 'garama', 'Having a high temperature.', true),
  ('cold', 'थंड', 'ठंडा', 'adjective', 'thaṇḍa', 'Having a low temperature.', true),
  ('summer', 'उन्हाळा', 'गर्मी', 'noun', 'unhāḷā', 'The warmest season of the year.', true),
  ('winter', 'हिवाळा', 'सर्दी', 'noun', 'hivāḷā', 'The coldest season of the year.', true),
  ('spring', 'वसंत', 'बसंत', 'noun', 'vasanta', 'The season between winter and summer.', true),
  ('autumn', 'शरद', 'शरद', 'noun', 'śarada', 'The season between summer and winter.', true),

  -- Colors
  ('color', 'रंग', 'रंग', 'noun', 'raṅga', 'The property of objects that produces visual sensation.', true),
  ('red', 'लाल', 'लाल', 'adjective', 'lāla', 'Of a color at the end of the spectrum next to orange.', true),
  ('blue', 'निळा', 'नीला', 'adjective', 'niḷā', 'Of a color like the sky on a clear day.', true),
  ('green', 'हिरवा', 'हरा', 'adjective', 'hiravā', 'Of a color between blue and yellow.', true),
  ('yellow', 'पिवळा', 'पीला', 'adjective', 'pivaḷā', 'Of a color like the sun or gold.', true),
  ('white', 'पांढरा', 'सफ़ेद', 'adjective', 'pāṇḍharā', 'Of the color of milk or fresh snow.', true),
  ('black', 'काळा', 'काला', 'adjective', 'kāḷā', 'Of the darkest color; opposite of white.', true),
  ('orange', 'नारिंगी', 'नारंगी', 'adjective', 'nāriṅgī', 'Of a color between red and yellow.', true),
  ('pink', 'गुलाबी', 'गुलाबी', 'adjective', 'gulābī', 'Of a pale red color.', true),
  ('brown', 'तपकिरी', 'भूरा', 'adjective', 'tapakirī', 'Of a color produced by mixing red, yellow, and black.', true),
  ('gray', 'करडा', 'भूरा', 'adjective', 'karaḍā', 'Of a color between black and white.', true),

  -- Directions & Positions
  ('direction', 'दिशा', 'दिशा', 'noun', 'diśā', 'A course along which someone or something moves.', true),
  ('north', 'उत्तर', 'उत्तर', 'noun', 'uttara', 'The direction toward the North Pole.', true),
  ('south', 'दक्षिण', 'दक्षिण', 'noun', 'dakṣiṇa', 'The direction toward the South Pole.', true),
  ('east', 'पूर्व', 'पूर्व', 'noun', 'pūrva', 'The direction toward the point of sunrise.', true),
  ('west', 'पश्चिम', 'पश्चिम', 'noun', 'paścima', 'The direction toward the point of sunset.', true),
  ('left', 'डावा', 'बायाँ', 'adjective', 'ḍāvā', 'On or toward the side of the body to the west when facing north.', true),
  ('right', 'उजवा', 'दायाँ', 'adjective', 'ujavā', 'On or toward the side of the body to the east when facing north.', true),
  ('up', 'वर', 'ऊपर', 'adverb', 'vara', 'Toward a higher place or position.', true),
  ('down', 'खाली', 'नीचे', 'adverb', 'khālī', 'Toward a lower place or position.', true),
  ('front', 'समोर', 'सामने', 'noun', 'samora', 'The side or part that faces forward.', true),
  ('back', 'मागे', 'पीछे', 'adverb', 'māge', 'In the opposite direction from the one being faced.', true),
  ('inside', 'आत', 'अंदर', 'adverb', 'āta', 'On the inner side or surface of something.', true),
  ('outside', 'बाहेर', 'बाहर', 'adverb', 'bāhera', 'On or to the outer side; not inside.', true),
  ('near', 'जवळ', 'पास', 'preposition', 'javaḷa', 'At a short distance from; close to.', true),
  ('far', 'दूर', 'दूर', 'adjective', 'dūra', 'At a great distance in space or time.', true)
ON CONFLICT DO NOTHING;