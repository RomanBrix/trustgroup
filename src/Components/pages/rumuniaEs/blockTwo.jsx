function BlockTwo({ translate, language }) {
    return (
        <>
            <div className="info-blocks centered">
                <div className="container">
                    <div className="info-block">
                        <div className="left">
                            <div className="headline">
                                {translate.infoBlock1.head[language]}
                            </div>
                            <p>{translate.infoBlock1.text[language]}</p>
                        </div>
                        <div className="right">
                            <img src="/src/rumunia/location.png" alt="" />
                        </div>
                    </div>
                    <div className="info-block">
                        <div className="left">
                            <div className="headline">
                                {translate.infoBlock2.head[language]}
                            </div>
                            <p>{translate.infoBlock2.text[language]}</p>
                        </div>
                        <div className="right">
                            <img src="/src/rumunia/elearning.png" alt="" />
                        </div>
                    </div>
                    <div className="info-block">
                        <div className="left">
                            <div className="headline">
                                {translate.infoBlock3.head[language]}
                            </div>
                            <p>{translate.infoBlock3.text[language]}</p>
                        </div>
                        <div className="right">
                            <img src="/src/rumunia/hotels.png" alt="" />
                        </div>
                    </div>
                    <div className="info-block">
                        <div className="left">
                            <div className="headline">
                                {translate.infoBlock4.head[language]}
                            </div>
                            <p>{translate.infoBlock4.text[language]}</p>
                        </div>
                        <div className="right">
                            <img src="/src/rumunia/bank-account.png" alt="" />
                        </div>
                    </div>
                    <div className="info-block">
                        <div className="left">
                            <div className="headline">
                                {translate.infoBlock5.head[language]}
                            </div>
                            <p>{translate.infoBlock5.text[language]}</p>
                        </div>
                        <div className="right">
                            <img src="/src/rumunia/suitcase.png" alt="" />
                        </div>
                    </div>
                    <div className="info-block">
                        <div className="left">
                            <div className="headline">
                                {translate.infoBlock6.head[language]}
                            </div>
                            <p>{translate.infoBlock6.text[language]}</p>
                        </div>
                        <div className="right">
                            <img src="/src/rumunia/insurance.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* text-block css from blockOne */}
            <div className="text-block centered">
                <div className="container">
                    <p>{translate.text1[language]}</p>
                    <p>{translate.text2[language]}</p>
                    <p>{translate.text3[language]}</p>

                    <div className="img-blocks">
                        <div className="img-block">
                            <img src="/src/rumunia/visa.png" alt="" />
                            <div className="headline">
                                {translate.img1[language]}
                            </div>
                        </div>
                        <div className="img-block">
                            <img src="/src/rumunia/es-icon-2.png" alt="" />
                            <div className="headline">
                                {translate.img2[language]}
                            </div>
                        </div>
                        <div className="img-block">
                            <img src="/src/rumunia/man-user.png" alt="" />
                            <div className="headline">
                                {translate.img3[language]}
                            </div>
                        </div>
                        <div className="img-block">
                            <img src="/src/rumunia/file-icon.png" alt="" />
                            <div className="headline">
                                {translate.img4[language]}
                            </div>
                        </div>
                    </div>
                    <p>{translate.imgText[language]}</p>
                </div>
            </div>

            <div
                className="text-block centered"
                style={{ background: "#f1f1f1", padding: "40px 0" }}
            >
                <div className="container">
                    <h1>{translate.head1[language]}</h1>
                    <p>{translate.text4[language]}</p>
                    <p>{translate.text5[language]}</p>
                    <p>{translate.text6[language]}</p>
                </div>
            </div>

            <div
                className="second-blcok centered"
                style={{ backgroundImage: "url(/src/main/bg3.jpg)" }}
            >
                <div className="container">
                    <ul>
                        <li>
                            <span className="count">
                                {" "}
                                <span> 1</span>
                            </span>
                            <div className="block">
                                <div className="head">
                                    {translate.block1.head[language]}
                                </div>
                                <div className="text">
                                    {translate.block1.text[language]}
                                </div>
                            </div>
                        </li>

                        <li>
                            <span className="count">
                                <span> 2</span>
                            </span>
                            <div className="block">
                                <div className="head">
                                    {translate.block2.head[language]}{" "}
                                </div>
                                <div className="text">
                                    {translate.block2.text[language]}
                                </div>
                            </div>
                        </li>

                        <li>
                            <span className="count">
                                <span> 3</span>
                            </span>
                            <div className="block">
                                <div className="head">
                                    {translate.block3.head[language]}{" "}
                                </div>
                                <div className="text">
                                    {translate.block3.text[language]}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default BlockTwo;
