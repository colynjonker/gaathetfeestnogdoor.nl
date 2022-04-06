import Link from "next/link";
import {ReactElement} from "react";
import Layout from "../components/Layout";

export default function error404() {
    return (
        <div className="wrapper">
            <div className="article content">
                <h1>Niet gevonden</h1>
                <div className="intro">
                    <p> De pagina die u wilde zien of het bestand dat u wilde bekijken is niet gevonden. </p>
                </div>
                <h2>U kunt informatie over het feestje mogelijk vinden via de volgende pagina&apos;s</h2>
                <ul>
                    <li>
                        <Link href={"/locatie"}>
                            <a lang="nl">Locatie</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/contact"}>
                            <a lang="nl">Contact</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/informatie"}>
                            <a lang="nl">Informatie</a>
                        </Link>
                    </li>
                </ul>
                <h2>Bent u op zoek naar andere informatie?</h2>
                <p>Google ff</p>
                <hr />
                <p>
                    <code>Foutcode: 404</code>
                </p>
                <Link href={"/"}>
                    <a className="ctaBtn" >Ga terug</a>
                </Link>
            </div>
        </div>
    )
}
error404.getLayout = function getLayout(page: ReactElement) {
    return(
        <Layout title={"Niet gevonden"}>
            {page}
        </Layout>
    )

}
