import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, Checkbox, Divider, Link, Stack, TextField, Typography } from "@mui/material";
import { useAuth } from "src/hooks/use-auth";
import { Layout as AuthLayout } from "src/layouts/auth/layout";
import axios from "axios";
// import GoogleIcon from '@mui/icons-material/Google';
import { configs } from "src/config-variables";
import GoogleIcon from "src/components/googleIcon";

const Page = () => {
  const router = useRouter();
  const auth = useAuth();
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
      // name: Yup
      //   .string()
      //   .max(255)
      //   .required('Name is required'),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: async (values, helpers) => {
      let { email, password } = values;
      try {
        const response = await axios.post(`${configs.baseUrl}/auth/register`, {
          email,
          password,
        });
        console.log(">>>>>", response);
        if (response.status === 200) {
          // Successful login
          console.log("Register successful:", response.data);
          const { ok, data, message } = response.data;
          // login(user, token)
          alert(message);
          router.push("/auth/login");
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
        <title>Register | Devias Kit</title>
      </Head>
      <Box
        sx={{
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
              <Typography variant="h4">Register</Typography>
              <Typography color="text.secondary" variant="body2">
                Already have an account? &nbsp;
                <Link component={NextLink} href="/auth/login" underline="hover" variant="subtitle2">
                  Log in
                </Link>
              </Typography>
            </Stack>
            <form noValidate onSubmit={formik.handleSubmit}>
              <Stack spacing={3}>
                {/* <TextField
                  error={!!(formik.touched.name && formik.errors.name)}
                  fullWidth
                  helperText={formik.touched.name && formik.errors.name}
                  label="Name"
                  name="name"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                /> */}
                <TextField
                  error={!!(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Email Address"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="email"
                  value={formik.values.email}
                />
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
              </Stack>
              {formik.errors.submit && (
                <Typography color="error" sx={{ mt: 3 }} variant="body2">
                  {formik.errors.submit}
                </Typography>
              )}
              <Button fullWidth size="large" sx={{ mt: 3 }} type="submit" variant="contained">
                Continue
              </Button>
              <Divider
                sx={(theme) => ({
                  borderColor: "#000",
                  borderWidth: "1px",
                  mt: 1,
                })}
              >
                or
              </Divider>{" "}
              <GoogleRegister />
              <Button
                fullWidth
                disabled
                size="medium"
                sx={{ mt: 2 }}
                type="submit"
                variant="outlined"
              >
                Microsoft
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

const GoogleRegister = () => {
  const handleGoogleRegister = () => {
    // Redirect the user to the backend URL for Google Sign-In
    window.location.href = "http://localhost:3000/api/v1/auth/google/register";
  };

  return (
    <Button
      fullWidth
      size="medium"
      sx={{ mt: 2 }}
      color="secondary"
      variant="outlined"
      startIcon={<GoogleIcon />}
      onClick={handleGoogleRegister}
    >
      Continue with Google
    </Button>
  );
};
