import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import LandingPg from "../components/LandingPg";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Ratepunk - Invite your friends!</title>
				<meta name="description" content="Hotel price comparison" />
				<link rel="icon" href="/images/favicon.png" />
			</Head>
			<Navbar />
			<LandingPg />
			<Footer />
		</>
	);
};

export default Home;
