import {createContext, useState} from "react";



const ApplicationContext = createContext();

export function ApplicationContextProvider({children}) {

    const [topic, setTopic] = useState("none");
    const [article, setArticle] = useState("none");
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <ApplicationContext.Provider value={{topic, setTopic, article, setArticle, navbarOpen, setNavbarOpen}}>
            {children}
        </ApplicationContext.Provider>
    );
}

export default ApplicationContext;
