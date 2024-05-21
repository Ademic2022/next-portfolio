"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { userInfo } from "../data/user";
import { TypeAnimation } from "react-type-animation";
import { createSequenceFromRoles } from "../utils/helperFunction";

const Main = () => {
  const sequenceFromRoles = createSequenceFromRoles(userInfo.roles, 2000);
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
      >
        <Box
          sx={{
            maxWidth: "700px",
            margin: "auto",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { lg: "flex-start", xs: "center" }

          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2rem", sm: "3rem" },
              fontWeight: "bold",
              color: "#4b5563",
            }}
          >
            I&apos;m  {userInfo.name}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              display: "flex",
              fontSize: { xs: "2xl", sm: "3xl" },
              paddingTop: "1rem",
              color: "#4b5563",
            }}
          >
            I&apos;m  a&nbsp;
            <TypeAnimation
              sequence={sequenceFromRoles}
              wrapper="span"
              cursor={true}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </Typography>
        </Box>
      </Box>
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
