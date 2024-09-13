import React from "react";
import img1 from "./img1.png"
import img2 from "./img2.png"
import img3 from "./img3.png"
import img4 from "./img4.png"
import bonton from "./bonton.png"
import wifi from "./wifi.png"
import hardrock from "./hardrock.png"
import angular from "./angular.jpeg"
import file01 from "./file01.png"
import file02 from "./file02.png"
import file03 from "./file03.png"
import logo from "./logo.png"
import logo2 from "./logo2.png"

function Company() {
    return (
        <>
        <div>
            {/* 1st box */}
            <div className="flex flex-wrap justify-center space-x-4 p-6 gap-y-3">
        <div className="text-black  bg-white w-3/5 p-5 border h-1/2 border-gray-300 shadow-lg rounded-xl">
            <h2 className="font-bold text-opacity-10 text-left">Company's Business</h2> <br />
            <h4 className="font-medium text-left">Company Type</h4> <br />
            <div className="flex flex-wrap gap-3">
            <button className="p-2 border border-gray-300 shadow-lg rounded-2xl">Contact Manufacturing</button>
            <button className="p-2 border border-gray-300 shadow-lg rounded-2xl">Export</button>
            <button className="p-2 border border-gray-300 shadow-lg rounded-2xl">White Level Brands</button>
            </div> <br />
            <h4 className="font-medium text-left">Product Categories</h4> <br />
            <div className="flex flex-wrap gap-3">
            <button className="p-2 border border-gray-300 shadow-lg rounded-2xl">Juices</button>
            <button className="p-2 border border-gray-300 shadow-lg rounded-2xl">Vegetables</button>
            <button className="p-2 border border-gray-300 shadow-lg rounded-2xl">Grain</button>
            <button className="p-2 border border-gray-300 shadow-lg rounded-2xl">Grain</button>
            <button className="p-2 border border-gray-300 shadow-lg rounded-2xl">Grain</button>
            </div> <br />
            <h4 className="font-medium text-left">Product Items</h4> <br />
            <div className="flex flex-wrap gap-3">
            <button className="p-2 border border-gray-300 shadow-lg rounded-2xl">Item 01</button>
            <button className="p-2 border border-gray-300 shadow-lg rounded-2xl">Item 02</button>
            <button className="p-2 border border-gray-300 shadow-lg rounded-2xl">Item 03</button>
            <button className="p-2 border border-gray-300 shadow-lg rounded-2xl">Item 04</button>
            <button className="p-2 border border-gray-300 shadow-lg rounded-2xl">Item 05</button>
            </div>
        </div> <br />

        
        {/* 2nd box */}
        <div className="bg-white p-2 pl-0 border border-gray-300 shadow-lg rounded-xl max-w-sm text-center">
  <h2 className="font-semibold mb-4">Exhibitor Contact</h2>
  
  <div className="grid grid-cols-2 gap-x-2 gap-y-3">
    <span>Name</span>
    <span>Rajesh Kumar</span>

    <span>Email</span>
    <span>Rajeshkumar@gmail.com</span>

    <span>Phone</span>
    <span>+91 6230126530</span>

    <span>Address</span>
    <div>
      <p>B702, Pramukh Plaza,</p>
      <p>Cardinal Gracious Rd, near</p>
      <p>Western Express Metro Station,</p>
      <p>Andheri East, Mumbai,</p>
      <p>Maharashtra 400059</p>
    </div>

    <span>Website</span>
    <a href="#" className="text-blue-600 font-medium">www.zolonihere.com</a>
    <div>Socials</div>
        <div class="flex justify-center space-x-4">
            <a href="https://facebook.com" target="_blank" class="text-blue-600 hover:text-blue-800">
                <i class="fab fa-facebook-f fa-2x"></i>
            </a>
            <a href="https://wa.me/" target="_blank" class="text-green-500 hover:text-green-700">
                <i class="fab fa-whatsapp fa-2x"></i>
            </a>
            <a href="https://instagram.com" target="_blank" class="text-pink-500 hover:text-pink-700">
                <i class="fab fa-instagram fa-2x"></i>
            </a>
            <a href="https://twitter.com" target="_blank" class="text-blue-400 hover:text-blue-600">
                <i class="fab fa-twitter fa-2x"></i>
            </a>
    </div>
    </div>
  <div className="mt-4">
    <button className="text-white w-4/5 m-0 bg-purple-700 px-3 py-2 rounded-lg">Contact Us</button>
  </div>
</div>

{/* </div> */}
{/* 3rd box */}
{/* <div className="flex justify-start space-x-3 p-4 ml-10"> */}
<div className=" text-black  bg-white w-3/5 p-5 border h-1/2 border-gray-300 shadow-lg rounded-xl">
<h2 className="font-semibold mb-4 text-left">Company Overview</h2>
<p className="text-justify">1000 Farms Pvt. Ltd. is a pioneering agricultural company focused on revolutionizing the farming industry. 
    Established in [Year], our mission is to enhance food security and promote sustainable agricultural practices. We provide innovative solutions across diverse landscapes, supporting farmers and fostering a robust agricultural ecosystem.

We empower farmers with advanced tools and techniques, promote eco-friendly farming, and enhance crop yields through innovation. Our services include precision farming, agricultural consultancy.</p>
</div>
{/* video & images */}
<div className="text-black  bg-white w-3/5 p-5 border h-2/5 border-gray-300 shadow-lg rounded-xl"> 
<h2 className="font-bold mb-5 mt-2 text-left ml-11">Videos & Images</h2>
<div className="flex flex-wrap -m-2 gap-1 justify-center">
    <img className=" w-1/2 max-h-lg"  src={img1} alt="" />
    <img className="h-1/2 w-1/3" src= {img2} alt="" />
    <img src={img3} alt="" className="h-1/2 w-1/3" />
    <img src={img4} alt="" className="max-h-lg w-1/2"/>
</div> <br />
<a href="#" className="text-purple-700 font-bold underline decoration-solid text-left">Show All </a>
</div>
{/* 4th box */}
<div className="bg-white p-2 pl-0 border border-gray-300 shadow-lg rounded-xl w-2/6 text-center">
<h2 className="font-semibold mb-4">Zaloni Past exhibitions</h2>
<div>
    <div className="flex items-center space-x-4 p-4">
    <img src={bonton} alt="" className="w-16 h-16 rounded-full" />
    <div>
    <h4 className="font-semibold">Saudi food Expo</h4>
    <p>12 July - 18 July 2024</p>
    </div>
    </div>
    <div className="flex items-center space-x-4 p-4">
    <img src={angular} alt="" className="w-16 h-16 rounded-full"/>
    <div>
    <h4 className="font-semibold">South Asia food Expo</h4>
    <p>12 July - 18 July 2024</p>
    </div>
    </div>
    <div className="flex items-center space-x-4 p-4">
    <img src={wifi} alt="" className="w-16 h-16 rounded-full"/>
    <div>
    <h4 className="font-semibold">Australia food Expo</h4>
    <p>12 July - 18 July 2024</p>
    </div>
    </div>
    <div className="flex items-center space-x-4 p-4">
    <img src={hardrock} alt="" className="w-16 h-16 rounded-full"/>
    <div>
    <h4 className="font-semibold">Antartica food Expo</h4>
    <p>12 July - 18 July 2024</p>
    </div>
    </div>
    <div className="flex items-center space-x-4 p-4">
    <img src={wifi} alt="" className="w-16 h-16 rounded-full"/>
    <div>
    <h4 className="font-semibold">Australia food Expo</h4>
    <p>12 July - 18 July 2024</p>
    </div>
    </div>
    <a href="#" className="text-purple-700 font-bold underline decoration-solid text-left">Show All </a>
</div>
</div>
</div>

{/* 5th box */}
<div className="flex justify-end p-6 py-0 mr-8">
<div className="bg-white p-6 border border-gray-300 shadow-lg rounded-xl w-2/6 text-center">
<h2 className="font-medium mb-4 text-left text-xl">Members</h2>
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
        <p>+91 9418208685  Aditi2121@jawar.com</p>
    </div>
    <div className="max-w-md flex flex-wrap mb-3 items-center space-x-4 p-4 border border-gray-300 shadow-lg rounded-xl">
        <img src={logo} alt="" className="w-16 h-16 rounded-full"/>
        <div>
        <h4 className="font-semibold">Akshay Sharma</h4>
        <p>Marketing Head</p>
        </div>
        <p>+91 9418208685  Aditi2121@jawar.com</p>
    </div>
    <a href="#" className="text-purple-700 font-bold underline decoration-solid text-left">Show All </a>
</div>
</div>
{/* 6th box */}
<div className="text-black  bg-white w-3/5 p-5 border h-2/5 border-gray-300 shadow-lg rounded-xl"> 
<h2 className="font-bold mb-5 mt-2 text-left ml-11">Videos & Images</h2>
<div className="flex flex-wrap -m-2 gap-1 justify-center">
    <img className=" w-1/2 max-h-lg"  src={img1} alt="" />
    <img className="h-1/2 w-1/3" src= {img2} alt="" />
    <img src={img3} alt="" className="h-1/2 w-1/3" />
    <img src={img4} alt="" className="max-h-lg w-1/2"/>
</div> <br />
<a href="#" className="text-purple-700 font-bold underline decoration-solid text-left">Show All </a>
</div>
{/* 7th box */}
<div  className="bg-white p-2 pl-0 border border-gray-300 shadow-lg rounded-xl w-2/6 text-center">
<h2 className="font-medium mb-4 text-left text-xl">Files</h2>
    <div className="flex flex-wrap gap-3">
    <img src={file01} alt="" className="w-1/4 h-1/4 border border-gray-300 shadow-lg rounded-xl"/>
    <img src={file02} alt="" className="w-1/4 h-1/4 border border-gray-300 shadow-lg rounded-xl"/>
    <img src={file03} alt="" className="w-1/4 h-1/4 border border-gray-300 shadow-lg rounded-xl"/>
    </div>
    <a href="#" className="text-purple-700 font-bold underline decoration-solid text-left">Show All </a>
</div>
        </div>
        </>
    )
}

export default Company;