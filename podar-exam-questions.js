// PODAR INTERNATIONAL SCHOOL - COMPREHENSIVE QUESTION DATABASE
// Interview Drive - January 2026
// With Random Question Selection

// ============================================
// TEACHER APTITUDE - COMMON FOR ALL CANDIDATES
// ============================================

// SECTION 1: BASIC ENGLISH KNOWLEDGE
// Database: 20 questions, Exam selects: 10 random
const basicEnglishDatabase = [
   	{ question: "A student is talking loudly during your class. Which is the most polite way to ask them to be quiet?", options: ["Be quiet now!", "Stop talking!", "Could you please lower your voice?", "Why are you talking?"], correct: 2 },
	{ question: "A child says, “I can’t do this exercise.” What is the best encouraging response?", options: ["That’s okay, don’t do it.", "Everyone can do it, why not you?", "Let’s try it together; I’ll help you.", "Just copy from your friend."], correct: 2 },
	{ question: "Which word fits best? “We should ___ mistakes as learning opportunities.”", options: ["punish", "ignore", "treat", "hide"], correct: 2 },
	{ question: "Choose the correct phrase to ask a student to repeat:", options: ["Say it wrong", "Could you repeat that, please?", "Speak louder now", "Don’t talk"], correct: 1 },
	{ question: "Which sentence is correct for classroom instruction?", options: ["You goes to line up.", "You go line up.", "You go to line up.", "You going to line up."], correct: 2 },
	{ question: "Choose the most polite classroom instruction:", options: ["Sit properly", "Sit straight now", "Please sit properly", "Sit!"], correct: 2 },
	{ question: "To ask a student to stop shouting, which is best?", options: ["Stop shouting!", "Shush!", "Could you please lower your voice?", "Silence!"], correct: 2 },
	{ question: "Which is the most polite way to ask a student to submit homework late?", options: ["Submit it now", "Can I have your homework tomorrow, please?", "Bring it quickly", "Don’t forget"], correct: 1 },
	{ question: "A student made a mistake while reading. You should:", options: ["Laugh at them", "Correct them harshly", "Correct gently and encourage", "Ignore it"], correct: 2 },
	{ question: "Which response shows emotional intelligence?", options: ["Stop saying that.", "Everyone can do it, try again.", "Let’s solve it together step by step.", "It’s too easy, why can’t you?"], correct: 2 },
	{ question: "A student arrives late to class. What is the most polite response?", options: ["You are always late!", "Sit down quietly.", "Please try to be on time next time.", "Why are you late again?"], correct: 2 },
	{ question: "To encourage participation, a teacher should say:", options: ["You must answer now.", "Anyone who knows the answer?", "Don’t be silent.", "You never speak."], correct: 1 },
	{ question: "A polite way to correct a wrong answer is:", options: ["You are wrong.", "That is incorrect.", "That’s not right at all.", "Good try, let’s think about it again."], correct: 3 },
	{ question: "A student is distracting others. What should the teacher say?", options: ["Stop disturbing everyone!", "Can you please focus on your work?", "Be quiet!", "Don’t irritate me."], correct: 1 },
	{ question: "Which sentence sounds most respectful?", options: ["Give me your notebook.", "Hand over your notebook.", "Please submit your notebook.", "Notebook, now!"], correct: 2 },
	{ question: "When a student forgets homework, the best response is:", options: ["You are careless.", "Why are you always forgetting?", "Please remember to bring it tomorrow.", "Don’t come without homework again."], correct: 2 },
	{ question: "To invite a shy student to speak, a teacher should say:", options: ["Speak loudly.", "You must answer.", "Would you like to share your thoughts?", "Why are you quiet?"], correct: 2 },
	{ question: "Which expression shows positive reinforcement?", options: ["That was wrong.", "Try harder next time.", "Well done, keep it up!", "You should know this."], correct: 2 },
	{ question: "A polite way to stop side conversations is:", options: ["Silence!", "Stop talking.", "Let’s all listen carefully, please.", "Be quiet now."], correct: 2 },
	{ question: "Which response promotes a supportive classroom?", options: ["You should know this already.", "That’s an easy question.", "Everyone learns at their own pace.", "Why didn’t you understand?"], correct: 2 }
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
    { question: "What does RAM stand for?", options: ["Read Access Memory", "Random Access Memory", "Remote Analysis Module", "Rapid Access Memory"], correct: 1 }
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
        { question: "Choose the correct article: He proved himself to be ___ honest boy despite all difficulties.", options: ["a", "an", "the", "no article"], correct: 1 },
		{ question: "Choose the MOST APPROPRIATE synonym of begin: The programme will ___ after the morning assembly.", options: ["terminate", "commence", "conclude", "suspend"], correct: 1 },
		{ question: "Choose the correct spelling:", options: ["Neccesary", "Necesary", "Necessary", "Necesarry"], correct: 2 },
		{ question: "Choose the correct verb: She ___ to school every day.", options: ["go", "gone", "goes", "going"], correct: 2 },
		{ question: "Choose the MOST APPROPRIATE antonym of happy: Despite winning the prize, he felt strangely ___.", options: ["cheerful", "excited", "miserable", "delighted"], correct: 2 },
		{ question: "Choose the correct preposition: The cat hid ___ the chair when it heard a loud noise.", options: ["at", "on", "under", "in"], correct: 2 },
		{ question: "Choose the correct plural form: Plural of mouse is –", options: ["mouses", "mice", "mouse", "mices"], correct: 1 },
		{ question: "Identify the noun: The teacher appreciated the child’s sincerity in completing the task independently.", options: ["appreciated", "independently", "completing", "sincerity"], correct: 3 },
		{ question: "Choose the correct pronoun: The teacher asked Neha and ___ to submit the notebooks.", options: ["I", "me", "mine", "myself"], correct: 1 },
		{ question: "Choose the grammatically correct sentence:", options: ["She didn’t knew where he lives.", "She doesn’t knew where he lived.", "She didn’t know where he lived.", "She don’t know where he lived."], correct: 2 }
    ],
    moderate: [
        { question: "Identify the adjective: It was a pleasant morning.", options: ["it", "was", "pleasant", "morning"], correct: 2 },
		{ question: "Choose the correct tense: When we reached the park, the game ___.", options: ["starts", "is starting", "had started", "has started"], correct: 2 },
		{ question: "Fill in the blank: She is afraid ___ the dark.", options: ["from", "with", "of", "by"], correct: 2 },
		{ question: "Choose the correct option: There are ___ students absent today.", options: ["much", "little", "a few", "less"], correct: 2 },
		{ question: "Identify the MAIN verb: The children were laughing loudly when the bell rang.", options: ["were", "laughing", "loudly", "were laughing"], correct: 3 },
		{ question: "Change into indirect speech: The teacher said, “Sit quietly.”", options: ["The teacher said sit quietly.", "The teacher asked the students to sit quietly.", "The teacher told sit quietly.", "The teacher said that sit quietly."], correct: 1 },
		{ question: "Choose the grammatically correct sentence:", options: ["I am having a pen ever since childhood.", "I have been having a pen ever since childhood.", "I had been having a pen ever since childhood.", "I have had a pen ever since childhood."], correct: 3 },
		{ question: "Choose the correct question tag: You like reading stories, ___?", options: ["do you", "don’t you", "doesn’t you", "did you"], correct: 1 },
		{ question: "Identify the adverb: She answered the question politely despite the pressure.", options: ["answered", "question", "politely", "pressure"], correct: 2 },
		{ question: "Choose the grammatically correct sentence:", options: ["The informations provided are useful.", "Information are useful for students.", "The information provided is useful.", "The information are usefulness."], correct: 2 },
		{ question: "Choose the correct modal: You ___ obey your parents.", options: ["may", "can", "should", "might"], correct: 2 },
		{ question: "Fill in the blank: The bell rang ___ the teacher was explaining the final point.", options: ["until", "because", "although", "while"], correct: 3 },
		{ question: "Identify the error: Each of the students have submitted the work.", options: ["Each", "of", "have", "submitted"], correct: 2 },
		{ question: "Choose the correct comparison: This book is ___ than that one.", options: ["more easy", "most easy", "easier", "easy"], correct: 2 },
		{ question: "Choose the correct sentence:", options: ["One of the boys are missing.", "One of the boys is missing.", "One of boys is missing.", "One of the boy are missing."], correct: 1 }
    ],
    difficult: [
        { question: "Identify the error: She did not knew the correct answer.", options: ["did", "not", "knew", "answer"], correct: 2 },
		{ question: "Choose the correct option: The teacher asked the children ___ a noise.", options: ["don’t make", "not making", "not to make", "no make"], correct: 2 },
		{ question: "Choose the correct tense: By the time the teacher arrived, the class ___.", options: ["begins", "has begun", "had begun", "was beginning"], correct: 2 },
		{ question: "Choose the grammatically correct sentence:", options: ["The bag was costing fifty rupees yesterday.", "The bag had costed fifty rupees yesterday.", "The bag cost fifty rupees yesterday.", "The bag has cost fifty rupees yesterday."], correct: 2 },
		{ question: "Choose the correct preposition: She insisted ___ doing the work herself.", options: ["in", "on", "for", "with"], correct: 1 },
		{ question: "Identify the figure of speech: The stars danced in the sky.", options: ["Simile", "Metaphor", "Personification", "Hyperbole"], correct: 2 },
		{ question: "Choose the correct sentence:", options: ["The homework was gave yesterday.", "The homework is give yesterday.", "The homework was given yesterday.", "The homework has gave yesterday."], correct: 2 },
		{ question: "Fill in the blank: She has been living here ___ five years.", options: ["since", "from", "for", "by"], correct: 2 },
		{ question: "Choose the correct option: Neither of the children ___ late today.", options: ["are", "were", "is", "have"], correct: 2 },
		{ question: "Identify the adverb: The students listened attentively throughout the long explanation.", options: ["throughout the long explanation", "listened attentively", "long explanation", "attentively"], correct: 3 },
		{ question: "Why did Aarav remain silent initially?", options: ["He did not notice Mohit’s situation", "He thought the teacher would handle it", "He feared losing social acceptance", "He disliked group activities"], correct: 2 },
		{ question: "What risk did Aarav take by including Mohit?", options: ["Losing marks in class", "Being punished by the teacher", "Becoming unpopular among classmates", "Getting into a fight"], correct: 2 },
		{ question: "The phrase “changed their attitude” suggests that the classmates –", options: ["became stricter", "stopped attending class", "developed a more accepting mindset", "ignored Aarav completely"], correct: 2 },
		{ question: "Which word BEST describes Aarav’s final action?", options: ["Careless", "Hesitant", "Obedient", "Principled"], correct: 3 },
		{ question: "The central idea of the passage is that –", options: ["Friendship is more important than rules", "Silence avoids conflict", "Approval should always be valued", "Moral courage often matters more than popularity"], correct: 3 }
    ]
};

