import useTranslate from "../../../hook/useTranslate";
import RumuniaPassportFirstBlock from "./firstBlock";
import RumuniaPassportSecondBlock from "./secondBlock";

function RumuniaPassport(props) {
    const {
        translate: { RomaniaPassport },
        language,
    } = useTranslate();

    return (
        <div className="rumunia-passport bolgaria-es rumunia-es poland-es">
            <RumuniaPassportFirstBlock
                translate={RomaniaPassport.FirstBlock}
                language={language}
            />
            <RumuniaPassportSecondBlock
                translate={RomaniaPassport.SecondBlock}
                language={language}
            />
        </div>
    );
}

export default RumuniaPassport;
