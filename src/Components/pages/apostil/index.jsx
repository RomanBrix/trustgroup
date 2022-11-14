import useTranslate from "../../../hook/useTranslate";
import LeadRequest from "../leadRequest";

function Apostil(props) {
    const {
        translate: { Apost },
        language,
    } = useTranslate();

    return (
        <div className="rumunia-passport poland-passport bolgaria-passport bolgaria-es rumunia-es poland-es">
            <div
                className="intro centered"
                style={{ backgroundImage: "url(/src/apostil/bgimage.jpg)" }}
            >
                <div className="container">
                    <div className="left">
                        <img src="/src/poland/contact-col-bg.png" alt="" />
                        <h1>{Apost.head[language]}</h1>
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
                    <p>{Apost.text1[language]}</p>
                    <h1>{Apost.headAp[language]}</h1>
                    <p>{Apost.text2[language]}</p>
                    <p>{Apost.text3[language]}</p>
                    <h1>{Apost.text4[language]}</h1>
                    <div className="mini-foto-text-container">
                        <div className="block">
                            <img src="/src/apostil/checkdefault.svg" alt="" />
                            <div className="headline">
                                {Apost.foto1[language]}
                            </div>
                        </div>
                        <div className="block">
                            <img src="/src/apostil/checkdefault.svg" alt="" />
                            <div className="headline">
                                {Apost.foto2[language]}
                            </div>
                        </div>
                        <div className="block">
                            <img src="/src/apostil/checkdefault.svg" alt="" />
                            <div className="headline">
                                {Apost.foto3[language]}
                            </div>
                        </div>

                        <div className="block">
                            <img src="/src/apostil/checkdefault.svg" alt="" />
                            <div className="headline">
                                {Apost.foto4[language]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="second-blcok apostil-block centered"
                style={{ backgroundImage: "url(/src/apostil/bginfo.jpg)" }}
            >
                <div className="container">
                    <h1>{Apost.head2[language]}</h1>
                    <img src="/src/apostil/aposblank.png" alt="" />
                </div>
            </div>

            <div
                className="text-block centered"
                style={{ background: "#f1f1f1" }}
            >
                <div className="container">
                    <h1>{Apost.head3[language]}</h1>
                    <p>{Apost.text5[language]}</p>
                    <p>{Apost.text6[language]}</p>
                </div>
            </div>

            <div className="info-blocks centered">
                <div className="container">
                    <div className="info-block">
                        <div className="left">
                            <p>{Apost.infoBlock1[language]}</p>
                        </div>
                        <div className="right">
                            <img src="/src/apostil/icon-image1.png" alt="" />
                        </div>
                    </div>
                    <div className="info-block">
                        <div className="left">
                            <p>{Apost.infoBlock2[language]}</p>
                        </div>
                        <div className="right">
                            <img src="/src/apostil/icon-i2.svg" alt="" />
                        </div>
                    </div>
                    <div className="info-block">
                        <div className="left">
                            <p>{Apost.infoBlock3[language]}</p>
                        </div>
                        <div className="right">
                            <img src="/src/apostil/icon-image4.png" alt="" />
                        </div>
                    </div>
                    <div className="info-block">
                        <div className="left">
                            <p>{Apost.infoBlock4[language]}</p>
                        </div>
                        <div className="right">
                            <img src="/src/apostil/icon-image3.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="text-block centered"
                style={{ background: "#f1f1f1" }}
            >
                <div className="container">
                    <h1>{Apost.textBlockHead[language]}</h1>
                    <p>{Apost.textBlockText[language]}</p>
                    <ul>
                        <li>{Apost.textBlockList1[language]}</li>
                        <li>{Apost.textBlockList2[language]}</li>
                        <li>{Apost.textBlockList3[language]}</li>
                        <li>{Apost.textBlockList4[language]}</li>
                    </ul>
                    <p>{Apost.textBlockText2[language]}</p>
                </div>
            </div>

            <div
                className="intro centered"
                style={{
                    backgroundImage: "url(/src/apostil/form3_bg-main.jpg)",
                }}
            >
                <div className="container">
                    <div className="left">
                        <img src="/src/poland/contact-col-bg.png" alt="" />
                        <h1>{Apost.consult[language]}</h1>
                    </div>
                    <div className="right">
                        <LeadRequest />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Apostil;
