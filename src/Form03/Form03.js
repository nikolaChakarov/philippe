import React, { useState } from "react";
import { useEffect } from "react";
import useForm from "./useForm";

const CurrentOnSale = (props) => {
    const { step, values, errors, dirty, handleCheckBoxChange, handleChange } =
        props;

    return (
        <div>
            {step === 1 && (
                <div>
                    <label htmlFor="currentOnSaleStartingDate">
                        <span>Depuis quelle date?</span>
                        <input
                            type="text"
                            name="currentOnSaleStartingDate"
                            value={values.currentOnSaleStartingDate}
                            onChange={handleChange}
                        />
                    </label>
                    {dirty && errors.currentOnSaleStartingDate && (
                        <span style={{ color: "red" }}>
                            {errors.currentOnSaleStartingDate}
                        </span>
                    )}
                </div>
            )}

            {step === 2 && (
                <div>
                    <span>Comment ?</span>
                    <label htmlFor="currentOnSaleHow">
                        <span>Par vous seul</span>
                        <input
                            type="radio"
                            name="currentOnSaleHow"
                            value={"Par vous seul"}
                            onChange={handleChange}
                            checked={
                                values.currentOnSaleHow === "Par vous seul"
                            }
                        />
                    </label>

                    <label htmlFor="currentOnSaleHow">
                        <span>Par une agence</span>
                        <input
                            type="radio"
                            name="currentOnSaleHow"
                            value={"Par une agence"}
                            onChange={handleChange}
                            checked={
                                values.currentOnSaleHow === "Par une agence"
                            }
                        />
                    </label>

                    <label htmlFor="currentOnSaleHow">
                        <span>Par plusieurs agences</span>
                        <input
                            type="radio"
                            name="currentOnSaleHow"
                            value={"Par plusieurs agences"}
                            onChange={handleChange}
                            checked={
                                values.currentOnSaleHow ===
                                "Par plusieurs agences"
                            }
                        />
                    </label>
                    {dirty && errors.currentOnSaleHow && (
                        <span style={{ color: "red" }}>
                            {errors.currentOnSaleHow}
                        </span>
                    )}
                </div>
            )}

            {step === 3 && (
                <div>
                    <span>Sur quels portails d’annonces ?</span>
                    <label htmlFor="">
                        <span>Le bon coin</span>
                        <input
                            type="checkbox"
                            name="Le bon coin"
                            onChange={(e) =>
                                handleCheckBoxChange(e, "currentOnSalePortail")
                            }
                        />
                    </label>

                    <label htmlFor="">
                        <span>De particulier à particulier</span>
                        <input
                            type="checkbox"
                            name="De particulier à particulier"
                            onChange={(e) =>
                                handleCheckBoxChange(e, "currentOnSalePortail")
                            }
                        />
                    </label>
                </div>
            )}
        </div>
    );
};

const NotCurrentOnSale = (props) => {
    return <div>not current on sale</div>;
};

const Form03 = () => {
    const init = {
        currentOnSale: null,
        currentOnSaleStartingDate: "",
        currentOnSaleHow: "",
        currentOnSalePortail: [],
        currentOnSalePrice: "",
        currentOnSaleNumberOfCalls: "",
        currentOnSaleVisits: "",
        currentOnSaleOffers: "",
        currentOnSaleBestPriceRecieved: "",
        currentOnSaleBestPriceRecievedDate: "",
        onSaleInThePassed: null,
        onSaleInThePassedTakeOfDate: "",
        onSaleInThePassedHow: "",
        onSaleInThePassedPortail: "",
        onSaleInThePassedPrice: "",
        onSaleInThePassedNumberOfCalls: "",
        onSaleInThePassedVisits: "",
        onSaleInThePassedOffers: "",
        onSaleInThePassedBestPriceRefused: "",
        onSaleInThePassedBestPriceRefusedDate: "",
    };

    const [step, setStep] = useState(0);

    const handleNextStep = () => {
        if (!valid) {
            setDirty(true);
            return;
        }

        setStep((prev) => prev + 1);
    };

    const rules = [
        ({ currentOnSale }) =>
            isRequired(currentOnSale) || {
                currentOnSale: "Selectioner current on sale",
            },
    ];

    const validate = (step, values) => {
        const err = {};
        let currentStepValid = true;

        if (step === 0) {
            if (values.currentOnSale === null) {
                err.currentOnSale = "Selectioner current on sale";
                currentStepValid = false;
            }
        }

        if (step === 1 && values.currentOnSale === "yes") {
            if (!values.currentOnSaleStartingDate) {
                err.currentOnSaleStartingDate = "Selectionner une date";
                currentStepValid = false;
            }
        }

        if (step === 2 && values.currentOnSale === "yes") {
            if (!values.currentOnSaleHow) {
                err.currentOnSaleHow = "Selectionner comment";
                currentStepValid = false;
            }
        }

        return { currentStepValid, err };
    };

    const isRequired = (value) => {
        return value !== null && value.length > 0;
    };

    const onSubmit = (val) => {
        console.log({ val });
    };

    const {
        values,
        errors,
        valid,
        dirty,
        setDirty,
        handleCheckBoxChange,
        handleChange,
        handleSubmit,
    } = useForm({
        init,
        rules,
        step,
        validate,
        onSubmit,
    });

    console.log({ errors }, { valid }, { step });

    return (
        <div>
            <h3>Form03 Fr</h3>

            <div className="wrapper">
                {step === 0 && (
                    <div>
                        <span>Votre bien est-il déjà en vente ?</span>
                        <label htmlFor="">
                            <span>Oui</span>
                            <input
                                type="radio"
                                name="currentOnSale"
                                value={"yes"}
                                checked={values.currentOnSale === "yes"}
                                onChange={handleChange}
                            />
                        </label>

                        <label htmlFor="">
                            <span>Non</span>
                            <input
                                type="radio"
                                name="currentOnSale"
                                value={"no"}
                                checked={values.currentOnSale === "no"}
                                onChange={handleChange}
                            />
                        </label>
                        {dirty && errors.currentOnSale && (
                            <span style={{ color: "red" }}>
                                {errors.currentOnSale}
                            </span>
                        )}
                    </div>
                )}

                {step > 0 && values.currentOnSale === "yes" && (
                    <CurrentOnSale
                        step={step}
                        dirty={dirty}
                        errors={errors}
                        values={values}
                        handleCheckBoxChange={handleCheckBoxChange}
                        handleChange={handleChange}
                    />
                )}

                {step > 0 && values.currentOnSale === "no" && (
                    <NotCurrentOnSale
                        step={step}
                        dirty={dirty}
                        errors={errors}
                        values={values}
                        handleCheckBoxChange={handleCheckBoxChange}
                        handleChange={handleChange}
                    />
                )}
            </div>

            <div className="btns-wrapper">
                {step > 0 && (
                    <button onClick={() => setStep((prev) => prev - 1)}>
                        Prev
                    </button>
                )}
                <button onClick={handleNextStep}>Next</button>
            </div>
            <hr />
            <button onClick={handleSubmit}>test</button>
        </div>
    );
};

export default Form03;
