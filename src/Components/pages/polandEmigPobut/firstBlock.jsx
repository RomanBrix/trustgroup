import LeadRequest from "../leadRequest";

function PolandEmigrPobutFirstBlock({ translate, language }) {
    return (
        <>
            <div
                className="intro centered"
                style={{ backgroundImage: "url(/src/poland/bg1.jpg)" }}
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
                    <h1>{translate.head2[language]}</h1>
                    <p>{translate.text1[language]}</p>
                </div>
            </div>

            <div className="fetures  centered">
                <div className="container">
                    <h1 className="content-head">
                        {translate.fetures.head[language]}
                    </h1>
                    <div className="fetures-container">
                        <div className="feture">
                            <div className="img">
                                <img src="/src/poland/businessman.svg" alt="" />
                            </div>
                            <div className="head">
                                {translate.fetures.feture1[language]}
                            </div>
                        </div>
                        <div className="feture">
                            <div className="img">
                                <img src="/src/poland/mortarboard.svg" alt="" />
                            </div>
                            <div className="head">
                                {translate.fetures.feture2[language]}
                            </div>
                        </div>
                        <div className="feture">
                            <div className="img">
                                <img src="/src/poland/suitcase.svg" alt="" />
                            </div>
                            <div className="head">
                                {translate.fetures.feture3[language]}
                            </div>
                        </div>

                        <div className="feture">
                            <div className="img">
                                <img src="/src/poland/plane.svg" alt="" />
                            </div>
                            <div className="head">
                                {translate.fetures.feture4[language]}
                            </div>
                        </div>

                        <div className="feture">
                            <div className="img">
                                <img src="/src/poland/apartment.svg" alt="" />
                            </div>
                            <div className="head">
                                {translate.fetures.feture5[language]}
                            </div>
                        </div>
                        <div className="feture">
                            <div className="img">
                                <img src="/src/poland/visa.svg" alt="" />
                            </div>
                            <div className="head">
                                {translate.fetures.feture6[language]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="second-blcok centered"
                style={{ backgroundImage: "url(/src/poland/bg2.jpg)" }}
            >
                <div className="container">
                    <h1>{translate.head3[language]}</h1>
                    <ul>
                        <li>
                            <span className="count">
                                {" "}
                                <span> 1</span>
                            </span>
                            <div className="block">
                                <div className="head">
                                    {translate.list1.head[language]}
                                </div>
                                <div className="text">
                                    {translate.list1.text[language]}
                                </div>
                            </div>
                        </li>

                        <li>
                            <span className="count">
                                <span> 2</span>
                            </span>
                            <div className="block">
                                <div className="head">
                                    {translate.list2.head[language]}
                                </div>
                                <div className="text">
                                    {translate.list2.text[language]}
                                </div>
                            </div>
                        </li>

                        <li>
                            <span className="count">
                                <span> 3</span>
                            </span>
                            <div className="block">
                                <div className="head">
                                    {translate.list3.head[language]}
                                </div>
                                <div className="text">
                                    {translate.list3.text[language]}
                                </div>
                            </div>
                        </li>

                        <li>
                            <span className="count">
                                <span> 4</span>
                            </span>
                            <div className="block">
                                <div className="head">
                                    {translate.list4.head[language]}
                                </div>
                                <div className="text">
                                    {translate.list4.text[language]}
                                </div>
                            </div>
                        </li>

                        <li>
                            <span className="count">
                                <span> 5</span>
                            </span>
                            <div className="block">
                                <div className="head">
                                    {translate.list5.head[language]}
                                </div>
                                <div className="text">
                                    {translate.list5.text[language]}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="main">
                <div className="afterIntro centered">
                    <div className="container">
                        <h2>{translate.head4[language]}</h2>
                        <div className="blocks">
                            <div className="block">
                                <img src="/src/poland/european.svg" alt="" />
                                <p>{translate.text2[language]}</p>
                            </div>
                            <div className="block">
                                <img src="/src/poland/about_5.svg" alt="" />
                                <p>{translate.text3[language]}</p>
                            </div>
                            <div className="block">
                                <img
                                    src="/src/poland/stage-manager.png"
                                    alt=""
                                />
                                <p>{translate.text4[language]}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="intro centered"
                style={{ backgroundImage: "url(/src/poland/bg3.jpg)" }}
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

export default PolandEmigrPobutFirstBlock;
