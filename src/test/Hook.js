import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet'

const Hook = () => {
    //state
    const [counter, setCounter] = useState(0);
    const [country, setCountry] = useState('Armenia');
    const [users, setUsers] = useState([]);
    const [isSetUsers, setIsSetUsers] = useState(false);
    //Effects
    useEffect(function () {
        //componentDidMOunt  []
        //componentDidUpdate [deps]
        if (isSetUsers) {
            (async function () {
                const request = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await request.json();
                setUsers(data);

            })()
        }


        return function () {
            //ComponentWillUnMOunt
        }
    }, [isSetUsers])

    // useEffect(()=>{
    //     document.title="Hook.js"
    //     return function(){
    //         document.title = 'React App'
    //     }
    // },[])

    //functions
    const plusCounter = () => {
        setCounter(counter + 1);
    }
    const changeCountry = () => {
        let c = 'USA';
        if (country !== 'Armenia')
            c = 'Armenia';
        setCountry(c);
    }
    const handleGetUsers = () => {
        setIsSetUsers(true);
    }
    

    //JSX MAP
    const usersJSX = users.map(user => {
        return <p key={user.id}>Name : {user.name}</p>
    })

    return (
        <div>
            <Helmet>
                <title>Hook.js</title>
            </Helmet>
            <h1>Hook Test Component</h1>
            <div>
                <p>{counter}</p>
                <button onClick={plusCounter}>+</button>
            </div>
            <div>
                <p>{country}</p>
                <button onClick={changeCountry}>Change to {country === 'Armenia' ? 'USA' : 'Armenia'}</button>
            </div>

            <div>
                <button onClick={handleGetUsers}>Get Users</button>
            </div>
            <div className="Users_wrapper">
                {usersJSX}
            </div>
        </div>
    )
}

export default Hook;