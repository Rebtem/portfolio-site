import { FC } from "react";



const Resume: FC = () => {
  return (
    <section id="resume" className="py-20 text-center grid place-items-center min-h-screen">
      <div className="w-[70%]">
        <h2 className="text-4x1 font-bold lg:text-[30px]">Resume</h2>
        <div className="border-b-2 w-16 mx-auto my-4"></div>
        <p className="text-lg">Here is a summary of my Education and Experience</p>
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-2x1 font-semibold mb-4">Education</h3>
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
          </div>

          <div>
            <h3 className="text-2x1 font-semibold mb-4">Professional Experience</h3>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="text-xl font-bold">Software Developer</h4>
              <p className="text-sm">Freelancer</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">2023 - Present</p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="text-xl font-bold">Software Developer</h4>
              <p className="text-sm">Bureau of Information and Communication Technology </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">2015 - 2017</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

