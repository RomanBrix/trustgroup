import { useNavigate } from "react-router-dom";

function SecondBlock({ translate, language }) {
    const navigate = useNavigate();

    return (
        <>
            <div
                className="second-blcok centered"
                style={{ backgroundImage: "url(/src/main/bg3.jpg)" }}
            >
                <div className="container">
                    <h1>{translate.head[language]}</h1>
                    <ul>
                        <li>
                            <span className="count">
                                {" "}
                                <span> 1</span>
                            </span>
                            <div className="block">
                                <div className="head">
                                    {translate.list_one.head[language]}
                                </div>
                                <div className="text">
                                    {translate.list_one.text[language]}
                                </div>
                            </div>
                        </li>

                        <li>
                            <span className="count">
                                <span> 2</span>
                            </span>
                            <div className="block">
                                <div className="head">
                                    {translate.list_second.head[language]}
                                </div>
                                <div className="text">
                                    {translate.list_second.text[language]}
                                </div>
                            </div>
                        </li>
                    </ul>
                    <h2>{translate.secondHead[language]}</h2>
                </div>
            </div>
            <div className="interest centered">
                <div className="container">
                    <h1>{translate.thirdHead[language]}</h1>

                    <div className="blocks">
                        <div className="block">
                            <div
                                className="img"
                                style={{
                                    backgroundImage:
                                        "url(/src/main/romania-main-min.jpg)",
                                }}
                            >
                                <div className="img-text">
                                    <div className="text">
                                        {translate.consultES[language]}
                                    </div>
                                    <div
                                        className="btn"
                                        onClick={() => {
                                            navigate("/RumuniaEs");
                                        }}
                                    >
                                        {translate.btn[language]}
                                    </div>
                                </div>
                            </div>
                            <div className="headline">
                                {translate.citizRomania[language]}
                            </div>
                        </div>

                        <div className="block">
                            <div
                                className="img"
                                style={{
                                    backgroundImage:
                                        "url(/src/main/bulgaria-main-min.jpg)",
                                }}
                            >
                                <div className="img-text">
                                    <div className="text">
                                        {translate.bolgarInfo[language]}
                                    </div>
                                    <div
                                        className="btn"
                                        onClick={() => {
                                            navigate("/BolgariaEs");
                                        }}
                                    >
                                        {translate.btn[language]}
                                    </div>
                                </div>
                            </div>
                            <div className="headline">
                                {translate.citizBulgaria[language]}
                            </div>
                        </div>

                        <div className="block">
                            <div
                                className="img"
                                style={{
                                    backgroundImage:
                                        "url(/src/main/poland-main-min.jpg)",
                                }}
                            >
                                <div className="img-text">
                                    <div className="text">
                                        {translate.polInfo[language]}
                                    </div>
                                    <div
                                        className="btn"
                                        onClick={() => {
                                            navigate("/PolandEs");
                                        }}
                                    >
                                        {translate.btn[language]}
                                    </div>
                                </div>
                            </div>
                            <div className="headline">
                                {translate.citizPoland[language]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SecondBlock;
