import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return(
            <section className="section section-lg">
            <div className="container-fluid bg-palette-6 py-4">
                <h2 id="contact" className="heading-title text-palette-3 text-center">Kontak Kami</h2>
                <div className="container justify-content-center">
                    <p>Jangan menunggu lebih lama lagi! Buat keunggulan Anda sekarang.</p>
                    <p>Pakarian siap menyediakan para ahli di bidang yang Anda butuhkan. Silakan mengisi form di bawah, kemudian klik "Kirim Pesan Lewat WhatsApp". Customer Service Pakarian siap membantu Anda.</p>
                    <p> (Jam kerja: Senin-Sabtu pukul 09:00 - 18:00) </p>
                </div>
                <form>
                    <div className="form-group row justify-content-center">
                        <label for="inputName" className="col-sm-2 col-form-label text-left"> <h6>Nama</h6> </label>
                        <div className="col-md-6 col-sm-8">
                        <input type="text" className="form-control form-palette" id="inputName" placeholder="masukkan nama Anda di sini"/>
                        </div>
                    </div>
                    <div className="form-group row justify-content-center">
                        <label for="inputEmail" className="col-sm-2 col-form-label text-left"> <h6>Email</h6> </label>
                        <div className="col-md-6 col-sm-8">
                        <input type="text" className="form-control form-palette" id="inputEmail" placeholder="masukkan email Anda di sini"/>
                        </div>
                    </div>
                    <div className="form-group row justify-content-center">
                        <label for="inputCompany" className="col-sm-2 col-form-label text-left"> <h6>Instansi</h6> </label>
                        <div className="col-md-6 col-sm-8">
                        <input type="password" className="form-control form-palette" id="inputCompany" placeholder="masukkan nama instansi Anda di sini"/>
                        </div>
                    </div>
                    <div className="form-group row justify-content-center">
                        <label for="inputNeeds" className="col-sm-2 col-form-label text-left"> <h6>Kebutuhan</h6> </label>
                        <div className="col-md-6 col-sm-8">
                        <input type="password" className="form-control form-palette" id="inputNeeds" placeholder="contoh: pengembangan inovasi bidang keuangan syariah"/>
                        </div>
                    </div>
                    <div className="form-group row justify-content-center">
                        <div className="col-sm-2 text-left"></div>
                        <div className="col-md-6 col-sm-8">
                        <div class="custom-control custom-checkbox mb-3 text-left">
                            <input class="custom-control-input" id="consult" type="checkbox"/>
                            <label class="custom-control-label" for="consult">
                                <span>Saya memerlukan jasa konsultasi</span>
                            </label>
                        </div>
                        <div class="custom-control custom-checkbox mb-3 text-left">
                            <input class="custom-control-input" id="implement" type="checkbox"/>
                            <label class="custom-control-label" for="implement">
                                <span>Saya memerlukan solusi implementasi</span>
                            </label>
                        </div>
                        </div>
                    </div>
                    <div className="form-group row justify-content-center">
                        <div className="col-sm-10">
                        <div className="btn-wrapper">
                            <a href="https://www.creative-tim.com/product/argon-design-system" className="btn btn-palette-5 mb-3 mb-sm-0"><i className="fa fa-whatsapp"></i>   Kirim Pesan Lewat WhatsApp</a>
                        </div>
                        </div>
                    </div>
                </form>
            </div>
            </section>
        )
    }
}

export default Contact