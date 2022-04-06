import {ReactElement} from "react";
import Layout from "../components/Layout";

export default function Contact() {
    return (
        <div className="wrapper">
            <div className="article content">
                <h1> Contact met Bas &amp; Colyn</h1>
                <div className="intro">
                    <p> U kunt uw vragen, opmerkingen of suggesties doorgeven aan Bas of Colyn. De contactgegevens
                        vindt u hieronder. Kijk in de <a href="https://gaathetfeestnogdoor.nl/www.whatsapp.com"
                                                         className="external">groepsapp</a> of bel op <a
                            href="tel:+31620837279">mij</a> (op
                        werkdagen bereikbaar van 12.00 tot 20.00 uur). Een brief is nog leuker. </p>
                </div>
                <h2>Feestlocatie</h2>
                <p> Odeon<br /> Schout Doddestraat 46B<br /> 7671 GT Vriezenveen</p>
                <h2>Bas Spijkerman</h2>
                <p> a.k.a. De Koning </p>
                <h3>Telefoonnummber</h3>
                <p><a href="tel:+31655055019">06 550 550 19</a></p>
                <h3>Email</h3>
                <p><a href="mailto:basspijkerman1998@gmail.com">basspijkerman1998@gmail.com</a></p>
                <h3>Postadres</h3>
                <p>Krijgerstraat 43<br />7671 XW Vriezenveen</p>
                <h2>Colyn Jonker</h2>
                <p> a.k.a. De Koning </p>
                <h3>Telefoonnummber</h3>
                <p><a href="tel:+31620837279">06 208 372 79</a></p>
                <h3>Email</h3>
                <p><a href="mailto:colynjonker@hotmail.com">colynjonker@hotmail.com</a></p>
                <h3>Postadres</h3>
                <p>De Patrijs 3<br />7671 XC Vriezenveen</p>
            </div>
            <div className="fullWidthSection"></div>
        </div>
    )
}

Contact.getLayout = function getLayout(page: ReactElement) {
    return(
        <Layout title={"Contact"}>
            {page}
        </Layout>
    )

}
