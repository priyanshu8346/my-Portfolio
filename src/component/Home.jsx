import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../assets/HeroImage.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="Home"
      className=" w-full bg-gradient-to-b from-black to-gray-800 flex-1"
      style={{
        minHeight: "calc(100vh - 5rem)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{ height: "100%" }}
        className=" h-full mx-auto flex flex-col justify-center items-center px-4 md:flex-row"
      >
        <div
          className=" md:w-6/12 xs:w-12/12 text-white flex flex-col items-center ml-6">
          <h2 className=" font-bold text-4xl md:text-7xl text-center">
            I am a MERN stack {" "}
            <span
              className="font-bold text-4xl md:text-7xl "
              style={{ color: "yellow" }}
            >
            Developer
            </span>
          </h2>
          <p
            className=" py-4 text-gray-400 text-xs: "
            style={{ fontSize: "1rem", maxWidth: "80%" }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            neque est excepturi architecto cumque illo ut, laboriosam rerum
            atque dignissimos, minus quis! Fuga, illo? Tenetur neque similique
            eligendi natus fugit fugiat perspiciatis.
          </p>
          <div>
            <button className="group flex flex-row items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 px-6 py-2">
              <Link to="Portfolio" smooth duration={500}>Portfolio</Link>
              <span>
                <MdKeyboardArrowRight
                  size={25}
                  className=" group-hover:rotate-90 duration-300 "
                />
              </span>
            </button>
          </div>
        </div>
        <div className=" h-full md:w-5/12 xs:w-12/12 mt-8">
          <img
            className="m-auto rounded-2xl hover:scale-110 duration-[400ms]"
            style={{ height: "50vh", aspectRatio: "45:50", maxWidth: "auto" }}
            src={HeroImage}
            alt="My Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
