import useTranslate from "../../../hook/useTranslate";
import PolandPassportFirstBlock from "./firstBlock";

function PolandPassport(props) {
    const {
        translate: { PolandPassp },
        language,
    } = useTranslate();

    return (
        <div className="rumunia-passport poland-passport bolgaria-passport bolgaria-es rumunia-es poland-es">
            <PolandPassportFirstBlock
                translate={PolandPassp}
                language={language}
            />
        </div>
    );
}

export default PolandPassport;
