import React, { Component } from 'react'

export default class See extends Component {
    render() {
        return (
            <div className="card mt-3 animated slideInDown">
                <span class="badge badge-pill badge-success m-2">Deberías ver</span>

                <div className="m-3">
                    <h4>Mis redes sociales</h4>
                    <a href="https://www.facebook.com/sebastian.castanomonsalve" target="blank"><i class="fab fa-facebook fa-4x"></i></a>
                    <a href="https://www.linkedin.com/in/sebastian-casta%C3%B1o-monsalve-9653b4178/" target="blank"><i class="fab fa-linkedin fa-4x ml-2"></i></a>
                    <a href="https://bitbucket.org/sebastianc1094/" target="blank"><i class="fab fa-bitbucket fa-4x ml-2"></i></a>
                </div>
            </div>
        )
    }
}
