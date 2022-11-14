import useTranslate from "../../../hook/useTranslate";
import FirstBlockCgernogoria from "./firstBlock";
import SecondBlockCgernogoria from "./secondBlock";

function Chernogoria(props) {
    const {
        translate: { Chernog },
        language,
    } = useTranslate();

    return (
        <div className="rumunia-passport poland-passport bolgaria-passport bolgaria-es rumunia-es poland-es chernogoria">
            <FirstBlockCgernogoria
                translate={Chernog.FirstBlock}
                language={language}
            />
            <SecondBlockCgernogoria
                translate={Chernog.SecondBlock}
                language={language}
            />
        </div>
    );
}

export default Chernogoria;
