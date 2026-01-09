// PODAR INTERNATIONAL SCHOOL - COMPREHENSIVE QUESTION DATABASE
// Interview Drive - January 2026
// With Random Question Selection

// ============================================
// TEACHER APTITUDE - COMMON FOR ALL CANDIDATES
// ============================================

// SECTION 1: BASIC ENGLISH KNOWLEDGE
// Database: 20 questions, Exam selects: 10 random
const basicEnglishDatabase = [
    { question: "Choose the correct spelling:", options: ["Occassion", "Occasion", "Ocasion", "Occation"], correct: 1 },
    { question: "What is the plural of 'child'?", options: ["Childs", "Children", "Childes", "Childrens"], correct: 1 },
    { question: "Identify the noun: She sings beautifully.", options: ["She", "sings", "beautifully", "None"], correct: 0 },
    { question: "Which is the correct sentence?", options: ["He don't know", "He doesn't know", "He not know", "He didn't knew"], correct: 1 },
    { question: "What is the past tense of 'go'?", options: ["Goed", "Went", "Gone", "Going"], correct: 1 },
    { question: "Identify the adjective: The quick brown fox.", options: ["quick", "brown", "Both A and B", "fox"], correct: 2 },
    { question: "What is a synonym for 'happy'?", options: ["Sad", "Joyful", "Angry", "Tired"], correct: 1 },
    { question: "What is an antonym for 'hot'?", options: ["Warm", "Cold", "Cool", "Freezing"], correct: 1 },
    { question: "Identify the verb: She dances gracefully.", options: ["She", "dances", "gracefully", "None"], correct: 1 },
    { question: "What punctuation ends a question?", options: ["Period", "Comma", "Question mark", "Exclamation"], correct: 2 },
    { question: "What is a pronoun?", options: ["Person", "Place", "Word replacing noun", "Action"], correct: 2 },
    { question: "Choose correct article: ___ apple a day", options: ["A", "An", "The", "No article"], correct: 1 },
    { question: "What is the superlative of 'good'?", options: ["Gooder", "Goodest", "Better", "Best"], correct: 3 },
    { question: "Identify the adverb: He runs quickly.", options: ["He", "runs", "quickly", "None"], correct: 2 },
    { question: "What is a compound word?", options: ["Long word", "Two words combined", "Foreign word", "Slang"], correct: 1 },
    { question: "What is alliteration?", options: ["Rhyming", "Repetition of sounds", "Metaphor", "Simile"], correct: 1 },
    { question: "Choose the correct form: She ___ to school daily", options: ["go", "goes", "going", "went"], correct: 1 },
    { question: "What is a conjunction?", options: ["Noun", "Verb", "Connecting word", "Adjective"], correct: 2 },
    { question: "Identify preposition: The book is on the table.", options: ["book", "is", "on", "table"], correct: 2 },
    { question: "What is the comparative of 'big'?", options: ["Biger", "Bigger", "Biggest", "More big"], correct: 1 }
];

// SECTION 2: COMPUTER KNOWLEDGE
// Database: 10 questions, Exam selects: 5 random
const computerKnowledgeDatabase = [
    { question: "Which part of the computer is often referred to as the 'brains' of the machine?", options: ["RAM", "Hard Drive", "CPU (Central Processing Unit)", "Monitor"], correct: 2 }, 
    { question: "What does the acronym 'URL' stand for?", options: ["Uniform Resource Locator", "Universal Radio Line", "United Resource Link", "User Remote Log"], correct: 0 }, 
    { question: "Which of the following is a permanent storage device?", options: ["RAM", "Cache Memory", "Hard Disk Drive (HDD)", "Register"], correct: 2 }, 
    { question: "1 Terabyte (TB) is equal to:", options: ["1024 Gigabytes (GB)", "1024 Megabytes (MB)", "1000 Kilobytes (KB)", "512 Gigabytes (GB)"], correct: 0 }, 
    { question: "What is the main function of an Operating System?", options: ["To create spreadsheets", "To manage hardware and software resources", "To protect the computer from dust", "To browse the internet only"], correct: 1 }, 
    { question: "Which shortcut key is used to 'Paste' a copied item in Windows?", options: ["Ctrl + C", "Ctrl + X", "Ctrl + P", "Ctrl + V"], correct: 3 }, 
    { question: "Which protocol is used to securely transfer data over the World Wide Web?", options: ["FTP", "HTTPS", "SMTP", "SNMP"], correct: 1 }, 
    { question: "What type of software is 'OpenOffice' or 'Linux'?", options: ["Proprietary Software", "Malware", "Open Source Software", "Firmware"], correct: 2 }, 
    { question: "Which of these is an example of an Input Device?", options: ["Printer", "Monitor", "Scanner", "Speaker"], correct: 2 }, 
    { question: "What does RAM stand for?", options: ["Read Access Memory", "Random Access Memory", "Remote Analysis Module", "Rapid Access Memory"], correct: 1 },
];

// SECTION 3: CLASSROOM MANAGEMENT
// Database: 10 questions, Exam selects: 5 random
const classroomManagementDatabase = [
    { question: "What is the most effective way to set classroom rules?", options: ["Impose rules without discussion", "Create rules with student involvement", "Change rules daily", "Avoid rules"], correct: 1 },
    { question: "How should a teacher respond to minor misbehavior?", options: ["Ignore it always", "Address it calmly and immediately", "Punish the whole class", "Send the student out"], correct: 1 },
    { question: "What helps in managing time effectively in class?", options: ["Unplanned teaching", "Clear lesson objectives", "Extended lectures", "Skipping activities"], correct: 1 },
    { question: "Which strategy encourages student engagement?", options: ["One-way teaching", "Interactive questioning", "Frequent scolding", "Strict silence"], correct: 1 },
    { question: "What is the best way to handle a disruptive student?", options: ["Ignore them", "Address privately after class", "Shout at them", "Send out immediately"], correct: 1 },
    { question: "What promotes a positive classroom environment?", options: ["Strict rules only", "Mutual respect", "Silent classroom", "No rules"], correct: 1 },
    { question: "How can a teacher prevent discipline problems?", options: ["By reacting late", "By planning engaging lessons", "By giving punishments", "By avoiding students"], correct: 1 },
    { question: "What role does consistency play in classroom management?", options: ["Confuses students", "Builds trust and fairness", "Reduces authority", "Is unnecessary"], correct: 1 },
    { question: "How should praise be used in the classroom?", options: ["Rarely", "Specifically and sincerely", "For only top students", "Never"], correct: 1 },
    { question: "What is an effective seating arrangement?", options: ["Random seating always", "Flexible seating based on activity", "Fixed seating only", "Teacher-centered only"], correct: 1 }
];

// ============================================
// SUBJECT APTITUDE DATABASES - 16 SUBJECTS
// Each subject has: 10 Easy, 15 Moderate, 15 Difficult
// Exam selects: 4 Easy, 8 Moderate, 8 Difficult = 20 total
// ============================================

// PRT ENGLISH
const prtEnglishDatabase = {
    easy: [
        { question: "What is a vowel?", options: ["A, E, I, O, U", "B, C, D", "All letters", "Consonants"], correct: 0 },
        { question: "How many letters in English alphabet?", options: ["24", "25", "26", "27"], correct: 2 },
        { question: "What is a sentence?", options: ["Single word", "Complete thought", "Question only", "Paragraph"], correct: 1 },
        { question: "What is rhyming?", options: ["Same meaning", "Same sound at end", "Same spelling", "Same length"], correct: 1 },
        { question: "What is a story?", options: ["Poem", "Narrative with events", "List", "Description"], correct: 1 },
        { question: "What is capital letter used for?", options: ["Small words", "Start of sentence", "Middle of word", "End of sentence"], correct: 1 },
        { question: "What is full stop used for?", options: ["Start sentence", "End sentence", "Ask question", "Show excitement"], correct: 1 },
        { question: "What is phonics?", options: ["Math", "Sound-letter relationship", "Drawing", "Sports"], correct: 1 },
        { question: "What is reading?", options: ["Writing", "Understanding written text", "Speaking", "Listening"], correct: 1 },
        { question: "What is spelling?", options: ["Math", "Correct letter order", "Drawing", "Coloring"], correct: 1 }
    ],
    moderate: [
        { question: "What is a simile?", options: ["Direct comparison", "Comparison using like/as", "Exaggeration", "Sound word"], correct: 1 },
        { question: "What is comprehension?", options: ["Writing", "Understanding meaning", "Spelling", "Grammar"], correct: 1 },
        { question: "What is a paragraph?", options: ["Single sentence", "Group of related sentences", "Title", "Poem"], correct: 1 },
        { question: "What is punctuation?", options: ["Spelling", "Marks for clarity", "Grammar", "Vocabulary"], correct: 1 },
        { question: "What is vocabulary?", options: ["Grammar rules", "Words we know", "Punctuation", "Handwriting"], correct: 1 },
        { question: "What is creative writing?", options: ["Copying", "Original composition", "Reading", "Listening"], correct: 1 },
        { question: "What is a main idea?", options: ["Title", "Central point", "Last sentence", "First word"], correct: 1 },
        { question: "What is prediction in reading?", options: ["Guessing", "Anticipating what comes next", "Memorizing", "Copying"], correct: 1 },
        { question: "What is sequence?", options: ["Random order", "Correct order of events", "Title", "Ending"], correct: 1 },
        { question: "What is character in story?", options: ["Title", "Person/animal in story", "Setting", "Plot"], correct: 1 },
        { question: "What is setting?", options: ["Characters", "Time and place", "Plot", "Theme"], correct: 1 },
        { question: "What is dialogue?", options: ["Description", "Conversation", "Title", "Summary"], correct: 1 },
        { question: "What is cause and effect?", options: ["Random events", "Reason and result", "Title", "Character"], correct: 1 },
        { question: "What is inference?", options: ["Direct statement", "Conclusion from clues", "Title", "Summary"], correct: 1 },
        { question: "What is fluency in reading?", options: ["Slow reading", "Smooth and accurate reading", "Loud reading", "Silent reading"], correct: 1 }
    ],
    difficult: [
        { question: "What is differentiated instruction?", options: ["Same for all", "Tailored to needs", "Advanced only", "Basic only"], correct: 1 },
        { question: "What is phonological awareness?", options: ["Letters", "Sound recognition", "Grammar", "Vocabulary"], correct: 1 },
        { question: "What is scaffolding in teaching?", options: ["Building", "Support for learning", "Assessment", "Discipline"], correct: 1 },
        { question: "What is metacognition?", options: ["Memory", "Thinking about thinking", "Reading", "Writing"], correct: 1 },
        { question: "What is genre?", options: ["Grammar", "Category of literature", "Punctuation", "Spelling"], correct: 1 },
        { question: "What is context clues?", options: ["Dictionary", "Surrounding words for meaning", "Title", "Pictures"], correct: 1 },
        { question: "What is narrative voice?", options: ["Loud", "Perspective of storyteller", "Silent", "Soft"], correct: 1 },
        { question: "What is literary device?", options: ["Computer", "Technique for effect", "Book", "Paper"], correct: 1 },
        { question: "What is summarizing?", options: ["Copying all", "Brief main points", "Title", "Introduction"], correct: 1 },
        { question: "What is text structure?", options: ["Font", "Organization pattern", "Size", "Color"], correct: 1 },
        { question: "What is author's purpose?", options: ["Name", "Reason for writing", "Title", "Length"], correct: 1 },
        { question: "What is critical thinking?", options: ["Criticism", "Analytical evaluation", "Memorization", "Copying"], correct: 1 },
        { question: "What is formative assessment in reading?", options: ["Final test", "Ongoing feedback", "Grades only", "Punishment"], correct: 1 },
        { question: "What is reading strategy?", options: ["Random", "Planned approach", "Guessing", "Skipping"], correct: 1 },
        { question: "What is multimodal literacy?", options: ["One method", "Multiple forms of communication", "Reading only", "Writing only"], correct: 1 }
    ]
};

