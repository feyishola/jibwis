import * as React from "react";
import * as Yup from "yup";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Modal,
  Unstable_Grid2 as Grid,
  Typography,
} from "@mui/material";

import { useFormik } from "formik";
import axios from "axios";
import { configs } from "src/config-variables";
import { useBearStore } from "src/contexts/store";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  // height: 600,
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "0px solid #000",
  boxShadow: 94,
  borderRadius: 1,
  p: 4,
};

export default function ProfileSetup() {
  const [role, setRole] = React.useState("");
  const logout = useBearStore((state) => state.logout);
  return (
    <Modal
      open={true}
      // onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableEnforceFocus
    >
      <Box sx={style}>
        <Grid height={"100%"} container spacing={1.5}>
          <Grid display={"flex"} justifyContent={"space-between"} xs={12} md={12} lg={12}>
            <ArrowBackIcon onClick={() => setRole("")} />
            <PowerSettingsNewIcon sx={{ color: "red", ":hover": "pointer" }} onClick={logout()} />
          </Grid>

          {role == "" && (<Grid height={"80%"} display={"flex"} justifyContent={"center"} flexDirection={"column"} gap={3} xs={12} md={12} lg={12}>

            <Button onClick={() => setRole("patient")} variant="outlined">
              <Grid>
                <Typography m={1} variant="h3">
                  Patient
                </Typography>
                <Typography variant="caption">
                  Setup to book a specialist appointment for personalized care
                </Typography>
              </Grid>
            </Button>

            <Button onClick={() => setRole("doctor")} variant="outlined">
              <Grid>
                <Typography m={2} variant="h3">
                  Doctor
                </Typography>
                <Typography variant="caption">
                  Setup as a specialist to connect with patients seeking your specialized skills.
                </Typography>
              </Grid>
            </Button>


          </Grid>)}
          {role == "doctor" && <Doctor />}
          {role == "patient" && <Patient />}
        </Grid>
      </Box>
    </Modal>
  );
}

