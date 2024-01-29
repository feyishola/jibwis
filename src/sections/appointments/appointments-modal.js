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
import ClearIcon from '@mui/icons-material/Clear';

import { useFormik } from "formik";
// import axios from "axios";
// import { configs } from "src/config-variables";
// import { useBearStore } from "src/contexts/store";
// import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
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

export default function AppointmentModal({ open, onClose }) {
    // const logout = useBearStore((state) => state.logout);
    
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            disableEnforceFocus
        >
            <Box sx={style}>
                <Grid height={"100%"} container spacing={1.5}>
                    <Grid display={"flex"} justifyContent={"space-between"} xs={12} md={12} lg={12}>
                        <ClearIcon sx={{ color: "red", ":hover": "pointer" }} onClick={onClose} />
                    </Grid>
                    {<Form />}
                </Grid>
            </Box>
        </Modal>
    );
}

function Form() {

    const formik = useFormik({
        initialValues: {
            // transactionId: "",
            // patientId: "",
            doctorId: "",
            start: "",
            end: "",
            purpose: "",
            // status: "",
            submit: null,
        },
        validationSchema: Yup.object({
            // transactionId: Yup.string().max(255).required("transactionId is required"),
            // patientId: Yup.string().max(255).required("patientId is required"),
            doctorId: Yup.string().max(255).required("Doctor is required"),
            // start: Yup.date().max(20).required("start is required"),
            // end: Yup.string().max(20).required("end is required"),
            purpose: Yup.string().email("purpose is required").max(255).required("Email is required"),
            status: Yup.string().max(50).required("status is required"),

        }),
        onSubmit: async (values, helpers) => {
            // sendRequest("/user/profile","PUT",{...values})

            // let { email, password } = values;
            try {
                helpers.setSubmitting(true);
                // const response = await axios.put(
                //     `${configs.baseUrl}/appointment`,
                //     { ...values },
                //     // {
                //     //     headers: {
                //     //         Authorization: `Bearer ${token}`,
                //     //     },
                //     // }
                // );

                if (response.status === 200) {
                    // Successful login
                    console.log("Profile setup successful:", response.data);
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
                    <CardHeader subheader="" title="Booking Appointments" />
                    <CardContent sx={{ pt: 0 }}>
                        <Box sx={{ m: -1.5 }}>
                            <Grid container spacing={3}>
                                <Grid xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Doctor"
                                        name="doctor"
                                        required
                                        error={!!(formik.touched.doctor && formik.errors.doctor)}
                                        helperText={formik.touched.doctor && formik.errors.doctor}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.doctor}
                                    />
                                </Grid>
                                <Grid xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Start Time"
                                        name="startTime"
                                        required
                                        error={!!(formik.touched.startTime && formik.errors.startTime)}
                                        helperText={formik.touched.startTime && formik.errors.startTime}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.startTime}
                                    />
                                </Grid>
                                <Grid xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="End Time"
                                        name="endTime"
                                        required
                                        error={!!(formik.touched.endTime && formik.errors.endTime)}
                                        helperText={formik.touched.endTime && formik.errors.endTime}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.endTime}
                                    />
                                </Grid>
                                <Grid xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Purpose"
                                        name="purpose"
                                        required
                                        error={!!(formik.touched.purpose && formik.errors.purpose)}
                                        helperText={formik.touched.purpose && formik.errors.purpose}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.purpose}
                                    />
                                </Grid>
                                <Grid xs={12} md={6}>
                                    {/* <DateTimeField label="Basic date time field" /> */}
                                </Grid>


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



