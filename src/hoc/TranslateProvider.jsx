import { useState, useEffect, createContext } from "react";

const TranslateContext = createContext();
const TransalteProvider = ({ children }) => {
    const [translate, setTranslate] = useState(null);
    const [language, setLanguage] = useState(
        window.localStorage.getItem("lang") || "en"
    );

    useEffect(() => {
        const getTranslate = async () => {
            const response = await fetch("/translate.json");
            const data = await response.json();
            setTranslate(data);
        };
        getTranslate();
    }, []);
    function changeLang() {
        setLanguage(language === "en" ? "ru" : "en");
        window.localStorage.setItem("lang", language === "en" ? "ru" : "en");
    }

    return (
        <TranslateContext.Provider value={{ translate, language, changeLang }}>
            {translate && children}
        </TranslateContext.Provider>
    );
};

export { TranslateContext, TransalteProvider };
