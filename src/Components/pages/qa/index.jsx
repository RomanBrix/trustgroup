import axios from "axios";
import { useState } from "react";
import useTranslate from "../../../hook/useTranslate";

function Qa(props) {
    const [values, setValues] = useState({
        name: "",
        phone: "",
        mail: "",
        msg: "",
        status: "",
        procedure: "",
    });
    const {
        translate: { QA },
        language,
    } = useTranslate();

    return (
        <div
            className="rumunia-passport poland-passport bolgaria-passport bolgaria-es rumunia-es poland-es qa main"
            style={{ backgroundImage: 'url("/src/qa/bg3.jpg")' }}
        >
            <div className="container">
                <div
                    className="form"
                    style={{ backgroundImage: 'url("/src/qa/bg2.jpg")' }}
                >
                    <div className="top">
                        <h1>{QA.head[language]}</h1>
                        <p>{QA.text1[language]}</p>
                    </div>

                    <div className="bottom">
                        <input
                            type="text"
                            placeholder={QA.name[language]}
                            name="name"
                            value={values.name}
                            onChange={({ target }) => {
                                changeVal(target);
                            }}
                        />
                        <input
                            type="text"
                            placeholder={QA.phone[language]}
                            name="phone"
                            value={values.phone}
                            onChange={({ target }) => {
                                changeVal(target);
                            }}
                        />
                        <input
                            type="text"
                            placeholder={QA.email[language]}
                            name="mail"
                            value={values.mail}
                            onChange={({ target }) => {
                                changeVal(target);
                            }}
                        />
                        <div className="selects">
                            <select
                                name="status"
                                defaultValue={""}
                                id="status"
                                onChange={({ target }) => {
                                    changeVal(target);
                                }}
                            >
                                <option value="" disabled="">
                                    {QA.status.dis[language]}
                                </option>
                                <option value="Клиент">
                                    {QA.status.client[language]}
                                </option>
                                <option value="Не клиент">
                                    {QA.status.notClient[language]}
                                </option>
                            </select>

                            <select
                                name="procedure"
                                defaultValue={""}
                                id="procedure"
                                onChange={({ target }) => {
                                    changeVal(target);
                                }}
                            >
                                <option value="" disabled="">
                                    {QA.procedure.dis[language]}
                                </option>
                                <option value="Гражданство Румынии">
                                    {QA.procedure.romania[language]}
                                </option>
                                <option value="Гражданство Болгарии">
                                    {QA.procedure.bolg[language]}
                                </option>
                                <option value="Карта поляка">
                                    {QA.procedure.polCard[language]}
                                </option>
                                <option value="ВНЖ Черногории">
                                    {QA.procedure.vnjChern[language]}
                                </option>
                                <option value="другое">
                                    {QA.procedure.etc[language]}
                                </option>
                            </select>
                        </div>
                        <textarea
                            id="msg"
                            name="msg"
                            placeholder={QA.msg[language]}
                            onChange={({ target }) => {
                                changeVal(target);
                            }}
                        />
                        <div
                            className="btn btn-send"
                            onClick={() => {
                                sendData();
                            }}
                        >
                            {QA.btn[language]}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    function changeVal(target) {
        console.log(target.value);
        setValues((pr) => {
            return {
                ...pr,
                [target.name]: target.value,
            };
        });
    }

    function sendData() {
        if (values.name.length < 1) {
            alert(QA.alerts.name[language]);
            return;
        }
        if (values.phone.length < 1) {
            alert(QA.alerts.phone[language]);
            return;
        }
        if (values.mail.length < 1) {
            alert(QA.alerts.email[language]);
            return;
        }

        if (values.msg.length < 1) {
            alert(QA.alerts.msg[language]);
            return;
        }
        if (values.status.length < 1) {
            alert(QA.alerts.status[language]);
            return;
        }
        if (values.procedure.length < 1) {
            alert(QA.alerts.procedure[language]);
            return;
        }

        console.log(values);

        // axios.post('https://localhost:1488/bot_anal', values)
        axios
            .post("https://euimmigration.services:1488/bot_anal_v2", values)
            .then((res) => {
                console.log(res.data);

                if (res.data) {
                    alert(QA.alerts.success[language]);
                    setValues({
                        name: "",
                        phone: "",
                        mail: "",
                        msg: "",
                        status: "",
                        procedure: "",
                    });
                } else {
                    alert(QA.alerts.error[language]);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

export default Qa;
