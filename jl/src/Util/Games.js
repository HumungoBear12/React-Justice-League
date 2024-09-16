const games = [
    {
        id:1,
        title: 'Suicide Squad Kills the Justice League',
        description: "Suicide Squad Kills the Justice League is a highly anticipated video game developed by Rocksteady Studios, offering players an exhilarating experience in the DC Comics universe. Set within the iconic locale of Metropolis, the game follows the Suicide Squad, a team of antiheroes coerced into dangerous missions by Amanda Waller, as they face their most challenging task yet: taking down the revered Justice League. In this action-packed adventure, players assume the roles of key Suicide Squad members including Harley Quinn, Deadshot, Captain Boomerang, and King Shark. Each character possesses unique abilities and playstyles, contributing to diverse gameplay dynamics and strategic combat encounters. As they navigate through the vibrant and dynamic open-world environment, players must confront formidable adversaries, including mind-controlled heroes under the influence of Brainiac. The game promises a gripping narrative filled with twists and turns, exploring themes of redemption, loyalty, and sacrifice against the backdrop of a looming threat to humanity. With its blend of intense action, dark humor, and immersive storytelling, Suicide Squad Kills the Justice League offers an exciting gaming experience that challenges players to navigate moral dilemmas while battling iconic superheroes-turned-antagonists. As players delve deeper into the intricate plot, they must make strategic decisions that will shape the fate of both the Suicide Squad and the world they inhabit.",
        img:'https://images.ctfassets.net/nwksj2ft7iku/6PLD4uBPeJBvWSof2ZfvCL/9534cad013968a92bfdc89817494542e/SSKTJL_Traversal_768_480.png',
    },
    {
        id:2,
        title: 'Gotham Knights',
        description: '"Gotham Knights" is an upcoming action role-playing video game developed by WB Games Montréal. Set in the DC Comics universe, the game takes place in Gotham City after the apparent death of Batman. Players assume the roles of the Bat-Family members, including Nightwing, Batgirl, Red Hood, and Robin, each with their unique abilities and playstyles. Together, they must protect Gotham from emerging threats, including the villainous Court of Owls, who seek to seize control of the city. The game features an open-world environment, allowing players to explore Gothams iconic locations and engage in dynamic combat encounters against a variety of enemies. With a focus on cooperative gameplay, players can team up with friends to tackle missions and challenges, further expanding the games replayability and depth. "Gotham Knights" promises a compelling narrative-driven experience, delving into the complex relationships and motivations of its characters while delivering thrilling action sequences and intense boss battles. With its immersive gameplay mechanics and rich storytelling, "Gotham Knights" aims to redefine the superhero gaming genre, offering players an unforgettable adventure in the heart of Gotham City.',
        img:'https://assets.nuuvem.com/image/upload/t_product_sharing_banner/v1/products/62a3876128241d00143f16a9/sharing_images/yxy6y4iznft4moigyg7x.jpg',
    },
    {
        id:3,
        title: 'Arkham Knight',
        description: '"Arkham Knight," released in 2015, is the epic conclusion to Rocksteady Studios acclaimed Batman: Arkham series. Set in Gotham City, the game follows Batman as he faces his greatest challenge yet: the mysterious Arkham Knight, a militarized villain determined to destroy the Dark Knight. With the city under siege by Scarecrow and his army of mercenaries, Batman must navigate through a chaotic and dangerous environment while uncovering the truth behind the Arkham Knights identity. Players experience seamless gameplay as they explore Gothams expansive open world, utilizing Batmans impressive array of gadgets, combat skills, and the Batmobile to thwart enemies and solve puzzles. The game introduces new gameplay mechanics, including the ability to seamlessly switch between on-foot combat and vehicular combat with the Batmobile, adding depth and variety to gameplay. "Arkham Knight" delivers a gripping narrative filled with twists and turns, exploring themes of identity, sacrifice, and redemption. With its stunning graphics, immersive gameplay, and compelling storyline, "Arkham Knight" received critical acclaim and remains a standout title in the superhero gaming genre, captivating players with its thrilling action and emotional resonance. ',
        img:'https://www.indystar.com/gcdn/-mm-/5d5ac82fdd6db160aae78937a4014863a6f83c15/c=0-22-1500-875/local/-/media/Indianapolis/Indianapolis/2014/03/04//1393959117000-BAK-Key-Art-FINAL-.jpg?width=1500&height=853&fit=crop&format=pjpg&auto=webp',
    },
    {
        id:4,
        title: 'Arkham City',
        description: "Arkham City, released in 2011, is the second installment in the Batman: Arkham series, developed by Rocksteady Studios. Set in a sprawling prison city sectioned off from Gotham, the game follows Batman as he navigates through the chaos orchestrated by the nefarious Hugo Strange and his enigmatic ally, the Joker. Players explore Arkham City's open-world environment, encountering iconic villains such as Two-Face, Penguin, and Catwoman while unraveling a conspiracy that threatens Gotham's safety. With its fluid combat mechanics, intricate puzzles, and gripping narrative, Arkham City received widespread acclaim for its immersive gameplay and faithful adaptation of the Batman mythos.",
        img:'https://venturebeat.com/wp-content/uploads/2011/11/batman_arkham_city-e1321901571460.jpeg?resize=600%2C375&strip=all',
    },
    {
        id:5,
        title: 'Arkham Asylum',
        description: '"Arkham Asylum," released in 2009, serves as the debut installment in the Batman: Arkham series. Developed by Rocksteady Studios, the game takes place within Gothams infamous psychiatric institution, where the Joker orchestrates a deadly plot to unleash chaos upon the city. Players assume the role of Batman as he navigates through the dark corridors of Arkham Asylum, battling iconic villains and solving puzzles to thwart the Jokers plans. Praised for its atmospheric setting, engaging combat system, and narrative depth, "Arkham Asylum" set a new standard for superhero video games and remains a beloved classic among fans of the genre.',
        img:'https://cdn.akamai.steamstatic.com/steam/apps/35140/header.jpg?t=1702934705',
    },
    {
        id:6,
        title: 'Arkham Origins',
        description: '"Arkham Origins," released in 2013, is a prequel to the Batman: Arkham series, developed by WB Games Montréal. Set on Christmas Eve during Batmans early years as a vigilante, the game follows him as he faces off against a cadre of assassins hired by crime lord Black Mask to eliminate him. Players explore Gotham Citys snowy streets, encountering both familiar and new adversaries, including Deathstroke, Bane, and the Joker. "Arkham Origins" retains the series signature gameplay mechanics while introducing new features such as the Crime Scene Investigation system. Despite initial skepticism, the game received generally positive reviews for its compelling storyline, expanded gameplay elements, and faithful representation of Batmans iconic universe.',
        img:'https://images.greenmangaming.com/72fcfa39d0b04707b58f7f41633a16ad/580ffd7c93ba44c4b2e32793ebab150e.jpg',
    },
    {
        id:7,
        title: 'Injustice: Gods Among Us',
        description: 'The first "Injustice" game, "Injustice: Gods Among Us," released in 2013, is a fighting game developed by NetherRealm Studios, known for their work on the "Mortal Kombat" series. Set in an alternate DC Comics universe, the game explores a world where Superman becomes a totalitarian ruler after being manipulated by the Joker into killing Lois Lane. This event leads to the establishment of a regime led by Superman, with Batman leading a rebellion against him. Players engage in fast-paced battles between iconic DC characters, each with their unique moves and abilities. The games story mode presents a compelling narrative, delving into themes of power, corruption, and morality, as heroes and villains clash in an epic struggle for control. With its deep combat system, extensive roster of characters, and interactive environments, "Injustice: Gods Among Us" received critical acclaim for its gameplay mechanics and immersive storyline, establishing itself as a standout title in the fighting game genre.',
        img:'https://images4.alphacoders.com/790/790895.jpg',
    },
    {
        id:8,
        title: 'Injustice 2',
        description: 'The sequel, "Injustice 2," released in 2017, expands upon its predecessors success, offering a deeper and more refined gameplay experience. Set in the aftermath of the first game, "Injustice 2" continues the conflict between Batmans insurgency and Supermans regime while introducing new threats, including the supervillain group, The Society. The game features an expanded roster of characters, including newcomers like Supergirl, Blue Beetle, and Black Canary, each with customizable gear that enhances their abilities. "Injustice 2" builds upon the first games story mode, offering a branching narrative with multiple endings based on player choices. With its improved graphics, enhanced gameplay mechanics, and robust online multiplayer modes, "Injustice 2" received widespread praise from critics and players alike, solidifying its position as one of the premier fighting games in the industry.',
        img:'https://i.imgur.com/o86kyHP.png',
    },
    {
        id:9,
        title: 'Lego Batman',
        description: '"Lego Batman: The Videogame," released in 2008, is the first installment in the Lego Batman series developed by Travellers Tales. Players take control of Batman and Robin as they fight against various villains such as the Joker, Penguin, and Catwoman, using their unique abilities to solve puzzles and progress through levels. The game features a light-hearted and humorous storyline set in Gotham City, with colorful Lego-style graphics and engaging gameplay suitable for all ages. With its cooperative multiplayer mode and extensive roster of characters, including heroes and villains from the Batman universe, "Lego Batman: The Videogame" offers hours of fun and entertainment for fans of the Caped Crusader',
        img:'https://cdn.cloudflare.steamstatic.com/steam/apps/21000/header.jpg',
    },
    {
        id:10,
        title: 'Lego Batman 2',
        description: '"Lego Batman 2: DC Super Heroes," released in 2012, expands upon the success of its predecessor by introducing characters from the broader DC Comics universe. In addition to Batman and Robin, players can control other DC superheroes like Superman, Wonder Woman, and Green Lantern as they team up to thwart the Joker and Lex Luthors evil plans. The game features an open-world Gotham City to explore, filled with side missions, collectibles, and hidden secrets. With its charming humor, colorful visuals, and cooperative gameplay, "Lego Batman 2: DC Super Heroes" offers an immersive experience for players of all ages, combining the fun of Lego building with the excitement of being a superhero.',
        img:'https://cdn.cloudflare.steamstatic.com/steam/apps/213330/header.jpg',
    },
    {
        id:11,
        title: 'Lego Batman 3',
        description: '"Lego Batman 3: Beyond Gotham," released in 2014, continues the fun and adventure of the Lego Batman series while expanding its scope beyond the confines of Gotham City. Developed by Travellers Tales, the game takes players on an intergalactic journey as Batman, joined by other DC Comics heroes and villains, to stop Brainiac from shrinking Earth and adding it to his collection of miniaturized worlds. With a diverse roster of playable characters including Superman, Wonder Woman, Green Lantern, and more, players embark on epic missions across iconic locations such as the Batcave, the Watchtower, and Oa. "Lego Batman 3" retains the series trademark humor, offering a mix of clever puzzles, action-packed gameplay, and collectibles to discover. With its engaging storyline, colorful visuals, and cooperative multiplayer mode, "Lego Batman 3: Beyond Gotham" provides an entertaining experience for both fans of Lego games and DC Comics enthusiasts, inviting players of all ages to join the Caped Crusader in saving the world from cosmic peril.',
        img:'https://hb.imgix.net/4220886f98c53a7e314d66789da4fe9f072afcf5.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=af13419540a78e6c02a21a1b10758489',
    },
    {
        id:12,
        title: 'DC Universe',
        description: '"DC Universe Online" is a massively multiplayer online role-playing game (MMORPG) set in the iconic DC Comics universe. Developed by Daybreak Game Company, the game allows players to create their own superhero or villain and join forces with legendary DC characters such as Batman, Superman, Wonder Woman, and The Joker in battles against various threats. Players can customize their characters appearance, powers, and abilities, tailoring them to fit their playstyle and role within the games dynamic world. They can explore iconic locations like Gotham City, Metropolis, and Themyscira, engaging in quests, missions, and events that shape the fate of the DC Universe. With its action-packed combat system, extensive character customization options, and immersive storytelling, "DC Universe Online" offers players a unique opportunity to become part of the legendary DC Comics universe. Whether fighting alongside allies or against enemies, players can experience the thrill of being a superhero or supervillain in an ever-evolving online world filled with adventure and danger.',
        img:'https://www.dcuniverseonline.com/images/v4/global/fb-share.jpg?v=3073712053',
    },
    {
        id:13,
        title: 'Mortal Kombat vs DC Universe',
        description: '"Mortal Kombat vs. DC Universe" is a crossover fighting game that pits iconic characters from the Mortal Kombat and DC Comics universes against each other in intense battles. Developed by Midway Games, it features a unique storyline that intertwines the two universes, resulting in epic confrontations between characters like Sub-Zero, Scorpion, Batman, and Superman. Players engage in fast-paced combat using a combination of punches, kicks, and special moves, as well as interactive environments that add depth to the fights. The game includes a variety of single-player and multiplayer modes, allowing players to challenge friends locally or online. With its blend of brutal fighting mechanics and beloved characters from both franchises, "Mortal Kombat vs. DC Universe" offers an exciting and memorable gaming experience for fans of fighting games and comic books alike.',
        img:'https://i.ytimg.com/vi/zzhVgHeFkFQ/sddefault.jpg',
    },
];

module.exports = games;