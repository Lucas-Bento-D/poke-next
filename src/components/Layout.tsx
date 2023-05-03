import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
import React, { PropsWithChildren } from "react";

export default function Layout(props: PropsWithChildren){
    return(
        <>
            <Head>
                <title>PokeNext</title>
            </Head>
            <Navbar />
            <main className="main-container">{props.children}</main>
            <Footer />
        </>
    )
}