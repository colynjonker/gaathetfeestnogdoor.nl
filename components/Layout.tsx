import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({children, title}: any) {
    return (
        <>
            <Header />
            <Navbar pageTitle={title}/>
            <main id="content-wrapper">
                {children}
            </main>
            <Footer />
        </>


    )

}


