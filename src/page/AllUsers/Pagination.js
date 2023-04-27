import React, { useEffect, useState } from "react";
const currentPageStyle =
  "z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight border text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white";
const otherPageStyle =
  "flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
const Pagination = ({
  userPerPage,
  currentPage,
  setUserPerPage,
  setCurrentPage,
}) => {
  const [totalUsers, setTotalUsers] = useState(3);
  useEffect(() => {
    fetch("http://localhost:5000/totalUsersCount")
      .then((res) => res.json())
      .then((data) => setTotalUsers(data.count));
  }, []);
  //   decided which pagination is rendered;
  const totalPaginationPage = Math.ceil(totalUsers / userPerPage);
  let paginationRanders;
  if (totalPaginationPage <= 5) {
    paginationRanders = (
      <section className="flex items-center mt-4 bg-gray-50 dark:bg-gray-900">
        <div className="w-full max-w-screen-xl px-4 mx-auto lg:px-12">
          {/* <!-- Start coding here --> */}
          <div className="relative overflow-hidden bg-white rounded-b-lg shadow-md dark:bg-gray-800">
            <nav
              className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
              aria-label="Table navigation"
            >
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Showing{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  {`${currentPage * userPerPage + 1} - ${
                    totalUsers >= currentPage * userPerPage + userPerPage
                      ? currentPage * userPerPage + userPerPage
                      : totalUsers
                  }`}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  {totalUsers}
                </span>
              </span>
              <ul className="inline-flex items-stretch -space-x-px">
                {[...Array(totalPaginationPage).keys()].map((i) => (
                  <li key={i}>
                    <button
                      onClick={() => setCurrentPage(i)}
                      className={
                        i === currentPage ? currentPageStyle : otherPageStyle
                      }
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </section>
    );
  }
  return paginationRanders;
};
//   <section className="flex items-center h-screen bg-gray-50 dark:bg-gray-900">
//     <div className="w-full max-w-screen-xl px-4 mx-auto lg:px-12">
//       {/* <!-- Start coding here --> */}
//       <div className="relative overflow-hidden bg-white rounded-b-lg shadow-md dark:bg-gray-800">
//         <nav
//           className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
//           aria-label="Table navigation"
//         >
//           <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
//             Showing{" "}
//             <span className="font-semibold text-gray-900 dark:text-white">
//               1-10
//             </span>{" "}
//             of{" "}
//             <span className="font-semibold text-gray-900 dark:text-white">
//               {totalUsers}
//             </span>
//           </span>
//           <ul className="inline-flex items-stretch -space-x-px">
//             <li>
//               <button className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
//                 <span className="sr-only">Previous</span>
//                 <svg
//                   className="w-5 h-5"
//                   aria-hidden="true"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
//                     clipRule="evenodd"
//                   ></path>
//                 </svg>
//               </button>
//             </li>
//             <li>
//               <button className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
//                 1
//               </button>
//             </li>
//             <li>
//               <button className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
//                 2
//               </button>
//             </li>
//             <li>
//               <button
//                 aria-current="page"
//                 className="z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight border text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
//               >
//                 3
//               </button>
//             </li>
//             <li>
//               <button className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
//                 ...
//               </button>
//             </li>
//             <li>
//               <button className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
//                 100
//               </button>
//             </li>
//             <li>
//               <button className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
//                 <span className="sr-only">Next</span>
//                 <svg
//                   className="w-5 h-5"
//                   aria-hidden="true"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
//                     clipRule="evenodd"
//                   ></path>
//                 </svg>
//               </button>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </div>
//   </section>;
export default Pagination;
