import '../css/App.css';
import {ApplicationContextProvider} from "../context/ApplicationContext";
import {BrowserRouter} from "react-router-dom";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
import {Helmet} from "react-helmet";
import React from "react";
import logo from "../assets/logo.png";


function App() {
    return (
        <BrowserRouter basename={"/kokscraft"}>
            <ApplicationContextProvider>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>Statystyki Kokscraft</title>
                    {/*TODO set an icon*/}
                    <meta name="description"
                          content={`Statystyki graczy serwera kokscraft.pl`}/>
                    <link rel={"icon"} href={logo}/>
                </Helmet>
                <Navbar/>
                <MainContent/>
            </ApplicationContextProvider>
        </BrowserRouter>

    );
}

export default App;
