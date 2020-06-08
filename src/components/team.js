import React, {Component} from 'react'

class Team extends Component {
    render() {
        return(
            <section  id="team"  className="section section-lg section-shaped">
                <div class="shape shape-style-1 shape-palette shape-team">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className="container">
                    <div className="row justify-content-center">
                        <h2 className="heading-title text-palette-3 text-center">Tim Pakarian</h2>
                    </div>
                    <div className="row justify-content-center">
                    <div class="col-md-3 col-sm-6 col-xs-12">
                        <p class="d-block text-uppercase font-weight-bold lead">CEO</p>
                        <img src="./assets/img/faces/team-1.jpg" alt="team member 1" class="img-fluid rounded-circle shadow-lg" style={{'max-width': '200px'}}/>
                        <p class="h4 font-weight-bold ">Supriyanto</p>       
                    </div>
                    <div class="col-md-3 col-sm-6 col-xs-12">
                        <p class="d-block text-uppercase font-weight-bold lead">CTO</p>
                        <img src="https://yogski.github.io/assets/images/profile.png" alt="team member 2" class="img-fluid rounded-circle shadow-lg" style={{'max-width': '200px'}}/>
                        <p class="h4 font-weight-bold ">Yogi Saputro</p>       
                    </div>
                    <div class="col-md-3 col-sm-6 col-xs-12">
                        <p class="d-block text-uppercase font-weight-bold lead">CFO</p>
                        <img src="./assets/img/faces/team-3.jpg" alt="team member 2" class="img-fluid rounded-circle shadow-lg" style={{'max-width': '200px'}}/>
                        <p class="h4 font-weight-bold ">Fulanah Fulan</p>       
                    </div>
                    <div class="col-md-3 col-sm-6 col-xs-12">
                        <p class="d-block text-uppercase font-weight-bold lead">CMO</p>
                        <img src="./assets/img/faces/team-4.jpg" alt="team member 2" class="img-fluid rounded-circle shadow-lg" style={{'max-width': '200px'}}/>
                        <p class="h4 font-weight-bold ">Miss Universe</p>       
                    </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Team