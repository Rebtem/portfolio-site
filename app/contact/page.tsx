import ContactForm from "../components/ContactForm";
const Contact = () => {
  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
        Contact
      </h2>
      <div className="border-b-2 w-16 mx-auto my-4"></div>

      <p className="text-lg">Get in touch with me.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="space-y-4 p-4">
          <p>
            <strong> Address: </strong> Obantoko, Abeokuta
          </p>
          <p>
            <strong> Call Us: </strong> +234 8063064740
          </p>
          <p>
            <strong> Email: </strong> rebtem70@gmail.com
          </p>
        </div>
        <div className="max-w-md mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
export default Contact;
