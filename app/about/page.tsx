const About = () => {
    return (
        <section id="about" className="py-20 text-center grid place-items-center min-h-screen">
            <div className="w-[70%]">
                <h2 className="text-8x1 font-bold lg:text-[30px]">About</h2>
                <div className="border-b-2 w-16 mx-auto my-4"></div>
               
                <p className="text-center text-gray-600 dark:text-gray-300 mt-4"> I am a passionate and dedicated software
                    developer with a strong background in building modern web applications with a focus on clean code,
                    responsive design and efficient problem-solving, I create digital experience that are both
                    functional and visually appealing.</p>

                <h3 className="text-5x1 mt-6 mb-10 font-semibold">Web Developer</h3>
                <div className="grid grid-cols-3 gap-2 mt-4">
                    <div> <img src="/5.png" alt="Profile"
                        width={250} height={250} className="rounded-lg shadow-lg w-50 h-60 object-cover ml-5" /></div>

                    <div className="text-left space-y-8">

                        <p ><strong>Phone: </strong> +234 8063 064740</p>
                        <p><strong>City:  </strong> Abeokuta</p>
                    </div>
                    <div className="text-left space-y-8">

                        <p><strong>Degree:</strong> Computer Engineering</p>
                        <p><strong>Email:</strong> rebtem70@gmail.com</p>
                    </div>
                </div>
                <p className="text-center text-gray-600 dark:text-gray-300 mt-6">
                    I thrive on solving complex problems and continually learning new technologies. My goal is to contibute to
                    innovative projects that make a positive impact. Let's work together to bring your ideas to life!
                </p>
            </div>
        </section>
    );

};
export default About;