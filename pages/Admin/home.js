import Sidebar from "@/components/Admin/Sidebar";
import Chart from "@/components/Admin/Chart";
import React from "react";

function home() {
  return (
    <>
      <style jsx global>
        {`
          nav {
            display: none;
          }
          footer {
            display: none;
          }
        `}
      </style>
      <div className="absolute inset-0 grid grid-rows-1 grid-cols-12">
        <div className="col-start-1 col-end-3">
          <Sidebar />
        </div>

        <div className=" col-start-3 col-span-full p-10 overflow-y-auto overflow-hidden">
          <div className="text-3xl">Home</div>
          <Chart />
          <section className="text-gray-600 body-font h-2/6">
            <div className="container p-10 mx-auto">
              <div className="flex flex-wrap -m-4 text-center">
                <div className="p-4 sm:w-1/4 w-1/2">
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                    2.7K
                  </h2>
                  <p className="leading-relaxed">Users</p>
                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                    1.8K
                  </h2>
                  <p className="leading-relaxed">Subscribes</p>
                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                    35
                  </h2>
                  <p className="leading-relaxed">Downloads</p>
                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                    4
                  </h2>
                  <p className="leading-relaxed">Products</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default home;
