import useTranslate from "../../../hook/useTranslate";
import LeadRequest from "../leadRequest";

function About(props) {
    const {
        translate: { tAbout },
        language,
    } = useTranslate();

    return (
        <div className="rumunia-passport poland-passport bolgaria-passport bolgaria-es rumunia-es poland-es about">
            <div
                className="intro centered"
                style={{ backgroundImage: "url(/src/about/bg-top.jpg)" }}
            >
                <div className="container">
                    <div className="left">
                        <img src="/src/poland/contact-col-bg.png" alt="" />
                        <h1>{tAbout.head[language]}</h1>
                    </div>
                    <div className="right">
                        <LeadRequest />
                    </div>
                </div>
            </div>

            <div className="photo-text centered">
                <div className="container">
                    <h1 className="content-head">{tAbout.about[language]}</h1>
                    <div className="photo-text-contaner">
                        <img src="/src/about/img-about.jpg" alt="" />

                        <div className="text">
                            <p>{tAbout.aboutText1[language]}</p>
                            <p>{tAbout.aboutText2[language]}</p>
                            <p>{tAbout.aboutText3[language]}</p>
                            <p>{tAbout.aboutText4[language]}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="afterIntro centered">
                <div className="container">
                    <h2>{tAbout.its[language]}</h2>
                    <div className="blocks">
                        <div className="block">
                            <img src="/src/main/about_3.svg" alt="" />
                            <p>{tAbout.itsText1[language]}</p>
                        </div>
                        <div className="block">
                            <img src="/src/main/about_4.svg" alt="" />
                            <p>{tAbout.itsText2[language]}</p>
                        </div>
                        <div className="block">
                            <img src="/src/main/about_5.svg" alt="" />
                            <p>{tAbout.itsText3[language]}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="main"> */}
            <div
                className="intro centered"
                style={{
                    backgroundImage: "url(/src/about/contact-bg-eu.jpeg)",
                }}
            >
                <div className="container">
                    <div className="left">
                        <img src="/src/poland/contact-col-bg.png" alt="" />
                        <h1>{tAbout.requestForm[language]}</h1>
                    </div>
                    <div className="right">
                        <LeadRequest />
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>
    );
}

export default About;
