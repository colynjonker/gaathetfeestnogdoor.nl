import type { NextPage } from 'next'
import Link from 'next/link';
import {ReactElement} from "react";
import Layout from '../components/Layout';

export default function Home() {
  return (
      <>
        <div className={"headerImage smallHeaderImage"}>
            <div className={"darkOverlay"}
    style={{
        opacity: "0.15",
        display: "block",
    }}/>
            <div className={"wrapper"}>
                <div className={"body"}>
                    <h1>Update Feest:</h1>
                    <p>Het feest wordt gehouden op <strong>30 april, 20:30</strong>, ter Vriezenveen</p>
                    <p>Enkele aandachtpunten zijn</p>
                    <ul>

                        <li>Kostuums worden geperfectioneerd;</li>
                        <li>Alle afwezigen opnieuw uitgenodigd;</li>
                        <li>Lees het nieuwsbericht via onderstaande knop;</li>
                        <li>Meld je aan in ons aanmeldformulier <strong>hieronder</strong>;</li>
                    </ul>
                    <Link href={"/aanmelden"}>
                        <a className="ctaBtn" >Meld je aan</a>
                    </Link>

                </div>

            </div>
            <div className="slide showSlide" >
                <figure className="img-container">

                </figure>
            </div>
        </div>
          <div className="subNavigation">
              <div className="wrapper">
                  <ul>
                      <Link href={"/informatie"}>
                          <li><a> Informatie </a></li>
                      </Link>
                      <Link href={"/contact"}>
                          <li><a> Contact </a></li>
                      </Link>
                      <Link href={"/locatie"}>
                          <li><a> Feestlocatie </a></li>
                      </Link>
                      <Link href={"/pdf/uitnodiging.pdf"}>
                          <li><a className="external" download="download"> Algemene uitnodiging </a></li>
                      </Link>
                      <Link href={"/aanmelden"}>
                          <li><a>Aanmeldformulier</a></li>
                      </Link>
                      <Link href={"/statistiek"}>
                          <li><a>Statistieken</a></li>
                      </Link>
                  </ul>
              </div>
          </div>
          <div className="wrapper">
              <div className="article content">
                  <h1>Het feest gaat door op <strong>30 april</strong>.</h1>
                  <div className="intro">
                      <p>Houdt deze website in de gaten voor meer informatie.</p>
                  </div>
              </div>
          </div>
      </>

  )
}

Home.getLayout = function getLayout(page: ReactElement) {
    return(
        <Layout title={"Commissie der Feesten & Partijen"}>
            {page}
        </Layout>
    )

}
