import {ErrorMessage, Field, Form, Formik, FormikHelpers} from "formik";
import {ReactElement} from "react";
import Layout from "../components/Layout";
import useSWR from "swr";
import axios from "axios";
import { useRouter } from "next/router";
import {DrankType} from "../types";
import * as Yup from 'yup';
import Head from "next/head";

interface Values {
    naam: string;
    kostuum: boolean;
    aantal: number;
    keuze: string[];
    extra: string;
}

const initialValues = {
    naam: '',
    kostuum: true,
    aantal: 1,
    keuze: [],
    extra: '',
    akkoord: false
}

export default function Aanmelden() {
    async function meldAan() {
        const data = {};
    }

    const router = useRouter();
    const fetcher = (url: string): Promise<DrankType> =>
        axios(url).then((res) => res.data);
    const {data: dranken, error}: any  = useSWR('/api/drank', fetcher);

    if (error) <div> An error occured</div>;
    if (!dranken) <div>Loading</div>;

    // @ts-ignore
    // @ts-ignore
    return (

        <div className={"wrapper"}>
            <div className={"article content"}>
                <h1>Aanmelden voor het feest op 30 April</h1>
                <div className={"intro"}>
                    <p>Alle aanwezigen dienen dit formulier,zover mogelijk, in te vullen.
                        Dit in verband met het aankopen van de consumpties en inzicht in de verdere organisatie van het feest.
                        Er is een mogelijkheid om een voorkeur door te geven aan dranken in het onderstaande formulier.  </p>
                    <p className={"attention"}>Gelieve dit formulier 1x in te vullen per uitnodiging</p>
                </div>
                <div id={"feedbackPanel"} className={"message error positionHere"} role={"alert"}>
                    <p></p>
                </div>
                <Formik initialValues={initialValues}
                        validationSchema={Yup.object({
                            naam: Yup.string().min(1, 'Voer een naam in').max(50).required('Verplicht'),
                            kostuum: Yup.boolean().required('Verplicht'),
                            aantal: Yup.number().required('Verplicht'),
                            keuze: Yup.array().required('Verplicht'),
                            extra: Yup.string().max(200, 'Niet teveel invoeren'),
                            akkoord: Yup.boolean().required()
                        })}
                        //@ts-ignore
                        onSubmit={(values: Values,
                                   {setSubmitting}: FormikHelpers<Values>
                        ) => {
                            // const payload = JSON.stringify(values, null, 2);
                            // alert(payload);
                            axios.post('api/aanwezigen', values)
                                .then(res => console.log(res))
                                .catch(err => console.log(err));
                            console.log("Ingediend");
                            router.push("/statistiek").then(r => r);
                        }}>
                    {formik => (
                        <Form className={"form"}>
                        <p className={"meta req"}><strong>*</strong> Verplichte velden</p>
                        <div className={"formWrapper"}>
                            <div className={"eforms-field"}>
                                <label htmlFor={"naam"}>Naam: <strong className={"req"}>*</strong></label>
                                <Field name={"naam"} />
                                <ErrorMessage name={"naam"} />
                            </div>
                            <div className={"eforms-field"} role="group" >
                                <legend>Ik kom met: <strong className={"req"}>*</strong></legend>
                                <div className={"field"}>
                                    <label className={"radio"} htmlFor={"aantal"}>
                                        <Field type="radio" name="aantal" value="1" />
                                        Geen aanhang
                                    </label>
                                    <label className={"radio"} htmlFor={"aantal"}>
                                        <Field type="radio" name="aantal" value="2" />
                                        +1 aanhang
                                    </label>
                                </div>
                                <ErrorMessage name={"aantal"} />
                            </div>
                            <div className={"eforms-field"} role="group" >
                                <legend>Ik/wij zijn verkleed: <strong className={"req"}>*</strong></legend>
                                <div className={"field"}>
                                    <label className={"radio"} htmlFor={"kostuum"}>
                                        <Field type="radio" name="kostuum" value="true" />
                                        Ja
                                    </label>
                                    <label className={"radio"} htmlFor={"aantal"}>
                                        <Field type="radio" name="kostuum" value="true" />
                                        Ja
                                    </label>
                                </div>
                                <ErrorMessage name={"kostuum"} />
                            </div>
                            <div className={"eforms-field"} role="group">
                                <legend>Wat drink je: <strong className={"req"}>*</strong></legend>
                                <div className={"field"}>

                                    {dranken && dranken.map((drank: DrankType, key: any) => (

                                    <label className={"ag-checkbox"} key={key}>
                                        <Field type="checkbox" name="keuze" value={drank.naam} />
                                        { drank.naam.charAt(0).toUpperCase() + drank.naam.slice(1)}
                                    </label>
                                    ))}
                                </div>
                                <ErrorMessage name={"keuze"} />

                            </div>
                            <div className={"eforms-field"}>
                                <label htmlFor={"extra"}>Anders, namelijk: </label>
                                <Field name={"extra"} />
                            </div>
                            <div id="avg" className={"eforms-fieldgroup"}>
                                <div className={"eformText"}>
                                    <h3>We proberen zoveel mogelijk rekening te houden met uw wensen.</h3>
                                    <p>Wij kijken er erg naar uit om jullie te ontvangen op ons feest.
                                    Denken jullie nog aan de verkleedpartij?
                                        Het beste en origineelste kostuum van de avond wint een mooie prijs.
                                    </p><hr />
                                    <p>Nog geen idee voor een cadeautip?
                                    We ontvangen graag:
                                    </p>
                                    <ul>
                                        <li>Geld</li>
                                        <li>Felicitaties</li>
                                        <li>Thema gerelateerde cadeaus</li>
                                    </ul>
                                </div>
                                <div className={"eforms-field"}>
                                    <legend>Akkoordverklaring<strong className={"req"}>*</strong></legend>
                                    <div className={"field"} role="group">
                                        <label className={"radio"} htmlFor={"akkoord"}>
                                            <Field type="radio" name="akkoord" value="true" />
                                            Ik heb gelezen en begrepen wat er hier boven staat en wij komen naar het feest.
                                        </label>
                                    </div>
                                    <ErrorMessage name={"akkoord"} />
                                </div>
                            </div>

                            <div className={"eforms-buttons"}>
                                <button type={"submit"} name={"confirm"} className={""} value={"Ga verder"} >Ga verder</button>
                            </div>
                        </div>
                    </Form>
                    )}

                </Formik>
            </div>
        </div>
    )
}

Aanmelden.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout title={"Aanmelden"}>
            {page}
        </Layout>
    )
}
