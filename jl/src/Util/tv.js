const tv = [
    {
        id:1,
        title: 'Adventures of Superman (1952 - 1958)',
        img:'https://m.media-amazon.com/images/M/MV5BZmYwMzY4OWMtZmYxMC00M2VmLWFlZDgtMWEyY2IzNDdjNWRmXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
        description: '"Adventures of Superman" was a groundbreaking television series that aired from 1952 to 1958. Starring George Reeves as the iconic superhero, the show followed Supermans heroic exploits in Metropolis, battling villains like Lex Luthor and protecting the innocent. Focused on themes of justice and morality, it captivated audiences with its thrilling action sequences and moral lessons, leaving a lasting legacy in pop culture. ',
    },
    {
        id:2,
        title: 'Batman (1966 - 1968)',
        img:'https://m.media-amazon.com/images/M/MV5BZWFjNTdlZjctZTRkNC00OTQ1LWI3NDktOWY0ZWZmNzFiOTNkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
        description: '"Batman" (1966-1968) is a cult classic TV series starring Adam West as the iconic Dark Knight and Burt Ward as his sidekick, Robin. Known for its campy humor, colorful visuals, and catchy theme song, the show depicted Batman and Robins crime-fighting adventures in Gotham City as they battled a rogues gallery of villains, including the Joker, Penguin, and Catwoman.',
    },
    {
        id:3,
        title: 'SuperFriends (1973)',
        img:'https://13thdimension.com/wp-content/uploads/2020/02/featured3-copy.jpg',
        description: '"SuperFriends" (1973) is an animated series that unites iconic DC superheroes like Superman, Batman, Wonder Woman, and others in their mission to protect Earth from supervillains and global threats. Aimed at younger audiences, the show combines action-packed adventures with moral lessons, emphasizing teamwork, friendship, and the importance of using powers for good. It became a beloved part of pop culture, inspiring generations of fans.',
    },
    {
        id:4,
        title: 'Wonder Woman (1975-1979)',
        img:'https://m.media-amazon.com/images/M/MV5BNjQyZWEwYmItZjY2YS00NzEzLWIyODctYWVkOTA4NzY4ZWIwXkEyXkFqcGc@._V1_.jpg',
        description: '"Wonder Woman" (1975-1979) stars Lynda Carter as Diana Prince, the Amazonian princess known as Wonder Woman, who fights for justice during World War II and in the modern world. With her iconic costume and lasso of truth, she battles villains while promoting themes of compassion, equality, and strength. The series became a cultural phenomenon, showcasing a powerful female superhero on television.',
    },
    {
        id:5,
        title: 'The New Adventures of Batman (1977-1981)',
        img:'https://static.dc.com/dc/files/default_images/newadventuresofbatman_thumb_192x291_52abcdb77104c8.90798701.jpg?w=160',
        description: '"The New Adventures of Batman" (1977-1981) brings the dynamic duo, Batman and Robin, back to the small screen in animated form. Voiced by Adam West and Burt Ward, the crime-fighting pair faces off against familiar foes like the Joker, Penguin, and Catwoman in Gotham City. With action-packed episodes and classic comic book storytelling, it captivated audiences of all ages.',
    },
    {
        id:6,
        title: 'Super Friends (1980 - 1984)',
        img:'https://resizing.flixster.com/-RZ2ji0cukiL1JquYuMg84TvlWs=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9239073_b_h9_aa.jpg',
        description: '"SuperFriends" (1984) continues the legacy of the beloved animated series, uniting iconic DC superheroes like Superman, Batman, Wonder Woman, and others. Together, they combat villains and protect the world from various threats. With its action-packed adventures and emphasis on teamwork and heroism, the show remains a favorite among fans of all ages, inspiring imagination and promoting positive values.',
    },
    {
        id:7,
        title: 'The Flash (1990 - 1991)',
        img:'https://m.media-amazon.com/images/M/MV5BN2E2OTViNGEtYjUzMi00MTg4LTkzOWEtMjkwZjhmM2UxM2Q4XkEyXkFqcGc@._V1_.jpg',
        description: '"The Flash" (1990) brings the iconic DC superhero to television, following Barry Allen, portrayed by John Wesley Shipp, as he gains super speed and becomes the Scarlet Speedster. Fighting crime in Central City, he battles villains while struggling with personal challenges. With its thrilling action sequences and compelling storytelling, the series captivates audiences, leaving a lasting impact on superhero television.',
    },
    {
        id:8,
        title: 'Batman: The Animtated Series (1992 - 1995)',
        img:'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p183921_b_v8_aw.jpg',
        description: '"Batman: The Animated Series" (1992-1995) revolutionizes animated television with its dark, atmospheric portrayal of the Dark Knights adventures in Gotham City. With Kevin Conroy as Batman and Mark Hamill as the Joker, the series delves into complex storylines, iconic villains, and the psychological depths of its characters. Its innovative animation style and mature themes set a new standard for animated superhero storytelling. ',
    },
    {
        id:9,
        title: 'Superman: The Animated Series (1996-2000)',
        img:'https://m.media-amazon.com/images/M/MV5BYmNiNTY1YjYtNmI1Zi00ODE3LTg4MmYtNWRkYTU2MTkxZjkwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
        description: '"Superman: The Animated Series" (1996-2000) follows the iconic DC Comics superhero as he defends Metropolis from villains like Lex Luthor and Brainiac. Produced by Warner Bros. Animation, the show blends action, drama, and superheroics with sleek animation and compelling storytelling. It explores Supermans struggles balancing his dual identity as Clark Kent and his responsibilities as Earths protector. The series remains a beloved adaptation, praised for its faithful portrayal of the Man of Steels adventures.',
    },
    {
        id: 10,
        title: 'The New Batman Adventures (1997 - 1999)',
        img: 'https://m.media-amazon.com/images/M/MV5BZGY3M2UyMmQtMWM5Zi00Njg1LWIxOWUtYmE0Mjg3Zjg3NTdiXkEyXkFqcGc@._V1_.jpg',
        description: '"The New Batman Adventures" (1997-1999) serves as a continuation of "Batman: The Animated Series," featuring updated designs and storylines. The series follows Batman, voiced again by Kevin Conroy, alongside familiar allies like Batgirl and Nightwing, as they combat Gotham’s most dangerous criminals. It expanded the universe, introducing new villains and exploring deeper character arcs, making it a beloved part of the DC animated canon.',
    },
    {
        id: 11,
        title: 'Batman Beyond (1999 - 2001)',
        img: 'https://m.media-amazon.com/images/S/pv-target-images/10260e6e265b380eb02fa01dc2446818d65137a1452f7130e9b6f691006a2ed2.jpg',
        description: '"Batman Beyond" (1999-2001) introduces Terry McGinnis, a teenager who becomes the new Batman under the mentorship of an older Bruce Wayne. Set in a futuristic Gotham City, the series blends classic Batman themes with new technology and societal issues. It features a fresh rogues’ gallery, while exploring themes of legacy and responsibility, gaining acclaim for its innovative storytelling and character development.',
    },
    {
        id: 12,
        title: 'Static Shock (2000 - 2004)',
        img: 'https://m.media-amazon.com/images/M/MV5BZGVmNWQyYmMtZDZkNC00NjAyLWFjZmMtYzJmZTMwMmYzYjk4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
        description: '"Static Shock" (2000-2004) follows the story of Virgil Hawkins, a teenager who gains electromagnetic powers after a chemical accident. Balancing school life with his new identity as Static, he tackles issues like racism and bullying while fighting crime in Dakota City. The show stands out for its positive messages and diverse representation, becoming a favorite among young audiences and addressing social issues through the lens of superhero adventures.',
    },
    {
        id: 13,
        title: 'Justice League (2001 - 2004)',
        img: 'https://preview.redd.it/thoughts-on-jg-taking-heavy-inspirations-from-dcau-for-his-v0-aoq2bvx2c9ga1.jpg?auto=webp&s=1e4b0075045291be6900baca55e201759f170fc1',
        description: '"Justice League" (2001-2004) brings together DC’s greatest heroes, including Superman, Batman, Wonder Woman, and more, to protect Earth from formidable threats. The series emphasizes teamwork and camaraderie, exploring the dynamics between iconic characters as they face powerful villains like Darkseid. Praised for its engaging storytelling and character development, it redefined animated superhero series, attracting a broad audience and deepening the DC universe.',
    },
    {
        id: 14,
        title: 'Smallville (2001 - 2011)',
        img: 'https://m.media-amazon.com/images/M/MV5BZDU0ZDVjOTItMDNkMy00YTI0LWFjYzItY2M1NjU5NjAzZGViXkEyXkFqcGc@._V1_.jpg',
        description: '"Smallville" (2001-2011) chronicles the early years of Clark Kent, played by Tom Welling, as he navigates high school life while discovering his superpowers. The series delves into Clark’s relationships, moral dilemmas, and struggles with his destiny as Superman. Blending drama, romance, and superhero action, it became a defining show for the superhero genre, influencing future adaptations and expanding the lore of the DC universe.',
    },
    {
        id: 15,
        title: 'Teen Titans (2003 - 2005)',
        img: 'https://upload.wikimedia.org/wikipedia/en/d/d4/Teen_Titans_Season_4_iTunes_cover.jpg',
        description: '"Teen Titans" (2003-2005) focuses on a group of young superheroes, including Robin, Starfire, Raven, Beast Boy, and Cyborg, as they confront villains and navigate their personal growth. The series combines action, humor, and emotional depth, appealing to both children and older audiences. Its unique animation style and engaging storylines helped it gain a dedicated fanbase and left a lasting impact on the portrayal of younger heroes in the DC universe.',
    },
    {
        id: 16,
        title: 'The Batman (2004 - 2008)',
        img: 'https://preview.redd.it/film-tv-has-anyone-seen-the-2004-batman-animated-series-the-v0-dnchonrg0ixa1.jpg?auto=webp&s=ab48d4ab98e24f73dba98e2c0e230239ed47a50e',
        description: '"The Batman" (2004-2008) presents a fresh take on the Dark Knight, featuring a younger Bruce Wayne as he battles iconic villains like the Joker and Catwoman. The series is known for its distinctive animation style and a more modernized approach to storytelling. It explores Batman’s early years and development as a hero, offering a blend of action and character-driven plots that engage both children and adult fans of the franchise.',
    },
    {
        id: 17,
        title: 'Justice League Unlimited (2004 - 2006)',
        img: 'https://m.media-amazon.com/images/M/MV5BNTEyMjZkN2UtM2FlYS00MzVhLTlhNWEtMDUyNzVhYTJhNjlhXkEyXkFqcGc@._V1_.jpg',
        description: '"Justice League Unlimited" (2004-2006) expands on its predecessor by introducing a wider array of DC superheroes. The series features complex narratives and character-driven stories, showcasing the Justice League as they tackle global threats. With an emphasis on teamwork and moral dilemmas, it maintains the quality of animation and storytelling that fans loved, making it a staple of the DC animated universe.',
    },
    {
        id: 18,
        title: 'Aquaman (2006)',
        img: 'https://m.media-amazon.com/images/M/MV5BYzU4OWMxYjktMGNhOS00MzgyLWIxOGEtMjg3YWZhNTVkYjFmXkEyXkFqcGc@._V1_.jpg',
        description: 'Aquaman" (2006) is a live-action series that follows the journey of Arthur Curry, the rightful heir to the throne of Atlantis. As he grapples with his dual identity as both a human and the ruler of an underwater kingdom, Aquaman faces numerous challenges, including battles against formidable foes and the complexities of oceanic politics. The series highlights his extraordinary powers, such as superhuman strength and the ability to communicate with marine life, while delving into the rich mythology of Atlantis.',
    },
    {
        id: 19,
        title: 'Batman: The Brave and the Bold (2008 - 2011)',
        img: 'https://m.media-amazon.com/images/M/MV5BM2FkYTQ2MzUtNWI1NC00MTM0LTgyNzYtMDM3NmE1OWYyNjRjXkEyXkFqcGc@._V1_.jpg',
        description: '"Batman: The Brave and the Bold" (2008-2011) features a lighthearted take on the Dark Knight, showcasing his team-ups with various heroes from the DC universe. Each episode highlights Batman’s adventures with allies like Blue Beetle and Green Arrow as they tackle villains and threats. The series is known for its fun tone, engaging stories, and celebration of DC’s vast array of characters, appealing to fans of all ages.',
    },
    {
        id: 20,
        title: 'Young Justice (2010 - Present)',
        img: 'https://m.media-amazon.com/images/M/MV5BMDI5ODI4MzItNzU3MC00OTUyLTkwMWMtZGMzNjgwZjJiNDNkXkEyXkFqcGc@._V1_.jpg',
        description: '"Young Justice" (2010-Present) follows a group of teenage sidekicks as they navigate their roles as superheroes while dealing with the challenges of adolescence. The series weaves intricate storylines and character development, featuring iconic heroes like Nightwing and Kid Flash. It has garnered critical acclaim for its mature themes, character arcs, and its portrayal of the complexities of heroism, resonating deeply with viewers of all ages.',
    },
    {
        id: 21,
        title: 'Green Lantern: The Animated Series (2011)',
        img: 'https://m.media-amazon.com/images/S/pv-target-images/145592ff5afab560b47b681da7097ec97026990f1422c01ed6738b554375addc.jpg',
        description: '"Green Lantern: The Animated Series" (2011) follows Hal Jordan as he protects the universe as a member of the Green Lantern Corps. The series features thrilling space adventures, complex storytelling, and character development as Hal and his allies combat the threats from the Red Lanterns and other villains. It stands out for its impressive animation and a blend of action and humor, expanding the Green Lantern lore for a new generation.',
    },
    {
        id: 22,
        title: 'Arrow (2012 - 2020)',
        img: 'https://mamasgeeky.com/wp-content/uploads/2022/04/Arrow.webp',
        description: '"Arrow" (2012-2020) follows Oliver Queen, a billionaire playboy turned vigilante, as he fights crime in Star City after returning from a five-year ordeal on a deserted island. The series explores Oliver’s journey toward becoming a hero, dealing with his past and the consequences of his actions. With its darker tone and character-driven narrative, "Arrow" launched the Arrowverse, paving the way for multiple spin-offs and expanding the DC television universe.',
    },
    {
        id: 23,
        title: 'Teen Titans Go (2013 - Present)',
        img: 'https://m.media-amazon.com/images/M/MV5BMjE5MjMzOTc1Ml5BMl5BanBnXkFtZTcwNDQxMDY5OQ@@._V1_.jpg',
        description: '"Teen Titans Go!" (2013-Present) is a comedic take on the beloved Teen Titans, focusing on their humorous antics and everyday adventures. Unlike its predecessor, this series emphasizes lighthearted fun and silliness while retaining the characters’ core identities. Its vibrant animation style and comedic storytelling have garnered a new generation of fans, making it a unique addition to the DC animated lineup.',
    },
    {
        id: 24,
        title: 'Constantine (2014 - 2015)',
        img: 'https://m.media-amazon.com/images/M/MV5BYTUwNTYzOWEtNWE1OS00OWRlLTk1MjYtNjI5ZDc2OGVlMzIxXkEyXkFqcGc@._V1_.jpgg',
        description: 'Demon hunter and master of the occult John Constantine figured there was no longer any point in fighting the good fight since his soul belongs to the netherworld, but when demons target the daughter of one of his closest friends, Liv, he reluctantly rejoins the battle. It turns out that Liv has second sight, an ability to see other worlds and predict supernatural occurrences, a power that makes her a threat to the new evil rising from the shadows.'
    },
    {
        id: 25,
        title: 'The Flash (2014 - 2023)',
        img: 'https://m.media-amazon.com/images/M/MV5BMjU0ZjZhNDQtMDhkYi00OWQyLWE3NGYtNzBlY2VmM2I4ZDg5XkEyXkFqcGc@._V1_.jpg',
        description: '"The Flash" (2014-2023) follows Barry Allen, a forensic scientist who gains super speed after a particle accelerator explosion. Embracing his new identity as the Scarlet Speedster, Barry fights crime and protects Central City from meta-human threats while uncovering the mystery behind his mother’s murder. The series combines action, humor, and emotional depth, featuring a rich cast of characters and showcasing the complexities of time travel and alternate realities.'
    },
    {
        id: 26,
        title: 'Gotham (2014 - 2019)',
        img: 'https://m.media-amazon.com/images/M/MV5BMTg0ZmM3N2QtYmFiMy00YzUzLWE1M2QtZWVhMzBiNGZjMmVjXkEyXkFqcGc@._V1_.jpg',
        description: '"Gotham" (2014-2019) is a crime drama that explores the origins of iconic DC characters in Gotham City before the rise of Batman. Centered on a young Jim Gordon, the series delves into his fight against corruption and crime while mentoring a young Bruce Wayne. With a diverse cast of villains, including the Penguin and Catwoman, "Gotham" paints a vivid portrait of the dark, gritty world that shaped the Dark Knight.'
    },
    {
        id: 27,
        title: 'Supergirl (2015 - 2021)',
        img: 'https://pics.filmaffinity.com/supergirl-509819132-large.jpg',
        description: '"Supergirl" (2015-2021) follows Kara Zor-El, Superman’s cousin, who embraces her powers as she fights to protect National City. Balancing her superhero responsibilities with her personal life, Kara faces various threats, including formidable foes like Lex Luthor and non-human villains. The series explores themes of empowerment, identity, and family, showcasing strong female characters and the importance of hope and resilience in the face of adversity.'
    },
    {
        id: 28,
        title: 'DC Legends of Tomorrow (2016 - 2022)',
        img: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Legends_of_Tomorrow_season_3.jpg',
        description: '"DC Legends of Tomorrow" (2016-2022) brings together a team of heroes and anti-heroes from the DC universe, led by Rip Hunter. Tasked with protecting time itself, they embark on time-traveling adventures, facing historical figures and formidable villains. The series combines action, humor, and heart, as the team learns to work together while navigating their complex personalities and pasts.'
    },
    {
        id: 29,
        title: 'Justice League Action (2016 - 2018)',
        img: 'https://m.media-amazon.com/images/M/MV5BNjFkZTQ0ZmItODZjZS00N2Q5LWI0MWUtZTliMzdkNmVkMmM0XkEyXkFqcGc@._V1_.jpg',
        description: '"Justice League Action" (2016-2018) is an animated series that brings together the greatest DC superheroes to combat evil and protect the world. Featuring a mix of beloved characters, including Batman, Superman, and Wonder Woman, the show presents thrilling adventures with a blend of humor and action. Each episode is fast-paced, making it accessible for both young viewers and longtime fans, showcasing the essence of teamwork and heroism.'
    },
    {
        id: 30,
        title: 'Black Lightning (2018 - 2021)',
        img: 'https://m.media-amazon.com/images/M/MV5BZTI4NWZhNDItZTg5MS00NzhjLWFhOGYtM2JjZGI5NjZhYTEwXkEyXkFqcGc@._V1_.jpg',
        description: '"Black Lightning" (2018-2021) follows Jefferson Pierce, a retired superhero who returns to fight against crime and corruption in his community as Black Lightning. Balancing his roles as a father and a hero, Jefferson confronts powerful enemies while grappling with personal and social issues. The series tackles important themes of family, justice, and the challenges of being a hero in a complex world.'
    },
    {
        id: 31,
        title: 'Krypton (2018 - 2019)',
        img: 'https://m.media-amazon.com/images/S/pv-target-images/d7b647e7ef97a3f122ca0bcaaeec835b1054f12ef99f320c7439bfcec386c6f7.jpg',
        description: '"Krypton" (2018-2019) is a sci-fi series set two generations before the destruction of Superman’s home planet. It follows Seg-El, Superman’s grandfather, as he fights to save Krypton from an impending doom while navigating political intrigue and familial struggles. The show expands on the mythology of the DC universe, exploring the legacy of the House of El and the challenges faced in a dying world.'
    },
    {
        id: 32,
        title: 'Titans (2018 - 2023)',
        img: 'https://m.media-amazon.com/images/M/MV5BZDNiNjVjZjYtNTkwYS00NDFlLThkMTUtMGFmODEyODEzY2ExXkEyXkFqcGc@._V1_.jpg',
        description: '"Titans" (2018-2023) is a gritty take on the Teen Titans, focusing on a group of young superheroes led by Dick Grayson, aka Robin. As they battle dark forces and uncover their true potential, the team must confront their pasts and personal demons. The series blends action, drama, and character development, showcasing the complexities of growing up as a hero in a harsh world.'
    },
    {
        id: 33,
        title: 'Doom Patrol (2019 - 2023)',
        img: 'https://m.media-amazon.com/images/M/MV5BYjY1MDExMzctMzQ4Mi00NmU1LWIyMWItZTkzZDk2YmY2NGI2XkEyXkFqcGc@._V1_.jpg',
        description: '"Doom Patrol" (2019-2023) follows a group of misfit heroes with unique abilities as they navigate their traumatic pasts and embrace their identities. Led by the enigmatic Dr. Niles Caulder, the team includes characters like Robotman and Elasti-Woman, each struggling with their own issues while facing bizarre threats. The series is known for its surreal storytelling, dark humor, and heartfelt character arcs, redefining the superhero genre.'
    },
    {
        id: 34,
        title: 'Lucifer (2016 - 2021)',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy_JsgH7Iez6PDzOgsHQ2Bkg-Fxs2UZZdkVQ&s',
        description: '"Lucifer" (2016-2021) follows the Devil, Lucifer Morningstar, who abandons Hell to run a nightclub in Los Angeles. As he becomes embroiled in crime-solving with LAPD detective Chloe Decker, the series blends crime procedural with supernatural elements. Through witty dialogue and complex character dynamics, "Lucifer" explores themes of redemption, free will, and the nature of good and evil.'
    },
    {
        id: 35,
        title: 'Swamp Thing (2019)',
        img: 'https://preview.redd.it/8wy5e9e2dkj71.jpg?width=640&crop=smart&auto=webp&s=490f6f595c5a9a7e4ca88b4e0539cc21f2a8256a',
        description: '"Swamp Thing" (2019) follows Abby Arcane, a CDC investigator who uncovers the mysteries of the swamp and the monstrous creature known as Swamp Thing. As she delves into the supernatural elements of the swamp, Abby must confront dark forces and explore themes of love, loss, and the environment. The series is notable for its horror elements, stunning visuals, and a deep connection to nature.'
    },
    {
        id: 36,
        title: 'Batwoman (2019 - 2022)',
        img: 'https://m.media-amazon.com/images/M/MV5BZmQ2YjY2ZDctZjE4NS00MWM3LWFiYWMtOWQ3MjFiMWUxNTg5XkEyXkFqcGc@._V1_.jpg',
        description: '"Batwoman" (2019-2022) follows Kate Kane as she steps into the role of Gotham City’s protector after Batman’s disappearance. As a fierce and determined hero, Batwoman tackles the city’s crime while navigating her own complicated past. The series focuses on themes of identity, empowerment, and social justice, introducing diverse characters and storylines that resonate with contemporary audiences.'
    },
    {
        id: 37,
        title: 'Watchmen (2019)',
        img: 'https://m.media-amazon.com/images/M/MV5BZGJkMmY5MTQtODg0MC00NTgxLTgwMTctODMxNGM0NDhhM2UxXkEyXkFqcGc@._V1_.jpg',
        description: '"Watchmen" (2019) is a limited series that serves as a sequel to the iconic graphic novel, exploring themes of power, racism, and morality in a reimagined 1980s America. It follows a diverse cast of characters as they confront the legacy of the original Watchmen and tackle systemic injustices. The show is praised for its thought-provoking narrative, stunning visuals, and rich character development, elevating the source material to new heights.'
    },
    {
        id: 38,
        title: 'Harley Quinn (2019 - Present)',
        img: 'https://m.media-amazon.com/images/M/MV5BZDcyMDYxNzMtMWQ1NS00OGU4LWJhZWItOTM2ZmFjZDIwNmM3XkEyXkFqcGc@._V1_.jpg',
        description: '"Harley Quinn" (2019-Present) is an animated series that follows the chaotic and humorous adventures of Harley Quinn as she breaks away from her toxic relationship with the Joker to embrace her own identity. Alongside her quirky crew of misfits, including Poison Ivy, Harley navigates the Gotham underworld, battling supervillains and forming unlikely alliances. The series is celebrated for its sharp wit, vibrant animation, and its fresh, irreverent take on the superhero genre.'
    },
    {
        id: 39,
        title: 'Pennyworth (2019 - 2023)',
        img: 'https://m.media-amazon.com/images/M/MV5BOTI0NzNmZjMtYWQ3MS00YzliLWIzMDktYzk2MTc4ZmM5ZGNhXkEyXkFqcGc@._V1_.jpg',
        description: '"Pennyworth" (2019-2023) is a period drama that explores the early life of Alfred Pennyworth, the legendary butler to Bruce Wayne. Set in 1960s London, the series follows Alfred as he works for Thomas Wayne and becomes embroiled in a battle against dark forces threatening the city. With a mix of espionage, action, and character-driven storytelling, the show delves into Alfred’s backstory, revealing his transition from a former special forces operative to the iconic butler.'
    },
    {
        id: 40,
        title: 'DCs Stargirl (2020 - 2022)',
        img: 'https://m.media-amazon.com/images/M/MV5BZjczYTZjYjQtNDA5YS00ZjZhLWE0ZTgtMDdjYmMxMjYzMjdiXkEyXkFqcGc@._V1_.jpg',
        description: '"DC’s Stargirl" (2020-2022) follows high school student Courtney Whitmore, who discovers the Cosmic Staff and becomes the superhero Stargirl. Inspired by the legacy of the Justice Society of America, she forms a new generation of heroes to combat villains from the past. The series is praised for its optimistic tone, strong character development, and its celebration of teamwork and heroism among a diverse cast of young superheroes.'
    },
    {
        id: 41,
        title: 'Superman and Lois (2021 - 2024)',
        img: 'https://m.media-amazon.com/images/M/MV5BOTA2ZTJlODMtOThlNC00NjY5LWJkNmItMTAxYzBjYmY3NGVjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
        description: '"Superman and Lois" (2021-2024) centers on Clark Kent and Lois Lane as they navigate the challenges of parenthood while protecting their hometown of Smallville. Balancing their superhero responsibilities with family life, they face new threats and the complexities of raising teenage sons with extraordinary powers. The series combines heartfelt family dynamics with classic superhero action, deepening the lore of the Superman mythos.'
    },
    {
        id: 42,
        title: 'Peacemaker (2022 - Present)',
        img: 'https://m.media-amazon.com/images/M/MV5BMzBiODIzY2ItNjJkYy00YmVkLTg2YzEtNjQyZjMxOWYyNDdjXkEyXkFqcGc@._V1_.jpg',
        description: '"Peacemaker" (2022-Present) follows the fan-favorite character from "The Suicide Squad," exploring the origin of his violent obsession with peace at any cost. As he embarks on new missions with a team of unlikely allies, Peacemaker navigates his conflicted beliefs and the consequences of his actions. The series blends action, dark humor, and a deeper exploration of morality within the superhero genre, highlighting the complexities of its titular character.'
    },
    {
        id: 43,
        title: 'My Adventures with Superman (2023 - Present)',
        img: 'https://resizing.flixster.com/84_A3Ls7_Ijq-uDVfm6gFPT7YO4=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvNDZjNzAxMTEtOTczYS00YTk5LTliNjktZTZhMjcxYzQ4OThkLmpwZw==',
        description: '"My Adventures with Superman" (2023-Present) is an animated series that follows a young Clark Kent as he balances his life as a reporter and his responsibilities as Superman. Alongside Lois Lane and Jimmy Olsen, Clark navigates the challenges of love, friendship, and heroic duty while exploring his origins and the development of his iconic alter ego. The series combines humor, romance, and adventure, appealing to both longtime fans and new audiences.'
    },
    {
        id: 44,
        title: 'Batman: Caped Crusader (2023 - Present)',
        img: 'https://m.media-amazon.com/images/M/MV5BYmUxYTJjNzgtNjM4Zi00NjAxLTg0NTgtZDAwZjA0NGJlZDQwXkEyXkFqcGc@._V1_.jpg',
        description: '"Batman: Caped Crusader" (2023-Present) reimagines the iconic superheros origin story, offering a fresh take on the Dark Knights adventures in Gotham City. Created by Bruce Timm, one of the minds behind the beloved animated series, this show delves deeper into Batmans psyche as he navigates the complexities of justice and morality. With a unique visual style and a darker tone, it features an array of classic villains and introduces new characters, exploring the rich lore of Gotham and the challenges faced by its enigmatic protector.'
    },
    {
        id: 45,
        title: 'The Penguin (2024 - Present)',
        img: 'https://m.media-amazon.com/images/M/MV5BYmU3MzYzOWEtOTdkZi00YzA1LTliMzQtNDdiZDBjY2FiNmFlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
        description: '"The Penguin" (2024-Present) is a live-action series that focuses on the rise of Oswald Cobblepot, also known as the Penguin, in Gotham City’s criminal underworld. Played by Colin Farrell, this series explores his journey from a notorious mobster to one of Gotham’s most feared crime lords. Set in the same universe as "The Batman" (2022), it offers a gritty, character-driven look into the dark corners of Gotham’s organized crime, showing the complex nature of one of Batman’s most iconic foes.'
    }    
]

module.exports = tv;