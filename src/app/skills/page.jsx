
const skills = [
    { title: "HTML", description: "Advanced-level proficiency in HTML for web development", icon: "🌐" },
    { title: "CSS", description: "Advanced-level proficiency in CSS for web development", icon: "🎨" },
    { title: "JavaScript", description: "Good understanding and application of JavaScript ES6+ features", icon: "💻" },
    { title: "React", description: "Proficient in building SPAs using React", icon: "⚛️" },
    { title: "Next.js", description: "Basic proficiency in server-side rendering with Next.js", icon: "🌐"},
    { title: "Tailwind CSS", description: "Advanced skills in responsive design using Tailwind CSS", icon: "🎨" },
    { title: "Node.js", description: "Competent in back-end development with Node.js", icon: "🟢" },
    { title: "Git & GitHub", description: "Advanced proficiency in version control using Git and GitHub", icon: "🐙" },
    { title: "Firebase", description: "Advanced expertise in using Firebase for backend services and hosting", icon: "🔥" },
    { title: "Netlify", description: "Advanced skills in deploying web applications using Netlify", icon: "🌐" },
    { title: "Vercel", description: "Advanced experience in deploying serverless functions and frontend applications with Vercel", icon: "🚀" },
    { title: "MongoDB", description: "Intermediate knowledge in managing databases with MongoDB", icon: "🍃" },
];

const Skills = () => {
    // const getColor = (range) => {
    //     switch (range) {
    //         case "Beginner":
    //             return "bg-red-300";
    //         case "Intermediate":
    //             return "bg-yellow-300";
    //         case "Advanced":
    //             return "bg-blue-500";
    //         case "Expert":
    //             return "bg-green-500";
    //         default:
    //             return "bg-gray-300";
    //     }
    // };

    // const getProgressValue = (range) => {
    //     switch (range) {
    //         case "Beginner":
    //             return 20;
    //         case "Intermediate":
    //             return 50;
    //         case "Advanced":
    //             return 80;
    //         case "Expert":
    //             return 100;
    //         default:
    //             return 0;
    //     }
    // };

    return (
        <div className="container mx-auto p-6 min-h-screen">
            <h1 data-aos="fade-up" data-aos-duration="1000" className="text-5xl font-bold text-center text-gray-700 my-12 playwrite2 mt-16">My Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-400 p-6 rounded-lg">
                {skills.map((skill, index) => (
                    <div data-aos="zoom-out" data-aos-duration="1000" key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center border-2 border-gray-700">
                        <div className="text-6xl mb-4">{skill.icon}</div>
                        <h2 className="text-2xl font-bold text-gray-700 mb-4 playfair">{skill.title}</h2>
                        <p className="text-gray-700 text-center merriweather">{skill.description}</p>
                        {/* <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
                            <div
                                className={`h-4 rounded-full ${getColor(skill.knowledgeRange)}`}
                                style={{ width: `${getProgressValue(skill.knowledgeRange)}%` }}
                            ></div>
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
