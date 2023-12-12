import React, { useState } from "react";
import Header from "./component/header";
import graphic from "./images/3d-graphic-designer-showing-thumbs-up-png 1.svg";
import girl from "./images/1f6b6-2640.svg";
import boy from "./images/image_processing20200511-10310-13mnlsx.svg";
import "./register.css"
import congrat from './images/congratulation.svg'

const register = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedOption, setSelectedOption] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedOption1, setSelectedOption1] = useState("");


  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
   const handleChange1 = (event) => {
     setSelectedOption1(event.target.value);
   };

     // eslint-disable-next-line react-hooks/rules-of-hooks
     const [isModalOpen, setIsModalOpen] = useState(false);
     const openModal = () => {
       setIsModalOpen(true);
     };

     const closeModal = () => {
       setIsModalOpen(false);
     };

  return (
    <div className="register">
      <Header />
      <div className="reg">
        <img src={graphic} alt="" className="sit" />
        <form action="">
          <h2>Register</h2>
          <p>
            Be part of this movement!{" "}
            <span>
              <img src={girl} alt="" />
              <img src={boy} alt="" />
            </span>
          </p>
          <h3>CREATE YOUR ACCOUNT</h3>
          <div className="form-input">
            <div className="form-group">
              <label htmlFor="Team’s Name">Team’s Name</label>
              <input
                type="text"
                name=""
                id=""
                required
                placeholder="Enter the name of your group"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name=""
                id=""
                required
                placeholder="Enter your Phone number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name=""
                id=""
                required
                placeholder="Enter your Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Project Topic">Project Topic</label>
              <input
                type="text"
                name=""
                id=""
                required
                placeholder="What is your group project topic"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Category">Category</label>
              <select
                id="mySelect"
                value={selectedOption}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select your category
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="Group Size">Group Size</label>
              <select
                id="mySelect"
                value={selectedOption1}
                onChange={handleChange1}
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>
          <h5>Please review your registration details before submitting</h5>
          <div className="check">
            <input type="checkbox" />
            <span>
              I agreed with the event terms and conditions and privacy policy
            </span>
          </div>
          <input
            className="btn"
            type="submit"
            value="Register Now"
            onClick={openModal}
          />
        </form>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="back">
          <div className="modal">
            <div className="modal-content">
              <img src={congrat} alt="" />
              <h2>Congratulations you have successfully Registered!</h2>
              <p>
                Yes, it was easy and you did it! check your mail box for next
                step
              </p>
              <button onClick={closeModal}>back</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default register;

