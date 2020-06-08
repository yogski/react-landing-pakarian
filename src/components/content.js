import React, { Component } from 'react';

class Content extends Component {
    render() {
        return(
        <section className="section section-lg">
        <div className="container-fluid">
            <div className="content-bg">
                <span className="span-150"></span>
                <span className="span-50"></span>
                <span className="span-50"></span>
                <span className="span-200"></span>
                <span className="span-100"></span>
            </div>
            <div className="row row-grid justify-content-center">
                <div className="col-lg-1 col-md-12 text-left"></div>
                <div className="col-lg-5 col-md-12 text-left">
                    <h2 className="text-palette-3">Panduan langsung dari pakar di bidangnya</h2>
                    <p className="lead">Pakarian membantu anda sukses dengan bantuan para pakar di bidangnya. Rekanan pakar dari berbagai bidang siap memandu untuk urusan riset, pemasaran, strategi, pengembangan produk, serta proses inovasi.</p>
                    <div className="btn-wrapper  ">
                    <a href="#" className="btn btn-palette-5 mb-3 mb-sm-0">Lihat Tim Kami</a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-0">
                <div className="rounded overflow-hidden transform-perspective-left">
                        <div id="story-1" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#story-1" data-slide-to="0" className="active"></li>
                                <li data-target="#story-1" data-slide-to="1"></li>
                                <li data-target="#story-1" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img className="img-fluid" style={{'max-height': '300px'}} src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="First slide"/>
                                </div>
                                <div className="carousel-item">
                                <img className="img-fluid" style={{'max-height': '300px'}} src="https://images.unsplash.com/photo-1549923746-b7f3a7e3c35d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="Second slide"/>
                                </div>
                                <div className="carousel-item">
                                <img className="img-fluid" style={{'max-height': '300px'}} src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80" alt="Third slide"/>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#story-1" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#story-1" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row justify-content-center py-4">
                <h2 className="heading-title text-palette-3 text-center">Studi Kasus</h2>
            </div>
            <div className="row justify-content-center">
            <div className="col-md-1">
                <ul className="nav nav-pills-palette" id="tabs_2" role="tablist">
                <li className="nav-item">
                    <a className="nav-link rounded-circle active" id="home-tab" data-toggle="tab" href="#case-1" role="tab" aria-controls="home" aria-selected="true">
                    <span className="nav-link-icon d-block"><i className="ni ni-air-baloon ni-2x"></i></span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link rounded-circle" id="profile-tab" data-toggle="tab" href="#case-2" role="tab" aria-controls="profile" aria-selected="false">
                    <span className="nav-link-icon d-block"><i className="ni ni-delivery-fast ni-2x"></i></span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link rounded-circle" id="profile-tab" data-toggle="tab" href="#case-3" role="tab" aria-controls="profile" aria-selected="false">
                    <span className="nav-link-icon d-block"><i className="fa fa-music fa-2x"></i></span>
                    </a>
                </li>
                </ul>
            </div>
            <div className="col-md-10">
                <div className="tab-content">
                <div className="tab-pane fade active show" id="case-1">
                    <div className="row">
                    <div className="col-md-6 col-sm-12 usecase py-3">
                        <img className="img-fluid rounded shadow-lg" style={{'max-height': '500px'}} src="https://images.unsplash.com/photo-1534492472349-181b5922f240?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="Hot Air Baloon"/>
                    </div>
                    <div className="col-md-6 col-sm-12 usecase">
                        <h5 className="text-left">Kajian Wisata Balon Udara</h5>
                        <p className="description text-left">Pemerintah Daerah Provinsi Sumatra Utara sedang gencar mengembangkan sektor pariwisata. Danau Toba sebagai satu wisata alam unggulan menjadi fokus utama. Pakarian berkesempatan berkolaborasi dengan Pemda untuk menilai kelayakan serta biaya pengembangan wisata berbasis balon udara. Lewat proses konsultasi, survei, dan bantuan perencanaan, Pemda Sumatra Utara dapat memperoleh cetak biru roadmap wisata balon udara. Diperkirakan wahana tersebut dapat dinikmati tahun 2022.</p>
                    </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="case-2">
                    <div className="row">
                    <div className="col-md-6 col-sm-12 usecase py-3">
                        <img className="img-fluid rounded shadow-lg" style={{'max-height': '500px'}} src="https://images.unsplash.com/photo-1536607278842-2e762f290252?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="Hot Air Baloon"/>
                    </div>
                    <div className="col-md-6 col-sm-12 usecase">
                        <h5 className="text-left">Perizinan Usaha Palet Kayu</h5>
                        <p className="description text-left">CV. Sarana Buana Grandia melihat peluang usaha produksi palet kayu memiliki prospek baik. Meskipun demikian, perusahaan perlu izin sebagai pengolah bahan kayu. Apabila perusahaan memperoleh izin sekaligus serifikasi pemakaian bahan baku legal, nilainya akan positif di mata klien besar. Pakarian membantu dengan menghubungkan pihak perusahaan dan regulator serta penguji kualitas independen. Dengan koordinasi yang baik, CV. Sarana Buana Grandia memperoleh izin usaha palet kayu.</p>
                    </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="case-3">
                    <div className="row">
                    <div className="col-md-6 col-sm-12 usecase py-3">
                        <img className="img-fluid rounded shadow-lg" style={{'max-height': '500px'}} src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Concert"/>
                    </div>
                    <div className="col-md-6 col-sm-12 usecase">
                        <h5 className="text-left">Kajian Konser Musik Online untuk Event Organizer</h5>
                        <p className="description text-left">Dengan adanya pandemi Covid-19, bisnis perlu berinovasi untuk tetap menghasilkan keuntungan. Event Organizer terkena dampak signifikan akibat dilarangnya acara publik. Teknologi online event dapat menjadi solusi, namun perlu ada skema komersialisasi agar keuntungan terjaga sekaligus membuat fans tetap puas. Pakarian mengadakan FGD dengan Event Organizer dan merumuskan skema komersialisasi yang sesuai.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        )
    }
}

export default Content;