import React, { Component } from 'react';
import '../App.css';

//Componentes
import FavouriteSong from './cards/FavouriteSong';
import AboutMe from './cards/AboutMe';
import MoreAboutMe from './cards/MoreAboutMe';
import TopSongs from './cards/TopSongs';
import TopFood from './cards/TopFood';
import See from './cards/See';

export default class Menu extends Component {
    constructor() {
        super();
        this.state = {
            componentId: 0,
        }
    }

    getBtnId = (e) => {
        if (e.target && e.target.nodeName === "BUTTON") {
            this.setState({
                componentId: Number(e.target.id)
            })
        }
    }

    render() {
        const components = [
            <FavouriteSong />,
            <AboutMe />,
            <MoreAboutMe />,
            <TopSongs />,
            <TopFood />,
            <See />
        ];
        const actualComponent = components[this.state.componentId];
        return (
            <div>
                <section className="card animated fadeInUp">
                    <div onClick={this.getBtnId} className="card-body">
                        <button id="0" className="btn btn-primary" href="/"><ion-icon name="musical-note" size="medium"></ion-icon> Canción favorita</button>
                        <button id="1" className="btn btn-primary ml-2" href="/"><ion-icon name="man" size="medium"></ion-icon> Acerca de mi</button>
                        <button id="2" className="btn btn-primary ml-2" href="/"><ion-icon name="happy" size="medium"></ion-icon> Más acerca de mi</button>
                        <button id="3" className="btn btn-primary ml-2" href="/"><ion-icon name="musical-notes" size="medium"></ion-icon> Top 5 canciones favoritas</button>
                        <button id="4" className="btn btn-primary ml-2 mt-2" href="/"><ion-icon name="pizza" size="medium"></ion-icon> Top 5 comidas favoritas</button>
                        <button id="5" className="btn btn-primary ml-2 mt-2" href="/"><ion-icon name="eye" size="medium"></ion-icon> Deberías ver</button>
                    </div>
                </section>
                <section>
                    {actualComponent}
                </section>
            </div>
        )
    }
}
