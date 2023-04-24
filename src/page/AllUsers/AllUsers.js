import React, { useEffect, useState } from "react";
import Item from "./Item";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  let content;
  if (users.length === 0) {
    content = <p>Nothing Was Found</p>;
  } else {
    content = users.map((user) => <Item key={user._id} data={user} />);
  }
  return (
    <>
      <section className="bg-white dark:bg-gray-900 text-center">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {content}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllUsers;
