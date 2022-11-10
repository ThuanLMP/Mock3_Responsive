import Footer from "../Footer";
import Header from "../Header";

type Props = {
    children: JSX.Element
}

export default function Layout({ children }: Props) {
    return (
        <>
            <Header />
            <div>{children}</div>
            <Footer />
        </>
    )
}