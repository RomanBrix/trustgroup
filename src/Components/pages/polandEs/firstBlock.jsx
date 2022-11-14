import LeadRequest from "../leadRequest";

function PolandFirstBlock({ translate, language }) {
    return (
        <>
            <div
                className="intro centered"
                style={{
                    backgroundImage: "url(/src/poland/contact-bg-poland.jpg)",
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

            <div className="photo-text centered">
                <div className="container">
                    <h1 className="content-head">
                        {translate.photoHead[language]}
                    </h1>
                    <div className="photo-text-contaner">
                        <img src="/src/poland/passport-poland.png" alt="" />

                        <div className="text">
                            <p>{translate.photoText1[language]}</p>
                            <p>{translate.photoText2[language]}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="info-cards centered">
                <div className="container">
                    <h1 className="content-head">
                        {translate.infoCardHead[language]}
                    </h1>
                    <p className="content-after-head">
                        {translate.infoCardText[language]}
                    </p>
                    <div className="info-card">
                        <div className="info-card-img">
                            <img src="/src/poland/globe.svg" alt="" />
                        </div>
                        <div className="info-card-text">
                            <div className="headline">
                                {translate.infoCard1.head[language]}
                            </div>
                            <div className="afterhead">
                                {translate.infoCard1.afterHead[language]}
                            </div>
                            <p>{translate.infoCard1.text[language]}</p>
                        </div>
                    </div>

                    <div className="info-card">
                        <div className="info-card-img">
                            <img src="/src/poland/handshake.svg" alt="" />
                        </div>
                        <div className="info-card-text">
                            <div className="headline">
                                {translate.infoCard2.head[language]}
                            </div>
                            <div className="afterhead">
                                {translate.infoCard2.afterHead[language]}
                            </div>
                            <p>{translate.infoCard2.text[language]}</p>
                        </div>
                    </div>
                    <div className="info-card">
                        <div className="info-card-img">
                            <img src="/src/poland/citizenship.svg" alt="" />
                        </div>
                        <div className="info-card-text">
                            <div className="headline">
                                {translate.infoCard3.head[language]}
                            </div>
                            <div className="afterhead">
                                {translate.infoCard3.afterHead[language]}
                            </div>
                            <p>{translate.infoCard3.text[language]}</p>
                        </div>
                    </div>
                    <div className="info-card">
                        <div className="info-card-img">
                            <img src="/src/poland/education.svg" alt="" />
                        </div>
                        <div className="info-card-text">
                            <div className="headline">
                                {translate.infoCard4.head[language]}
                            </div>
                            <div className="afterhead">
                                {translate.infoCard4.afterHead[language]}
                            </div>
                            <p>{translate.infoCard4.text[language]}</p>
                        </div>
                    </div>
                    <div className="info-card">
                        <div className="info-card-img">
                            <img src="/src/poland/nat.svg" alt="" />
                        </div>
                        <div className="info-card-text">
                            <div className="headline">
                                {translate.infoCard5.head[language]}
                            </div>
                            <div className="afterhead">
                                {translate.infoCard5.afterHead[language]}
                            </div>
                            <p>{translate.infoCard5.text[language]}</p>
                        </div>
                    </div>
                    <div className="info-card">
                        <div className="info-card-img">
                            <img src="/src/poland/rings.svg" alt="" />
                        </div>
                        <div className="info-card-text">
                            <div className="headline">
                                {translate.infoCard6.head[language]}
                            </div>
                            <div className="afterhead">
                                {translate.infoCard6.afterHead[language]}
                            </div>
                            <p>{translate.infoCard6.text[language]}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="intro centered"
                style={{
                    backgroundImage: "url(/src/poland/pol-middle-form.jpg)",
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
}

export default PolandFirstBlock;
