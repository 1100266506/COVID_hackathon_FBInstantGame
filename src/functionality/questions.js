//******************************************************************************CREATE QUESTIONS
//create questions in an array
//# Update 3 - Add db_name to each question (should be able to copy paste)
const myQuestions = [
    [//set zero demographics
        {
            question: "Age",
            db_name: "dem_Age",
            answers: {
                a: "17 or younger",
                b: "18 - 24",
                c: "21 - 35",
                d: "36 - 45",
                e: "46 - 55",
                f: "56 or older"
            },
        },
        {
            question: "Gender",
            db_name: "dem_Gender",
            answers: {
                a: "female",
                b: "male",
                c: "transgender female",
                d: "transgender male",
                e: "non-binary",
                f: "other"
            },
        },
        {
            question: "State of Residence",
            db_name: "state",
            answers: "state"
        },
        {
            question: "Race",
            db_name: "dem_Race",
            answers: {
                a: "Black",
                b: "White",
                c: "Hispanic",
                d: "Asian",
                e: "Other"
            },
        }
    ],
    [//set One - suicidal ideation and pyschosis
        {
            question: "Thoughts of actually hurting yourself?",
            db_name: "a-Self_Harm",
            answers: {
                a: "Not at all",
                b: "Rare",
                c: "A few days",
                d: "Several days",
            },
        },
        {
            question: "Hearing things other people couldn't hear, such as voices even when no one was around?",
            db_name: "a-Hear_Voices",
            answers: {
                a: "Not at all",
                b: "Rare",
                c: "A few days",
                d: "Several days",
            },
        },
        {
            question: "Feeling that someone could hear your thoughts, or that you could hear what another person was thinking?",
            db_name: "a-Hear_Others_Thoughts",
            answers: {
                a: "Not at all",
                b: "Rare",
                c: "A few days",
                d: "Several days",
            },
        }
    ],
    [//set two - depression, anger, mania, anxiety
        {
            question: "Little interest or pleasure in doing things?",
            db_name: "b-Little_Interest",
            answers: {
                a: "Not at all",
                b: "Rare",
                c: "A few days",
                d: "Several days",
            },
        },
        {
            question: "Feeling down, depressed, or hopeless?",
            db_name: "b-Feeling_Down",
            answers: {
                a: "Not at all",
                b: "Rare",
                c: "A few days",
                d: "Several days",
            },
        },
        {
            question: "Feeling more irritated, grouchy, or angry than usual?",
            db_name: "b-Feeling_irritated",
            answers: {
                a: "Not at all",
                b: "Rare",
                c: "A few days",
                d: "Several days",
            },
        },
        {
            question: "Sleeping less than usual, but still have a lot of energy?",
            db_name: "b-Less_Sleep",
            answers: {
                a: "Not at all",
                b: "Rare",
                c: "A few days",
                d: "Several days",
            },
        },
        {
            question: "Starting lots more projects than usual or doing more risky things than usual?",
            db_name: "b-More_Projects",
            answers: {
                a: "Not at all",
                b: "Rare",
                c: "A few days",
                d: "Several days",
            },
        },
        {
            question: "Feeling nervous, anxious, frightened, worried, or on edge?",
            db_name: "b-Nervous",
            answers: {
                a: "Not at all",
                b: "Rare",
                c: "A few days",
                d: "Several days",
            },
        },
        {
            question: "Feeling panic or being frightened?",
            db_name: "b-Panic",
            answers: {
                a: "Not at all",
                b: "Rare",
                c: "A few days",
                d: "Several days",
            },
        },
        {
            question: "Avoiding situations that make you anxious?",
            db_name: "b-Avoiding_anxious_sit",
            answers: {
                a: "Not at all",
                b: "Rare",
                c: "A few days",
                d: "Several days",
            },
        }
    ],
    [//set three - repetitive thoughts, substance use
        {
            question: "Unpleasant thoughts, urges, or images that repeatedly enter your mind?",
            db_name: "c-unpl_thoughts",
            answers: {
                a: "Not at all",
                b: "Rare",
                c: "A few days",
                d: "Several days",
            },
        },
        {
            question: "Feeling driven to perform certain behaviors or mental acts over and over again?",
            db_name: "c-repeated_act",
            answers: {
                a: "Not at all",
                b: "Rare",
                c: "A few days",
                d: "Several days",
            },
        },
        {
            question: "Drinking at least 4 drinks of any kind of alcohol in a single day?",
            db_name: "c-drink_4+",
            answers: {
                a: "Not at all",
                b: "Rare",
                c: "A few days",
                d: "Several days",
            },
        },
        {
            question: "Smoking any cigarettes, a cigar, or pipe, or using snuff or chewing tobacco?",
            db_name: "c-smoking",
            answers: {
                a: "Not at all",
                b: "Rare",
                c: "A few days",
                d: "Several days",
            },
        },
        {
            question: "Using any of the following medicines ON YOUR OWN, that is, without a doctor’s prescription, in greater amounts or longer than prescribed [e.g., painkillers (like Vicodin), stimulants (like Ritalin or Adderall), sedatives or tranquilizers (like sleeping pills or Valium), or drugs like marijuana, cocaine or crack, club drugs (like ecstasy), hallucinogens (like LSD), heroin, inhalants or solvents (like glue), or methamphetamine (like speed)]?",
            db_name: "c-meds",
            answers: {
                a: "Not at all",
                b: "Rare",
                c: "A few days",
                d: "Several days",
            },
        }
    ]
];
