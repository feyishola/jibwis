import { useCallback, useState, useEffect } from "react";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Link,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useAuth } from "src/hooks/use-auth";
import { Layout as AuthLayout } from "src/layouts/auth/layout";
import { useBearStore } from "src/contexts/store";
import GoogleIcon from "src/components/googleIcon";
import axios from "axios";
import { configs } from "src/config-variables";
import useFirebaseMessaging from "src/hooks/use-web-push";
import * as Realm from "realm-web";

const Page = () => {
  // Add your App ID
  const realmApp = new Realm.App({ id: "application-0-qroqk" });

  const router = useRouter();
  const auth = useAuth();
  const { login, user } = useBearStore();
  const [token, setToken] = useState(null);

  const { fcmToken, subscribeToTopic, unsubscribeFromTopic } =
    useFirebaseMessaging();
  console.log({ fcmToken });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: async (values, helpers) => {
      let { email, password } = values;
      try {
        await realmApp.emailPasswordAuth.registerUser({ email, password });
      } catch (error) {
        alert(error.message);
      }

      // try {
      //   const response = await axios.post(`${configs.baseUrl}/auth/login`, {
      //     email,
      //     password,
      //   });

      //   if (response.status === 200) {
      //     // Successful login
      //     console.log("Login successful:", response.data);
      //     const { user, token } = response.data.data;
      //     login(user, token);
      //     router.push("/");
      //   } else {
      //     helpers.setStatus({ success: false });
      //     helpers.setErrors({
      //       submit: "Unexpected status code:" + response.status,
      //     });
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
  // useEffect(() => {
  //   async function getNotification() {
  //     const xx = await Notification.requestPermission()
  //     console.log({ xx });
  //   }
  //   getNotification()
  // },[])

  // const handleSkip = useCallback(() => {
  //   auth.skip();
  //   router.push("/");
  // }, [auth, router]);

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
              <Typography variant="h4">Login</Typography>
              <Typography color="text.secondary" variant="body2">
                Don&apos;t have an account? &nbsp;
                <Link
                  component={NextLink}
                  href="/auth/register"
                  underline="hover"
                  variant="subtitle2"
                >
                  Register
                </Link>
              </Typography>
            </Stack>
            <form noValidate onSubmit={formik.handleSubmit}>
              <Stack spacing={3}>
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
              <Stack gap={4} sx={{ mt: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Remember me"
                  />
                  <Link level="title-sm" href="/auth/forgot-password">
                    Forgot your password?
                  </Link>
                </Box>
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
              >
                Continue
              </Button>
              {/* <Divider sx={{ mt: 5, borderColor: "gray", borderWidth: "px" }} /> */}
              {/* <Divider
                sx={(theme) => ({
                  borderColor: "#000",
                  borderWidth: "1px",
                  mt: 1,
                })}
              >
                or
              </Divider>
              <GoogleSignIn />
              <Button
                fullWidth
                disabled
                size="medium"
                sx={{ mt: 2 }}
                type="submit"
                variant="outlined"
              >
                Microsoft
              </Button> */}
            </form>
          </div>
        </Box>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;

export default Page;

const GoogleSignIn = () => {
  const handleGoogleSignIn = () => {
    // Redirect the user to the backend URL for Google Sign-In
    window.location.href =
      "https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=1020201000495-pabs2b6gk4743a3sg89o8d65js9cqq3t.apps.googleusercontent.com&redirect_uri=http://localhost:4000/auth/callback/google&scope=email profile&access_type=offline&prompt=consent";
  };

  // Use useEffect to handle the callback when the user is redirected back
  useEffect(() => {
    // Define a function to handle the callback logic
    const handleCallback = async () => {
      // Parse query parameters from the URL
      const params = new URLSearchParams(window.location.search);
      const success = params.get("authtoken"); // Check if 'success' parameter is present in the URL

      if (success) {
        try {
          // Fetch user data or token from the backend using the success token received in the callback
          const response = await fetch(
            "http://localhost:3000/api/v1/auth/user",
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${success}`, // Pass the token received in the callback as an authorization header
              },
            }
          );

          if (response.ok) {
            // If the response is successful, parse the user data
            const userData = await response.json();
            // Handle the user data as needed (e.g., set user state)
            setUserData(userData.data);
            console.log("User data:", userData);
          } else {
            // Handle the case where fetching user data fails
            console.error("Failed to fetch user data");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    // Call the handleCallback function when the component mounts (once)
    handleCallback();
  }, []);

  return (
    <Button
      fullWidth
      size="medium"
      sx={{ mt: 2 }}
      color="secondary"
      variant="outlined"
      startIcon={<GoogleIcon />}
      onClick={handleGoogleSignIn}
    >
      Continue with Google
    </Button>
  );
};
