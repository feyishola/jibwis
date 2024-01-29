import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { configs } from "src/config-variables";
import { useBearStore } from "src/contexts/store";

const Page = () => {
  const router = useRouter();
  const [render, setRender] = useState("");
  const { login } = useBearStore();

  useEffect(() => {
    try {
      // Get the 'token' query parameter from the URL
      const { code } = router.query;
      setRender("validating thingyyy .....");
      if (code) {
        // Do so{mething with the token (e.g., send it to the server for processing)
        fetch(`${configs.baseUrl}/auth/google`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code }),
        })
          .then((res) => res.json())
          .then((res) => {
            const { ok, data, message } = res;
            setRender(message);
            if (ok) {
              setRender("setting up stuff");
              let { user, token: jwt } = data;
              login(user, jwt);
              // router.push('/');
              return;
            } else {
              setRender(message);
              // router.push('/'); // route guard will catch this
              return;
            }
          });
      } else {
        setRender("code not found");
        setTimeout(() => {
          // router.push("/"); // route guard will catch this
        }, 3000);
      }
    } catch (error) {
      setRender(error.message);

    }

  }, [router.query]);

  return <div>{render}</div>;
};

export default Page;
