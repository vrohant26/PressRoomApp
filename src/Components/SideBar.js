import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import React from "react";
import Logo from "../assets/white-logo.png";

export default function SideBar({ sidebar, close }) {
  return (
    <>
      {sidebar ? null : <Box onClick={close} className="sidebarbg"></Box>}
      <Box
        className={`bg-blue box-shadow transition sidebar ${
          sidebar ? "sidebarhide " : "sidebarcall"
        }  `}
      >
        <Box className=" divider" gap={1} p={4}>
          <img width={50} src={Logo} alt="..." />
          <Typography mt={2}>
            <b>Press Room</b>
          </Typography>
        </Box>

        <List
          sx={{
            "& .MuiTypography-root": { fontSize: "14px" },
          }}
        >
          <ListItem>
            <NavLink exact className="decoration-none " to="/">
              <ListItemButton>
                <ListItemText primary="All News" />
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink className="decoration-none" to="FeaturedNews">
              <ListItemButton>
                <ListItemText primary="Featured News" />
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink className="decoration-none" to="PressRelease">
              <ListItemButton>
                <ListItemText primary="Press Release" />
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink className="decoration-none" to="NewsLetter">
              <ListItemButton>
                <ListItemText primary="News Letters" />
              </ListItemButton>
            </NavLink>
          </ListItem>
        </List>
      </Box>
    </>
  );
}
