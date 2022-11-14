import { useNavigate } from "react-router-dom";

function BolgariaThirdBlock({ language, translate }) {
    const navigate = useNavigate();

    const stagesPmjContainer = [
        {
            img: "1.svg",
            head: translate.etaps.stagePmj1.head[language],
            info: translate.etaps.stagePmj1.info[language],
            list: translate.etaps.stagePmj1.list[language],
        },
        {
            img: "social.svg",
            head: translate.etaps.stagePmj2.head[language],
            info: translate.etaps.stagePmj2.info[language],
            list: translate.etaps.stagePmj2.list[language],
        },
        {
            img: "pass.svg",
            head: translate.etaps.stagePmj3.head[language],
            info: translate.etaps.stagePmj3.info[language],
            list: null,
        },
    ];

    const stagesBezPmjContainer = [
        {
            img: "1.png",
            head: translate.etaps.stageBezPmj1.head[language],
            info: translate.etaps.stageBezPmj1.info[language],
            list: null,
        },
        {
            img: "2.png",
            head: translate.etaps.stageBezPmj1.head[language],
            info: translate.etaps.stageBezPmj1.info[language],
            list: null,
        },
        {
            img: "3.png",
            head: translate.etaps.stageBezPmj1.head[language],
            info: translate.etaps.stageBezPmj1.info[language],
            list: null,
        },
        {
            img: "4.png",
            head: translate.etaps.stageBezPmj1.head[language],
            info: translate.etaps.stageBezPmj1.info[language],
            list: null,
        },
    ];
    return (
        <>
            <div className="text-block centered">
                <div className="container">
                    <h1>{translate.head[language]}</h1>
                    <p>{translate.text[language]}</p>
                </div>
            </div>

            <div className="stages centered">
                <div className="container">
                    <h1 className="content-head">{translate.text[language]}</h1>

                    <div className="stages-container">
                        {renderStages(stagesPmjContainer)}
                    </div>

                    <h1 className="content-head">
                        {translate.etaps.head[language]}
                    </h1>

                    <div className="stages-container">
                        {renderStages(stagesBezPmjContainer)}
                    </div>
                </div>
            </div>

            <div
                className="apostil centered"
                style={{
                    backgroundImage: "url(/src/bolgaria/bg-info-bulgaria.jpg)",
                }}
            >
                <div className="container">
                    <h2>{translate.apostil.head[language]}</h2>
                    <div
                        className="btn"
                        onClick={() => {
                            navigate("/Apostil");
                        }}
                    >
                        {translate.apostil.btn[language]}
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
                            <img src={`/src/bolgaria/${item.img}`} alt="" />
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

export default BolgariaThirdBlock;
