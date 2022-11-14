import useTranslate from "../../../hook/useTranslate";
import IntroContact from "./contact";
import Intro from "./intro";
import SecondBlock from "./secondBlock";

function Main(props) {
    const {
        translate: { MainPage },
        language,
    } = useTranslate();

    // console.log(MainPage);

    return (
        <div className="main">
            <Intro translate={MainPage.Intro} language={language} />
            <SecondBlock translate={MainPage.SecondBlock} language={language} />
            <IntroContact
                translate={MainPage.IntroContact}
                language={language}
            />
        </div>
    );
}

export default Main;
