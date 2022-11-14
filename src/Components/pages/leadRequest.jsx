import axios from "axios";
import { useState } from "react";
import useTranslate from "../../hook/useTranslate";

function LeadRequest(props) {
    const [values, setValues] = useState({
        name: "",
        phone: "",
        mail: "",
    });
    const {
        translate: { RequestForm },
        language,
    } = useTranslate();

    // console.log(values)
    return (
        <div className="request">
            <h2>{RequestForm.head[language]}</h2>
            <p>{RequestForm.afterHead[language]}</p>

            <div className="inputs">
                <input
                    type="text"
                    placeholder={RequestForm.name[language]}
                    name="name"
                    value={values.name}
                    onChange={({ target }) => {
                        handleChange(target);
                    }}
                />
                <input
                    type="text"
                    placeholder={RequestForm.phone[language]}
                    name="phone"
                    value={values.phone}
                    onChange={({ target }) => {
                        handleChange(target);
                    }}
                />
                <input
                    type="text"
                    placeholder={RequestForm.email[language]}
                    name="mail"
                    value={values.mail}
                    onChange={({ target }) => {
                        handleChange(target);
                    }}
                />

                <div
                    className="btn"
                    onClick={() => {
                        sendData();
                    }}
                >
                    {RequestForm.btn[language]}
                </div>
            </div>
        </div>
    );

    function handleChange(target) {
        setValues((pr) => {
            return {
                ...pr,
                [target.name]: target.value,
            };
        });
    }

    function sendData() {
        if (values.name.length < 1) {
            alert(RequestForm.error_field[language]);
            return;
        }
        if (values.phone.length < 1) {
            alert(RequestForm.error_field[language]);
            return;
        }
        if (values.mail.length < 1) {
            alert(RequestForm.error_field[language]);
            return;
        }

        // axios.post('https://localhost:1488/bot_anal', values)
        axios
            .post("https://euimmigration.services:1488/bot_anal", values)
            .then((res) => {
                console.log(res.data);

                if (res.data) {
                    alert(RequestForm.success[language]);
                    setValues({
                        name: "",
                        phone: "",
                        mail: "",
                    });
                } else {
                    alert(RequestForm.error[language]);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

export default LeadRequest;
