
const skills = [
    { title: "HTML", description: "Strong foundation in HTML for web development", icon: "🌐", knowledgeRange: "Expert" },
    { title: "CSS", description: "Strong foundation in CSS for web development", icon: "🎨", knowledgeRange: "Expert" },
    { title: "JavaScript", description: "Expertise in JavaScript ES6+", icon: "💻", knowledgeRange: "Intermediate" },
    { title: "React", description: "Experienced in building SPAs using React", icon: "⚛️", knowledgeRange: "Intermediate" },
    { title: "Next.js", description: "Proficient in server-side rendering with Next.js", icon: "🌐", knowledgeRange: "Beginner" },
    { title: "Tailwind CSS", description: "Skilled in responsive design using Tailwind CSS", icon: "🎨", knowledgeRange: "Advanced" },
    { title: "Node.js", description: "Back-end development with Node.js", icon: "🟢", knowledgeRange: "Advanced" },
    { title: "Git & GitHub", description: "Version control using Git and GitHub", icon: "🐙", knowledgeRange: "Advanced" },
    { title: "Firebase", description: "Proficient in Firebase for backend services and hosting", icon: "🔥", knowledgeRange: "Advanced" },
    { title: "Netlify", description: "Skilled in deploying web applications using Netlify", icon: "🌐", knowledgeRange: "Advanced" },
    { title: "Vercel", description: "Experienced in deploying serverless functions and frontend applications with Vercel", icon: "🚀", knowledgeRange: "Advanced" },
    { title: "MongoDB", description: "Knowledgeable in MongoDB for database management", icon: "🍃", knowledgeRange: "Intermediate" },
];

const Skills = () => {
    const getColor = (range) => {
        switch (range) {
            case "Beginner":
                return "bg-red-300";
            case "Intermediate":
                return "bg-gray-300";
            case "Advanced":
                return "bg-blue-500";
            case "Expert":
                return "bg-green-500";
            default:
                return "bg-gray-300";
        }
    };

    const getProgressValue = (range) => {
        switch (range) {
            case "Beginner":
                return 20;
            case "Intermediate":
                return 50;
            case "Advanced":
                return 80;
            case "Expert":
                return 100;
            default:
                return 0;
        }
    };

    return (
        <div className="container mx-auto p-6 min-h-screen">
            <h1 data-aos="fade-up" data-aos-duration="1000" className="text-5xl font-bold text-center text-gray-700 my-12 playfair">My Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-400 p-6 rounded-lg">
                {skills.map((skill, index) => (
                    <div data-aos="zoom-out" data-aos-duration="1000" key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center border-2 border-gray-700">
                        <div className="text-6xl mb-4">{skill.icon}</div>
                        <h2 className="text-2xl font-bold text-gray-700 mb-4 playfair">{skill.title}</h2>
                        <p className="text-gray-700 text-center merriweather">{skill.description}</p>
                        <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
                            <div
                                className={`h-4 rounded-full ${getColor(skill.knowledgeRange)}`}
                                style={{ width: `${getProgressValue(skill.knowledgeRange)}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
