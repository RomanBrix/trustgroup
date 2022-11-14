import { useContext } from "react";
import { TranslateContext } from "../hoc/TranslateProvider";

const useTranslate = () => {
    const translate = useContext(TranslateContext);

    return translate;
};

export default useTranslate;
