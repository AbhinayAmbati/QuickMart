const mobiles = [
    {
        id: 1,
        name: "iPhone 15 Pro Max",
        brand: "Apple",
        price: 1199.99,
        description: "The most powerful iPhone ever with A17 Pro chip, titanium design, and advanced camera system featuring a 48MP main camera with 5x optical zoom.",
        image: "https://imgs.search.brave.com/3GUyVG79yRlOwgoFFUAvAH117Phqg7E1CJ6vGjDBd8k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXBwbGUuY29tL25l/d3Nyb29tL2ltYWdl/cy8yMDIzLzA5L2Fw/cGxlLXVudmVpbHMt/aXBob25lLTE1LXBy/by1hbmQtaXBob25l/LTE1LXByby1tYXgv/YXJ0aWNsZS9BcHBs/ZS1pUGhvbmUtMTUt/UHJvLWxpbmV1cC1o/ZXJvLTIzMDkxMl9G/dWxsLUJsZWVkLUlt/YWdlLmpwZy5sYXJn/ZS5qcGc",
        isNew: true,
        rating: 4.9,
        reviews: 458,
        inStock: true,
        specs: {
            display: "6.7-inch Super Retina XDR OLED",
            processor: "A17 Pro Bionic",
            ram: "8GB",
            storage: ["256GB", "512GB", "1TB"],
            camera: {
                main: "48MP",
                ultraWide: "12MP",
                telephoto: "12MP",
                front: "12MP TrueDepth"
            },
            battery: "4422mAh",
            os: "iOS 17"
        },
        colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
        features: [
            "USB-C Port",
            "Dynamic Island",
            "ProMotion Display",
            "Always-On Display",
            "Action Button",
            "IP68 Water Resistance"
        ]
    },
    {
        id: 2,
        name: "Samsung Galaxy S24 Ultra",
        brand: "Samsung",
        price: 1299.99,
        description: "Revolutionary smartphone with AI capabilities, featuring a 200MP camera, S Pen support, and a stunning QHD+ display with adaptive refresh rate.",
        image: "https://imgs.search.brave.com/VjsLImZfOoL8aathbrxyNGevhWSwGxxTtLcyyCOPvWI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L1FX/Ulg1RDIyYWs1cmdE/aFdQWjlvN1EtMTIw/MC04MC5qcGc",
        isNew: true,
        rating: 4.8,
        reviews: 325,
        inStock: true,
        specs: {
            display: "6.8-inch QHD+ Dynamic AMOLED 2X",
            processor: "Snapdragon 8 Gen 3",
            ram: "12GB",
            storage: ["256GB", "512GB", "1TB"],
            camera: {
                main: "200MP",
                ultraWide: "12MP",
                telephoto1: "50MP (5x)",
                telephoto2: "10MP (3x)",
                front: "12MP"
            },
            battery: "5000mAh",
            os: "Android 14 (One UI 6.1)"
        },
        colors: ["Titanium Black", "Titanium Gray", "Titanium Violet", "Titanium Yellow"],
        features: [
            "S Pen Support",
            "AI Features",
            "45W Fast Charging",
            "Wireless DeX",
            "IP68 Rating",
            "Galaxy AI"
        ]
    },
    {
        id: 3,
        name: "Google Pixel 8 Pro",
        brand: "Google",
        price: 999.99,
        description: "Experience the best of Google AI with the Pixel 8 Pro, featuring advanced photography capabilities and the powerful Tensor G3 chip.",
        image: "https://imgs.search.brave.com/JNugQ6ZZtuB8PhhL50ncVxFat_x-Q7oPiWO1N5pWkp4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdG9y/YWdlLmdvb2dsZWFw/aXMuY29tL2d3ZWIt/dW5pYmxvZy1wdWJs/aXNoLXByb2QvaW1h/Z2VzL0Jsb2ctSGVh/ZGVyLUhpZ2gtUmVz/XzEud2lkdGgtMTIw/MC5mb3JtYXQtd2Vi/cC53ZWJw",
        isNew: false,
        rating: 4.7,
        reviews: 289,
        inStock: true,
        specs: {
            display: "6.7-inch LTPO OLED",
            processor: "Google Tensor G3",
            ram: "12GB",
            storage: ["128GB", "256GB", "512GB"],
            camera: {
                main: "50MP",
                ultraWide: "48MP",
                telephoto: "48MP",
                front: "10.5MP"
            },
            battery: "5050mAh",
            os: "Android 14"
        },
        colors: ["Obsidian", "Porcelain", "Bay Blue"],
        features: [
            "Magic Editor",
            "Best Take",
            "Audio Magic Eraser",
            "7 Years of Updates",
            "Temperature Sensor",
            "Face Unlock"
        ]
    },
    {
        id: 4,
        name: "OnePlus 12",
        brand: "OnePlus",
        price: 799.99,
        description: "Flagship killer with Hasselblad cameras, rapid charging, and smooth performance powered by Snapdragon 8 Gen 3.",
        image: "https://imgs.search.brave.com/k5egtktdmShij6lXspR7uSVLatTgPIUqHUhTDtjEnIQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y25ldC5jb20vYS9p/bWcvcmVzaXplLzNh/ZTYyZWUxZWM1MGM4/ZWJlYjAyMTBlNmRk/YTFkYjM4ZjA1NTE4/OGYvaHViLzIwMjQv/MDEvMTUvZjhlMDNi/ZWItYTNhOS00ZDBl/LTliY2UtNWYwOTFh/NTc4YTg3L29uZXBs/dXMtMTItMTJyLWNu/ZXQtbGFueG9uLTEw/LmpwZz9hdXRvPXdl/YnAmd2lkdGg9MTIw/MA",
        isNew: true,
        rating: 4.6,
        reviews: 178,
        inStock: true,
        specs: {
            display: "6.82-inch LTPO AMOLED",
            processor: "Snapdragon 8 Gen 3",
            ram: "12GB",
            storage: ["256GB", "512GB"],
            camera: {
                main: "50MP",
                ultraWide: "48MP",
                telephoto: "64MP",
                front: "32MP"
            },
            battery: "5400mAh",
            os: "OxygenOS 14"
        },
        colors: ["Flowy Emerald", "Silky Black"],
        features: [
            "100W SUPERVOOC Charging",
            "50W Wireless Charging",
            "Rain Touch",
            "Hasselblad Camera",
            "Ray Tracing",
            "Aqua Touch"
        ]
    },
    {
        id: 5,
        name: "Nothing Phone (2)",
        brand: "Nothing",
        price: 699.99,
        description: "Unique smartphone with Glyph Interface, featuring a transparent design and clean Android experience with Nothing OS 2.0.",
        image: "https://imgs.search.brave.com/Rw-k9_mVemMMc5bHFp1lXKG-n9VE5LLzoAeeFylGJus/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLmFucG9pbWFn/ZXMuY29tL3dvcmRw/cmVzcy93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wNi9ub3Ro/aW5nLXBob25lLTIt/NWsxLXNjYWxlZC5q/cGc",
        isNew: false,
        rating: 4.5,
        reviews: 156,
        inStock: true,
        specs: {
            display: "6.7-inch LTPO OLED",
            processor: "Snapdragon 8+ Gen 1",
            ram: "12GB",
            storage: ["256GB", "512GB"],
            camera: {
                main: "50MP",
                ultraWide: "50MP",
                front: "32MP"
            },
            battery: "4700mAh",
            os: "Nothing OS 2.0"
        },
        colors: ["White", "Dark Grey"],
        features: [
            "Glyph Interface",
            "45W Fast Charging",
            "15W Wireless Charging",
            "Transparent Design",
            "Face Unlock",
            "In-display Fingerprint"
        ]
    }
];

export default mobiles;