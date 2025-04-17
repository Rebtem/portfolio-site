import Image from "next/image";
const projects = [
  {
    title: "Job Board",
    description:
      "A platform for remote job posting built with NestJS and Supabase.",
    link: "https://job-sites-wheat.vercel.app/",
    image: "/job-site.PNG",
  },
  {
    title: "Calculator",
    description:
      "The calculator is a versatile tool designed to handle basic arithmetic operation along with advanced functionalities.",
    image: "/calculator-project.PNG",
  },
  {
    title: "Employee Search",
    description:
      "This project is capable of searching for employee by their name and department",
    image: "/employee-directory.PNG",
  },
  {
    title: "Color-marker",
    description:
      "This is a maker with different colors and the first two can rotate",
    image: "/maker-rolling.PNG",
  },
  {
    title: "chat-app",
    description: "This is a chat-app.",
    image: "/Chat-app.PNG",
  },

  {
    title: "To-Do-List",
    description:
      "This app can be used to list task to do, once completed it can be deleted",
    image: "/To-do-list.PNG",
  },

  {
    title: "JDK Furniture",
    description: "JDK Furniture Website",
    image: "/Furniture.PNG",
  },
  {
    title: "E-commerce website",
    description: "An ecommerce site (work in progress)",
    link: "https://e-commerce-4-fawn.vercel.app/",
    image: "/E-commerce.png",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 text-center min-h-screen">
      <div className="max-w-[90%] sm:max-w-[80%] md:max-w-[70%] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Portfolio
        </h2>
        <div className="border-b-2 w-16 mx-auto my-4"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-auto rounded-md mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {project.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
