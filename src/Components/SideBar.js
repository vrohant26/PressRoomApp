import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
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
            textAlign: { sm: "center", md: "center" },
            "& .MuiTypography-root": { fontSize: "14px" },
            "& .MuiListItemButton-root:hover": {
              bgcolor: "white",
              "&, & .MuiListItemIcon-root": {
                color: "#1e376d",
              },
            },
          }}
        >
          <ListItem>
            <Link sx={{textDecoration : 'none'}} className="decoration-none" to="/">
              <ListItemButton>
                <ListItemText primary="All News" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link className="decoration-none" to="FeaturedNews">
              <ListItemButton>
                <ListItemText primary="Featured News" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link className="decoration-none" to="PressRelease">
              <ListItemButton>
                <ListItemText primary="Press Release" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link className="decoration-none" to="NewsLetter">
              <ListItemButton>
                <ListItemText primary="News Letters" />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </Box>
    </>
  );
}
