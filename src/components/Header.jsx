import React from 'react'

function Header() {
    return (
        <>
            <nav class="navbar navbar-expand navbar-dark bg-dark p-0">
                <div class="container d-flex justify-content-center justify-content-md-start">
                    <a class=" navbar-brand text-uppercase text-center fs-3" href="/" style={{ color: 'lightgrey' }}>
                        <img src="edition.png" className="m-2" style={{ width: "40px" }} alt="" />
                        Keep</a>
                </div>
            </nav>
        </>
    )
}

export default Header
