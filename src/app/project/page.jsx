import { FaGithub } from "react-icons/fa";

const projects = [
    {
        title: "ArabianDunes Tourism Management",
        description: "This project is about exploring a curated list of exotic middle east country tourist spots.The platform aims to offer a seamless and informative experience for users interested in exploring the rich cultural heritage and natural beauty of the Middle East.",
        liveLink: "https://tourism-a10-client.web.app/",
        clientLink: "https://github.com/Humayra-Amin/ArabianDunes-Tourism-Management-client",
        serverLink: "https://github.com/Humayra-Amin/ArabianDunes-Tourism-Management-server",
        image: "https://i.ibb.co/gzpnChY/project1.png",
        skills: ["React", "Node.js", "Express", "MongoDB", "Firebase"]
    },
    {
        title: "Study Bizz",
        description: "The Study Bizz is a web application designed to facilitate collaborative learning experiences for students. It provides a virtual space where users can create, manage, and participate in group study sessions, share resources, and engage in interactive learning activities.",
        liveLink: "https://online-group-study-d5764.web.app/",
        clientLink: "https://github.com/Humayra-Amin/Online-Group-Study-client",
        serverLink: "https://github.com/Humayra-Amin/Online-Group-Study-server",
        image: "https://i.ibb.co/GWmYpr3/project2.png",
        skills: ["React", "Node.js", "Express", "MongoDB", "Firebase"]
    },
    {
        title: "Paw Pets",
        description: "This project is a web application for managing pet adoption and donation campaigns. It includes user authentication, pet management, donation campaigns, user dashboard and an admin dashboard.",
        liveLink: "https://pet-adoption-a621f.web.app/",
        clientLink: "https://github.com/Humayra-Amin/Pet-Adoption-Platform-client",
        serverLink: "https://github.com/Humayra-Amin/Pet-Adoption-Platform-server",
        image: "https://i.ibb.co/5Rwy8Fc/project3.png",
        skills: ["React", "Node.js", "Express", "MongoDB", "Firebase"]
    }
];

const Projects = () => {
    return (
        <div>
            <div className="container mx-auto p-6">
                <h1 data-aos="fade-up" data-aos-duration="1000" className="text-5xl font-bold text-center mb-8 text-gray-700 playwrite2 mt-20">Recent Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-400 p-6 rounded-lg">
                    {projects.map((project, index) => (
                        <div data-aos="flip-left" data-aos-duration="1000" key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:-translate-y-2 hover:shadow-2xl border-2 border-gray-700">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover border border-gray-600 rounded-t-lg" />
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-2 text-gray-700 playfair">{project.title}</h2>
                                <p className="text-gray-700 mb-4 merriweather text-[14px]">{project.description}</p>
                                <div className="mb-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.skills.map((skill, index) => (
                                            <span key={index} className="px-2 py-1 border border-gray-500 bg-gray-400 rounded-lg text-black merriweather text-[14px]">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-black border-2 border-gray-700 p-1 rounded-lg bg-gray-700 playfair">Live Demo</a>
                                    <div className="flex space-x-4">
                                        <a href={project.clientLink} target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-black border-2 p-1 rounded-xl border-gray-500 bg-gray-300 hover:text-gray-700 transform transition-transform duration-300 hover:translate-y-1">
                                            <FaGithub className="w-6 h-6" />
                                        </a>
                                        <a href={project.serverLink} target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-black border-2 p-1 rounded-xl border-gray-500 bg-gray-300 hover:text-gray-700 transform transition-transform duration-300 hover:translate-y-1">
                                            <FaGithub className="w-6 h-6" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
