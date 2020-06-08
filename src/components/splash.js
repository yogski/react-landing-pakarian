import React, { Component } from 'react';

class Splash extends Component {
    render() {
        return(
            <div className="section section-hero section-shaped">
                <div className="shape shape-style-1 shape-palette">
                    <span className="span-150"></span>
                    <span className="span-50"></span>
                    <span className="span-50"></span>
                    <span className="span-200"></span>
                    <span className="span-100"></span>
                    <span className="span-75"></span>
                    <span className="span-50"></span>
                    <span className="span-100"></span>
                </div>
                <div className="page-header">
                    <div className="container shape-container d-flex align-items-center py-lg">
                        <div className="col px-0">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-6 text-center">
                                    <img src="./assets/img/brand/pakarian-white.png" style={{width: '200px'}} className="img-fluid"/>
                                    <p className="lead text-white">Mendatangkan jejaring ahli untuk kebutuhan riset profesional anda</p>
                                    <div className="btn-wrapper mt-5">
                                    <a href="#" className="btn btn-lg btn-white btn-icon mb-3 mb-sm-0">
                                        <span className="btn-inner--icon"><i className="fa fa-lightbulb"></i></span>
                                        <span className="btn-inner--text">Jaringan Ahli Kami</span>
                                    </a>
                                    <a href="#" className="btn btn-lg btn-palette-3 btn-icon mb-3 mb-sm-0">
                                        <span className="btn-inner--icon"><i className="fa fa-briefcase"></i></span>
                                        <span className="btn-inner--text">Kisah Sukses Kami</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
        )
    }
}

export default Splash