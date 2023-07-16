import Head from "next/head";
import { NextPage } from "next";
import { Container } from "@chakra-ui/react";
import Navbar from "@/components/navbar";
import RouteSelector from "@/components/requestSelector";
import ResponseData from "@/components/responseData";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Reenphy George</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />

        <Container h="100vh" pt="120px" maxW="xl">
          <RouteSelector />
          <ResponseData />
        </Container>
      </main>
    </>
  );
};

export default Home;
