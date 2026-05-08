const prompts = [
    {
        id: 1,
        category: "Internship",
        emoji: "💼",
        popularPrompts: [
            "Create a weekly study schedule for cracking product-based company internships.",
            "How do I ask a professor for an internship recommendation letter?",
            "Generate STAR-method answers for internship behavioral interviews.",
            "Write a follow-up email after an internship interview.",
            "Create a portfolio project plan for landing a UI/UX internship.",
            "Suggest AI/ML internship project ideas."
        ],
        subcategories: [
            {
                name: "Cold Email",
                description: "Perfect prompts to write cold emails that actually get responses.",
                prompts: [
                    "Write a cold email to a Berlin startup for a frontend internship. Keep it short, professional and mention I am looking for a Pflichtpraktikum.",
                    "Write a follow up email after sending an internship application with no response for 2 weeks.",
                ]
            },
            {
                name: "Cover Letter",
                description: "Prompts to write cover letters that stand out even with no experience.",
                prompts: [
                    "Write a cover letter for a frontend developer internship with no professional experience but strong personal projects.",
                    "Write a cover letter in German for a Praktikum position at a medium sized tech company in Germany.",
                ]
            },
            {
                name: "Resume",
                description: "Prompts to improve and tailor your resume for any job application.",
                prompts: [
                    "Rewrite my resume summary to sound more confident and professional as a frontend developer with UI/UX experience.",
                    "Write 3 strong bullet points for my experience as a UI/UX design intern at a tech company using action verbs."
                ] 
            },
            {
                name: "Interview Prep",
                description: "Use these prompts to prepare for internship interviews and practice common questions.",
                prompts: [
                    "Give me 10 common frontend developer internship interview questions with answers.",
                    "How should I answer 'Tell me about yourself' for a frontend internship interview as an international student in Germany?",
                ]
            }
        ]

    },
    {
        id: 2,
        category: "YouTube",
        emoji: "🎥",
        popularPrompts: [
            "Suggest the best YouTube niche ideas for beginners in 2026.",
            "Generate viral YouTube video ideas for my channel category.",
            "Create SEO-friendly YouTube titles, descriptions, and tags.",
            "Write an engaging YouTube video script with a strong hook.",
            "Suggest trending YouTube Shorts ideas for rapid channel growth.",
            "Generate thumbnail text ideas that improve click-through rate.",
            "Create a monthly content plan for a YouTube channel."
        ],
        subcategories: [
            {
                name: "Content Ideas",
                description: "Prompts to generate creative YouTube video ideas that audience will love.",
                prompts: [
                    "Give me 10 YouTube video ideas for a tech channel focused on beginner web development.",
                    "Generate 5 trending YouTube video ideas for a channel about productivity and studying.",
                ]
            },
            {
                name: "Video Script",
                description: "Use these prompts to write engaging YouTube video scripts that keep viewers hooked.",
                prompts: [
                    "Write a YouTube video script intro for a video about learning React as a beginner.",
                    "Write a 3 minute YouTube script about the top 5 VS Code extensions for developers.",
                ]
            }
        ]
    },
    {
        id: 3,
        category: "Writing",
        emoji: "✍️",
        popularPrompts: [
            "Write a professional blog post on any topic with an engaging introduction, clear structure, and strong conclusion.",
  
            "Generate creative storytelling ideas with plot twists, emotional depth, and memorable characters for fiction writing.",
            
            "Create SEO-optimized article content with headings, keywords, and reader-friendly formatting for websites or blogs.",
            
            "Write persuasive copy for advertisements, landing pages, or product descriptions that increases audience engagement and conversions.",
            
            "Generate social media captions, hooks, and content ideas tailored for Instagram, LinkedIn, Twitter, and Facebook audiences.",
            
            "Write professional emails, cover letters, proposals, and business communication with a polished and confident tone.",
            
            "Create YouTube scripts, podcast scripts, and video narration content with attention-grabbing openings and smooth storytelling."
        ],
        subcategories: [
            {
                name: "Blog Post",
                description: "Prompts to write clear, engaging blog posts on any topic.",
                prompts: [
                    "Write a blog post about why every developer should learn Figma.",
                    "Write an intro paragraph for a blog post about learning web development from scratch.",
                ]
            },
            {
                name: "LinkedIn Post",
                description: "Use these prompts to write LinkedIn posts that get more engagement and connections.",
                prompts: [
                    "Write a LinkedIn post about completing my first React project as a student developer.",
                    "Write a LinkedIn post announcing I am actively looking for a frontend internship in Germany.",
                ]
            }
        ]
    },
    {
        id: 4,
        category: "Productivity",
        emoji: "📈",
        popularPrompts: [
            "Create a daily productivity routine that improves focus, time management, and work-life balance.",
            
            "Generate a step-by-step plan to stop procrastination and build consistent work habits.",
            
            "Suggest productivity tools, apps, and workflows for students, creators, and professionals.",
            
            "Create a weekly schedule for managing studies, work, fitness, and personal goals effectively.",
            
            "Generate deep work strategies to stay focused and avoid distractions while working or studying.",
            
            "Write a goal-setting framework with actionable milestones and habit-tracking methods for long-term success.",
            
            "Suggest AI-powered productivity hacks for faster learning, content creation, and task automation."
        ],
        subcategories: [
            {
                name: "Daily Planning",
                description: "Prompts to plan your day, set priorities and stay focused.",
                prompts: [
                    "Help me create a daily schedule for a student who is studying full time and learning web development on the side.",
                    "Create a weekly study plan for learning React in 4 weeks with 2 hours per day.",
                ]
            }
        ]
    },
    {
        id: 5,
        category: "Learning",
        emoji: "📚",
        popularPrompts: [
            "Create a step-by-step roadmap to learn any skill faster and more effectively.",
            "Generate active learning techniques for improving memory and understanding.",
            "Suggest the best online resources, books, and courses for mastering a topic.",
            "Create a personalized study plan for consistent daily learning habits.",
            "Generate productivity and focus strategies for students and self-learners.",
            "Explain complex topics in a simple beginner-friendly way with examples.",
            "Suggest AI tools and apps that can improve learning and knowledge retention."
        ],
        subcategories: [
            {
                name: "Study Plan",
                description: "Prompts to create personalized study plans for learning new skills effectively.",
                prompts: [
                    "Create a 3 month roadmap to go from HTML CSS basics to getting a frontend internship.",
                    "What should I learn after HTML CSS and JavaScript to become a frontend developer?",
                ]
            }
        ]
    }
]

export default prompts