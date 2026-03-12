// Question Bank
let username = "";
// ====== Subject Question Bank ======
const questionBanks = {
  English: [
    // Grammar - Tenses
    {
      q: "Choose the correct form: By next year, she _______ her degree.",
      opts: [
        "will complete",
        "will have completed",
        "has completed",
        "is completing",
      ],
      ans: 1,
    },
    {
      q: "Which sentence uses the present perfect tense correctly?",
      opts: [
        "She went to London last year.",
        "She has gone to London.",
        "She is going to London.",
        "She goes to London every year.",
      ],
      ans: 1,
    },
    {
      q: "Identify the tense: 'The sun rises in the east.'",
      opts: [
        "Present Continuous",
        "Present Simple",
        "Past Simple",
        "Future Simple",
      ],
      ans: 1,
    },
    {
      q: "Choose the correct past continuous tense:",
      opts: ["I was eating", "I ate", "I have eaten", "I am eating"],
      ans: 0,
    },
    {
      q: "If I had known, I _______ you.",
      opts: ["would help", "would have helped", "will help", "helped"],
      ans: 1,
    },
    // Subject-Verb Agreement
    {
      q: "Choose the correct verb: Either the students or the teacher _______ responsible.",
      opts: ["is", "are", "were", "be"],
      ans: 0,
    },
    {
      q: "Which sentence has correct subject-verb agreement?",
      opts: [
        "The team are playing well.",
        "The news is good.",
        "My trousers are new.",
        "The scissors is sharp.",
      ],
      ans: 1,
    },
    {
      q: "Choose the correct form: Neither the manager nor his assistants _______ present.",
      opts: ["is", "are", "was", "were"],
      ans: 1,
    },
    // Modal Verbs
    {
      q: "Choose the correct modal: You _______ submit your assignment by Friday.",
      opts: ["must", "can", "may", "might"],
      ans: 0,
    },
    {
      q: "Which sentence expresses ability in the past?",
      opts: [
        "She can sing well.",
        "She could sing well.",
        "She may sing well.",
        "She will sing well.",
      ],
      ans: 1,
    },
    // Passive Voice
    {
      q: "Change to passive: 'The chef prepared a delicious meal.'",
      opts: [
        "A delicious meal was prepared by the chef.",
        "A delicious meal is prepared by the chef.",
        "A delicious meal has been prepared by the chef.",
        "A delicious meal will be prepared by the chef.",
      ],
      ans: 0,
    },
    {
      q: "Which sentence is in the passive voice?",
      opts: [
        "The boy kicked the ball.",
        "The ball was kicked by the boy.",
        "The boy is kicking the ball.",
        "The ball kicks the boy.",
      ],
      ans: 1,
    },
    // Conditionals
    {
      q: "What type of conditional is: 'If it rains, we will cancel the trip'?",
      opts: [
        "Zero conditional",
        "First conditional",
        "Second conditional",
        "Third conditional",
      ],
      ans: 1,
    },
    {
      q: "Choose the correct conditional: If I _______ rich, I would buy a yacht.",
      opts: ["am", "was", "were", "be"],
      ans: 2,
    },
    // Direct and Indirect Speech
    {
      q: "Change to indirect speech: He said, 'I am tired.'",
      opts: [
        "He said that he was tired.",
        "He said that I am tired.",
        "He said he is tired.",
        "He said he was tired.",
      ],
      ans: 0,
    },
    {
      q: "Choose the correct reporting verb: She _______ that she was coming.",
      opts: ["said", "told", "stated", "informed"],
      ans: 1,
    },
    {
      q: "Change to indirect speech: 'I love reading books,' she said.",
      opts: [
        "She said she loves reading books.",
        "She said she loved reading books.",
        "She said I love reading books.",
        "She told she loves reading books.",
      ],
      ans: 1,
    },
    // Vocabulary - Synonyms
    {
      q: "Choose the synonym of 'ephemeral':",
      opts: ["Permanent", "Temporary", "Eternal", "Lasting"],
      ans: 1,
    },
    {
      q: "Which word is a synonym of 'meticulous'?",
      opts: ["Careless", "Careful", "Quick", "Slow"],
      ans: 1,
    },
    {
      q: "Choose the synonym of 'benevolent':",
      opts: ["Cruel", "Kind", "Angry", "Sad"],
      ans: 1,
    },
    // Vocabulary - Antonyms
    {
      q: "Choose the antonym of 'pragmatic':",
      opts: ["Practical", "Idealistic", "Realistic", "Sensible"],
      ans: 1,
    },
    {
      q: "Which word is the antonym of 'verbose'?",
      opts: ["Talkative", "Brief", "Wordy", "Loquacious"],
      ans: 1,
    },
    {
      q: "Choose the antonym of 'gregarious':",
      opts: ["Sociable", "Introverted", "Friendly", "Outgoing"],
      ans: 1,
    },
    // Phrasal Verbs
    {
      q: "Choose the correct phrasal verb: Please _______ your application form.",
      opts: ["fill in", "fill out", "fill up", "Both A and B"],
      ans: 3,
    },
    {
      q: "What does 'come across' mean?",
      opts: ["Arrive", "Meet unexpectedly", "Follow", "Understand"],
      ans: 1,
    },
    {
      q: "Choose the correct phrasal verb: The plane _______ at 6 PM.",
      opts: ["takes off", "takes after", "takes in", "takes up"],
      ans: 0,
    },
    // Word Formation
    {
      q: "Choose the noun form of 'benevolent':",
      opts: ["Benevolence", "Benevolentness", "Benevolently", "Benevoling"],
      ans: 0,
    },
    {
      q: "Choose the adjective form of 'mystery':",
      opts: ["Mysterious", "Mysteriate", "Mysterically", "Mysteryous"],
      ans: 0,
    },
    {
      q: "Choose the adverb form of 'careful':",
      opts: ["Carefully", "Carefuly", "Carefull", "Carefuly"],
      ans: 0,
    },
    // Figures of Speech
    {
      q: "Identify the figure of speech: 'The wind whispered through the trees.'",
      opts: ["Simile", "Metaphor", "Personification", "Hyperbole"],
      ans: 2,
    },
    {
      q: "Which sentence contains a metaphor?",
      opts: [
        "She is as brave as a lion.",
        "The snow is a white blanket.",
        "He runs like a cheetah.",
        "Life is a journey.",
      ],
      ans: 3,
    },
    {
      q: "Identify the figure of speech: 'All the world's a stage.'",
      opts: ["Simile", "Metaphor", "Personification", "Hyperbole"],
      ans: 1,
    },
    {
      q: "What figure of speech is 'Time is money'?",
      opts: ["Simile", "Metaphor", "Personification", "Hyperbole"],
      ans: 1,
    },
    {
      q: "Identify: 'The clouds danced across the sky.'",
      opts: ["Simile", "Metaphor", "Personification", "Hyperbole"],
      ans: 2,
    },
    // Parts of Speech
    {
      q: "Identify the part of speech of 'quickly' in: 'He ran quickly.'",
      opts: ["Adjective", "Adverb", "Verb", "Noun"],
      ans: 1,
    },
    {
      q: "What part of speech is 'although'?",
      opts: ["Conjunction", "Preposition", "Interjection", "Article"],
      ans: 0,
    },
    {
      q: "Identify the preposition: 'The cat is under the table.'",
      opts: ["cat", "is", "under", "table"],
      ans: 2,
    },
    // Punctuation
    {
      q: "Choose the correctly punctuated sentence:",
      opts: [
        "Its raining outside.",
        "It's raining outside.",
        "Its' raining outside.",
        "Its raining' outside.",
      ],
      ans: 1,
    },
    {
      q: "Which sentence uses the apostrophe correctly?",
      opts: [
        "The childrens toys are scattered.",
        "The children's toys are scattered.",
        "The childrens' toys are scattered.",
        "The childs' toys are scattered.",
      ],
      ans: 1,
    },
    // Sentence Structure
    {
      q: "Identify the type of sentence: 'What a beautiful day!'",
      opts: ["Declarative", "Interrogative", "Exclamatory", "Imperative"],
      ans: 2,
    },
    {
      q: "Which is a complex sentence?",
      opts: [
        "I like tea.",
        "She came but I left.",
        "Because it rained, we stayed home.",
        "John and Mary arrived.",
      ],
      ans: 2,
    },
    {
      q: "Choose the compound sentence:",
      opts: [
        "I studied hard, yet I failed.",
        "Because I studied hard, I passed.",
        "If I study, I will pass.",
        "Studying hard leads to success.",
      ],
      ans: 0,
    },
    // Vocabulary - Idioms
    {
      q: "What does 'break the ice' mean?",
      opts: [
        "Shatter ice",
        "Make people comfortable",
        "Start a fight",
        "End a conversation",
      ],
      ans: 1,
    },
    {
      q: "Choose the meaning of 'once in a blue moon':",
      opts: ["Every day", "Rarely", "Always", "Never"],
      ans: 1,
    },
    {
      q: "What does 'bite the bullet' mean?",
      opts: [
        "Eat something spicy",
        "Face difficulty bravely",
        "Miss an opportunity",
        "Finish quickly",
      ],
      ans: 1,
    },
    // Literary Devices
    {
      q: "What literary device is used in: 'The star brightened the night'?",
      opts: ["Metaphor", "Simile", "Personification", "Hyperbole"],
      ans: 2,
    },
    {
      q: "Identify the alliteration in: 'Peter Piper picked a peck of pickled peppers.'",
      opts: [
        "Peter Piper",
        "picked a peck",
        "pickled peppers",
        "All of the above",
      ],
      ans: 0,
    },
    // Comprehension & Analysis
    {
      q: "In a narrative, what is the setting?",
      opts: [
        "The main character",
        "The time and place",
        "The conflict",
        "The climax",
      ],
      ans: 1,
    },
    {
      q: "What is the main theme of a story?",
      opts: [
        "The plot summary",
        "The central idea or message",
        "The character names",
        "The ending",
      ],
      ans: 1,
    },
    {
      q: "Who is the protagonist in a story?",
      opts: [
        "The main character",
        "The villain",
        "The supporting character",
        "The narrator",
      ],
      ans: 0,
    },
  ],

  Mathematics: [
    // Number Theory & Operations
    { q: "Simplify: (2³ × 2⁴) ÷ 2²", opts: ["2⁵", "2⁹", "2⁴", "2⁸"], ans: 0 },
    { q: "Find the value of x: 3ˣ = 81", opts: ["2", "3", "4", "5"], ans: 2 },
    {
      q: "What is the LCM of 12 and 18?",
      opts: ["36", "72", "6", "216"],
      ans: 0,
    },
    { q: "Find the HCF of 48 and 72.", opts: ["12", "24", "36", "48"], ans: 1 },
    {
      q: "Simplify: √(50) + √(18)",
      opts: ["8√2", "4√2", "68√2", "2√2"],
      ans: 0,
    },
    // Algebra
    {
      q: "If 2x + 3y = 12 and x - y = 1, find x.",
      opts: ["3", "2", "4", "5"],
      ans: 0,
    },
    {
      q: "Factorize: x² - 9",
      opts: ["(x-3)(x+3)", "(x-9)(x+1)", "(x-3)²", "(x+3)²"],
      ans: 0,
    },
    {
      q: "Solve: x² - 5x + 6 = 0",
      opts: ["x = 1 or 2", "x = 2 or 3", "x = 3 or 4", "x = -2 or -3"],
      ans: 1,
    },
    {
      q: "If y varies directly as x, and y = 12 when x = 4, find y when x = 10.",
      opts: ["20", "30", "40", "24"],
      ans: 1,
    },
    { q: "Simplify: (x³)⁴", opts: ["x⁷", "x¹²", "x⁴³", "x⁻¹"], ans: 1 },
    // Geometry
    {
      q: "In a triangle, angles are in the ratio 1:2:3. Find the largest angle.",
      opts: ["60°", "90°", "120°", "45°"],
      ans: 1,
    },
    {
      q: "The circumference of a circle is 44cm. Find its radius (use π = 22/7).",
      opts: ["7cm", "14cm", "22cm", "11cm"],
      ans: 0,
    },
    {
      q: "Find the area of a triangle with base 12cm and height 8cm.",
      opts: ["48cm²", "96cm²", "20cm²", "40cm²"],
      ans: 0,
    },
    {
      q: "A chord of a circle is 8cm from the center. If the radius is 10cm, find the chord length.",
      opts: ["12cm", "16cm", "20cm", "6cm"],
      ans: 1,
    },
    {
      q: "In a right-angled triangle, the hypotenuse is 13cm and one side is 5cm. Find the other side.",
      opts: ["8cm", "12cm", "√194cm", "10cm"],
      ans: 1,
    },
    // Trigonometry
    {
      q: "If sin θ = 3/5, find cos θ.",
      opts: ["4/5", "5/3", "3/4", "5/4"],
      ans: 0,
    },
    { q: "Find the value of tan 45°.", opts: ["0", "1", "√3", "1/√3"], ans: 1 },
    {
      q: "In a right triangle, if adjacent = 6 and opposite = 8, find the hypotenuse.",
      opts: ["10", "14", "7", "√28"],
      ans: 0,
    },
    { q: "Simplify: sin²θ + cos²θ", opts: ["0", "1", "2", "sin2θ"], ans: 1 },
    { q: "Find tan 60°.", opts: ["1/√3", "√3", "1", "√2"], ans: 1 },
    // Statistics
    {
      q: "Find the mean of: 5, 8, 12, 15, 20",
      opts: ["12", "15", "10", "60"],
      ans: 0,
    },
    {
      q: "The mode of the data 3, 5, 3, 7, 5, 8, 3 is:",
      opts: ["3", "5", "7", "3 and 5"],
      ans: 0,
    },
    {
      q: "Find the median: 12, 5, 8, 15, 20",
      opts: ["12", "8", "15", "10"],
      ans: 0,
    },
    {
      q: "The range of the data 23, 45, 12, 67, 34 is:",
      opts: ["55", "45", "12", "67"],
      ans: 0,
    },
    {
      q: "A die is thrown once. What is the probability of getting a prime number?",
      opts: ["1/2", "1/3", "2/3", "1/6"],
      ans: 0,
    },
    // Commercial Mathematics
    {
      q: "A book costs $120 after a 20% discount. Find the marked price.",
      opts: ["$150", "$140", "$100", "$144"],
      ans: 0,
    },
    {
      q: "Simple interest on $500 at 6% per annum for 3 years is:",
      opts: ["$90", "$80", "$70", "$60"],
      ans: 0,
    },
    {
      q: "A camera costs $2400. If it depreciates by 10% per year, find its value after 2 years.",
      opts: ["$1944", "$2160", "$1920", "$2000"],
      ans: 0,
    },
    {
      q: "If 8 workers can complete a job in 12 days, how many days will 6 workers take?",
      opts: ["16 days", "9 days", "14 days", "18 days"],
      ans: 0,
    },
    {
      q: "A shopkeeper sells an article for $840 at a profit of 20%. Find the cost price.",
      opts: ["$700", "$800", "$680", "$720"],
      ans: 0,
    },
    // Ratio & Proportion
    {
      q: "Divide $240 in the ratio 3:5:4.",
      opts: [
        "$40, $80, $120",
        "$48, $80, $112",
        "$60, $100, $80",
        "$50, $90, $100",
      ],
      ans: 2,
    },
    {
      q: "If a car travels 240km in 4 hours, what is its speed?",
      opts: ["60 km/h", "50 km/h", "70 km/h", "80 km/h"],
      ans: 0,
    },
    {
      q: "A mixture contains milk and water in the ratio 5:3. If it has 15L milk, how much water is there?",
      opts: ["9L", "12L", "8L", "10L"],
      ans: 0,
    },
    {
      q: "If x:y = 3:4 and y:z = 6:5, find x:y:z.",
      opts: ["3:4:5", "9:12:10", "3:6:5", "9:24:25"],
      ans: 1,
    },
    {
      q: "A map scale is 1:50000. If two cities are 3cm apart on the map, what is the actual distance?",
      opts: ["1.5 km", "15 km", "150 km", "0.15 km"],
      ans: 1,
    },
    // Mensuration
    {
      q: "Find the volume of a cube with side 5cm.",
      opts: ["125 cm³", "25 cm³", "75 cm³", "150 cm³"],
      ans: 0,
    },
    {
      q: "The curved surface area of a cylinder is 440 cm². If height is 10cm, find the radius.",
      opts: ["7 cm", "14 cm", "22 cm", "5 cm"],
      ans: 0,
    },
    {
      q: "Find the total surface area of a sphere with radius 7cm.",
      opts: ["196π cm²", "343π cm²", "154π cm²", "616π cm²"],
      ans: 3,
    },
    {
      q: "The volume of a cone is 154 cm³ and height is 3cm. Find its radius (use π = 22/7).",
      opts: ["7 cm", "14 cm", "3.5 cm", "21 cm"],
      ans: 0,
    },
    {
      q: "Find the area of a rhombus with diagonals 12cm and 8cm.",
      opts: ["96 cm²", "48 cm²", "20 cm²", "40 cm²"],
      ans: 1,
    },
    // Sets & Functions
    {
      q: "If A = {1,2,3} and B = {3,4,5}, find A ∪ B.",
      opts: ["{3}", "{1,2,3,4,5}", "{1,2}", "{4,5}"],
      ans: 1,
    },
    {
      q: "If A = {a,b,c} and B = {a,b,c,d,e}, then A is:",
      opts: ["Superset", "Subset", "Equal set", "Empty set"],
      ans: 1,
    },
    {
      q: "Find f(-1) if f(x) = x² + 2x - 3.",
      opts: ["-4", "0", "4", "-2"],
      ans: 0,
    },
    {
      q: "If f(x) = 2x + 3, find f⁻¹(x).",
      opts: ["(x-3)/2", "2x - 3", "x/2 - 3", "(x+3)/2"],
      ans: 0,
    },
    {
      q: "What is the domain of f(x) = 1/(x-2)?",
      opts: ["All real numbers", "x ≠ 2", "x > 2", "x < 2"],
      ans: 1,
    },
    // Quadratic Equations
    {
      q: "Find the discriminant of x² + 4x + 5 = 0.",
      opts: ["4", "16", "-4", "36"],
      ans: 2,
    },
    {
      q: "The product of two consecutive integers is 56. Find them.",
      opts: ["7 and 8", "6 and 7", "8 and 9", "-7 and -8"],
      ans: 0,
    },
    { q: "Solve: x² = 16", opts: ["±4", "4", "-4", "8"], ans: 0 },
    {
      q: "Find the sum of roots of x² - 7x + 12 = 0.",
      opts: ["7", "-7", "12", "-12"],
      ans: 0,
    },
    {
      q: "Find the product of roots: 2x² - 5x + 3 = 0",
      opts: ["3/2", "-5/2", "5/2", "-3/2"],
      ans: 0,
    },
  ],
  Biology: [
    // Cell Biology
    {
      q: "Which organelle is known as the 'powerhouse' of the cell?",
      opts: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
      ans: 1,
    },
    {
      q: "What is the basic unit of life?",
      opts: ["Tissue", "Cell", "Organ", "Molecule"],
      ans: 1,
    },
    {
      q: "Which organelle is responsible for photosynthesis?",
      opts: ["Mitochondria", "Chloroplast", "Ribosome", "Nucleus"],
      ans: 1,
    },
    {
      q: "The cell membrane is primarily composed of:",
      opts: ["Proteins", "Lipids", "Carbohydrates", "Nucleic acids"],
      ans: 1,
    },
    {
      q: "Which organelle contains genetic material?",
      opts: ["Ribosome", "Nucleus", "Lysosome", "Vacuole"],
      ans: 1,
    },
    // Human Anatomy
    {
      q: "Which chamber of the heart receives deoxygenated blood?",
      opts: [
        "Left atrium",
        "Right atrium",
        "Left ventricle",
        "Right ventricle",
      ],
      ans: 1,
    },
    {
      q: "What is the normal resting heart rate for adults?",
      opts: ["50-60 bpm", "60-100 bpm", "100-120 bpm", "40-50 bpm"],
      ans: 1,
    },
    {
      q: "Which part of the brain controls balance and coordination?",
      opts: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Hypothalamus"],
      ans: 1,
    },
    {
      q: "The largest part of the human brain is the:",
      opts: ["Cerebellum", "Medulla", "Cerebrum", "Brain stem"],
      ans: 2,
    },
    {
      q: "Which blood cells are responsible for clotting?",
      opts: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
      ans: 2,
    },
    // Nutrition & Digestion
    {
      q: "Which vitamin is produced when skin is exposed to sunlight?",
      opts: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
      ans: 3,
    },
    {
      q: "The enzyme pepsin is secreted by which gland?",
      opts: ["Liver", "Pancreas", "Salivary glands", "Gastric glands"],
      ans: 3,
    },
    {
      q: "Which nutrient provides the most energy per gram?",
      opts: ["Proteins", "Carbohydrates", "Fats", "Vitamins"],
      ans: 2,
    },
    {
      q: "The small intestine is primarily responsible for:",
      opts: [
        "Water absorption",
        "Nutrient absorption",
        "Enzyme production",
        "Bile storage",
      ],
      ans: 1,
    },
    {
      q: "Iron is essential for the production of:",
      opts: ["White blood cells", "Hormones", "Hemoglobin", "Enzymes"],
      ans: 2,
    },
    // Plant Biology
    {
      q: "Which plant tissue is responsible for transport of water?",
      opts: ["Phloem", "Xylem", "Cambium", "Meristem"],
      ans: 1,
    },
    {
      q: "The process by which plants lose water is called:",
      opts: ["Osmosis", "Transpiration", "Respiration", "Photosynthesis"],
      ans: 1,
    },
    {
      q: "Which gas is released during photosynthesis?",
      opts: ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
      ans: 2,
    },
    {
      q: "The male reproductive part of a flower is the:",
      opts: ["Pistil", "Stamen", "Petal", "Sepal"],
      ans: 1,
    },
    {
      q: "Pollination is essential for:",
      opts: [
        "Seed formation",
        "Root growth",
        "Leaf development",
        "Stem elongation",
      ],
      ans: 0,
    },
    // Genetics
    {
      q: "DNA stands for:",
      opts: [
        "Deoxyribonucleic acid",
        "Dinitrogen acid",
        "Dynamic nucleic acid",
        "Dual nucleotide",
      ],
      ans: 0,
    },
    {
      q: "How many chromosomes do humans normally have?",
      opts: ["23", "46", "44", "48"],
      ans: 1,
    },
    {
      q: "The basic unit of inheritance is the:",
      opts: ["Chromosome", "Gene", "DNA", "RNA"],
      ans: 1,
    },
    {
      q: "Which base pairs with Adenine in DNA?",
      opts: ["Guanine", "Cytosine", "Thymine", "Uracil"],
      ans: 2,
    },
    {
      q: "Mitosis results in daughter cells that are:",
      opts: ["Haploid", "Diploid", "Triploid", "Polyploid"],
      ans: 1,
    },
    // Ecology
    {
      q: "The natural home of an organism is called its:",
      opts: ["Niche", "Habitat", "Ecosystem", "Community"],
      ans: 1,
    },
    {
      q: "Which type of pyramid shows energy transfer?",
      opts: [
        "Pyramid of numbers",
        "Pyramid of biomass",
        "Pyramid of energy",
        "Pyramid of organisms",
      ],
      ans: 2,
    },
    {
      q: "Organisms that break down dead organic matter are called:",
      opts: ["Producers", "Consumers", "Decomposers", "Predators"],
      ans: 2,
    },
    {
      q: "The greenhouse effect is primarily caused by:",
      opts: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
      ans: 2,
    },
    {
      q: "Which biome is characterized by low rainfall and extreme temperatures?",
      opts: ["Tropical rainforest", "Desert", "Tundra", "Savanna"],
      ans: 1,
    },
    // Respiration
    {
      q: "The final electron acceptor in cellular respiration is:",
      opts: ["NAD+", "Oxygen", "Glucose", "ATP"],
      ans: 1,
    },
    {
      q: "Where does glycolysis occur in the cell?",
      opts: ["Mitochondria", "Cytoplasm", "Nucleus", "Ribosome"],
      ans: 1,
    },
    {
      q: "The net gain of ATP from one glucose molecule in glycolysis is:",
      opts: ["2 ATP", "4 ATP", "36 ATP", "38 ATP"],
      ans: 0,
    },
    {
      q: "Anaerobic respiration in yeast produces:",
      opts: ["Lactic acid", "Ethanol and CO2", "Acetic acid", "Citric acid"],
      ans: 1,
    },
    {
      q: "The breathing rate increases when:",
      opts: [
        "Oxygen levels increase",
        "Carbon dioxide levels increase",
        "Body temperature decreases",
        "Heart rate decreases",
      ],
      ans: 1,
    },
    // Homeostasis
    {
      q: "Which organ regulates body temperature?",
      opts: ["Heart", "Lungs", "Skin", "Liver"],
      ans: 2,
    },
    {
      q: "The kidneys primarily regulate:",
      opts: [
        "Blood sugar",
        "Body temperature",
        "Water and salt balance",
        "Oxygen levels",
      ],
      ans: 2,
    },
    {
      q: "Insulin is produced by the:",
      opts: ["Liver", "Pancreas", "Kidney", "Heart"],
      ans: 1,
    },
    {
      q: "Negative feedback mechanisms:",
      opts: [
        "Increase changes",
        "Oppose changes",
        "Have no effect",
        "Cause mutations",
      ],
      ans: 1,
    },
    {
      q: "The body's first line of defense against pathogens is:",
      opts: [
        "Antibodies",
        "Skin and mucous membranes",
        "White blood cells",
        "Vaccines",
      ],
      ans: 1,
    },
    // Reproduction
    {
      q: "The site of fertilization in humans is the:",
      opts: ["Uterus", "Fallopian tube", "Ovary", "Cervix"],
      ans: 1,
    },
    {
      q: "Asexual reproduction produces offspring that are:",
      opts: [
        "Genetically identical",
        "Genetically different",
        "Always sterile",
        "Always male",
      ],
      ans: 0,
    },
    {
      q: "The male sex hormone is:",
      opts: ["Estrogen", "Progesterone", "Testosterone", "Insulin"],
      ans: 2,
    },
    {
      q: "Meiosis results in daughter cells that are:",
      opts: ["Diploid", "Haploid", "Polyploid", "Identical"],
      ans: 1,
    },
    {
      q: "Which structure protects the developing embryo in mammals?",
      opts: ["Egg shell", "Uterus", "Placenta", "Fallopian tube"],
      ans: 2,
    },
    // Evolution
    {
      q: "The theory of evolution by natural selection was proposed by:",
      opts: [
        "Louis Pasteur",
        "Charles Darwin",
        "Gregor Mendel",
        "Alfred Wallace",
      ],
      ans: 1,
    },
    {
      q: "A structure that is present in different species with similar functions is called:",
      opts: ["Homologous", "Analogous", "Vestigial", "Mutant"],
      ans: 0,
    },
    {
      q: "The age of the Earth is approximately:",
      opts: [
        "4.5 billion years",
        "10 billion years",
        "1 billion years",
        "100 million years",
      ],
      ans: 0,
    },
    {
      q: "Fossils are evidence of:",
      opts: [
        "Extant species",
        "Ancient life forms",
        "Future evolution",
        "Climate change",
      ],
      ans: 1,
    },
    {
      q: "Adaptive radiation leads to:",
      opts: [
        "Decrease in species",
        "Increase in species diversity",
        "Extinction",
        "No change",
      ],
      ans: 1,
    },
  ],
  Physics: [
    // Mechanics: Motion and Forces (JAMB Style)
    {
      q: "What is the SI unit of linear momentum?",
      opts: ["A. kg m/s", "B. kg m²/s²", "C. N", "D. J"],
      ans: 0,
    },
    {
      q: "A body of mass 2 kg moves with a velocity of 3 m/s. Its momentum is?",
      opts: ["A. 6 kg m/s", "B. 5 kg m/s", "C. 1.5 kg m/s", "D. 9 kg m/s"],
      ans: 0,
    },
    {
      q: "The principle of conservation of linear momentum is based on?",
      opts: [
        "A. Newton’s first law",
        "B. Newton’s second law",
        "C. Newton’s third law",
        "D. The law of inertia",
      ],
      ans: 2,
    },
    {
      q: "A force of 10 N acts on a body for 2 seconds. The impulse is?",
      opts: ["A. 20 Ns", "B. 5 Ns", "C. 15 Ns", "D. 25 Ns"],
      ans: 0,
    },
    {
      q: "The product of mass and velocity of a body is known as?",
      opts: ["A. Force", "B. Work", "C. Momentum", "D. Impulse"],
      ans: 2,
    },
    // Machines and Efficiency
    {
      q: "A machine has a velocity ratio of 5 and an efficiency of 80%. The mechanical advantage is?",
      opts: ["A. 4", "B. 5", "C. 6", "D. 8"],
      ans: 0,
    },
    {
      q: "A pulley system with a mechanical advantage of 3 is used to lift a load of 300 N. The effort required is?",
      opts: ["A. 100 N", "B. 150 N", "C. 200 N", "D. 300 N"],
      ans: 0,
    },
    {
      q: "The efficiency of a machine can be increased by?",
      opts: [
        "A. Reducing friction",
        "B. Increasing friction",
        "C. Decreasing the load",
        "D. Increasing the velocity ratio",
      ],
      ans: 0,
    },
    {
      q: "Which of the following machines has a velocity ratio greater than 1?",
      opts: [
        "A. Single fixed pulley",
        "B. Inclined plane",
        "C. Crowbar in first-class lever",
        "D. Nutcracker",
      ],
      ans: 1,
    },
    {
      q: "A lever with mechanical advantage of 6 requires effort of 50 N to lift a load. The load is?",
      opts: ["A. 250 N", "B. 300 N", "C. 350 N", "D. 400 N"],
      ans: 3,
    },
    // Heat and Temperature
    {
      q: "The fixed points on the Celsius temperature scale are?",
      opts: [
        "A. 0°C and 100°C",
        "B. 32°F and 212°F",
        "C. 273 K and 373 K",
        "D. 0 K and 100 K",
      ],
      ans: 0,
    },
    {
      q: "The SI unit of temperature is?",
      opts: ["A. Celsius", "B. Kelvin", "C. Fahrenheit", "D. Degree"],
      ans: 1,
    },
    {
      q: "The specific heat capacity of water is approximately?",
      opts: [
        "A. 420 J/kg°C",
        "B. 4200 J/kg°C",
        "C. 4.2 J/kg°C",
        "D. 42 J/kg°C",
      ],
      ans: 1,
    },
    {
      q: "Heat energy is transferred through solids by?",
      opts: [
        "A. Radiation",
        "B. Convection",
        "C. Conduction",
        "D. Evaporation",
      ],
      ans: 2,
    },
    {
      q: "The SI unit of specific heat capacity is?",
      opts: ["A. J", "B. J/kg", "C. J/kg°C", "D. J°C"],
      ans: 2,
    },
    // Gas Laws
    {
      q: "Boyle’s law states that?",
      opts: ["A. Volume ∝ temperature", "B. P ∝ 1/V", "C. P ∝ T", "D. V ∝ 1/T"],
      ans: 1,
    },
    {
      q: "Charles’ law relates?",
      opts: ["A. P and T", "B. V and P", "C. V and T", "D. T and mass"],
      ans: 2,
    },
    {
      q: "Avogadro’s law states that?",
      opts: [
        "A. Equal volumes of gases have equal molecules",
        "B. P ∝ 1/V",
        "C. V ∝ T",
        "D. Gases expand on heating",
      ],
      ans: 0,
    },
    {
      q: "The SI unit of pressure is?",
      opts: ["A. Pascal", "B. Newton", "C. Joule", "D. Bar"],
      ans: 0,
    },
    {
      q: "The value of universal gas constant R is?",
      opts: ["A. 8.31 J/mol K", "B. 8.31 J/K", "C. 831 J/mol", "D. 831 J/K"],
      ans: 0,
    },
    // Electricity and Magnetism
    {
      q: "The force between two point charges is given by?",
      opts: [
        "A. Ohm's law",
        "B. Ampere's law",
        "C. Coulomb's law",
        "D. Newton's second law",
      ],
      ans: 2,
    },
    {
      q: "To convert galvanometer to voltmeter, add?",
      opts: [
        "A. High resistance in series",
        "B. High resistance in parallel",
        "C. Low resistance in series",
        "D. Low resistance in parallel",
      ],
      ans: 0,
    },
    {
      q: "Magnetic field around infinite current-carrying wire?",
      opts: ["A. Radial outward", "B. Radial inward", "C. Circular", "D. Zero"],
      ans: 2,
    },
    {
      q: "Iron is a?",
      opts: [
        "A. Diamagnetic",
        "B. Paramagnetic",
        "C. Ferromagnetic",
        "D. Non-magnetic",
      ],
      ans: 2,
    },
    {
      q: "Induced currents explained by?",
      opts: [
        "A. Gauss's law",
        "B. Faraday's law",
        "C. Ohm's law",
        "D. Ampere's law",
      ],
      ans: 1,
    },
    // Waves and Optics
    {
      q: "Wave speed = ?",
      opts: [
        "A. Frequency × wavelength",
        "B. Period × amplitude",
        "C. Frequency / wavelength",
        "D. Amplitude / period",
      ],
      ans: 0,
    },
    {
      q: "Distance between node and antinode in standing wave?",
      opts: ["A. λ/8", "B. λ/4", "C. λ/2", "D. λ"],
      ans: 1,
    },
    {
      q: "Wave nature of light shown by?",
      opts: [
        "A. Photoelectric effect",
        "B. Color",
        "C. Speed",
        "D. Diffraction",
      ],
      ans: 3,
    },
    {
      q: "Focal length sign for concave mirror?",
      opts: ["A. Positive", "B. Negative", "C. Zero", "D. Infinite"],
      ans: 1,
    },
    {
      q: "Constructive interference path difference?",
      opts: ["A. λ", "B. λ/2", "C. λ/4", "D. λ/8"],
      ans: 0,
    },
    // Modern Physics and Nuclear
    {
      q: "Helium from hydrogen in sun by?",
      opts: ["A. Decay", "B. Disintegration", "C. Fission", "D. Fusion"],
      ans: 3,
    },
    {
      q: "Alpha particles are nuclei of?",
      opts: ["A. Hydrogen", "B. Helium", "C. Oxygen", "D. Nitrogen"],
      ans: 1,
    },
    {
      q: "Half-life 5 days, after 20 days fraction left?",
      opts: ["A. 1/8", "B. 1/4", "C. 1/2", "D. 1/16"],
      ans: 0,
    },
    {
      q: "Electrons in orbits without radiation by?",
      opts: ["A. Thompson", "B. Bohr", "C. Rutherford", "D. Einstein"],
      ans: 1,
    },
    {
      q: "Superconductor resistance?",
      opts: [
        "A. Increases",
        "B. Decreases tremendously",
        "C. Same",
        "D. Infinite",
      ],
      ans: 1,
    },
    // (Waves, Heat, Electricity)
    {
      q: "A wave has frequency 50 Hz, wavelength 2 m. Speed?",
      opts: ["A. 25 m/s", "B. 50 m/s", "C. 100 m/s", "D. 200 m/s"],
      ans: 2,
    },
    {
      q: "Generator operates on?",
      opts: [
        "A. Electromagnetic induction",
        "B. Radiation",
        "C. Electrostatic induction",
        "D. Resonance",
      ],
      ans: 0,
    },
    {
      q: "Sound bending around obstacles?",
      opts: [
        "A. Refraction",
        "B. Reflection",
        "C. Diffraction",
        "D. Interference",
      ],
      ans: 2,
    },
    // More Mechanics, Projectiles
    {
      q: "Object mass 20 kg from 10 m height. KE at ground?",
      opts: ["A. 2000 J", "B. 4000 J", "C. 200 J", "D. 500 J"],
      ans: 1,
    },
    {
      q: "Newton’s third law?",
      opts: ["A. Action = reaction", "B. F=ma", "C. Inertia", "D. Equilibrium"],
      ans: 0,
    },
    {
      q: "Projectile max height factor?",
      opts: ["A. u² sin²θ / 2g", "B. u cosθ", "C. u sinθ", "D. Range"],
      ans: 0,
    },
    // Optics, Sound
    {
      q: "Real image by convex lens when object?",
      opts: ["A. Beyond 2F", "B. Between F and 2F", "C. At F", "D. Inside F"],
      ans: 0,
    },
    {
      q: "Speed of sound in air approx?",
      opts: ["A. 330 m/s", "B. 1500 m/s", "C. 300 m/s", "D. 3×10^8 m/s"],
      ans: 0,
    },
    {
      q: "Critical angle for total internal reflection?",
      opts: [
        "A. > refractive index",
        "B. sin⁻¹(1/n)",
        "C. < refractive index",
        "D. 90°",
      ],
      ans: 1,
    },
    // Electricity Continued
    {
      q: "Ohm's law V=?",
      opts: ["A. IR", "B. I/R", "C. R/I", "D. I²R"],
      ans: 0,
    },
    {
      q: "Transformer steps up?",
      opts: ["A. Voltage", "B. Current", "C. Power", "D. Frequency"],
      ans: 0,
    },
    {
      q: "Capacitor stores?",
      opts: ["A. Charge", "B. Current", "C. Resistance", "D. Voltage"],
      ans: 0,
    },
    {
      q: "Fuse melts due to?",
      opts: [
        "A. High current",
        "B. High voltage",
        "C. Low resistance",
        "D. High power",
      ],
      ans: 0,
    },
    // Nuclear, Modern
    {
      q: "Binding energy per nucleon peaks at?",
      opts: ["A. Iron", "B. Uranium", "C. Hydrogen", "D. Helium"],
      ans: 0,
    },
    {
      q: "Photoelectric effect threshold?",
      opts: ["A. Frequency", "B. Intensity", "C. Wavelength", "D. Speed"],
      ans: 0,
    },
  ],
  Chemistry: [
    // Separation and Purification
    {
      q: "Which method is used to separate miscible liquids with different boiling points?",
      opts: [
        "A. Filtration",
        "B. Fractional distillation",
        "C. Crystallization",
        "D. Chromatography",
      ],
      ans: 1,
    },
    {
      q: "The process of separating cream from milk uses?",
      opts: [
        "A. Centrifugation",
        "B. Filtration",
        "C. Evaporation",
        "D. Sublimation",
      ],
      ans: 0,
    },
    {
      q: "Which technique separates coloured substances?",
      opts: [
        "A. Distillation",
        "B. Paper chromatography",
        "C. Filtration",
        "D. Crystallization",
      ],
      ans: 1,
    },
    {
      q: "Sublimation is used to purify?",
      opts: ["A. Sodium chloride", "B. Iodine", "C. Ethanol", "D. Sugar"],
      ans: 1,
    },
    {
      q: "The residue left after filtration is called?",
      opts: ["A. Filtrate", "B. Sediment", "C. Supernatant", "D. Decantate"],
      ans: 1,
    },

    // Atomic Structure and Periodicity
    {
      q: "The number of protons in an atom determines its?",
      opts: [
        "A. Atomic mass",
        "B. Atomic number",
        "C. Isotopes",
        "D. Neutrons",
      ],
      ans: 1,
    },
    {
      q: "Elements in the same group have the same?",
      opts: [
        "A. Atomic number",
        "B. Number of electrons in outermost shell",
        "C. Atomic mass",
        "D. Number of neutrons",
      ],
      ans: 1,
    },
    {
      q: "Across a period, atomic size?",
      opts: ["A. Increases", "B. Decreases", "C. Remains same", "D. Doubles"],
      ans: 1,
    },
    {
      q: "The maximum number of electrons in n=3 shell is?",
      opts: ["A. 6", "B. 8", "C. 18", "D. 32"],
      ans: 2,
    },
    {
      q: "Isotopes have same number of?",
      opts: ["A. Protons", "B. Neutrons", "C. Nucleons", "D. Electrons"],
      ans: 0,
    },

    // Chemical Bonding
    {
      q: "Ionic bonds form between?",
      opts: [
        "A. Metals and non-metals",
        "B. Two metals",
        "C. Two non-metals",
        "D. Metals only",
      ],
      ans: 0,
    },
    {
      q: "Covalent bond involves?",
      opts: [
        "A. Transfer of electrons",
        "B. Sharing of electrons",
        "C. Donation of protons",
        "D. Sharing of protons",
      ],
      ans: 1,
    },
    {
      q: "The shape of water molecule is?",
      opts: ["A. Linear", "B. Tetrahedral", "C. Angular", "D. Trigonal planar"],
      ans: 2,
    },
    {
      q: "Which has coordinate bond?",
      opts: ["A. NaCl", "B. NH4+", "C. CH4", "D. H2"],
      ans: 1,
    },

    // Stoichiometry and Gas Laws
    {
      q: "1 mole of any gas occupies?",
      opts: ["A. 11.2 dm³", "B. 22.4 dm³", "C. 44.8 dm³", "D. 1 dm³"],
      ans: 1,
    },
    {
      q: "According to Avogadro's law?",
      opts: [
        "A. Equal volumes contain equal moles",
        "B. P ∝ 1/V",
        "C. V ∝ T",
        "D. P ∝ T",
      ],
      ans: 0,
    },
    {
      q: "Molar mass of CO2 is?",
      opts: ["A. 28 g", "B. 32 g", "C. 44 g", "D. 16 g"],
      ans: 2,
    },
    {
      q: "Percentage of oxygen in H2O is?",
      opts: ["A. 11.2%", "B. 88.8%", "C. 12.5%", "D. 87.5%"],
      ans: 1,
    },

    // Energy Changes and Rates
    {
      q: "Endothermic reaction has?",
      opts: [
        "A. ΔH negative",
        "B. ΔH positive",
        "C. ΔS negative",
        "D. ΔG negative",
      ],
      ans: 1,
    },
    {
      q: "Rate of reaction increases with?",
      opts: [
        "A. Catalyst",
        "B. Lower temperature",
        "C. Larger particles",
        "D. Dilute reactants",
      ],
      ans: 0,
    },
    {
      q: "Activation energy is?",
      opts: [
        "A. Energy of products",
        "B. Minimum energy for reaction",
        "C. Energy of reactants",
        "D. Heat of reaction",
      ],
      ans: 1,
    },
    {
      q: "Bond breaking is?",
      opts: ["A. Exothermic", "B. Endothermic", "C. Neutral", "D. Isothermic"],
      ans: 1,
    },

    // Acids, Bases and Salts
    {
      q: "pH of 0.001 M HCl is?",
      opts: ["A. 1", "B. 2", "C. 3", "D. 4"],
      ans: 2,
    },
    {
      q: "Strong acid completely?",
      opts: [
        "A. Ionizes",
        "B. Dissociates",
        "C. Precipitates",
        "D. Neutralizes",
      ],
      ans: 1,
    },
    {
      q: "Salt of weak acid + strong base is?",
      opts: ["A. Acidic", "B. Basic", "C. Neutral", "D. Amphoteric"],
      ans: 1,
    },
    {
      q: "Buffer solution resists?",
      opts: [
        "A. Temperature change",
        "B. pH change",
        "C. Volume change",
        "D. Colour change",
      ],
      ans: 1,
    },

    // Redox and Electrochemistry
    {
      q: "Oxidation is?",
      opts: [
        "A. Gain of electrons",
        "B. Loss of electrons",
        "C. Gain of protons",
        "D. Loss of protons",
      ],
      ans: 1,
    },
    {
      q: "In Daniel cell, oxidation occurs at?",
      opts: [
        "A. Copper electrode",
        "B. Zinc electrode",
        "C. Salt bridge",
        "D. Solution",
      ],
      ans: 1,
    },
    {
      q: "Faraday's first law states?",
      opts: [
        "A. Mass ∝ current",
        "B. Mass ∝ time",
        "C. Mass ∝ Q",
        "D. Mass ∝ voltage",
      ],
      ans: 2,
    },
    {
      q: "Oxidizing agent is?",
      opts: [
        "A. Reduced",
        "B. Oxidized",
        "C. Electron donor",
        "D. Proton acceptor",
      ],
      ans: 0,
    },

    // Non-metals and their Compounds
    {
      q: "Allotropy is shown by?",
      opts: ["A. Sodium", "B. Carbon", "C. Iron", "D. Copper"],
      ans: 1,
    },
    {
      q: "Haber process produces?",
      opts: ["A. H2SO4", "B. NH3", "C. HCl", "D. HNO3"],
      ans: 1,
    },
    {
      q: "Ozone layer protects from?",
      opts: ["A. Infrared", "B. UV rays", "C. X-rays", "D. Gamma rays"],
      ans: 1,
    },
    {
      q: "Sulphuric acid manufacture uses?",
      opts: [
        "A. Contact process",
        "B. Haber process",
        "C. Ostwald process",
        "D. Solvay process",
      ],
      ans: 0,
    },

    // Metals and their Compounds
    {
      q: "Most reactive metal?",
      opts: ["A. Gold", "B. Potassium", "C. Iron", "D. Copper"],
      ans: 1,
    },
    {
      q: "Amphoteric oxide?",
      opts: ["A. Na2O", "B. Al2O3", "C. CO2", "D. SO2"],
      ans: 1,
    },
    {
      q: "Blister copper is refined by?",
      opts: [
        "A. Distillation",
        "B. Electrolysis",
        "C. Roasting",
        "D. Smelting",
      ],
      ans: 1,
    },
    {
      q: "Thermite process uses?",
      opts: ["A. Al + Fe2O3", "B. C + Fe2O3", "C. Al + CuO", "D. Mg + FeO"],
      ans: 0,
    },

    // Organic Chemistry I: Hydrocarbons
    {
      q: "Alkanes undergo?",
      opts: [
        "A. Addition",
        "B. Substitution",
        "C. Elimination",
        "D. Oxidation",
      ],
      ans: 1,
    },
    {
      q: "Benzene undergoes?",
      opts: [
        "A. Addition",
        "B. Electrophilic substitution",
        "C. Free radical substitution",
        "D. Elimination",
      ],
      ans: 1,
    },
    {
      q: "Markovnikov's rule applies to?",
      opts: ["A. Alkanes", "B. Alkenes", "C. Alkynes", "D. Aromatics"],
      ans: 1,
    },
    {
      q: "Catalytic cracking produces?",
      opts: [
        "A. Longer chains",
        "B. Shorter chains",
        "C. Polymers",
        "D. Aromatics",
      ],
      ans: 1,
    },

    // Organic Chemistry II: Functional Groups
    {
      q: "Ethanol reacts with sodium to produce?",
      opts: ["A. Ethane", "B. Hydrogen", "C. Ethene", "D. Ethyne"],
      ans: 1,
    },
    {
      q: "Carboxylic acids react with alcohols to form?",
      opts: ["A. Esters", "B. Aldehydes", "C. Ketones", "D. Ethers"],
      ans: 0,
    },
    {
      q: "Lucas test distinguishes?",
      opts: [
        "A. 1° and 2° alcohols",
        "B. 2° and 3° alcohols",
        "C. Aldehydes and ketones",
        "D. Acids and esters",
      ],
      ans: 1,
    },
    {
      q: "Proteins on hydrolysis give?",
      opts: ["A. Glucose", "B. Amino acids", "C. Fatty acids", "D. Glycerol"],
      ans: 1,
    },

    // Industrial and Environmental Chemistry
    {
      q: "Contact process catalyst?",
      opts: ["A. Fe", "B. V2O5", "C. Pt", "D. Ni"],
      ans: 1,
    },
    {
      q: "Ostwald process produces?",
      opts: ["A. NH3", "B. HNO3", "C. H2SO4", "D. Na2CO3"],
      ans: 1,
    },
    {
      q: "Greenhouse gas?",
      opts: ["A. O2", "B. N2", "C. CO2", "D. N2O"],
      ans: 2,
    },
    {
      q: "Hard water contains?",
      opts: ["A. Na+", "B. Ca2+, Mg2+", "C. K+", "D. NH4+"],
      ans: 1,
    },
  ],

  // Computer Studies
  "Computer Studies": [
    // Computer Fundamentals
    {
      q: "What is the full form of CPU?",
      opts: [
        "A. Central Processing Unit",
        "B. Computer Personal Unit",
        "C. Central Program Unit",
        "D. Computer Processing Unit",
      ],
      ans: 0,
    },
    {
      q: "Which device is used to input data directly into a computer?",
      opts: ["A. Monitor", "B. Printer", "C. Keyboard", "D. Speaker"],
      ans: 2,
    },
    {
      q: "The main memory of a computer is called?",
      opts: ["A. RAM", "B. ROM", "C. Hard disk", "D. Cache"],
      ans: 0,
    },
    {
      q: "Which of the following is an input device?",
      opts: ["A. Monitor", "B. Printer", "C. Scanner", "D. Speaker"],
      ans: 2,
    },
    {
      q: "What does ROM stand for?",
      opts: [
        "A. Read Only Memory",
        "B. Random Access Memory",
        "C. Run Only Memory",
        "D. Ready Only Memory",
      ],
      ans: 0,
    },
    {
      q: "Which type of computer is used in scientific research?",
      opts: [
        "A. Microcomputer",
        "B. Minicomputer",
        "C. Mainframe",
        "D. Supercomputer",
      ],
      ans: 3,
    },
    {
      q: "The brain of the computer is?",
      opts: ["A. Monitor", "B. CPU", "C. RAM", "D. Hard Disk"],
      ans: 1,
    },
    {
      q: "Which is a secondary storage device?",
      opts: ["A. RAM", "B. Cache", "C. Magnetic tape", "D. Register"],
      ans: 2,
    },
    {
      q: "What is the function of an operating system?",
      opts: [
        "A. Word processing",
        "B. Managing computer resources",
        "C. Playing games",
        "D. Internet browsing",
      ],
      ans: 1,
    },
    {
      q: "A laptop is an example of?",
      opts: [
        "A. Desktop computer",
        "B. Palmtop",
        "C. Notebook computer",
        "D. Workstation",
      ],
      ans: 2,
    },

    // Data Representation
    {
      q: "How many bits make up a byte?",
      opts: ["A. 2", "B. 4", "C. 8", "D. 16"],
      ans: 2,
    },
    {
      q: "The decimal number 15 in binary is?",
      opts: ["A. 1111", "B. 1101", "C. 1010", "D. 1001"],
      ans: 0,
    },
    {
      q: "What is the binary equivalent of decimal 10?",
      opts: ["A. 1000", "B. 1001", "C. 1010", "D. 1100"],
      ans: 2,
    },
    {
      q: "Which number system uses digits 0-9 and letters A-F?",
      opts: ["A. Binary", "B. Octal", "C. Decimal", "D. Hexadecimal"],
      ans: 3,
    },
    {
      q: "The octal number 10 is equal to decimal?",
      opts: ["A. 8", "B. 10", "C. 12", "D. 16"],
      ans: 0,
    },
    {
      q: "ASCII is a ___ bit code.",
      opts: ["A. 7", "B. 8", "C. 16", "D. 32"],
      ans: 0,
    },
    {
      q: "How many different characters can ASCII represent?",
      opts: ["A. 64", "B. 128", "C. 256", "D. 512"],
      ans: 1,
    },
    {
      q: "Unicode can represent characters in how many bits?",
      opts: ["A. 8", "B. 16", "C. 32", "D. 64"],
      ans: 1,
    },
    {
      q: "The hexadecimal value of binary 1111 is?",
      opts: ["A. F", "B. E", "C. A", "D. B"],
      ans: 0,
    },
    {
      q: "Two's complement is used to represent?",
      opts: [
        "A. Floating point numbers",
        "B. Negative integers",
        "C. Characters",
        "D. Images",
      ],
      ans: 1,
    },

    // Computer Hardware
    {
      q: "Which component stores data permanently?",
      opts: ["A. RAM", "B. Cache", "C. Hard disk", "D. Register"],
      ans: 2,
    },
    {
      q: "What is the function of a sound card?",
      opts: [
        "A. Process images",
        "B. Process sound",
        "C. Process text",
        "D. Process video",
      ],
      ans: 1,
    },
    {
      q: "Which port is used to connect a mouse?",
      opts: ["A. USB", "B. VGA", "C. HDMI", "D. Ethernet"],
      ans: 0,
    },
    {
      q: "The speed of a processor is measured in?",
      opts: ["A. Bytes", "B. Hertz", "C. Bits", "D. Pixels"],
      ans: 1,
    },
    {
      q: "DVD stands for?",
      opts: [
        "A. Digital Video Disc",
        "B. Digital Versatile Disc",
        "C. Double Video Disc",
        "D. Data Video Disc",
      ],
      ans: 1,
    },
    {
      q: "Which device converts digital signals to analog?",
      opts: ["A. Modem", "B. Router", "C. Switch", "D. Hub"],
      ans: 0,
    },
    {
      q: "Cache memory is?",
      opts: [
        "A. External memory",
        "B. Very fast memory",
        "C. Magnetic memory",
        "D. Optical memory",
      ],
      ans: 1,
    },
    {
      q: "The motherboard is also known as?",
      opts: [
        "A. System board",
        "B. Power board",
        "C. Circuit board",
        "D. Control board",
      ],
      ans: 0,
    },
    {
      q: "Which device produces hard copy output?",
      opts: ["A. Scanner", "B. Keyboard", "C. Printer", "D. Mouse"],
      ans: 2,
    },
    {
      q: "What is the capacity of a DVD?",
      opts: ["A. 700 MB", "B. 4.7 GB", "C. 650 MB", "D. 1.44 MB"],
      ans: 1,
    },

    // Software and Operating Systems
    {
      q: "Which software is used to manage computer hardware?",
      opts: [
        "A. Application software",
        "B. System software",
        "C. Utility software",
        "D. Programming software",
      ],
      ans: 1,
    },
    {
      q: "Microsoft Windows is an example of?",
      opts: [
        "A. Application software",
        "B. System software",
        "C. Programming language",
        "D. Database",
      ],
      ans: 1,
    },
    {
      q: "What does GUI stand for?",
      opts: [
        "A. Graphical User Interface",
        "B. General User Interface",
        "C. Global User Interface",
        "D. Graphic User Integration",
      ],
      ans: 0,
    },
    {
      q: "Which is not an operating system?",
      opts: ["A. Windows", "B. Linux", "C. MS Word", "D. Mac OS"],
      ans: 2,
    },
    {
      q: "Linux is a ___ operating system.",
      opts: ["A. Proprietary", "B. Open source", "C. Commercial", "D. Paid"],
      ans: 1,
    },
    {
      q: "What is the function of an interpreter?",
      opts: [
        "A. Converts entire program to machine code",
        "B. Converts program line by line",
        "C. Executes program directly",
        "D. Compiles program",
      ],
      ans: 1,
    },
    {
      q: "A compiler translates program to?",
      opts: [
        "A. Source code",
        "B. Object code",
        "C. High level code",
        "D. Assembly code",
      ],
      ans: 1,
    },
    {
      q: "Which is application software?",
      opts: ["A. Windows", "B. Linux", "C. Microsoft Word", "D. BIOS"],
      ans: 2,
    },
    {
      q: "The process of starting a computer is called?",
      opts: ["A. Boot", "B. Restart", "C. Shutdown", "D. Logon"],
      ans: 0,
    },
    {
      q: "Unix is commonly used in?",
      opts: [
        "A. Desktop computers",
        "B. Servers",
        "C. Mobile phones",
        "D. Gaming consoles",
      ],
      ans: 1,
    },

    // Computer Networks
    {
      q: "What does LAN stand for?",
      opts: [
        "A. Local Area Network",
        "B. Large Area Network",
        "C. Long Area Network",
        "D. Linear Area Network",
      ],
      ans: 0,
    },
    {
      q: "Which device connects multiple computers in a network?",
      opts: ["A. Modem", "B. Hub or Switch", "C. Router", "D. Repeater"],
      ans: 1,
    },
    {
      q: "What is the maximum cable length for 10BASE-T Ethernet?",
      opts: [
        "A. 100 meters",
        "B. 500 meters",
        "C. 1000 meters",
        "D. 50 meters",
      ],
      ans: 0,
    },
    {
      q: "IP address stands for?",
      opts: [
        "A. Internet Protocol address",
        "B. Internal Protocol address",
        "C. Internet Process address",
        "D. Integrated Protocol address",
      ],
      ans: 0,
    },
    {
      q: "Which topology has a central hub?",
      opts: ["A. Bus", "B. Ring", "C. Star", "D. Mesh"],
      ans: 2,
    },
    {
      q: "What is the function of a router?",
      opts: [
        "A. Amplify signals",
        "B. Connect different networks",
        "C. Convert analog to digital",
        "D. Store data",
      ],
      ans: 1,
    },
    {
      q: "DNS stands for?",
      opts: [
        "A. Domain Name System",
        "B. Data Network Service",
        "C. Dynamic Name System",
        "D. Digital Network Service",
      ],
      ans: 0,
    },
    {
      q: "Which protocol is used for web browsing?",
      opts: ["A. FTP", "B. HTTP", "C. SMTP", "D. TCP"],
      ans: 1,
    },
    {
      q: "What is the speed of Wi-Fi 802.11g?",
      opts: ["A. 11 Mbps", "B. 54 Mbps", "C. 100 Mbps", "D. 300 Mbps"],
      ans: 1,
    },
    {
      q: "MAC address is a ___ bit address.",
      opts: ["A. 32", "B. 48", "C. 64", "D. 128"],
      ans: 1,
    },
  ],
};

