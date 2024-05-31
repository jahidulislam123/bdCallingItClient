import React from "react";

const About = () => {
  return (
    <div>
      <div>
        <img src="/Frame 108.jpg"></img>
      </div>

      <div className="grid my-12 mx-12 grid-cols-4 gap-4">
        <div className="text-left py-6 rounded-sm px-12 bg-orange-200">
          <div>
            <h2 className="font-bold text-3xl text-orange-500">2k+</h2>
            <h2 className="font-bold">New Flat Listed</h2>
          </div>{" "}
          <br></br>
          <div className="flex justify-between items-center">
            <div>
              <a>
                <u>View all</u> &nbsp;&nbsp;&nbsp;
              </a>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#EE6611"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="py-6 text-left rounded-sm px-12 bg-blue-200">
          <div>
            <h2 className="font-bold text-3xl text-blue-500">2k+</h2>
            <h2 className="font-bold">New Flat Listed</h2>
          </div>{" "}
          <br></br>
          <div className="flex justify-between items-center">
            <div>
              <a>
                <u>View all</u>
              </a>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#0051A1"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="text-left py-6 rounded-sm px-12 bg-orange-200">
          <div>
            <h2 className="font-bold text-3xl text-orange-500">2k+</h2>
            <h2>New Flat Listed</h2>
          </div>{" "}
          <br></br>
          <div className="flex justify-between items-center">
            <div>
              <a>
                <u>View all</u> &nbsp;&nbsp;&nbsp;
              </a>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#EE6611"
                class="size-6"
              >
                <path
                  fill=""
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="py-6 text-left rounded-sm px-12 bg-blue-200">
          <div>
            <h2 className="font-bold text-3xl text-blue-500">2k+</h2>
            <h2 className="font-bold">New Flat Listed</h2>
          </div>{" "}
          <br></br>
          <div className="flex justify-between items-center">
            <div>
              <a>
                <u>View all</u>
              </a>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#0051A1"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* image started */}
      <div className="mx-12 mb-36 text-left relative">
        <div className="">
          <img className="object-cover h-72 w-3/5" src="/about.png"></img>
        </div>

        <div className="bg-blue-50 absolute top-2/3  transform translate-x-1/2 -translate-y-1/7 w-1/2 w-2/4 pl-20 py-3 rounded-sm ">
          <div className="flex  items-center">
            <div>
              <img src="/line 9.png"></img>
            </div>
            <div>
              <h2 className="text-orange-500 ml-3 font-bold">Our Stroy</h2>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold">
              Effiecient and Transparent <br></br>Home Buying Solutions{" "}
            </h2>

            <p>
              In the symphony of bustling markets and serene landscapes{" "}
              <br></br> Heritage-Nest was born -a vision to{" "}
            </p>
          </div>
        </div>
      </div>
      {/* image ended */}

      {/* second image section started  */}
      {/* second image section ended  */}
    </div>
  );
};

export default About;
