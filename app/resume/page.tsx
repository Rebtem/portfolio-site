import { FC } from "react";

const Resume: FC = () => {
  return (
    <section
      id="resume"
      className="py-20 text-center grid place-items-center min-h-screen"
    >
      <div className="w-[70%]">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Resume
        </h2>
        <div className="border-b-2 w-16 mx-auto my-4"></div>
        <p>
          📧 rebtem70@gmail.com | 📞 +2348063064740 | 🔗
          https://github.com/Rebtem | 🔗
          https://portfolio-rebeccaokunola.vercel.app
        </p>
        <p className="text-lg ">
          I am a Software Developer and Virtual Assistant with four years of
          experience helping businesses stay organized and efficient. I
          specialize in frontend and backed development using Next.js, React,
          Node.js and Supabase. Also, I handle administrative tasks like email
          management, scheduling and customer support. I combine technical
          expertise with strong organizational skills to improve workflows and
          deliver seamless digital solutions.
        </p>
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="text-xl font-bold"> Master Degree</h4>
              <p className="text-sm">Computer Engineering - LAUTECH</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                2024 -Present
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="text-xl font-bold"> Bachelors Degree</h4>
              <p className="text-sm">Computer Engineering - LAUTECH</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                2009 - 2014{" "}
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="text-xl font-bold"> Skills</h4>

              <p className="text-sm">Virtual Assistant</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Calendar & schedule management
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Email management & inbox organization
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Data entry & document handling
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Customer service & live chat support
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Social media management (Hootsuite)
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Task management tools (Trello)
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Microsoft Office.( Powerpoint, word, excel)
              </p>

              <p className="text-sm">Frontend Development</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Next.js, React.js, TypeScript{" "}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Tailwind CSS
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                JavaScript (ES6+), HTML5
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Responsive Web Design
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                API Integration
              </p>

              <p className="text-sm">Backend & Database</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Supabase (Authentication, Database, Storage{" "}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                PostgreSQL (via Supabase and Neon)
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Firebase (basic familiarity)
              </p>
              <p className="text-sm">Tools & Workflow</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {" "}
                Git & GitHub
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {" "}
                Vercel
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Figma (for UI design interpretation)
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {" "}
                Agile & Scrum
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Professional Experience
            </h3>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="text-xl font-bold">Frontend Developer</h4>
              <p className="text-sm">Freelancer</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                2023 - Present
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                • Built and maintained responsive web applications using
                Next.js, React, and TypeScript
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                • Integrated Supabase for authentication, database storage, and
                user management.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                • Optimized website performance, reducing load time.
              </p>
            </div>

            <div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="text-xl font-bold">Virtual Assistant</h4>
                <p className="text-sm">Freelancer</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  2020 - Present
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  •Managed administrative tasks, email correspondence, and
                  scheduling for clients
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  • Provided customer support, data entry, and online research
                  assistance.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  • Assisted with social media management, content creation, and
                  organization.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  • Utilized tools like Microsoft Office, Google Workspace, and
                  Trello for efficient task management.
                </p>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Projects</h3>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="text-xl font-bold">Job Board</h4>
                <p className="text-sm">(Next.js, TypeScript, Supabase</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Built a job board that connect employee and employers together
                </p>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="text-xl font-bold">Portfolio Website</h4>
                <p className="text-sm">(Next.js, TypeScript, Supabase</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Design and deploy a personal portfolio with dark mode and
                  smooth animations.
                </p>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="text-xl font-bold">University Website</h4>
                <p className="text-sm">(Next.js, TypeScript, Supabase</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Design and deploy a university portal with authentication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
