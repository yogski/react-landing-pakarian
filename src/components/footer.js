import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return(
        <footer>
        	<div className="footer-top">
		        <div className="container">
		        	<div className="row">
		        		<div className="col-md-3 footer-about wow fadeInUp">
		        			<h5>Tentang Kami</h5>
		        			<label>
		        				Pakarian adalah perusahaan rintisan teknologi yang menjembatani para pakar dengan perusahaan atau instansi yang memerlukan informasi atau eksekusi terkait keahlian khusus.
		        			</label>
		        			<label>© Pakarian 2020. Template by <a href="https://github.com/creativetimofficial/argon-design-system" target="_blank">Creative Tim</a> </label>
	                    </div>
		        		<div className="col-md-4 offset-md-1 footer-contact wow fadeInDown">
		        			<h5>Kontak Kami</h5>
		                	<label><i className="fas fa-map-marker-alt"></i> Kaliurang, Sleman</label>
		                	<label><i className="fas fa-phone"></i> WA: +62-852-356-400-17</label>
		                	<label><i className="fas fa-envelope"></i> Email: <a href="mailto:yogisaputro@outlook.com">yogisaputro@outlook.com</a></label>
	                    </div>
	                    <div className="col-md-4 footer-links wow fadeInUp">
	                    	<div className="row">
	                    		<div className="col">
	                    			<h5>Informasi</h5>
	                    		</div>
	                    	</div>
	                    	<div className="row">
	                    		<div className="col-md-6">
	                    			<label><a href="#team">Tim Pakarian</a></label>
	                    			<label><a href="#usecase">Studi Kasus</a></label>
	                    			<label><a href="#contact">Hubungi Kami</a></label>
	                    		</div>
	                    		<div className="col-md-6">
	                    			<label><a href="#">FAQ</a></label>
	                    			<label><a href="#">Syarat &amp; Ketentuan</a></label>
	                    			<label><a href="#">Karir</a></label>
	                    		</div>
	                    	</div>
	                    </div>
		            </div>
		        </div>
	        </div>
	        <div className="footer-bottom">
	        	<div className="container">
	        		<div className="row">
	           			<div className="col footer-social">
	                    	<a href="#"><i className="fa fa-facebook-f"></i></a> 
							<a href="#"><i className="fa fa-twitter"></i></a> 
							<a href="#"><i className="fa fa-google-plus-g"></i></a> 
							<a href="#"><i className="fa fa-instagram"></i></a> 
							<a href="#"><i className="fa fa-pinterest"></i></a>
	                    </div>
	           		</div>
	        	</div>
	        </div>
        </footer>        
        )
    }
}

export default Footer