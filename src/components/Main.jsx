"use client";
import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";

const Main = () => {
  return (
    <React.Fragment>
      <Box id="main" sx={{ p: 0, m: 0 }}>
        <Image
          src="/images/bg-img.jpg"
          fill={true}
          alt="Background Image"
          style={{ transform: "scaleX(-1)" }}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          bgcolor: "rgba(255, 255, 255, 0.4)",
        }}
      ></Box>
    </React.Fragment>
  );
};

export default Main;

{
  /* <div className="w-full h-screen absolute top-0 left-0 bg-white/40">
  <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
    <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
      I am {userInfo.name}
    </h1>
    <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
      I am a
      <TypeAnimation
        sequence={sequenceFromRoles}
        wrapper="span"
        cursor={true}
        style={{ fontSize: "1em", paddingLeft: "5px" }}
        repeat={Infinity}
      />
    </h2>
    <div className="flex justify-between pt-6 max-w-[200px] w-full">
      <a
        href={userInfo.socials.twitter || ""}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter size={30} className="cursor-pointer" />
      </a>
      <a
        href={userInfo.socials.facebook || ""}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook size={30} className="cursor-pointer" />
      </a>
      <a
        href={userInfo.socials.linkedin || ""}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={30} className="cursor-pointer" />
      </a>
      <a
        href={userInfo.socials.github || ""}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={30} className="cursor-pointer" />
      </a>
    </div>
  </div>
</div>; */
}
