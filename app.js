let questionsData = [
    {
        "question": "What does HTML stand for?",
        "options": [
            "Hyperlink Text Markup Language",
            "Hyper Text Markup Language",
            "Hyperlinking Text and Making Links",
            "Hyper Text Making Language"
        ],
        "answer": "Hyper Text Markup Language"
    },
    {
        "question": "Which programming language is known as the 'mother of all languages'?",
        "options": [
            "Python",
            "Java",
            "C",
            "Assembly"
        ],
        "answer": "C"
    },
    {
        "question": "Which data structure follows the Last In First Out (LIFO) principle?",
        "options": [
            "Queue",
            "Stack",
            "Linked List",
            "Tree"
        ],
        "answer": "Stack"
    },
    {
        "question": "Which company developed the Python programming language?",
        "options": [
            "Microsoft",
            "Google",
            "Facebook",
            "Python Software Foundation"
        ],
        "answer": "Python Software Foundation"
    },
    {
        "question": "In JavaScript, what keyword is used to declare a variable?",
        "options": [
            "var",
            "variable",
            "v",
            "let"
        ],
        "answer": "var"
    },
    {
        "question": "What does CPU stand for?",
        "options": [
            "Computer Processing Unit",
            "Central Process Unit",
            "Computer Processor Unit",
            "Central Processor Unit"
        ],
        "answer": "Central Processing Unit"
    },
    {
        "question": "Which sorting algorithm has an average case time complexity of O(n log n)?",
        "options": [
            "Bubble Sort",
            "Insertion Sort",
            "Merge Sort",
            "Selection Sort"
        ],
        "answer": "Merge Sort"
    },
    {
        "question": "Which machine learning algorithm is inspired by the way biological neurons work?",
        "options": [
            "SVM (Support Vector Machine)",
            "Decision Tree",
            "K-Means Clustering",
            "Artificial Neural Network"
        ],
        "answer": "Artificial Neural Network"
    },
    {
        "question": "What does the 'I' in SQL stand for?",
        "options": [
            "Index",
            "Integrated",
            "Intelligent",
            "Interactive"
        ],
        "answer": "Interactive"
    },
    {
        "question": "Which data structure stores elements in key-value pairs?",
        "options": [
            "Array",
            "Stack",
            "Queue",
            "Dictionary"
        ],
        "answer": "Dictionary"
    },
    {
        "question": "Which programming language is often used for building web applications?",
        "options": [
            "C++",
            "Java",
            "Ruby",
            "JavaScript"
        ],
        "answer": "JavaScript"
    },
    {
        "question": "Which company developed the C# programming language?",
        "options": [
            "Microsoft",
            "Google",
            "Apple",
            "Oracle"
        ],
        "answer": "Microsoft"
    },
    {
        "question": "What does API stand for?",
        "options": [
            "Application Programming Interface",
            "Application Processing Interface",
            "Automated Program Interaction",
            "Automated Programming Interface"
        ],
        "answer": "Application Programming Interface"
    },
    {
        "question": "Which type of machine learning aims to enable computers to mimic human reasoning?",
        "options": [
            "Reinforcement Learning",
            "Unsupervised Learning",
            "Supervised Learning",
            "Artificial Intelligence"
        ],
        "answer": "Artificial Intelligence"
    },
    {
        "question": "What is the process of finding errors and fixing them in a program called?",
        "options": [
            "Debugging",
            "Compiling",
            "Interpreting",
            "Executing"
        ],
        "answer": "Debugging"
    },
    {
        "question": "Which algorithm is used to find the shortest path in a graph?",
        "options": [
            "DFS (Depth-First Search)",
            "BFS (Breadth-First Search)",
            "Dijkstra's Algorithm",
            "A* Algorithm"
        ],
        "answer": "Dijkstra's Algorithm"
    },
    {
        "question": "What is the primary purpose of an operating system?",
        "options": [
            "Running applications",
            "Managing hardware resources",
            "Displaying graphical user interfaces",
            "Browsing the internet"
        ],
        "answer": "Managing hardware resources"
    },
    {
        "question": "Which type of database is best suited for complex queries and analytical processing?",
        "options": [
            "Relational Database",
            "NoSQL Database",
            "Key-Value Database",
            "Graph Database"
        ],
        "answer": "Relational Database"
    },
    {
        "question": "Which technique involves training a model on a large dataset and then fine-tuning it on a smaller dataset?",
        "options": [
            "Transfer Learning",
            "Reinforcement Learning",
            "Unsupervised Learning",
            "Supervised Learning"
        ],
        "answer": "Transfer Learning"
    },
    {
        "question": "Which sorting algorithm works by repeatedly selecting the minimum element from the unsorted part of an array?",
        "options": [
            "Quick Sort",
            "Insertion Sort",
            "Bubble Sort",
            "Selection Sort"
        ],
        "answer": "Selection Sort"
    },
    {
        "question": "Which component of a computer is responsible for executing instructions of a program?",
        "options": [
            "Hard Drive",
            "RAM (Random Access Memory)",
            "CPU (Central Processing Unit)",
            "GPU (Graphics Processing Unit)"
        ],
        "answer": "CPU (Central Processing Unit)"
    },
    {
        "question": "Which type of loop is guaranteed to execute at least once?",
        "options": [
            "for loop",
            "while loop",
            "do-while loop",
            "infinite loop"
        ],
        "answer": "do-while loop"
    },
    {
        "question": "In machine learning, what is the term for the output a model produces when given an input?",
        "options": [
            "Feature",
            "Label",
            "Prediction",
            "Loss"
        ],
        "answer": "Prediction"
    },
    {
        "question": "Which web development framework is written in Python and is known for its simplicity and elegance?",
        "options": [
            "Ruby on Rails",
            "Angular",
            "Django",
            "Express.js"
        ],
        "answer": "Django"
    }
]

