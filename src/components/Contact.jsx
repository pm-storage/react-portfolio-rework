import React, {Component} from 'react'

export default class Contact extends Component {
  render() {
    return (

      <div className="contact" id="minusMarginId">
        <button className="fun" data-toggle="collapse" data-target="#emoji"><i className="fas fa-hand-point-right" /> Contact me
          <i className="fas fa-hand-point-left" /></button>
        <div id="emoji" className="collapse">
          <div className="container-fluid padding">
            <div className="row text-center">
              <div className="col-sm-12 col-md-12">
                <img className="gif" src={process.env.PUBLIC_URL + '/gif/panda.gif'}  />
                <p className="contactInfo">pmitev89@gmail.com</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12">
              <center>
              <form name="contact" method="POST" data-netlify="true">
                <p>
                  <label>Your Name: <input className="form-control" type="text" name="name" placeholder="Enter your name" required /></label>
                </p>
                <p>
                  <label>Your Email: <input className="form-control" type="email" name="email" placeholder="Enter email" required /></label>
                </p>
                <p>
                  <label>Message: <textarea className="form-control" name="message" required defaultValue={""} /></label>
                </p>
                <p>
                  <button type="submit" className="btn btn-primary">Send</button>
                </p>
              </form>
              </center>
            </div>
          </div>
        </div>
      </div>

    )
  }
}