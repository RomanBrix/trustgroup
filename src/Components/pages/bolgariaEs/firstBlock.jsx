import { useState } from "react";
import LeadRequest from "../leadRequest";

function BolgariaFirstBlock({ translate, language }) {
    const [img, setImg] = useState(null);

    return (
        <>
            <div
                className="intro centered"
                style={{
                    backgroundImage:
                        "url(/src/bolgaria/contact-bg-bulgaria.jpg)",
                }}
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
                    <h1>{translate.textHead[language]}</h1>
                    <p>{translate.text1[language]}</p>
                    <p>{translate.text2[language]}</p>
                </div>
            </div>

            {img !== null ? (
                <div
                    id="bigImg"
                    onClick={() => {
                        setImg(null);
                    }}
                >
                    <img src={`/src/bolgaria/${img}`} alt="" />
                </div>
            ) : null}

            <div className="block-five centered">
                <div className="container">
                    <h1>{translate.docs.head[language]}</h1>
                    <div className="text">{translate.docs.text[language]}</div>
                    <div className="photo-container">
                        <div
                            className="photo"
                            onClick={() => {
                                setImg("doc3.png");
                            }}
                        >
                            <div className="img">
                                <img src="/src/bolgaria/doc3.png" alt="" />
                            </div>
                            <div className="headline">
                                {translate.docs.photo1[language]}
                            </div>
                        </div>

                        <div
                            className="photo"
                            onClick={() => {
                                setImg("doc2.png");
                            }}
                        >
                            <div className="img">
                                <img src="/src/bolgaria/doc2.png" alt="" />
                            </div>
                            <div className="headline">
                                {translate.docs.photo2[language]}
                            </div>
                        </div>

                        <div
                            className="photo"
                            onClick={() => {
                                setImg("doc4.png");
                            }}
                        >
                            <div className="img">
                                <img src="/src/bolgaria/doc4.png" alt="" />
                            </div>
                            <div className="headline">
                                {translate.docs.photo3[language]}
                            </div>
                        </div>

                        <div
                            className="photo"
                            onClick={() => {
                                setImg("karta-sm.jpg");
                            }}
                        >
                            <div className="img">
                                <img src="/src/bolgaria/karta-sm.jpg" alt="" />
                            </div>
                            <div className="headline">
                                {translate.docs.photo4[language]}
                            </div>
                        </div>

                        <div
                            className="photo"
                            onClick={() => {
                                setImg("doc_5.jpg");
                            }}
                        >
                            <div className="img">
                                <img src="/src/bolgaria/doc_5.jpg" alt="" />
                            </div>
                            <div className="headline">
                                {translate.docs.photo5[language]}
                            </div>
                        </div>

                        <div
                            className="photo"
                            onClick={() => {
                                setImg("doc-bolcitizenchp-sm.jpg");
                            }}
                        >
                            <div className="img">
                                <img
                                    src="/src/bolgaria/doc-bolcitizenchp-sm.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="headline">
                                {translate.docs.photo6[language]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BolgariaFirstBlock;
