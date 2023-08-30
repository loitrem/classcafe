import React, {useState} from 'react'
import {signUp} from '../../utilities/users-service'

function Update({ user }) {
    const [state, setState]=useState('')

    // The object passed to setState is merged with the current state object
    const handleChange = (evt) => {

        setState({
            ...state,
            [evt.target.name]: evt.target.value,
        });
    };

    // on submit alert current state
    const handleSubmit = async(e) => {
        e.preventDefault(); //prevents the default page refresh upon submit of data
        try{
            const formData = {...state};
            delete formData.error;
            delete formData.confirm;
            // const {name, email, password} = state
            console.log('Handle Submit = ', formData);
            const user = await signUp(formData)
            // setUser(user);
        } catch (err){
            setState({...state, error: 'Sign Up Failed - Try Again'})
        }
    };

    const disable = state?state.password !== state.confirm:false;

    return (
        <div>
            {console.log('state',state)}
            <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={user.name || ''} onChange={handleChange} required />
                    <label>Email</label>
                    <input type="email" name="email" value={user.email || ''} onChange={handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={user.password || ''} onChange={handleChange} required />
                    <label>Confirm</label>
                    <input type="password" name="confirm" value={user.confirm || ''} onChange={handleChange} required />
                    <button type="submit" disabled={disable}>SIGN UP</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{state?state.error:''}</p>
        </div>
    );
}


export default Update