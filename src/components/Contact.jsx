// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Contact = () => {

    return (
        <>
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-navyblue mb-4">Contact Me</h2>
                <p className="text-lg text-steel-gray mb-4">
                    You can reach out to me via email or connect with me on social media.
                </p>
                <ul className="flex space-x-4 mb-8">
                    <li>
                        <a href="mailto:kyummdabdul@gmail.com" className="text-skyblue hover:text-goldenyellow">
                            Email
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/your-profile" className="text-skyblue hover:text-goldenyellow">
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/your-twitter" className="text-skyblue hover:text-goldenyellow">
                            Twitter
                        </a>
                    </li>
                </ul>

        
            </section>
        </>
    );
}

export default Contact;
