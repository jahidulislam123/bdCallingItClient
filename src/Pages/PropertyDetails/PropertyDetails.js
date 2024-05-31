import React from "react";

const PropertyDetails = () => {
  return (
    <div>
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
