import React, { useState, useRef, useCallback } from 'react';
import style from './index.module.css';
import Input from './Input';

export default function RegisterForm() {
    const [values, setValues] = useState({
        name: '',
        surname: '',
        email: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const getNameValue = (e) => {
        setValues({ ...values, name: e.target.value });
    }

    const getSurnameValue = (e) => {
        setValues({ ...values, surname: e.target.value });
    };

    const getEmailValue = (e) => {
        setValues({ ...values, email: e.target.value });
    };

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        if (values.name && values.surname && values.email) {
            setValid(true);
        }
        setSubmitted(true);

    }, [{ ...values }]);


    return (
        <div className='row justify-content-center'>
            <div className="col-9">
                <h1 className='text-center'>Validation App</h1>
                {submitted && valid ? <div className='bg-success text-white p-2 my-4'>Submitted is succesful!</div> : null}
                <form action="" onSubmit={handleSubmit}>
                    <Input
                        type='text'
                        id='name'
                        name='userName'
                        placeholder='Username'
                        value={values.name}
                        onChange={getNameValue}
                    >
                        {submitted && !values.name ? <span className='text-danger'>Please, enter your name.</span> : null}
                    </Input>
                    <Input
                        type='text'
                        id='email'
                        name='surname'
                        placeholder='User Surname'
                        value={values.surname}
                        onChange={getSurnameValue}
                    >
                        {submitted && !values.surname ? <span className='text-danger'>Please, enter your surname.</span> : null}
                    </Input>
                    <Input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='User Email'
                        value={values.email}
                        onChange={getEmailValue}
                    >
                        {submitted && !values.email ? <span className='text-danger'>Please, enter your email adress.</span> : null}
                    </Input>
                    <div className='text-center'>
                        <button type="submit" className="btn btn-primary d-inline-block my-4">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
