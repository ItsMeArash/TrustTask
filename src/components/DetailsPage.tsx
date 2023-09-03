import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Grid, Typography, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import { Product } from "../../types.ts";
import { MoonLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { RootState } from "../app/store.ts";

const CustomPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(2),
}));

const DetailsPage = () => {
  // Get product details from Redux instead of fetching API again
  const [productDetails, setProductDetails] = useState<null | Product>(null);

  const navigate = useNavigate();
  const { id } = useParams();
  const products = useSelector(
    (state: RootState) => state.products.productsList
  );
  useEffect(() => {
    if (id) {
      const spinnerTimeout = setTimeout(() => {
        const detailedProduct = products.find(
          (product: Product) => product.id === +id
        );

        if (detailedProduct) {
          setProductDetails(detailedProduct);
          console.log(detailedProduct);
        }
      }, 500);

      return () => {
        clearTimeout(spinnerTimeout);
      };
    }
  }, [id, products]);
  return (
    <Container maxWidth="lg" sx={{ height: "100vh" }}>
      {productDetails ? (
        <CustomPaper>
          <Grid container>
            <Grid
              item
              xs={12}
              mt={{ xs: 9, sm: 12 }}
              display="flex"
              flexDirection="row-reverse"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                component="h2"
                variant="h4"
                color="primary"
                fontWeight={700}
              >
                {productDetails.title}
              </Typography>
              <ArrowBackIcon
                color="primary"
                cursor="pointer"
                onClick={() => navigate(-1)}
              />
            </Grid>
            <Grid item xs={12} mt={6}>
              <img
                src={productDetails.images[1]}
                alt={productDetails.title}
                style={{ borderRadius: 15, height: "400px", margin: "auto" }}
              />
            </Grid>
            <Grid item xs={12} mt={7} display="flex" alignItems="center">
              <Box component="div">
                <Typography component="p" variant="h5" fontWeight={300}>
                  {productDetails.brand}
                </Typography>
                <Typography
                  component="p"
                  variant="h5"
                  color="primary"
                  fontWeight={700}
                >
                  Price: ${productDetails.price}
                </Typography>
                <Typography component="p" color="text.secondary">
                  {productDetails.category}
                </Typography>
                <Typography component="p" color="text.secondary">
                  {productDetails.description}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CustomPaper>
      ) : (
        <div className="h-full w-full flex justify-center items-center flex-col gap-8">
          <MoonLoader color="#1976D2" loading size={80} speedMultiplier={1} />
          <h2 className="font-bold text-xl">Loading Data</h2>
        </div>
      )}
    </Container>
  );
};

export default DetailsPage;
