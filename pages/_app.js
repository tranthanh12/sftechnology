import '../styles/globals.css'
import Fotter from '../src/components/Global/Footer'
import Template from '../src/Template'
import Header from '../src/components/Global/Header'
function MyApp({ Component, pageProps }) {
    return <div id="page-top">
        <Template>
            <div id="wrapper">
                <Header></Header>
                {/* <HeaderHome></HeaderHome> */}

                <Component {...pageProps} />

            </div>
            <Fotter></Fotter>
        </Template>
    </div>
}

export default MyApp
