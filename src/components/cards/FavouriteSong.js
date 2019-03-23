import React, { Component } from 'react';

//Módulo Youtube
import YouTube from 'react-youtube';

export default class FavouriteSong extends Component {
    render() {
        const opts = {
            height: '290',
            width: '540',
        };

        return (
            <div className="card mt-3 animated slideInDown">
                <span className="badge badge-pill badge-success m-2">Canción favorita</span>
                <h3>Artista: Boris Brejcha</h3>
                <p>Set: Tomorrowland 2018 Bélgica</p>
                <YouTube
                    videoId="rCyjguVDWKE"
                    opts={opts}
                    onReady={this._onReady}
                />
                <div className="m-4">
                    <h5>Escuchar más</h5>

                    <a href="https://open.spotify.com/artist/6caPJFLv1wesmM7gwK1ACy" target="blank"><i class="fab fa-spotify fa-4x"></i></a>
                    <a href="https://www.youtube.com/channel/UCukezONa4veoJBeK9UuVZew" target="blank"><i class="fab fa-youtube fa-4x ml-4"></i></a>
                </div>
            </div>
        )
    }
}

