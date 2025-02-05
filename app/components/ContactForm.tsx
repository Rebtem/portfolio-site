"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function ContactForm() {
    const [formData, setFormData] = useState({name: "" , email: "", subject: "", message: ""});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();
    const {data, error} = await supabase.from("contacts").insert([formData]);

    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Message sent:", data);
        setFormData({name: "", email: "", subject: "", message: ""});
    }
};
return (
    <form onSubmit={handleSubmit}
    className="space-y-4 bg-gray-100">
    <input type="text" name="name"  placeholder="Enter your name" onChange={handleChange} value={formData.name}
    className="w-full p-2 rounded-md bg-white dark:bg-gray-700" />
    <input type="text" name="email" placeholder="Enter your email" onChange={handleChange} value={formData.email}
    className="w-full p-2 rounded-md bg-white dark:bg-gray-700" />
    <input type="text" name="subject" placeholder="Enter subject" onChange={handleChange} value={formData.subject}
    className="w-full p-2 rounded-md bg-white dark:bg-gray-700" />

    <textarea name="message" placeholder="Enter your message" onChange={handleChange} value={formData.message}
    className="w-full p-2 rounded-md bg-white dark:bg-gray-700 h-24"></textarea>

    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Submit
    </button>
</form>

);
}
