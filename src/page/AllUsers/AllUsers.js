import React from "react";
import Item from "./Item";

const AllUsers = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 text-center">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>
      </section>
    </>
  );
};

export default AllUsers;