// ====== TIMER SYSTEM (NEW) ======
let timeLeft = 30 * 60; // 30 minutes in seconds
let timerInterval;
let timeUp = false;

function startTimer() {
  const timerDisplay = document.getElementById("timer");
  timerDisplay.style.fontSize = "24px";
  timerDisplay.style.fontWeight = "bold";
  timerDisplay.style.color = "#ffffff";
  timerDisplay.style.textAlign = "center";
  timerDisplay.style.marginBottom = "20px";

  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timeUp = true;
      // auto-finish when time expires
      finish();
      return;
    }

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;

    // Warning colors
    if (timeLeft <= 300) {
      // 5 minutes warning
      timerDisplay.style.color = timeLeft <= 60 ? "#ff0000" : "#ff9800";
      timerDisplay.style.animation = "pulse 1s infinite";
    }

    timeLeft--;
  }, 1000);
}

// ====== Calculator Logic ======
function toggleCalculator() {
  const calc = document.getElementById("calculator");
  const toggle = document.getElementById("calc-toggle");
  if (calc && toggle) {
    calc.classList.toggle("hidden");
    // Toggle image visibility based on calculator state
    const isOpen = !calc.classList.contains("hidden");
    const img = toggle.querySelector("img");
    if (img) {
      img.style.visibility = isOpen ? "hidden" : "visible";
    }
    toggle.style.backgroundColor = isOpen ? "transparent" : "#ffffff";
  }
}

