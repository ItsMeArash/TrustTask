import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import DetailsPage from "./components/DetailsPage";
import { useEffect, useState } from "react";

import { IconButton, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const App = () => {
  // handling go-up arrow button
  const [showScroll, setShowScroll] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/:id" element={<DetailsPage />} />
      </Routes>

      {/* go-up arrow shwoing condition */}
      {showScroll && (
        <Zoom in={true} style={{ position: "fixed", bottom: 50, right: 50 }}>
          <IconButton
            onClick={scrollToTop}
            size="large"
            aria-label="scroll to top"
            sx={{
              bgcolor: "primary.main",
              color: "primary.contrastText",
              "&:hover": {
                bgcolor: "primary.dark",
              },
            }}
          >
            <KeyboardArrowUpIcon />
          </IconButton>
        </Zoom>
      )}
    </>
  );
};

export default App;
