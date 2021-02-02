import React, { useState } from 'react';

const Hook = () => {
    const [user, setUser] = useState(
        {
            name: 'AShot',
            age: 22,
            language: 'en'
        }
    );
    const [counter, setCounter] = useState(0);

    const handleToggleChangeLanguage = (event) => {
        let info = {}
        if (user.language === 'am') {
            info = {
                name: 'AShot',
                age: 22,
                language: 'en'
            }
        } else {
            info = {
                name: 'Աշոտ',
                age: 22,
                language: 'am'
            }
        }
        setUser(info);
    }
    const handlePlusCount = () => {
        setCounter(counter + 1);
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <h1>Hook Test Component</h1>
            <div>
                <button onClick={handleToggleChangeLanguage}>Toggle to Armenian</button>
                <p>{user.name}</p>
                <p>{user.age}</p>
            </div>
            <div>
                <button onClick={handlePlusCount}>Toggle to Armenian</button>
                <p>{counter}</p>

            </div>
        </div>
    )
}

export default Hook;