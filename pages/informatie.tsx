import Link from "next/link";
import {ReactElement} from "react";
import Layout from "../components/Layout";

export default function Informatie() {
    return (
        <div className="wrapper">
            <div className="article content">
                <h1 className="news">Verplaatsing Feest onder omstandigheden: Voorkeur Februari</h1>
                <p className="article-meta">Nieuwsbericht | 22-12-2021 | 15:01</p>
                <div className="intro">
                    <p>Het is de afgelopen tijd steeds duidelijker geworden dat we de komende tijd weer maximaal mogen gaan feesten.
                        Daarom moeten wij, leden van het Koninklijk Huis, gezien de huidige
                        omstandigheden, de planning van het feest verder in gang zetten.
                        De nieuwe datum voor het feest is vastgezet op <strong>30 april</strong>.
                        <br />
                        Let op, als u voorheen was
                        uitgenodigd maar niet in staat was te komen, bent u nog steeds welkom bij dit feest. De
                        leden van het Koninklijk Huis gaan er dus ook vanuit van iedereens <strong>aanwezigheid</strong> op de snel aangekondigde datum. Wij hadden veel zin in het
                        feest en wij hopen jullie natuurlijk ook. Meer informatie zal spoedig worden bekent gemaakt op deze website of in de groepsapp. Vragen? Neem
                        <Link href={"/contact"}><a
                                href="https://gaathetfeestnogdoor.nl/contact"> contact</a>
                        </Link> met ons op.
                    </p>
                </div>
                <hr />
                <p>Omdat we nog steeds in de lockdown zitten bestaat de mogelijkheid dat onze beoogde
                    groepsgrootte
                    in februari niet is toegestaan. Houdt daarom goed de groepsapp in de gaten, of vraag het aan
                    Bas
                    of Colyn.
                    <br />
                    Niet zeker wat het plan van het feestje was, download de
                    <Link href={"pdf/uitnodiging.pdf"}><a
                        className="external"
                        download="download">koninklijke uitnodiging</a>
                    </Link>.
                    We hopen snel weer met jullie een grandioos feest te bouwen.
                </p>
                <hr />
            </div>
        </div>
    )
}

Informatie.getLayout = function getLayout(page: ReactElement) {
    return(
        <Layout title={"Informatie"}>
            {page}
        </Layout>
    )

}
