import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Footer from './Footer';

const Faq = () => {
    // Track each question's open/close state
    const [openState, setOpenState] = useState({
        question1: false,
        question2: false,
        question3: false,
        question4: false,
        question5: false,
    });

    const toggleAnswer = (question) => {
        setOpenState((prevState) => ({
            ...prevState,
            [question]: !prevState[question],
        }));
    };

    return (
        <>
        <div className="mt-16 px-6 flex flex-col md:flex-row items-center justify-between">
            {/* FAQ Section Header */}
            <div className="mb-10 md:mb-0">
                <h2 className="text-red-600 font-bold text-2xl p-2">FAQ</h2>
                <h1 className="text-3xl font-bold">Got Questions?</h1>
                <p className="text-gray-400">
                    If you have any other questions, feel free to get in touch at support@skillup.so
                </p>
                <button className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg">Contact Us</button>
            </div>

            {/* FAQ Items */}
            <div className="flex flex-col w-full sm:w-[600px] mt-20">
                {['question1', 'question2', 'question3', 'question4', 'question5'].map((question, idx) => (
                    <div
                        key={question}
                        className="bg-white shadow-md rounded-lg p-4 mb-4"
                    >
                        <div className="flex justify-between items-center">
                            <h1 className="font-bold text-xl">
                                {idx === 0
                                    ? 'What is SkillUp?'
                                    : idx === 1
                                    ? 'What Services Does SkillUp Offer?'
                                    : idx === 2
                                    ? 'What Sets SkillUp Apart?'
                                    : idx === 3
                                    ? 'Who Can Benefit from SkillUp\'s Services?'
                                    : 'How Can I Contact SkillUp?'}
                            </h1>
                            <div onClick={() => toggleAnswer(question)} className="cursor-pointer">
                                {openState[question] ? (
                                    <FaMinus className="text-2xl text-red-600" />
                                ) : (
                                    <FaPlus className="text-2xl text-red-600" />
                                )}
                            </div>
                        </div>

                        {/* Answer Section */}
                        <div
                            className={`mt-4 text-gray-600 transition-all duration-300 ${openState[question] ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}
                        >
                            {question === 'question1' && (
                                <p>
                                    SkillUp is a premier technology service provider based in Jijiga, Somali Region, Ethiopia,
                                    founded in September 2022. We specialize in offering a comprehensive range of digital solutions,
                                    including web development, software development, UI/UX design, social media management, marketing
                                    strategies, and cybersecurity services. Our mission is to empower businesses and individuals by
                                    delivering innovative and affordable technology solutions that drive growth and enhance operational
                                    effectiveness.
                                </p>
                            )}
                            {question === 'question2' && (
                                <p>
                                    SkillUp offers a variety of technology services, including:
                                    <ul className="list-disc pl-5">
                                        <li>Web Development: Custom websites tailored to your needs.</li>
                                        <li>Software Development: Innovative solutions to streamline operations.</li>
                                        <li>UI/UX Design: User-centric digital experiences.</li>
                                        <li>Social Media Management: Enhance your online presence.</li>
                                        <li>Marketing Strategy: Customized plans to grow your brand.</li>
                                        <li>Cybersecurity Services: Advanced protection for your assets.</li>
                                        <li>Business Development Solutions: Helping businesses scale effectively.</li>
                                    </ul>
                                </p>
                            )}
                            {question === 'question3' && (
                                <p>
                                    SkillUp differentiates itself by providing comprehensive, end-to-end solutions that blend local
                                    market expertise with a focus on innovation and quality. Our success with 65 brands and 180 customers
                                    in just two years showcases our ability to deliver high-quality, customized services at competitive
                                    prices.
                                </p>
                            )}
                            {question === 'question4' && (
                                <p>
                                    SkillUp serves businesses in all industries, startups, educational institutions, and government
                                    agencies. Whether you need to establish a digital presence, secure your online infrastructure, or
                                    enhance your business with strategic technology solutions, we provide tailored services to meet your
                                    needs.
                                </p>
                            )}
                            {question === 'question5' && (
                                <p>
                                    Getting started with SkillUp is effortless. Simply visit our website to fill out the contact form,
                                    or connect with us directly via phone or email. Our team will arrange a consultation to discuss your
                                    needs, understand your goals, and outline the best solutions to help you succeed.
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <Footer />
        </>
    );
};

export default Faq;
