import { Container } from "@mui/material";
import Filter from "./Filter";
import Products from "./Products";
import { Suspense } from "react";
import { MoonLoader } from "react-spinners";

const Layout = () => {
  return (
    <Container maxWidth="lg" sx={{ height: "100vh" }}>
      <Filter />
      <Suspense
        fallback={
          <div className="h-full w-full flex justify-center items-center flex-col gap-8">
            <MoonLoader color="#1976D2" loading size={80} speedMultiplier={1} />
            <h2 className="font-bold text-xl">Fetching Data</h2>
          </div>
        }
      >
        <Products />
      </Suspense>
    </Container>
  );
};

export default Layout;
