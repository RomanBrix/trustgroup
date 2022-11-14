import useTranslate from "../../../hook/useTranslate";
import PolandFirstBlock from "./firstBlock";
import PolandSecondBlock from "./secondBlock";

function PolandEs(props) {
    const {
        translate: { PolEs },
        language,
    } = useTranslate();
    return (
        <div className="bolgaria-es rumunia-es poland-es">
            <PolandFirstBlock
                translate={PolEs.FirstBlock}
                language={language}
            />
            <PolandSecondBlock
                translate={PolEs.SecondBlock}
                language={language}
            />
        </div>
    );
}

export default PolandEs;
