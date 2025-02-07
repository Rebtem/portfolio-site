
import Image from "next/image";
const projects = [
    {
        title: "Job Board",
        description: "A platform for remote job posting built with NestJS and Supabase.",
        image: "/job-site.PNG",
    },
    {
        title: "Calculator",
        description: "The calculator is a versatile tool designed to handle basic arithmetic operation along with advanced functionalities.",
        image: "/calculator-project.PNG",
    },
    {
        title: "Employee Search",
        description: "This project is capable of searching for employee by their name and department",
        image: "/employee-directory.PNG",

    },
    {
        title: "Color-marker",
        description: "This is a maker with different colors and the first two can rotate",
        image: "/maker-rolling.PNG",
    },
    {
        title: "chat-app",
        description: "This is a chat-app.",
        image: "/Chat-app.PNG",
    },

    {
        title: "To-Do-List",
        description: "This app can be used to list task to do, once completed it can be deleted",
        image: "/To-do-list.PNG",
    },

    {
        title: "JDK Furniture",
        description: "JDK Furniture Website",
        image: "/Furniture.PNG",
    },
    {
        title: "JDK Furniture",
        description: "JDK Furniture Website",
        image: "/Furniture.PNG",
    },


];
const Portfolio = () => {
    return (
        <section id="portfolio" className="py-29 text-center grid place-items-center min-h-screen">
            <div className="w-[70%]">
                <h2 className="text-4x1 font-bold lg:text-[30px]">Portfolio</h2>
                <div className="border-b-2w-16 mx-auto my-4" ></div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
                            <Image src={project.image} alt={project.title} width={300} height={200} className="mx-auto rounded-md mb-4 object-cover w-45 h-40" />
                            <h3 className="text-gray-600 dark:text-gray-300">{project.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Portfolio;