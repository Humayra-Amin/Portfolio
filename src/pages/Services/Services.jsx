
const services = [
    {
        category: "Frontend Services",
        services: [
            { title: "Responsive Web Design", description: "Creating friendly designs that work on any device.", icon: "📱" },
            { title: "Single Page Applications", description: "Building SPAs using React and Next.js.", icon: "⚛️" },
            { title: "UI/UX Design", description: "Designing intuitive and user-friendly interfaces.", icon: "🎨" },
            { title: "Performance Optimization", description: "Optimizing web applications for speed and performance.", icon: "🚀" },
        ],
    },
    {
        category: "Backend Services",
        services: [
            { title: "API Development", description: "Creating RESTful.", icon: "🔗" },
            { title: "Database Management", description: "Managing databases using MongoDB", icon: "🗄️" },
            { title: "Authentication & Authorization", description: "Implementing secure authentication and authorization.", icon: "🔒" },
            { title: "Serverless Functions", description: "Building serverless functions with Vercel.", icon: "☁️" },
        ],
    },
];

const Services = () => {
    return (
        <div className="container mx-auto p-6 min-h-screen">
            <h1 data-aos="fade-up" data-aos-duration="1000" className="text-5xl font-bold text-center text-gray-700 my-12 playfair">Services I Provide</h1>
            {services.map((category, idx) => (
                <div key={idx} className="mb-12">
                    <h2 className="text-3xl font-bold text-center text-gray-700 mb-6 underline playfair">{category.category}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {category.services.map((service, index) => (
                            <div data-aos="slide-up" data-aos-duration="1000" key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-3xl transition-shadow duration-300 flex flex-col items-center border-2 border-gray-600">
                                <div className="text-6xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold text-gray-700 mb-4 merriweather">{service.title}</h3>
                                <p className="text-gray-700 text-center merriweather">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Services;