// TGT ENGLISH
const tgtEnglishDatabase = {
    easy: [
        { question: "Who wrote 'Romeo and Juliet'?", options: ["Dickens", "Shakespeare", "Austen", "Wordsworth"], correct: 1 },
        { question: "What is poetry?", options: ["Prose", "Expressive writing in verse", "Essay", "Letter"], correct: 1 },
        { question: "What is a novel?", options: ["Short story", "Long narrative fiction", "Poem", "Play"], correct: 1 },
        { question: "What is grammar?", options: ["Vocabulary", "Rules of language", "Pronunciation", "Spelling"], correct: 1 },
        { question: "What is a metaphor?", options: ["Literal meaning", "Direct comparison", "Exaggeration", "Sound"], correct: 1 },
        { question: "What is prose?", options: ["Poetry", "Normal written language", "Drama", "Verse"], correct: 1 },
        { question: "What is a verb?", options: ["Person", "Action word", "Place", "Thing"], correct: 1 },
        { question: "What is alliteration?", options: ["Rhyme", "Repetition of initial sounds", "Metaphor", "Simile"], correct: 1 },
        { question: "What is a clause?", options: ["Word", "Group with subject-verb", "Letter", "Sentence"], correct: 1 },
        { question: "What is syntax?", options: ["Meaning", "Sentence structure", "Pronunciation", "Vocabulary"], correct: 1 }
    ],
    moderate: [
        { question: "What is romanticism in literature?", options: ["Love stories", "Emphasis on emotion and nature", "Modern style", "Ancient style"], correct: 1 },
        { question: "What is irony?", options: ["Literal meaning", "Opposite of expected", "Repetition", "Exaggeration"], correct: 1 },
        { question: "What is theme?", options: ["Title", "Central idea", "Character", "Setting"], correct: 1 },
        { question: "What is dramatic irony?", options: ["Loud drama", "Audience knows more than character", "Comedy", "Tragedy"], correct: 1 },
        { question: "What is foreshadowing?", options: ["Flashback", "Hint of future events", "Summary", "Conclusion"], correct: 1 },
        { question: "What is symbolism?", options: ["Signs", "Objects representing ideas", "Letters", "Numbers"], correct: 1 },
        { question: "What is tone?", options: ["Sound", "Author's attitude", "Volume", "Pitch"], correct: 1 },
        { question: "What is imagery?", options: ["Pictures", "Descriptive language", "Photos", "Videos"], correct: 1 },
        { question: "What is characterization?", options: ["Summary", "Creating characters", "Plot", "Setting"], correct: 1 },
        { question: "What is conflict?", options: ["Agreement", "Struggle in story", "Peace", "Harmony"], correct: 1 },
        { question: "What is point of view?", options: ["Opinion", "Narrative perspective", "Setting", "Theme"], correct: 1 },
        { question: "What is personification?", options: ["Character", "Human traits to non-human", "Person", "Description"], correct: 1 },
        { question: "What is hyperbole?", options: ["Understatement", "Exaggeration", "Truth", "Fact"], correct: 1 },
        { question: "What is onomatopoeia?", options: ["Name", "Sound word", "Title", "Character"], correct: 1 },
        { question: "What is satire?", options: ["Praise", "Criticism through humor", "Description", "Narration"], correct: 1 }
    ],
    difficult: [
        { question: "What is postmodernism?", options: ["Old style", "Rejection of absolute truths", "Classical", "Romantic"], correct: 1 },
        { question: "What is deconstructionism?", options: ["Building", "Analyzing underlying assumptions", "Construction", "Creation"], correct: 1 },
        { question: "What is epistolary novel?", options: ["Diary", "Written in letters", "Poem", "Play"], correct: 1 },
        { question: "What is bildungsroman?", options: ["Romance", "Coming-of-age story", "Mystery", "Horror"], correct: 1 },
        { question: "What is stream of consciousness?", options: ["River", "Continuous thought flow", "Plot", "Setting"], correct: 1 },
        { question: "What is allegory?", options: ["Story", "Symbolic narrative", "Fact", "Biography"], correct: 1 },
        { question: "What is caesura?", options: ["Cut", "Pause in line of poetry", "Rhyme", "Meter"], correct: 1 },
        { question: "What is enjambment?", options: ["End", "Continuation across lines", "Stop", "Pause"], correct: 1 },
        { question: "What is juxtaposition?", options: ["Separation", "Placing contrasts together", "Agreement", "Similarity"], correct: 1 },
        { question: "What is denouement?", options: ["Beginning", "Resolution of plot", "Climax", "Introduction"], correct: 1 },
        { question: "What is verisimilitude?", options: ["Fiction", "Appearance of truth", "Fantasy", "Imagination"], correct: 1 },
        { question: "What is diction?", options: ["Dictionary", "Word choice", "Grammar", "Punctuation"], correct: 1 },
        { question: "What is motif?", options: ["Motor", "Recurring element", "Character", "Setting"], correct: 1 },
        { question: "What is anachronism?", options: ["Time error", "Misplaced in time", "Correct time", "Future"], correct: 1 },
        { question: "What is euphemism?", options: ["Harsh word", "Mild expression", "Exaggeration", "Repetition"], correct: 1 }
    ]
};

// PRT MATHS - Sample questions (you'll add 40 total per subject)
const prtMathsDatabase = {
    easy: [
        { question: "What is 5 + 3?", options: ["6", "7", "8", "9"], correct: 2 },
        { question: "What is 10 - 4?", options: ["5", "6", "7", "8"], correct: 1 },
        { question: "What is 2 × 3?", options: ["5", "6", "7", "8"], correct: 1 },
        { question: "What is 12 ÷ 3?", options: ["3", "4", "5", "6"], correct: 1 },
        { question: "What comes after 19?", options: ["18", "20", "21", "22"], correct: 1 },
        { question: "What is half of 10?", options: ["3", "4", "5", "6"], correct: 2 },
        { question: "How many sides in triangle?", options: ["2", "3", "4", "5"], correct: 1 },
        { question: "What is 7 + 7?", options: ["12", "13", "14", "15"], correct: 2 },
        { question: "Count by 2s: 2, 4, 6, __?", options: ["7", "8", "9", "10"], correct: 1 },
        { question: "What is place value of 3 in 35?", options: ["Ones", "Tens", "Hundreds", "Thousands"], correct: 1 }
    ],
    moderate: [
        { question: "What is 15 + 28?", options: ["41", "42", "43", "44"], correct: 2 },
        { question: "What is area of square with side 4?", options: ["8", "12", "16", "20"], correct: 2 },
        { question: "What is 56 ÷ 7?", options: ["6", "7", "8", "9"], correct: 2 },
        { question: "What is perimeter of rectangle 5×3?", options: ["8", "15", "16", "20"], correct: 2 },
        { question: "What is 1/2 + 1/4?", options: ["1/6", "2/6", "3/4", "1/3"], correct: 2 },
        { question: "Convert 2 hours to minutes", options: ["60", "100", "120", "140"], correct: 2 },
        { question: "What is 25% of 100?", options: ["20", "25", "30", "35"], correct: 1 },
        { question: "Round 47 to nearest ten", options: ["40", "45", "50", "55"], correct: 2 },
        { question: "What is LCM of 3 and 4?", options: ["7", "12", "15", "16"], correct: 1 },
        { question: "3² equals?", options: ["6", "9", "12", "15"], correct: 1 },
        { question: "What is HCF of 12 and 18?", options: ["3", "4", "6", "9"], correct: 2 },
        { question: "Compare: 0.5 __ 0.05", options: ["<", ">", "=", "≠"], correct: 1 },
        { question: "What is median of 3,5,7?", options: ["3", "5", "7", "15"], correct: 1 },
        { question: "Solve: 3x = 12, x = ?", options: ["3", "4", "5", "6"], correct: 1 },
        { question: "How many edges in cube?", options: ["6", "8", "10", "12"], correct: 3 }
    ],
    difficult: [
        { question: "Teaching strategy for place value?", options: ["Memorization", "Base-10 blocks", "Drill only", "Ignore"], correct: 1 },
        { question: "What is number sense?", options: ["Counting", "Understanding numbers", "Addition", "Subtraction"], correct: 1 },
        { question: "Best method for teaching fractions?", options: ["Abstract only", "Visual models", "Formulas only", "Skip"], correct: 1 },
        { question: "What is concrete-pictorial-abstract?", options: ["Theory", "Teaching progression", "Assessment", "Punishment"], correct: 1 },
        { question: "How to teach problem-solving?", options: ["Give answers", "Model strategies", "Skip", "Ignore"], correct: 1 },
        { question: "What is mathematical reasoning?", options: ["Calculation", "Logical thinking", "Memorization", "Speed"], correct: 1 },
        { question: "Best way to teach times tables?", options: ["Rote only", "Patterns and practice", "Skip", "Ignore"], correct: 1 },
        { question: "What is diagnostic assessment?", options: ["Final test", "Identifying gaps", "Grades", "Punishment"], correct: 1 },
        { question: "How to develop mental math?", options: ["Calculator only", "Strategies and practice", "Skip", "Avoid"], correct: 1 },
        { question: "What is math anxiety?", options: ["Love of math", "Fear of math", "Math skill", "Math game"], correct: 1 },
        { question: "How to make math engaging?", options: ["Lectures only", "Games and activities", "Tests only", "Skip"], correct: 1 },
        { question: "What is formative assessment in math?", options: ["Final exam", "Ongoing feedback", "Grades only", "Skip"], correct: 1 },
        { question: "How to teach geometry?", options: ["Abstract only", "Hands-on shapes", "Skip", "Ignore"], correct: 1 },
        { question: "What is mathematical discourse?", options: ["Silence", "Student discussion", "Teacher talk only", "No talk"], correct: 1 },
        { question: "How to differentiate math instruction?", options: ["Same for all", "Varied approaches", "Advanced only", "Basic only"], correct: 1 }
    ]
};

// TGT MATHS - Sample (full 40 questions to be added)
const tgtMathsDatabase = {
    easy: [
        { question: "What is the value of π?", options: ["3.12", "3.14", "3.16", "3.18"], correct: 1 },
        { question: "What is √144?", options: ["10", "11", "12", "13"], correct: 2 },
        { question: "What is 7 × 8?", options: ["54", "56", "58", "60"], correct: 1 },
        { question: "If x + 5 = 12, x = ?", options: ["5", "6", "7", "8"], correct: 2 },
        { question: "What is the sum of angles in triangle?", options: ["90°", "180°", "270°", "360°"], correct: 1 },
        { question: "What is 2³?", options: ["6", "8", "9", "12"], correct: 1 },
        { question: "What is 25% of 80?", options: ["15", "20", "25", "30"], correct: 1 },
        { question: "What is LCM of 4 and 6?", options: ["10", "12", "14", "16"], correct: 1 },
        { question: "What is HCF of 12 and 18?", options: ["3", "4", "6", "9"], correct: 2 },
        { question: "Solve: 2x + 3 = 11, x = ?", options: ["3", "4", "5", "6"], correct: 1 }
    ],
    moderate: [
        { question: "What is quadratic equation?", options: ["Linear", "ax²+bx+c=0", "Cubic", "Constant"], correct: 1 },
        { question: "What is Pythagoras theorem?", options: ["a+b=c", "a²+b²=c²", "a-b=c", "abc=1"], correct: 1 },
        { question: "What is derivative of x²?", options: ["x", "2x", "x²", "2x²"], correct: 1 },
        { question: "What is sin 30°?", options: ["0", "0.5", "1", "√3/2"], correct: 1 },
        { question: "What is arithmetic mean of 2,4,6?", options: ["3", "4", "5", "6"], correct: 1 },
        { question: "What is slope formula?", options: ["m=x/y", "m=(y₂-y₁)/(x₂-x₁)", "m=x+y", "m=xy"], correct: 1 },
        { question: "What is area of circle?", options: ["πr", "πr²", "2πr", "πd"], correct: 1 },
        { question: "What is ∫x dx?", options: ["x", "x²", "x²/2", "2x"], correct: 2 },
        { question: "What is log₁₀100?", options: ["1", "2", "10", "100"], correct: 1 },
        { question: "What is factorial of 5?", options: ["25", "60", "120", "125"], correct: 2 },
        { question: "What is cos 60°?", options: ["0", "0.5", "1", "√3/2"], correct: 1 },
        { question: "What is standard deviation?", options: ["Mean", "Spread measure", "Mode", "Median"], correct: 1 },
        { question: "What is matrix?", options: ["Number", "Array of numbers", "Graph", "Equation"], correct: 1 },
        { question: "What is probability of coin toss?", options: ["0.25", "0.5", "0.75", "1"], correct: 1 },
        { question: "What is permutation formula?", options: ["n!", "nPr=n!/(n-r)!", "nCr", "n²"], correct: 1 }
    ],
    difficult: [
        { question: "What is Rolle's theorem?", options: ["Derivative theorem", "f'(c)=0 in interval", "Integration", "Limit"], correct: 1 },
        { question: "What is Lagrange's mean value theorem?", options: ["Derivative", "f'(c)=(f(b)-f(a))/(b-a)", "Integral", "Limit"], correct: 1 },
        { question: "What is eigenvalue?", options: ["Matrix value", "λ in Av=λv", "Determinant", "Trace"], correct: 1 },
        { question: "What is Fourier series?", options: ["Sum", "Periodic function representation", "Derivative", "Integral"], correct: 1 },
        { question: "What is Laplace transform?", options: ["Integration", "Integral transform", "Derivative", "Sum"], correct: 1 },
        { question: "What is Green's theorem?", options: ["Derivative", "Line to double integral", "Integral", "Limit"], correct: 1 },
        { question: "What is Cauchy sequence?", options: ["Series", "Convergent sequence", "Divergent", "Infinite"], correct: 1 },
        { question: "What is L'Hôpital's rule?", options: ["Limit", "Evaluate 0/0 form", "Derivative", "Integral"], correct: 1 },
        { question: "What is Taylor series?", options: ["Sum", "Function approximation", "Derivative", "Integral"], correct: 1 },
        { question: "What is Stokes theorem?", options: ["Volume", "Surface to line integral", "Area", "Length"], correct: 1 },
        { question: "What is Jacobian?", options: ["Matrix", "Transformation matrix", "Determinant", "Vector"], correct: 1 },
        { question: "What is Riemann integral?", options: ["Sum", "Area under curve", "Derivative", "Limit"], correct: 1 },
        { question: "What is differential equation?", options: ["Equation", "Equation with derivatives", "Algebra", "Geometry"], correct: 1 },
        { question: "What is vector space?", options: ["Set", "Mathematical structure", "Number", "Function"], correct: 1 },
        { question: "What is Gaussian elimination?", options: ["Addition", "Matrix row reduction", "Multiplication", "Division"], correct: 1 }
    ]
};

// ============================================
// PLACEHOLDER for remaining 12 subjects
// (You'll populate these with 40 questions each)
// ============================================

