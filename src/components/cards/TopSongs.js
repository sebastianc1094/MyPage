import React, { Component } from 'react';
import '../../App.css';

//Módulo Youtube
import YouTube from 'react-youtube';

export default class TopSongs extends Component {
    render() {
        const opts = {
            height: '290',
            width: '420',
        };
        return (
            <div className="card mt-3 animated slideInDown">
                <span className="badge badge-pill badge-success m-2">Top 5 canciones favoritas</span>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <h5>Willie Colón - Tiempo pa' matar</h5>
                            <YouTube
                                videoId="UNhi0qhy27s"
                                opts={opts}
                                onReady={this._onReady}
                            />
                        </div>
                        <div className="carousel-item">
                            <h5>Boris Brejcha - Night Owl</h5>
                            <YouTube
                                videoId="aj30bOn_kE4"
                                opts={opts}
                                onReady={this._onReady}
                            />
                        </div>
                        <div className="carousel-item">
                            <h5>Tego Calderón - Al Natural</h5>
                            <YouTube
                                videoId="0aoIjGkmMSk"
                                opts={opts}
                                onReady={this._onReady}
                            />
                        </div>
                        <div className="carousel-item">
                            <h5>Hector Lavoe - Escarcha</h5>
                            <YouTube
                                videoId="Zi0aQ4PVAdI"
                                opts={opts}
                                onReady={this._onReady}
                            />
                        </div>
                        <div className="carousel-item">
                            <h5>Richie Ray & Bobby Cruz - Sonido Bestial</h5>
                            <YouTube
                                videoId="eqwu2NpbQT8"
                                opts={opts}
                                onReady={this._onReady}
                            />
                        </div>
                    </div>
                    <a className="carousel-control-prev Arrow" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next Arrow" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}
