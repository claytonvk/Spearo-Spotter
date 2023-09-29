
const spearfishingLocations = [
    {
        name: "Blue Lagoon",
        description: "Crystal clear waters and diverse marine life make this spot a favorite among spearos.",
        location: "Key West, Florida",
        difficulty: 3,
        image: "https://source.unsplash.com/random/800x600?ocean",
        longitude: -81.7974,
        latitude: 24.5551,
        author: '64f1265962291c7de65bfc70'
    },
    {
        name: "Rocky Cove",
        description: "Navigate through underwater caves in this rocky cove for an exhilarating dive.",
        location: "Malibu, California",
        difficulty: 4,
        image: "https://source.unsplash.com/random/800x600?underwater",
        longitude: -118.7798,
        latitude: 34.0259,
        author: '64f1265962291c7de65bfc70'
    },
    {
        name: "Hanauma Bay",
        description: "A marine protected area with abundant marine life and vibrant corals.",
        location: "Honolulu, Hawaii",
        difficulty: 2,
        image: "https://source.unsplash.com/random/800x600?coral",
        longitude: -157.7154,
        latitude: 21.2710,
        author: '64f1265962291c7de65bfc70'
    },
    {
        name: "Molokini Crater",
        description: "Spearfishing in the caldera of an extinct volcano, surrounded by clear blue waters.",
        location: "Maui, Hawaii",
        difficulty: 3,
        image: "https://source.unsplash.com/random/800x600?volcano",
        longitude: -156.5045,
        latitude: 20.6226,
        author: '64f1265962291c7de65bfc70'
    },
    {
        name: "Shark's Cove",
        description: "Explore underwater rock formations and the chance to spot various fish species.",
        location: "Haleiwa, Hawaii",
        difficulty: 2,
        image: "https://source.unsplash.com/random/800x600?shark",
        longitude: -158.1132,
        latitude: 21.6642,
        author: '64f1265962291c7de65bfc70'
    },
    {
        name: "Lanikai Beach",
        description: "Sandy beach with shallow waters and great visibility for beginners.",
        location: "Kailua, Hawaii",
        difficulty: 1,
        image: "https://source.unsplash.com/random/800x600?beach",
        longitude: -157.7385,
        latitude: 21.3956,
        author: '64f1265962291c7de65bfc70'
    },
    {
        name: "Ko Olina Reefs",
        description: "Explore the coral reefs near the Ko Olina Resort area for a variety of marine life.",
        location: "Kapolei, Hawaii",
        difficulty: 2,
        image: "https://source.unsplash.com/random/800x600?reef",
        longitude: -158.1259,
        latitude: 21.3389,
        author: '64f1265962291c7de65bfc70'
    },
    {
        name: "Waikiki Reefs",
        description: "Explore the reefs off Waikiki Beach with easy access and diverse marine life.",
        location: "Honolulu, Hawaii",
        difficulty: 2,
        image: "https://source.unsplash.com/random/800x600?reef",
        longitude: -157.8275,
        latitude: 21.2759,
        author: '64f1265962291c7de65bfc70'
    },
    {
        name: "Makapu'u Tide Pools",
        description: "Tide pools with interesting marine life, accessible during low tide.",
        location: "Honolulu, Hawaii",
        difficulty: 1,
        image: "https://source.unsplash.com/random/800x600?tidepool",
        longitude: -157.6528,
        latitude: 21.2982,
        author: '64f1265962291c7de65bfc70'
    },
    {
        name: "Kapalua Bay",
        description: "A sheltered bay with calm waters and great visibility, suitable for all skill levels.",
        location: "Maui, Hawaii",
        difficulty: 1,
        image: "https://source.unsplash.com/random/800x600?bay",
        longitude: -156.6733,
        latitude: 20.9995,
        author: '64f1265962291c7de65bfc70'
    },
    {
        name: "Kona Coast",
        description: "The Kona Coast offers a mix of underwater terrains and opportunities for larger fish.",
        location: "Kailua-Kona, Hawaii",
        difficulty: 3,
        image: "https://source.unsplash.com/random/800x600?coast",
        longitude: -155.9659,
        latitude: 19.6491,
        author: '64f1265962291c7de65bfc70'
    },
    {
        name: "Kaneohe Bay",
        description: "A large bay with seagrass beds and marine life, perfect for eco-conscious spearos.",
        location: "Kaneohe, Hawaii",
        difficulty: 2,
        image: "https://source.unsplash.com/random/800x600?seagrass",
        longitude: -157.7936,
        latitude: 21.4496,
        author: '64f1265962291c7de65bfc70'
    },
    {
        name: "Kahana Bay",
        description: "A bay with a mix of rocky and sandy areas, providing diverse underwater landscapes.",
        location: "Kaaawa, Hawaii",
        difficulty: 2,
        image: "https://source.unsplash.com/random/800x600?bay",
        longitude: -157.8399,
        latitude: 21.5540,
        author: '64f1265962291c7de65bfc70'
    },
    {
        name: "Haleiwa Trench",
        description: "A trench off Haleiwa known for its underwater rock formations and marine life.",
        location: "Haleiwa, Hawaii",
        difficulty: 3,
        image: "https://source.unsplash.com/random/800x600?underwater",
        longitude: -158.0101,
        latitude: 21.5964,
        author: '64f1265962291c7de65bfc70'
    },
    {
        name: "Sandy Island",
        description: "A remote island with sandy shores and clear waters, offering tranquil diving.",
        location: "Olowalu, Hawaii",
        difficulty: 2,
        image: "https://source.unsplash.com/random/800x600?island",
        longitude: -156.6105,
        latitude: 20.7989,
        author: '64f1265962291c7de65bfc70'
    },
    {
        name: "Waimanalo Reefs",
        description: "Reefs off Waimanalo Beach known for their vibrant coral formations and fish diversity.",
        location: "Waimanalo, Hawaii",
        difficulty: 2,
        image: "https://source.unsplash.com/random/800x600?coral",
        longitude: -157.6844,
        latitude: 21.3358,
        author: '64f1265962291c7de65bfc70'
    },
    {
        name: "North Shore Cliffs",
        description: "Dive near the cliffs of Oahu's North Shore for a unique underwater experience.",
        location: "Laie, Hawaii",
        difficulty: 4,
        image: "https://source.unsplash.com/random/800x600?cliffs",
        longitude: -157.9225,
        latitude: 21.6552,
        author: '64f1265962291c7de65bfc70'
    },
    {
        name: "Great Barrier Reef",
        description: "Explore the world's largest coral reef system with its incredible marine biodiversity.",
        location: "Queensland, Australia",
        difficulty: 3,
        image: "https://source.unsplash.com/random/800x600?coral",
        longitude: 145.9345,
        latitude: -16.7886,
        author: '64f1265962291c7de65bfc70'
    },
    {
        name: "Anse Lazio",
        description: "A stunning beach with clear waters and granite boulders, perfect for spearfishing.",
        location: "Praslin, Seychelles",
        difficulty: 2,
        image: "https://source.unsplash.com/random/800x600?beach",
        longitude: 55.4840,
        latitude: -4.3236,
        author: '64f1265962291c7de65bfc70'
    },
    {
        name: "The Blue Hole",
        description: "A deep blue sinkhole surrounded by lush vegetation, offering unique diving experiences.",
        location: "Belize",
        difficulty: 4,
        image: "https://source.unsplash.com/random/800x600?hole",
        longitude: -87.5344,
        latitude: 17.3179,
        author: '64f1265962291c7de65bfc70'
    },
    {
        name: "Sharm El Sheikh",
        description: "A popular diving destination with vibrant coral reefs and a variety of marine life.",
        location: "South Sinai, Egypt",
        difficulty: 2,
        image: "https://source.unsplash.com/random/800x600?reef",
        longitude: 34.3015,
        latitude: 27.9158,
        author: '64f1265962291c7de65bfc70'
    },
    {
        name: "Palau's Blue Corner",
        description: "An iconic dive site with strong currents and encounters with large pelagic species.",
        location: "Palau",
        difficulty: 5,
        image: "https://source.unsplash.com/random/800x600?ocean",
        longitude: 134.5589,
        latitude: 7.3555,
        author: '64f1265962291c7de65bfc70'
    },
    {
        name: "Mauritius Reefs",
        description: "Discover the rich underwater world of Mauritius with its colorful coral reefs.",
        location: "Mauritius",
        difficulty: 2,
        image: "https://source.unsplash.com/random/800x600?reef",
        longitude: 63.5317,
        latitude: -20.3484,
        author: '64f1265962291c7de65bfc70'
    },
    {
        name: "Gulf of Thailand",
        description: "Explore the Gulf's warm waters with abundant marine life and sunken wrecks.",
        location: "Gulf of Thailand",
        difficulty: 2,
        image: "https://source.unsplash.com/random/800x600?ocean",
        longitude: 101.0261,
        latitude: 9.7207,
        author: '64f1265962291c7de65bfc70'
    },
    {
        name: "Bali's Liberty Wreck",
        description: "Dive the USS Liberty shipwreck in Bali's Tulamben Bay, home to diverse fish species.",
        location: "Bali, Indonesia",
        difficulty: 3,
        image: "https://source.unsplash.com/random/800x600?shipwreck",
        longitude: 115.5941,
        latitude: -8.2780,
        author: '64f1265962291c7de65bfc70'
    },
    {
        name: "Maldives Atolls",
        description: "Experience the Maldives' atolls with their stunning reefs and abundant underwater life.",
        location: "Maldives",
        difficulty: 2,
        image: "https://source.unsplash.com/random/800x600?reef",
        longitude: 73.5049,
        latitude: 3.2028,
        author: '64f1265962291c7de65bfc70'
    },
    {
        name: "Komodo National Park",
        description: "Dive among Komodo's unique marine life and visit the famous Komodo dragons.",
        location: "Komodo, Indonesia",
        difficulty: 3,
        image: "https://source.unsplash.com/random/800x600?dragon",
        longitude: 119.6923,
        latitude: -8.6284,
        author: '64f1265962291c7de65bfc70'
    },
    {
        name: "Cozumel Reefs",
        description: "Explore the vibrant reefs of Cozumel, home to colorful fish and underwater diversity.",
        location: "Cozumel, Mexico",
        difficulty: 2,
        image: "https://source.unsplash.com/random/800x600?reef",
        longitude: -86.9450,
        latitude: 20.4229,
        author: '64f1265962291c7de65bfc70'
    },
    {
        name: "Galápagos Islands",
        description: "Dive the unique ecosystem of the Galápagos, with encounters with marine iguanas and more.",
        location: "Galápagos Islands, Ecuador",
        difficulty: 3,
        image: "https://source.unsplash.com/random/800x600?island",
        longitude: -89.2210,
        latitude: -0.7399,
        author: '64f1265962291c7de65bfc70'
    },
    {
        name: "Sipadan Island",
        description: "A Malaysian island with stunning coral walls and the chance to spot turtles and sharks.",
        location: "Sipadan Island, Malaysia",
        difficulty: 3,
        image: "https://source.unsplash.com/random/800x600?island",
        longitude: 118.6269,
        latitude: 4.1234,
        author: '64f1265962291c7de65bfc70'
    },
    {
        name: "Bora Bora Lagoon",
        description: "Crystal clear lagoon waters and coral gardens make this spot a tropical paradise.",
        location: "Bora Bora, French Polynesia",
        difficulty: 1,
        image: "https://source.unsplash.com/random/800x600?lagoon",
        longitude: -151.7421,
        latitude: -16.5004,
        author: '64f1265962291c7de65bfc70'
    },
    {
        name: "Cocos Island",
        description: "A UNESCO World Heritage Site known for its hammerhead shark sightings and marine diversity.",
        location: "Cocos Island, Costa Rica",
        difficulty: 4,
        image: "https://source.unsplash.com/random/800x600?island",
        longitude: -87.0206,
        latitude: 5.5143,
        author: '64f1265962291c7de65bfc70'
    }
]

for (location of spearfishingLocations) {
    location.images = [
        {
            url: 'https://res.cloudinary.com/dsil8igvc/image/upload/v1693508405/SpearoSpotter/bexicu321qqtzuqjmgqb.jpg',
            filename: 'SpearoSpotter/bexicu321qqtzuqjmgqb',
        }
    ]
}

module.exports = spearfishingLocations;