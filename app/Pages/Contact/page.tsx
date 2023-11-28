import ContactInfo from "@/app/components/ContactInfo";
import React from "react";

const page = () => {
  return (
    <div className="mt-4 mx-2 flex flex-row">
      <div className="flex-1 pr-6">
        <h1 className="text-2xl sm:text-6xl pb-8">
          Contact IWACU for your Digital Platform
        </h1>
        <p>
          Answer these questions to help us understand your project. The agency
          sales team will then get back to you to arrange a call!
        </p>
      </div>
      <div className="flex-1 ">
        <ContactInfo />
      </div>
    </div>
  );
};

export default page;
