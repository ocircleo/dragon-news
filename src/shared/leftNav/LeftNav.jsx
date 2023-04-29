import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [catagories, setCaragories] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/').then(res => res.json()).then(data => setCaragories(data)).catch(errr => console.log(errr.code))
    }, [])
    return (
        <div className='d-flex flex-column gap-2'>
            {
                catagories.map(element => <Link key={element.id}> <Button variant="light" className='text-center w-100' >{element.name}</Button></Link>)
            }
        </div>
    );
};

export default LeftNav;