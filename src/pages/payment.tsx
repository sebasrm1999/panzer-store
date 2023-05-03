import styles from "@/styles/payment";
import { ArrowBack } from "@mui/icons-material";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { CardElement } from "@stripe/react-stripe-js";
import { Formik, Form, FormikProps } from "formik";
import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

interface IPersonalDataForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

function Payment() {
  const initialValues: IPersonalDataForm = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
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
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={Yup.object().shape({
                email: Yup.string().email().required("Enter valid email"),
                firstName: Yup.string().required("Please enter first name"),
                lastName: Yup.string().required("Please enter last name"),
                phone: Yup.string()
                  .matches(phoneRegExp, "Phone number is not valid")
                  .required("Please enter a phone number"),
              })}
            >
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
                      sx={{ width: "100%", mb: 2 }}
                      name="email"
                      id="email"
                      label="Email"
                      value={values.email}
                      type="text"
                      helperText={errors.email && touched.email && errors.email}
                      error={errors.email && touched.email ? true : false}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: "space-between",
                      }}
                    >
                      <TextField
                        sx={{ width: "49%", mb: 2 }}
                        name="firstName"
                        id="firstName"
                        label="First Name"
                        value={values.firstName}
                        type="text"
                        helperText={
                          errors.firstName &&
                          touched.firstName &&
                          errors.firstName
                        }
                        error={
                          errors.firstName && touched.firstName ? true : false
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <TextField
                        sx={{ width: "49%", mb: 2 }}
                        name="lastName"
                        id="lastName"
                        label="Last Name"
                        value={values.lastName}
                        type="text"
                        helperText={
                          errors.lastName && touched.lastName && errors.lastName
                        }
                        error={
                          errors.lastName && touched.lastName ? true : false
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Box>
                    <TextField
                      sx={{ width: "49%", mb: 2 }}
                      name="phone"
                      id="phone"
                      label="Phone"
                      value={values.phone}
                      type="text"
                      helperText={errors.phone && touched.phone && errors.phone}
                      error={errors.phone && touched.phone ? true : false}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "10px",
                      }}
                    >
                      <Button
                        type="submit"
                        sx={{
                          borderRadius: "20px",
                          bgcolor: "#097969",
                          color: "white",
                          px: 5,
                          py: 2,
                          width: 250,
                          boxShadow: "none",
                          textTransform: "none",
                          fontSize: "20px",
                          lineHeight: "25px",
                          fontWeight: "bold",
                          "&:hover": {
                            bgcolor: "#AFE1AF",
                          },
                        }}
                        disabled={isSubmitting}
                      >
                        Go to Shipping
                      </Button>
                    </Box>
                  </Form>
                );
              }}
            </Formik>
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
                2
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: 22,
                }}
              >
                Shipping
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
                3
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: 22,
                }}
              >
                Payment
              </Typography>
            </Box>
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
