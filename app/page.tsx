
import Hero from "./components/Hero";
import About from "./about/page";
import ResumePage from "./resume/page";
import Portfolio from "./portfolio/page";
import Contact from "./contact/page";
import Services from "./services/page";


export default function Page() {
  return (
    <>
    <section id="home"><Hero /></section>

    <section id="about" className="mt-20"><About /></section>
    <section id="resumepage" className="mt-20"><ResumePage /></section>
    <section id="portfolio " className="mt-20"><Portfolio/></section>
    <section id="contact" className="mt-20"><Contact/></section>
    <section id="services" className="mt-20"><Services /></section>

    </>
  );
};