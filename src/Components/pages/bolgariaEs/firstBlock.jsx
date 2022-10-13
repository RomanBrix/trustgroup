import { useState } from "react";
import LeadRequest from "../leadRequest"


function BolgariaFirstBlock(props) {
    const [img, setImg] = useState(null);
    return (
        <>
            <div className="intro centered" style={{backgroundImage: 'url(/src/bolgaria/contact-bg-bulgaria.jpg)'}}>
                <div className="container">
                    <div className="left">
                        <img src="/src/rumunia/contact-col-bg.png" alt="" />
                        <h1>Консультационная поддержка в вопросах гражданства ЕC</h1>
                    </div>
                    <div className="right">
                        <LeadRequest/>
                    </div>
                </div>
            </div>


            <div className="text-block centered">
                <div className="container">
                    <h1>Иммиграция в Болгарию</h1>
                    <p>Гражданство Болгарии – это востребованный и выгодный способ иммигрировать в Евросоюз.
После предоставления Вам гражданства Вы сможете использовать преимущество этого статуса – получить возможность проживать, обучаться и работать как на территории Болгарии, так и в другой стране-участнице Евросоюза.</p>
                    <p>Иммиграция в Болгарию обеспечит вам высокие социальные и правовые гарантии. Приобрести гражданство Болгарии возможно по нескольким процедурам, одной из которых является программа репатриации в соответствии со ст. 15 Закона "О гражданстве Болгарии".</p>
                </div>
            </div>
            

            {
                img !== null ? 
                <div id="bigImg" onClick={()=>{setImg(null)}}>
                    <img src={`/src/bolgaria/${img}`} alt="" />
                </div>
                : null
            }
        
            <div className="block-five centered">
                <div className="container">
                    <h1>Документы гражданина Румынии</h1>
                    <div className="text">После получения сертификата о гражданстве вы можете приступать к оформлению пакета внутренних документов, которые дают право на постоянное пребывание и свободное перемещение в пределах Европейского союза и множества стран мира. В перечень документов, которые необходимо оформить, входят:</div>
                    <div className="photo-container">

                        <div className="photo" onClick={()=>{setImg('doc3.png')}}>
                            <div className="img">
                                <img src="/src/bolgaria/doc3.png" alt="" />
                            </div>
                            <div className="headline">Внутренний паспорт (ID-карта)</div>
                        </div>

                        <div className="photo" onClick={()=>{setImg('doc2.png')}}>
                            <div className="img">
                                <img src="/src/bolgaria/doc2.png" alt="" />
                            </div>
                            <div className="headline">Заграничный паспорт гражданина Болгарии</div>
                        </div>

                        <div className="photo" onClick={()=>{setImg('doc4.png')}}>
                            <div className="img">
                                <img src="/src/bolgaria/doc4.png" alt="" />
                            </div>
                            <div className="headline">Водительское удостоверение</div>
                        </div>

                        <div className="photo" onClick={()=>{setImg('karta-sm.jpg')}}>
                            <div className="img">
                                <img src="/src/bolgaria/karta-sm.jpg" alt="" />
                            </div>
                            <div className="headline">Единый Гражданский Номер (ЕГН)</div>
                        </div>

                        <div className="photo" onClick={()=>{setImg('doc_5.jpg')}}>
                            <div className="img">
                                <img src="/src/bolgaria/doc_5.jpg" alt="" />
                            </div>
                            <div className="headline">Разрешение на постоянное проживание</div>
                        </div>


                        <div className="photo" onClick={()=>{setImg('doc-bolcitizenchp-sm.jpg')}}>
                            <div className="img">
                                <img src="/src/bolgaria/doc-bolcitizenchp-sm.jpg" alt="" />
                            </div>
                            <div className="headline">Удостоверение о болгарском гражданстве</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BolgariaFirstBlock