// ====== Logout Logic ======
function initLogout() {
  const logout = document.getElementById("logout-btn");
  if (logout) {
    logout.addEventListener("click", () => {
      // Clear user session and redirect to login
      localStorage.removeItem("user");
      localStorage.removeItem("studentId");
      localStorage.removeItem("subject");
      localStorage.removeItem("score");
      window.location.href = "index.html";
    });
  }
}

function initCalculator() {
  const toggle = document.getElementById("calc-toggle");
  const close = document.getElementById("calc-close");
  const screen = document.getElementById("calc-screen");
  const keys = document.querySelectorAll("#calculator .calc-keys button");

  toggle.addEventListener("click", toggleCalculator);
  close.addEventListener("click", toggleCalculator);

  keys.forEach((key) => {
    key.addEventListener("click", () => {
      const value = key.textContent;
      if (value === "C") {
        screen.value = "";
        return;
      }
      if (value === "=") {
        try {
          screen.value = eval(screen.value) || "";
        } catch {
          screen.value = "Error";
        }
        return;
      }
      screen.value += value;
    });
  });
}

// call init when DOM ready
window.addEventListener("DOMContentLoaded", () => {
  initCalculator();
  initLogout();
  disableExternalNav();
});

// ====== Load selected subject ======
const subject = localStorage.getItem("subject") || "Science";
const questions = questionBanks[subject] || [];

