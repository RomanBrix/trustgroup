import LeadRequest from "../leadRequest";

function RumuniaPassportSecondBlock({ translate, language }) {
    const stagesBezPmjContainer = [
        {
            img: "document_1.svg",
            head: translate.stages.stage1.head[language],
            info: translate.stages.stage1.text[language],
            list: null,
        },
        {
            img: "bus.svg",
            head: translate.stages.stage2.head[language],
            info: translate.stages.stage2.text[language],
            list: null,
        },
        {
            img: "oath.svg",
            head: translate.stages.stage3.head[language],
            info: translate.stages.stage3.text[language],
            list: null,
        },
        {
            img: "certificate.svg",
            head: translate.stages.stage4.head[language],
            info: translate.stages.stage4.text[language],
            list: null,
        },
    ];
    const faqContainer = [
        {
            headline: translate.faq.faq1.head[language],
            text: translate.faq.faq1.text[language],
        },
        {
            headline: translate.faq.faq2.head[language],
            text: translate.faq.faq2.text[language],
        },
        {
            headline: translate.faq.faq3.head[language],
            text: translate.faq.faq3.text[language],
        },
        {
            headline: translate.faq.faq4.head[language],
            text: translate.faq.faq4.text[language],
        },
        {
            headline: translate.faq.faq5.head[language],
            text: translate.faq.faq5.text[language],
        },
        {
            headline: translate.faq.faq6.head[language],
            text: translate.faq.faq6.text[language],
            list: [
                translate.faq.faq6.list[0][language],
                translate.faq.faq6.list[1][language],
                translate.faq.faq6.list[2][language],
                translate.faq.faq6.list[3][language],
            ],
        },
        {
            headline: translate.faq.faq7.head[language],
            text: translate.faq.faq7.text[language],
        },
        {
            headline: translate.faq.faq8.head[language],
            text: translate.faq.faq8.text[language],
        },
        {
            headline: translate.faq.faq9.head[language],
            text: translate.faq.faq9.text[language],
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
                style={{ background: "#f1f1f1", padding: "40px 0" }}
            >
                <div className="container">
                    <h1>{translate.head2[language]}</h1>
                    <p>{translate.text1[language]}</p>
                    <p>{translate.text2[language]}</p>
                    <div className="mini-foto-text-container">
                        <div className="block">
                            <img src="/src/rumunia/job-blue-icon.png" alt="" />
                            <div className="headline">
                                {translate.miniFoto.text1[language]}
                            </div>
                        </div>
                        <div className="block">
                            <img
                                src="/src/rumunia/confidential-blue-icon.png"
                                alt=""
                            />
                            <div className="headline">
                                {translate.miniFoto.text2[language]}
                            </div>
                        </div>
                        <div className="block">
                            <img src="/src/rumunia/case-blue-icon.png" alt="" />
                            <div className="headline">
                                {translate.miniFoto.text3[language]}
                            </div>
                        </div>

                        <div className="block">
                            <img
                                src="/src/rumunia/ebook-blue-icon.png"
                                alt=""
                            />
                            <div className="headline">
                                {translate.miniFoto.text4[language]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="text-block centered"
                style={{ background: "#f1f1f1", padding: "40px 0" }}
            >
                <div className="container">
                    <h1>{translate.adv.head[language]}</h1>
                    <p>{translate.adv.text1[language]}</p>
                    <p>{translate.adv.text2[language]}</p>
                    <div className="mini-foto-text-container mini-foto-text-container-with-head">
                        <div className="block">
                            <img src="/src/rumunia/telephone.png" alt="" />
                            <div className="mini-text">
                                <h2>
                                    {translate.adv.miniFoto1.head[language]}
                                </h2>
                                <div className="headline">
                                    {translate.adv.miniFoto1.text[language]}
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <img
                                src="/src/rumunia/partners-in-business.png"
                                alt=""
                            />
                            <div className="mini-text">
                                <h2>
                                    {translate.adv.miniFoto2.head[language]}
                                </h2>
                                <div className="headline">
                                    {translate.adv.miniFoto2.text[language]}
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <img src="/src/rumunia/safe-box-icon.png" alt="" />
                            <div className="mini-text">
                                <h2>
                                    {translate.adv.miniFoto3.head[language]}
                                </h2>
                                <div className="headline">
                                    {translate.adv.miniFoto3.text[language]}
                                </div>
                            </div>
                        </div>

                        <div className="block">
                            <img src="/src/rumunia/customer.png" alt="" />
                            <div className="mini-text">
                                <h2>
                                    {translate.adv.miniFoto4.head[language]}
                                </h2>
                                <div className="headline">
                                    {translate.adv.miniFoto4.text[language]}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="intro centered"
                style={{
                    backgroundImage:
                        "url(/src/rumunia/bg-form2-pass-rumun-min.jpg)",
                }}
            >
                <div className="container">
                    <div className="left">
                        <img src="/src/poland/contact-col-bg.png" alt="" />
                        <h1>{translate.consult1[language]}</h1>
                    </div>
                    <div className="right">
                        <LeadRequest />
                    </div>
                </div>
            </div>

            <div className="faq-container centered">
                <div className="container">
                    <h1>{translate.faq.head[language]}</h1>
                    <div className="faq-content">{faqRender()}</div>
                </div>
            </div>

            <div
                className="intro centered"
                style={{
                    backgroundImage:
                        "url(/src/rumunia/contact-pass-bg-romania.jpg)",
                }}
            >
                <div className="container">
                    <div className="left">
                        <img src="/src/poland/contact-col-bg.png" alt="" />
                        <h1>{translate.consult2[language]}</h1>
                    </div>
                    <div className="right">
                        <LeadRequest />
                    </div>
                </div>
            </div>
        </>
    );

    function faqRender() {
        return faqContainer.map((item, index) => {
            return (
                <div className="faq-block" key={index + 1}>
                    <div className="headline">{item.headline}</div>
                    <div className="faq-text">
                        {item.text}
                        {item.list ? (
                            <ul>
                                {item.list.map((itm, indx) => {
                                    return <li key={indx * 11}>{itm}</li>;
                                })}
                            </ul>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            );
        });
    }

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
                            <img src={`/src/rumunia/${item.img}`} alt="" />
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

export default RumuniaPassportSecondBlock;
