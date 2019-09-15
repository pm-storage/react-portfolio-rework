import React, {Component} from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div className="container-fluid padding">
      <div className="row padding">
        <div className="col-md-4">
          <div className="card">
            <img className="card-img-top" src={process.env.PUBLIC_URL + '/team1.png'} />
            <div className="card-body">
              <h4 className="card-title">Books-Berlin</h4>
              <p>
                Books-berlin is a project guided by the online Course of Careerfoudry.
                The purpose of building this web app was for the sake of gaining skills,
                and developing a solid understanding of the process of building a "Production-Ready Web App".
                For building Books-Berlin I used the framework Ruby on Rails, HTML, CSS, and JavaScript. 
              </p>
              <a href="https://books-berlin.herokuapp.com/" className="btn btn-outline-secondary" target="_blank">View Project</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img className="card-img-top" src={process.env.PUBLIC_URL + '/team6.png'} />
            <div className="card-body">
              <h4 className="card-title">Random Hero Generator</h4>
              <p>
                Fun little app build in Ruby on Rails, which generates random images and texts. 
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </p>
              <a href="https://pmrandomegenerator.herokuapp.com/" className="btn btn-outline-secondary" target="_blank">View
                Project</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img className="card-img-top" src={process.env.PUBLIC_URL + '/team5.png'} />
            <div className="card-body">
              <h4 className="card-title">Rails Blog app</h4>
              <p>
                Blog-page built with Ruby on Rails.<br />
                Under construction. 
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />	
              </p>
              <a href="https://pm-blog-rails-app.herokuapp.com/" className="btn btn-outline-secondary" target="_blank">View
                Project</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img className="card-img-top"  src={process.env.PUBLIC_URL + '/team2.png'} />
            <div className="card-body">
              <h4 className="card-title">Portfolio_site_v1</h4>
              <p>
                Personal portfolio Web Page built with HTML, CSS, JS, and BOOTSTRAP.
              </p>
              <a href="https://determined-goldwasser-32861b.netlify.com/" className="btn btn-outline-secondary" target="_blank">View
                Project</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img className="card-img-top"  src={process.env.PUBLIC_URL + '/team4.png'} />
            <div className="card-body">
              <h4 className="card-title">Checklist</h4>
              <p>
                Checklist app built with Ruby on Rails.<br />
                Under construction.
              </p>
              <a href="https://ancient-hollows-60281.herokuapp.com/" className="btn btn-outline-secondary" target="_blank">View Project</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img className="card-img-top"  src={process.env.PUBLIC_URL + '/team3.png'} />
            <div className="card-body">
              <h4 className="card-title">GitHub</h4>
              <p>
                All my projects in one place.<br /><br />
              </p>
              <a href="https://github.com/o0pmitev" className="btn btn-outline-secondary" target="_blank" id="contactID">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    )
  }
}