import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';


function MultipleInputs({ type }) {

    const [medicationData, setMedicationData] = useState([]);
    const [medicalHistory, setMedicalHistory] = useState([]);

    const inputHandler = (e) => {
        e.preventDefault();
        if (e.key === "Enter" || e.key === ",") {
            if (e.target.value !== "" && medicationData.length < 10) {
                setMedicationData([...medicationData, e.target.value]);
                e.target.value = "";
            }
        }
    }

    const medicalHistoryHandler = (e) => {
        e.preventDefault();
        if (e.key === "Enter" || e.key === ",") {
            if (e.target.value !== "" && medicalHistory.length < 10) {
                setMedicalHistory([...medicalHistory, e.target.value]);
                e.target.value = "";
            }
        }
    }

    const removemedicationData = (indexToBeRemoved) => {
        setMedicationData(medicationData.filter((_, index) => (
            index !== indexToBeRemoved
        )))
    }

    return (
        <div>
            <div className="data_container">
                {
                    medicationData?.map((item, index) => (
                        < div className='data' key={index}>
                            <p className="dataEntered">{item}  <FontAwesomeIcon onClick={() => removemedicationData(index
                            )} icon={faXmarkCircle} /></p>
                        </div>
                    ))
                }

                {
                    type == "medication" ? <>
                        <input type="text"
                            onKeyUp={inputHandler}
                            placeholder="Medication    *use comma to enter multiple value"
                        /><br />
                        <input type="hidden" value={medicationData} name="medication" />

                    </> : null
                }
                {
                    medicalHistory?.map((item, index) => (
                        < div className='data' key={index}>
                            <p className="dataEntered">{item}  <FontAwesomeIcon onClick={() => removemedicationData(index
                            )} icon={faXmarkCircle} /></p>
                        </div>
                    ))
                } <br />
                {
                    type == "medicalHistory" ? <>
                        <input type="text"
                            onKeyUp={medicalHistoryHandler}
                            placeholder="Enter your medical history *use comma to enter multiple value"
                        /><br />
                        <input type="hidden" value={medicalHistory} name="medical_history" />
                    </> : null
                }
            </div >
        </div >
    )
}

export default MultipleInputs;