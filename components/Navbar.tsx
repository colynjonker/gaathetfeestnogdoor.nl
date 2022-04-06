import Link from "next/link";
import {Component} from "react";


class Navbar extends Component<{ pageTitle: string }> {
    render() {
        let {pageTitle} = this.props;
        return (
            <div id="navBar">
                <div className="wrapper">
                    <nav className="breadCrumbNav" aria-labelledby="breadCrumbNavLabel">
                        <span className={"assistive"} id={"breadCrumbNavLabel"}>U bevindt zich hier</span>
                        <Link href="/">
                            Koninklijk Huis
                        </Link>
                        <span>{pageTitle}</span>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Navbar
