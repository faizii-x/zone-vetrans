"use client"
import React, { useState } from "react";


function Modal({ closeModal }) {
  const [selectedFileName, setSelectedFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFileName(file.name);
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Contact, setContact] = useState("");
  const [filelink, setFileLink] = useState("");
  const [Requirements, setRequirements] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [disableButton, setDisableButton] = useState(true);

  const Emailchangefunction = (e) => {
    setEmail(e.target.value);
    setDisableButton(!disableButton);
  };
  console.log(email);
  const onFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("Contact", Contact);
    formData.append("attachment", attachment);
    formData.append("link", filelink);
    formData.append("Requirements", Requirements);

    try {
      const response = await fetch("https://api.procoreestimators.com/", {
        method: "POST",
        body: formData,
      });

      if (response.status === 200) {
        alert("Email sent successfully");
        setEmail("");
        setName("");
        setContact("");
        setFileLink("");
        setRequirements("");
        setAttachment("");
        setSelectedFileName("");
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
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 h-[1200px] z-[9999] pt-[200px]">
        <div className="absolute lg:w-[50%]  w-[90%]  h-full  ">
          <div className="z-50 bg-white p-4 rounded-lg shadow-md relative">
            <button
              onClick={closeModal}
              className="absolute top-0 left-0 text-black font-bold px-3 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="33"
                viewBox="0 0 34 33"
                fill="none"
                className="w-6 h-6 mt-[1px]"
              >
                <path
                  d="M17 0C26.384 0 34 7.392 34 16.5C34 25.608 26.384 33 17 33C7.616 33 0 25.608 0 16.5C0 7.392 7.616 0 17 0ZM17 14.85V9.9L10.2 16.5L17 23.1V18.15H23.8V14.85H17Z"
                  fill="black"
                />
              </svg>
            </button>
            <div className="bg-[#393A3B] rounded-md p-6 mt-3">
              <h2 className="text-lg font-bold mb-10 text-center text-white">Upload your Drawings here</h2>
              <p className="text-[12px] mb-10 text-white -mt-8">Note: Please fill all the mandatory fields and please upload plan or email us  the link of your plan</p>
              <form>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 container mx-auto">
                  <div className="col-span-1">
                    <div className="border-b border-gray-300">
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="block w-full border-none bg-transparent text-white border-b border-white outline-none"
                        placeholder="Name"
                      />
                    </div>
                    <div className="border-b border-gray-300">
                      <input
                        id="contact"
                        type="text"
                        value={Contact}
                        onChange={(e) => setContact(e.target.value)}
                        className="block w-full border-none mt-12 bg-transparent text-white border-b border-white outline-none"
                        placeholder="Contact number"
                      />
                    </div>
                    <div className="border-b border-gray-300">
                      <input
                        id="message"
                        type="text"
                        value={Requirements}
                        onChange={(e) => setRequirements(e.target.value)}
                        className="block w-full border-none mt-12 bg-transparent text-white border-b border-white outline-none"
                        placeholder="Message"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="border-b border-gray-300 ">
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={Emailchangefunction}
                        className="block w-full bg-transparent text-white "
                        placeholder="Email"
                      />
                    </div>

                    <div className="border-b border-gray-300 bg-red">
                      <input
                        id="file-upload"
                        type="file"
                        className="block w-full border-none border-gray-300 outline text-white bg-transparent mt-[43px] "
                        onChange={handleFileChange}
                      />
                    </div>
                    <div className="border-b border-gray-300">
                      <input
                        type="text"
                        className="block w-full bg-transparent mt-12 text-white outline-none"
                        placeholder="File link (optional)"
                      />
                    </div>
                  </div>
                </div>
                <div className=" w-[100%] h-[50px] text-[18px] cursor-pointer rounded-md font-bold mx-auto bg-black hover:border-red border text-white flex justify-center items-center mt-12">
                  <button
                    disabled={disableButton}
                    onClick={onFormSubmit}
                    className=""
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
