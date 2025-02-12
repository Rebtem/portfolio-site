import Image from "next/image";

const About = () => {
    return (
        <section id="about" className="py-20 text-center grid place-items-center min-h-screen">
            <div className="w-full max-w-3xl px-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">About</h2>
                <div className="border-b-2 w-16 mx-auto my-4"></div>
               
                <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
                    I am a passionate and dedicated software developer with a strong background in building modern web applications. 
                    With a focus on clean code, responsive design, and efficient problem-solving, I create digital experiences that are both functional and visually appealing.
                </p>

                <h3 className="text-2xl sm:text-3xl lg:text-5xl mt-6 mb-10 font-semibold">Web Developer</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                    <div className="flex justify-center">
                        <Image 
                            src="/5.png" 
                            alt="Profile"
                            width={250} 
                            height={250} 
                            className="rounded-lg shadow-lg w-full max-w-[250px] h-auto object-cover"
                        />
                    </div>

                    <div className="text-left space-y-4">
                        <p><strong>Phone: </strong> +234 8063 064740</p>
                        <p><strong>City: </strong> Abeokuta</p>
                        <p><strong>Degree:</strong> Computer Engineering</p>
                        <p><strong>Email:</strong> rebtem70@gmail.com</p>
                    </div>
                    
                    <div className="text-left space-y-4">
                        <p><strong>Skills</strong></p>
                        <p>Frontend Development:</p>
                        <p>✔️ Next.js, React.js, TypeScript</p>
                        <p>✔️ Tailwind CSS, CSS3, SCSS</p>
                        <p>✔️ JavaScript (ES6+), HTML5</p>
                        <p>✔️ Responsive Web Design</p>
                        <p>✔️ API Integration</p>
                       
                    </div>
                </div>

                <p className="text-center text-gray-600 dark:text-gray-300 mt-6">
                    I thrive on solving complex problems and continually learning new technologies. 
                    My goal is to contribute to innovative projects that make a positive impact. 
                    Lets work together to bring your ideas to life!
                </p>
            </div>
        </section>
    );
};

export default About;
