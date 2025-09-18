import React from 'react';

const ContactUs = () => {
    return (
        <section className="bg-neutral-50 py-16">
            <div className="container mx-auto px-4">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#AA8265] instrument-serif-regular italic mb-6">
                    Get in Touch
                </h2>
                <p className="text-center text-[#6B6B6B] max-w-xl mx-auto mb-12 instrument-sans">
                    Have questions about our men’s formal wear collection? We’d love to
                    hear from you. Fill out the form below and our team will get back to
                    you soon.
                </p>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white shadow-lg rounded-2xl p-8">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Full Name"
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#AA8265]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your Email Address"
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#AA8265]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    placeholder="Write your message..."
                                    rows="5"
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#AA8265]"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#AA8265] text-white py-3 rounded-lg font-semibold hover:bg-black transition-all duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col justify-center bg-neutral-100 rounded-2xl p-8 shadow-lg">
                        <h3 className="text-2xl font-bold text-[#AA8265] mb-6">
                            Contact Information
                        </h3>
                        <p className="text-gray-700 mb-4">
                            📍 <strong>Address:</strong>
                            House #12, Road #5, Gulshan, Dhaka, Bangladesh
                        </p>
                        <p className="text-gray-700 mb-4">
                            📞 <strong>Phone:</strong> +880 1234-567890
                        </p>
                        <p className="text-gray-700 mb-4">
                            ✉️ <strong>Email:</strong> support@manstyleco.com
                        </p>
                        <p className="text-gray-700">
                            🕒 <strong>Working Hours:</strong> Sat–Thu: 10AM – 8PM
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;