import React, {Component} from 'react'

export default class Skills extends Component {
  render() {
    return(
      <div className="container-fluid padding">
        <div className="row text-center padding">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <i className="fab fa-html5" id="iconsID" />
            <h3>HTML5</h3>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <i className="fas fa-bold" id="iconsID" />
            <h3>BOOTSTRAP</h3>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <i className="fab fa-css3" id="iconsID" />
            <h3>CSS3</h3>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <i className="far fa-gem" id="iconsID" />
            <h3>Ruby</h3>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <i className="fas fa-gem" id="iconsID" />
            <h3>Ruby on Rails</h3>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <i className="fab fa-js" id="iconsID" />
            <h3>JavaScript</h3>
          </div>
        </div>
        <hr className="my-4" />
      </div>
    )
  }
}