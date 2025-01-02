import "./AllVariables.global.scss";
import {inter} from "../ui/fonts";

export default function App({Component, pageProps}) {
    return(<div class={inter.variable}>
        <Component {...pageProps} />;

    </div>);
}