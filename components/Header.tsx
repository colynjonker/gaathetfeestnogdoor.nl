import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo-ro.svg';

function Header() {
    return (
        <header>
            <Link href="/">
                <a>
                    <div className="logo">
                        <div className="wrapper">
                            <Image src={logo} />
                        </div>
                    </div>
                </a>
            </Link>

        </header>
    )

}

export default Header;
