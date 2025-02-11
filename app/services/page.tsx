import { FaCode, FaChalkboardTeacher } from "react-icons/fa";

const services = [
    {
        title: "Web Development", icon:<FaCode size={30} />, 
        description: "Building Modern and Responsive Website.",
    },
    {
        title: "Coding Tutor", icon:<FaChalkboardTeacher size={30} />, 
        description: "Teaching coding and software Development effectively.",
    },
    {
        title: "Full-Stack Developer", icon:<FaCode size={30} />, 
        description: "Building Modern and Responsive Website.",
    },
];

const Services = () => {
    return (
        <section id="services" className="py-20 text-center grid place-items-center min-h-screen">
            <div className="w-[70%]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Services</h2>
            <div className="border-b-2 w-16 mx-auto my-4 text-blue h-4"></div>

            <p className="text-lg">Here are some of the services i offer</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                {services.map((service, index) => (
                    <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md flex
                    flex-col items-center">
                        <div className="text-blue-500">{service.icon}</div>
                        <h3 className="text-xl font-semibold mt-3">{service.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mt-2">{service.description}</p>
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
};
export default Services;