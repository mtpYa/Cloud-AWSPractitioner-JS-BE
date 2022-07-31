DROP TABLE IF EXISTS products;

DROP TABLE IF EXISTS stocks;

CREATE TABLE products (
  id UUID NOT NULL,
  title VARCHAR(50) NOT NULL,
  price INT NOT NULL,
  description TEXT DEFAULT 'No description',
  imageurl VARCHAR(100) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE stocks (
  product_id UUID NOT NULL,
  count INT NOT NULL,
  PRIMARY KEY(product_id)
);

INSERT INTO products (id, title, price, description, imageurl)
  VALUES
    (
      '7567ec4b-b10c-48c5-9345-fc73c48a80aa',
      'Acme Animation Factory',
      12,
      'Acme Animation Factory is an educational art and graphics video game released by Sunsoft in November 1994 for the Super Nintendo Entertainment System.',
      'http://d2e95wycmne81n.cloudfront.net/ACME_Animation_Factory_Coverart.png'
    ),
    (
      '7567ec4b-b10c-48c5-9345-fc73c48a80a1',
      'Animaniacs',
      16,
      'Animaniacs is a series of platform video games developed by Konami, based on the animated series of the same name. Two games were developed featuring significantly different gameplay and storylines; one for Super Nintendo Entertainment System, and one for the Sega Mega Drive/Genesis and Game Boy.',
      'http://d2e95wycmne81n.cloudfront.net/Animaniacs_SNES_cover_art.jpg'
    ),
    (
      '7567ec4b-b10c-48c5-9345-fc73c48a80a3',
      'Battle Blaze',
      14,
      'Battle Blaze is a 1992 medieval fighting game released for the Super Nintendo Entertainment System by Sammy Studios. Players use swords, morningstars, knives, and other weapons to beat up their opponents. The player can either play in a colosseum or on a quest. The eventual goal is defeat the Dark Lord who lives in a castle in the sky.',
      'http://d2e95wycmne81n.cloudfront.net/Battle_Blaze_Coverart.png'
    ),
    (
      '7567ec4b-b10c-48c5-9345-fc73348a80a1',
      'Battletoads in Battlemaniacs',
      18,
      'Battletoads in Battlemaniacs is a 1993 platforming beat ''em up video game developed by Rare and published by Tradewest for the Super Nintendo Entertainment System, part of the Battletoads series. The game was released in North America in June 1993, in Europe in October 1993 and in Japan on January 7, 1994. It was also ported for the Sega Master System and released exclusively in Brazil. It was released around the same time as Battletoads & Double Dragon, another installment in the series.',
      'http://d2e95wycmne81n.cloudfront.net/Battletoads_in_Battlemaniacs.png'
    ),
    (
      '7567ec4b-b10c-48c5-9445-fc73c48a80a2',
      'Chrono Trigger',
      21,
      'Chrono Trigger is a 1995 role-playing video game developed and published by Square. It was originally released for the Super Nintendo Entertainment System as the first game in the Chrono series. The game''s development team included three designers that Square dubbed the ''Dream Team'': Hironobu Sakaguchi, creator of Square''s Final Fantasy series; Yuji Horii, creator of Enix''s Dragon Quest series; and Akira Toriyama, character designer of Dragon Quest and author of the Dragon Ball manga series.',
      'http://d2e95wycmne81n.cloudfront.net/Chrono_Trigger.jpg'
    ),
    (
      '7567ec4b-b10c-45c5-9345-fc73c48a80a1',
      'Demon''s Crest',
      10,
      'Demon''s Crest, known in Japan as Demon''s Blazon,it is a side-scrolling platform video game developed and published by Capcom for the Super Nintendo Entertainment System. It is the third video game starring Firebrand (an enemy character from the Ghosts ''n Goblins series, known as ''Red Arremer'' in the Japanese version), following Gargoyle''s Quest and Gargoyle''s Quest II.',
      'http://d2e95wycmne81n.cloudfront.net/Demonscrest_us.jpg'
    ),
    (
      '7563ec4b-b11c-48c5-9435-fc73c48a12a2',
      'Double Dragon V: The Shadow Falls',
      16,
      'Double Dragon V: The Shadow Falls is a fighting game developed by Leland Interactive Media and published by Tradewest for the Super Nintendo Entertainment System and Sega Genesis in 1994. It was later released for the Atari Jaguar by Telegames the following year.',
      'http://d2e95wycmne81n.cloudfront.net/SNES_Double_Dragon_V_-_The_Shadow_Falls_cover_art.jpg'
    ),
    (
      '7267ec4b-b11c-45c5-9348-fc73c48a00a1',
      'F-Zero',
      12,
      'F-Zero is a futuristic racing video game developed by Nintendo EAD and published by Nintendo for the Super Nintendo Entertainment System (SNES). The game was released in Japan on November 21, 1990, in North America in August 1991, and in Europe in 1992. F-Zero is the first game of the F-Zero series, and was a launch title for the SNES.',
      'http://d2e95wycmne81n.cloudfront.net/SNES_F-Zero_boxart.jpg'
    ),
    (
      '7527ec4b-b14c-48c5-9315-fc73c48a89a1',
      'HyperZone',
      23,
      'HyperZone is a rail shooter video game developed and published by HAL Laboratory for the Super Nintendo Entertainment System (SNES). It used the SNES'' Mode 7 capability.',
      'http://d2e95wycmne81n.cloudfront.net/HyperZone_box_art.JPG'
    ),
    (
      '4567ec4b-b20c-48c5-9645-fc73c49a80a3',
      'Kirby Super Star',
      22,
      'Kirby Super Star, released as Kirby''s Fun Pak in PAL regions, is a platform video game developed by HAL Laboratory and published by Nintendo for the Super Nintendo Entertainment System in 1996. It is part of the Kirby series of video games by HAL Laboratory.',
      'http://d2e95wycmne81n.cloudfront.net/Kirby_Super_Star_Coverart.png'
    );

INSERT INTO stocks (product_id, count)
  VALUES
    ('7567ec4b-b10c-48c5-9345-fc73c48a80aa', 5),
    ('7567ec4b-b10c-48c5-9345-fc73c48a80a1', 2),
    ('7567ec4b-b10c-48c5-9345-fc73c48a80a3', 12),
    ('7567ec4b-b10c-48c5-9345-fc73348a80a1', 4),
    ('7567ec4b-b10c-48c5-9445-fc73c48a80a2', 8),
    ('7567ec4b-b10c-45c5-9345-fc73c48a80a1', 16),
    ('7563ec4b-b11c-48c5-9435-fc73c48a12a2', 5),
    ('7267ec4b-b11c-45c5-9348-fc73c48a00a1', 5),
    ('7527ec4b-b14c-48c5-9315-fc73c48a89a1', 10),
    ('4567ec4b-b20c-48c5-9645-fc73c49a80a3', 3);

