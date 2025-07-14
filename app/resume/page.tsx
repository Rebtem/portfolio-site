import { FC } from "react";

const Resume: FC = () => {
  return (
    <section
      id="resume"
      className="py-20 px-6 min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Resume</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded" />
          <p className="text-sm sm:text-base">
            📧 rebtem70@gmail.com | 📞 +2348063064740 | 🔗{" "}
            <a
              href="https://github.com/Rebtem"
              className="text-blue-500 hover:underline"
              target="_blank"
            >
              GitHub
            </a>{" "}
            | 🔗{" "}
            <a
              href="https://portfolio-site-git-master-okunola-rebecca-s-projects.vercel.app"
              className="text-blue-500 hover:underline"
              target="_blank"
            >
              Portfolio
            </a>
          </p>
          <p className="text-lg max-w-3xl mx-auto">
            I am a Software Developer and Business/Data Analyst with a passion
            for building intuitive digital solutions and uncovering actionable
            insights from data. I combine technical expertise with analytical
            thinking to support both development and decision-making processes
            in modern businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Education */}
            <section>
              <h3 className="text-2xl font-semibold mb-4">Education</h3>
              <div className="space-y-4">
                <ResumeCard
                  title="Master's Degree"
                  subtitle="Computer Engineering - LAUTECH"
                  date="2024 - Present"
                />
                <ResumeCard
                  title="Bachelor's Degree"
                  subtitle="Computer Engineering - LAUTECH"
                  date="2009 - 2014"
                />
              </div>
            </section>

            {/* Skills */}
            <section>
              <h3 className="text-2xl font-semibold mb-4">Skills</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <SkillGroup
                  title="Business & Data Analysis"
                  items={[
                    "Requirement gathering & documentation",
                    "Data collection, cleaning, and analysis",
                    "Process improvement & workflow modeling",
                    "Stakeholder communication",
                    "Excel, Google Sheets, SQL",
                    "Dashboards & data visualization",
                    "Competitor & market research",
                  ]}
                />
                <SkillGroup
                  title="Frontend Development"
                  items={[
                    "Next.js, React.js, TypeScript",
                    "Tailwind CSS, HTML5, JavaScript (ES6+)",
                    "Responsive Web Design",
                    "API Integration",
                  ]}
                />
                <SkillGroup
                  title="Backend & Tools"
                  items={[
                    "Supabase (Auth, DB, Storage)",
                    "PostgreSQL & Firebase (basic)",
                    "Git & GitHub, Vercel",
                    "Figma for UI analysis",
                    "Agile & Scrum methodologies",
                  ]}
                />
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Experience */}
            <section>
              <h3 className="text-2xl font-semibold mb-4">
                Professional Experience
              </h3>
              <ResumeCard
                title="Business Analyst / Data Analyst"
                subtitle="Freelancer"
                date="2021 - Present"
                points={[
                  "Analyzed business requirements and translated them into functional solutions",
                  "Built dashboards and reports using Excel and Google Sheets for client insights",
                  "Performed market and competitor analysis to guide product strategies",
                  "Documented processes and proposed automation strategies to improve workflows",
                  "Used Power BI to create dashboards tracking repayment rates and customer segmentation.",
                  "Collaborated with a developer to prototype an onboarding flow for KYC compliance.",
                ]}
              />
              <ResumeCard
                title="Software Developer"
                subtitle="Freelancer"
                date="2023 - Present"
                points={[
                  "Developed and maintained responsive web apps using Next.js, React, and TypeScript",
                  "Integrated Supabase for authentication, data storage, and backend functionality",
                  "Worked closely with clients to gather feedback and implement improvements",
                  "Optimized performance and improved UI/UX for better user engagement",
                ]}
              />
            </section>

            {/* Projects */}
            <section>
              <h3 className="text-2xl font-semibold mb-4">Projects</h3>
              <ResumeCard
                title="Job Board Platform"
                subtitle="(Next.js, TypeScript, Supabase)"
                points={[
                  "Built a dynamic job board that connects job seekers with employers",
                  "Handled authentication, posting, and dashboard features using Supabase",
                ]}
              />
              <ResumeCard
                title="Business Dashboard"
                subtitle="(Google Sheets, Excel, SQL)"
                points={[
                  "Created automated dashboards to track sales, operations, and KPIs",
                  "Enabled decision-makers to view live data and make strategic adjustments",
                ]}
              />
              <ResumeCard
                title="Portfolio Website"
                subtitle="(Next.js, Tailwind CSS)"
                points={[
                  "Designed and deployed a personal portfolio with dark mode and animation support",
                ]}
              />
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable Resume Card Component
const ResumeCard = ({
  title,
  subtitle,
  date,
  points,
}: {
  title: string;
  subtitle?: string;
  date?: string;
  points?: string[];
}) => (
  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg space-y-2">
    <h4 className="text-lg font-bold">{title}</h4>
    {subtitle && <p className="text-sm">{subtitle}</p>}
    {date && <p className="text-xs text-gray-500 dark:text-gray-400">{date}</p>}
    {points && (
      <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
        {points.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    )}
  </div>
);

// Reusable Skill Group Component
const SkillGroup = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h4 className="font-semibold text-white dark:text-white mb-1">{title}</h4>
    <ul className="space-y-1 text-gray-500 dark:text-gray-400 text-sm">
      {items.map((item, i) => (
        <li key={i}>• {item}</li>
      ))}
    </ul>
  </div>
);

export default Resume;
