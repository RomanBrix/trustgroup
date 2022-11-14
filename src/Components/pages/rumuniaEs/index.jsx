import useTranslate from "../../../hook/useTranslate";
import BlockFive from "./blockFive";
import BlockFour from "./blockFour";
import BlockOne from "./blockOne";
import BlockThree from "./blockThree";
import BlockTwo from "./blockTwo";

function RumuniaEs(props) {
    const {
        translate: { RomaniaEs },
        language,
    } = useTranslate();

    return (
        <div className="rumunia-es">
            <BlockOne translate={RomaniaEs.FirstBlock} language={language} />
            <BlockTwo translate={RomaniaEs.SecondBlock} language={language} />
            <BlockThree translate={RomaniaEs.ThirdBlock} language={language} />
            <BlockFour translate={RomaniaEs.FourthBlock} language={language} />
            <BlockFive translate={RomaniaEs.FifthBlock} language={language} />
        </div>
    );
}

export default RumuniaEs;
