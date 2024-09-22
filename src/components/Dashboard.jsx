import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import axios from "axios";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const [addresses, setAddresses] = useState([]);
  const userId = localStorage.getItem("token");

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await axios.get(
          `https://smoketrees-backend.onrender.com/api/address/get_addresses/${userId}`
        );
        console.log(response);

        if (response.data.success) {
          setAddresses(response.data.addresses);
        }
      } catch (error) {
        console.error("Error fetching addresses:", error);
      }
    };

    fetchAddresses();
  }, [userId]);

  return (
    <div className="flex justify-center flex-col items-center mx-auto">
      <div className="flex justify-center flex-col items-center mx-auto">
        <h1 className="text-2xl text-center mt-5">
          Stay Connected: Your Digital Address Book
        </h1>
        <button
          className="px-5 py-2 border border-gray-500 uppercase text-lg rounded-md mt-5 hover:bg-[#02bfae] hover:text-white hover:border-none"
          onClick={handleModal}
        >
          Add Address
        </button>
        {openModal && (
          <Modal
            openModal={openModal}
            setOpenModal={setOpenModal}
            userId={userId}
          />
        )}
        <div className="mt-10">
          <h2 className="text-xl">Your Addresses:</h2>
          <ul>
            {addresses.map((address, index) => (
              <li key={index} className="border-b border-gray-300 py-2">
                <p>
                  <strong>Name:</strong> {address.name}
                </p>
                <p>
                  <strong>Mobile:</strong> {address.mobile}
                </p>
                <p>
                  <strong>Pincode:</strong> {address.pincode}
                </p>
                <p>
                  <strong>Relation:</strong> {address.relation}
                </p>
                <p>
                  <strong>Address:</strong> {address.address}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
