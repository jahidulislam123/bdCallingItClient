import React from "react";

const PropertyDetails = () => {
  return (
    <div>
      {/* start first div */}
      <div class="flex my-6 mx-14  ">
        <div class=" w-3/4">
          <img className="w-100 " src="/house1.png"></img>
          <div class="grid mr-14 mt-2 mb-2 grid-cols-3  gap-4">
            <div class="...">
              <img src="/house2.png"></img>
            </div>
            <div class="...">
              <img src="/house2.png"></img>
            </div>
            <div class="...">
              <img src="/house2.png"></img>
            </div>{" "}
          </div>
          <div>
            <h3 className="text-left  bg-blue-50 p-3  font-bold text-2xl">
              Overview
            </h3>
            <div className="grid  bg-blue-50 p-8 grid-cols-4">
              <div className="text-left">
                <p>Carpet Area</p>
                <h3 className="font-bold">200 sqft</h3>
                <p className="mb-4">$225 sqft</p>
                <p>Facing</p>
                <p>Facing</p>
                <p className="font-bold">NorthEast</p>
              </div>
              <div className="text-left">
                <p>Carpet Area</p>
                <h3 className="font-bold">200 sqft</h3>
                <p className="mb-4">$225 sqft</p>
                <p>Facing</p>
                <p>Facing</p>
                <p className="font-bold">NorthEast</p>
              </div>
              <div className="text-left">
                <p>Carpet Area</p>
                <h3 className="font-bold">200 sqft</h3>
                <p className="mb-4">$225 sqft</p>
                <p>Facing</p>
                <p>Facing</p>
                <p className="font-bold">NorthEast</p>
              </div>
              <div className="text-left">
                <p>Carpet Area</p>
                <h3 className="font-bold">200 sqft</h3>
                <p className="mb-4">$225 sqft</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/4">
          <div>
            <div className="text-left bg-blue-50 p-6 mb-2">
              <p>Property Value</p>
              <p className="font-bold text-2xl">$ 300k - $310k</p>
              <p>
                Tour bid con not be than 10% of the <br></br>Property minimum
                value
              </p>
              <p>Min</p>
              <input
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=" $280k"
                required
              />
              <p>Max</p>
              <input
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=" $280k"
                required
              />
            </div>
            <div>
              <img src="/Map icon.png"></img>
            </div>
          </div>
        </div>
      </div>
      {/* end first div */}

      {/* start second part */}
      <div className=" py-9">
        <h2 className="font-bold text-left mx-44 bg-blue-50 pl-8 text-2xl">
          Amenities{" "}
        </h2>
        <div className="grid bg-blue-50 p-16 grid-cols-4 mx-44">
          <div>
            <ul className="space-y-8">
              <li className="flex items-center mb-4">
                <img className="mr-2" src="/1.png" alt="Power back up"></img>
                <p>Power back up</p>
              </li>
              <li className="flex items-center ">
                <img className="mr-2" src="/2.png" alt="Power back up"></img>
                <p>Power back up</p>
              </li>
              <li className="flex items-center mb-4">
                <img className="mr-2" src="/3.png" alt="Power back up"></img>
                <p>Power back up</p>
              </li>
              <li className="flex items-center mb-4">
                <img className="mr-2" src="/7.png" alt="Power back up"></img>
                <p>Power back up</p>
              </li>
              <li className="flex items-center mb-4">
                <img className="mr-2" src="/8.png" alt="Power back up"></img>
                <p>Power back up</p>
              </li>
              <li className="flex items-center ">
                <img className="mr-2" src="/6.png" alt="Power back up"></img>
                <p>Power back up</p>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-4">
              <li className="flex items-center">
                <img className="mr-2" src="/11.png" alt="Power back up"></img>
                <p>Power back up</p>
              </li>
              <li className="flex items-center">
                <img className="mr-2" src="/12.png" alt="Power back up"></img>
                <p>Power back up</p>
              </li>
              <li className="flex items-center">
                <img className="mr-2" src="/13.png" alt="Power back up"></img>
                <p>Power back up</p>
              </li>
              <li className="flex items-center">
                <img className="mr-2" src="/17.png" alt="Power back up"></img>
                <p>Power back up</p>
              </li>
              <li className="flex items-center">
                <img className="mr-2" src="/18.png" alt="Power back up"></img>
                <p>Power back up</p>
              </li>
              <li className="flex items-center">
                <img className="mr-2" src="/17.png" alt="Power back up"></img>
                <p>Power back up</p>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-5">
              <li className="flex items-center">
                <img className="mr-2" src="/7.png" alt="Power back up"></img>
                <p>Power back up</p>
              </li>
              <li className="flex items-center">
                <img className="mr-2" src="/8.png" alt="Power back up"></img>
                <p>Power back up</p>
              </li>
              <li className="flex items-center">
                <img className="mr-2" src="/9.png" alt="Power back up"></img>
                <p>Power back up</p>
              </li>
              <li className="flex items-center">
                <img className="mr-2" src="/10.png" alt="Power back up"></img>
                <p>Power back up</p>
              </li>
              <li className="flex items-center">
                <img className="mr-2" src="/11.png" alt="Power back up"></img>
                <p>Power back up</p>
              </li>
              <li className="flex items-center">
                <img className="mr-2" src="/13.png" alt="Power back up"></img>
                <p>Power back up</p>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-5">
              <li className="flex items-center">
                <img className="mr-2" src="/21.png" alt="Power back up"></img>
                <p>Power back up</p>
              </li>
              <li className="flex items-center">
                <img className="mr-2" src="/22.png" alt="Power back up"></img>
                <p>Power back up</p>
              </li>
              <li className="flex items-center">
                <img className="mr-2" src="/23.png" alt="Power back up"></img>
                <p>Power back up</p>
              </li>
              <li className="flex items-center">
                <img className="mr-2" src="/24.png" alt="Power back up"></img>
                <p>Power back up</p>
              </li>
              <li className="flex items-center">
                <img className="mr-2" src="/8.png" alt="Power back up"></img>
                <p>Power back up</p>
              </li>
              <li className="flex items-center">
                <img className="mr-2" src="/6.png"></img>
                <p>Power back up</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* end second part */}

      {/* start other service */}
      <div className=" pb-16 ">
        <h2 className="text-4xl font-bold">Other Services</h2>

        <div class="flex  mx-12 gap-4">
          <div class="w-1/3  p-4">
            <div class="bg-blue-50 rounded-lg">
              <div class="flex">
                <div class="w-1/10 rounded p-4">
                  <img src="/Icons.png" alt="Image" class="w-20 h-14 "></img>
                </div>
                <div class="w-9/10  p-4">
                  <h2 class="text-xl text-left font-semibold mb-2">
                    Advanced Property <br></br> Search
                  </h2>
                  <p class="text-gray-700 text-left">
                    Effortlessly find your dream property with advanced search{" "}
                    <br></br>
                    filters..
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="w-1/3 p-4">
            <div class="bg-blue-50 rounded-lg">
              <div class="flex">
                <div class="w-1/10 rounded p-4">
                  <img src="/Icons.png" alt="Image" class="w-20 h-14 "></img>
                </div>
                <div class="w-9/10 p-4 text-left">
                  <h2 class="text-xl font-semibold mb-2">
                    Vritual Tours and <br></br> Multimedia{" "}
                  </h2>
                  <p class="text-gray-700">
                    Explore properties through immersive virtual tours and Hd
                    photos{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="w-1/3 p-4">
            <div class="bg-blue-50 rounded-lg">
              <div class="flex">
                <div class="w-1/10 rounded p-4">
                  <img src="/Icons.png" alt="Image" class="w-20 h-14 "></img>
                </div>
                <div class="w-9/10 p-4 text-left">
                  <h2 class="text-xl font-semibold mb-2">
                    Secure Online <br></br> Transaction
                  </h2>
                  <p class="text-gray-700">
                    Ensure secure Transaction seamleassly and currage luour head
                    online
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End other service */}
    </div>
  );
};

export default PropertyDetails;
