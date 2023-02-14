import React, { useState } from 'react'
import './form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import Maps from './Maps';
import MultipleInputs from './MultipleInputs';

function Forms() {

    return (

        < div className="form_container" >
            <h1 className='form_title'>Become a Member</h1>
            <form action="http://localhost:5000/register" method='post'>

                <div className="row">

                    {/* First row */}
                    <div className="col-lg-6">
                        <label><FontAwesomeIcon icon={faUser} /> First Name</label>
                        <input type="text" name='first_name' placeholder="Enter your first name " required />
                    </div>
                    <div className="col-lg-6">
                        <label><FontAwesomeIcon icon={faUser} /> Last Name</label>
                        <input type="text" name='last_name' placeholder="Enter your last name " required />
                    </div>

                    {/* Second row */}
                    <div className="col-lg-6">
                        <label><FontAwesomeIcon icon={faPhone} /> Phone Number</label>
                        <input type="text" name='phone_number' placeholder="+251 911 111 222" required />
                    </div>

                    <div className="col-lg-6">
                        <label><FontAwesomeIcon icon={faCalendar} /> Age</label>
                        <input type="number" name='age' placeholder=" Age " required />
                    </div>

                    {/* Third row */}
                    <div className="col-lg-6">
                        <label><FontAwesomeIcon icon={faHouse} /> House Number</label><br />
                        <input type="text" name='house_number' placeholder="Enter your house number" required /><br />
                    </div>
                    <div className="col-lg-6">
                        <label><FontAwesomeIcon icon={faPeopleGroup} /> House Member</label><br />
                        <input type="text" name='house_member' placeholder="How many members are in your family" required /><br />
                    </div>
                </div>

                <label><FontAwesomeIcon icon={faPeopleGroup} /> Medication</label><br />

                <MultipleInputs type="medication" />

                <label><FontAwesomeIcon icon={faPeopleGroup} /> Medical History</label><br />
                <MultipleInputs type="medicalHistory" />

                <Maps />

                <label><FontAwesomeIcon icon={faPeopleGroup} /> Attach Resume</label><br />
                <input type="file" name='house_member' placeholder="How many members are in your family" required /><br />
                <button className='form_submit_button'>Submit</button>
            </form>
        </div >

    )
}

export default Forms