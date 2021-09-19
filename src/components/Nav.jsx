import React from 'react'

function Nav(props) {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1">{props.navbar}</span>
                </div>
        </nav>
        </div>
    )
}

export default Nav
