import useTranslate from "../../../hook/useTranslate";
import PolandEmigrPobutFirstBlock from "./firstBlock";

function PolandEmigrPobut(props) {
    const {
        translate: { PolandPobut },
        language,
    } = useTranslate();

    return (
        <div className="rumunia-passport poland-passport bolgaria-passport bolgaria-es rumunia-es poland-es">
            <PolandEmigrPobutFirstBlock
                translate={PolandPobut}
                language={language}
            />
        </div>
    );
}

export default PolandEmigrPobut;
