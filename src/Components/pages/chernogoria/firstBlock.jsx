import LeadRequest from "../leadRequest";

function FirstBlockCgernogoria({ translate, language }) {
    return (
        <>
            <div
                className="intro centered"
                style={{ backgroundImage: "url(/src/chernogoria/bg1-1.jpeg)" }}
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
                    <h1>{translate.vnjHead[language]}</h1>
                    <p>{translate.vnjText[language]}</p>
                </div>
            </div>

            <div className="block-back-bg centered">
                <div className="container">
                    <h1>{translate.advantages[language]}</h1>
                </div>
            </div>

            <div
                className="fetures  centered"
                style={{ background: "#E2EDF6" }}
            >
                <div className="container">
                    <p className="content-after-head">
                        {translate.advText[language]}
                    </p>
                    <div className="fetures-container">
                        <div className="feture">
                            <div className="img">
                                <img
                                    src="/src/chernogoria/icon-place.png"
                                    alt=""
                                />
                            </div>
                            <div className="head">
                                {translate.lawHead[language]}
                            </div>
                        </div>
                        <div className="feture">
                            <div className="img">
                                <img
                                    src="/src/chernogoria/icon-handwithmoney.png"
                                    alt=""
                                />
                            </div>
                            <div className="head">
                                {translate.busHead[language]}
                            </div>
                        </div>
                        <div className="feture">
                            <div className="img">
                                <img
                                    src="/src/chernogoria/icon-accept.png"
                                    alt=""
                                />
                            </div>
                            <div className="head">
                                {translate.bankHead[language]}
                            </div>
                        </div>

                        <div className="feture">
                            <div className="img">
                                <img
                                    src="/src/chernogoria/icon-healthinsurance.png"
                                    alt=""
                                />
                            </div>
                            <div className="head">
                                {translate.medHead[language]}
                            </div>
                        </div>

                        <div className="feture">
                            <div className="img">
                                <img
                                    src="/src/chernogoria/icon-mortarboard.png"
                                    alt=""
                                />
                            </div>
                            <div className="head">
                                {translate.eduHead[language]}
                            </div>
                        </div>
                        <div className="feture">
                            <div className="img">
                                <img
                                    src="/src/chernogoria/icon-pasport.png"
                                    alt=""
                                />
                            </div>
                            <div className="head">
                                {translate.futureHead[language]}
                            </div>
                        </div>
                    </div>

                    <p className="content-after-head">
                        {translate.summaryText[language]}
                    </p>
                </div>
            </div>

            <div
                className="text-block centered"
                style={{ background: "#f1f1f1" }}
            >
                <div className="container">
                    <h1>{translate.howHead[language]}</h1>
                    <p>{translate.howText[language]}</p>
                </div>
            </div>

            <div
                className="text-block centered"
                style={{ background: "#f1f1f1", padding: "40px 0" }}
            >
                <div className="container">
                    <h1>{translate.requir[language]}</h1>
                    <div className="mini-foto-text-container">
                        <div className="block">
                            <img
                                src="/src/chernogoria/icon-18plus.png"
                                alt=""
                            />
                            <div className="headline">
                                {translate.reqText1[language]}
                            </div>
                        </div>
                        <div className="block">
                            <img
                                src="/src/chernogoria/icon-handwithhome.png"
                                alt=""
                            />
                            <div className="headline">
                                {translate.reqText2[language]}
                            </div>
                        </div>
                        <div className="block">
                            <img src="/src/chernogoria/icon-blank.png" alt="" />
                            <div className="headline">
                                {translate.reqText3[language]}
                            </div>
                        </div>

                        <div className="block">
                            <img
                                src="/src/chernogoria/icon-accept.png"
                                alt=""
                            />
                            <div className="headline">
                                {translate.reqText4[language]}
                            </div>
                        </div>
                        <div className="block">
                            <img src="/src/chernogoria/icon-paper.png" alt="" />
                            <div className="headline">
                                {translate.reqText5[language]}
                            </div>
                        </div>
                        <div className="block">
                            <img src="/src/chernogoria/icon-bond.png" alt="" />
                            <div className="headline">
                                {translate.reqText6[language]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="intro centered"
                style={{ backgroundImage: "url(/src/chernogoria/bg2.jpg)" }}
            >
                <div className="container">
                    <div className="left">
                        <img src="/src/poland/contact-col-bg.png" alt="" />
                        <h1>{translate.consultText[language]}</h1>
                    </div>
                    <div className="right">
                        <LeadRequest />
                    </div>
                </div>
            </div>
        </>
    );
}

export default FirstBlockCgernogoria;
