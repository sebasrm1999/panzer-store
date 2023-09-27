import styles from "@/styles/payment";
import { ArrowBack } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { CardElement } from "@stripe/react-stripe-js";
import { Formik, Form, FormikProps } from "formik";
import * as Yup from "yup";
import {
  Country,
  State,
  City,
  ICountry,
  IState,
  ICity,
} from "country-state-city";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

interface IPersonalDataForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface IShippingForm {
  postalCode: string;
  street: string;
  number: string;
  appartmentNumber: string;
  references: string;
  addressLine2: string;
  city: string;
  state: string;
  country: string;
}

function Payment() {
  const initialValuesPersonal: IPersonalDataForm = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };

  const initialValuesShipping: IShippingForm = {
    postalCode: "",
    street: "",
    number: "",
    appartmentNumber: "",
    references: "",
    addressLine2: "",
    city: "",
    state: "AGU",
    country: "MX",
  };

  const onSubmitPersonal = (values: IPersonalDataForm) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 500);
  };

  const onSubmitShipping = (values: IShippingForm) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 500);
  };
  return (
    <Box sx={{ backgroundColor: "#f4f2f2", margin: "-8px", mb: "-32px" }}>
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
              initialValues={initialValuesPersonal}
              onSubmit={onSubmitPersonal}
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
                      error={!!(errors.email && touched.email)}
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
                        error={!!(errors.firstName && touched.firstName)}
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
                        error={!!(errors.lastName && touched.lastName)}
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
                      error={!!(errors.phone && touched.phone)}
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                px: 5,
              }}
            >
              <Formik
                initialValues={initialValuesShipping}
                onSubmit={onSubmitShipping}
                validationSchema={Yup.object().shape({
                  email: Yup.string().email().required("Enter valid email"),
                  firstName: Yup.string().required("Please enter first name"),
                  lastName: Yup.string().required("Please enter last name"),
                  phone: Yup.string()
                    .matches(phoneRegExp, "Phone number is not valid")
                    .required("Please enter a phone number"),
                })}
              >
                {(props: FormikProps<IShippingForm>) => {
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
                      <Box>
                        <TextField
                          sx={{ width: "100%", my: 3 }}
                          name="postalCode"
                          id="postalCode"
                          label="Postal / ZIP Code"
                          value={values.postalCode}
                          type="text"
                          helperText={
                            errors.postalCode &&
                            touched.postalCode &&
                            errors.postalCode
                          }
                          error={!!(errors.postalCode && touched.postalCode)}
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
                            variant="outlined"
                            name="country"
                            id="country"
                            select
                            label="Country"
                            value={values.country}
                            onChange={handleChange}
                            helperText={
                              errors.country &&
                              touched.country &&
                              errors.country
                            }
                            error={!!(errors.country && touched.country)}
                          >
                            {Country.getAllCountries().map(
                              (country: ICountry) => (
                                <MenuItem
                                  key={country.isoCode}
                                  value={country.isoCode}
                                >
                                  {country.name}
                                </MenuItem>
                              )
                            )}
                          </TextField>
                          <TextField
                            sx={{ width: "49%", mb: 2 }}
                            variant="outlined"
                            name="state"
                            id="state"
                            select
                            label="State"
                            value={values.state}
                            onChange={handleChange}
                            helperText={
                              errors.state && touched.state && errors.state
                            }
                            error={!!(errors.state && touched.state)}
                          >
                            {values.country &&
                              State.getStatesOfCountry(values.country).map(
                                (state: IState) => (
                                  <MenuItem
                                    key={state.isoCode}
                                    value={state.isoCode}
                                  >
                                    {state.name}
                                  </MenuItem>
                                )
                              )}
                          </TextField>
                        </Box>
                        <TextField
                          sx={{ width: "100%", mb: 2 }}
                          variant="outlined"
                          name="city"
                          id="city"
                          select
                          label="City"
                          value={values.city}
                          onChange={handleChange}
                          helperText={
                            errors.city && touched.city && errors.city
                          }
                          error={!!(errors.city && touched.city)}
                        >
                          {values.country &&
                            City.getCitiesOfState(
                              values.country,
                              values.state
                            ).map((city: ICity) => (
                              <MenuItem key={city.name} value={city.name}>
                                {city.name}
                              </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                          sx={{ width: "100%", mb: 2 }}
                          name="street"
                          id="street"
                          label="Street"
                          value={values.street}
                          type="text"
                          helperText={
                            errors.street && touched.street && errors.street
                          }
                          error={!!(errors.street && touched.street)}
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
                            name="number"
                            id="number"
                            label="Street Number"
                            value={values.number}
                            type="text"
                            helperText={
                              errors.number && touched.number && errors.number
                            }
                            error={!!(errors.number && touched.number)}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <TextField
                            sx={{ width: "49%", mb: 2 }}
                            name="appartmentNumber"
                            id="appartmentNumber"
                            label="Appartment Number"
                            value={values.appartmentNumber}
                            type="text"
                            helperText={
                              errors.appartmentNumber &&
                              touched.appartmentNumber &&
                              errors.appartmentNumber
                            }
                            error={
                              !!(
                                errors.appartmentNumber &&
                                touched.appartmentNumber
                              )
                            }
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </Box>
                        <TextField
                          sx={{ width: "100%", mb: 2 }}
                          name="addressLine2"
                          id="addressLine2"
                          label="Address Line 2"
                          value={values.addressLine2}
                          type="text"
                          helperText={
                            errors.addressLine2 &&
                            touched.addressLine2 &&
                            errors.addressLine2
                          }
                          error={
                            !!(errors.addressLine2 && touched.addressLine2)
                          }
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
                            Go to Payment
                          </Button>
                        </Box>
                      </Box>
                    </Form>
                  );
                }}
              </Formik>
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
