"use client";
"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Box,
  CardMedia,
  Divider,
  List,
  ListItem,
  Avatar,
  ListItemAvatar,
  Typography,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { navItems } from "@/data/nav";

const Sidenav = (props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <Box
        onClick={handleDrawerToggle}
        sx={{
          position: "absolute",
          top: 4,
          right: 4,
          zIndex: 99,
          color: "#000",
          display: { md: "none", xs: "block" },
        }}
      >
        {mobileOpen ? <AiOutlineClose/> : <AiOutlineMenu />}
      </Box>

      {mobileOpen ? (
        <Box
          sx={{
            position: "fixed",
            zIndex: 10,
            top: 0,
            left: 0,
            bgcolor: "#fff",
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 md:hidden"></div> */}
          <Box
            sx={{
              display: "flex",
              width: "75%",
              flexDirection: "column",
            }}
          >
            {/* className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200" */}
            <List component="nav" aria-label="secondary mailbox folder">
              {navItems.map((item, idx) => (
                <Link
                  href={item.link}
                  key={idx}
                  passHref
                 style={{ textDecoration: "none" }}
                >
                  <ListItem
                    key={idx}
                    disablePadding
                    sx={{
                      margin: "10px auto",
                      width: "200px",
                      // height: "200px",
                      justifyContent: "center",
                      alignItems: "center",
                      alignContent: "center",
                      borderRadius: "500px",
                      backgroundColor: "#f0f0f0",
                      padding: "16px",
                      cursor: "pointer",
                      boxShadow:
                        "0 4px 6px rgba(0, 0, 0, 0.2), 0 1px 15px rgba(0, 0, 0, 0.18)",
                      transition: "transition 0.2s ease-in",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{ marginRight: "-30px", alignSelf: "center" }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      sx={{
                        marginLeft: "-30px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        flex: 1,
                      }}
                    />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Box>
        </Box>
      ) : (
        ""
      )}
      <Box
        sx={{
          position: "fixed",
          top: "25%",
          zIndex: 10,
          display: { xs: "none", md: "block" },
        }}
      >
        <Box sx={{ display: "flex" }}>
          <List component="nav" aria-label="secondary mailbox folder">
            {navItems.map((item, idx) => (
              <ListItem key={idx} disablePadding style={{ margin: "15px 0" }}>
                <Link href={item.link}>
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        backgroundColor: "#fff",
                        width: "50px",
                        height: "50px",
                        transition: "transform 0.2s ease-in",
                        color: "#000",
                        boxShadow:
                          "0 4px 6px rgba(0, 0, 0, 0.2), 0 1px 15px rgba(0, 0, 0, 0.18)",
                        "&:hover": {
                          transform: "scale(1.1)",
                        },
                      }}
                    >
                      {item.icon}
                    </Avatar>
                  </ListItemAvatar>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Sidenav;

{
  /* <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 md:hidden">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4 ">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#skills"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4 ">Skills</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4 ">Projects</span>
          </a>
          <a
            onClick={handleNav}
            href="#resume"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4 ">Resume</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4 ">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#skills"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <GrProjects size={20} />
          </a>
          <a
            href="#project"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            href="#resume"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <BsPerson size={20} />
          </a>
          <a
            href="#contact"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div> */
}
