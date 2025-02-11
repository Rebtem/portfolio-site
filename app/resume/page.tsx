import { FC } from "react";



const Resume: FC = () => {
  return (
    <section id="resume" className="py-20 text-center grid place-items-center min-h-screen">
      <div className="w-[70%]">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Resume</h2>
        <div className="border-b-2 w-16 mx-auto my-4"></div>
        <p className="text-lg">Motivated Junior Software Developer with a Bachelors degree in Computer Engineering.
        Passionate Frontend Developer with experience in building dynamic and responsive web applications using Next.js, React, TypeScript, and Tailwind CSS. Skilled in Supabase for database management and authentication. Adept at creating seamless user experiences and optimizing performance. 
        Seeking opportunities to contribute innovative solutions to development teams.</p>
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="text-xl font-bold"> Master Degree</h4>
              <p className="text-sm">Computer Engineering - LAUTECH</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">2024 -Present</p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="text-xl font-bold"> Bachelors Degree</h4>
              <p className="text-sm">Computer Engineering - LAUTECH</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">2009 - 2014 </p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="text-xl font-bold"> Skills</h4>
              <p className="text-sm">Frontend Development</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">✔️ Next.js, React.js, TypeScript </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">✔️ Tailwind CSS, CSS3, SCSS</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">✔️ JavaScript (ES6+), HTML5</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">✔️ Responsive Web Design</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">✔️ API Integration</p>                       
                    </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Professional Experience</h3>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="text-xl font-bold">Software Developer</h4>
              <p className="text-sm">Freelancer</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">2023 - Present</p>
            </div>

            
            <h3 className="text-2xl font-semibold mb-4">Projects</h3>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="text-xl font-bold">Job Board</h4>
              <p className="text-sm">(Next.js, TypeScript, Supabase</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Built a job board that connect employee and employers together</p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="text-xl font-bold">Portfolio Website</h4>
              <p className="text-sm">(Next.js, TypeScript, Supabase</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Design and deploy a personal portfolio with dark mode and smooth animations.
                </p>
            </div>
            



          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

