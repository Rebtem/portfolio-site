import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 text-center grid place-items-center min-h-screen"
    >
      <div className="w-full max-w-5xl px-4">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">About Me</h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto my-4 rounded" />

        {/* Intro */}
        <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg leading-relaxed">
          I am a detail-oriented and adaptable professional with a foundation in
          software development and data analysis. As a Software Developer, I
          build scalable and user-friendly web applications using modern
          technologies. I apply analytical thinking to extract insights from
          data and support data-driven decision-making in business environments.
          My approach blends technical problem-solving with a keen understanding
          of business operations allowing me to contribute to both development
          teams and strategic initiatives. I thrive in dynamic environments
          where collaboration, accuracy, and continuous learning are key to
          delivering real impact.
        </p>

        {/* Section Title */}
        <h3 className="text-2xl sm:text-3xl lg:text-4xl mt-12 mb-8 font-semibold text-blue-600">
          Web Developer & Data/Business Analyst
        </h3>

        {/* Profile and Skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Profile Image */}
          <div className="flex justify-center">
            <Image
              src="/6.png"
              alt="Profile Photo"
              width={250}
              height={250}
              className="rounded-lg shadow-lg w-full max-w-[250px] h-auto object-cover"
            />
          </div>

          {/* Personal Info */}
          <div className="space-y-2 text-sm sm:text-base">
            <p>
              <strong>Phone:</strong> +234 8063 064740
            </p>
            <p>
              <strong>City:</strong> Lagos
            </p>
            <p>
              <strong>Degree:</strong> B.Tech in Computer Engineering
            </p>
            <p>
              <strong>Email:</strong> rebtem70@gmail.com
            </p>
            <p className="mt-4 font-semibold text-blue-600">
              Data/Business Analytics Skills
            </p>
            <ul className="list-disc ml-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Requirements gathering & stakeholder communication</li>
              <li>Data collection, validation & reporting</li>
              <li>Business process modeling & documentation</li>
              <li>Creating dashboards using Excel & Google Sheets</li>
              <li>Market research & competitor analysis</li>
              <li>Project tracking using Trello or Jira</li>
              <li>
                Proficiency in Microsoft Office Suite (Excel, Word, PowerPoint)
              </li>
            </ul>
          </div>

          {/* Developer Skills */}
          <div className="space-y-2 text-sm sm:text-base">
            <p className="font-semibold text-blue-600">Frontend Development:</p>
            <ul className="list-disc ml-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Next.js, React.js, TypeScript</li>
              <li>Tailwind CSS, CSS3, SCSS</li>
              <li>JavaScript (ES6+), HTML5</li>
              <li>Responsive Design & Accessibility</li>
              <li>REST APIs & Third-Party Integration</li>
            </ul>

            <p className="font-semibold text-blue-600 mt-4">
              Tools & Workflow:
            </p>
            <ul className="list-disc ml-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Supabase (Auth, DB, Storage)</li>
              <li>Git & GitHub</li>
              <li>Figma (UI interpretation)</li>
              <li>Vercel & Firebase (deployment)</li>
              <li>Agile & Scrum</li>
            </ul>
          </div>
        </div>

        {/* Closing Statement */}
        <p className="text-center text-gray-600 dark:text-gray-300 mt-12 max-w-3xl mx-auto text-lg leading-relaxed">
          I am a results-driven Software Developer and Data/Business Analyst
          with a strong foundation in building web applications and analyzing
          data to support informed business decisions. I specialize in
          developing responsive, user-friendly applications using modern
          technologies, and in interpreting data trends to provide actionable
          insights. My combined experience in software development and business
          analysis allows me to bridge the gap between technical solutions and
          business needs. I bring strong problem-solving skills, attention to
          detail, and a passion for continuous improvement to every project I
          work on.
        </p>
      </div>
    </section>
  );
};

export default About;
