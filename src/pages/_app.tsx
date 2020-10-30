import { AppProps } from "next/app";

import "./app.scss";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Component {...pageProps} />
    )
}

export default MyApp;