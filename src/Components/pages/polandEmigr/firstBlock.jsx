import LeadRequest from "../leadRequest";

function PolandEmigFirstBlock({ translate, language }) {
    // console.log(translate);
    const stagesBezPmjContainer = [
        {
            img: "anketa.svg",
            head: "",
            info: translate.etaps.etap1[language],
            list: null,
        },
        {
            img: "document_3.svg",
            head: "",
            info: translate.etaps.etap2[language],
            list: null,
        },
        {
            img: "talk.svg",
            head: "",
            info: translate.etaps.etap3[language],
            list: null,
        },
        {
            img: "1.svg",
            head: "",
            info: translate.etaps.etap4[language],
            list: null,
        },
    ];
    return (
        <>
            <div
                className="intro centered"
                style={{
                    backgroundImage: "url(/src/poland/bg-poland-pass.jpg)",
                }}
            >
                <div className="container">
                    <div className="left">
                        <img src="/src/poland/contact-col-bg.png" alt="" />
                        <h1>{translate.head[language]}</h1>
                    </div>
                    <div className="right">
                        <LeadRequest />
                    </div>
                </div>
            </div>

            <div
                className="text-block centered"
                style={{ background: "#f1f1f1" }}
            >
                <div className="container">
                    <h1>{translate.docs[language]}</h1>
                    <p>{translate.docs1[language]}</p>
                    <p>{translate.docs2[language]}</p>
                    <p>{translate.docs3[language]}</p>
                    <p>{translate.docs4[language]}</p>
                    <ul>
                        <li>{translate.list1[language]}</li>
                        <li>{translate.list2[language]}</li>
                    </ul>
                </div>
            </div>

            <div className="stages centered">
                <div className="container">
                    <h1 className="content-head">
                        {translate.etaps.head[language]}
                    </h1>

                    <div className="stages-container">
                        {renderStages(stagesBezPmjContainer)}
                    </div>
                </div>
            </div>

            <div
                className="text-block centered"
                style={{ background: "#f1f1f1" }}
            >
                <div className="container">
                    <h1>{translate.features.head[language]}</h1>
                    <p>{translate.features.feature1[language]}</p>
                    <p>{translate.features.feature2[language]}</p>
                    <p>{translate.features.feature3[language]}</p>
                </div>
            </div>

            <div
                className="intro centered"
                style={{
                    backgroundImage:
                        "url(/src/poland/contact-pass-bg-poland.jpg)",
                }}
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
                            <img src={`/src/poland/${item.img}`} alt="" />
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

export default PolandEmigFirstBlock;
