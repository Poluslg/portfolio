import React, { useState } from "react";

export const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const getUserData = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (event) => {
    event.preventDefault();
    const { name, email, number, message } = user;
    if (name && email && number && message) {
      const res = await fetch(
        "https://portfoliocontact-611f5-default-rtdb.firebaseio.com/PMusiccontact/Contact.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            number,
            message,
          }),
        }
      );
      if (res) {
        setUser({
          name: "",
          email: "",
          number: "",
          message: "",
        });
        alert("Thank You For Contact with Us");
      }
    } else {
      alert("Please fill all the Information");
    }
  };
  const cancel = () => {
    window.location.reload();
  };
  return (
    <div
      id="contact"
      className="bg-[#56e5f0] h-screen  dark:bg-gradient-to-r from-black to-polu-500 "
    >
      <div className=" relative  flex pt-16 flex-col items-center ">
        <h2 className="  text-base font-semibold leading-7 text-gray-900 dark:text-white text-center ">
          Contact With Us
        </h2>
        <div className="border-b   pl-1 border-gray-900/10 pb-12 sm:flex  justify-center place-content-center  sm:w-full">
          <div className="mt-10 w-3/5 pl-20  grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={user.name}
                  onChange={getUserData}
                  autoComplete="name"
                  className="block w-48 px-2 rounded-md border-0 py-1.5 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 sm:w-full"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label className="block">
                <span className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                  Email
                </span>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={user.email}
                  onChange={getUserData}
                  className="peer block w-48 px-2 rounded-md border-0 py-1.5 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 sm:w-full "
                />
                <p className="mt-2 w-[52vw] invisible peer-invalid:visible text-pink-600 text-sm">
                  Please provide a valid email address.
                </p>
              </label>
            </div>
            <div className="col-span-4">
              <label
                htmlFor="number"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
              >
                Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="number"
                  id="number"
                  autoComplete="tel"
                  value={user.number}
                  onChange={getUserData}
                  className="block w-48  px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 sm:w-full"
                />
              </div>
            </div>
            <div className="col-span-4">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
              >
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="message"
                  rows="4"
                  name="message"
                  value={user.message}
                  onChange={getUserData}
                  className="block w-48 px-2 rounded-md border-0 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6 sm:w-full"
                  defaultValue={""}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-white ">
                Write a few sentences about what you want.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            onClick={cancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={postData}
          >
            Submit
          </button>
        </div>
        <div className=" border-gray-900/10 pb-1">
          <div className=" space-y-10"></div>
        </div>
      </div>
    </div>
  );
};

// import React from "react";

// export const Contact = () => {
//   return (
//     <div
//       id="contact"
//       className="bg-[#25CCF7] h-screen  dark:bg-gradient-to-r from-black to-polu-500"
//     >
//       <div className=" text-white text-center">Contact</div>
//     </div>
//   );
// };
