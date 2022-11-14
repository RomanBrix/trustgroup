import useTranslate from "../../../hook/useTranslate";
import PolandEmigFirstBlock from "./firstBlock";

function PolandEmigr(props) {
    const {
        translate: { PolandEmigration },
        language,
    } = useTranslate();
    // console.log(PolandEmigration);
    return (
        <div className="rumunia-passport poland-passport bolgaria-passport bolgaria-es rumunia-es poland-es">
            <PolandEmigFirstBlock
                translate={PolandEmigration}
                language={language}
            />
        </div>
    );
}

export default PolandEmigr;
