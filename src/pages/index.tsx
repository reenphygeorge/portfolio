import Head from "next/head";
import { NextPage } from "next";
import { Container } from "@chakra-ui/react";
import Navbar from "@/components/navbar";
import RouteSelector from "@/components/requestSelector";
import ResponseData from "@/components/responseData";
import Footer from "@/components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Reenphy George</title>
        <meta
          name="description"
          content="Full Stack Developer | TypeScript | Golang | FOSS Enthusiast."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Container h="auto" pt="120px" mb="10" maxW="xl">
          <RouteSelector />
          <ResponseData />
        </Container>
        <Footer />
      </main>
    </>
  );
};

export default Home;
