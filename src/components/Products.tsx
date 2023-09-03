import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "../features/products/productsSlice.ts";
import useFetchApi from "../../api.ts";
import { Product } from "../../types.ts";
import Card from "./ProductCard.tsx";
import { Grid, Pagination, Stack } from "@mui/material";

const Products = () => {
  const dispatch = useDispatch();
  const { data } = useFetchApi();
  const products = data.products;

  // Implementing pagination
  const [productsToShow, setProductsToShow] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  useEffect(() => {
    if (data) {
      dispatch(addProducts(products));

      // Get the search query from the URL
      const searchParams = new URLSearchParams(window.location.search);
      const query = searchParams.get("search");

      // If there's no search query, apply pagination to all products
      const startIndex = (currentPage - 1) * postsPerPage;
      const endIndex = startIndex + postsPerPage;
      setProductsToShow(products.slice(startIndex, endIndex));
      if (query) {
        // Filter products based on the search query
        const filtered = products.filter((product: Product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        );
        setProductsToShow(filtered);
      } 
      
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, currentPage]);

  if (data) {
    return (
      <article className="w-full flex justify-center flex-col items-center">
        <Grid container spacing={2} padding={3}>
          {productsToShow.map((product: Product) => (
            <Grid item key={product.id}>
              <Card productData={product} />
            </Grid>
          ))}
        </Grid>
        <div style={{ marginTop: "2rem", marginBottom: "1rem" }}>
          <Stack spacing={2}>
            <Pagination
              count={Math.ceil(products.length / postsPerPage)}
              page={currentPage}
              onChange={(event, value) => setCurrentPage(value)}
              variant="outlined"
              shape="rounded"
              color="primary"
            />
          </Stack>
        </div>
      </article>
    );
  }
};

export default Products;
