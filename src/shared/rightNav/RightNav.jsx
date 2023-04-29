import React from 'react';
import { Button } from 'react-bootstrap';
import { BsGoogle, BsGithub, BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import bg from '../../assets/img/bg.png'
import Qzone from '../Qzone/Qzone';
const RightNav = () => {
    return (
        <div className='d-flex flex-column gap-4'>
            <div className='d-flex flex-column gap-2'>
                <h4>Sign in with</h4>
                <Button variant="outline-primary"><BsGithub /> sign in with github</Button>
                <Button variant="outline-danger"><BsGoogle /> sign in with google</Button>
            </div>
            <div className='d-flex flex-column gap-2'>
                <h4>Find us on </h4>
                <Button variant="light" className='text-start' ><BsFacebook /> facebook</Button>
                <Button variant="light" className='text-start'><BsTwitter /> twitter</Button>
                <Button variant="light" className='text-start'><BsInstagram /> instaagram</Button>
            </div>
            <Qzone></Qzone>
            <div className="position-relative">
                <div className='position-absolute z-3 text-light  text-center mt-5 py-5 px-2'>
                    <h4>Create an Amazing Newspaper</h4>
                    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant="danger">learn more</Button>
                </div>
                <img src={bg} style={{ width: '100%' }} className='img-fluid' alt="" />
            </div>

        </div>
    );
};

export default RightNav;