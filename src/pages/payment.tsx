import styles from "@/styles/payment";
import { ArrowBack } from "@mui/icons-material";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { CardElement } from "@stripe/react-stripe-js";

function Payment() {
  return (
    <Box sx={{ backgroundColor: "#f4f2f2", margin: "-8px" }}>
      <Head>
        <title>Payment</title>
        <meta property="og:title" content="Panzer Store" key="title" />
      </Head>
      <Box sx={{ backgroundColor: "#fff", width: "100%" }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <IconButton sx={styles.backButton}>
            <ArrowBack sx={{ fontSize: 50 }} />
          </IconButton>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          my: 4,
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "55%",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#fff",
              p: 3,
              borderRadius: 3,
              boxShadow: 5,
            }}
          >
            <CardElement id="card-element" options={styles.cardStyle} />
          </Box>
        </Box>

        <Box sx={{ width: "35%" }}>
          <Box
            sx={{
              backgroundColor: "#fff",
              p: 3,
              borderRadius: 3,
              boxShadow: 5,
            }}
          >
            <Typography>Summary</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Payment;
