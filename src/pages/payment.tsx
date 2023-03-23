import styles from "@/styles/payment";
import { ArrowBack } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { CardElement } from "@stripe/react-stripe-js";

function Payment() {
  return (
    <Box>
      <Head>
        <title>Payment</title>
        <meta property="og:title" content="Panzer Store" key="title" />
      </Head>
      <Box>
        <Link href="/" style={{ textDecoration: "none" }}>
          <IconButton sx={styles.backButton}>
            <ArrowBack sx={{ fontSize: 50 }} />
          </IconButton>
        </Link>
      </Box>
      <Box>
        <CardElement id="card-element" options={styles.cardStyle} />
      </Box>
    </Box>
  );
}

export default Payment;
