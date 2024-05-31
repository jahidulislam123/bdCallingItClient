import React from "react";
import "./Navbar.css";

const Properties = () => {
  return (
    <div className="">
      {/* banner started */}

      <div class="relative mb-80">
        <div>
          <img src="/Frame 108.jpg" alt="Background" class="w-full"></img>
        </div>

        <div class="absolute  top-52 left-0 right-0  flex justify-center">
          <div class="card custom-width bg-base-100 shadow-xl">
            <div class="card-body">
              <div className="flex space-x-2">
                <h2 class="card-title">
                  {" "}
                  <u>Buy</u>
                </h2>
                <h2 class="card-title"> Rent</h2>
                <h2 class="card-title"> PG</h2>
                <h2 class="card-title"> plot</h2>
                <h2 class="card-title"> Commercial</h2>
              </div>
              <div class="form-control">
                <input
                  type="text"
                  placeholder=" search property"
                  class="input input-bordered w-24 md:w-auto"
                />
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="flex width-on ">
                    <img src="/fi-bs-marker.png"></img>
                    <h2>Your location</h2>
                  </div>
                  <br></br>
                  <div className="bg-navbar p-5 justify-end flex">
                    <div></div>
                    <div>
                      <img src="/Vector (Stroke).png"></img>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex  width-on">
                    <img src="/fi-bs-marker.png"></img>
                    <h2>Your location</h2>
                  </div>
                  <br></br>
                  <div className="bg-navbar p-5 justify-end flex">
                    <div></div>
                    <div>
                      <img src="/Vector (Stroke).png"></img>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex   width-on">
                    <img src="/fi-bs-marker.png"></img>
                    <h2>Your location</h2>
                  </div>
                  <br></br>
                  <div className="bg-navbar p-5 justify-end flex">
                    <div></div>
                    <div>
                      <img src="/Vector (Stroke).png"></img>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-actions flex justify-end">
                <img src=""></img>
                <button class="btn btn-primary w-full">Find Property</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* banner ended */}

      {/* rating started  */}
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
      {/* rating ended  */}

      {/* testomonial section start */}
      <div className="mt-52">
        <h2 className="font-bold text-4xl">Testomonial</h2>
        <div className="flex ntext-center my-14 justify-center ">
          <div class="card w-96 mr-4 text-center bg-navbar  ">
            <div class="card-body">
              <div className="flex ml-24">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="yellow"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="yellow"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="yellow"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="yellow"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </div>
              <p>
                The level of security provided by ypherPly is unmatched . I feel
                condident using my card for both everyday purchases and travel .
                it's the peace of mind i was looking for
              </p>
            </div>

            <img
              src="Ellipse 1-1.png"
              alt="Shoes"
              className="w-32 h-32 rounded-full mx-auto mt-4"
            ></img>

            <h3>Tony Stark</h3>
            <p>Marketing manager,XYZ</p>
          </div>
          <div class="card w-96 ml-4 P-4 bg-navbar  text-center">
            <div class="card-body">
              <div className="flex ml-24">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="yellow"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="yellow"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="yellow"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="yellow"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </div>
              <p>
                The level of security provided by ypherPly is unmatched . I feel
                condident using my card for both everyday purchases and travel .
                it's the peace of mind i was looking for{" "}
              </p>
            </div>

            <img
              src="Ellipse 1.png"
              alt="Shoes"
              className="w-32 h-32 rounded-full mx-auto mt-4"
            ></img>
            <h3>Tony Stark</h3>
            <p>Marketing manager,XYZ</p>
          </div>
        </div>
      </div>
      {/* testomonial section end */}

      {/* last part start */}

      <div className="flex justify-around bg-orange-50 p-12">
        <div className="text-left">
          <h2> Post Your Property for Features</h2>
          <p>List it on your Properties and get genuine leads</p>
        </div>
        <div>
          <button
            type="button"
            class="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Post Property
          </button>
        </div>
      </div>

      {/* last part end */}
    </div>
  );
};

export default Properties;