// disable any potential external navigation on other buttons
function disableExternalNav() {
  ["prevBtn", "nextBtn", "finishBtn"].forEach((id) => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener("click", (e) => e.preventDefault());
  });
}

// remove calculator UI if subject is English
if (subject === "English") {
  document.addEventListener("DOMContentLoaded", () => {
    const calc = document.getElementById("calculator");
    const toggle = document.getElementById("calc-toggle");
    if (calc) calc.remove();
    if (toggle) toggle.remove();
  });
}

if (subject === "English") {
  window.addEventListener("DOMContentLoaded", () => {
    initLogout();
    disableExternalNav();
  });
  function initLogout() {
    const logout = document.getElementById("logout-btn");
    if (logout) {
      logout.addEventListener("click", () => {
        // Clear user session and redirect to login
        localStorage.removeItem("user");
        localStorage.removeItem("studentId");
        localStorage.removeItem("subject");
        localStorage.removeItem("score");
        window.location.href = "index.html";
      });
    }
  }
}
// remove calculator UI if subject is Biology
if (subject === "Biology") {
  document.addEventListener("DOMContentLoaded", () => {
    const calc = document.getElementById("calculator");
    const toggle = document.getElementById("calc-toggle");
    if (calc) calc.remove();
    if (toggle) toggle.remove();
  });
}

