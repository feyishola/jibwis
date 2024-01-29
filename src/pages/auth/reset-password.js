import { useState, useEffect } from "react";
import Head from "next/head";
import NextLink from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, Link, Stack, TextField, Typography } from "@mui/material";
import { useAuth } from "src/hooks/use-auth";
import { Layout as AuthLayout } from "src/layouts/auth/layout";
import { configs } from "src/config-variables";
import axios from "axios";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const { token, message } = router.query;

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      submit: null,
    },
    validationSchema: Yup.object({
      password: Yup.string().max(255).required("Password is required"),
      confirmpassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: async (values, helpers) => {
      let { password } = values;
      try {
        const response = await axios.post(`${configs.baseUrl}/auth/reset-password`, {
          password,
          token,
        });

        if (response.status === 200) {
          // Successful login
          console.log("Login successful:", response.data);
          const { ok, token } = response.data;
          router.push("/");
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
    <>
      <Head>
        <title>Login | Devias Kit</title>
      </Head>
      <Box
        sx={{
          backgroundColor: "background.paper",
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: "100px",
            width: "100%",
          }}
        >
          <div>
            <Stack spacing={1} sx={{ mb: 3 }}>
              <Typography variant="h5">Request Password Reset</Typography>
              <Typography color="text.secondary" variant="body2">
                Already have an account? &nbsp;
                <Link component={NextLink} href="/auth/login" underline="hover" variant="subtitle2">
                  Login
                </Link>
              </Typography>
            </Stack>
            <form noValidate onSubmit={formik.handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  error={!!(formik.touched.password && formik.errors.password)}
                  fullWidth
                  helperText={formik.touched.password && formik.errors.password}
                  label="Password"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.password}
                />
                <TextField
                  error={!!(formik.touched.confirmpassword && formik.errors.confirmpassword)}
                  fullWidth
                  helperText={formik.touched.confirmpassword && formik.errors.confirmpassword}
                  label="Confirm Password"
                  name="confirmpassword"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.confirmpassword}
                />
              </Stack>
              {formik.errors.submit && (
                <Typography color="error" sx={{ mt: 3 }} variant="body2">
                  {formik.errors.submit}
                </Typography>
              )}
              <Button
                fullWidth
                size="large"
                sx={{ mt: 3 }}
                type="submit"
                variant="contained"
                disabled={token ? false : true}
              >
                Reset Password
              </Button>
            </form>
          </div>
        </Box>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;

export default Page;
