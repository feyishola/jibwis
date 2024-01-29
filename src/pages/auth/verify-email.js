"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { configs } from "src/config-variables";
import { useBearStore } from "src/contexts/store";
import * as Realm from "realm-web";

const Page = () => {
  const realmApp = new Realm.App({ id: "application-0-qroqk" });
  const router = useRouter();
  const [render, setRender] = useState("");
  const { login } = useBearStore();

  //   console.log({ token, tokenId });

  useEffect(() => {
    // const validateUser = async () => {
    const { token, tokenId } = router.query;
    try {
      if (token) {
        console.log({ tokenId, token });
        setRender([token, tokenId]);
        realmApp.emailPasswordAuth
          .confirmUser({
            token,
            tokenId,
          })
          .then((res) => {
            // alert("user validated");
            console.log(res, ">>>>");
          })
          .catch((err) => {
            console.log(err.message);
          });
      } else {
        throw new Error("token not available");
      }
    } catch (error) {
      console.log(error.message);
      console.log(render);
    }
    // };

    // validateUser();

    // if (token) {
    //   realmApp.emailPasswordAuth
    //     .confirmUser({ token, tokenId })
    //     .then((res) => console.log(res))
    //     //   .then((res) => console.log({ res }))
    //     .catch((err) => console.log(err.message));
    // } else {
    //   alert("token not available");
    // }
  }, [router.query]);

  //   useEffect(() => {
  //       // Get the 'token' query parameter from the URL
  //       const { token, tokenId } = router.query;
  //       setRender("validating .....");
  //       if (token) {
  //         // Do so{mething with the token (e.g., send it to the server for processing)
  //         // fetch(`${configs.baseUrl}/auth/verify-email`, {
  //         //   method: "POST",
  //         //   headers: {
  //         //     "Content-Type": "application/json",
  //         //   },
  //         //   body: JSON.stringify(token),
  //         // })
  //         //   .then((res) => res.json())
  //         //   .then((res) => {
  //         //     const { ok, data, message } = res;
  //         //     let { user, token: jwt } = data;
  //         //     setRender(message);
  //         //     if (ok) {
  //         //       setRender("setting up stuff");
  //         //       login(user, jwt);
  //         //       // router.push('/');
  //         //       return;
  //         //     } else {
  //         //       setRender(message);
  //         //       // router.push('/'); // route guard will catch this
  //         //       return;
  //         //     }
  //         //   });
  //
  //       } else {
  //         setRender(message);
  //         setTimeout(() => {
  //           router.push("/"); // route guard will catch this
  //         }, 3000);
  //       }
  //     }, [router.query]);

  //     return <div>{render}</div>;
  return (
    <div>
      <h3>{render}</h3>
    </div>
  );
};

export default Page;
