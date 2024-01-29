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
  const [render, setRender] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string().email().max(255).required("Email is required"),
    }),
    onSubmit: async (values, helpers) => {
      let { email } = values;
      try {
        const response = await axios.post(`${configs.baseUrl}/auth/forgot-password`, {
          email,
        });

        if (response.status === 200) {
          // Successful login
          console.log("Login successful:", response.data);
          const { ok, message } = response.data;
          alert(message);
          // router.push('/');
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

  useEffect(() => {
    const { token, message } = router.query;
    setRender("validating .....");
    if (token) {
      // Do so{mething with the token (e.g., send it to the server for processing)
      fetch(`${configs.baseUrl}/auth/google/login/verify?token=${token}`)
        .then((res) => res.json())
        .then((res) => {
          const { ok, data, message } = res;
          if (ok) {
            setRender("setting up stuff");
            return;
          } else {
            setRender(message);
            return;
          }
        });
    } else {
      setRender(message);
    }
  }, [router.query]);
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
              <Typography variant="h5">Forgot Password</Typography>
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
                  error={!!(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Email"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="email"
                  value={formik.values.email}
                />
              </Stack>
              {formik.errors.submit && (
                <Typography color="error" sx={{ mt: 3 }} variant="body2">
                  {formik.errors.submit}
                </Typography>
              )}
              <Button fullWidth size="large" sx={{ mt: 3 }} type="submit" variant="contained">
                Send forgot Password link
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
