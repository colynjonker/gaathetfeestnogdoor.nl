import Link from "next/link";

export default function Footer() {
    return (
        <footer className={"site-footer"}>
            <div className="wrapper">
                <div className="payoff"><span>De Rijksoverheid. Tegen Nederland</span></div>
                <div className="column">
                    <h2>Service</h2>
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
                </div>
                <div className="column">
                    <h2>Over deze site</h2>
                    <ul>
                        <li>
                            <Link href={"/statistiek"}>
                                <a lang="/statistiek">Statistiek</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/contact"}>
                                <a lang="nl">Contact</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/locatie"}>
                                <a lang="nl">Locatie</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="languages">
                <div className="wrapper">
                    <ul>
                        <li className="selected">
                            <Link href={"/"}>
                                <a lang="nl">Nederlands</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"}>
                                <a lang="en">English</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
