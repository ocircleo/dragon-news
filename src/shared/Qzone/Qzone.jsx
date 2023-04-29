import React from 'react';
import qzone1 from '../../assets/img/qZone1.png'
import qzone2 from '../../assets/img/qZone2.png'
import qzone3 from '../../assets/img/qZone3.png'

const Qzone = () => {
    return (
        <div className='bg-light'>
            <h4>Qzone</h4>
            <div className='d-flex flex-column  align-items-center'>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default Qzone;