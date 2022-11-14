import LeadRequest from "../leadRequest";

function SecondBlockCgernogoria({ translate, language }) {
    const stagesBezPmjContainer = [
        {
            img: "icon-time.png",
            head: translate.stages.first.head[language],
            info: translate.stages.first.text[language],
            list: null,
        },
        {
            img: "icon-1.png",
            head: translate.stages.second.head[language],
            info: translate.stages.second.text[language],
            list: null,
        },
        {
            img: "icon-2.png",
            head: translate.stages.third.head[language],
            info: translate.stages.third.text[language],
            list: null,
        },
        {
            img: "icon-3.png",
            head: translate.stages.fourth.head[language],
            info: translate.stages.fourth.text[language],
            list: null,
        },
    ];

    return (
        <>
            <div className="stages centered">
                <div className="container">
                    <h1 className="content-head">{translate.head[language]}</h1>

                    <div className="stages-container">
                        {renderStages(stagesBezPmjContainer)}
                    </div>
                </div>
            </div>

            <div
                className="text-block centered"
                style={{ background: "#E2EDF6" }}
            >
                <div className="container">
                    <h1>{translate.howTo[language]}</h1>
                    <p>{translate.howToText1[language]}</p>
                    <p>{translate.howToText2[language]}</p>
                </div>
            </div>

            <div className="text-block centered">
                <div className="container">
                    <h1>{translate.displacementHead[language]}</h1>
                    <p>{translate.displacementText1[language]}</p>
                </div>
            </div>

            <div
                className="intro centered"
                style={{ backgroundImage: "url(/src/chernogoria/bg3.jpg)" }}
            >
                <div className="container">
                    <div className="left">
                        <img src="/src/poland/contact-col-bg.png" alt="" />
                        <h1>{translate.consult[language]}</h1>
                    </div>
                    <div className="right">
                        <LeadRequest />
                    </div>
                </div>
            </div>
        </>
    );

    function renderStages(arr) {
        return arr.map((item, index) => {
            return (
                <div className="stage" key={index}>
                    <div className="pretty-block">
                        {index % 2 === 0 ? (
                            <img
                                src="/src/bolgaria/arrow-bg.svg"
                                alt=""
                                className="arrow"
                            />
                        ) : (
                            <img
                                src="/src/bolgaria/arrow-bg-reverse.svg"
                                alt=""
                                className="arrow"
                            />
                        )}
                        <div className="img">
                            <img src={`/src/chernogoria/${item.img}`} alt="" />
                        </div>
                        <div className="info">
                            <div className="headline">{item.head}</div>
                            <div className="text-info">{item.info}</div>
                        </div>
                    </div>
                </div>
            );
        });
    }
}

export default SecondBlockCgernogoria;
