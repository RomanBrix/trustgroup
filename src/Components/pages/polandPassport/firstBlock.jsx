import LeadRequest from "../leadRequest";

function PolandPassportFirstBlock({ translate, language }) {
    const stagesBezPmjContainer = [
        {
            img: "document_1.svg",
            head: translate.stages.stage1.head[language],
            info: translate.stages.stage1.text[language],
            list: null,
        },
        {
            img: "document_3.svg",
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
            img: "1.svg",
            head: translate.stages.stage4.head[language],
            info: translate.stages.stage4.text[language],
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
                style={{ background: "#f1f1f1", padding: "40px 0" }}
            >
                <div className="container">
                    <h1>{translate.head2[language]}</h1>
                    <p>{translate.text1[language]}</p>
                    <p>
                        <b>{translate.text2[language]}</b>
                    </p>
                </div>
            </div>

            <div
                className="how-to centered"
                style={{
                    backgroundImage: "url(/src/poland/pasport-bg-poland.jpg)",
                }}
            >
                <div className="container">
                    <h1 className="content-head">
                        {translate.howTo.head[language]}
                    </h1>
                    <div className="how-to-blocks-container">
                        <div className="block">
                            <div className="img">
                                <img src="/src/poland/european.svg" alt="" />
                            </div>
                            <div className="info">
                                {translate.howTo.block1[language]}
                            </div>
                        </div>

                        <div className="block">
                            <div className="img">
                                <img src="/src/poland/people.svg" alt="" />
                            </div>
                            <div className="info">
                                {translate.howTo.block2[language]}
                            </div>
                        </div>

                        <div className="block">
                            <div className="img">
                                <img src="/src/poland/passaport.svg" alt="" />
                            </div>
                            <div className="info">
                                {translate.howTo.block3[language]}
                            </div>
                        </div>
                    </div>

                    <p>{translate.howTo.block4[language]}</p>
                </div>
            </div>

            <div
                className="text-block centered mini-foto-text-container-passport"
                style={{
                    background: "#f1f1f1",
                    backgroundImage: "url(/src/poland/grey-bg.jpg)",
                }}
            >
                <div className="container">
                    <h1>{translate.whoCan.head[language]}</h1>
                    <p>{translate.whoCan.text1[language]}</p>
                    <div className="bg-text">
                        <p>{translate.whoCan.text2[language]}</p>
                    </div>
                    <div className="counter">
                        <span className="count">1</span>
                        <div className="header-count">
                            {translate.whoCan.block1[language]}
                        </div>
                    </div>
                    <div className="mini-foto-text-container mini-foto-text-container-with-head ">
                        <div className="block">
                            <img src="/src/poland/doc_pass_full.svg" alt="" />
                            <div className="mini-text">
                                <div className="headline">
                                    {translate.whoCan.block2[language]}
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <img src="/src/poland/doc_prison-01.svg" alt="" />
                            <div className="mini-text">
                                <div className="headline">
                                    {translate.whoCan.block3[language]}
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <img src="/src/poland/doc_born-01.svg" alt="" />
                            <div className="mini-text">
                                <div className="headline">
                                    {translate.whoCan.block4[language]}
                                </div>
                            </div>
                        </div>

                        <div className="block">
                            <img
                                src="/src/poland/doc_bezenstvo-01.svg"
                                alt=""
                            />
                            <div className="mini-text">
                                <div className="headline">
                                    {translate.whoCan.block5[language]}
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <img src="/src/poland/doc_army.svg" alt="" />
                            <div className="mini-text">
                                <div className="headline">
                                    {translate.whoCan.block6[language]}
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <img src="/src/poland/doc_zoom-check.svg" alt="" />
                            <div className="mini-text">
                                <div className="headline">
                                    {" "}
                                    {translate.whoCan.block7[language]}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="counter">
                        <span className="count">2</span>
                        <div className="header-count">
                            {translate.whoCan.block8[language]}
                        </div>
                    </div>
                    <p>{translate.whoCan.text3[language]}</p>
                    <p className="centerBlue">
                        {translate.whoCan.text4[language]}
                    </p>
                </div>
            </div>

            <div className="fetures  centered">
                <div className="container">
                    <h1 className="content-head">
                        {translate.adv.head[language]}
                    </h1>
                    <div className="fetures-container">
                        <div className="feture">
                            <div className="img">
                                <img src="/src/poland/plane.svg" alt="" />
                            </div>
                            <div className="head">
                                {translate.adv.text1[language]}
                            </div>
                        </div>
                        <div className="feture">
                            <div className="img">
                                <img
                                    src="/src/poland/building_stars.svg"
                                    alt=""
                                />
                            </div>
                            <div className="head">
                                {translate.adv.text2[language]}
                            </div>
                        </div>
                        <div className="feture">
                            <div className="img">
                                <img src="/src/poland/education_o.svg" alt="" />
                            </div>
                            <div className="head">
                                {translate.adv.text3[language]}
                            </div>
                        </div>

                        <div className="feture">
                            <div className="img">
                                <img src="/src/poland/business.svg" alt="" />
                            </div>
                            <div className="head">
                                {translate.adv.text4[language]}
                            </div>
                        </div>

                        <div className="feture">
                            <div className="img">
                                <img src="/src/poland/med.svg" alt="" />
                            </div>
                            <div className="head">
                                {translate.adv.text5[language]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="stages centered">
                <div className="container">
                    <h1 className="content-head">
                        {translate.stages.head[language]}
                    </h1>

                    <div className="stages-container">
                        {renderStages(stagesBezPmjContainer)}
                    </div>
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

export default PolandPassportFirstBlock;