const prtEVSDatabase = { 
    easy: [
        { question: "What is the process by which plants make their food?", options: ["Respiration", "Photosynthesis", "Germination", "Translocation"], correct: 1 },
        { question: "Which part of the plant absorbs water and minerals from the soil?", options: ["Stem", "Root hairs", "Leaves", "Flowers"], correct: 1 },
        { question: "What is the change of water from liquid state to water vapour called?", options: ["Condensation", "Evaporation", "Melting", "Sublimation"], correct: 1 },
        { question: "Why do woollen clothes keep us warm in winter?", options: ["They absorb sunlight", "They trap air inside", "They produce heat", "They block wind completely"], correct: 1 },
        { question: "Which natural resource is often called the ‘lungs of the Earth’?", options: ["Grasslands", "Oceans", "Forests", "Wetlands"], correct: 2 },
        { question: "What is the change of a solid into a liquid called?", options: ["Freezing", "Condensation", "Melting", "Evaporation"], correct: 2 },
        { question: "Which animal is traditionally called the king of the jungle?", options: ["Tiger", "Lion", "Leopard", "Elephant"], correct: 1 },
        { question: "Which gas is most important for human breathing?", options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Hydrogen"], correct: 1 },
        { question: "Why is water conservation necessary?", options: ["To increase rainfall", "To save water for future use", "To improve rivers", "To control floods"], correct: 1 },
        { question: "Which is the fastest land animal?", options: ["Leopard", "Horse", "Cheetah", "Deer"], correct: 2 }
    ], 
    moderate: [
        { question: "What is the largest planet in our solar system?", options: ["Saturn", "Earth", "Jupiter", "Uranus"], correct: 2 },
        { question: "Which nutrient helps in protecting our body from diseases and is rich in fruits?", options: ["Proteins", "Fats", "Vitamins", "Minerals"], correct: 2 },
        { question: "What is the largest mammal on Earth?", options: ["African elephant", "Blue whale", "Sperm whale", "Giraffe"], correct: 1 },
        { question: "What is the role of chlorophyll in plants?", options: ["Absorbing water", "Absorbing sunlight", "Transporting food", "Releasing carbon dioxide"], correct: 1 },
        { question: "Animals that eat both plants and animals are called:", options: ["Herbivores", "Carnivores", "Omnivores", "Scavengers"], correct: 2 },
        { question: "What is one major effect of destruction of animal habitats?", options: ["Animals multiply", "Animals migrate", "Animals become domestic", "Animals stop eating"], correct: 1 },
        { question: "Animals that eat only plants are called:", options: ["Carnivores", "Omnivores", "Herbivores", "Decomposers"], correct: 2 },
        { question: "Which part of the plant helps in reproduction?", options: ["Leaves", "Stem", "Roots", "Flowers"], correct: 3 },
        { question: "Why is biodiversity important?", options: ["To maintain ecosystem balance", "To reduce resources", "To increase pollution", "To control population"], correct: 0 },
        { question: "The scientific study of animals is called:", options: ["Botany", "Zoology", "Ecology", "Anatomy"], correct: 1 },
        { question: "Which set shows the correct order of rainbow colours?", options: ["Red, Blue, Green", "Yellow, Green, Blue", "Red, Orange, Yellow, Green, Blue, Indigo, Violet", "Violet, Indigo, Blue, Green"], correct: 2 },
        { question: "What happens to plants kept without sunlight for a long time?", options: ["They grow taller", "They remain healthy", "They wilt", "They flower early"], correct: 2 },
        { question: "Why do plants need sunlight?", options: ["For respiration", "To make food", "To absorb minerals", "For growth of roots"], correct: 1 },
        { question: "What does deforestation mean?", options: ["Growing forests", "Cutting down trees", "Protecting wildlife", "Making gardens"], correct: 1 },
        { question: "What is the conversion of liquid into solid called?", options: ["Melting", "Freezing", "Condensation", "Evaporation"], correct: 1 }
    ], 
    difficult: [
        { question: "Which animal is well known for seasonal long-distance migration?", options: ["Elephant", "Polar bear", "Caribou", "Camel"], correct: 2 },
        { question: "Which type of rock is formed from molten magma or lava?", options: ["Sedimentary", "Metamorphic", "Igneous", "Limestone"], correct: 2 },
        { question: "What branch of science deals with relationships between living organisms and their environment?", options: ["Biology", "Zoology", "Ecology", "Geography"], correct: 2 },
        { question: "What is the process by which water moves out of plant leaves?", options: ["Respiration", "Transpiration", "Photosynthesis", "Absorption"], correct: 1 },
        { question: "What causes the formation of a rainbow?", options: ["Reflection of sunlight", "Refraction only", "Dispersion of light", "Absorption of light"], correct: 2 },
        { question: "Which is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], correct: 2 },
        { question: "What is the change of gas into liquid called?", options: ["Evaporation", "Condensation", "Freezing", "Melting"], correct: 1 },
        { question: "Paper is mainly made from which part of plants?", options: ["Leaves", "Roots", "Stem", "Flowers"], correct: 2 },
        { question: "Which is the largest desert in the world?", options: ["Sahara", "Gobi", "Arabian", "Antarctic"], correct: 3 },
        { question: "Which animal generally has the longest lifespan?", options: ["Elephant", "Tortoise", "Whale", "Human"], correct: 1 },
        { question: "What is the process of water falling to Earth as rain or snow called?", options: ["Evaporation", "Condensation", "Precipitation", "Collection"], correct: 2 },
        { question: "Animals that eat other animals are known as:", options: ["Herbivores", "Carnivores", "Omnivores", "Scavengers"], correct: 1 },
        { question: "Why is Earth called the Blue Planet?", options: ["Due to clouds", "Due to oceans", "Due to atmosphere", "Due to ice caps"], correct: 1 },
        { question: "Which is the smallest planet in the solar system?", options: ["Mars", "Earth", "Mercury", "Venus"], correct: 2 },
        { question: "What is the main function of the skeletal system?", options: ["Movement only", "Protection of organs", "Support and structure", "Blood circulation"], correct: 2 }
    ] 
};
const tgtScienceDatabase = { 
    easy: [
        { question: "Deficiency of vitamin D causes:", options: ["Scurvy", "Rickets", "Beriberi", "Night blindness"], correct: 1 },
        { question: "Which method separates insoluble solids from liquids?", options: ["Evaporation", "Filtration", "Condensation", "Distillation"], correct: 1 },
        { question: "Which tissue transports water in plants?", options: ["Phloem", "Xylem", "Cambium", "Cortex"], correct: 1 },
        { question: "What is the largest planet in our solar system?", options: ["Earth", "Saturn", "Jupiter", "Uranus"], correct: 2 },
        { question: "What is the process by which organisms move from one place to another?", options: ["Locomotion", "Migration", "Hibernation", "Adaptation"], correct: 0 },
        { question: "What is the function of the roots in plants?", options: ["To absorb water and minerals", "To transport food", "To provide support", "To protect the plant"], correct: 0 },
        { question: "Broad tyres are used in heavy vehicles because they:", options: ["Reduce pressure on the ground", "Increase speed", "Reduce friction", "Increase mass"], correct: 0 },
        { question: "Which blood vessel carries oxygenated blood away from the heart and has thick elastic walls?", options: ["Vein", "Capillary", "Artery", "Pulmonary artery"], correct: 2 },
        { question: "Which component of blood helps in clotting?", options: ["RBC", "WBC", "Plasma", "Platelets"], correct: 3 },
        { question: "Which type of reproduction occurs in amoeba?", options: ["Budding", "Fragmentation", "Binary fission", "Spore formation"], correct: 2 }
    ], 
    moderate: [
        { question: "A plant kept in darkness for 48 hours is tested with iodine. The leaf does not turn blue-black. The best inference is:", options: ["The plant is dead", "Chlorophyll is absent", "Photosynthesis did not occur", "Carbon dioxide was absent"], correct: 2 },
        { question: "Which organ system works most closely with the circulatory system to supply energy to the body?", options: ["Digestive system", "Nervous system", "Skeletal system", "Excretory system"], correct: 0 },
        { question: "Which adaptation helps animals hide from predators?", options: ["Migration", "Camouflage", "Hibernation", "Mimicry"], correct: 1 },
        { question: "Which joint allows movement in all directions?", options: ["Hinge", "Pivot", "Fixed", "Ball and socket"], correct: 3 },
        { question: "Assertion: Water is essential for life. Reason: Water is a universal solvent.", options: ["Both A and R are true and R explains A", "Both A and R are true but R does not explain A", "A is true but R is false", "A is false but R is true"], correct: 1 },
        { question: "What is the process by which the Earth's atmosphere traps heat?", options: ["Greenhouse Effect", "Ozone Layer Depletion", "Acid Rain", "Global Warming"], correct: 0 },
        { question: "What is the speed of light in vacuum?", options: ["3 × 10^6 m/s", "3 × 10^8 m/s", "3 × 10^10 m/s", "3 × 10^12 m/s"], correct: 1 },
        { question: "What is the process by which organisms adjust to their environment?", options: ["Adaptation", "Evolution", "Mutation", "Natural Selection"], correct: 0 },
        { question: "A car is moving on a straight road. What type of motion is it?", options: ["Linear Motion", "Circular Motion", "Rotational Motion", "None of the above"], correct: 0 },
        { question: "Rohan sees his erect image of the same size in a mirror. What type of mirror is it?", options: ["Plane Mirror", "Concave Mirror", "Convex Mirror", "None of the above"], correct: 0 },
        { question: "People plan to plant trees in a barren area. What is the purpose?", options: ["To increase pollution", "To decrease oxygen levels", "To prevent soil erosion", "To harm wildlife"], correct: 2 },
        { question: "A person is using a fan. What type of energy conversion is happening?", options: ["Electrical to Mechanical", "Mechanical to Electrical", "Chemical to Thermal", "Nuclear to Electrical"], correct: 0 },
        { question: "A sound having high frequency but low amplitude will be perceived as:", options: ["Loud and shrill", "Soft and shrill", "Loud and dull", "Soft and dull"], correct: 1 },
        { question: "Iron nails kept in air and moisture develop a reddish-brown coating. The substance formed is:", options: ["Iron sulphide", "Iron oxide", "Iron carbonate", "Iron chloride"], correct: 1 },
        { question: "Which type of lever is a seesaw?", options: ["First-class lever", "Second-class lever", "Third-class lever", "Inclined plane"], correct: 0 }
    ], 
    difficult: [
        { question: "Rohan sees his erect image of the same size in a mirror. What type of mirror is it?", options: ["Plane Mirror", "Concave Mirror", "Convex Mirror", "None of the above"], correct: 0 },
        { question: "The SI unit of pressure is equivalent to:", options: ["N/m", "N/m²", "kg/m²", "kg/m"], correct: 1 },
        { question: "Which part of the brain controls balance and posture?", options: ["Cerebrum", "Medulla", "Cerebellum", "Spinal cord"], correct: 2 },
        { question: "The process of separating insoluble solids from liquids is called:", options: ["Evaporation", "Distillation", "Sedimentation", "Decantation"], correct: 2 },
        { question: "When light enters a denser medium from a rarer medium, it bends:", options: ["Away from the normal", "Along the normal", "Towards the normal", "Without bending"], correct: 2 },
        { question: "A boy walks 30 m east and then 40 m north in 10 s. His average speed is:", options: ["5 m/s", "7 m/s", "9 m/s", "4 m/s"], correct: 0 },
        { question: "If area of contact is doubled while weight remains same, pressure will:", options: ["Double", "Remain same", "Become half", "Become zero"], correct: 2 },
        { question: "A person suffers frequent infections. Which blood component is deficient?", options: ["RBC", "Platelets", "WBC", "Plasma"], correct: 2 },
        { question: "Which hormone imbalance would most affect an athlete’s stamina?", options: ["Thyroxine", "Insulin", "Adrenaline", "Growth hormone"], correct: 2 },
        { question: "If two plane mirrors form 7 images, the angle between them is:", options: ["30°", "45°", "60°", "90°"], correct: 1 },
        { question: "The speed of an object is calculated by:", options: ["Distance × Time", "Distance ÷ Time", "Time ÷ Distance", "Distance − Time"], correct: 1 },
        { question: "Loudness of sound depends on its:", options: ["Pitch", "Speed", "Amplitude", "Frequency"], correct: 2 },
        { question: "Which mirror is used as a rear-view mirror in vehicles?", options: ["Concave mirror", "Plane mirror", "Convex mirror", "Cylindrical mirror"], correct: 2 },
        { question: "Two objects of different masses fall freely from the same height. They reach ground:", options: ["Together", "Heavier first", "Lighter first", "At different times"], correct: 0 },
        { question: "A sound wave has frequency 500 Hz and wavelength 0.68 m. Its speed is:", options: ["340 m/s", "170 m/s", "250 m/s", "1000 m/s"], correct: 0 }
    ] 
};
const tgtBiologyDatabase = { 
    easy: [
        { question: "Which statement best explains why mitochondria have their own DNA?", options: ["To store excess energy", "Because they were once free-living organisms", "To control cell division", "To help in photosynthesis"], correct: 1 },
        { question: "Which factor does NOT directly affect the rate of photosynthesis?", options: ["Light intensity", "Carbon dioxide concentration", "Chlorophyll content", "Oxygen concentration"], correct: 3 },
        { question: "The upward movement of water in tall trees is mainly due to:", options: ["Root pressure alone", "Capillarity alone", "Transpiration pull", "Diffusion"], correct: 2 },
        { question: "Which of the following will occur if guard cells lose water?", options: ["Stomata open", "Stomata close", "Transpiration increases", "Photosynthesis increases"], correct: 1 },
        { question: "Which event marks the end of prophase in mitosis?", options: ["Formation of spindle fibres", "Condensation of chromosomes", "Disappearance of nuclear membrane", "Alignment of chromosomes"], correct: 2 },
        { question: "Which organelle is known as the powerhouse of the cell?", options: ["Golgi apparatus", "Ribosome", "Mitochondrion", "Lysosome"], correct: 2 },
        { question: "Which of the following is a living component of xylem?", options: ["Xylem vessels", "Xylem tracheids", "Xylem parenchyma", "Xylem fibres"], correct: 2 },
        { question: "The process of crossing two genetically dissimilar plants is called:", options: ["Fertilization", "Hybridization", "Photosynthesis", "Selection"], correct: 1 },
        { question: "Which tissue is responsible for movement of the body?", options: ["Epithelial tissue", "Connective tissue", "Muscular tissue", "Nervous tissue"], correct: 2 },
        { question: "A cell will swell up if:", options: ["Water concentration is higher inside the cell", "Water concentration is higher outside the cell", "Water concentration is same inside and outside", "None of these"], correct: 1 } 
    ], 
    moderate: [
        { question: "Why is bile important for digestion even though it has no enzymes?", options: ["Digests proteins", "Digests carbohydrates", "Emulsifies fats", "Neutralizes stomach enzymes"], correct: 2 },
        { question: "Which structure prevents food from entering the trachea during swallowing?", options: ["Larynx", "Pharynx", "Epiglottis", "Glottis"], correct: 2 },
        { question: "Deficiency of which mineral leads to anaemia?", options: ["Calcium", "Iron", "Iodine", "Phosphorus"], correct: 1 },
        { question: "Which blood vessel carries oxygenated blood from lungs to heart?", options: ["Pulmonary artery", "Pulmonary vein", "Vena cava", "Aorta"], correct: 1 },
        { question: "Which plant hormone promotes cell elongation and bending towards light?", options: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"], correct: 2 },
        { question: "Flexibility in plants is provided by which tissue?", options: ["Parenchyma", "Chlorenchyma", "Collenchyma", "Sclerenchyma"], correct: 2 },
        { question: "Which is NOT a function of the large central vacuole?", options: ["Providing turgidity", "Storing amino acids and sugars", "Protein synthesis", "Storing waste"], correct: 2 },
        { question: "Find the odd one out related to green manure:", options: ["Sunn hemp", "Guar", "Urea", "Berseem"], correct: 2 },
        { question: "The tissue that joins muscle to bone is:", options: ["Ligament", "Tendon", "Areolar", "Adipose"], correct: 1 },
        { question: "What happens to a plant cell in a hypertonic solution?", options: ["Bursts", "Becomes turgid", "Plasmolysis", "No change"], correct: 2 },
        { question: "Which are milch animals?", options: ["Cow and bull", "Goat and buffalo", "Hen and duck", "Sheep and horse"], correct: 1 },
        { question: "Cartilage is not found in:", options: ["Nose", "Ear", "Kidney", "Larynx"], correct: 2 },
        { question: "Digestion of own organelles by lysosomes is called:", options: ["Phagocytosis", "Autophagy", "Exocytosis", "Pinocytosis"], correct: 1 },
        { question: "Which statement is true about arteries?", options: ["Carry deoxygenated blood only", "Have thin walls", "Carry blood away from heart", "Have valves"], correct: 2 },
        { question: "Chromosomes are made up of:", options: ["DNA only", "RNA and proteins", "DNA and proteins", "DNA and RNA"], correct: 2 }
    ], 
    difficult: [
        { question: "Which factor prevents self-pollination in bisexual flowers?", options: ["Homogamy", "Cleistogamy", "Dichogamy", "Autogamy"], correct: 2 },
        { question: "Which tissue provides mechanical strength and flexibility?", options: ["Parenchyma", "Collenchyma", "Sclerenchyma", "Xylem"], correct: 1 },
        { question: "Role of alveoli in lungs is to:", options: ["Transport oxygen", "Filter air", "Exchange gases", "Warm air"], correct: 2 },
        { question: "Which process is responsible for variation in offspring?", options: ["Mitosis", "Binary fission", "Meiosis", "Budding"], correct: 2 },
        { question: "Which organelle detoxifies drugs in liver cells?", options: ["Rough ER", "Smooth ER", "Lysosomes", "Peroxisomes"], correct: 1 },
        { question: "Tracheids and vessels are thickened with:", options: ["Suberin", "Cutin", "Lignin", "Cellulose only"], correct: 2 },
        { question: "Elongated, multinucleated, striated cells indicate:", options: ["Smooth muscle", "Cardiac muscle", "Skeletal muscle", "Squamous epithelium"], correct: 2 },
        { question: "Which adaptation reduces water loss in desert plants?", options: ["Broad leaves", "Thin cuticle", "Sunken stomata", "Large surface area"], correct: 2 },
        { question: "Which part of brain controls involuntary actions?", options: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Hypothalamus"], correct: 2 },
        { question: "Why is diffusion insufficient in large organisms?", options: ["Needs energy", "Too slow over long distances", "Needs membranes", "Causes water loss"], correct: 1 },
        { question: "Best irrigation system for uneven land with scarce water?", options: ["Canal system", "Tank system", "Sprinkler system", "River lift system"], correct: 2 },
        { question: "Anaerobic respiration in muscles produces:", options: ["Ethanol and CO2", "Lactic acid", "Pyruvic acid", "Acetic acid"], correct: 1 },
        { question: "Why is meiosis essential for sexual reproduction?", options: ["Increases size", "Produces identical cells", "Maintains chromosome number", "Repairs tissues"], correct: 2 },
        { question: "Osmosis is movement of:", options: ["Solute molecules", "Water molecules", "Ions", "Proteins"], correct: 1 },
        { question: "Which enzyme is present in saliva?", options: ["Pepsin", "Trypsin", "Amylase", "Lipase"], correct: 2 }
    ] 
};
const tgtChemistryDatabase = { 
    easy: [
        { question: "Name the first organic compound synthesized in laboratory.", options: ["Urea", "Ammonia", "Acetone", "None"], correct: 0 },
        { question: "Maximum number of electrons in a subshell can be:", options: ["4l + 2", "4l − 2", "2n²", "2l + 1"], correct: 2 },
        { question: "Which of the following compound is known as slaked lime?", options: ["CaO", "CaSO₄", "Ca(OH)₂", "CaCO₃"], correct: 2 },
        { question: "IUPAC name of CH₃–CH₂–CHCl–CH₂–CO–CH₃ is:", options: ["4-Chlorohexan-2-one", "3-Chlorohexan-2-one", "5-Chlorohexan-2-one", "2-Chlorohexan-2-one"], correct: 0 },
        { question: "Brass is an alloy of:", options: ["Copper and iron", "Copper and zinc", "Iron and carbon", "Copper and tin"], correct: 1 },
        { question: "Which indicator shows neutralisation between acid and base?", options: ["Methyl orange", "Phenolphthalein", "Litmus", "All of these"], correct: 3 },
        { question: "The process of coating iron with zinc to prevent rusting is called:", options: ["Alloying", "Galvanization", "Electroplating", "Annealing"], correct: 1 },
        { question: "A mixture of ammonium chloride and sand can best be separated by:", options: ["Filtration", "Evaporation", "Sublimation", "Decantation"], correct: 2 },
        { question: "Which process is used to separate cream from milk?", options: ["Filtration", "Evaporation", "Centrifugation", "Sublimation"], correct: 2 },
        { question: "Which of the following oxides is acidic in nature?", options: ["Na₂O", "MgO", "CO₂", "CaO"], correct: 2 }
    ], 
    moderate: [
        { question: "IUPAC name of neopentane is:", options: ["2-methylbutane", "2,2-dimethylpropane", "2-methylpropane", "2,2-dimethylbutane"], correct: 1 },
        { question: "Oxidation number of chlorine in HClO₄ is:", options: ["+3", "+5", "+7", "+8"], correct: 2 },
        { question: "Chemical name of bleaching powder is:", options: ["Calcium oxychloride", "Oxygen chloride", "Calcium hydroxide", "Calcium hydroxyl chloride"], correct: 0 },
        { question: "CH₃CHO and C₆H₅CH₂CHO can be distinguished by:", options: ["Benedict's test", "Iodoform test", "Tollen's test", "Fehling's test"], correct: 1 },
        { question: "Plaster of Paris (POP) is:", options: ["CaSO₄·½H₂O", "CaSO₄·2H₂O", "CaSO₄·H₂O", "CaSO₄"], correct: 0 },
        { question: "Acid rain causes leaching of:", options: ["Nutrients from soil", "Plastic from soil", "Metals from air", "Water from clouds"], correct: 0 },
        { question: "Which metal is extracted by electrolysis?", options: ["Iron", "Aluminium", "Copper", "Zinc"], correct: 1 },
        { question: "Soap shows poor cleansing action in hard water due to formation of:", options: ["Lather", "Scum", "Foam", "Salt precipitate"], correct: 1 },
        { question: "A substance with molar mass 58.5 g/mol is:", options: ["H₂SO₄", "NaCl", "KCl", "Na₂CO₃"], correct: 1 },
        { question: "Which observation led Rutherford to propose dense nucleus?", options: ["Most α-particles passed straight", "Slight deflection", "Some α-particles rebounded", "Electrons emit radiation"], correct: 2 },
        { question: "SI unit of amount of substance is:", options: ["Gram", "Kilogram", "Mole", "Litre"], correct: 2 },
        { question: "For a first-order reaction with half-life 10 min, time for 75% completion is:", options: ["10 min", "20 min", "30 min", "40 min"], correct: 2 },
        { question: "Number of molecules in 18 g of water is:", options: ["6.02 × 10²³", "3.01 × 10²³", "1.204 × 10²⁴", "9.03 × 10²³"], correct: 0 },
        { question: "Which transition metal shows maximum oxidation states?", options: ["Scandium", "Iron", "Manganese", "Zinc"], correct: 2 },
        { question: "Valency of element with atomic number 16 is:", options: ["2", "6", "8", "0"], correct: 0 }
    ], 
    difficult: [
        { question: "Correct oxidation sequence of methanol is:", options: ["Methanol → Methanoic acid → Methanal", "Methanol → Methanal → Methanoic acid", "Methanol → Ethanal → Ethanoic acid", "Methanol → Methane → Methanal"], correct: 1 },
        { question: "Ethyl acetate is formed by reaction of:", options: ["Ethanol + Acetic acid", "Methanol + Acetic acid", "Ethanol + Formic acid", "Methanol + Formic acid"], correct: 0 },
        { question: "Reduction using Zn-Hg/conc. HCl is called:", options: ["Cope reduction", "Dow reduction", "Wolff–Kishner reduction", "Clemmensen reduction"], correct: 3 },
        { question: "Maximum work during compression of gas occurs in:", options: ["Isothermal", "Isochoric", "Isobaric", "Adiabatic"], correct: 3 },
        { question: "Sample with greatest number of atoms is:", options: ["1 mole He", "1 mole O₂", "1 mole O₃", "1 mole Na"], correct: 2 },
        { question: "Mass of oxygen required to form CO₂ from 12 g carbon is:", options: ["16 g", "24 g", "32 g", "44 g"], correct: 2 },
        { question: "Major product of propene + HBr in peroxide is:", options: ["2-Bromopropane", "1-Bromopropane", "Propanol", "Dibromopropane"], correct: 1 },
        { question: "Brown ring test confirms presence of:", options: ["Nitrite ion", "Nitrate ion", "Sulphate ion", "Chloride ion"], correct: 1 },
        { question: "Empirical formula of compound containing 40% C, 6.7% H and 53.3% O is:", options: ["CH₂O", "C₂H₄O₂", "CH₄O", "C₆H₁₂O₆"], correct: 0 },
        { question: "Number of moles in 44 g of CO₂ is:", options: ["0.5 mol", "1 mol", "2 mol", "4 mol"], correct: 1 },
        { question: "Incorrect statement about isotopes is:", options: ["Same atomic number", "Different mass number", "Same number of neutrons", "Same chemical properties"], correct: 2 },
        { question: "Law explaining quantitative relationship between reactants and products is:", options: ["Multiple proportions", "Reciprocal proportions", "Conservation of mass", "Constant proportions"], correct: 2 },
        { question: "Chemical formula of washing soda is:", options: ["NaHCO₃", "Na₂CO₃", "Na₂CO₃·10H₂O", "CaCO₃"], correct: 2 },
        { question: "Molarity of solution containing 9.8 g H₂SO₄ in 500 mL is:", options: ["0.1 M", "0.2 M", "0.4 M", "0.5 M"], correct: 1 },
        { question: "Isotopes of an element have same:", options: ["Mass number", "Number of neutrons", "Atomic number", "Atomic mass"], correct: 2 }
    ] 
};
const tgtPhysicsDatabase = { 
    easy: [
        { question: "The commercial unit of electrical energy is:", options: ["Joule", "Watt", "Kilowatt", "Kilowatt-hour"], correct: 3 },
        { question: "Which device is used to measure electric current?", options: ["Voltmeter", "Ammeter", "Galvanometer", "Ohmmeter"], correct: 1 },
        { question: "The process of splitting white light into its constituent colours is called:", options: ["Reflection", "Refraction", "Dispersion", "Diffraction"], correct: 2 },
        { question: "Which lens is used to correct myopia (short-sightedness)?", options: ["Convex lens", "Concave lens", "Cylindrical lens", "Bifocal lens"], correct: 1 },
        { question: "The image formed by a plane mirror is:", options: ["Real and inverted", "Virtual and erect", "Real and erect", "Virtual and inverted"], correct: 1 },
        { question: "The direction of magnetic field around a straight current-carrying conductor is given by:", options: ["Fleming’s left hand rule", "Fleming’s right hand rule", "Right-hand thumb rule", "Maxwell’s rule"], correct: 2 },
        { question: "The magnetic field inside a long straight solenoid is:", options: ["Zero", "Very weak", "Uniform", "Circular"], correct: 2 },
        { question: "The ratio of velocities of two particles whose displacement-time graphs make angles 30° and 60° with time axis is:", options: ["1:2", "1:√3", "√3:1", "1:3"], correct: 3 },
        { question: "In circular motion:", options: ["Direction of motion is fixed", "Direction of motion changes continuously", "Acceleration is zero", "Velocity is constant"], correct: 1 },
        { question: "External forces are:", options: ["Always balanced", "Never balanced", "May or may not be balanced", "None of these"], correct: 2 }
    ], 
    moderate: [
        { question: "Two resistors of resistance 2 Ω and 4 Ω connected in parallel have equivalent resistance:", options: ["6 Ω", "3 Ω", "1.33 Ω", "2 Ω"], correct: 2 },
        { question: "A ray of light entering from air into glass bends:", options: ["Away from the normal", "Towards the normal", "Along the normal", "Parallel to surface"], correct: 1 },
        { question: "Which combination has the highest magnetic field strength?", options: ["Single loop of wire", "Straight conductor", "Circular coil with more turns", "Thin conductor"], correct: 2 },
        { question: "The focal length of a concave lens is:", options: ["Positive", "Negative", "Zero", "Infinite"], correct: 1 },
        { question: "Electric power of a device depends on:", options: ["Only current", "Only voltage", "Voltage and current", "Resistance only"], correct: 2 },
        { question: "Which statement is correct for an image formed by a convex mirror?", options: ["Always real", "Always inverted", "Always virtual and erect", "Sometimes real"], correct: 2 },
        { question: "How much force acts on a body whose momentum is constant?", options: ["Zero", "p/2t", "2p/t", "None"], correct: 0 },
        { question: "One kilowatt is approximately equal to:", options: ["1.30 hp", "1.56 hp", "2.50 hp", "1.83 hp"], correct: 0 },
        { question: "If Earth's diameter doubles and mass remains same, weight of an object becomes:", options: ["One-third", "One-fourth", "One-fifth", "One-sixth"], correct: 1 },
        { question: "In longitudinal waves, particles vibrate:", options: ["In direction of wave propagation", "Opposite to propagation", "At right angles", "None"], correct: 0 },
        { question: "The force required to hold a gun firing bullets continuously is:", options: ["24 N", "28 N", "32 N", "10 N"], correct: 0 },
        { question: "If m1/m2 = 3 and KE1/KE2 = 1/3, the ratio of velocities is:", options: ["1:1", "1:2", "1:3", "2:3"], correct: 2 },
        { question: "Orbital velocity of earth satellite does not depend on:", options: ["Mass of earth", "Mass of satellite", "Radius of earth", "Acceleration due to gravity"], correct: 1 },
        { question: "For maximum work, angle between force and displacement should be:", options: ["0°", "30°", "60°", "90°"], correct: 0 },
        { question: "In longitudinal waves, the quantity that does not change is:", options: ["Pressure", "Mass", "Density", "Volume"], correct: 1 }
    ], 
    difficult: [
        { question: "Bulbs glow brighter when connected in parallel because:", options: ["Current is more", "Voltage across each bulb is full", "Resistance is less", "Resistance is more"], correct: 1 },
        { question: "If a person moves 2 m towards a plane mirror, distance between person and image becomes:", options: ["4 m", "2 m", "1 m", "Zero"], correct: 1 },
        { question: "A fuse wire has high resistance and low melting point to:", options: ["Increase current", "Decrease voltage", "Melt quickly on excess current", "Store heat"], correct: 2 },
        { question: "If current through a conductor is doubled, magnetic field becomes:", options: ["Half", "Double", "Four times", "Zero"], correct: 1 },
        { question: "A ray passing through centre of curvature of a concave mirror will:", options: ["Retrace its path", "Pass parallel", "Pass through focus", "Reflect at right angle"], correct: 0 },
        { question: "AC is preferred over DC for transmission because:", options: ["Cheaper", "Easily transformed to high voltage", "No heating", "DC cannot flow"], correct: 1 },
        { question: "Colour blindness occurs due to defect in:", options: ["Rod cells", "Cone cells", "Cornea", "Optic nerve"], correct: 1 },
        { question: "If two bodies cover equal distances in 5th second, ratio of accelerations is:", options: ["5:9", "5:7", "9:5", "9:7"], correct: 0 },
        { question: "Position of a freely falling body at T/3 seconds is:", options: ["h/9", "7h/9", "8h/9", "17h/18"], correct: 2 },
        { question: "Values of u and a for given motion are:", options: ["10,5", "10,10", "5,5", "5,10"], correct: 3 },
        { question: "Greatest height attained by the stone is:", options: ["h/3", "2h/3", "5h/4", "5h/3"], correct: 3 },
        { question: "Acceleration of car firing bullets is:", options: ["0.025", "0.25", "0.50", "500"], correct: 0 },
        { question: "Time taken to receive sonar echo is:", options: ["15.30 s", "14.47 s", "12.20 s", "11.13 s"], correct: 1 },
        { question: "Frequency heard by observer due to Doppler effect is:", options: ["580 Hz", "620 Hz", "600 Hz", "None"], correct: 1 },
        { question: "Buoyant force acting on an object is equal to:", options: ["Mass of solid", "Weight of solid", "Mass of liquid displaced", "Weight of liquid displaced"], correct: 3 }
    ] 
};
const prtComputerDatabase = { 
    easy: [
        { question: "The primary role of a teacher is to:", options: ["Give homework", "Facilitate learning", "Conduct exams", "Maintain silence"], correct: 1 },
        { question: "Child-centered learning means:", options: ["Teacher talks most of the time", "Focus on syllabus only", "Learning based on child’s needs", "Strict discipline"], correct: 2 },
        { question: "A good teacher should be:", options: ["Very strict", "Always friendly", "Patient and understanding", "Punitive"], correct: 2 },
        { question: "Learning is most effective when:", options: ["Students memorize", "Students participate actively", "Teacher lectures", "Exams are frequent"], correct: 1 },
        { question: "Positive feedback helps students to:", options: ["Feel discouraged", "Improve confidence", "Fear mistakes", "Avoid learning"], correct: 1 },
        { question: "A computer is an ______ machine.", options: ["Electric", "Electronic", "Mechanical", "Manual"], correct: 1 },
        { question: "Which part of the computer shows output?", options: ["CPU", "Mouse", "Monitor", "Keyboard"], correct: 2 },
        { question: "Which device is used to type letters?", options: ["Mouse", "Keyboard", "Printer", "Scanner"], correct: 1 },
        { question: "Which of the following is a storage device?", options: ["Monitor", "CPU", "Hard Disk", "Mouse"], correct: 2 },
        { question: "Computer works on the principle of:", options: ["Guessing", "Thinking", "Instructions", "Emotions"], correct: 2 },
        { question: "Which key is used to erase letters?", options: ["Enter", "Spacebar", "Backspace", "Shift"], correct: 2 },
        { question: "Which of these is NOT a computer?", options: ["Laptop", "Desktop", "Tablet", "Television"], correct: 3 },
        { question: "The brain of the computer is:", options: ["Monitor", "CPU", "Keyboard", "Mouse"], correct: 1 }
    ], 
    moderate: [
        { question: "Which device prints on paper?", options: ["Monitor", "Speaker", "Printer", "Scanner"], correct: 2 },
        { question: "Computer can store:", options: ["Only numbers", "Only text", "Data and information", "Only pictures"], correct: 2 },
        { question: "In a word processor, which shortcut is typically used to 'Paste' copied text?", options: ["Ctrl + P", "Ctrl + C", "Ctrl + V", "Ctrl + X"], correct: 2 },
        { question: "Good classroom management helps in:", options: ["Creating fear", "Smooth learning", "More punishment", "Less teaching"], correct: 1 },
        { question: "Classroom rules should be:", options: ["Confusing", "Clear and simple", "Very strict", "Ignored"], correct: 1 },
        { question: "Praising students is an example of:", options: ["Punishment", "Discipline", "Positive reinforcement", "Warning"], correct: 2 },
        { question: "To handle noisy students, a teacher should:", options: ["Shout", "Ignore", "Use calm strategies", "Punish immediately"], correct: 2 },
        { question: "Discipline should be maintained through:", options: ["Fear", "Beating", "Mutual respect", "Threats"], correct: 2 },
        { question: "Which of the following is an input device?", options: ["Printer", "Monitor", "Keyboard", "Speaker"], correct: 2 },
        { question: "Mouse is used to:", options: ["Type text", "Draw pictures", "Point and click", "Print files"], correct: 2 },
        { question: "Which key is used to move to the next line?", options: ["Shift", "Enter", "Spacebar", "Caps Lock"], correct: 1 },
        { question: "CPU stands for:", options: ["Central Power Unit", "Control Program Unit", "Central Processing Unit", "Computer Power Unit"], correct: 2 },
        { question: "Which software is used for drawing?", options: ["MS Word", "MS Paint", "MS Excel", "Notepad"], correct: 1 },
        { question: "Which of these is a correct file extension of MS Word?", options: [".jpg", ".ppt", ".docx", ".mp3"], correct: 2 },
        { question: "Which part stores data permanently?", options: ["RAM", "CPU", "Hard Disk", "Monitor"], correct: 2 }
    ], 
    difficult: [
        { question: "Which key makes letters CAPITAL?", options: ["Enter", "Caps Lock", "Shift", "Tab"], correct: 1 },
        { question: "Which device helps us listen to sound?", options: ["Printer", "Speaker", "Scanner", "Monitor"], correct: 1 },
        { question: "Which one is a smart machine?", options: ["Fan", "Computer", "Table", "Book"], correct: 1 },
        { question: "Internet is used to:", options: ["Play outdoor games", "Connect computers", "Paint walls", "Cook food"], correct: 1 },
        { question: "Which of the following is a correct example of data?", options: ["Music", "Numbers", "Text", "All of these"], correct: 3 },
        { question: "Which key is used to give space between words?", options: ["Shift", "Enter", "Spacebar", "Backspace"], correct: 2 },
        { question: "Which device takes pictures into the computer?", options: ["Printer", "Scanner", "Camera", "Mouse"], correct: 2 },
        { question: "Which software is used to type letters?", options: ["MS Paint", "MS Word", "Calculator", "Browser"], correct: 1 },
        { question: "Which of these is an output device?", options: ["Mouse", "Keyboard", "Monitor", "CPU"], correct: 2 },
        { question: "Computer does not get tired means it has:", options: ["Accuracy", "Speed", "Diligence", "Intelligence"], correct: 2 },
        { question: "Which button is used to turn ON computer?", options: ["Reset", "Power", "Start", "Enter"], correct: 1 },
        { question: "Which part is called the brain of computer?", options: ["Monitor", "Keyboard", "CPU", "Mouse"], correct: 2 },
        { question: "Which of these is a common web browser?", options: ["Google Search", "Microsoft Edge", "Windows 11", "Adobe Acrobat"], correct: 1 },
        { question: "What is the main purpose of an Operating System?", options: ["To create spreadsheets", "To manage hardware and software resources", "To protect the computer from dust", "To browse the internet only"], correct: 1 },
        { question: "Which of the following is used to save work?", options: ["Ctrl + C", "Ctrl + V", "Ctrl + S", "Ctrl + Z"], correct: 2 }
    ] 
};
const tgtComputerDatabase = { 
    easy: [
        { question: "What is known as the 'Brain' of the computer?", options: ["Monitor", "Keyboard", "CPU", "Printer"], correct: 2 },         
	    { question: "Which of these is an input device?", options: ["Speaker", "Scanner", "Plotter", "Projector"], correct: 1 }, 
        { question: "What does 'WWW' stand for?", options: ["World Whole Web", "Wide World Web", "World Wide Web", "Web World Wide"], correct: 2 }, 
        { question: "1 Kilobyte (KB) is equal to:", options: ["1000 Bytes", "1024 Bytes", "100 Bytes", "1024 Bits"], correct: 1 }, 
        { question: "Which key is used to start a new paragraph in MS Word?", options: ["Shift", "Alt", "Enter", "Control"], correct: 2 },         	
        { question: "A collection of eight bits is called a:", options: ["Nibble", "Word", "Byte", "Record"], correct: 2 }, 
        { question: "Which of the following is an Operating System?", options: ["MS Office", "Windows", "Google Chrome", "Adobe Reader"], correct: 1 }, 
        { question: "What is the physical part of a computer called?", options: ["Software", "Malware", "Hardware", "Firmware"], correct: 2 },
        { question: "Which of the following is an example of an input device?", options: ["Monitor", "Printer", "Scanner", "Speaker"], correct: 2 },
        { question: "A website's main page is called its:", options: ["First Page", "Home Page", "Index Page", "Bookmark"], correct: 1 }
    ], 
    moderate: [
        { question: "Which memory is non-volatile and cannot be easily altered?", options: ["RAM", "Cache", "ROM", "Virtual Memory"], correct: 2 }, 
        { question: "What is the shortcut key to 'Undo' the last action?", options: ["Ctrl + Y", "Ctrl + X", "Ctrl + Z", "Ctrl + U"], correct: 2 }, 
        { question: "In a spreadsheet, what is the intersection of a row and a column called?", options: ["Block", "Box", "Cell", "Range"], correct: 2 }, 
        { question: "Which protocol is used for sending emails?", options: ["HTTP", "FTP", "SMTP", "IP"], correct: 2 }, 
        { question: "Which of these is a temporary storage area used by the CPU?", options: ["Hard Disk", "RAM", "DVD", "Flash Drive"], correct: 1 }, 
        { question: "What is the extension of a PowerPoint presentation file?", options: [".docx", ".xlsx", ".pptx", ".pdf"], correct: 2 }, 
        { question: "Which type of network covers a small area like a room or a building?", options: ["WAN", "MAN", "LAN", "PAN"], correct: 2 }, 
        { question: "A 'Bug' in computer terminology refers to:", options: ["A virus", "A hardware failure", "An error in a program", "Magnetic interference"], correct: 2 }, 
        { question: "Which unit performs mathematical calculations in the CPU?", options: ["Control Unit", "Register Unit", "ALU", "Bus Unit"], correct: 2 }, 
        { question: "Which of the following is a search engine?", options: ["Safari", "Internet Explorer", "DuckDuckGo", "Opera"], correct: 2 }, 
        { question: "The process of starting or restarting a computer is called:", options: ["Loading", "Booting", "Formatting", "Execution"], correct: 1 }, 
        { question: "Which language does the computer understand directly?", options: ["High-Level Language", "Machine Language", "Assembly Language", "C++"], correct: 1 }, 
        { question: "What is the full form of URL?", options: ["Uniform Resource Locator", "Universal Resource Link", "Unique Radio Locator", "United Resource Locator"], correct: 0 }, 
        { question: "Which alignment is used to spread text evenly between both margins?", options: ["Left", "Center", "Right", "Justify"], correct: 3 }, 
        { question: "What is the name of the bar usually located at the bottom of the Windows desktop?", options: ["Status Bar", "Scroll Bar", "Taskbar", "Menu Bar"], correct: 2 }
    ], 
    difficult: [
        { question: "What is the process of converting plain text into unreadable code called?", options: ["Decryption", "Encryption", "Coding", "Compression"], correct: 1 }, 
        { question: "Which layer of the OSI model is responsible for routing data packets?", options: ["Physical Layer", "Transport Layer", "Network Layer", "Data Link Layer"], correct: 2 }, 
        { question: "In HTML, which tag is used to create a hyperlink?", options: ["<link>", "<a>", "<href>", "<url>"], correct: 1 }, 
        { question: "Which of the following is an example of an 'Interpreter' language?", options: ["C++", "Python", "COBOL", "Java (Original)"], correct: 1 }, 
        { question: "What is 'Phishing' in cyber security?", options: ["Installing a virus", "Stealing data via fake emails", "Cracking a password", "Using a neighbor's Wi-Fi"], correct: 1 }, 
        { question: "Which register holds the address of the next instruction to be executed?", options: ["Accumulator", "Instruction Register", "Program Counter", "Memory Buffer"], correct: 2 }, 
        { question: "What does BIOS stand for?", options: ["Binary Input Output System", "Basic Input Output System", "Basic Internal Output System", "Binary Internal Operating System"], correct: 1 }, 
        { question: "The speed of a modern CPU is typically measured in:", options: ["Megabytes", "Gigahertz (GHz)", "Kilobits", "Nanoseconds"], correct: 1 }, 
        { question: "Which topology connects all nodes to a single central cable?", options: ["Ring", "Star", "Bus", "Mesh"], correct: 2 }, 
        { question: "Which of these is a 64-bit hexadecimal address used for networking?", options: ["IPv4", "IPv6", "MAC Address", "Subnet Mask"], correct: 1 }, 
        { question: "In Python, what is the output of print(2 ** 3)?", options: ["6", "8", "5", "9"], correct: 1 }, 
        { question: "Which memory acts as a high-speed buffer between the CPU and RAM?", options: ["Virtual Memory", "Cache Memory", "Secondary Memory", "Auxiliary Memory"], correct: 1 }, 
        { question: "A Compiler converts a high-level program into machine code in:", options: ["Line by line fashion", "One single go", "Character by character", "Only when requested"], correct: 1 }, 
        { question: "What is the binary equivalent of the decimal number 10?", options: ["1001", "1100", "1010", "1111"], correct: 2 }, 
        { question: "Which protocol is used for secure communication over a computer network?", options: ["HTTP", "HTTPS", "FTP", "Telnet"], correct: 1 }
    ] 
};
const tgtSocialScienceDatabase = { 
    easy: [
        { question: "---------- were constructed for monks to reside in.", options: ["Temples", "Caves", "Stupas", "Pagodas"], correct: 2 },
        { question: "Surat is located on the banks of river ----------", options: ["Ganga", "Yamuna", "Tapi", "Godavari"], correct: 2 },
        { question: "Which one of the following is not an example of a fresh waterbody?", options: ["Oceans", "Snow", "Rivers", "Glaciers"], correct: 0 },
        { question: "Which scheme was launched to encourage attendance and improve nutritional status of children?", options: ["Samagra Shiksha", "Mid-day Meal Scheme", "Beti Bachao Beti Padhao", "Skill India Mission"], correct: 1 },
        { question: "The National Anthem of France is written by", options: ["Vande Mataram", "Roget de L Isle", "Le Moniteur Universal", "Marseilles"], correct: 1 },
        { question: "Area sown more than once in an agricultural year plus net sown area is known as:", options: ["Net sown area", "Forest cover", "Waste land", "Gross cropped area"], correct: 3 },
        { question: "Direct rays of the Sun fall on the equator on ----------", options: ["21 March", "21 June", "21 May", "21 December"], correct: 0 },
        { question: "The major constituent of the atmosphere in terms of percentage is", options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Argon"], correct: 0 },
        { question: "Granite is an example of which type of rock?", options: ["Intrusive igneous", "Metamorphic", "Sedimentary", "Extrusive igneous"], correct: 0 },
        { question: "Which of the fundamental rights is called ‘the heart and the soul of the Indian Constitution’?", options: ["Right to Equality", "Right to Freedom of Religion", "Right to Constitutional Remedies", "Cultural and Educational Rights"], correct: 2 }
    ], 
    moderate: [
        { question: "The weather satellites that orbit the earth are positioned in which layer?", options: ["Exosphere", "Stratosphere", "Mesosphere", "Thermosphere"], correct: 3 },
        { question: "The Doctrine of Lapse was conceived by ----------", options: ["Lord Cornwallis", "Warren Hastings", "Lord Wellesley", "Lord Dalhousie"], correct: 3 },
        { question: "---------- empowers the Supreme Court to issue orders or writs to enforce the fundamental rights.", options: ["Right to Freedom", "Right Against Exploitation", "Right to Equality", "Right to Constitutional Remedies"], correct: 3 },
        { question: "A system of ‘checks and balances’ refers to which power-sharing arrangement?", options: ["Social groups", "Vertical division", "Horizontal division", "Political parties"], correct: 2 },
        { question: "-------- founded the Chalukya dynasty.", options: ["Pulakesin I", "Vishnuvardhan", "Pulakesin II", "Kirtivarman"], correct: 0 },
        { question: "The temple for Lord Jagannath at Puri was built by ----------", options: ["Anangabhima III", "Raja Sansar Chand", "Anantavarman", "Raja Man Singh Tomar"], correct: 2 },
        { question: "The Hindu Widow Remarriage Act was passed in ----------", options: ["1826", "1836", "1846", "1856"], correct: 3 },
        { question: "Choose the incorrect pair.", options: ["Jhum – Northeast India", "Roca – Brazil", "Milpa – Canada", "Ladang – Malaysia"], correct: 2 },
        { question: "The ---------- granted permission to Christian missionaries to come to India.", options: ["Charter Act of 1813", "Charter Act of 1833", "Wood’s Dispatch", "Macaulay’s Minutes"], correct: 0 },
        { question: "Which Article of the Indian Constitution abolishes untouchability?", options: ["Article 21", "Article 51", "Article 17", "Article 16"], correct: 2 },
        { question: "The main cause of land degradation in Punjab, Haryana and Western Uttar Pradesh is:", options: ["Mining", "Over irrigation", "Deforestation", "Over grazing"], correct: 1 },
        { question: "Who set up the ‘Oudh Kisan Sabha’?", options: ["Alluri Sitaram Raju", "Jawaharlal Nehru and Baba Ramchandra", "Mahatma Gandhi", "Jawaharlal Nehru and Shaukat Ali"], correct: 1 },
        { question: "Which among the following are examples of ‘Coming together federations’?", options: ["India, Spain and Belgium", "India, USA and Spain", "USA, Switzerland and Australia", "Belgium and Sri Lanka"], correct: 2 },
        { question: "Tsarina Alexandra was of the ----------", options: ["German Origin", "French Origin", "Russian Origin", "Dutch Origin"], correct: 0 },
        { question: "The highest peak in the Eastern Ghats is:", options: ["Anai Mudi", "Kanchenjunga", "Mahendragiri", "Khasi"], correct: 2 }
    ], 
    difficult: [
        { question: "The longitudinal valleys lying between the lesser Himalayas and Shivaliks are known as:", options: ["Kangra Valley", "Patkai Bum", "Passes", "Duns"], correct: 3 },
        { question: "Which physiographic division of India was formed from accumulations in the Tethys geosyncline?", options: ["The Himalayas", "Northern Plains", "Peninsular Plateau", "Indian Desert"], correct: 0 },
        { question: "Which authority supervises the functioning of formal sources of loans?", options: ["Finance Ministry", "Head Office of each Bank", "Reserve Bank of India", "Cooperative Societies"], correct: 2 },
        { question: "Which of the following does not fall under the unorganized sector?", options: ["A farmer irrigating his field", "A daily wage labourer", "A doctor in a hospital", "A handloom weaver"], correct: 2 },
        { question: "The principle ensuring humane working conditions provides ---------- justice.", options: ["Socio-economic", "Cultural", "Political", "Religious"], correct: 0 },
        { question: "The Khonds living in the forests of ---------- were hunters and gatherers.", options: ["Gujarat", "Maharashtra", "Odisha", "Chhotanagapur"], correct: 2 },
        { question: "Growing crops along the contours of a hill slope is known as:", options: ["Contour barrier", "Rock dam", "Intercropping", "Contour farming"], correct: 3 },
        { question: "Shelter belts are defined as:", options: ["Planting trees on bare land", "Planting rows of trees to check wind", "Crop rotation", "None of the above"], correct: 1 },
        { question: "Which instrument is used to measure humidity?", options: ["Anemometer", "Rain gauge", "Hygrometer", "Barometer"], correct: 2 },
        { question: "An oxbow lake is formed due to:", options: ["Levee", "Meanders", "Cut-off river loop", "Bay"], correct: 2 },
        { question: "Nalanda University is believed to have been founded by:", options: ["Chandragupta", "Samudragupta", "Kumargupta", "Harsha"], correct: 2 },
        { question: "The first country to grant women the right to vote was:", options: ["India", "New Zealand", "Australia", "Canada"], correct: 1 },
        { question: "The smallest planet in our solar system with no moon is:", options: ["Mercury", "Mars", "Jupiter", "Neptune"], correct: 0 },
        { question: "Forests with wet and dry seasons where trees shed leaves are:", options: ["Temperate deciduous", "Tropical deciduous", "Equatorial", "None"], correct: 1 },
        { question: "Mixed farming refers to:", options: ["Single crop farming", "Shifting cultivation", "Crop farming with animal husbandry", "Grape cultivation"], correct: 2 }
    ] 
};
const prtMarathiDatabase = { 
    easy: [
        { question: "खालीलपैकी नाम कोणते?", options: ["धावणे", "सुंदर", "पुस्तक", "पटकन"], correct: 2 },
        { question: "“तो रोज शाळेत जातो.” या वाक्यातील काळ कोणता?", options: ["भूतकाळ", "वर्तमानकाळ", "भविष्यकाळ", "पूर्णकाळ"], correct: 1 },
        { question: "“चंद्रासारखा चेहरा” या वाक्यातील अलंकार कोणता?", options: ["अनुप्रास", "उपमा", "रूपक", "यमक"], correct: 1 },
        { question: "“राजपुत्र” हा कोणता समास आहे?", options: ["द्वंद्व", "तत्पुरुष", "बहुव्रीही", "अव्ययीभाव"], correct: 1 },
        { question: "“मुलाने आंबा खाल्ला.” हा कोणता प्रयोग आहे?", options: ["कर्तरी", "कर्मणी", "भावे", "हेतुक"], correct: 0 },
        { question: "“तू अभ्यास कर.” हे कोणत्या प्रकारचे वाक्य आहे?", options: ["विधानार्थी", "प्रश्नार्थी", "आज्ञार्थी", "उद्गारार्थी"], correct: 2 },
        { question: "“वा! किती छान!” हे कोणते वाक्य आहे?", options: ["प्रश्नार्थी", "विधानार्थी", "आज्ञार्थी", "उद्गारार्थी"], correct: 3 },
        { question: "“राम शाळेत जातो.” या वाक्याचे नकारार्थी रूप कोणते?", options: ["राम शाळेत गेला नाही", "राम शाळेत जात नाही", "राम शाळेत जाईल", "राम शाळेत जात होता"], correct: 1 },
        { question: "“ती पुस्तक वाचते.” या वाक्याचे भूतकाळात रूपांतर कोणते?", options: ["ती पुस्तक वाचेल", "ती पुस्तक वाचत आहे", "ती पुस्तक वाचली", "ती पुस्तक वाचतेच"], correct: 2 },
        { question: "“खूप” हा शब्द कोणत्या जातीत मोडतो?", options: ["नाम", "विशेषण", "क्रियाविशेषण", "अव्यय"], correct: 2 }
    ], 
    moderate: [
        { question: "“आईने मुलाला दूध दिले.” या वाक्यातील कर्म कोणते?", options: ["आईने", "मुलाला", "दूध", "दिले"], correct: 2 },
        { question: "“नदीकाठ” हा कोणता समास आहे?", options: ["द्वंद्व", "तत्पुरुष", "बहुव्रीही", "अव्ययीभाव"], correct: 1 },
        { question: "“मुलगी गाणे गाते.” या वाक्याचे कर्मणी प्रयोगात रूपांतर कोणते?", options: ["मुलगी गाणे गात आहे", "गाणे मुलीने गायले जाते", "मुलीने गाणे गाते", "गाणे मुलगी गाते"], correct: 1 },
        { question: "“तो हुशार आहे.” हे कोणत्या प्रकारचे वाक्य आहे?", options: ["प्रश्नार्थी", "विधानार्थी", "उद्गारार्थी", "आज्ञार्थी"], correct: 1 },
        { question: "“मी उद्या येईन.” या वाक्यातील काळ कोणता?", options: ["भूतकाळ", "वर्तमानकाळ", "भविष्यकाळ", "अपूर्णकाळ"], correct: 2 },
        { question: "बालसाहित्याचा मुख्य उद्देश कोणता आहे?", options: ["करमणूक व संस्कार", "कठीण भाषा वापरणे", "तत्त्वज्ञान मांडणे", "इतिहास सांगणे"], correct: 0 },
        { question: "“श्यामची आई” ही रचना कोणत्या प्रकारात मोडते?", options: ["कादंबरी", "आत्मचरित्र", "कथा", "कविता"], correct: 1 },
        { question: "संत तुकाराम कोणत्या साहित्यप्रकारासाठी प्रसिद्ध आहेत?", options: ["ओवी", "अभंग", "पोवाडा", "भारूड"], correct: 1 },
        { question: "लोकसाहित्याचा प्रकार कोणता आहे?", options: ["निबंध", "कादंबरी", "पोवाडा", "समीक्षा"], correct: 2 },
        { question: "कथेमधील मुख्य घटक कोणता आहे?", options: ["छंद", "कथानक", "यमक", "अलंकार"], correct: 1 },
        { question: "नाटकातील संवादांचा उपयोग कशासाठी होतो?", options: ["वर्णनासाठी", "व्यक्तिरेखा उलगडण्यासाठी", "माहिती पाठ करण्यासाठी", "इतिहास सांगण्यासाठी"], correct: 1 },
        { question: "मराठीतील आद्य कवी कोण मानले जातात?", options: ["नामदेव", "तुकाराम", "ज्ञानेश्वर", "एकनाथ"], correct: 2 },
        { question: "बालकवितेचे वैशिष्ट्य कोणते?", options: ["क्लिष्ट भाषा", "सोपी व लयबद्ध भाषा", "गंभीर विषय", "दीर्घ वर्णन"], correct: 1 },
        { question: "“फुलपाखरू” ही रचना कोणत्या प्रकारात मोडते?", options: ["कथा", "निबंध", "कविता", "नाटक"], correct: 2 },
        { question: "निबंधाचा मुख्य हेतू कोणता?", options: ["गोष्ट सांगणे", "विचार मांडणे", "अभिनय करणे", "गाणे सादर करणे"], correct: 1 }
    ], 
    difficult: [
        { question: "कथेमधील प्रमुख पात्राला काय म्हणतात?", options: ["निवेदक", "लेखक", "नायक", "वाचक"], correct: 2 },
        { question: "भारूड हा कोणत्या साहित्यप्रकाराशी संबंधित आहे?", options: ["आधुनिक साहित्य", "लोकसाहित्य", "वैज्ञानिक साहित्य", "ललित साहित्य"], correct: 1 },
        { question: "काव्यातील भाव म्हणजे काय?", options: ["शब्दरचना", "आशयातील भावना", "छंद", "अलंकार"], correct: 1 },
        { question: "बालसाहित्य लेखन करताना सर्वात महत्त्वाचा घटक कोणता?", options: ["अवघड शब्द", "बालमानसाची समज", "दीर्घ वर्णन", "तत्त्वज्ञान"], correct: 1 },
        { question: "कविता आणि गद्य यातील मुख्य फरक कोणता?", options: ["विषय", "भाषा", "छंद व लय", "लेखक"], correct: 2 },
        { question: "पुस्तक : वाचन :: लेखणी : ?", options: ["शाई", "लिहिणे", "कागद", "अक्षर"], correct: 1 },
        { question: "जल : पाणी :: अग्नी : ?", options: ["धूर", "उष्णता", "आग", "प्रकाश"], correct: 2 },
        { question: "योग्य क्रम ओळखा :", options: ["अक्षर – शब्द – वाक्य", "वाक्य – शब्द – अक्षर", "शब्द – अक्षर – वाक्य", "अक्षर – वाक्य – शब्द"], correct: 0 },
        { question: "शाळा : शिक्षण :: रुग्णालय : ?", options: ["औषध", "डॉक्टर", "उपचार", "आजार"], correct: 2 },
        { question: "समानार्थी शब्दांची जोडी कोणती?", options: ["सूर्य – चंद्र", "जल – पाणी", "दिवस – रात्र", "मोठा – लहान"], correct: 1 },
        { question: "“आई” या शब्दाचा भाववाचक शब्द कोणता?", options: ["माया", "प्रेम", "मातृत्व", "कर्तव्य"], correct: 2 },
        { question: "“अंधार” याचा विरुद्धार्थी शब्द कोणता?", options: ["काळोख", "प्रकाश", "रात्र", "सावली"], correct: 1 },
        { question: "गाय, म्हैस, शेळी, सिंह – वेगळा घटक कोणता?", options: ["गाय", "म्हैस", "शेळी", "सिंह"], correct: 3 },
        { question: "अक्षरमाला : भाषा :: अंक : ?", options: ["गणित", "संख्या", "हिशोब", "बेरीज"], correct: 0 },
        { question: "“मोठा : लहान :: जड : ?”", options: ["कठीण", "हलका", "उंच", "रुंद"], correct: 1 }
    ] 
};
const tgtMarathiDatabase = { 
    easy: [
        { question: "खालीलपैकी सर्वनाम नसलेला शब्द कोणता?", options: ["जो", "जो कोणी", "आपण", "विद्यार्थी"], correct: 3 },
        { question: "खालीलपैकी क्रियाविशेषण नाही असा शब्द कोणता?", options: ["हळू", "फार", "उद्या", "सुंदर"], correct: 3 },
        { question: "“राम शहाणा आहे.” या वाक्याचे नकारार्थी रूप कोणते?", options: ["राम शहाणा नाही.", "राम शहाणा नव्हता.", "राम शहाणा नसतो.", "राम शहाणा नसेल."], correct: 0 },
        { question: "‘विशाखा’ काव्यसंग्रह कोणत्या कवीचा आहे?", options: ["विंदा करंदीकर", "कुसुमाग्रज", "मर्ढेकर", "बा. भ. बोरकर"], correct: 1 },
        { question: "समानार्थी शब्दांची योग्य जोडी कोणती?", options: ["धैर्य – भीती", "क्रोध – राग", "दिवस – रात्र", "सत्य – असत्य"], correct: 1 },
        { question: "खालीलपैकी भाववाचक नाम कोणते?", options: ["धावणे", "सौंदर्य", "मुलगा", "लाल"], correct: 1 },
        { question: "‘लोकसाहित्य’ या संकल्पनेचा केंद्रबिंदू कोणता आहे?", options: ["व्यक्ती", "समाज", "राजा", "लेखक"], correct: 1 },
        { question: "भाषा : संवाद :: गणित : ?", options: ["संख्या", "मोजमाप", "तर्क", "सूत्र"], correct: 2 },
        { question: "मोठा : लहान :: प्राचीन : ?", options: ["जुना", "आधुनिक", "ऐतिहासिक", "पुरातन"], correct: 1 },
        { question: "‘ज्ञानेश्वरी’ या ग्रंथाची भाषाशैली कोणती आहे?", options: ["संस्कृतप्रधान", "प्राकृतप्रधान", "लोकभाषा प्रधान", "फारसीप्रधान"], correct: 2 }
    ], 
    moderate: [
        { question: "“तो पुस्तक वाचून गेला.” या वाक्यातील काळ कोणता आहे?", options: ["भूतकाळ", "पूर्णभूतकाळ", "अपूर्णभूतकाळ", "भविष्यकाळ"], correct: 1 },
        { question: "“डोळे तारे चमकले” या वाक्यातील अलंकार ओळखा.", options: ["उपमा", "रूपक", "अतिशयोक्ती", "अनुप्रास"], correct: 1 },
        { question: "खालीलपैकी बहुव्रीही समास कोणता?", options: ["राजपुत्र", "नीलकंठ", "देवालय", "ग्रामवासी"], correct: 1 },
        { question: "“विद्यार्थ्यांकडून परीक्षा दिली गेली.” हा कोणता प्रयोग आहे?", options: ["कर्तरी", "कर्मणी", "भावे", "हेतुक"], correct: 1 },
        { question: "“जो अभ्यास करतो, तो यशस्वी होतो.” हे कोणत्या प्रकारचे वाक्य आहे?", options: ["साधे", "संयुक्त", "मिश्र", "उद्गारार्थी"], correct: 2 },
        { question: "“तो म्हणाला की, मी येईन.” हे कोणत्या प्रकारचे वाक्य आहे?", options: ["साधे", "संयुक्त", "मिश्र", "प्रश्नार्थी"], correct: 2 },
        { question: "“शब्दांवर प्रभुत्व मिळवणे” या वाक्यांशातील समास ओळखा.", options: ["द्वंद्व", "तत्पुरुष", "बहुव्रीही", "अव्ययीभाव"], correct: 1 },
        { question: "तो अभ्यास करतो म्हणून यशस्वी होतो – योग्य रूपांतर कोणते?", options: ["अभ्यास केल्यामुळे तो यशस्वी होतो.", "अभ्यास केला तर यशस्वी होतो.", "तो अभ्यास करतो, पण यशस्वी होतो.", "तो अभ्यास करत नाही म्हणून यशस्वी होतो."], correct: 0 },
        { question: "संत तुकारामांच्या अभंगांचे मुख्य वैशिष्ट्य कोणते?", options: ["अलंकारिक भाषा", "भक्ती व सामाजिक भान", "राजकीय आशय", "काल्पनिकता"], correct: 1 },
        { question: "कुसुमाग्रजांच्या कवितेचे मुख्य वैशिष्ट्य कोणते?", options: ["भक्तिरस", "सामाजिक वास्तव", "विनोद", "प्रणय"], correct: 1 },
        { question: "‘नटसम्राट’ नाटकातील प्रमुख संघर्ष कोणता आहे?", options: ["आर्थिक", "कौटुंबिक", "सामाजिक", "राजकीय"], correct: 1 },
        { question: "भारूड या साहित्यप्रकाराचा मुख्य उद्देश कोणता आहे?", options: ["करमणूक", "सामाजिक प्रबोधन", "ऐतिहासिक नोंद", "सौंदर्यनिर्मिती"], correct: 1 },
        { question: "‘अमृतवेल’ काव्यसंग्रहाचे वैशिष्ट्य कोणते?", options: ["भक्ती", "निसर्गचित्रण", "प्रतीकात्मकता", "विनोद"], correct: 2 },
        { question: "ग. दि. माडगूळकरांच्या लेखनातील प्रमुख प्रवृत्ती कोणती?", options: ["शहरी जीवन", "ग्रामीण संवेदना", "वैज्ञानिक दृष्टी", "अस्तित्ववाद"], correct: 1 },
        { question: "साहित्य अकादमी पुरस्काराचा उद्देश कोणता आहे?", options: ["शिक्षणविकास", "साहित्यिक सन्मान", "संशोधन", "क्रीडा प्रोत्साहन"], correct: 1 }
    ], 
    difficult: [
        { question: "“वा! किती अद्भुत दृश्य!” या वाक्याचा विधानार्थी रूप कोणते?", options: ["दृश्य अद्भुत आहे.", "दृश्य किती अद्भुत आहे!", "अद्भुत दृश्य!", "दृश्य अद्भुत होते का?"], correct: 0 },
        { question: "“त्याने काम पूर्ण केले.” या वाक्याचे कर्मणी प्रयोगात रूपांतर कोणते?", options: ["काम त्याने पूर्ण केले.", "काम पूर्ण झाले.", "काम त्याच्याकडून पूर्ण केले गेले.", "काम पूर्ण केले गेले त्याने."], correct: 2 },
        { question: "खालीलपैकी योग्य काळसुसंगती असलेले वाक्य कोणते?", options: ["तो आला आणि बसतो.", "तो आला आणि बसला.", "तो येतो आणि बसला.", "तो येईल आणि बसला."], correct: 1 },
        { question: "“आईने मुलाला दूध पाजले.” या वाक्यातील भावे प्रयोग कोणता?", options: ["मुलाला दूध पाजले.", "दूध पाजले गेले.", "आईने दूध पाजले.", "मुलाला दूध पाजले गेले."], correct: 1 },
        { question: "‘कोसला’ कादंबरीतील नायकाची मानसिकता कशाशी संबंधित आहे?", options: ["सामाजिक अन्याय", "ग्रामीण जीवन", "अस्तित्ववादी संघर्ष", "ऐतिहासिक संघर्ष"], correct: 2 },
        { question: "‘ययाति’ कादंबरीचा मध्यवर्ती विषय कोणता आहे?", options: ["सत्ता", "भोग आणि त्याग", "युद्ध", "राष्ट्रवाद"], correct: 1 },
        { question: "बहिणाबाई चौधरी यांच्या कवितांचे वैशिष्ट्य कोणते?", options: ["शहरी संवेदना", "ग्रामीण जीवन व स्त्रीभाव", "अध्यात्म", "विद्रोह"], correct: 1 },
        { question: "‘स्वामी’ कादंबरीत कोणत्या व्यक्तिमत्त्वाचे चित्रण आहे?", options: ["छत्रपती शिवाजी महाराज", "स्वामी विवेकानंद", "रामदास स्वामी", "पानिपत युद्ध"], correct: 2 },
        { question: "आधुनिक मराठी कवितेचे जनक कोण मानले जातात?", options: ["कुसुमाग्रज", "मर्ढेकर", "विंदा करंदीकर", "बा. भ. बोरकर"], correct: 1 },
        { question: "शब्द : अर्थ :: ध्वनी : ?", options: ["आवाज", "प्रतिध्वनी", "उच्चार", "कान"], correct: 2 },
        { question: "अक्षरमाला : भाषा :: शब्दसंग्रह : ?", options: ["व्याकरण", "शब्दकोश", "वाक्य", "अर्थ"], correct: 1 },
        { question: "“लेखन” हा शब्द ज्या शब्दापासून तयार झाला आहे तो कोणता?", options: ["लेख", "लिहा", "लिपी", "भाषा"], correct: 0 },
        { question: "वाचणे : पुस्तक :: ऐकणे : ?", options: ["गाणे", "आवाज", "शब्द", "कान"], correct: 0 },
        { question: "योग्य शब्दरचना कोणती?", options: ["अतिआनंद", "अतिसुख", "अतिश्रम", "अतिउच्च"], correct: 2 },
        { question: "योग्य क्रम (भाषा-अभ्यास प्रक्रिया) कोणता?", options: ["शब्द → अक्षर → वाक्य", "अक्षर → शब्द → वाक्य", "वाक्य → शब्द → अक्षर", "शब्द → वाक्य → अक्षर"], correct: 1 }
    ] 
};
const prtHindiDatabase = { 
    easy: [
        { question: "निम्न में से कौन-सा स्वर है?", options: ["क", "ग", "अ", "च"], correct: 2 },
        { question: "हिंदी वर्णमाला में स्वरों की संख्या कितनी है?", options: ["10", "13", "20", "33"], correct: 1 },
        { question: "निम्न में से कौन-सा व्यंजन है?", options: ["इ", "उ", "ए", "न"], correct: 3 },
        { question: "‘आ’ किसका उदाहरण है?", options: ["व्यंजन", "स्वर", "मात्रा", "शब्द"], correct: 1 },
        { question: "निम्न में से कौन-सा स्वर नहीं है?", options: ["अ", "ओ", "क", "ई"], correct: 2 },
        { question: "हिंदी वर्णमाला में व्यंजनों की संख्या कितनी है?", options: ["13", "25", "33", "45"], correct: 2 },
        { question: "‘म’ कौन-सा वर्ण है?", options: ["स्वर", "मात्रा", "व्यंजन", "शब्द"], correct: 2 },
        { question: "निम्न में से कौन-सा युग्म सही है?", options: ["अ – व्यंजन", "क – स्वर", "ह – स्वर", "ई – स्वर"], correct: 3 },
        { question: "‘ऋ’ क्या है?", options: ["व्यंजन", "स्वर", "मात्रा", "शब्द"], correct: 1 },
        { question: "शब्द बनाने के लिए स्वर और क्या मिलते हैं?", options: ["मात्रा", "अक्षर", "व्यंजन", "वाक्य"], correct: 2 }
    ], 
    moderate: [
        { question: "उत्पत्ति के आधार पर शब्द कितने प्रकार के हैं?", options: ["चार", "दो", "तीन", "पाँच"], correct: 0 },
        { question: "वाक्य के कितने अंग होते हैं?", options: ["पाँच", "तीन", "चार", "दो"], correct: 3 },
        { question: "कारक के कितने भेद होते हैं?", options: ["आठ", "पाँच", "छह", "सात"], correct: 0 },
        { question: "सर्वनाम के कितने भेद होते हैं?", options: ["सात", "पाँच", "छह", "आठ"], correct: 2 },
        { question: "विराम-चिह्न के कितने प्रकार होते हैं?", options: ["दो", "नौ", "पाँच", "आठ"], correct: 1 },
        { question: "पंजाबी भाषा की लिपि कौन-सी है?", options: ["देवनागरी", "गुरुमुखी", "रोमन", "फारसी"], correct: 1 },
        { question: "पूर्व मध्यकाल को दूसरा नाम क्या है?", options: ["आदिकाल", "भक्तिकाल", "वीरगाथाकाल", "स्वर्णकाल"], correct: 1 },
        { question: "यह भक्तिकाल का प्रमुख महाकाव्य है?", options: ["साकेत", "संदेश रासक", "खुमान रासक", "पृथ्वीराज रासो"], correct: 0 },
        { question: "आदिकाल के प्रथम कवि कौन थे?", options: ["महर्षि वाल्मीकि", "आचार्य द्विवेदी", "भारतेंदु हरिश्चंद्र", "चंदबरदाई"], correct: 0 },
        { question: "हिंदी साहित्य का जनक किसे कहा जाता है?", options: ["भारतेंदु हरिश्चंद्र", "कालिदास", "तुलसीदास", "सुमित्रानंदन पंत"], correct: 0 },
        { question: "राष्ट्रीय कवि कौन थे?", options: ["कबीरदास", "सूर्यकांत त्रिपाठी निराला", "रामधारी सिंह दिनकर", "मैथिलीशरण गुप्त"], correct: 3 },
        { question: "भक्तिकाल को कितने भागों में बाँटा गया है?", options: ["चार", "तीन", "दो", "पाँच"], correct: 2 },
        { question: "सगुण भक्तिधारा को कितने भागों में बाँटा गया है?", options: ["तीन", "दो", "चार", "पाँच"], correct: 0 },
        { question: "यह प्रेममार्गी सूफी कवि थे?", options: ["मीराबाई", "कबीर", "जायसी", "सूरदास"], correct: 2 },
        { question: "हिंदी साहित्य का काल विभाजन कितने भागों में किया गया है?", options: ["चार", "दो", "तीन", "पाँच"], correct: 0 },
        { question: "तुलसीदास जी की कौन-सी रचना है?", options: ["सबद", "बीजक", "साखी", "पार्वती-मंगल"], correct: 3 }
    ], 
    difficult: [
        { question: "तुलसीदास जी की कौन-सी रचना है?", options: ["सबद", "बीजक", "साखी", "पार्वती-मंगल"], correct: 3 },
        { question: "“मैं स्कूल जाता हूँ।” वाक्य में क्रिया है—", options: ["मैं", "स्कूल", "हूँ", "जाता"], correct: 3 },
        { question: "“पक्षी आकाश में उड़ रहे हैं।” क्रिया शब्द कौन-सा है?", options: ["पक्षी", "आकाश", "हैं", "उड़ रहे"], correct: 3 },
        { question: "नीचे दिए गए शब्दों में क्रिया कौन-सी है?", options: ["खुशी", "मित्र", "लिखना", "बगीचा"], correct: 2 },
        { question: "‘मैं’ शब्द किस प्रकार का है?", options: ["संज्ञा", "सर्वनाम", "विशेषण", "क्रिया"], correct: 1 },
        { question: "सही वाक्य कौन-सा है?", options: ["खेल रहा है लड़का", "लड़का खेल रहा है।", "रहा है खेल लड़का", "खेल है लड़का"], correct: 1 },
        { question: "‘हम स्कूल जाते हैं।’ यह वाक्य किस काल में है?", options: ["भूतकाल", "भविष्यकाल", "वर्तमानकाल", "कोई नहीं"], correct: 2 },
        { question: "भाषा का मुख्य उद्देश्य क्या है?", options: ["मनोरंजन करना", "भावों और विचारों की अभिव्यक्ति", "लेखन करना", "पढ़ना"], correct: 1 },
        { question: "भाषा का शुद्ध और सही प्रयोग किसके अंतर्गत आता है?", options: ["साहित्य", "व्याकरण", "कविता", "कहानी"], correct: 1 },
        { question: "व्याकरण हमें क्या सिखाता है?", options: ["चित्र बनाना", "गीत गाना", "भाषा का सही रूप से प्रयोग करना", "खेल खेलना"], correct: 2 },
        { question: "बोली और भाषा में मुख्य अंतर क्या है?", options: ["भाषा का क्षेत्र बड़ा होता है", "भाषा बोली जाती है", "बोली लिखी जाती है", "बोली का कोई रूप नहीं होता"], correct: 0 },
        { question: "अंग्रेजी भाषा से हिंदी में आया आगत स्वर कौन-सा है?", options: ["ई", "अं", "अः", "ऑ"], correct: 3 },
        { question: "अतिरिक्त व्यंजन कौन-से हैं?", options: ["ड़ और ढ़", "प और म", "क और ख", "स और ग"], correct: 0 },
        { question: "आगत व्यंजन कौन-से हैं?", options: ["ज़ और फ़", "स और ग", "प और म", "क और ख"], correct: 0 },
        { question: "‘र’ कितने प्रकारों में लिखा जाता है?", options: ["चार", "तीन", "दो", "पाँच"], correct: 0 }
    ] 
};
const tgtHindiDatabase = { 
    easy: [
        { question: "रचना या बनावट की दृष्टि से कौन वाक्य का भेद नहीं है?", options: ["सरल वाक्य", "मिश्र वाक्य", "समूह वाक्य", "संयुक्त वाक्य"], correct: 2 },
        { question: "'यह सब तब हुआ जब मैं घर पर नहीं था' रचना के आधार पर वाक्य भेद बताइए।", options: ["समूह वाक्य", "सरल वाक्य", "मिश्र वाक्य", "संयुक्त वाक्य"], correct: 2 },
        { question: "'आज धूप निकलने की संभावना है' मिश्र वाक्य में बदलिए।", options: ["आज धूप निकल सकती है", "आज धूप और बारिश आने की संभावना है", "संभावना है कि आज धूप और बारिश आएगी", "संभावना है कि आज धूप निकले"], correct: 3 },
        { question: "इन में से कौन सा अव्ययीभाव पद है।", options: ["गृहागत", "आचारकुशल", "प्रतिदिन", "कुमारी"], correct: 2 },
        { question: "निम्न में कौन सा कर्मधारय समास है।", options: ["चक्रपाणी", "चतुर्युगम", "श्वेतांबर", "माता - पिता"], correct: 2 },
        { question: "दशमुख में कौन सा समास है।", options: ["कर्मधारय", "बहूव्रीहि", "तत्पुरुष", "द्विगु"], correct: 1 },
        { question: "गुणहीन में कौन सा समास है।", options: ["तत्पुरुष", "द्वंद्व", "कर्मधारय", "द्विगु"], correct: 0 },
        { question: "दो ताकतवर लोग इस चीज को गिरा पाए।", options: ["विशेषण पदबंध", "क्रिया पदबंध", "संज्ञा पदबंध", "सर्वनाम पदबंध"], correct: 2 },
        { question: "छाती पर मूंग दलना का अर्थ है -", options: ["मेहनत का काम करना", "बात-बात पर लड़ाई करना", "मुंग की दाल बनाना", "पास रहकर दुःख देना"], correct: 3 },
        { question: "“आँखों का काजल चुराना” इस मुहावरे का अर्थ है?", options: ["सफाई से चोरी करना", "काजल की चोरी करना", "आँखों को नुकसान पहुँचाना", "प्यार का इज़हार करना"], correct: 0 }
    ], 
    moderate: [
        { question: "रीतिमुक्त काव्यधारा के कवि हैं?", options: ["घनानंद", "बिहारी", "देव", "मतिराम"], correct: 0 },
        { question: "रीतिबद्ध काव्यधारा के कवि हैं?", options: ["केशवदास", "बिहारी", "देव", "मतिराम"], correct: 0 },
        { question: "प्रयोगवाद के प्रवर्तक कौन हैं?", options: ["अज्ञेय", "सुमित्रानंदन पंत", "महादेवी वर्मा", "निराला"], correct: 0 },
        { question: "हिंदी आदि काल की प्रमुख विशेषता है?", options: ["भगवान की भक्ति", "सामाजिक मुद्दे", "राष्ट्रीयता", "नवीन प्रयोग"], correct: 0 },
        { question: "नाथ कवियों की सबसे प्रसिद्ध रचना है?", options: ["गोरखबानी", "दोहाकोश", "प्राकृत पैंगलम", "सभी"], correct: 0 },
        { question: "'हिन्दी साहित्य का आलोचनात्मक इतिहास' के लेखक हैं?", options: ["आचार्य रामचंद्र शुक्ल", "आचार्य हजारीप्रसाद द्विवेदी", "डॉ. रामकुमार वर्मा", "डॉ. भगीरथ मिश्र"], correct: 2 },
        { question: "‘रत्नाकर’ में कौनसी संधि है?", options: ["व्यंजन", "गुण", "दीर्घ", "अयादि"], correct: 2 },
        { question: "‘गुण’ सन्धि का उदाहरण है?", options: ["महर्षि", "पावक", "अभ्युदय", "मतैक्य"], correct: 0 },
        { question: "‘ऋ’ को क्या कहेंगे?", options: ["अक्षर", "वर्ण माला", "व्यंजन", "स्वर"], correct: 3 },
        { question: "“रू” का वर्ण विच्छेद किस क्रमांक में है?", options: ["र् + उ", "र् + ऊ", "र् + ऋ", "र् + इ"], correct: 1 },
        { question: "'अन्य पुरुष' का उदाहरण है-", options: ["तुम", "हम", "मैं", "वे"], correct: 3 },
        { question: "निम्न में से पुल्लिंग शब्द है?", options: ["रात", "बात", "गीत", "मात"], correct: 2 },
        { question: "विशेषण से बनी हुई भाववाचक संज्ञा है-", options: ["मानवता", "दानवता", "ममता", "निपुणता"], correct: 3 },
        { question: "'नदियों के नाम' किस संज्ञा के अंतर्गत आते हैं?", options: ["जातिवाचक", "व्यक्तिवाचक", "भाववाचक", "समूह वाचक"], correct: 1 },
        { question: "निम्न में से कौन-सा संयुक्त व्यंजन नहीं है?", options: ["क्ष", "ञ", "त्र", "ज्ञ"], correct: 1 }
    ], 
    difficult: [
        { question: "वाच्य क्या कहलाते हैं?", options: ["संज्ञा के भेद", "सर्वनाम के भेद", "विशेषण के भेद", "क्रियाओं के विधान"], correct: 3 },
        { question: "कर्तृवाच्य किसे कहते हैं?", options: ["जहां क्रिया का प्रयोग वाक्य में कर्ता के लिंग व वचन के अनुसार किया जाता है", "जिन क्रियाओं में भाव प्रधान होता है", "जिन क्रियाओं में शब्द प्रधान होता है", "जहां क्रिया का प्रयोग वाक्य में कर्म के लिंग वचन के अनुसार किया जाता है"], correct: 0 },
        { question: "कर्मवाच्य की पहचान किस शब्द से होती है?", options: ["के लिए", "को", "ने", "द्वारा"], correct: 3 },
        { question: "शांत रस का स्थाई भाव है-", options: ["निर्वेद", "अद्भुत", "वीर", "श्रृंगार"], correct: 0 },
        { question: "मेरे तो गिरिधर गोपाल दुसरो न कोई | जाके सिर मोर मुकुट मेरो पति सोई || इन पंक्तियों में कौन-सा रस है?", options: ["शांत", "श्रृंगार रस", "करुण रस", "हास्य"], correct: 1 },
        { question: "भाव जिसके हृदय में रहते हैं उसे क्या कहते हैं?", options: ["आश्रय", "आलंबन", "उद्दीपन", "आलंबन जन्य उद्दीपन"], correct: 0 },
        { question: "‘निर्मल’ शब्द में प्रयुक्त उपसर्ग है -", options: ["निस्/निः", "नि", "निर्", "न्र"], correct: 2 },
        { question: "'कर्तव्य' में प्रत्यय खोजिए", options: ["त", "तव्य", "इया", "ति"], correct: 1 },
        { question: "'ए', 'ऐ' वर्ण क्या कहलाते हैं?", options: ["नासिक्य", "मूर्धन्य", "ओष्ठ्य", "कंठ-तालव्य"], correct: 3 },
        { question: "'क्ष' वर्ण किसके योग से बना है?", options: ["क् + ष", "क् + च", "क् + छ", "क् + श"], correct: 0 },
        { question: "हिंदी साहित्य में सबसे अधिक प्रसिद्ध आलोचक कौन हैं?", options: ["रामचंद्र शुक्ल", "हजारीप्रसाद द्विवेदी", "आचार्य विनोबा भावे", "महात्मा गांधी"], correct: 0 },
        { question: "छायावाद का सीमांकन माना जाता है?", options: ["1918–1936", "1920–1940", "1915–1930", "1900–1936"], correct: 0 },
        { question: "हिंदी साहित्य का आदिकाल किसे कहा जाता है?", options: ["10वीं शताब्दी", "12वीं शताब्दी", "14वीं शताब्दी", "16वीं शताब्दी"], correct: 1 },
        { question: "हिंदी साहित्य में सबसे अधिक प्रसिद्ध नाटक कौन सा है?", options: ["अंधायुग", "हयवदन", "तुगलक", "मृच्छकटिकम्"], correct: 0 },
        { question: "रीतिकाल के प्रमुख कवि हैं?", options: ["केशवदास", "बिहारी", "देव", "सभी"], correct: 3 }
    ] 
};

// ============================================
// RANDOM SELECTION FUNCTION
// ============================================

function selectRandomQuestions(database, count) {
    const shuffled = [...database].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// ============================================
// EXAM QUESTION GENERATOR
// ============================================

function generateExamQuestions(subjectPaper) {
    // Get subject database
    const subjectDB = getSubjectDatabase(subjectPaper);
    
    // Generate exam with random questions
    const examQuestions = {
        // Section 1: Basic English (10 from 20)
        basicEnglish: selectRandomQuestions(basicEnglishDatabase, 10),
        
        // Section 2: Computer Knowledge (5 from 10)
        computerKnowledge: selectRandomQuestions(computerKnowledgeDatabase, 5),
        
        // Section 3: Classroom Management (5 from 10)
        classroomManagement: selectRandomQuestions(classroomManagementDatabase, 5),
        
        // Section 4: Subject Aptitude (20 total: 4 easy, 8 moderate, 8 difficult)
        subjectEasy: selectRandomQuestions(subjectDB.easy, 4),
        subjectModerate: selectRandomQuestions(subjectDB.moderate, 8),
        subjectDifficult: selectRandomQuestions(subjectDB.difficult, 8)
    };
    
    return examQuestions;
}

function getSubjectDatabase(subjectPaper) {
    const databases = {
        'PRT English': prtEnglishDatabase,
        'TGT English': tgtEnglishDatabase,
        'PRT Maths': prtMathsDatabase,
        'TGT Maths': tgtMathsDatabase,
        'PRT EVS': prtEVSDatabase,
        'TGT Science': tgtScienceDatabase,
        'TGT Biology': tgtBiologyDatabase,
        'TGT Chemistry': tgtChemistryDatabase,
        'TGT Physics': tgtPhysicsDatabase,
        'PRT Computer': prtComputerDatabase,
        'TGT Computer': tgtComputerDatabase,
        'TGT Social Science': tgtSocialScienceDatabase,
        'PRT Marathi': prtMarathiDatabase,
        'TGT Marathi': tgtMarathiDatabase,
        'PRT Hindi': prtHindiDatabase,
        'TGT Hindi': tgtHindiDatabase
    };
    
    return databases[subjectPaper] || prtEnglishDatabase;
}
