import React from "react";

const LogIn = () => {
  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center  dark:bg-gray-700">
        <div className=" w-[2 80px]">
          <div className="flex items-center">
          
            <button
              type="submit"
              class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Continue With Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
