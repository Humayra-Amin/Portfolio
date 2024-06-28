import Image from 'next/image';
import gif from '../../../public/gif.gif';

const About = () => {
    return (
        <div>
            <div className="container mx-auto my-12">
                <div className="hero my-6">
                    <div className="hero-content flex-col lg:flex-row">
                        <Image src={gif} alt="Profile Picture" className="max-w-sm rounded-lg border-2 border-gray-800" />
                        <div className="lg:ml-6 text-center lg:text-left">
                            <h1 data-aos="fade-up" data-aos-duration="1000" className="text-5xl font-bold text-gray-700 playwrite2">About Me</h1>
                            <p className="py-6 merriweather font-medium">
                                Hello! I am Humayra Amin, a Developer who takes pride in crafting web experiences. 🚀 I&apos;ve sharpened my skills in HTML, CSS3, JavaScript, React.js, Node.js, and MongoDB, bringing a mix of creativity and technical precision to my work. Aside from my technical skills, I bring enthusiasm for teamwork and a belief in the power of communication. 📢 I can contribute to concept, design, and strategy, ensuring every product is not just functional but a joy to use. 🎨🤝 I would love to connect with like-minded professionals or anyone interested in discussing tech, design, or potential collaborations.
                            </p>
                        </div>
                    </div>
                </div>

                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6 p-6">
                    <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-800">
                        <h2 className="text-3xl font-bold mb-4 text-gray-700 playfair">Interests</h2>
                        <p className='merriweather'>Beyond coding, I have a keen interest in design, which helps me bridge the gap between development and user experience. I also enjoy staying updated with the latest trends in technology and continuously learning new things.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-800">
                        <h2 className="text-3xl font-bold mb-4 text-gray-700 playfair">Education</h2>
                        <p className='merriweather'>I hold a Bachelor&apos;s degree in Computer Science and Engineering from Chittagong Independent University, Chattogram, Bangladesh. During my studies, I focused on web development and participated in various projects and internships that solidified my interest and expertise in the field. I also completed a six-month MERN Stack web development course with Programming Hero to sharpen my skills further.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
