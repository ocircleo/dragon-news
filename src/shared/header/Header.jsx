import React from 'react';
import logo from '../../assets/img/logo.png'
import moment from 'moment/moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import Navigation from '../Navigation/Navigation';
const Header = () => {
    return (
        <Container>
            <div className="text-center">
                <img src={logo} alt="" />
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex gap-2 bg-light p-2'>
                <Button variant="danger">Latest</Button>
                <Marquee>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, ipsum. Ea omnis amet exercitationem sit rerum dolorum obcaecati. Velit, iure, labore repudiandae consectetur natus distinctio eveniet commodi quae placeat ut pariatur laborum, facere exercitationem dicta nemo qui ratione corrupti voluptate laudantium tempora. Sint iusto neque consectetur temporibus officiis dolorum saepe iste incidunt! Itaque suscipit natus iusto saepe tempora. Facere aut vitae similique recusandae est alias repellendus, atque explicabo vero voluptates quibusdam laborum fugit, magnam ullam voluptatibus repudiandae repellat debitis illo officia porro adipisci dignissimos molestias. Ex, sapiente harum facilis soluta voluptas repudiandae! Ab eligendi repudiandae tempora totam incidunt autem ut!</Marquee>
            </div>
            <Navigation></Navigation>
        </Container>
    );
};

export default Header;