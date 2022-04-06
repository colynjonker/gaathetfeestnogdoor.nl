import Layout from "../components/Layout";
import {ReactElement} from "react";
import Image from 'next/image';

export default function Cookies() {
    return (
        <>
        <div className="wrapper">
            <Image src={"/img/cookies.jpg"} layout={"fill"} alt="Cookies"/>
        </div>
        </>
    )
}

Cookies.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout title={"Cookies"}>
            {page}
        </Layout>
    )
}