if (subject === "Biology") {
  window.addEventListener("DOMContentLoaded", () => {
    initLogout();
    disableExternalNav();
  });
  function initLogout() {
    const logout = document.getElementById("logout-btn");
    if (logout) {
      logout.addEventListener("click", () => {
        // Clear user session and redirect to login
        localStorage.removeItem("user");
        localStorage.removeItem("studentId");
        localStorage.removeItem("subject");
        localStorage.removeItem("score");
        window.location.href = "index.html";
      });
    }
  }
}

let current = 0;
let answers = Array(questions.length).fill(null);

// ====== CSS for Timer Animation (NEW) ======
const timerCSS = `
<style>
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}
.warning { animation: pulse 1s infinite; }
</style>
`;

// Render question
function render() {
  if (timeUp) return;

  const { q, opts } = questions[current];

  // Add timer display div if not exists
  if (!document.getElementById("timer")) {
    document.body.insertAdjacentHTML(
      "afterbegin",
      `
            <div id="timer" style="font-family: Arial, sans-serif;"></div>
            ${timerCSS}
        `,
    );
  }

  // insert calculator CSS only once
  if (!document.getElementById("calc-style")) {
    const styleEl = document.createElement("style");
    styleEl.id = "calc-style";
    // nothing additional needed here since styles are in exam.css.
    document.head.appendChild(styleEl);
  }

  document.getElementById("question-number").textContent =
    `Question ${current + 1}`;
  document.getElementById("question-text").textContent = q;

  document.getElementById("options").innerHTML = opts
    .map(
      (opt, i) => `
        <label style="display: block; margin: 10px 0; cursor: pointer;">
            <input type="radio" name="answer" value="${i}" 
                   ${answers[current] === i ? "checked" : ""} 
                   onchange="selectAnswer(${i})">
            ${opt}
        </label>
        `,
    )
    .join("");

  document.getElementById("prevBtn").disabled = !current;
  document.getElementById("nextBtn").style.display =
    current < questions.length - 1 ? "inline" : "none";
  document.getElementById("finishBtn").style.display =
    current === questions.length - 1 ? "inline" : "none";
}

