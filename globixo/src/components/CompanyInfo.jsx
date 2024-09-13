import React from "react";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import bonton from "./bonton.png";
import wifi from "./wifi.png";
import hardrock from "./hardrock.png";
import angular from "./angular.jpeg";
import file01 from "./file01.png";
import file02 from "./file02.png";
import file03 from "./file03.png";
import logo from "./logo.png";
import logo2 from "./logo2.png";
import logoipsum from "./logoipsum.png"
import gourmet from "./gourmet.png"
import bites from "./bites.png"
import foods from "./foods.png"
import tasetquest from "./tastequest.png"

function Company() {
  return (
    <div className="md:bg-purple-100 bg-white  min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-6">
            {/* Company Business */}
            <div className="bg-white p-6 border border-gray-300 shadow-lg rounded-xl">
              <h2 className="font-semibold text-xl mb-4 text-left">Company's Business</h2>
              <div className="mb-4">
                <h4 className="font-medium mb-2 text-left">Company Type</h4>
                <div className="flex flex-wrap gap-3">
                  <button className="p-2 border border-gray-300 shadow-lg rounded-2xl">Contract Manufacturing</button>
                  <button className="p-2 border border-gray-300 shadow-lg rounded-2xl">Export</button>
                  <button className="p-2 border border-gray-300 shadow-lg rounded-2xl">White Label Brands</button>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="font-medium mb-2 text-left">Product Categories</h4>
                <div className="flex flex-wrap gap-3">
                  <button className="p-2 border border-gray-300 shadow-lg rounded-2xl">Juices</button>
                  <button className="p-2 border border-gray-300 shadow-lg rounded-2xl">Vegetables</button>
                  <button className="p-2 border border-gray-300 shadow-lg rounded-2xl">Grain</button>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-left">Product Items</h4>
                <div className="flex flex-wrap gap-3">
                  <button className="p-2 border border-gray-300 shadow-lg rounded-2xl">Item 01</button>
                  <button className="p-2 border border-gray-300 shadow-lg rounded-2xl">Item 02</button>
                  <button className="p-2 border border-gray-300 shadow-lg rounded-2xl">Item 03</button>
                  <button className="p-2 border border-gray-300 shadow-lg rounded-2xl">Item 04</button>
                  <button className="p-2 border border-gray-300 shadow-lg rounded-2xl">Item 05</button>
                </div>
              </div>
            </div>

            {/* Company Overview */}
            <div className="bg-white p-6 border border-gray-300 shadow-lg rounded-xl">
              <h2 className="font-semibold text-xl mb-4 text-left">Company Overview</h2>
              <p className="text-justify">
                1000 Farms Pvt. Ltd. is a pioneering agricultural company focused on revolutionizing the farming industry. 
                Established in [Year], our mission is to enhance food security and promote sustainable agricultural practices. 
                We provide innovative solutions across diverse landscapes, supporting farmers and fostering a robust agricultural ecosystem.
                We empower farmers with advanced tools and techniques, promote eco-friendly farming, and enhance crop yields through innovation. 
                Our services include precision farming, agricultural consultancy.
              </p>
            </div>

            {/* Videos & Images */}
            <div className="bg-white p-4 border border-gray-300 shadow-lg rounded-xl">
  <h2 className="font-bold text-xl mb-4 text-left relative left-10">Videos & Images</h2>
  <div className="md:grid md:grid-cols-2 grid grid-cols-1 gap-3 md:relative md:left-10">
    <img src={img1} alt="Video/Img 1" className="object-cover h-40 w-full" />
    <img src={img2} alt="Video/Img 2" className="object-cover h-40 md:w-4/5 w-full" />
    <img src={img3} alt="Video/Img 3" className="object-cover h-40 md:w-4/5 w-full" />
    <img src={img4} alt="Video/Img 4" className="object-cover h-40 w-full md:relative md:right-20" />
  </div>
  <a href="#" className="text-purple-700 font-bold underline mt-4 block text-center">Show All</a>
</div>


            {/* Files */}
            <div className="bg-white p-6 border border-gray-300 shadow-lg rounded-xl">
              <h2 className="font-bold text-xl mb-4 text-left">Files</h2>
              <div className="flex flex-wrap justify-center sm:flex-nowrap">
  <div className="bg-white p-4 border border-gray-300 shadow-lg rounded-xl m-2">
    <img src={file01} alt="File Name 01" className="w-full rounded-md"/>
  </div>
  <div className="bg-white p-4 border border-gray-300 shadow-lg rounded-xl m-2">
    <img src={file02} alt="File Name 02" className="w-full rounded-md"/>
  </div>
  <div className="bg-white p-4 border border-gray-300 shadow-lg rounded-xl m-2">
    <img src={file03} alt="File Name 03" className="w-full rounded-md"/>
  </div>
</div>

              <a href="#" className="text-purple-700 font-bold underline mt-4 block text-center">Show All</a>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Exhibitor Contact */}
            <div className="bg-white p-6 border border-gray-300 shadow-lg rounded-xl">
              <h2 className="font-semibold text-xl mb-4 text-left">Exhibitor Contact</h2>
              <div className="text-left space-y-3">
                <p><strong>Name:</strong> Rajesh Kumar</p>
                <p><strong>Email:</strong> Rajeshkumar@gmail.com</p>
                <p><strong>Phone:</strong> +91 6230126530</p>
                <p><strong>Address:</strong></p>
                <p>
                  B702, Pramukh Plaza, <br />
                  Cardinal Gracious Rd, near <br />
                  Western Express Metro Station, <br />
                  Andheri East, Mumbai, Maharashtra 400059
                </p>
                <p><strong>Website:</strong> <a href="#" className="text-blue-500 font-bold">www.zolonihere.com</a></p>
                <p><strong>Socials:</strong></p>
                <div className="flex space-x-3">
                  <a href="#"><i className="fab fa-facebook fa-2x text-blue-600"></i></a>
                  <a href="#"><i className="fab fa-whatsapp fa-2x text-green-500"></i></a>
                  <a href="#"><i className="fab fa-instagram fa-2x text-pink-500"></i></a>
                  <a href="#"><i className="fab fa-twitter fa-2x text-blue-400"></i></a>
                </div>
                <button className="bg-purple-700 text-white mt-6 w-full py-2 rounded-lg">Contact Us</button>
              </div>
            </div>

            {/* Past Exhibitions */}
            <div className="bg-white p-6 border border-gray-300 shadow-lg rounded-xl">
              <h2 className="font-semibold text-xl mb-4 text-left">Zaloni Past Exhibitions</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <img src={bonton} alt="Expo 1" className="w-16 h-16 rounded-full" />
                  <div>
                    <h4 className="font-semibold">Saudi Food Expo</h4>
                    <p>12 July - 18 July 2024</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <img src={angular} alt="Expo 2" className="w-16 h-16 rounded-full" />
                  <div>
                    <h4 className="font-semibold">South Asia Food Expo</h4>
                    <p>12 July - 18 July 2024</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <img src={wifi} alt="Expo 3" className="w-16 h-16 rounded-full" />
                  <div>
                    <h4 className="font-semibold">Australia Food Expo</h4>
                    <p>12 July - 18 July 2024</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <img src={hardrock} alt="Expo 4" className="w-16 h-16 rounded-full" />
                  <div>
                    <h4 className="font-semibold">Antartica Food Expo</h4>
                    <p>12 July - 18 July 2024</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <img src={wifi} alt="Expo 3" className="w-16 h-16 rounded-full" />
                  <div>
                    <h4 className="font-semibold">Australia Food Expo</h4>
                    <p>12 July - 18 July 2024</p>
                  </div>
                </div>
                <a href="#" className="text-purple-700 font-bold underline mt-4 block text-center">Show All</a>
              </div>
            </div>

            {/* Members */}
            <div className="bg-white p-6 border border-gray-300 shadow-lg rounded-xl">
              <h2 className="font-semibold text-xl mb-4 text-left">Members</h2>
              <div className="space-y-4">
              <div className="max-w-md flex flex-wrap mb-3 items-center space-x-4 p-4 border border-gray-300 shadow-lg rounded-xl">
        <img src={logo} alt="" className="w-16 h-16 rounded-full"/>
        <div>
        <h4 className="font-semibold">Aditi Sharma</h4>
        <p>Marketing Head</p>
        </div>
        <p>+91 9418208685  Aditi2121@jawar.com</p>
    </div>
    <div className="max-w-md flex flex-wrap mb-3 items-center space-x-4 p-4 border border-gray-300 shadow-lg rounded-xl">
        <img src={logo2} alt="" className="w-20 h-20 rounded-full"/> 
        <div>
        <h4 className="font-semibold">Mehak Sharma</h4>
        <p>Marketing Head</p>
        </div>
        <p>+91 9418208685    Aditi2121@jawar.com</p>
    </div>
    <div className="max-w-md flex flex-wrap mb-3 items-center space-x-4 p-4 border border-gray-300 shadow-lg rounded-xl">
        <img src={logo} alt="" className="w-16 h-16 rounded-full"/>
        <div>
        <h4 className="font-semibold">Akshay Sharma</h4>
        <p>Marketing Head</p>
        </div>
        <p>+91 9418208685  Aditi2121@jawar.com</p>
    </div> <br />
    <a href="#" className="text-purple-700 font-bold underline decoration-solid block text-center">Show All </a>
              </div>
            </div>

            <div className="bg-white p-4 border border-gray-300 shadow-lg rounded-xl md:hidden">
  <h2 className="font-bold text-xl mb-4 text-left relative left-10">Members</h2>
  <div className="md:grid md:grid-cols-2 grid grid-cols-1 gap-3 md:relative md:left-10">
    <img src={gourmet} alt="Video/Img 1" className="object-cover h-40 w-full rounded-xl" />
    <p className="text-center">Gourmet Heaven Foods</p>
    <img src={tasetquest} alt="Video/Img 2" className="object-cover h-40 md:w-4/5 w-full rounded-xl" />
    <p className="text-center">TasteQuest Creations</p>
    <img src={logoipsum} alt="Video/Img 3" className="object-cover h-40 md:w-4/5 w-full rounded-xl" />
    <p className="text-center">FreshFusion Delights</p>
    <img src={bites} alt="Video/Img 4" className="object-cover h-40 w-full md:relative md:right-20 rounded-xl" />
    <p className="text-center">Epicurean Bites Co.</p>
    <img src={foods} alt="Video/Img 4" className="object-cover h-40 w-full md:relative md:right-20 rounded-xl" />
    <p className="text-center">FlavorScape Foods</p>
  </div>
  <a href="#" className="text-purple-700 font-bold underline mt-4 block text-center">Show All</a>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
