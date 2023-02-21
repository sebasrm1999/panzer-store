import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import useAppDispatch from "@/hooks/useAppDispatch";
import useAppSelector from "@/hooks/useAppSelector";
import { ProductModel } from "@/types/productTypes";
import Image from "next/image";
import styles from "@/styles/productItem";
import { addToCart } from "@/store/slices/cartSlice";

function ProductItem({ product }: { product: ProductModel }) {
  const { id, title, price, category, image, description } = product;
  const dispatch = useAppDispatch();
  return (
    <Box sx={styles.container}>
      <Card sx={styles.cardContainer}>
        <CardContent sx={styles.cardContent}>
          <Box sx={styles.imageContainer}>
            <Image src={image} alt="" fill />
          </Box>

          <Box sx={styles.textContainer}>
            <Typography sx={styles.title}>{title}</Typography>
            <Box sx={styles.priceContainer}>
              <Typography>US$</Typography>
              <Typography sx={styles.price}>{price}</Typography>
            </Box>
          </Box>
          <Box sx={styles.buttonContainer}>
            <Button
              onClick={() => dispatch(addToCart(product))}
              variant="contained"
              sx={styles.button}
            >
              Add to cart
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ProductItem;
