import useTranslate from "../../../hook/useTranslate";
import BolgariaPassportFirstBlock from "./firstBlock";
import BolgariaPassportSecondBlock from "./secondBlock";

function BolgariaPassport(props) {
    const {
        translate: { BolgPass },
        language,
    } = useTranslate();

    return (
        <div className="rumunia-passport poland-passport bolgaria-passport bolgaria-es rumunia-es poland-es">
            <BolgariaPassportFirstBlock
                translate={BolgPass.FirstBlock}
                language={language}
            />
            <BolgariaPassportSecondBlock
                translate={BolgPass.SecondBlock}
                language={language}
            />
        </div>
    );
}

export default BolgariaPassport;
