"use client"
import React, { useState } from "react";
import Image from "next/image";
import Big from "../../../public/png/big.png";

function Contactdiv() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Requirements, setRequirements] = useState("");
  const [disableButton, setDisableButton] = useState(true);

  const Emailchangefunction = (e) => {
    setEmail(e.target.value);
    setDisableButton(!disableButton);
  };
  console.log(email);
  const onFormSubmit = async (e) => {
    console.log("working");
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("Requirements", Requirements);

    try {
      const response = await fetch("http://localhost/backEnd-Vetrans-ContactUs/", {
        method: "POST",
        body: formData,
      });

      if (response.status === 200) {
        alert("Email sent successfully");
        setEmail("");
        setName("");
        setRequirements("");
      } else {
        alert("Email sending failed");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Email sending failed");
    }
  };

  return (
    <>
      <div className="lg:w-[70%] w-full lg:p-0 p-6 mx-auto">
        <div className="lg:flex grid justify-between gap-6 mt-[160px] bg-blacks rounded-lg relative min-h-[470px]">
          <div className="bg-white w-full text-center border-div mx-auto mt-12">
            <p className="text-[32px] font-poppins font-bold mt-6">
              Get in Touch with us{" "}
            </p>
            <p className="text-[18px] font-poppins">
              Let us know how we can help{" "}
            </p>

            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-6 md:w-[80%] w-full h-[34px] bg-transparent text-black pl-2 rounded-xl border border-black"
              placeholder="Your full name"
            />

            <input
              required
              type="email"
              value={email}
              onChange={Emailchangefunction}
              className="mt-6 md:w-[80%] w-full h-[34px] bg-transparent text-black pl-2 rounded-xl border border-black"
              placeholder="Email"
            />

            <textarea
              id="message"
              type="text"
              rows={20}
              columns={80}
              value={Requirements}
              onChange={(e) => setRequirements(e.target.value)}
              className="mt-6 resize-none md:w-[80%] w-full text-black pl-2 h-[120px] rounded-md border border-black"
              placeholder="Message"
            />

            <div className="mb-4 w-[80%] h-[50px] text-[18px] cursor-pointer rounded-md font-medium  bg-black text-white flex justify-center mx-auto items-center mt-6">
              <button
                disabled={disableButton}
                onClick={onFormSubmit}
                className="cursor-pointer"
              >
                Send message
              </button>
            </div>
          </div>

          <div className="self-center mr-[70px]">
            <div className="flex justify-start gap-4">
              <Image className="mx-auto" src={Big} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactdiv;