function Doctor() {
  const { token } = useBearStore();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      department: "",
      specialization: "",
      contactNumber: "",
      email: "",
      workingHours: "",
      availability: "",
      averageRating: "",
      ratingsCount: "",

      submit: null,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(255).required("First Name is required"),
      lastName: Yup.string().max(255).required("Last Name is required"),
      department: Yup.string().max(50).required("Department is required"),
      specialization: Yup.string().max(20).required("Specialization is required"),
      contactNumber: Yup.string().matches(/^\+(234)?[789][01]\d{8}$/, {
        message: "Invalid Nigerian phone number format (+2348012345678)",
      }).required("Phone is required"),
      // contactNumber: Yup.string().matches(/^\+(44)?[7-9]\d{9}$/, {
      //   message: "Invalid British phone number format (+447123456789)",
      // }).required("Phone is required"),
      email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
      workingHours: Yup.string().max(50).required("working Hours is required"),
      availability: Yup.string().max(50).required("availability is required"),
      averageRating: Yup.number().max(12).required("averageRating is required"),
      ratingsCount: Yup.number().required("ratingsCount is required")
    }),
    onSubmit: async (values, helpers) => {
      console.log("doctor de work", values);
      // sendRequest("/user/profile","PUT",{...values})

      // let { email, password } = values;
      // try {
      //   helpers.setSubmitting(true);
      //   const response = await axios.put(
      //     `${configs.baseUrl}/doctor`,
      //     { ...values },
      //     {
      //       headers: {
      //         Authorization: `Bearer ${token}`,
      //       },
      //     }
      //   );

      //   if (response.status === 200) {
      //     // Successful login
      //     console.log("Profile setup successful:", response.data);
      //   } else {
      //     helpers.setStatus({ success: false });
      //     helpers.setErrors({ submit: "Unexpected status code:" + response.status });
      //     helpers.setSubmitting(false);
      //   }
      // } catch (err) {
      //   if (err.response) {
      //     // The request was made, but the server responded with a status code other than 2xx
      //     // console.log(err.response)
      //     helpers.setStatus({ success: false });
      //     helpers.setErrors({ submit: err.response.data.message });
      //     helpers.setSubmitting(false);
      //   } else if (err.request) {
      //     // The request was made, but there was no response from the server
      //     helpers.setStatus({ success: false });
      //     helpers.setErrors({ submit: "No response from server" });
      //     helpers.setSubmitting(false);
      //   } else {
      //     // Something else went wrong
      //     helpers.setStatus({ success: false });
      //     helpers.setErrors({ submit: "Error:" + err.message });
      //     helpers.setSubmitting(false);
      //   }
      // }
    },
  });
  return (
    <Grid xs={12} md={12} lg={12}>
      <form autoComplete="off" noValidate onSubmit={formik.handleSubmit}>
        <Card>
          <CardHeader subheader="The information can be edited" title="Profile" />
          <CardContent sx={{ pt: 0 }}>
            <Box sx={{ m: -1.5 }}>
              <Grid container spacing={3}>
                <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="First name"
                    name="firstName"
                    required
                    error={!!(formik.touched.firstName && formik.errors.firstName)}
                    helperText={formik.touched.firstName && formik.errors.firstName}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                  />
                </Grid>
                <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Last name"
                    name="lastName"
                    required
                    error={!!(formik.touched.lastName && formik.errors.lastName)}
                    helperText={formik.touched.lastName && formik.errors.lastName}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                  />
                </Grid>
                <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Department"
                    name="department"
                    required
                    error={!!(formik.touched.department && formik.errors.department)}
                    helperText={formik.touched.department && formik.errors.department}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.department}
                  />
                </Grid>
                <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Specialization"
                    name="specialization"
                    required
                    error={!!(formik.touched.specialization && formik.errors.specialization)}
                    helperText={formik.touched.specialization && formik.errors.specialization}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.specialization}
                  />
                </Grid>
                <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Contact Number"
                    name="contactNumber"
                    type="tel"
                    required
                    error={!!(formik.touched.contactNumber && formik.errors.contactNumber)}
                    helperText={formik.touched.contactNumber && formik.errors.contactNumber}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.contactNumber}
                  />
                </Grid>
                <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    required
                    type="email"
                    error={!!(formik.touched.email && formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </Grid>
                <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Working Hours"
                    name="workingHours"
                    required
                    error={!!(formik.touched.workingHours && formik.errors.workingHours)}
                    helperText={formik.touched.workingHours && formik.errors.workingHours}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.workingHours}
                  />
                </Grid>
                <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Availability"
                    name="availability"
                    required
                    error={!!(formik.touched.availability && formik.errors.availability)}
                    helperText={formik.touched.availability && formik.errors.availability}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.availability}
                  />
                </Grid>
                <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Average Rating"
                    name="averageRating"
                    required
                    error={!!(formik.touched.averageRating && formik.errors.averageRating)}
                    helperText={formik.touched.averageRating && formik.errors.averageRating}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.averageRating}
                  />
                </Grid>
                <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Ratings Count"
                    name="ratingsCount"
                    required
                    error={!!(formik.touched.ratingsCount && formik.errors.ratingsCount)}
                    helperText={formik.touched.ratingsCount && formik.errors.ratingsCount}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.ratingsCount}
                  />
                </Grid>
                <Grid xs={12} md={6}>
                  {/* <TextField
                          fullWidth
                          label="usertype/category"
                          name="usertype"
                          required
                          select
                          variant="outlined"
                          SelectProps={{ native: true }}
                          error={!!(formik.touched.state && formik.errors.state)}
                          helperText={formik.touched.firstName && formik.errors.firstName}
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.state}
                        >
                          <option aria-label="None" value="" />{" "}
                          {/* Add an empty option as a placeholder */}
                  {/* {formik.values.usertype !== "" &&
                          // Render options only if the field is not empty
                          category.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </TextField> */}

                </Grid>
                {/* {additionalFields.map((field) => (
                  <Grid key={field.name} xs={12} md={6}>
                    <TextField
                      fullWidth
                      label={field.label}
                      name={field.name}
                      required={field.required}
                      type={field.type || "text"}
                      select={field.select}
                      variant="outlined"
                      error={!!(formik.touched[field.name] && formik.errors[field.name])}
                      helperText={formik.touched[field.name] && formik.errors[field.name]}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values[field.name]}
                    >
                      {field.options &&
                        field.options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                    </TextField>
                  </Grid>
                ))} */}
              </Grid>
            </Box>
            {formik.errors.submit && (
              <Typography color="error" sx={{ mt: 3 }} variant="body2">
                {formik.errors.submit}
              </Typography>
            )}
          </CardContent>
          <Divider />
          <CardActions sx={{ justifyContent: "flex-end" }}>
            <Button variant="contained" type="submit">
              Save details
            </Button>
          </CardActions>
        </Card>
      </form>
    </Grid>
  );
}

