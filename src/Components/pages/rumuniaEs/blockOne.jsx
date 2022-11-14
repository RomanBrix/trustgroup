import LeadRequest from "../leadRequest";

function BlockOne({ translate, language }) {
    return (
        <>
            <div
                className="intro centered"
                style={{ backgroundImage: "url(/src/rumunia/contact-bg.jpg)" }}
            >
                <div className="container">
                    <div className="left">
                        <img src="/src/rumunia/contact-col-bg.png" alt="" />
                        <h1>{translate.head[language]}</h1>
                    </div>
                    <div className="right">
                        <LeadRequest />
                    </div>
                </div>
            </div>
            <div className="text-block centered">
                <div className="container">
                    <h1>{translate.text1[language]}</h1>
                    <p>{translate.text2[language]}</p>
                    <p>{translate.text3[language]}</p>
                    <p>{translate.text4[language]}</p>
                </div>
            </div>
        </>
    );
}

export default BlockOne;
