import LeadRequest from "../leadRequest";

function RumuniaPassportFirstBlock({ translate, language }) {
    return (
        <>
            <div
                className="intro centered"
                style={{ backgroundImage: "url(/src/rumunia/contact-bg.jpg)" }}
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

            {/* vtoroi block */}
            <div className="pass-fetures centered">
                <div className="container">
                    <h1 className="content-head">
                        {translate.passFeatures.head[language]}
                    </h1>
                    <div className="doc-describe-container">
                        <div className="doc-describe-item">
                            <div className="img">
                                <img
                                    src="/src/rumunia/roman-id-card-img.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="img-desc">
                                {translate.passFeatures.imgDesc1[language]}
                            </div>
                            <div className="text-info">
                                {translate.passFeatures.text1[language]}
                            </div>
                        </div>
                        <div className="doc-describe-item">
                            <div className="img">
                                <img
                                    src="/src/rumunia/roman-foreign-pass-img.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="img-desc">
                                {translate.passFeatures.imgDesc2[language]}
                            </div>
                            <div className="text-info">
                                {translate.passFeatures.text2[language]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="info-blocks centered">
                <div className="container">
                    <div className="info-block">
                        <div className="left">
                            <p>{translate.infoBlocks.text1[language]}</p>
                        </div>
                        <div className="right">
                            <img src="/src/rumunia/around-icon.png" alt="" />
                        </div>
                    </div>
                    <div className="info-block">
                        <div className="left">
                            <p>{translate.infoBlocks.text2[language]}</p>
                        </div>
                        <div className="right">
                            <img src="/src/rumunia/house-icon.png" alt="" />
                        </div>
                    </div>
                    <div className="info-block">
                        <div className="left">
                            <p>{translate.infoBlocks.text3[language]}</p>
                        </div>
                        <div className="right">
                            <img src="/src/rumunia/worldwide-icon.png" alt="" />
                        </div>
                    </div>
                    <div className="info-block">
                        <div className="left">
                            <p>{translate.infoBlocks.text4[language]}</p>
                        </div>
                        <div className="right">
                            <img
                                src="/src/rumunia/medical-history-icon.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="info-block">
                        <div className="left">
                            <p>{translate.infoBlocks.text5[language]}</p>
                        </div>
                        <div className="right">
                            <img src="/src/rumunia/student-icon.png" alt="" />
                        </div>
                    </div>
                    <div className="info-block">
                        <div className="left">
                            <p>{translate.infoBlocks.text6[language]}</p>
                        </div>
                        <div className="right">
                            <img src="/src/rumunia/percent-icon.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-block centered">
                <div className="container">
                    <p className="content-after-head">
                        {translate.head2[language]}
                    </p>
                    <p className="content-after-head">
                        {translate.text2[language]}
                    </p>
                </div>
            </div>

            <div
                className="second-blcok centered"
                style={{
                    backgroundImage:
                        "url(/src/rumunia/bg-pass-rumun-blue-min.jpg)",
                }}
            >
                <div className="container">
                    <h1>{translate.whoCan.head[language]}</h1>
                    <p className="content-after-head" style={{ color: "#fff" }}>
                        {translate.whoCan.afterHead[language]}
                    </p>
                    <ul>
                        <li>
                            <span className="count">
                                {" "}
                                <span> 1</span>
                            </span>
                            <div className="block">
                                <div className="text">
                                    {translate.whoCan.text1[language]}
                                </div>
                            </div>
                        </li>

                        <li>
                            <span className="count">
                                <span> 2</span>
                            </span>
                            <div className="block">
                                <div className="text">
                                    {translate.whoCan.text2[language]}
                                </div>
                            </div>
                        </li>

                        <li>
                            <span className="count">
                                <span> 3</span>
                            </span>
                            <div className="block">
                                <div className="text">
                                    {translate.whoCan.text3[language]}
                                </div>
                            </div>
                        </li>
                    </ul>
                    <h2>{translate.whoCan.head2[language]}</h2>
                </div>
            </div>

            <div
                className="text-block centered"
                style={{ background: "#f1f1f1", padding: "40px 0" }}
            >
                <div className="container">
                    <h1>{translate.ourHelp.head[language]}</h1>
                    <p>{translate.ourHelp.text1[language]}</p>
                    <p>{translate.ourHelp.text2[language]}</p>
                    <div className="img">
                        <img src="/src/rumunia/docs1111.jpg" alt="" />
                    </div>
                    <p>{translate.ourHelp.text3[language]}</p>
                    <p>{translate.ourHelp.text4[language]}</p>
                    <div className="img">
                        <img src="/src/rumunia/01.jpg" alt="" />
                    </div>
                    <p>{translate.ourHelp.text5[language]}</p>
                    <p>{translate.ourHelp.text6[language]}</p>
                </div>
            </div>

            <div className="text-block centered">
                <div className="container">
                    <h1>{translate.head3[language]}</h1>
                    <p>{translate.text3[language]}</p>
                    <p>{translate.text4[language]}</p>
                </div>
            </div>

            <div
                className="intro centered"
                style={{
                    backgroundImage:
                        "url(/src/rumunia/bg-form1-pass-rumun-min.jpg)",
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

export default RumuniaPassportFirstBlock;
