import React from "react";

const Home = () => {
  return (
    <div className="bg-blue-700">
      <div className="carousel w-full relative">
        <div id="item1" className="carousel-item w-full relative">
          <img src="frame.png" className="w-full" alt="carousel item" />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
            {" "}
            {/* Styled text */}
            <p className="text-lg text-white mt-2">
              Seamlessly connecting to you to the hearbeat of india's prime
              properties
            </p>{" "}
            <br></br>
            <br></br>
            {/* Added flexbox classes */}
            <h2 className="text-6xl font-bold text-white">
              Your Portal to India's <br></br> Exquisite Real Estate
            </h2>{" "}
            {/* Styled additional description */}
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              {" "}
              {/* Styled button */}
              Find Property
            </button>
          </div>
        </div>
      </div>
      {/* end banner  */}

      {/* after banner part start */}
      <div className="min-h-screen mx-14  flex">
        {/* Left side with image */}
        <div className="w-1/2 flex items-center relative justify-center ">
          <img
            src="img1.jpg"
            alt="Description of Image"
            className="max-w-full relative max-h-full object-cover rounded-lg"
          />
          <img
            src="img2.png"
            alt="Description of Second Image"
            className="absolute bottom-0 right-0 transform translate-x-6 -translate-y-6 max-w-1/4 max-h-1/4 object-cover"
          />
          {/* circle triangle start */}
          <div className="absolute bottom-0 right-0 transform translate-x-6 -translate-y-6 max-w-1/4 max-h-1/4 object-cover">
            <div className="min-h-screen flex items-center justify-center ">
              {/* Circle */}
              <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center">
                {/* Triangle */}
                <div
                  className="w-0 h-0"
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: "16px solid transparent",
                    borderRight: "16px solid transparent",
                    borderBottom: "28px solid white",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* circle triangle end */}

        {/* Right side with text and button */}
        <div className="w-1/2 flex text-left flex-col items-start justify-center  p-8 ">
          <h3 className="font-bold text-red-600">
            <del>Property</del> buying
          </h3>
          <br></br>
          <br></br>

          <h1 className="text-4xl font-bold mb-4">
            Efficient and Transparent Home Buying Solutions
          </h1>
          <p className="text-lg font-bold text-gray-400 mb-6">
            It is a long establishd fact tha a reader readable This is the by
            the realable content of the page description text. Add more details
            here to explain your l content.
          </p>
          <button className="px-6 font-bold py-2 bg-white text-blue rounded hover:bg-blue-700">
            Find Property
          </button>
        </div>
      </div>

      {/* after banner part end */}

      {/* another part start */}
      <div className="w-1/2 flex text-left flex-col relative items-start justify-center ml-52  p-8 ">
        <h3 className="font-bold text-red-600">
          <del>Property</del> buying
        </h3>
        <br></br>
        <br></br>

        <h1 className="text-4xl font-bold mb-4">
          Efficient and Transparent Home Buying Solutions
        </h1>
        <p className="text-lg font-bold text-gray-400 mb-6">
          It is a long establishd fact tha a reader readable This is the by the
          realable content of the page description text. Add more details here
          to explain your l content.
        </p>
        <button className="px-6 font-bold py-2 bg-white text-blue rounded hover:bg-blue-700">
          Find Property
        </button>

        <div className="absolute transform translate-x-40 ">
          <img src="Frame 70.png"></img>
        </div>
      </div>
      {/* another part end */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* efficient part start */}
      <div className="min-h-screen mx-14  flex">
        {/* Left side with image */}
        <div className="w-1/2 flex items-center relative justify-center ">
          <img
            src="img.jpg"
            alt="Description of Image"
            className="max-w-full relative max-h-full object-cover rounded-lg"
          />
          <img
            src="img.png"
            alt="Description of Second Image"
            className="absolute bottom-0 right-0 transform translate-x-6 -translate-y-6 max-w-1/4 max-h-1/4 object-cover"
          />
          {/* circle triangle start */}
          <div className="absolute bottom-0 right-0 transform translate-x-6 -translate-y-6 max-w-1/4 max-h-1/4 object-cover">
            <div className="min-h-screen flex items-center justify-center ">
              {/* Circle */}
              <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center">
                {/* Triangle */}
                <div
                  className="w-0 h-0"
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: "16px solid transparent",
                    borderRight: "16px solid transparent",
                    borderBottom: "28px solid white",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* circle triangle end */}

        {/* Right side with text and button */}
        <div className="w-1/2 flex text-left flex-col items-start justify-center  p-8 ">
          <h3 className="font-bold text-red-600">
            <del>Property</del> buying
          </h3>
          <br></br>
          <br></br>

          <h1 className="text-4xl font-bold mb-4">
            Efficient and Transparent Home Buying Solutions
          </h1>
          <p className="text-lg font-bold text-gray-400 mb-6">
            It is a long establishd fact tha a reader readable This is the by
            the realable content of the page description text. Add more details
            here to explain your l content.
          </p>
          <button className="px-6 font-bold py-2 bg-white text-blue rounded hover:bg-blue-700">
            Find Property
          </button>
        </div>
      </div>

      {/* start efficeint services */}

      {/* end efficeint services */}

      {/* start other service */}
      <div className="bg-blue-700 ">
        <h2 className="text-4xl font-bold">Other Services</h2>

        <div class="flex  mx-12 gap-4">
          <div class="w-1/3  p-4">
            <div class="bg-base-100 rounded-lg">
              <div class="flex">
                <div class="w-1/10 rounded p-4">
                  <img src="Icons.png" alt="Image" class="w-20 h-14 "></img>
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
            <div class="bg-base-100 rounded-lg">
              <div class="flex">
                <div class="w-1/10 rounded p-4">
                  <img src="Icons.png" alt="Image" class="w-20 h-14 "></img>
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
            <div class="bg-base-100 rounded-lg">
              <div class="flex">
                <div class="w-1/10 rounded p-4">
                  <img src="Icons.png" alt="Image" class="w-20 h-14 "></img>
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

export default Home;