function Patient() {
  const { token } = useBearStore();
  const formik = useFormik({
    initialValues: {
      name: "",
      // dateOfBirth: "",
      gender: "",
      contactNumber: "",
      email: "",
      address: "",
      medicalHistory: "",
      submit: null,
    },
    validationSchema: Yup.object({
      name: Yup.string().max(255).required("Name is required"),
      // dateOfBirth: Yup.date().required("Date of Birth is required"),
      gender: Yup.string().max(10).required("gender is required"),
      contactNumber: Yup.string().max(15, "invalid phone").required("Phone is required"),
      email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
      address: Yup.string().max(255).required("address required"),
      medicalHistory: Yup.string().max(50).required("medicalHistory is required"),
      // specialization: Yup.string().max(20).required("Specialization is required"),
    }),
    onSubmit: async (values, helpers) => {
      console.log("values", values);
      console.log("helpers", helpers);
      // sendRequest("/user/profile", "PUT", { ...values })
      // let { email, password } = values;
      try {
        helpers.setSubmitting(true);
        const response = await axios.put(
          `${configs.baseUrl}/patient/profile`,
          { ...values },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("response>>", response);
        if (response.status === 200) {
          // Successful login
          console.log("profile setup successful:", response.data);
        } else {
          helpers.setStatus({ success: false });
          helpers.setErrors({ submit: "Unexpected status code:" + response.status });
          helpers.setSubmitting(false);
        }
      } catch (err) {
        if (err.response) {
          // The request was made, but the server responded with a status code other than 2xx
          // console.log(err.response)
          helpers.setStatus({ success: false });
          helpers.setErrors({ submit: err.response.data.message });
          helpers.setSubmitting(false);
        } else if (err.request) {
          // The request was made, but there was no response from the server
          helpers.setStatus({ success: false });
          helpers.setErrors({ submit: "No response from server" });
          helpers.setSubmitting(false);
        } else {
          // Something else went wrong
          helpers.setStatus({ success: false });
          helpers.setErrors({ submit: "Error:" + err.message });
          helpers.setSubmitting(false);
        }
      }
    },
  });
  return (
    <Grid xs={12} md={12} lg={12}>
      <form autoComplete="off" noValidate onSubmit={formik.handleSubmit}>
        <Card>
          <CardHeader subheader="The information can be edited" title="Profile" />
          <CardContent sx={{ pt: 0 }}>
            <Box sx={{ m: -1.5 }}>
              <Grid container spacing={3}>
                <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    required
                    error={!!(formik.touched.name && formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                </Grid>
                <Grid xs={12} md={6}>

                </Grid>
                <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Gender"
                    name="gender"
                    required
                    error={!!(formik.touched.gender && formik.errors.gender)}
                    helperText={formik.touched.gender && formik.errors.gender}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.gender}
                  />
                </Grid>
                <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Contact Number"
                    name="contactNumber"
                    required
                    error={!!(formik.touched.contactNumber && formik.errors.contactNumber)}
                    helperText={formik.touched.contactNumber && formik.errors.contactNumber}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.contactNumber}
                  />
                </Grid>
                <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    required
                    error={!!(formik.touched.email && formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </Grid>
                <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Address"
                    name="address"
                    required
                    error={!!(formik.touched.address && formik.errors.address)}
                    helperText={formik.touched.address && formik.errors.address}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.address}
                  />
                </Grid>
                <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Medical History"
                    name="medicalHistory"
                    required
                    error={!!(formik.touched.medicalHistory && formik.errors.medicalHistory)}
                    helperText={formik.touched.medicalHistory && formik.errors.medicalHistory}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.medicalHistory}
                  />
                </Grid>
              </Grid>
            </Box>
            {formik.errors.submit && (
              <Typography color="error" sx={{ mt: 3 }} variant="body2">
                error:{formik.errors.submit}
              </Typography>
            )}
          </CardContent>
          <Divider />
          <CardActions sx={{ justifyContent: "flex-end" }}>
            <Button variant="contained" type="submit">
              Save details
            </Button>
          </CardActions>
        </Card>
      </form>
    </Grid>
  );
}
