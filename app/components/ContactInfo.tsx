"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
interface IFormInput {
  services: string;
  budgets: number;
  pages: number;
  message: string;
  email: string;
}
const ContactInfo = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4">
        {" "}
        <div className="flex flex-col">
          <label>What services do you need ?</label>
          <select
            className="outline-none text-slate-900 mt-2  w-[12rem] p-0 sm:p-2 sm:w-[20rem]"
            {...register("services")}
          >
            <option>Choose</option>
            <option value="Branding">Branding & Designing Figma</option>
            <option value="website">Website Development</option>
            <option value="maintainance">Maintainance Support</option>
            <option value="mobile">Mobile application</option>
            <option value="desktop">Desktop Application</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label>What is your budget for this project?</label>
          <select
            className="outline-none text-slate-900 mt-2 p-0 sm:p-2 w-[12rem] sm:w-[20rem]"
            {...register("budgets")}
          >
            <option>Choose</option>
            <option value="150000">150_000 Rwf</option>
            <option value="200000">2000_000 Rwf</option>
            <option value="250000">250_000 Rwf</option>
            <option value="300000">300_000 Rwf</option>
            <option value="350000">350_000 Rwf</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label>How many pages do you need ?</label>
          <select
            className="outline-none text-slate-900 mt-2 p-0 sm:p-2 w-[12rem] sm:w-[20rem]"
            {...register("pages")}
          >
            <option>Choose</option>
            <option value="150000">1 - 5</option>
            <option value="200000">6 - 10</option>
            <option value="250000">11 - 20</option>
            <option value="300000">20 - 30</option>
            <option value="350000">30+</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label>Would you like to make any clarification ?</label>
          <textarea
            placeholder="Your Message"
            className="text-slate-800 outline-none mt-2 p-0 sm:p-2 placeholder:text-slate-900 w-[15rem] sm:w-[21rem]"
            {...register("message")}
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label>How can we contact you again ?</label>
          <input
            type="email"
            className="w-[15rem] sm:w-[21rem] mt-2 placeholder:text-slate-900 p-2 outline-none border-none"
            placeholder="Email"
            {...register("email")}
          />
        </div>
        <div className="flex items-center justify-start ml-20">
          <button className="text-center bg-blue-700 px-6 py-2 rounded-sm w-48 hover:bg-blue-900 sm:mt-3">
            SEND
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactInfo;
