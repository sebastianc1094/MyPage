import React, { Component } from 'react';
import logo from '../logo.svg';
import img from '../img/img.jpg';

export default class Photo extends Component {
    render() {
        return (
            <section className="card animated bounce">
                <figure className="card-body">
                    <img src={img} className="rounded-circle animated bounceInDown" alt="" width="40%" height="30%" />
                </figure>
                <figcaption>
                    <h1 className="animated lightSpeedIn">Hola, soy Sebastián <img src={logo} className="App-logo" alt="logo" /></h1>
                </figcaption>
            </section>
        )
    }
}