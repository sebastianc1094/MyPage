import React, { Component } from 'react'

export default class AboutMe extends Component {
    render() {
        return (
            <div className="card mt-3 animated slideInDown">
                <span class="badge badge-pill badge-success m-2">Acerca de mi</span>
                <h4>Nombre:</h4>
                <p>Sebastián Castaño Monsalve</p>
                <h4>Lugar y fecha de nacimiento:</h4>
                <p>Medellín, 28 de octubre de 1994</p>
                <h4>Edad:</h4>
                <p>24 años</p>
                <h4>Estado civil:</h4>
                <p>Soltero</p>
                <h4>Barrio:</h4>
                <p>San Joaquín</p>
            </div>
        )
    }
}
