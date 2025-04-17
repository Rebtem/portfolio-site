"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase.from("contacts").insert([formData]);

    if (error) {
      console.log("Error:", error);
    } else {
      console.log("Message sent:", data);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg max-w-lg mx-auto w-full"
    >
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        onChange={handleChange}
        value={formData.name}
        className="w-full p-3 text-lg rounded-md bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 
     focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <input
        type="text"
        name="email"
        placeholder="Enter your email"
        onChange={handleChange}
        value={formData.email}
        className="w-full p-3 text-lg rounded-md bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 
     focus:ring-2 focus:ring-blue-500 outline-none"
      />
      <input
        type="text"
        name="subject"
        placeholder="Enter subject"
        onChange={handleChange}
        value={formData.subject}
        className="w-full p-3 text-lg rounded-md bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600
      focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <textarea
        name="message"
        placeholder="Enter your message"
        onChange={handleChange}
        value={formData.message}
        className="w-full p-3 text-lg rounded-md bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
      ></textarea>

      <button className="w-full bg-blue-500 text-white px-4 py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition-all">
        Submit
      </button>
    </form>
  );
}
