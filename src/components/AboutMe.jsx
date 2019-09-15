import React, {Component} from 'react'

export default class AboutMe extends Component {
  render() {
    return(
      <div className="container-fluid padding" id="aboutMeID">
        <div className="row padding">
          <div className="col-md-12 col-lg-6" id="aboutMePosition">
            <br />
            <br />
            <br />
            <h2>About Me</h2>
            <p>My name is Plamen Mitev and I'm an aspiring web developer. Born in 1989 in Haskovo, Bulgaria. I moved to Berlin in 2017 because my wife was
              living here.
            </p>
            <p>After 10 years of working on "regular jobs" I retrained as a web developer. As long as I can remember I've used computers 
              and I've always been interested by the internet and how it works. I have taken multiple courses for web development in order 
              to gain skills and experience, and in the process discovered my passion for coding. By turning my passion into a profession I am able to 
              see the world in a different perspective and see the possibilities and power that the internet provides. I am open for adventurous, 
              challenging and demanding projects.  
            </p>
          </div>
          <div className="col-lg-6">
          <img src={process.env.PUBLIC_URL + '/about-me.jpg'} className="img-fluid" />
          </div>
        </div>
      </div>
    )
  }
}
