import React, {useState} from 'react'; 
import { v4 as uuid } from 'uuid'; 



const theHomies = [
    { id: uuid(), fname: 'Johanesburg', lname: 'Rickley', role:'data scientist',},
    { id: uuid(), fname: 'Carlos', lname: 'Alvarado', role:'front-end engineer',},
]




function TeamMembers() {
    const [homies, setHomies] = useState(theHomies); 
    const [formValues, setFormValues] = useState({
        fname: '', 
        lname: '', 
        role: '', 
    })

    // nameofObj.nameofProperty = 'whateever we want'

    // {fname: carlos, }

    // {chicken: carlos}

    const inputChange = event => {

        const changedName = event.target.name; 
        const changedValue = event.target.value; 
        setFormValues({
            ...formValues, 
            [changedName]: changedValue,
        })
    }

    const formSubmit = event => {
        event.preventDefault(); 

        const newHomie = {
            id: uuid(), 
            fname:formValues.fname, 
            lname:formValues.lname,
            role:formValues.role,
        }
        
        setHomies([ ...homies, newHomie])
    }

    return (
        <div>
            <form onSubmit={formSubmit}>
                <label>
                    First Name: 
                    <input
                    onChange={inputChange}
                    value={formValues.fname}
                    name='fname'
                    type='text'/>
                </label><br/>

                <label>
                    Last Name:
                    <input
                    onChange={inputChange}
                    value={formValues.lname}
                    name='lname'
                    type='text'/>
                </label><br/>

                <label>
                    Your Role(s):
                    <input
                    onChange={inputChange}
                    value={formValues.role}
                    name='role'
                    type='text'/>
                </label><br/>
                <input 
                type='submit'
                /> 
            </form>

            <h2>List of Homies</h2>
            {
                homies.map(homie => <div key={homie.id}>{homie.lname}, {homie.fname}<br/> {homie.role} <br/><br/></div>)
            }


        </div>
    )


}

export default TeamMembers; 