import React, { useEffect, useState } from "react";
import Item from "./Item";
import Hero from "./Hero";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        data.length > 3 && (data.length = 3);
        setUsers(data);
      });
  }, []);
  let content;
  if (users.length === 0) {
    content = <p>Nothing Was Found</p>;
  } else {
    content = users.map((user) => <Item key={user._id} data={user} />);
  }
  return (
    <>
      <Hero />
      <section className="bg-white dark:bg-gray-900 text-center">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          {/* Title of Home Page */}
          <div className=" mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Designed for business teams like yours
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              Here at Lite Logo we focus on markets where technology,
              innovation, and capital can unlock long-term value and drive
              economic growth.
            </p>
          </div>
          {/* Title of Home Page  End*/}

          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {content}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
