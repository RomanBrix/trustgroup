import LeadRequest from "../leadRequest";

function PolandSecondBlock({ translate, language }) {
    const stagesPolandContainer = [
        {
            img: "stages-phone.svg",
            head: translate.stages.stage1.head[language],
            info: translate.stages.stage1.text[language],
            list: null,
        },
        {
            img: "stages-people_search.svg",
            head: translate.stages.stage2.head[language],
            info: translate.stages.stage2.text[language],
            list: null,
        },
        {
            img: "social.svg",
            head: translate.stages.stage3.head[language],
            info: translate.stages.stage3.text[language],
            list: null,
        },
        {
            img: "nat.svg",
            head: translate.stages.stage4.head[language],
            info: translate.stages.stage4.text[language],
            list: null,
        },
    ];
    return (
        <>
            <div className="stages centered">
                <div className="container">
                    <h1 className="content-head">{translate.head[language]}</h1>

                    <div className="stages-container">
                        {renderStages(stagesPolandContainer)}
                    </div>
                </div>
            </div>

            <div
                className="bg-info-text centered"
                style={{
                    backgroundImage: "url(/src/poland/cit-bg-poland.jpg)",
                }}
            >
                <div className="container">
                    <h1>{translate.bInfoHead[language]}</h1>
                    <p>{translate.bInfoText[language]}</p>
                </div>
            </div>

            <div
                className="intro centered"
                style={{
                    backgroundImage: "url(/src/poland/contact-bg-poland.jpg)",
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
                    <ul>
                        {item.list
                            ? item.list.map((it, ind) => {
                                  return <li key={ind * 55}>{it}</li>;
                              })
                            : ""}
                    </ul>
                </div>
            );
        });
    }
}

export default PolandSecondBlock;
