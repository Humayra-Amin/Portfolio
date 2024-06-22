const projects = [
    {
        title: "ArabianDunes Tourism Management",
        description: "This project is about exploring a curated list of exotic middle east country tourist spots.The platform aims to offer a seamless and informative experience for users interested in exploring the rich cultural heritage and natural beauty of the Middle East.",
        liveLink: "https://tourism-a10-client.web.app/",
        clientLink: "https://github.com/Humayra-Amin/ArabianDunes-Tourism-Management-client",
        serverLink: "https://github.com/Humayra-Amin/ArabianDunes-Tourism-Management-server",
        image: "https://i.ibb.co/gzpnChY/project1.png"
    },
    {
        title: "Study Bizz",
        description: "The Study Bizz is a web application designed to facilitate collaborative learning experiences for students. It provides a virtual space where users can create, manage, and participate in group study sessions, share resources, and engage in interactive learning activities",
        liveLink: "https://online-group-study-d5764.web.app/",
        clientLink: "https://github.com/Humayra-Amin/Online-Group-Study-client",
        serverLink: "https://github.com/Humayra-Amin/Online-Group-Study-server",
        image: "https://i.ibb.co/GWmYpr3/project2.png"
    },
    {
        title: "Paw Pets",
        description: "This project is a web application for managing pet adoption and donation campaigns. It includes user authentication, pet management, donation campaigns, user dashboard and an admin dashboard",
        liveLink: "https://pet-adoption-a621f.web.app/",
        clientLink: "https://github.com/Humayra-Amin/Pet-Adoption-Platform-client",
        serverLink: "https://github.com/Humayra-Amin/Pet-Adoption-Platform-server",
        image: "https://i.ibb.co/5Rwy8Fc/project3.png"
    }
];


const Projects = () => {
    return (
        <div>
            <div className="container mx-auto p-6">
                <h1 data-aos="fade-up" data-aos-duration="1000" className="text-5xl font-bold text-center mb-8 text-yellow-700 playfair">My Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-yellow-400 p-6 rounded-lg">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:-translate-y-2 hover:shadow-2xl border-2 border-yellow-700">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover border border-yellow-600 rounded-t-lg"/>
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-2 text-yellow-700 playfair">{project.title}</h2>
                                <p className="text-gray-700 mb-4 merriweather text-[14px]">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-white  font-semibold hover:text-black border-2 border-yellow-700 p-1 rounded-lg bg-yellow-700">Live Demo</a>
                                    <div className="flex space-x-4">
                                        <a href={project.clientLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577 0-.285-.01-1.04-.016-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.204.085 1.836 1.236 1.836 1.236 1.07 1.834 2.808 1.304 3.494.997.108-.775.42-1.305.762-1.605-2.666-.3-5.467-1.334-5.467-5.93 0-1.31.468-2.381 1.236-3.221-.124-.302-.536-1.522.116-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.403 1.02.004 2.047.137 3.005.403 2.29-1.552 3.296-1.23 3.296-1.23.654 1.654.242 2.874.118 3.176.77.84 1.234 1.911 1.234 3.221 0 4.609-2.805 5.625-5.476 5.92.432.373.817 1.106.817 2.229 0 1.609-.015 2.906-.015 3.301 0 .32.19.695.801.577C20.565 21.798 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </a>
                                        <a href={project.serverLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577 0-.285-.01-1.04-.016-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.204.085 1.836 1.236 1.836 1.236 1.07 1.834 2.808 1.304 3.494.997.108-.775.42-1.305.762-1.605-2.666-.3-5.467-1.334-5.467-5.93 0-1.31.468-2.381 1.236-3.221-.124-.302-.536-1.522.116-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.403 1.02.004 2.047.137 3.005.403 2.29-1.552 3.296-1.23 3.296-1.23.654 1.654.242 2.874.118 3.176.77.84 1.234 1.911 1.234 3.221 0 4.609-2.805 5.625-5.476 5.92.432.373.817 1.106.817 2.229 0 1.609-.015 2.906-.015 3.301 0 .32.19.695.801.577C20.565 21.798 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
                                            </svg>
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