// Answer selection
function selectAnswer(index) {
  answers[current] = index;
}

// Navigation
function nextQ() {
  if (current < questions.length - 1) {
    current++;
    render();
  }
}

function prevQ() {
  if (current > 0) {
    current--;
    render();
  }
}

// Finish quiz
function finish() {
  if (timerInterval) clearInterval(timerInterval);

  // Check if no questions were attempted
  if (answers.every((a) => a === null)) {
    // Redirect to index.html if no attempts
    window.location.href = "index.html";
        alert("You did not answer any question which is the reason you are being redirected to the homepage")
    return;
  }

  const score = questions.reduce(
    (s, { ans }, i) => s + (answers[i] === ans ? 1 : 0),
    0,
  );
  localStorage.setItem("score", score);
  window.location.href = "result.html";
}

// Initialize quiz
window.onload = function () {
  // Check if page is being refreshed - log out if so
  if (performance.navigation.type === 1) {
    // Page was refreshed - clear session and redirect
    localStorage.removeItem("user");
    localStorage.removeItem("studentId");
    localStorage.removeItem("subject");
    localStorage.removeItem("score");
    window.location.href = "index.html";
    alert("You were informed not to refresh the page, you will be redirected to the home page ")
    return;
  }

  render(); // render first so timer div exists
  startTimer(); // START TIMER AUTOMATICALLY

  // ===== Tab Switch Detection =====
  let tabSwitchCount = 0;

  // Listen for visibility change (tab switching)
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      // User switched to another tab
      tabSwitchCount++;

      if (tabSwitchCount === 1) {
        // First time - warn the user
        alert(
          "Warning: Do not switch tabs during the exam! If you switch tabs again, your exam will restart.",
        );
      } else if (tabSwitchCount === 2) {
        // Second time - warn again
        alert(
          "Warning: This is your second warning! If you switch tabs one more time, your exam will restart.",
        );
      } else if (tabSwitchCount >= 3) {
        // Third time - restart the exam
        // Store flag to show alert on welcome page
        localStorage.setItem("examRestarted", "true");
        
        // Clear session and restart
        localStorage.removeItem("user");
        localStorage.removeItem("studentId");
        localStorage.removeItem("subject");
        localStorage.removeItem("score");
        window.location.href = "index.html";
      }
    }
  });

  // Prevent going back in history
  window.onpageshow = function (event) {
    if (event.persisted) {
      // Page is loaded from back/forward cache - restart exam
      localStorage.removeItem("user");
      localStorage.removeItem("studentId");
      localStorage.removeItem("subject");
      localStorage.removeItem("score");
      window.location.href = "index.html";
    }
  };
};

function showResult() {
  document.getElementById("username").innerText = Name;
}

// Generate result and remark (runs only if result.html has #score and #remark)
const score = localStorage.getItem("score");
if (document.getElementById("score")) {
  document.getElementById("score").textContent += `${(score / 50) * 100}%`;

  const remark = document.getElementById("remark");
  if (score > 10) {
    remark.textContent = "This is an excellent result, keep it up.";
  } else {
    remark.textContent = "You can work harder to get better.";
  }
}
