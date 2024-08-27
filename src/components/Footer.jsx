
    const Footer = () => {
    return (
        <footer className="bg-t-blue py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo or Name */}
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-steel-gray text-2xl font-bold shadow-sm shadow-gray-400">Md Abdul Kyum</h2>
                        <p className="text-steel-gray">Jr. Frontend Developer</p>
                    </div>

                    {/* Navigation Links */}
                    <div className="mb-4 md:mb-0">
                        <ul className="flex space-x-6">
                            <li>
                                <a href="#about" className="text-slate-gray hover:text-t-flax">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#skills" className="text-slate-gray hover:text-t-flax">
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-slate-gray hover:text-t-flax">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <ul className="flex space-x-4">
                            <li>
                                <a href="https://www.linkedin.com" className="text-slate-gray hover:text-t-flax">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com" className="text-slate-gray hover:text-t-flax">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com" className="text-slate-gray hover:text-t-flax">
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Legal Links */}
                <div className="mt-8 text-center text-steel-gray text-sm">
                    <p>&copy; 2024 Md Abdul Kyum. All rights reserved.</p>
                    <p>
                        <a href="/privacy-policy" className="hover:text-t-flax">
                            Privacy Policy
                        </a>{' '}
                        |{' '}
                        <a href="/terms-of-service" className="hover:text-t-flax">
                            Terms of Service
                        </a>
                    </p>
                </div>
            </div>
            <main>
        </main>
        </footer>
    );
};

export default Footer;