// TGT ENGLISH
const tgtEnglishDatabase = {
    easy: [
        { question: "Obdurate means –", options: ["polite", "stubborn", "flexible", "weak"], correct: 1 },
		{ question: "Antonym of concise –", options: ["short", "brief", "verbose", "clear"], correct: 2 },
		{ question: "Choose the correct word: Her reply was very ___.", options: ["clarity", "clear", "clearly", "clearness"], correct: 1 },
		{ question: "Meaning of diligent –", options: ["lazy", "hardworking", "careless", "slow"], correct: 1 },
		{ question: "Idiom: spill the beans –", options: ["waste food", "reveal a secret", "cook food", "quarrel"], correct: 1 },
		{ question: "Correct spelling –", options: ["Onomatopoeia", "Onomonopia", "Onomatapoeia", "Ommatopeia"], correct: 0 },
		{ question: "Synonym of fragile –", options: ["strong", "tough", "delicate", "firm"], correct: 2 },
		{ question: "The match was ___ due to rain.", options: ["put on", "called off", "taken over", "turned in"], correct: 1 },
		{ question: "Each of the boys ___ present.", options: ["are", "is", "were", "have"], correct: 1 },
		{ question: "She is superior ___ me.", options: ["than", "to", "from", "with"], correct: 1 }
    ],
    moderate: [
       	{ question: "He said, “I am tired.”", options: ["He said that he is tired.", "He said that he was tired.", "He says that he was tired.", "He said that he had tired."], correct: 1 },
		{ question: "Passive voice: They will announce the result.", options: ["Result is announced.", "The result will be announced.", "Result was announced.", "Result has been announced."], correct: 1 },
		{ question: "Identify the error: Neither of the answers are correct.", options: ["Neither", "of", "are", "correct"], correct: 2 },
		{ question: "Hardly had I entered ___ it started raining.", options: ["than", "when", "then", "that"], correct: 1 },
		{ question: "She is good ___ mathematics.", options: ["in", "on", "at", "with"], correct: 2 },
		{ question: "“The classroom was a zoo.”", options: ["Simile", "Metaphor", "Hyperbole", "Personification"], correct: 1 },
		{ question: "She has been working here ___ 2019.", options: ["from", "for", "since", "by"], correct: 2 },
		{ question: "He did not have ___ idea.", options: ["some", "few", "any", "much"], correct: 2 },
		{ question: "The train ___ before we reached the station.", options: ["leaves", "left", "had left", "has left"], correct: 2 },
		{ question: "There is no place for you and ___.", options: ["I", "me", "myself", "mine"], correct: 1 },
		{ question: "Identify the clause: I believe that she is honest.", options: ["Noun clause", "Adjective clause", "Adverb clause", "Phrase"], correct: 0 },
		{ question: "She speaks ___ than her sister.", options: ["confident", "more confidently", "most confident", "confidence"], correct: 1 },
		{ question: "Choose the correct sentence:", options: ["He is good in maths.", "He is good at maths.", "He is good on maths.", "He is good for maths."], correct: 1 },
		{ question: "Identify the error: The quality of the apples are good.", options: ["quality", "of", "are", "good"], correct: 2 },
		{ question: "Neither of the girls ___ ready.", options: ["are", "were", "is", "have"], correct: 2 }
    ],
    difficult: [
        { question: "Identify the error: Scarcely had the bell rang when the students rushed out.", options: ["rang", "had", "when", "rushed"], correct: 0 },
		{ question: "Choose the correct sentence:", options: ["No sooner the teacher entered than the class became silent.", "No sooner had the teacher entered when the class became silent.", "No sooner had the teacher entered than the class became silent.", "No sooner did the teacher entered than the class became silent."], correct: 2 },
		{ question: "Choose the correct determiner: I have ___ patience for rude behaviour.", options: ["few", "many", "little", "several"], correct: 2 },
		{ question: "She behaved ___ during the meeting.", options: ["rude", "ruder", "rudely", "rudeness"], correct: 2 },
		{ question: "By next year, he ___ his training.", options: ["completes", "is completing", "will have completed", "has completed"], correct: 2 },
		{ question: "What concern does the senior teacher primarily raise?", options: ["Overuse of mobile phones", "Lack of classroom discipline", "Decline in independent thinking among students", "Ineffective teaching strategies"], correct: 2 },
		{ question: "Which idea is contrasted in the discussion among teachers?", options: ["Technology versus textbooks", "Discipline versus freedom", "Teaching versus learning", "Strict assessment versus reflective learning"], correct: 3 },
		{ question: "The word “merely” suggests that access to information is —", options: ["completely unnecessary", "highly sufficient", "not enough by itself", "harmful to learning"], correct: 2 },
		{ question: "What inference can be drawn about effective learning?", options: ["It depends on memorisation", "It improves with testing", "It requires active engagement", "It is guaranteed by technology"], correct: 2 },
		{ question: "Which statement best summarises the passage?", options: ["Technology should be avoided", "Teachers disagree on assessment", "Students misuse online resources", "Learning quality depends on thoughtful engagement, not just information access"], correct: 3 },
		{ question: "Identify the figure of speech: The wind whispered through the trees.", options: ["Simile", "Metaphor", "Hyperbole", "Personification"], correct: 3 },
		{ question: "Choose the correct option: He suggested that she ___ earlier.", options: ["leaves", "left", "should leave", "will leave"], correct: 2 },
		{ question: "You ___ have informed me earlier.", options: ["may", "could", "should", "might"], correct: 2 },
		{ question: "Choose the correct sentence:", options: ["One must do his duty.", "One must do one’s duty.", "One must do their duty.", "One must do his/her duty."], correct: 1 },
		{ question: "Identify the error: She is one of the students who has won prizes.", options: ["one", "students", "who", "has"], correct: 3 }
    ]
};

