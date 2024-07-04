import React from 'react';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";

const Experience = () => {
    const experiences = [
        {
            title: "Web Developer",
            company: "ASCII System",
            location: "House - 100 (5th Floor), Road, 8 Hill View Rd, Chattogram 4203, Bangladesh.",
            startDate: "July 2023",
            endDate: "October 2023",
            description: [
                "Worked with the wider development team for making a proper website.",
                "Developed responsive web applications using Bootstrap and Laravel.",
                "Collaborated with team members on various projects."
            ]
        },
    ];

    return (
        <section id="experience" className="py-10">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl font-bold text-center text-gray-700 my-12 playwrite2 mt-20">Experience</h2>
                <div data-aos="zoom-in" data-aos-duration="1000" className="grid gap-8 mt-10 border border-gray-600 shadow-lg p-4 bg-gray-400 rounded-2xl">
                    {experiences.map((exp, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-start md:items-center border-b pb-4 leading-10">
                            <div className="md:w-1/5 text-center md:text-left mb-4 md:mb-0">
                                <FaBriefcase className="text-4xl lg:ml-14 text-black mb-2" />
                                <p className="text-black text-2xl font-semibold playfair">{exp.company}</p>
                            </div>
                            <div className="md:w-4/5">
                                <p className="text-3xl merriweather font-semibold mb-2">{exp.title}</p>
                                <p className="text-white merriweather flex items-center">     <FaLocationDot className="mr-2 text-black" />
                                    {exp.location}
                                </p>
                                <p className="text-white merriweather flex items-center">
                                    <FaCalendarAlt className="mr-2 text-black" /> {exp.startDate} - {exp.endDate}
                                </p>
                                <ul className="text-white merriweather mt-2 list-disc ml-10">
                                    {exp.description.map((desc, index) => (
                                        <li key={index}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
