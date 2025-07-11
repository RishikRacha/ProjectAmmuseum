
    let data = [
    {
        players: {
            min: 3,
            max: 4,
        },
        _id: "686512f9d1a03051c9f92afd",
        name: "Catan",
        image: ["/images/catan/catan1.jpg", "/images/catan/catan2.jpg"],
        difficulty: 3.6,
        level: "Medium",
        more: "https://www.catan.com/",
        description:
            "A game of trading and building settlements on the island of Catan.",
        default: true,
    },
    {
        players: {
            min: 2,
            max: 5,
        },
        _id: "686512f9d1a03051c9f92aff",
        name: "Carcassonne",
        image: [
            "/images/carcassonne/carcassonne1.jpg",
            "/images/carcassonne/carcassonne2.jpg",
        ],
        difficulty: 2.7,
        level: "Medium",
        more: "https://www.zmangames.com/en/products/carcassonne/",
        description:
            "A tile-placement game where players build cities, roads, and farms.",
        default: true,
    },
    {
        players: {
            min: 2,
            max: 5,
        },
        _id: "686512f9d1a03051c9f92b00",
        name: "Ticket to Ride",
        image: [
            "/images/ticket-to-ride/ticket1.jpg",
            "/images/ticket-to-ride/ticket2.jpg",
        ],
        difficulty: 2.4,
        level: "Light",
        more: "https://www.daysofwonder.com/tickettoride/",
        description:
            "Collect train cards to claim railway routes across the map.",
        default: true,
    },
    {
        players: {
            min: 2,
            max: 4,
        },
        _id: "686512f9d1a03051c9f92b01",
        name: "Pandemic",
        image: [
            "/images/pandemic/pandemic1.jpg",
            "/images/pandemic/pandemic2.jpg",
        ],
        difficulty: 3.8,
        level: "Medium",
        more: "https://www.zmangames.com/en/products/pandemic/",
        description:
            "A cooperative game where players work to stop global outbreaks.",
    },
    {
        players: {
            min: 3,
            max: 6,
        },
        _id: "686512f9d1a03051c9f92b02",
        name: "Dixit",
        image: ["/images/dixit/dixit1.jpg", "/images/dixit/dixit2.jpg"],
        difficulty: 1.5,
        level: "Light",
        more: "https://www.libellud.com/games/dixit/",
        description:
            "A beautifully illustrated game of storytelling and imagination.",
    },
    {
        players: {
            min: 2,
            max: 4,
        },
        _id: "686512f9d1a03051c9f92b03",
        name: "Azul",
        image: ["/images/azul/azul1.jpg", "/images/azul/azul2.jpg"],
        difficulty: 2.1,
        level: "Light",
        more: "https://www.nextmovegames.com/en/games/azul",
        description:
            "A tile-drafting game to decorate the royal palace of Evora.",
        default: true,
    },
    {
        players: {
            min: 1,
            max: 4,
        },
        _id: "686512f9d1a03051c9f92b04",
        name: "Gloomhaven",
        image: [
            "/images/gloomhaven/gloomhaven1.jpg",
            "/images/gloomhaven/gloomhaven2.jpg",
        ],
        difficulty: 5,
        level: "Heavy",
        more: "https://cephalofair.com/gloomhaven",
        description:
            "A massive tactical combat and adventure game in a persistent world.",
    },
    {
        players: {
            min: 2,
            max: 4,
        },
        _id: "686512f9d1a03051c9f92b05",
        name: "Blokus",
        image: ["/images/blokus/blokus1.jpg", "/images/blokus/blokus2.jpg"],
        difficulty: 2,
        level: "Light",
        more: "https://www.mattelgames.com/en-us/blokus",
        description:
            "A fast-paced strategy game involving colorful pieces and smart moves.",
    },
    {
        players: {
            min: 2,
            max: 8,
        },
        _id: "686512f9d1a03051c9f92b06",
        name: "Codenames",
        image: [
            "/images/codenames/codenames1.jpg",
            "/images/codenames/codenames2.jpg",
        ],
        difficulty: 1.3,
        level: "Light",
        more: "https://codenamesgame.com/",
        description:
            "A party word game where players guess secret agents based on clues.",
        default: true,
    },
    {
        players: {
            min: 7,
            max: 15,
        },
        _id: "6865541bd1a03051c9f92b11",
        name: "Blood on the Clocktower",
        image: ["/images/botc/botc1.jpg", "/images/botc/botc2.jpg"],
        difficulty: 3.8,
        level: "Heavy",
        more: "https://www.botc.com",
        description:
            "A Social deduction game with secret roles for each player, trying to find out the evil characters... or get rid of everyone else who is not evil.",
        default: true,
    },
    ]

// console.log(arr.findIndex((game) => game.name == 3.8));

function filterGames(arr, level) {
    return arr.filter(game => game.level && game.level.toLowerCase() == level.toLowerCase());
}

function findByName(arr, name) {
    return arr.findIndex(game => game.name && game.name.toLowerCase() == name.toLowerCase());
}

function sortByDifficulty(arr) {
    return arr.sort()
}

console.log(filterGames(games.data, 'heavy'));

console.log('=================');

console.log(findByName(games.data, 'blood on the clocktower'));

console.log('=================');



