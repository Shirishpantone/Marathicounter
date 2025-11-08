/*
  # Add Nature, Places, and Objects Vocabulary

  1. Changes
    - Add vocabulary related to nature and environment
    - Animals, birds, and insects
    - Plants and trees
    - Buildings and structures
    - Transportation and vehicles
    - Technology and modern items
    - All entries marked as verified

  2. Categories Covered
    - Animals and creatures
    - Plants and nature
    - Buildings and places
    - Transportation
    - Technology and tools
    - Household items
*/

INSERT INTO dictionary_entries (english, marathi, hindi, part_of_speech, pronunciation, definition, verified)
VALUES 
  -- Animals & Creatures
  ('animal', 'प्राणी', 'जानवर', 'noun', 'prāṇī', 'A living organism that feeds on organic matter.', true),
  ('dog', 'कुत्रा', 'कुत्ता', 'noun', 'kutrā', 'A domesticated carnivorous mammal kept as a pet.', true),
  ('cat', 'मांजर', 'बिल्ली', 'noun', 'māñjara', 'A small domesticated carnivorous mammal.', true),
  ('cow', 'गाय', 'गाय', 'noun', 'gāya', 'A large domesticated ungulate kept for milk or meat.', true),
  ('buffalo', 'म्हैस', 'भैंस', 'noun', 'mhaisa', 'A large bovine animal with backward-curving horns.', true),
  ('horse', 'घोडा', 'घोड़ा', 'noun', 'ghoḍā', 'A large domesticated mammal used for riding or work.', true),
  ('elephant', 'हत्ती', 'हाथी', 'noun', 'hattī', 'A very large mammal with a trunk and tusks.', true),
  ('lion', 'सिंह', 'शेर', 'noun', 'siṁha', 'A large tawny-colored cat living in prides.', true),
  ('tiger', 'वाघ', 'बाघ', 'noun', 'vāgha', 'A large predatory cat with a yellow-orange coat with black stripes.', true),
  ('monkey', 'माकड', 'बंदर', 'noun', 'mākaḍa', 'A primate typically with a long tail.', true),
  ('snake', 'साप', 'साँप', 'noun', 'sāpa', 'A long limbless reptile.', true),
  ('bird', 'पक्षी', 'पक्षी', 'noun', 'pakṣī', 'A warm-blooded vertebrate with feathers and wings.', true),
  ('crow', 'कावळा', 'कौआ', 'noun', 'kāvaḷā', 'A large black bird with a harsh call.', true),
  ('parrot', 'पोपट', 'तोता', 'noun', 'popaṭa', 'A bird with a curved bill and brightly colored plumage.', true),
  ('peacock', 'मोर', 'मोर', 'noun', 'mora', 'A large colorful bird with a long tail.', true),
  ('sparrow', 'चिमणी', 'गौरैया', 'noun', 'cimaṇī', 'A small bird with brown and gray plumage.', true),
  ('butterfly', 'फुलपाखरू', 'तितली', 'noun', 'phulapākharū', 'An insect with large colorful wings.', true),
  ('bee', 'मधमाशी', 'मधुमक्खी', 'noun', 'madhamāśī', 'A flying insect that collects nectar and produces honey.', true),
  ('ant', 'मुंगी', 'चींटी', 'noun', 'muṅgī', 'A small insect living in organized colonies.', true),
  ('mosquito', 'डास', 'मच्छर', 'noun', 'ḍāsa', 'A slender long-legged fly that bites and sucks blood.', true),
  ('spider', 'कोळी', 'मकड़ी', 'noun', 'koḷī', 'An eight-legged creature that spins webs.', true),
  ('frog', 'बेडूक', 'मेंढक', 'noun', 'beḍūka', 'A tailless amphibian with a short squat body.', true),
  ('rat', 'उंदीर', 'चूहा', 'noun', 'undīra', 'A rodent resembling a large mouse.', true),
  ('goat', 'बकरी', 'बकरी', 'noun', 'bakarī', 'A domesticated ruminant mammal with horns.', true),
  ('sheep', 'मेंढी', 'भेड़', 'noun', 'meṇḍhī', 'A domesticated ruminant mammal with a thick woolly coat.', true),
  ('pig', 'डुक्कर', 'सुअर', 'noun', 'ḍukkara', 'An omnivorous domesticated mammal with a snout.', true),
  ('chicken', 'कोंबडी', 'मुर्गी', 'noun', 'kombaḍī', 'A domestic fowl kept for eggs or meat.', true),
  ('duck', 'बदक', 'बत्तख', 'noun', 'badaka', 'A waterbird with a broad bill and webbed feet.', true),

  -- Plants & Nature
  ('tree', 'झाड', 'पेड़', 'noun', 'zhāḍa', 'A woody perennial plant with a trunk and branches.', true),
  ('plant', 'रोप', 'पौधा', 'noun', 'ropa', 'A living organism that grows in the earth.', true),
  ('flower', 'फूल', 'फूल', 'noun', 'phūla', 'The reproductive structure of flowering plants.', true),
  ('leaf', 'पान', 'पत्ता', 'noun', 'pāna', 'A flattened structure of a plant growing from a stem.', true),
  ('grass', 'गवत', 'घास', 'noun', 'gavata', 'Vegetation consisting of typically short plants.', true),
  ('seed', 'बी', 'बीज', 'noun', 'bī', 'The unit of reproduction of a flowering plant.', true),
  ('root', 'मूळ', 'जड़', 'noun', 'mūḷa', 'The part of a plant that attaches it to the ground.', true),
  ('branch', 'फांदी', 'शाखा', 'noun', 'phāndī', 'A part of a tree that grows out from the trunk.', true),
  ('fruit', 'फळ', 'फल', 'noun', 'phaḷa', 'The sweet product of a tree or plant containing seed.', true),
  ('garden', 'बाग', 'बगीचा', 'noun', 'bāga', 'A piece of ground for growing flowers or vegetables.', true),
  ('field', 'शेत', 'खेत', 'noun', 'śeta', 'An area of open land for cultivation.', true),
  ('farm', 'शेत', 'खेत', 'noun', 'śeta', 'An area of land for growing crops or raising animals.', true),
  ('stone', 'दगड', 'पत्थर', 'noun', 'dagaḍa', 'Hard solid non-metallic mineral matter.', true),
  ('sand', 'वाळू', 'रेत', 'noun', 'vāḷū', 'Loose granular substance from rock erosion.', true),
  ('mud', 'चिखल', 'कीचड़', 'noun', 'cikhala', 'Soft wet earth.', true),
  ('soil', 'माती', 'मिट्टी', 'noun', 'mātī', 'The upper layer of earth in which plants grow.', true),
  ('sky', 'आकाश', 'आकाश', 'noun', 'ākāśa', 'The region of atmosphere seen from earth.', true),
  ('star', 'तारा', 'तारा', 'noun', 'tārā', 'A fixed luminous point in the night sky.', true),
  ('earth', 'पृथ्वी', 'पृथ्वी', 'noun', 'pṛthvī', 'The planet on which we live.', true),
  ('fire', 'आग', 'आग', 'noun', 'āga', 'Combustion producing heat and light.', true),
  ('smoke', 'धूर', 'धुआँ', 'noun', 'dhūra', 'Visible vapor from burning material.', true),
  ('air', 'हवा', 'हवा', 'noun', 'havā', 'The invisible gaseous substance surrounding the earth.', true),
  ('light', 'प्रकाश', 'रोशनी', 'noun', 'prakāśa', 'Natural agent that stimulates sight.', true),
  ('shadow', 'सावली', 'छाया', 'noun', 'sāvalī', 'A dark area where light is blocked.', true),
  ('sea', 'समुद्र', 'समुद्र', 'noun', 'samudra', 'The expanse of salt water covering most of the earth.', true),
  ('ocean', 'महासागर', 'महासागर', 'noun', 'mahāsāgara', 'A very large expanse of sea.', true),
  ('lake', 'तळे', 'झील', 'noun', 'taḷe', 'A large body of water surrounded by land.', true),
  ('pond', 'तळे', 'तालाब', 'noun', 'taḷe', 'A small body of still water.', true),
  ('well', 'विहीर', 'कुआँ', 'noun', 'vihīra', 'A deep hole dug to obtain water.', true),

  -- Buildings & Structures
  ('building', 'इमारत', 'इमारत', 'noun', 'imārata', 'A structure with walls and a roof.', true),
  ('temple', 'मंदिर', 'मंदिर', 'noun', 'mandira', 'A building devoted to worship of a deity.', true),
  ('church', 'चर्च', 'गिरजा', 'noun', 'carca', 'A building used for Christian worship.', true),
  ('mosque', 'मशीद', 'मस्जिद', 'noun', 'maśīda', 'A Muslim place of worship.', true),
  ('bridge', 'पूल', 'पुल', 'noun', 'pūla', 'A structure carrying a road across a river or obstacle.', true),
  ('wall', 'भिंत', 'दीवार', 'noun', 'bhinta', 'A continuous vertical structure forming a building''s side.', true),
  ('roof', 'छत', 'छत', 'noun', 'chata', 'The structure covering the top of a building.', true),
  ('floor', 'मजला', 'फर्श', 'noun', 'majalā', 'The lower surface of a room.', true),
  ('room', 'खोली', 'कमरा', 'noun', 'kholī', 'A part or division of a building enclosed by walls.', true),
  ('kitchen', 'स्वयंपाकघर', 'रसोई', 'noun', 'svayampākghara', 'A room where food is prepared and cooked.', true),
  ('bathroom', 'स्नानगृह', 'स्नानघर', 'noun', 'snānagṛha', 'A room containing a bath or shower.', true),
  ('stairs', 'पायऱ्या', 'सीढ़ियाँ', 'noun', 'pāyaṟyā', 'A set of steps leading from one floor to another.', true),
  ('gate', 'दरवाजा', 'फाटक', 'noun', 'daravājā', 'A hinged barrier used to close an opening in a wall.', true),
  ('fence', 'कुंपण', 'बाड़', 'noun', 'kumpaṇa', 'A barrier enclosing an area.', true),

  -- Transportation & Vehicles
  ('vehicle', 'वाहन', 'वाहन', 'noun', 'vāhana', 'A thing used for transporting people or goods.', true),
  ('bus', 'बस', 'बस', 'noun', 'basa', 'A large motor vehicle for carrying passengers.', true),
  ('train', 'रेल्वे', 'रेलगाड़ी', 'noun', 'relve', 'A series of connected railway carriages.', true),
  ('airplane', 'विमान', 'हवाई जहाज़', 'noun', 'vimāna', 'A powered flying vehicle with fixed wings.', true),
  ('ship', 'जहाज', 'जहाज़', 'noun', 'jahāja', 'A large boat for transporting people or goods by sea.', true),
  ('boat', 'बोट', 'नाव', 'noun', 'boṭa', 'A small vessel for traveling on water.', true),
  ('bicycle', 'सायकल', 'साइकिल', 'noun', 'sāyakala', 'A vehicle with two wheels propelled by pedals.', true),
  ('motorcycle', 'मोटारसायकल', 'मोटरसाइकिल', 'noun', 'moṭārasāyakala', 'A two-wheeled vehicle powered by a motor.', true),
  ('rickshaw', 'रिक्षा', 'रिक्शा', 'noun', 'rikṣā', 'A light two-wheeled vehicle pulled by a person or motor.', true),
  ('taxi', 'टॅक्सी', 'टैक्सी', 'noun', 'ṭĕksī', 'A car licensed to transport passengers for payment.', true),
  ('truck', 'ट्रक', 'ट्रक', 'noun', 'ṭraka', 'A large motor vehicle for transporting goods.', true),
  ('wheel', 'चाक', 'पहिया', 'noun', 'cāka', 'A circular object that revolves on an axle.', true),
  ('engine', 'इंजिन', 'इंजन', 'noun', 'iñjina', 'A machine with moving parts that converts power into motion.', true),

  -- Technology & Tools
  ('machine', 'यंत्र', 'मशीन', 'noun', 'yantra', 'An apparatus using mechanical power.', true),
  ('tool', 'हत्यार', 'औज़ार', 'noun', 'hatyāra', 'A device used to carry out a function.', true),
  ('telephone', 'दूरध्वनी', 'टेलीफोन', 'noun', 'dūradhvanī', 'A device for transmitting sound over distances.', true),
  ('television', 'दूरदर्शन', 'टेलीविज़न', 'noun', 'dūradarśana', 'A device for receiving broadcast pictures and sound.', true),
  ('radio', 'रेडिओ', 'रेडियो', 'noun', 'reḍio', 'A device for receiving radio broadcasts.', true),
  ('camera', 'कॅमेरा', 'कैमरा', 'noun', 'kĕmerā', 'A device for recording visual images.', true),
  ('watch', 'घड्याळ', 'घड़ी', 'noun', 'ghaḍyāḷa', 'A small timepiece worn on the wrist.', true),
  ('clock', 'घड्याळ', 'घड़ी', 'noun', 'ghaḍyāḷa', 'An instrument for measuring and indicating time.', true),
  ('fan', 'पंखा', 'पंखा', 'noun', 'pankhā', 'A device with rotating blades for creating a current of air.', true),
  ('light bulb', 'बल्ब', 'बल्ब', 'noun', 'balba', 'A glass bulb producing light from electricity.', true),
  ('key', 'चावी', 'चाबी', 'noun', 'cāvī', 'A small metal instrument for operating a lock.', true),
  ('lock', 'कुलूप', 'ताला', 'noun', 'kulūpa', 'A mechanism for keeping a door closed.', true),
  ('knife', 'सुरी', 'चाकू', 'noun', 'surī', 'A sharp blade with a handle used for cutting.', true),
  ('spoon', 'चमचा', 'चम्मच', 'noun', 'camacā', 'A utensil with a shallow bowl for eating or serving.', true),
  ('plate', 'ताट', 'प्लेट', 'noun', 'tāṭa', 'A flat dish for holding food.', true),
  ('cup', 'कप', 'कप', 'noun', 'kapa', 'A small bowl-shaped container for drinking.', true),
  ('glass', 'ग्लास', 'गिलास', 'noun', 'glāsa', 'A container for drinking made of glass.', true),
  ('bottle', 'बाटली', 'बोतल', 'noun', 'bāṭalī', 'A container with a narrow neck for storing liquids.', true),
  ('box', 'पेटी', 'डिब्बा', 'noun', 'peṭī', 'A container with a flat base and sides.', true),
  ('bag', 'पिशवी', 'थैला', 'noun', 'piśavī', 'A flexible container with an opening at the top.', true),
  ('rope', 'दोरी', 'रस्सी', 'noun', 'dorī', 'A length of strong cord made by twisting fibers.', true),
  ('stick', 'काठी', 'छड़ी', 'noun', 'kāṭhī', 'A thin piece of wood.', true),
  ('ball', 'चेंडू', 'गेंद', 'noun', 'ceṇḍū', 'A spherical object used in games.', true),
  ('toy', 'खेळणी', 'खिलौना', 'noun', 'kheḷaṇī', 'An object for children to play with.', true),
  ('gift', 'भेट', 'उपहार', 'noun', 'bheṭa', 'A thing given willingly without payment.', true),
  ('picture', 'चित्र', 'तस्वीर', 'noun', 'citra', 'A painting, drawing, or photograph.', true),
  ('mirror', 'आरसा', 'आईना', 'noun', 'ārasā', 'A reflective surface for viewing one''s image.', true),
  ('umbrella', 'छत्री', 'छाता', 'noun', 'chatrī', 'A device for protection from rain or sun.', true),
  ('shoe', 'बूट', 'जूता', 'noun', 'būṭa', 'A covering for the foot with a sturdy sole.', true),
  ('ring', 'अंगठी', 'अंगूठी', 'noun', 'aṅgaṭhī', 'A circular band worn on a finger.', true),
  ('cloth', 'कापड', 'कपड़ा', 'noun', 'kāpaḍa', 'Woven or felted fabric made from fibers.', true)
ON CONFLICT DO NOTHING;