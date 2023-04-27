import React, { useEffect, useState } from "react";
import Item from "./Item";
import Pagination from "./Pagination";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [userPerPage, setUserPerPage] = useState(3);

  useEffect(() => {
    fetch(
      `http://localhost:5000/usersWithPagination?currentPage=${currentPage}&userPerPage=${userPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [currentPage, userPerPage]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/users")
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data));
  // }, []);
  const reFetch = (id) => {
    const otherUsers = users.filter((u) => u._id !== id);
    setUsers(otherUsers);
  };
  let content;
  if (users.length === 0) {
    content = <p>Nothing Was Found</p>;
  } else {
    content = users.map((user) => (
      <Item key={user._id} data={user} reFetch={reFetch} />
    ));
  }
  return (
    <>
      <section className="bg-white dark:bg-gray-900 text-center">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {content}
          </div>{" "}
          <Pagination
            userPerPage={userPerPage}
            currentPage={currentPage}
            setUserPerPage={setUserPerPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </section>
    </>
  );
};

export default AllUsers;
