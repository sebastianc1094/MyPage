import React, { Component } from 'react'

export default class MoreAboutMe extends Component {
    render() {
        return (
            <div className="card mt-3 animated slideInDown">
                <span class="badge badge-pill badge-success m-2">Más acerca de mi</span>
                <h4>Más de Sebastián</h4>
                <p className="m-3">Me considero una persona tranquila. Me gusta bastante el techno, el reggaetón y la salsa vieja.
                Hincha a morir del Deportivo Independiente Medellín, acostumbro a seguirlo en todos los partidos
                en el estadio. Por el momento estoy dedicado a aprender más a fondo el lenguaje JavaScript, y sus librerías
                como son React.js y Angular.js.
                </p>
            </div>
        )
    }
}