// PRT MATHS - Sample questions (you'll add 40 total per subject)
const prtMathsDatabase = {
    easy: [
        { question: "What is the place value of 3 in 3,456?", options: ["3", "30", "300", "3,000"], correct: 3 },
		{ question: "What is 425 + 175?", options: ["500", "550", "600", "650"], correct: 2 },
		{ question: "What is 7 × 6?", options: ["36", "42", "48", "56"], correct: 1 },
		{ question: "What is 56 ÷ 7?", options: ["6", "7", "8", "9"], correct: 2 },
		{ question: "Which fraction shows one-half?", options: ["5/15", "4/6", "5/10", "9/12"], correct: 2 },
		{ question: "Which of the following is a factor of 10?", options: ["3", "4", "5", "6"], correct: 2 },
		{ question: "The HCF of 6 and 12 is:", options: ["2", "3", "6", "12"], correct: 2 },
		{ question: "What is the perimeter of a square with side 5 cm?", options: ["10 cm", "15 cm", "20 cm", "25 cm"], correct: 2 },
		{ question: "How many minutes are there in 1 hour?", options: ["30", "45", "60", "90"], correct: 2 },
		{ question: "How many sides does a triangle have?", options: ["2", "3", "4", "5"], correct: 1 }
    ],
    moderate: [
        { question: "The place value of 6 in 4,68,215 is:", options: ["60", "600", "6,000", "60,000"], correct: 3 },
		{ question: "Which number is the smallest?", options: ["3,245", "3,254", "3,205", "3,240"], correct: 2 },
		{ question: "A library has 5,480 books. If 1,365 books are issued, how many remain?", options: ["4,115", "4,125", "4,215", "4,105"], correct: 0 },
		{ question: "Find the sum of the greatest 3-digit number and the smallest 4-digit number.", options: ["1,999", "1,998", "2,000", "1,997"], correct: 0 },
		{ question: "Which of the following equals 24 × 15?", options: ["(24 × 10) + (24 × 5)", "(20 × 15) + (4 × 15)", "Both a and b", "None of these"], correct: 2 },
		{ question: "If 864 chocolates are packed equally into 12 boxes, each box has:", options: ["68", "72", "74", "76"], correct: 1 },
		{ question: "Which fraction is equivalent to 3/5?", options: ["6/15", "9/10", "12/20", "15/30"], correct: 2 },
		{ question: "What is 5/6 – 1/3 ?", options: ["1/6", "1/2", "2/3", "4/6"], correct: 1 },
		{ question: "How many multiples of 7 are there between 1 and 50?", options: ["6", "7", "8", "9"], correct: 1 },
		{ question: "The HCF of 24, 36, and 60 is:", options: ["6", "12", "18", "24"], correct: 1 },
		{ question: "The perimeter of a rectangle is 56 cm. If its length is 18 cm, the breadth is:", options: ["10 cm", "12 cm", "14 cm", "16 cm"], correct: 0 },
		{ question: "Find the area of a square with side 9 cm.", options: ["36 cm²", "72 cm²", "81 cm²", "90 cm²"], correct: 2 },
		{ question: "The volume of a cube with edge 5 cm is:", options: ["25 cm³", "75 cm³", "100 cm³", "125 cm³"], correct: 3 },
		{ question: "The average of 4 numbers is 25. What is their total?", options: ["50", "75", "90", "100"], correct: 3 },
		{ question: "A triangle has sides 5 cm, 12 cm, and 13 cm. What type of triangle is it?", options: ["Acute-angled", "Right-angled", "Obtuse-angled", "Equilateral"], correct: 1 }
    ],
    difficult: [
        { question: "The number formed by rearranging the digits of 4, 0, 5, 2 to get the greatest possible even number is:", options: ["5420", "5204", "5042", "4520"], correct: 0 },
		{ question: "A shopkeeper had ₹8,450. He paid ₹3,275 to a supplier and later earned ₹1,890. How much money does he have now?", options: ["₹6,965", "₹7,065", "₹7,165", "₹7,065"], correct: 1 },
		{ question: "If 48 students are seated equally in 6 rows, and 3 more students join each row, how many students are there now?", options: ["54", "60", "66", "72"], correct: 2 },
		{ question: "Which of the following is greater than 3/4 but less than 5/6?", options: ["4/5", "2/3", "7/8", "5/7"], correct: 0 },
		{ question: "The smallest number that is a multiple of 6 and 8, but not a multiple of 16, is:", options: ["24", "48", "72", "96"], correct: 0 },
		{ question: "Two bells ring every 18 minutes and 24 minutes respectively. If they ring together at 8:00 AM, when will they ring together again?", options: ["8:48 AM", "9:12 AM", "9:36 AM", "10:00 AM"], correct: 1 },
		{ question: "Two rectangles have the same perimeter. Rectangle A has sides 10 cm and 6 cm. Rectangle B has one side 8 cm. What is the area of Rectangle B?", options: ["48 cm²", "64 cm²", "80 cm²", "96 cm²"], correct: 1 },
		{ question: "A figure has 2 lines of symmetry and rotational symmetry of order 2. Which shape fits best?", options: ["Square", "Rectangle", "Equilateral triangle", "Circle"], correct: 1 },
		{ question: "The average of 5 numbers is 20. If four numbers are 12, 18, 25, and 30, the fifth number is:", options: ["10", "12", "15", "15"], correct: 2 },
		{ question: "A square park has a perimeter of 160 m. If fencing costs ₹25 per meter, what is the total cost?", options: ["₹3,200", "₹4,000", "₹5,000", "₹6,400"], correct: 1 },
		{ question: "How many numbers are there between 125 and 135?", options: ["9", "10", "11", "12"], correct: 0 },
		{ question: "Which shape has no line of symmetry?", options: ["Square", "Rectangle", "Circle", "Scalene triangle"], correct: 3 },
		{ question: "If HCF of two numbers is 4 and LCM is 48, the product of the numbers is:", options: ["96", "144", "192", "256"], correct: 2 },
		{ question: "A number divisible by 2, 3 and 5 must be divisible by:", options: ["6", "10", "15", "30"], correct: 3 },
		{ question: "The scale on a bar graph shows:", options: ["Title", "Labels", "Values", "Colours"], correct: 2 }
    ]
};

