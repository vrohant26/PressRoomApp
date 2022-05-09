import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  Box,
  Button,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import { Delete, Edit, Search, Upload } from "@mui/icons-material";
import { useLocation } from "react-router-dom";

export default function StickyHeadTable({ heading }) {
  const param = useLocation();

  const Columns = [];

  if (
    param.pathname === "/FeaturedNews" ||
    param.pathname === "/PressRelease"
  ) {
    Columns.push({
      Subheading: (
        <TableCell className="bg-lightBlue" align="center">
          Subheading
        </TableCell>
      ),
      imgheading: (
        <TableCell align="center" className="bg-lightBlue">
          Image
        </TableCell>
      ),
      table: <TableCell align="center">column</TableCell>,
    });
  } else if (param.pathname === "/NewsLetter") {
    Columns.push({
      Category: (
        <TableCell className="bg-lightBlue" align="center">
          Category
        </TableCell>
      ),
      imgheading: (
        <TableCell align="center" className="bg-lightBlue">
          Image
        </TableCell>
      ),
      table: <TableCell align="center">column</TableCell>,
    });
  } else {
    Columns.push({});
  }

  const rows = [];

  for (let i = 0; i <= 50; i++) {
    rows.push(
      <TableRow key={i} className="tr">
        <TableCell align="center">Year</TableCell>
        <TableCell align="center">Date</TableCell>
        <TableCell align="center">Title</TableCell>
        {Columns[0].table}
        <TableCell align="center">Example</TableCell>
        {Columns[0].table}

        <TableCell align="center">
          <IconButton>
            <Edit />
          </IconButton>
          <IconButton>
            <Delete />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  }

  return (
    <>
      <Box className="justify-content-between" sx={{ marginTop: "20px" }}>
        <Typography className="heading">{heading}</Typography>
        <Button
          size="small"
          className="bg-blue"
          variant="contained"
          component="label"
        >
          Upload *csv
          <input type="file" hidden />
          <Upload />
        </Button>
      </Box>
      <Paper
        sx={{
          width: "100%",
          overflow: "auto",
          margin: "20px 0",
        }}
      >
        <Toolbar className="justify-content-end">
          <Box className="search center">
            <InputBase
              sx={{ ml: 1, flex: 1, fontSize: ".85rem" }}
              placeholder="Search..."
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <Search />
            </IconButton>
          </Box>
        </Toolbar>
        <TableContainer sx={{ maxHeight: "calc(70vh - 100px)" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell className="bg-lightBlue" align="center">
                  Year
                </TableCell>
                <TableCell className="bg-lightBlue" align="center">
                  Date
                </TableCell>
                <TableCell className="bg-lightBlue" align="center">
                  Title
                </TableCell>
                {Columns[0].Subheading}
                <TableCell className="bg-lightBlue" align="center">
                  Url
                </TableCell>
                {Columns[0].imgheading}
                {Columns[0].Category}

                <TableCell className="bg-lightBlue" align="center">
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{rows}</TableBody>
          </Table>
        </TableContainer>
        <Box className="justify-content-end">
          <Toolbar>
            <Button className="bg-blue" variant="contained">
              Submit
            </Button>
          </Toolbar>
        </Box>
      </Paper>
    </>
  );
}
