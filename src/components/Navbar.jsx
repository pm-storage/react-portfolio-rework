import React, {Component} from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top" id="navbarID">
        <div className="container-fluid">
          <a className="navbar-brand" href="#slides"><img src={process.env.PUBLIC_URL + '/logo.png'} /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResposive">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResposive">
            <ul className="nav nav-pills  ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#slides">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skillsID" data-nav-section="#skillsID">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#aboutMeID">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projectsID">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contactID">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    )
  }
}