// TGT MATHS - Sample (full 40 questions to be added)
const tgtMathsDatabase = {
    easy: [
        { question: "The side faces of a pyramid are:", options: ["Triangles", "Squares", "Polygons", "Trapeziums"], correct: 0 },
		{ question: "Which quadrilateral has diagonals perpendicular and equal?", options: ["Rectangle", "Square", "Rhombus", "Kite"], correct: 1 },
		{ question: "From an external point, the lengths of tangents drawn to a circle are:", options: ["Unequal", "Equal", "Zero", "Infinite"], correct: 1 },
		{ question: "Volume of a cube is 343 cm³. Its side is:", options: ["3", "4", "7", "6"], correct: 2 },
		{ question: "If two lines are parallel, cointerior angles are:", options: ["Supplementary", "Equal", "90°", "Unequal"], correct: 0 },
		{ question: "The value of (sin 30° + cos 60°) is:", options: ["0", "1/2", "1", "2"], correct: 2 },
		{ question: "The curved surface area of cylinder is given by:", options: ["πr²h", "2πrh", "2πr²", "πr²"], correct: 1 },
		{ question: "Probability of getting a prime number from 1 to 10 is:", options: ["3/10", "4/10", "5/10", "6/10"], correct: 1 },
		{ question: "The temperature was −5°C in the morning. It rose by 9°C by noon. What is the new temperature?", options: ["4°C", "−14°C", "2°C", "9°C"], correct: 0 },
		{ question: "A submarine descends 450 m then rises 120 m. Find the final position:", options: ["−330 m", "570 m", "−450 m", "120 m"], correct: 0 }
    ],
    moderate: [
        { question: "‘Lines are parallel if they do not intersect’ is stated in the form of:", options: ["An axiom", "A definition", "A postulate", "A proof"], correct: 1 },
		{ question: "Two sides of a triangle are of lengths 5cm and 1.5cm. The length of the third side cannot be:", options: ["3.6cm", "4.1cm", "3.8cm", "3.4cm"], correct: 3 },
		{ question: "If cos A = 5/13, find sin A.", options: ["12/13", "5/12", "13/5", "1/13"], correct: 0 },
		{ question: "The mean of first n natural numbers is:", options: ["n/2", "(n+1)/2", "(n-1)/2", "n+1"], correct: 1 },
		{ question: "A card is drawn from a deck. Probability of getting a red card is:", options: ["1/52", "1/4", "3/4", "1/2"], correct: 3 },
		{ question: "Find the sum of first 15 terms of AP: 7, 10, 13, ...", options: ["460", "490", "520", "420"], correct: 3 },
		{ question: "If sum of angles of polygon is 900°, number of sides is:", options: ["5", "6", "7", "8"], correct: 2 },
		{ question: "The mode of data: 2,4,6,4,8,4,10 is:", options: ["12", "4", "6", "19"], correct: 1 },
		{ question: "The angles of a triangle are in the ratio 5 : 3 : 7. The triangle is:", options: ["An acute angled triangle", "An obtuse angled triangle", "A right triangle", "An isosceles triangle"], correct: 0 },
		{ question: "A shopkeeper buys a toy for ₹250 and sells it at 12% profit, find the selling price:", options: ["₹280", "₹270", "₹300", "₹260"], correct: 0 },
		{ question: "If the Selling Price (SP) is ₹480 after a 20% discount, the Marked Price (MP) is:", options: ["₹560", "₹600", "₹580", "₹450"], correct: 1 },
		{ question: "If 3/4 of a number is 36, what is 5/6 of the same number?", options: ["45", "50", "60", "40"], correct: 3 },
		{ question: "A rectangular garden is 25 m long and 16 m wide. A 2 m wide path is built inside along the edge. What is the area of the path?", options: ["94 m²", "116 m²", "138 m²", "148 m²"], correct: 3 },
		{ question: "Rahul buys 3 dozen apples. He ate 2/3 of them. How many apples are left?", options: ["12", "18", "24", "36"], correct: 0 },
		{ question: "For what value of x does 10^x × 100^(2x) = 1000^5 ?", options: ["1", "2", "3", "4"], correct: 2 }
    ],
    difficult: [
        { question: "Area of triangle with vertices (0,0),(6,0),(0,4) is:", options: ["6", "10", "12", "24"], correct: 2 },
		{ question: "The figure obtained by joining the mid-points of the sides of a rhombus is:", options: ["A rhombus", "A rectangle", "A square", "Any parallelogram"], correct: 1 },
		{ question: "If sum of first n terms of an AP is n² + 3n, then the nth term is:", options: ["2n + 1", "2n - 4", "2n + 2", "2n + 4"], correct: 2 },
		{ question: "A milkman mixes 0.005 m3 of water with 25 liters of milk. What is the ratio of water to total mixture?", options: ["1:6", "1:5", "1:200", "200:1"], correct: 0 },
		{ question: "A number is divided by 3 and then 8 is added. The result is 20. What is the number?", options: ["48", "36", "40", "24"], correct: 1 },
		{ question: "A train travels 120 km in 2 hours and 30 minutes. What is the average speed in km/h?", options: ["48", "60", "54", "64"], correct: 0 },
		{ question: "From a circular sheet of paper with a radius 20 cm, four circles of radius 5 cm each are cut out. What is the ratio of the uncut to the cut portion?", options: ["1 : 3", "4 : 1", "3 : 1", "4 : 3"], correct: 2 },
		{ question: "Nikita sold two watches for Rs. 300 each, one at the loss of 10% and the other at the profit of 10%. What is the percentage of loss or profit?", options: ["10% Profit", "1% Loss", "1% Profit", "10% Loss"], correct: 1 },
		{ question: "Samir was standing facing East. He turned to his right and walked 5 metres, again turned to his right and walked 7 metres. Then he turned to his left and walked 4 metres. Which direction is he facing now?", options: ["North", "South", "West", "North-West"], correct: 1 },
		{ question: "In a row of children facing North, Shweta is fifteenth from the left and Jyoti is third to the left of Shweta. Ram who is seventh to the right of Jyoti is fifth from the right end of the row. What is Shweta’s position from the right end?", options: ["12th", "10th", "8th", "9th"], correct: 3 },
		{ question: "The length, breadth and height of a room are in the ratio 3 : 2 : 1. If the breadth and height are halved while the length is doubled, then the total area of the four walls of the room will", options: ["remain the same", "decrease by 13.64%", "decrease by 15%", "decrease by 30%"], correct: 3 },
		{ question: "In mid-term examination of Mathematics three friends got marks in the ratio 3:4:5. After increasing their marks by 10%, 5% and 20% respectively, what will be the new ratio?", options: ["10 : 11 : 12", "10 : 12 : 14", "11 : 14 : 20", "11 : 18 : 20"], correct: 2 },
		{ question: "A sum of money is invested at compound interest. The interest for the first two years is ₹900 and ₹960 respectively. What is the sum?", options: ["₹9000", "₹13500", "₹13725", "₹14750"], correct: 1 },
		{ question: "Person A completes a work in 9 days whereas person B takes two-third of this time. If they work together, what part of the work will they complete in one day?", options: ["5/18", "5/9", "2/7", "1/3"], correct: 0 },
		{ question: "In a circular field, there is a rectangular tank of length 130 m and breadth 110 m. If the area of the land portion is 20350 m², what is the radius of the field?", options: ["85 m", "95 m", "105 m", "115 m"], correct: 2 }
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
