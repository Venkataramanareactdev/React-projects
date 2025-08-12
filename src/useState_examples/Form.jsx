    import React, { useState } from 'react';

    function Form() {
        const [name, setName] = useState('');
        const [age, setAge] = useState('');
        const [submitted, setSubmitted] = useState(false);
        const [submittedName, setSubmittedName] = useState('');
    const [submittedAge, setSubmittedAge] = useState('');
        const handleSubmit = () => {
         setSubmittedName(name);
        setSubmittedAge(age);
            setSubmitted(true);
        };
    

        return (
            <div>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                />
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Enter your age"
                />
                <button onClick={handleSubmit}>Submit</button>
                {submitted && <p>name: {submittedName} age: {submittedAge} </p>
     
                
                }

                <div>Hello</div>
            </div>
        );
    }

    export default Form;