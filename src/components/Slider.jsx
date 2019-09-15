import React, {Component} from 'react'

export default class Slider extends Component {
  render() {
    return(
      <div id="slides" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#slides" data-slide-to={0} className="active" />
          <li data-target="#slides" data-slide-to={1} />
          <li data-target="#slides" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
          <img src={process.env.PUBLIC_URL + '/background.jpg'} />
            <div className="carousel-caption d-md-block">
              <h1>Plamen Mitev</h1>
              <p>Web Developer</p>
            </div>
          </div>
          <div className="carousel-item">
          <img src={process.env.PUBLIC_URL + '/background2.jpg'} />
            <div className="carousel-caption d-md-block slide2">
              <h1>TAKING IDEAS TO REALITY</h1>
            </div>
          </div>
          <div className="carousel-item">
          <img src={process.env.PUBLIC_URL + '/background3.jpg'} />
            <div className="carousel-caption d-md-block slide3">
              <h1>Art is the life of the soul</h1>
              <p>"Emilian Stanev"</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#slides" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#slides" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
  }
}