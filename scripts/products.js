// This file contains the product data for the Student Essentials Store. Each product is represented as an object with properties such as id, name, price, image, description, expanded description, and features. This data can be used to dynamically generate product listings on the website.

const products = [
{
    id: 1,
    name: "BIC 4-Colour Ballpoint Pen Set",
    price: "UGX 15,000",
    image: "images/index/BIC 4-Colour Ballpoint Pen Set.jpg",
    desc: "Classic multi-color pens perfect for organizing lecture notes and color-coding your study guides.",
    expandedDesc: "The BIC 4-Colour Ballpoint Pen Set is a must-have tool for students who want to keep their notes organized and visually structured. With four different ink colors in a single pen, it allows you to highlight key ideas, separate topics, and improve memory retention while studying. Its durable build ensures long-lasting use throughout the semester.",
    features: [
        "Long-lasting ink",
        "Retractable design",
        "4 colors in 1 pen",
        "Smooth writing experience",
        "Comfortable grip for long use",
        "Ideal for note organization"
    ]
},
{
    id: 2,
    name: "HP Wireless Keyboard",
    price: "UGX 95,000",
    image: "images/index/HP Wireless Keyboard.png",
    desc: "Sleek, silent-touch wireless keyboard designed for comfortable typing during long essay writing sessions.",
    expandedDesc: "The HP Wireless Keyboard offers a seamless typing experience with its quiet keys and ergonomic layout. Designed for productivity, it allows you to work on assignments, coding projects, and research papers without distractions. Its wireless functionality keeps your workspace clean and clutter-free.",
    features: [
        "2.4GHz Wireless",
        "Long battery life",
        "Spill-resistant",
        "Silent typing keys",
        "Ergonomic design",
        "Easy plug-and-play setup"
    ]
},
{
    id: 3,
    name: "Instant Noodles Variety Pack (12-Pack)",
    price: "UGX 22,000",
    image: "images/index/Instant Noodles Variety Pack.png",
    desc: "The ultimate survival kit for late-night study sessions.",
    expandedDesc: "This Instant Noodles Variety Pack is perfect for students who need quick and satisfying meals. With multiple flavors included, it ensures you never get bored while saving both time and money. Ideal for hostel living and late-night studying.",
    features: [
        "Ready in 3 minutes",
        "Energy-boosting meal",
        "Budget-friendly choice",
        "Multiple flavors included",
        "Easy to prepare",
        "Convenient storage"
    ]
},
{
    id: 4,
    name: "LED Folding Rechargeable Study Lamp",
    price: "UGX 45,000",
    image: "images/index/LED Folding Rechargeable Study Lamp.png",
    desc: "Bright LED light with adjustable brightness levels.",
    expandedDesc: "This LED Folding Study Lamp provides consistent lighting for reading, studying, and working at night. Its adjustable brightness and foldable design make it perfect for small hostel desks.",
    features: [
        "Rechargeable battery",
        "Eye-protection LED",
        "Compact & portable",
        "Adjustable brightness",
        "Modern design",
        "Energy efficient"
    ]
},
{
    id: 5,
    name: "A5 Hardcover Systematic Notebook",
    price: "UGX 8,500",
    image: "images/Products/A5 Hardcover Systematic Notebook.png",
    desc: "Durable hardcover notebook with 200 ruled pages.",
    expandedDesc: "The A5 Hardcover Systematic Notebook is designed for students who value organization and durability. With 200 ruled pages, it provides ample space for lecture notes, assignments, and personal planning. Its strong hardcover protects your notes from wear and tear, making it ideal for everyday academic use.",
    features: [
        "Premium 80gsm paper",
        "Sturdy binding",
        "Elastic closure strap",
        "Smooth writing surface",
        "Compact and portable size",
        "Ideal for structured note-taking"
    ]
},

{
    id: 6,
    name: "Casio fx-82MS Scientific Calculator",
    price: "UGX 45,000",
    image: "images/Products/Casio fx-82MS Scientific Calculator.png",
    desc: "Essential calculator for complex equations and statistics.",
    expandedDesc: "The Casio fx-82MS Scientific Calculator is a reliable academic tool for students in science, engineering, and mathematics. It supports a wide range of functions, allowing you to solve equations, perform statistical analysis, and handle advanced calculations efficiently during exams and coursework.",
    features: [
        "240 integrated functions",
        "High-resolution display",
        "Slide-on hard case",
        "User-friendly interface",
        "Durable design",
        "Exam-approved functionality"
    ]
},

{
    id: 7,
    name: "Oraimo 10,000mAh Compact Power Bank",
    price: "UGX 55,000",
    image: "images/Products/Oraimo 10,000mAh Compact Power Bank.png",
    desc: "Portable power bank for reliable charging.",
    expandedDesc: "The Oraimo 10,000mAh Power Bank ensures your devices stay powered throughout the day. Whether you're attending lectures or traveling, its fast-charging capability and compact design make it an essential companion for students and professionals.",
    features: [
        "Dual USB output",
        "Ultra-slim design",
        "2.1A Fast charging",
        "Long-lasting battery capacity",
        "Safe charging protection",
        "Compatible with multiple devices"
    ]
},

{
    id: 8,
    name: "SanDisk 64GB USB 3.0 Flash Drive",
    price: "UGX 35,000",
    image: "images/Products/SanDisk 64GB USB 3.0 Flash Drive.png",
    desc: "High-speed storage for files and media.",
    expandedDesc: "The SanDisk 64GB USB 3.0 Flash Drive provides fast and reliable storage for your documents, assignments, and media files. Its high-speed transfer capability ensures efficiency, while its durable design makes it suitable for everyday use on campus.",
    features: [
        "High-speed USB 3.0",
        "Secure access software",
        "Metal keyring loop",
        "Large storage capacity",
        "Durable casing",
        "Plug-and-play convenience"
    ]
},

{
    id: 9,
    name: "Nido Fortified Milk Powder (400g)",
    price: "UGX 24,000",
    image: "images/Products/Nido Fortified Milk Powder.png",
    desc: "Nutritious milk powder for daily energy.",
    expandedDesc: "Nido Fortified Milk Powder provides essential nutrients to keep you energized throughout the day. Perfect for breakfast or quick drinks, it supports a healthy lifestyle for busy students.",
    features: [
        "Rich in Vitamin C & D",
        "Instant dissolution",
        "Resealable tin",
        "Creamy taste",
        "Supports daily nutrition",
        "Long shelf life"
    ]
},

{
    id: 10,
    name: "McVitie's Digestive Biscuits (Twin Pack)",
    price: "UGX 12,500",
    image: "images/Products/McVitie's Digestive Biscuits.png",
    desc: "High-fiber biscuits perfect for snacks.",
    expandedDesc: "McVitie's Digestive Biscuits are a classic snack ideal for tea time or study breaks. With their rich wheat flavor and satisfying crunch, they provide both taste and nutrition.",
    features: [
        "Wheat flour goodness",
        "No artificial colors",
        "Value pack pricing",
        "High in fiber",
        "Perfect with tea",
        "Crispy texture"
    ]
},

{
    id: 11,
    name: "1.8L Stainless Steel Electric Kettle",
    price: "UGX 38,000",
    image: "images/Products/1.8L Stainless Steel Electric Kettle.png",
    desc: "Quick water boiling for daily use.",
    expandedDesc: "This 1.8L Electric Kettle is an essential appliance for hostel living. It allows you to boil water quickly for tea, coffee, or instant meals, saving time and effort.",
    features: [
        "Automatic shut-off",
        "Boil-dry protection",
        "360-degree swivel base",
        "Fast heating element",
        "Durable stainless steel body",
        "Easy to use design"
    ]
},

{
    id: 12,
    name: "Cotton 4x6 Bedding Set (3 Pieces)",
    price: "UGX 42,000",
    image: "images/Products/Cotton 4x6 Bedding Set (3 Pieces).png",
    desc: "Comfortable cotton bedding set.",
    expandedDesc: "This Cotton Bedding Set provides a soft and breathable sleeping experience. Designed for standard hostel beds, it ensures comfort and durability for everyday use.",
    features: [
        "100% Cotton material",
        "Fade-resistant colors",
        "Standard 4x6 hostel fit",
        "Soft and breathable fabric",
        "Easy to wash",
        "Includes pillowcases"
    ]
},

{
    id: 13,
    name: "Axe Dark Temptation Body Spray",
    price: "UGX 18,500",
    image: "images/Products/Axe Dark Temptation Body Spray.png",
    desc: "Long-lasting body spray fragrance.",
    expandedDesc: "Axe Dark Temptation Body Spray keeps you fresh and confident throughout the day. Its unique chocolate-inspired fragrance makes it a favorite for students.",
    features: [
        "48-hour freshness",
        "Sleek 150ml can",
        "Odor-protection formula",
        "Long-lasting scent",
        "Easy spray application",
        "Compact for travel"
    ]
},

{
    id: 14,
    name: "Colgate Triple Action Toothpaste (140g)",
    price: "UGX 6,500",
    image: "images/Products/Colgate Triple Action Toothpaste (140g).png",
    desc: "Complete oral care solution.",
    expandedDesc: "Colgate Triple Action Toothpaste offers protection against cavities, helps whiten teeth, and ensures fresh breath. It is an essential hygiene product for everyday use.",
    features: [
        "Fluoride protection",
        "Minty fresh flavor",
        "Value size tube",
        "Cavity protection",
        "Whitening action",
        "Fresh breath guarantee"
    ]
},

{
    id: 15,
    name: "Omo Hand Wash Detergent (500g)",
    price: "UGX 7,000",
    image: "images/Products/Omo Hand Wash Detergent (500g).png",
    desc: "Effective detergent for clean laundry.",
    expandedDesc: "Omo Hand Wash Detergent delivers powerful cleaning performance while remaining gentle on your hands. Perfect for students handling their own laundry.",
    features: [
        "Deep cleaning action",
        "Fresh scent",
        "Sudsing formula",
        "Removes tough stains",
        "Gentle on fabrics",
        "Economical usage"
    ]
},

{
    id: 16,
    name: "Plastic Mesh Shower Caddy / Basin",
    price: "UGX 12,000",
    image: "images/Products/Plastic Mesh Shower Caddy.png",
    desc: "Portable organizer for toiletries.",
    expandedDesc: "The Plastic Mesh Shower Caddy is designed for shared bathrooms, helping you organize and carry your toiletries easily. Its breathable mesh allows quick drying and prevents water buildup.",
    features: [
        "Drainage holes included",
        "Sturdy handle",
        "Fits all essentials",
        "Quick-dry mesh material",
        "Lightweight design",
        "Easy to clean"
    ]
}


];