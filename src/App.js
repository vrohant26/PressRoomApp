import AllNews from "./Components/News/AllNews";
import FeaturedNews from "./Components/News/FeaturedNews";
import NewsLetters from "./Components/News/NewsLetters";
import PressRelease from "./Components/News/PressRelease";
import SideBar from "./Components/SideBar";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Stack } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [Sidebar, setSidebar] = useState(true);

  const callSidebar = () => {
    setSidebar(!Sidebar);
  };

  return (
    <BrowserRouter>
      <Stack sx={{ height: "100vh" }} direction="row" className="bg-light">
        <SideBar sidebar={Sidebar} close={callSidebar} />
        <Stack direction="column" flex={2} p={2}>
          <Navbar callSidebar={callSidebar} />

          <Routes>
            <Route path="/" element={<AllNews heading={"All News"} />}></Route>
            <Route
              path="FeaturedNews"
              element={<FeaturedNews heading={"Featured News"} />}
            ></Route>
            <Route
              path="PressRelease"
              element={<PressRelease heading={"Press Release"} />}
            ></Route>
            <Route
              path="NewsLetter"
              element={<NewsLetters heading={"News Letters"} />}
            ></Route>
          </Routes>
        </Stack>
      </Stack>
    </BrowserRouter>
  );
}

export default App;