// Function to disable options
function disableOptions() {
    const options = document.querySelectorAll(".option");
    options.forEach(option => {
        option.style.pointerEvents = "none"; // Disable clicking on all options
    });
}



// Function to enable options
function enableOptions() {
    const options = document.querySelectorAll(".option");
    options.forEach(option => {
        option.style.pointerEvents = "auto"; // Enable clicking on all options
    });
}

const LoadQuestions = () => {
    const quest = document.getElementById("quest");
    const btn = document.getElementById("btn");
    const options = document.querySelectorAll(".option");

    const option1 = document.getElementsByClassName("option1")[0]
    const option2 = document.getElementsByClassName("option2")[0]
    const option3 = document.getElementsByClassName("option3")[0]
    const option4 = document.getElementsByClassName("option4")[0]

    function getRandomNumber(max) {
        return Math.floor(Math.random() * max);
    }

    function getRandomQuestion() {
        const randomIndex = getRandomNumber(questionsData.length);
        return questionsData[randomIndex];
    }

    // Get a random question
    const randomQuestion = getRandomQuestion();




    // Display the random question in console.log
    quest.textContent = randomQuestion.question;
    // const ans=randomQuestion.answer
    option1.textContent = randomQuestion.options[0]
    option2.textContent = randomQuestion.options[1]
    option3.textContent = randomQuestion.options[2]
    option4.textContent = randomQuestion.options[3]

    // Attach click events to the option elements
    options.forEach(option => {
        option.addEventListener("click", function () {
            disableOptions(); // Disable options after a selection
            const isCorrect = checkAnswer(option, randomQuestion.answer);
            updateMarks(isCorrect);

        });
    });


    // else {
    //     selectedOption.style.backgroundColor = "red";
    //     selectedOption.style.color = "white";
    // }

    btn.addEventListener("click", showMore)
}

function checkAnswer(selectedOption, correctAnswer) {
    if (selectedOption.textContent === correctAnswer) {
        selectedOption.style.backgroundColor = "green";
        selectedOption.style.color = "white";
        updateMarks(true); // Update marks only for correct answers
    }
    if (selectedOption.textContent != correctAnswer) {
        selectedOption.style.backgroundColor = "red";
        selectedOption.style.color = "white";
        updateMarks(false); // Update marks only for incorrect answers
    }
}

const showMore = () => {

    const quest = document.getElementById("quest");
    const btn = document.getElementById("btn");
    const options = document.querySelectorAll(".option");

     // Reset options' background color and text color
     options.forEach(option => {
        option.style.backgroundColor = "";
        option.style.color = "";
        option.style.pointerEvents = "auto"; // Re-enable clicking on options
    });

    const option1 = document.getElementsByClassName("option1")[0]
    const option2 = document.getElementsByClassName("option2")[0]
    const option3 = document.getElementsByClassName("option3")[0]
    const option4 = document.getElementsByClassName("option4")[0]

    function getRandomNumber(max) {
        return Math.floor(Math.random() * max);
    }

    function getRandomQuestion() {
        const randomIndex = getRandomNumber(questionsData.length);
        return questionsData[randomIndex];
    }

    // Get a random question
    const randomQuestion = getRandomQuestion();


    quest.textContent = randomQuestion.question;
    // const ans=randomQuestion.answer
    option1.textContent = randomQuestion.options[0]
    option2.textContent = randomQuestion.options[1]
    option3.textContent = randomQuestion.options[2]
    option4.textContent = randomQuestion.options[3]

    // Attach click events to the option elements
    options.forEach(option => {
        option.addEventListener("click", function () {
            checkAnswer(option, randomQuestion.answer);
        });
    });
}


LoadQuestions();