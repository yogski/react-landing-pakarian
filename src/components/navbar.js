import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return(
        <div className="container-fluid">
                <nav className="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom">
                <div className="container">
                <a className="navbar-brand" href="javascript:;">Menu Pakarian</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-primary" aria-controls="navbar-primary" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-primary">
                    <div className="navbar-collapse-header">
                    <div className="row">
                        <div className="col-6 collapse-brand">
                        <a href="./index.html">
                            <img src="./assets/img/brand/pakarian-blue.png"/>
                        </a>
                        </div>
                        <div className="col-6 collapse-close">
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-primary" aria-controls="navbar-primary" aria-expanded="false" aria-label="Toggle navigation">
                            <span></span>
                            <span></span>
                        </button>
                        </div>
                    </div>
                    </div>
                    <ul className="navbar-nav ml-lg-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="javascript:;">Tentang Kami
                        <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="javascript:;">Tim Ahli</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="javascript:;" id="navbar-primary_dropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Kisah Sukses</a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-primary_dropdown_1">
                        <a className="dropdown-item" href="javascript:;">Konsultasi Hukum & Regulasi</a>
                        <a className="dropdown-item" href="javascript:;">Riset Pasar</a>
                        <a className="dropdown-item" href="javascript:;">Riset Inovasi Produk</a>
                        </div>
                    </li>
                    <li className="nav-item d-none d-lg-block ml-lg-4">
                        <a href="https://wa.me/6285235640017?text=Halo%2C%20saya%20ingin%20tahu%20lebih%20banyak%20tentang%20Pakarian" target="_blank" rel="noopener noreferrer" className="btn btn-neutral btn-icon">
                        <span className="btn-inner--icon">
                            <i className="fa fa-whatsapp"></i>
                        </span>
                        <span className="nav-link-inner--text"> Hubungi Kami</span>
                        </a>
                    </li>

                    </ul>
                </div>
                </div>
            </nav>            
        </div>
        )
    }
}

export default Navbar;