import styles from "@/styles/payment";
import { ArrowBack } from "@mui/icons-material";
import { Box, IconButton, TextField, Theme, Typography } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { CardElement } from "@stripe/react-stripe-js";
import { Formik, Form, FormikProps } from "formik";

interface IPersonalDataForm {
  firstName: string;
  lastName: string;
  email: string;
}

function Payment() {
  const initialValues: IPersonalDataForm = {
    firstName: "",
    lastName: "",
    email: "",
  };

  const onSubmit = (values: IPersonalDataForm) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 500);
  };
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
              mb: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                mb: "20px",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  borderRadius: "100%",
                  mr: "10px",
                  backgroundColor: "#097969",
                  color: "#fff",
                  width: "26px",
                  height: "26px",
                  textAlign: "center",
                }}
              >
                1
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: 22,
                }}
              >
                Personal Information
              </Typography>
            </Box>
            <Typography sx={{ mb: "15px" }}>
              We only need the essential information for the purchase
              realization.
            </Typography>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              {(props: FormikProps<IPersonalDataForm>) => {
                const {
                  values,
                  touched,
                  errors,
                  handleBlur,
                  handleChange,
                  isSubmitting,
                } = props;
                return (
                  <Form>
                    <TextField
                      sx={{ width: "100%" }}
                      name="firstName"
                      id="firstName"
                      label="First Name"
                      value={values.firstName}
                      type="text"
                      helperText={
                        errors.firstName && touched.firstName
                          ? errors.firstName
                          : "Enter your full name."
                      }
                      error={
                        errors.firstName && touched.firstName ? true : false
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form>
                );
              }}
            </Formik>
            <CardElement id="card-element" options={styles.cardStyle} />
          </Box>

          <Box
            sx={{
              backgroundColor: "#fff",
              p: 3,
              borderRadius: 3,
              boxShadow: 5,
              mb: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                mb: "20px",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  borderRadius: "100%",
                  mr: "10px",
                  backgroundColor: "#097969",
                  color: "#fff",
                  width: "26px",
                  height: "26px",
                  textAlign: "center",
                }}
              >
                1
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: 22,
                }}
              >
                Personal Information
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              backgroundColor: "#fff",
              p: 3,
              borderRadius: 3,
              boxShadow: 5,
              mb: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                mb: "20px",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  borderRadius: "100%",
                  mr: "10px",
                  backgroundColor: "#097969",
                  color: "#fff",
                  width: "26px",
                  height: "26px",
                  textAlign: "center",
                }}
              >
                1
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: 22,
                }}
              >
                Personal Information
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ width: "35%" }}>
          <Box
            sx={{
              backgroundColor: "#fff",
              p: 3,
              borderRadius: 3,
              boxShadow: 5,
              mb: "10px",
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
