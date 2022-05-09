import { Menu, Search } from "@mui/icons-material";
import { AppBar, IconButton, InputBase, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Navbar({ callSidebar }) {
  return (
    <AppBar className="navbar bg-white" position="static">
      <Toolbar>
        <Box className="center" gap={2}>
          <Box
            sx={{ cursor: "pointer", display: { sm: "block", md: "none" } }}
            onClick={callSidebar}
          >
            <Menu />
          </Box>
          <Box className="search center">
            <InputBase
              sx={{ ml: 1, flex: 1, fontSize: ".85rem" }}
              placeholder="Search..."
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <Search />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
