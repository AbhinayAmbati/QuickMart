const products = [
    {
        id: 1,
        name: "Premium Wireless Headphones",
        price: 299.99,
        description: "Experience crystal-clear sound with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and luxurious memory foam ear cushions for all-day comfort.",
        image: "https://imgs.search.brave.com/bl0hdQWzSZlSOUcGJoZsRDx44ZK_E7HBE5mwYM8bik8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/ODQ3MjE4L3Bob3Rv/L2hlYWRwaG9uZXMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVZYTEtIVXRHZEQ4/cFBIOFB6UkhTLTg3/UW5kekRzc1pwTWRz/T2ZaTmhLdVU9",
        isNew: true,
        category: "Electronics",
        subCategory: "Audio",
        rating: 4.8,
        reviews: 234,
        inStock: true,
        specs: {
            battery: "30 hours",
            connectivity: "Bluetooth 5.0",
            range: "10m",
            warranty: "2 years"
        },
        colors: ["Black", "Silver", "Midnight Blue"],
        features: [
            "Active Noise Cancellation",
            "Touch Controls",
            "Voice Assistant Support",
            "Multipoint Pairing"
        ]
    },
    {
        id: 2,
        name: "Smart Fitness Watch",
        price: 199.99,
        description: "Track your health and fitness goals with our advanced smartwatch. Features include heart rate monitoring, sleep tracking, GPS, and a vibrant AMOLED display. Water-resistant up to 50m.",
        image: "https://imgs.search.brave.com/kIRF5m99hR5gWyifX0aJfoMmRCA7acL8Ytec1wss7DE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFiSlp4MXY4R0wu/anBn",
        isNew: false,
        category: "Wearables",
        subCategory: "Smartwatches",
        rating: 4.6,
        reviews: 189,
        inStock: true,
        specs: {
            display: "1.4\" AMOLED",
            battery: "7 days",
            waterResistance: "5ATM",
            sensors: "Heart rate, SpO2, Temperature"
        },
        colors: ["Black", "White", "Rose Gold"],
        features: [
            "24/7 Heart Rate Monitoring",
            "Sleep Analysis",
            "GPS Tracking",
            "50+ Sport Modes"
        ]
    },
    {
        id: 3,
        name: "Professional Camera Drone",
        price: 799.99,
        description: "Capture stunning aerial footage with our 4K camera drone. Includes intelligent flight modes, 3-axis gimbal stabilization, and 30 minutes of flight time. Perfect for professional photographers.",
        image: "https://imgs.search.brave.com/maTWIkZloreYkANVlvRja0wK3U4gK4eQXMZFH-jjrWw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly8xNDkz/NTUzMTcudjIucHJl/c3NhYmxlY2RuLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8xMC80XzFhMjli/ZDZmLWVmM2EtNDc5/OS1iMzA3LWUxODgz/ZGRmMzUzN18zNjB4/LnBuZy53ZWJw",
        isNew: true,
        category: "Photography",
        subCategory: "Drones",
        rating: 4.9,
        reviews: 156,
        inStock: false,
        specs: {
            camera: "4K/60fps",
            flightTime: "30 minutes",
            range: "10km",
            weight: "249g"
        },
        colors: ["Grey"],
        features: [
            "3-Axis Gimbal",
            "Object Tracking",
            "Obstacle Avoidance",
            "Return to Home"
        ]
    },
    {
        id: 4,
        name: "Ergonomic Gaming Chair",
        price: 249.99,
        description: "Game in comfort with our premium gaming chair. Features include 4D adjustable armrests, 165° recline, lumbar support, and premium PU leather upholstery. Built for long gaming sessions.",
        image: "https://imgs.search.brave.com/3JMKVtWRkKvTGVs28XktLqGELLf0IrLiyXjYLkGY06I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFmc0R6Y0VZcUwu/anBn",
        isNew: false,
        category: "Gaming",
        subCategory: "Furniture",
        rating: 4.7,
        reviews: 312,
        inStock: true,
        specs: {
            maxWeight: "150kg",
            recline: "165°",
            material: "PU Leather",
            frameType: "Steel"
        },
        colors: ["Black/Red", "Black/Blue", "White/Black"],
        features: [
            "4D Adjustable Armrests",
            "Lumbar Support",
            "Neck Pillow",
            "Tilt Lock"
        ]
    },
    {
        id: 5,
        name: "Mechanical Keyboard",
        price: 159.99,
        description: "Enhanced typing experience with Cherry MX switches, RGB backlighting, and aluminum construction. Includes customizable macros and dedicated media controls.",
        image: "https://imgs.search.brave.com/gfSxxQBmjbuH0VzdjRdo7LSe_bDKQKdMWBsBJwQ_mQg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM5/NjIzMTEwNi9waG90/by9nYW1pbmcta2V5/Ym9hcmQtd2l0aC1i/YWNrbGlnaHQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVY3/cHJ4SU1lM2ZNeWpr/MmxJMEZyNmw1MjN4/eWo0YnpmLWNuWTg0/d0U3UlE9",
        isNew: true,
        category: "Computer Accessories",
        subCategory: "Keyboards",
        rating: 4.5,
        reviews: 178,
        inStock: true,
        specs: {
            switches: "Cherry MX Red",
            layout: "Full-size",
            material: "Aluminum",
            connectivity: "USB-C"
        },
        colors: ["Black", "White", "Space Grey"],
        features: [
            "Per-key RGB",
            "N-key Rollover",
            "Programmable Keys",
            "Media Controls"
        ]
    },
    {
        id: 6,
        name: "Ultra-Wide Monitor",
        price: 699.99,
        description: "34-inch curved ultra-wide monitor with 3440x1440 resolution, 144Hz refresh rate, and HDR support. Perfect for productivity and immersive gaming.",
        image: "https://imgs.search.brave.com/FLM5ZbajJ0Xfcuwpl3enBSmXNT_uF0ZnGw4Xpp2qWx4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L0dt/eDNiaTVXQk1rQnhQ/ODhReVhLQmgtMzIw/LTgwLmpwZw",
        isNew: false,
        category: "Electronics",
        subCategory: "Monitors",
        rating: 4.8,
        reviews: 245,
        inStock: true,
        specs: {
            resolution: "3440x1440",
            refreshRate: "144Hz",
            panel: "IPS",
            responseTime: "1ms"
        },
        colors: ["Black"],
        features: [
            "G-Sync Compatible",
            "HDR 400",
            "USB-C Hub",
            "Picture-by-Picture"
        ]
    },
    {
        id: 7,
        name: "Smart Home Security Camera",
        price: 129.99,
        description: "Keep your home secure with 2K resolution, night vision, and AI-powered person detection. Includes two-way audio and cloud storage options.",
        image: "https://imgs.search.brave.com/gu_1IO2C6TWy6wrV5EANkl2vZ0lG7ycCSW02iHMRpwE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L0JR/SHpKeG5IOU1qaG5p/aWFNdVZnZ2QtMzIw/LTgwLmpwZw",
        isNew: true,
        category: "Smart Home",
        subCategory: "Security",
        rating: 4.7,
        reviews: 892,
        inStock: true,
        specs: {
            resolution: "2K",
            fieldOfView: "160°",
            storage: "Cloud/Local",
            powerSource: "Wired"
        },
        colors: ["White", "Black"],
        features: [
            "AI Person Detection",
            "Night Vision",
            "Two-way Audio",
            "Weather Resistant"
        ]
    },
    {
        id: 8,
        name: "Portable Power Station",
        price: 499.99,
        description: "500Wh portable power station with multiple outputs, fast charging, and solar compatibility. Perfect for camping, emergencies, or outdoor activities.",
        image: "https://imgs.search.brave.com/ueNw0c3HVGdw4JGh0c0aDHWK1UsO3VEgFtqHu_nHys8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFEMEYrNE94SVMu/anBn",
        isNew: false,
        category: "Electronics",
        subCategory: "Power",
        rating: 4.9,
        reviews: 167,
        inStock: true,
        specs: {
            capacity: "500Wh",
            acOutput: "500W",
            charging: "60W USB-C",
            weight: "5.5kg"
        },
        colors: ["Dark Grey"],
        features: [
            "Multiple Outputs",
            "Solar Compatible",
            "LED Light",
            "Pure Sine Wave"
        ]
    },
    {
        id: 9,
        name: "Wireless Gaming Mouse",
        price: 149.99,
        description: "Professional gaming mouse with 25K DPI sensor, wireless charging, and customizable weight system. Features RGB lighting and 11 programmable buttons.",
        image: "https://imgs.search.brave.com/h3AnpRRnCcgS2RcE2Me6Qq5qauHaAQdfKVxlsJ0KDOs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFQeXV6RkVDTkwu/anBn",
        isNew: true,
        category: "Gaming",
        subCategory: "Accessories",
        rating: 4.6,
        reviews: 445,
        inStock: true,
        specs: {
            sensor: "25K DPI",
            battery: "70 hours",
            weight: "93g",
            buttons: "11"
        },
        colors: ["Black", "White"],
        features: [
            "Wireless Charging",
            "Adjustable Weight",
            "RGB Lighting",
            "On-board Memory"
        ]
    },
    {
        id: 10,
        name: "4K Streaming Camera",
        price: 199.99,
        description: "Professional streaming camera with 4K resolution, auto-focus, and built-in privacy shutter. Perfect for streaming, video conferencing, and content creation.",
        image: "https://imgs.search.brave.com/MLfmKQOpUjrwM8kTar5U2wKconvUpnejArgl8srqbr8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L0FW/U3lOcktiYk1yaFpX/M214eEJhdkQtMzIw/LTgwLnBuZw",
        isNew: false,
        category: "Electronics",
        subCategory: "Cameras",
        rating: 4.7,
        reviews: 323,
        inStock: true,
        specs: {
            resolution: "4K/30fps",
            fov: "90°",
            focus: "Autofocus",
            microphone: "Stereo"
        },
        colors: ["Black"],
        features: [
            "Privacy Shutter",
            "Noise Reduction",
            "Low Light Enhancement",
            "Multiple Mount Options"
        ]
    },
    {
        id: 11,
        name: "Smart Coffee Maker",
        price: 179.99,
        description: "WiFi-enabled coffee maker with smartphone control, scheduled brewing, and customizable brewing strength. Features 12-cup capacity and keep-warm function.",
        image: "https://imgs.search.brave.com/Vwx1d6d3IpHruwO2qq616THJMFDjBdXBuj9lYBfBm8E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/NDY1OTg1Mi9waG90/by9jb2ZmZWUtbWFj/aGluZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9YlJvRXJo/cldJZllzS1QxT2RY/eHJZaFZseE5jeW5O/RUFFTWpTQU80VGg3/OD0",
        isNew: true,
        category: "Smart Home",
        subCategory: "Kitchen",
        rating: 4.4,
        reviews: 234,
        inStock: true,
        specs: {
            capacity: "12 cups",
            power: "1000W",
            warranty: "2 years",
            display: "LCD"
        },
        colors: ["Stainless Steel", "Black"],
        features: [
            "WiFi Control",
            "Voice Assistant",
            "Custom Presets",
            "Auto Shutoff"
        ]
    },
    {
        id: 12,
        name: "Wireless Earbuds",
        price: 159.99,
        description: "True wireless earbuds with active noise cancellation, transparency mode, and wireless charging case. Features touch controls and voice assistant support.",
        image: "https://imgs.search.brave.com/dZ8gJcCeIMY6IxC3qBEcU0aoagxYWTZjFOVQ_O1OsLs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM2/NDM5ODU0NS9waG90/by93aXJlbGVzcy1i/bHVldG9vdGgtaGVh/ZHBob25lcy1pc29s/YXRlZC1vbi13aGl0/ZS1iYWNrZ3JvdW5k/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1rYWdBbUpxbTBT/M0Z5ZXpneUVVMWhj/MWhUczhwSkRQTGE2/V042ODMzWlQwPQ",
        isNew: false,
        category: "Electronics",
        subCategory: "Audio",
        rating: 4.5,
        reviews: 567,
        inStock: true,
        specs: {
            battery: "6+24 hours",
            driver: "11mm",
            resistance: "IPX4",
            bluetooth: "5.2"
        },
        colors: ["Black", "White", "Navy"],
        features: [
            "Active Noise Cancellation",
            "Transparency Mode",
            "Wireless Charging",
            "Touch Controls"
        ]
    }
];

export default products;