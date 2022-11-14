import { useState } from "react";
import LeadRequest from "../leadRequest";

function BlockFive({ translate, language }) {
    const [img, setImg] = useState(null);
    // console.log(img);
    const faqContainer = [
        {
            headline: translate.faq1.title[language],
            text: translate.faq1.text[language],
        },
        {
            headline: translate.faq2.title[language],
            text: translate.faq2.text[language],
        },
        {
            headline: translate.faq3.title[language],
            text: translate.faq3.text[language],
        },
        {
            headline: translate.faq4.title[language],
            text: translate.faq4.text[language],
        },
        {
            headline: translate.faq5.title[language],
            text: translate.faq5.text[language],
        },
        {
            headline: translate.faq6.title[language],
            text: translate.faq6.text[language],
        },
        {
            headline: translate.faq7.title[language],
            text: translate.faq7.text[language],
        },
        {
            headline: translate.faq8.title[language],
            text: translate.faq8.text[language],
        },
        {
            headline: translate.faq9.title[language],
            text: translate.faq9.text[language],
        },
        {
            headline: translate.faq10.title[language],
            text: translate.faq10.text[language],
        },
        {
            headline: translate.faq11.title[language],
            text: translate.faq11.text[language],
        },
        {
            headline: translate.faq12.title[language],
            text: translate.faq12.text[language],
        },
    ];
    // console.log(faqContainer.length);
    return (
        <>
            {img !== null ? (
                <div
                    id="bigImg"
                    onClick={() => {
                        setImg(null);
                    }}
                >
                    <img src={`/src/rumunia/${img}`} alt="" />
                </div>
            ) : null}

            <div className="block-five centered">
                <div className="container">
                    <h1>{translate.head[language]}</h1>
                    <div className="text">{translate.text1[language]}</div>
                    <div className="photo-container">
                        <div
                            className="photo"
                            onClick={() => {
                                setImg("birth-certificate.jpg");
                            }}
                        >
                            <div className="img">
                                <img
                                    src="/src/rumunia/birth-certificate.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="headline">
                                {translate.photo1[language]}
                            </div>
                        </div>

                        <div
                            className="photo"
                            onClick={() => {
                                setImg("id.jpg");
                            }}
                        >
                            <div className="img">
                                <img src="/src/rumunia/id.jpg" alt="" />
                            </div>
                            <div className="headline">
                                {translate.photo2[language]}
                            </div>
                        </div>

                        <div
                            className="photo"
                            onClick={() => {
                                setImg("passport.jpg");
                            }}
                        >
                            <div className="img">
                                <img src="/src/rumunia/passport.jpg" alt="" />
                            </div>
                            <div className="headline">
                                {translate.photo3[language]}
                            </div>
                        </div>

                        <div
                            className="photo"
                            onClick={() => {
                                setImg("marriage-certificate.jpg");
                            }}
                        >
                            <div className="img">
                                <img
                                    src="/src/rumunia/marriage-certificate.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="headline">
                                {translate.photo4[language]}
                            </div>
                        </div>

                        <div
                            className="photo"
                            onClick={() => {
                                setImg("driver-license.jpg");
                            }}
                        >
                            <div className="img">
                                <img
                                    src="/src/rumunia/driver-license.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="headline">
                                {translate.photo5[language]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-block centered">
                <div className="container">
                    <h1>{translate.head2[language]}</h1>
                    <p>{translate.text2[language]}</p>

                    <div className="img-blocks img-blocks-big">
                        <div className="img-block">
                            <img src="/src/rumunia/experience.svg" alt="" />
                            <div className="headline">
                                {translate.img1[language]}
                            </div>
                        </div>
                        <div className="img-block">
                            <img src="/src/rumunia/time.svg" alt="" />
                            <div className="headline">
                                {translate.img2[language]}
                            </div>
                        </div>
                        <div className="img-block">
                            <img src="/src/rumunia/garanty.svg" alt="" />
                            <div className="headline">
                                {translate.img3[language]}
                            </div>
                        </div>
                        <div className="img-block">
                            <img src="/src/rumunia/kids.svg" alt="" />
                            <div className="headline">
                                {translate.img4[language]}
                            </div>
                        </div>
                    </div>
                    <p>{translate.imgText[language]}</p>
                </div>
            </div>

            <div className="faq-container centered">
                <div className="container">
                    <h1>FAQ</h1>
                    <div className="faq-content">{faqRender(faqContainer)}</div>
                </div>
            </div>

            <div
                className="intro centered"
                style={{
                    backgroundImage: "url(/src/rumunia/form3_bg-main.jpg)",
                }}
            >
                <div className="container">
                    <div className="left">
                        <img src="/src/rumunia/contact-col-bg.png" alt="" />
                        <h1>{translate.consult[language]}</h1>
                    </div>
                    <div className="right">
                        <LeadRequest />
                    </div>
                </div>
            </div>
        </>
    );

    function faqRender(arr) {
        return arr.map((item, index) => {
            return (
                <div className="faq-block" key={index + 1}>
                    <div className="headline">{item.headline}</div>
                    <div className="faq-text">{item.text}</div>
                </div>
            );
        });
    }
}

export default BlockFive;
