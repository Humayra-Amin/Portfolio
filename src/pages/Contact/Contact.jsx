// src/pages/Contact/Contact.jsx
"use client";
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        services: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Replace console.log with actual form submission logic
    };

    return (
        <div className="container mx-auto p-6 min-h-screen">
            <h1 data-aos="fade-up" data-aos-duration="1000" className="text-5xl font-bold text-center text-yellow-700 my-12 playfair">Let's Work Together</h1>
            <p className="text-lg text-center text-gray-700 mb-12 playfair font-semibold">
                If you want to work with me, or have any questions, inquiries, or just want to get in touch, feel free to fill out the form below. I look forward to hearing from you!
            </p>
            <div className="flex justify-center items-center">
                <div data-aos="flip-down" data-aos-duration="1000" className="bg-white p-8 shadow-2xl w-full max-w-lg border-2 border-yellow-700 rounded-xl">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 merriweather">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 merriweather">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-700 merriweather">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 merriweather">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 merriweather">Select Services</label>
                            <select
                                name="services"
                                value={formData.services}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                required
                            >
                                <option value="">Select a service...</option>
                                <option value="Frontend Service">Frontend Service</option>
                                <option value="Backend Service">Backend Service</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700 merriweather">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="px-4 py-2 bg-yellow-700 text-white rounded hover:bg-yellow-800"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
