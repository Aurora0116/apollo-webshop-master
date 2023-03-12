import type { NextPage } from "next";
import Head from "next/head";

const Login: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Login</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare cursus nulla vestibulum dignissim. Donec felis leo, dapibus ut bibendum"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="full-width">
        <div className="container mr-[auto] ml-[auto]">EN</div>
        <div className="container mr-[auto] ml-[auto]">AR</div>
      </div>
    </div>
  );
};

export default Login;
