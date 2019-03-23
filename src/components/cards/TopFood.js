import React, { Component } from 'react'

export default class TopFood extends Component {
    render() {
        return (
            <div className="card mt-3 animated slideInDown">
                <span class="badge badge-pill badge-success m-2">Top 5 comidas favoritas</span>
                <h2>1. Pollo apanado</h2>
                <h2>2. Pizza</h2>
                <h2>3. Empanadas</h2>
                <h2>4. Fríjoles</h2>
                <h2>5. Lentejas</h2>
            </div>
        )
    }
}
