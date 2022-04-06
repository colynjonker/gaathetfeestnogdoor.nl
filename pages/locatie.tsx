import {ReactElement} from "react";
import Layout from "../components/Layout";

export default function Locatie() {
    return (
        <>
            <div className={"wrapper"}>
                <div className="article content">
                    <h1 className="news">Feestlocatie</h1>
                    <p className="article-meta">Laatst ge-update 01-04-22 | 15:01</p>
                </div>
            </div>
        </>
    )
}

Locatie.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout title={"Locatie"}>
            {page}
        </Layout>
    )
}
