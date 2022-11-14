import useTranslate from "../../../hook/useTranslate";
import BolgariaFirstBlock from "./firstBlock";
import BolgariaFourthBlock from "./fourthBlock";
import BolgariaSecondBlock from "./secondBlock";
import BolgariaThirdBlock from "./thirdBlock";

function BolgariaEs(props) {
    const {
        translate: { BolgEs },
        language,
    } = useTranslate();

    return (
        <div className="bolgaria-es rumunia-es">
            <BolgariaFirstBlock
                language={language}
                translate={BolgEs.FirstBlock}
            />
            <BolgariaSecondBlock
                language={language}
                translate={BolgEs.SecondBlock}
            />
            <BolgariaThirdBlock
                language={language}
                translate={BolgEs.ThirdBlock}
            />
            <BolgariaFourthBlock
                language={language}
                translate={BolgEs.FourthBlock}
            />
        </div>
    );
}

export default BolgariaEs;
