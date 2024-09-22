import React from "react";
import banner from "./../assets/mailbook-postman.svg";
import blue from "./../assets/blue.svg";
import pink from "./../assets/pink.svg";
import purple from "./../assets/purple.svg";
import orange from "./../assets/orange.svg";

const Home = () => {
  return (
    <div className="px-[15vw] py-3">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-5xl nunito leading-tight">
            The easy way to collect and organize addresses
          </h1>
          <p className="flex items-center text-gray-500 mt-2">
            Effortless address management for weddings , parties , holiday cards
            , or other invitations.
          </p>
          <div className="flex gap-3 mt-5">
            <button className="bg-[#fe9240] px-10 py-2 text-white rounded-md">
              Get Started
            </button>
            <button className="bg-[#02bfae] px-10 py-2 text-white rounded-md">
              Tell me more
            </button>
          </div>
        </div>
        <img src={banner} alt="" />
      </div>
      <p className="text-[#02bfae] text-center text-2xl">Sounds good!</p>
      <h1 className="text-4xl text-center mt-2">How does it work?</h1>
      <div className="flex justify-center items-center  mt-10">
        <div className="w-[300px] text-center">
          <img src={orange} alt="" />
          <h1 className="text-2xl mt-4">Create your own address book.</h1>
          <p className="text-xl text-gray-500 mt-2">
            You will get your own secure online address book.
          </p>
        </div>
        <div className="w-[300px] text-center">
          <img src={blue} alt="" />
          <h1 className="text-2xl mt-4">
            Share your invite link with contacts.
          </h1>
          <p className="text-xl text-gray-500 mt-2">
            Share on Messenger, Whatsapp, Facebook, SMS, you name it.
          </p>
        </div>
        <div className="w-[300px] text-center">
          <img src={pink} alt="" />
          <h1 className="text-2xl mt-4">They save their address.</h1>
          <p className="text-xl text-gray-500 mt-2">
            Your contacts can quickly add their address to your address book.
          </p>
        </div>
        <div className="w-[300px] text-center">
          <img src={purple} alt="" />
          <h1 className="text-2xl mt-4">Easily create address labels.</h1>
          <p className="text-xl text-gray-500 mt-2">
            Download address labels to DIY or have them printed and delivered to
            your home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
