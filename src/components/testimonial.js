import React, { Component } from 'react';

class Testimonial extends Component {
    render() {
        return(
            <section className="section section-sm">
                <div className="container">
                    <div className="row row-grid justify-content-center">
                        <div className="text-center">
                        <h2 className="heading-title text-palette-3 text-center">Testimoni</h2>
                        <p className="lead">Sebanyak 10 instansi pemerintah dan lebih dari 100 usaha puas bekerja sama dengan Pakarian. </p>
                        <p>Target kami dalam 2 tahun ke depan adalah membantu 50 instansi pemerintah dan 750 usaha mencapai potensi maksimumnya. Kepercayaan Anda sebagai klien sangat berarti, dan Pakarian senantiasa berkomitmen memberikan layanan SLA 99,9% bergaransi.</p>
                        </div>
                    </div>
                    <div className="row">
                    <div class="carousel slide" id="carouselExampleIndicators" data-ride="carousel">
                        <ol class="carousel-indicators mb-0">
                            <li class="active" data-target="#carouselExampleIndicators" data-slide-to="0"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>


                        <div class="carousel-inner px-8 py-4">
                            <div class="carousel-item active">
                                <div class="media"><img class="rounded-circle img-thumbnail" src="https://res.cloudinary.com/mhmd/image/upload/v1579676165/avatar-1_ffutqr.jpg" alt="" width="75"/>
                                    <div class="media-body ml-3">
                                        <blockquote class="blockquote border-0 p-0">
                                            <p class="font-italic mb-0"> <i class="fa fa-quote-left mr-3 text-success"></i>Berkat bantuan tim ahli Pakarian, saya bisa membuat perencanaan untuk ekspansi cabang usaha kebab gaul "Rantas" di Palangkaraya. Dari garapan ide, pemilihan lokasi, hingga strategi pembiayaan, semua tuntas dibahas.</p>
                                            <footer class="blockquote-footer">Raymond Sagalia--
                                                <cite title="Source Title">Pemilik usaha kebab "Rantas"</cite>
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-item">
                                <div class="media"><img class="rounded-circle img-thumbnail" src="https://res.cloudinary.com/mhmd/image/upload/v1579676165/avatar-3_hdxocq.jpg" alt="" width="75"/>
                                    <div class="media-body ml-3">
                                        <blockquote class="blockquote border-0 p-0">
                                            <p class="font-italic mb-0"> <i class="fa fa-quote-left mr-3 text-success"></i>Mengurus perizinan usaha untuk WNA seperti saya cukup memakan waktu dan biaya. Pakarian membantu dengan menyediakan ahli di bidang hukum dagang. Saya memperoleh tips bernegosiasi yang bermanfaat.</p>
                                            <footer class="blockquote-footer">Kurt Vanzovic--
                                                <cite title="Source Title">Pengusaha asal Rusia</cite>
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-item">
                                <div class="media"><img class="rounded-circle img-thumbnail" src="https://res.cloudinary.com/mhmd/image/upload/v1579676165/avatar-2_gibm2s.jpg" alt="" width="75"/>
                                    <div class="media-body ml-3">
                                        <blockquote class="blockquote border-0 p-0">
                                            <p class="font-italic mb-0"> <i class="fa fa-quote-left mr-3 text-success"></i>Sebagai pembuat perangkat spare part mobil, saya dituntut untuk cepat melakukan reverse engineering pada mobil keluaran terbaru. Saya bekerja sama secara rutin dengan Pakarian setiap kali mobil terbaru dirilis. Hasilnya, produktivitas saya meningkat 25%.</p>
                                            <footer class="blockquote-footer">Syamsul Iman--
                                                <cite title="Source Title">Kepala Pengembangan Produk PT. Radia Teknik Performa</cite>
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a class="carousel-control-prev width-auto bottom-arrow" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <i class="fa fa-angle-left fa-2x text-light text-lg"></i>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next width-auto bottom-arrow" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <i class="fa fa-angle-right fa-2x text-light text-lg"></i>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Testimonial