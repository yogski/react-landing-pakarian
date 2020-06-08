import React, { Component } from 'react';

class Story extends Component {
    render() {
        return(
            <section className="section section-sm">
                <div className="container">
                    <div className="row row-grid justify-content-center">
                        <div className="py-6 text-center">
                        <h2 className="heading-title text-palette-3 text-center">Partner Kami</h2>
                        <p className="lead">Pakarian bekerja sama dengan pusat studi universitas, asosiasi profesional, institusi independen, dan komunitas ahli terkemuka.</p>
                        <p> Kami berkomitmen untuk memastikan klien kami memperoleh informasi dan solusi terbaik. Beberapa partner jangka panjang kami sebagai berikut. (Semua instansi di bawah hanyalah fiksi. Kemiripan yang ada dengan usaha/instansi tertentu adalah ketidaksengajaan).</p>
                            <div className="row justify-content-center">
                            <div className="col-lg-2 col-4">
                                <a href="#" target="_blank" data-toggle="tooltip" data-original-title="Pakarian Partner-1">
                                <img style={{opacity: '0.72'}} src="./assets/img/brand/partner-1.png" className="img-fluid"/>
                                </a>
                            </div>
                            <div className="col-lg-2 col-4">
                                <a href=" #" target="_blank" data-toggle="tooltip" data-original-title="Pakarian Partner-2">
                                <img style={{opacity: '0.72'}} src="./assets/img/brand/partner-2.png" className="img-fluid"/>
                                </a>
                            </div>
                            <div className="col-lg-2 col-4">
                                <a href=" #" target="_blank" data-toggle="tooltip" data-original-title="Pakarian Partner-3">
                                <img style={{opacity: '0.72'}} src="./assets/img/brand/partner-3.png" className="img-fluid"/>
                                </a>
                            </div>
                            <div className="col-lg-2 col-4">
                                <a href=" #" target="_blank" data-toggle="tooltip" data-original-title="Pakarian Partner-4">
                                <img style={{opacity: '0.72'}} src="./assets/img/brand/partner-4.png" className="img-fluid"/>
                                </a>
                            </div>
                            <div className="col-lg-2 col-4">
                                <a href=" #" target="_blank" data-toggle="tooltip" data-original-title="Pakarian Partner-5">
                                <img style={{opacity: '0.72'}} src="./assets/img/brand/partner-5.png" className="img-fluid"/>
                                </a>
                            </div>
                            <div className="col-lg-2 col-4">
                                <a href=" #" target="_blank" data-toggle="tooltip" data-original-title="Pakarian Partner-6">
                                <img style={{opacity: '0.72'}} src="./assets/img/brand/partner-6.png" className="img-fluid"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}

export default Story