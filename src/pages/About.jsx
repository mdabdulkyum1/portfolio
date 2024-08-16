
import Footer from './../components/Footer';

const About = () => {
    return(<>
        <div className="bg-lightgray py-6">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Profile Summary */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-navyblue mb-4">About Me</h2>
                        <p className="text-lg text-steel-gray">
                        Hi , I`m Md Abdul Kyum --- <strong>Jr. Font End Developer.</strong> I am passionate about web development and enjoy creating interactive and user-friendly experiences. With a background in [mention any relevant experience or education], I am skilled in [mention relevant skills like HTML, CSS, JavaScript, React, etc.]. I am dedicated to continuous learning and exploring new technologies to enhance my development skills. Outside of coding, I enjoy [mention hobbies or interests]. Connect with me to discuss web projects, tech trends, or anything web-related!
                        </p>
                    </section>

                    {/* Skills Section */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-gray mb-4">Skills</h2>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            <li className="bg-rich-blue shadow-md rounded-lg p-4 text-slate-gray">HTML5</li>
                            <li className="bg-rich-blue shadow-md rounded-lg p-4 text-slate-gray">CSS3</li>
                            <li className="bg-rich-blue shadow-md rounded-lg p-4 text-slate-gray">JavaScript</li>
                            <li className="bg-rich-blue shadow-md rounded-lg p-4 text-slate-gray">React</li>
                            <li className="bg-rich-blue shadow-md rounded-lg p-4 text-slate-gray">Tailwind CSS</li>
                            <li className="bg-rich-blue shadow-md rounded-lg p-4 text-slate-gray">Git</li>
                        </ul>
                    </section>
                </div>
        </div>
        <Footer />
    </>
    );
}

export default About;