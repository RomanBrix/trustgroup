import LeadRequest from "../leadRequest";

function BolgariaPassportSecondBlock({ translate, language }) {
    const faqContainer = [
        {
            headline: translate.faq.faq1.head[language],
            text: translate.faq.faq1.text[language],
        },
        {
            headline: translate.faq.faq2.head[language],
            text: translate.faq.faq2.text[language],
        },
    ];
    const dataFoBlock = [
        {
            title: translate.etaps.etap1.head[language],
            text: (
                <p>
                    {translate.etaps.etap1.text1[language]}
                    <ul>
                        <li>{translate.etaps.etap1.list1[language]}</li>
                        <li>{translate.etaps.etap1.list2[language]}</li>
                        <li>{translate.etaps.etap1.list3[language]}</li>
                    </ul>
                    {translate.etaps.etap1.text2[language]}
                </p>
            ),
            img: "satge-file.png",
        },
        {
            title: translate.etaps.etap2.head[language],
            text: translate.etaps.etap2.text[language],
            img: "bbb.svg",
        },
    ];

    return (
        <>
            <div className="block-five centered">
                <div className="container">
                    <h1>{translate.head1[language]}</h1>
                    <div className="photo-container">
                        <div className="photo" style={{ cursor: "default" }}>
                            <div className="img">
                                <img
                                    src="/src/bolgaria/birth-doc-img.jpg"
                                    alt=""
                                    style={{ transform: "scale(1.3)" }}
                                />
                            </div>
                            <div className="headline">
                                {translate.foto1[language]}
                            </div>
                        </div>

                        <div className="photo" style={{ cursor: "default" }}>
                            <div className="img">
                                <img
                                    style={{ transform: "scale(1.3)" }}
                                    src="/src/bolgaria/bolg-proishod-doc.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="headline">
                                {translate.foto2[language]}
                            </div>
                        </div>

                        <div className="photo" style={{ cursor: "default" }}>
                            <div className="img">
                                <img
                                    style={{ transform: "scale(1.3)" }}
                                    src="/src/bolgaria/medical-doc.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="headline">
                                {translate.foto3[language]}
                            </div>
                        </div>

                        <div className="photo" style={{ cursor: "default" }}>
                            <div className="img">
                                <img
                                    style={{ transform: "scale(1.3)" }}
                                    src="/src/bolgaria/nesudimost.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="headline">
                                {translate.foto4[language]}
                            </div>
                        </div>

                        <div className="photo" style={{ cursor: "default" }}>
                            <div className="img">
                                <img
                                    style={{ transform: "scale(1.3)" }}
                                    src="/src/bolgaria/passports-copy.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="headline">
                                {translate.foto5[language]}
                            </div>
                        </div>
                        <div className="photo" style={{ cursor: "default" }}>
                            <div className="img">
                                <img
                                    style={{ transform: "scale(1.3)" }}
                                    src="/src/bolgaria/photos-for-docs.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="headline">
                                {translate.foto6[language]}
                            </div>
                        </div>
                    </div>

                    <p className="content-after-head">
                        {translate.fotoText[language]}
                    </p>
                </div>
            </div>

            <div
                className="text-block centered"
                style={{ background: "#f1f1f1", padding: "40px 0" }}
            >
                <div className="container">
                    <h1>{translate.adv[language]}</h1>
                </div>
            </div>

            <div className="info-blocks centered">
                <div className="container">
                    <div className="info-block">
                        <div className="left">
                            <p>{translate.info1[language]}</p>
                        </div>
                        <div className="right">
                            <img src="/src/bolgaria/eu-logo-icon.png" alt="" />
                        </div>
                    </div>
                    <div className="info-block">
                        <div className="left">
                            <p>{translate.info2[language]}</p>
                        </div>
                        <div className="right">
                            <img src="/src/bolgaria/around-icon.png" alt="" />
                        </div>
                    </div>
                    <div className="info-block">
                        <div className="left">
                            <p>{translate.info3[language]}</p>
                        </div>
                        <div className="right">
                            <img
                                src="/src/bolgaria/accounting-icon.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="info-block">
                        <div className="left">
                            <p>{translate.info4[language]}</p>
                        </div>
                        <div className="right">
                            <img src="/src/bolgaria/student-icon.png" alt="" />
                        </div>
                    </div>
                    <div className="info-block">
                        <div className="left">
                            <p>{translate.info5[language]}</p>
                        </div>
                        <div className="right">
                            <img src="/src/bolgaria/suitcase.png" alt="" />
                        </div>
                    </div>
                    <div className="info-block">
                        <div className="left">
                            <p>{translate.info6[language]}</p>
                        </div>
                        <div className="right">
                            <img
                                src="/src/bolgaria/medical-history-icon.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="info-block">
                        <div className="left">
                            <p>{translate.info7[language]}</p>
                        </div>
                        <div className="right">
                            <img src="/src/bolgaria/percent-icon.png" alt="" />
                        </div>
                    </div>
                    <div className="info-block">
                        <div className="left">
                            <p>{translate.info8[language]}</p>
                        </div>
                        <div className="right">
                            <img src="/src/bolgaria/house-icon.png" alt="" />
                        </div>
                    </div>
                    <div className="info-block">
                        <div className="left">
                            <p>{translate.info9[language]}</p>
                        </div>
                        <div className="right">
                            <img
                                src="/src/bolgaria/worldwide-icon.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="second-blcok centered"
                style={{
                    backgroundImage: "url(/src/bolgaria/bolgar-pass-bg.jpg)",
                }}
            >
                <div className="container">
                    <h1>{translate.waysTo.head[language]}</h1>
                    <p className="content-after-head" style={{ color: "#fff" }}>
                        {translate.waysTo.text[language]}
                    </p>
                    <ul>
                        <li>
                            <span className="count">
                                {" "}
                                <span> 1</span>
                            </span>
                            <div className="block">
                                <div className="text">
                                    {translate.waysTo.block1.text[language]}
                                    <ul>
                                        <li>
                                            {
                                                translate.waysTo.block1.list1[
                                                    language
                                                ]
                                            }
                                        </li>
                                        <li>
                                            {
                                                translate.waysTo.block1.list2[
                                                    language
                                                ]
                                            }
                                        </li>
                                        <li>
                                            {
                                                translate.waysTo.block1.list3[
                                                    language
                                                ]
                                            }
                                        </li>
                                        <li>
                                            {
                                                translate.waysTo.block1.list4[
                                                    language
                                                ]
                                            }
                                        </li>
                                    </ul>
                                    {translate.waysTo.block1.text2[language]}
                                </div>
                            </div>
                        </li>

                        <li>
                            <span className="count">
                                <span> 2</span>
                            </span>
                            <div className="block">
                                <div className="text">
                                    {translate.waysTo.block2[language]}
                                </div>
                            </div>
                        </li>

                        <li>
                            <span className="count">
                                <span> 3</span>
                            </span>
                            <div className="block">
                                <div className="text">
                                    {translate.waysTo.block3.text[language]}
                                    <ul>
                                        <li>
                                            {
                                                translate.waysTo.block3.list1[
                                                    language
                                                ]
                                            }
                                        </li>
                                        <li>
                                            {
                                                translate.waysTo.block3.list2[
                                                    language
                                                ]
                                            }
                                        </li>
                                    </ul>
                                    {translate.waysTo.block3.text2[language]}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="block-four centered">
                <div className="container">
                    <h1>{translate.etaps.head[language]}</h1>
                    {generateBlock()}
                </div>
            </div>

            <div className="some-centered-text centered">
                <div className="container">
                    <div className="some-text">{translate.text1[language]}</div>
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
                        "url(/src/bolgaria/contact-pass-bg-bulgaria.jpg)",
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

    function generateBlock(params) {
        return dataFoBlock.map((item, index) => {
            return (
                <div className="big-info-blocks" key={index}>
                    <div className="top-img">
                        <div className="border-img" />
                        <div className="img">
                            <img
                                src={`/src/bolgaria/${item.img}`}
                                alt=""
                                style={index === 1 ? { width: "60%" } : {}}
                            />
                        </div>
                    </div>
                    <div className="text">
                        <div className="headline">{item.title}</div>
                        <div className="text">{item.text}</div>
                    </div>
                </div>
            );
        });
    }

    function faqRender() {
        return faqContainer.map((item, index) => {
            return (
                <div className="faq-block" key={index + 1}>
                    <div className="headline">{item.headline}</div>
                    <div className="faq-text">{item.text}</div>
                </div>
            );
        });
    }
}

export default BolgariaPassportSecondBlock;
