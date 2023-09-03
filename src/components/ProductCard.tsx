import { ProductProps } from "../../types";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const ProductCard = ({ productData }: ProductProps) => {
  return (
    <Card sx={{ width: 345, display: "flex", flexDirection: "column", justifyContent: "space-between", height: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={productData.images[0]}
          alt="green iguana"
          sx={{height: 250}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {productData.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {productData.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/${productData.id}`}>
          <Button size="small" variant="contained" color="primary" sx={{marginBottom: "1rem"}}>
            Details
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
