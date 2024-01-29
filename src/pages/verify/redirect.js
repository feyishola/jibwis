import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { configs } from "src/config-variables";
import { useBearStore } from "src/contexts/store";

const Page = () => {
  const router = useRouter();
  const [render, setRender] = useState("");
  const { login } = useBearStore();

  useEffect(() => {
    const { token, message } = router.query;

    setRender("Validating...");
    if (token) {
      console.log({ token });

      fetch(`${configs.baseUrl}/auth/login-token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log({ res });
          const { ok, data, message } = res;

          setRender(message);

          if (ok) {
            setRender("Setting up stuff");
            login(data.user, data.token);
            // router.push('/');
          } else {
            setRender(message);
            // router.push('/'); // route guard will catch this
          }
        })
        .catch((error) => {
          console.error("Error during fetch:", error);
          setRender("An error occurred while processing the token.");
        });
    } else {
      setRender(message);
      setTimeout(() => {
        router.push("/auth/login");
      }, 3000);
    }
  }, [router.query, login]);

  return <div>{render}</div>;
};

export default Page;
