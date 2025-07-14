import { FaCode, FaChalkboardTeacher } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";

const services = [
  {
    title: "Web Development",
    icon: <FaCode size={30} />,
    description:
      "Designing and developing responsive, scalable, and user-friendly web applications using modern technologies.",
  },
  {
    title: "Coding Tutor",
    icon: <FaChalkboardTeacher size={30} />,
    description:
      "Providing hands-on coding instruction and mentorship in web development, JavaScript, React, and Next.js.",
  },
  {
    title: "Data & Business Analytics",
    icon: <MdAnalytics size={30} />,
    description:
      "Analyzing data to generate business insights, automate reporting, and support strategic decision-making.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 text-center grid place-items-center min-h-screen"
    >
      <div className="w-[70%]">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Services
        </h2>
        <div className="border-b-2 w-16 mx-auto my-4 bg-blue-600 h-1 rounded" />

        <p className="text-lg text-gray-600 dark:text-gray-300">
          I offer a blend of technical and analytical services to support
          business growth and software development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              <div className="text-blue-500">{service.icon}</div>
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
