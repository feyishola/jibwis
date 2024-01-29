import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { configs } from "src/config-variables";
import { useBearStore } from "src/contexts/store";

const Page = () => {
  const router = useRouter();
  const [render, setRender] = useState("");
  const { login } = useBearStore();

  // useEffect(() => {
  //   // Get the 'token' query parameter from the URL
  //   const { token } = router.query;
  //   setRender("validating .....")
  //   if (token) {
  //     // Do so{mething with the token (e.g., send it to the server for processing)
  //     fetch(`${configs.baseUrl}/auth/verify?token=${token}`).then(res => res.json()).
  //       then(res => {
  //         const { ok, data, message } = res
  //         let { user, token: jwt } = data
  //         setRender(message)
  //         if (ok) {
  //           setRender("setting up stuff")
  //           login(user, jwt)
  //           // router.push('/');
  //           return
  //         } else {
  //           setRender(message)
  //           // router.push('/'); // route guard will catch this
  //           return
  //         }
  //       })

  //   } else {
  //     setRender(message)
  //     setTimeout(() => {
  //       router.push('/');  // route guard will catch this
  //     }, 3000);
  //   }
  // }, [router.query]);

  useEffect(() => {
    // Get the 'token' query parameter from the URL
    const { token } = router.query;
    setRender("validating .....");
    if (token) {
      // Do so{mething with the token (e.g., send it to the server for processing)
      fetch(`${configs.baseUrl}/auth/verify-user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(token),
      })
        .then((res) => res.json())
        .then((res) => {
          const { ok, data, message } = res;
          let { user, token: jwt } = data;
          setRender(message);
          if (ok) {
            setRender("setting up stuff");
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
      setRender(message);
      setTimeout(() => {
        router.push("/"); // route guard will catch this
      }, 3000);
    }
  }, [router.query]);

  return <div>{render}</div>;
};

export default Page;
