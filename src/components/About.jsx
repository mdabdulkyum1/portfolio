

const About = () => {
    return(<>
        <div className="bg-lightgray py-6">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Skills Section */}
                    <section className="mb-12">
    <h2 className="text-3xl font-bold text-slate-gray mb-8 text-center">My Skills</h2>
    
    {/* Frontend Skills */}
    <h3 className="text-2xl font-semibold text-slate-gray mb-4 text-center border-b-2 border-rich-blue inline-block">Frontend</h3>
    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
        <li className="bg-rich-blue shadow-md rounded-lg p-4 text-slate-gray flex items-center justify-center">
            <i className="fab fa-html5 text-2xl mr-2"></i>
            HTML5
        </li>
        <li className="bg-rich-blue shadow-md rounded-lg p-4 text-slate-gray flex items-center justify-center">
            <i className="fab fa-css3-alt text-2xl mr-2"></i>
            CSS3
        </li>
        <li className="bg-rich-blue shadow-md rounded-lg p-4 text-slate-gray flex items-center justify-center">
            <i className="fab fa-js text-2xl mr-2"></i>
            JavaScript
        </li>
        <li className="bg-rich-blue shadow-md rounded-lg p-4 text-slate-gray flex items-center justify-center">
            <i className="fab fa-react text-2xl mr-2"></i>
            React
        </li>
        <li className="bg-rich-blue shadow-md rounded-lg p-4 text-slate-gray flex items-center justify-center">
            <i className="fas fa-code text-2xl mr-2"></i>
            Tailwind CSS
        </li>
        <li className="bg-rich-blue shadow-md rounded-lg p-4 text-slate-gray flex items-center justify-center">
            <i className="fab fa-git-alt text-2xl mr-2"></i>
            Git
        </li>
    </ul>
    {/* Backend Skills */}
    <h3 className="text-2xl font-semibold text-slate-gray mb-4 text-center border-b-2 border-rich-blue inline-block">Backend</h3>
    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
        <li className="bg-rich-blue shadow-md rounded-lg p-4 text-slate-gray flex items-center justify-center">
            <i className="fas fa-server text-2xl mr-2"></i>
            Node.js
        </li>
        <li className="bg-rich-blue shadow-md rounded-lg p-4 text-slate-gray flex items-center justify-center">
            <i className="fas fa-database text-2xl mr-2"></i>
            MongoDB
        </li>
    </ul>



   {/* CMS Skills */}
   <h3 className="text-2xl font-semibold text-slate-gray mb-4 text-center border-b-2 border-rich-blue inline-block">CMS</h3>
    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
        <li className="bg-rich-blue shadow-md rounded-lg p-4 text-slate-gray flex items-center justify-center">
            <i className="fab fa-wordpress text-2xl mr-2"></i>
            WordPress
        </li>
        <li className="bg-rich-blue shadow-md rounded-lg p-4 text-slate-gray flex items-center justify-center">
            <i className="fab fa-shopify text-2xl mr-2"></i>
            Shopify
        </li>
    </ul>






    {/* Other Skills */}
    <h3 className="text-2xl font-semibold text-slate-gray mb-4 text-center border-b-2 border-rich-blue inline-block">Others</h3>
    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <li className="bg-rich-blue shadow-md rounded-lg p-4 text-slate-gray flex items-center justify-center">
            <i className="fab fa-github text-2xl mr-2"></i>
            GitHub
        </li>
        <li className="bg-rich-blue shadow-md rounded-lg p-4 text-slate-gray flex items-center justify-center">
            <i className="fab fa-bootstrap text-2xl mr-2"></i>
            Bootstrap
        </li>
    </ul>
                    </section>
                     {/* Profile Summary */}
                     <section className="mb-12">
                        <h2 className="text-3xl font-bold text-navyblue mb-4">About Me</h2>
                        <p className="text-lg text-steel-gray">
                        Hi , I`m Md Abdul Kyum --- <strong  className="text-slate-gray">Jr. Font End Developer.</strong> I am passionate about web development and enjoy creating interactive and user-friendly experiences. With a background in [mention any relevant experience or education], I am skilled in [mention relevant skills like HTML, CSS, JavaScript, React, etc.]. I am dedicated to continuous learning and exploring new technologies to enhance my development skills. Outside of coding, I enjoy [mention hobbies or interests]. Connect with me to discuss web projects, tech trends, or anything web-related!
                        </p>
                    </section>
                </div>
        </div>
    </>
    );
}

export default About;