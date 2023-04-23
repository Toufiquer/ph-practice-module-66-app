import React from "react";
import { useParams } from "react-router-dom";
import DeleteButton from "../../components/Button/DeleteButton";
import LinkButton from "../../components/Button/LinkButton";

const Details = () => {
  const { userId } = useParams();
  return (
    <>
      <section class="bg-white dark:bg-gray-900 text-center">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div
            className={` border border-solid border-blue-600 rounded-lg p-8`}
          >
            <div className="w-full flex justify-center items-center ">
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <h3 class="mb-2 text-xl font-bold dark:text-white">
              Marketing id: {userId}
            </h3>
            <div className="w-full flex justify-center">
              {" "}
              <div class="hidden lg:mt-0 lg:col-span-5 lg:flex py-4">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
                  alt="mockup"
                />
              </div>
            </div>
            <p class="text-gray-500 dark:text-gray-400 text-justify mb-4">
              Plan it, create it, launch it. Collaborate seamlessly with all the
              organization and hit your marketing goals every month with our
              marketing plan. Plan it, create it, launch it. Collaborate
              seamlessly with all the organization and hit your marketing goals
              every month with our marketing plan. Plan it, create it, launch
              it. Collaborate seamlessly with all the organization and hit your
              marketing goals every month with our marketing plan. Plan it,
              create it, launch it. Collaborate seamlessly with all the
              organization and hit your marketing goals every month with our
              marketing plan. Plan it, create it, launch it. Collaborate
              seamlessly with all the organization and hit your marketing goals
              every month with our marketing plan.
            </p>
            <p class="text-gray-500 dark:text-gray-400 text-justify mb-4">
              Plan it, create it, launch it. Collaborate seamlessly with all the
              organization and hit your marketing goals every month with our
              marketing plan. Plan it, create it, launch it. Collaborate
              seamlessly with all the organization and hit your marketing goals
              every month with our marketing plan. Plan it, create it, launch
              it. Collaborate seamlessly with all the organization and hit your
              marketing goals every month with our marketing plan. Plan it,
              create it, launch it. Collaborate seamlessly with all the
              organization and hit your marketing goals every month with our
              marketing plan. Plan it, create it, launch it. Collaborate
              seamlessly with all the organization and hit your marketing goals
              every month with our marketing plan.
            </p>
            <p class="text-gray-500 dark:text-gray-400 text-justify mb-4">
              Plan it, create it, launch it. Collaborate seamlessly with all the
              organization and hit your marketing goals every month with our
              marketing plan. Plan it, create it, launch it. Collaborate
              seamlessly with all the organization and hit your marketing goals
              every month with our marketing plan. Plan it, create it, launch
              it. Collaborate seamlessly with all the organization and hit your
              marketing goals every month with our marketing plan. Plan it,
              create it, launch it. Collaborate seamlessly with all the
              organization and hit your marketing goals every month with our
              marketing plan. Plan it, create it, launch it. Collaborate
              seamlessly with all the organization and hit your marketing goals
              every month with our marketing plan.
            </p>
            <p class="text-gray-500 dark:text-gray-400 text-justify mb-4">
              Plan it, create it, launch it. Collaborate seamlessly with all the
              organization and hit your marketing goals every month with our
              marketing plan. Plan it, create it, launch it. Collaborate
              seamlessly with all the organization and hit your marketing goals
              every month with our marketing plan. Plan it, create it, launch
              it. Collaborate seamlessly with all the organization and hit your
              marketing goals every month with our marketing plan. Plan it,
              create it, launch it. Collaborate seamlessly with all the
              organization and hit your marketing goals every month with our
              marketing plan. Plan it, create it, launch it. Collaborate
              seamlessly with all the organization and hit your marketing goals
              every month with our marketing plan.
            </p>
            <p class="text-gray-500 dark:text-gray-400 text-justify mb-4">
              Plan it, create it, launch it. Collaborate seamlessly with all the
              organization and hit your marketing goals every month with our
              marketing plan. Plan it, create it, launch it. Collaborate
              seamlessly with all the organization and hit your marketing goals
              every month with our marketing plan. Plan it, create it, launch
              it. Collaborate seamlessly with all the organization and hit your
              marketing goals every month with our marketing plan. Plan it,
              create it, launch it. Collaborate seamlessly with all the
              organization and hit your marketing goals every month with our
              marketing plan. Plan it, create it, launch it. Collaborate
              seamlessly with all the organization and hit your marketing goals
              every month with our marketing plan.
            </p>
            <div className="w-full flex justify-center pt-8">
              <div className="flex  items-center">
                <LinkButton url={`/update/${userId || 1}`} name={"Update"} />
                <DeleteButton />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
