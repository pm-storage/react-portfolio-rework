import React, {Component} from 'react'

export default class Social extends Component {
  render() {
    return (
      <div className="container-fluid padding">
        <div className="row text-center padding" id="socialPositionId">
          <div className="col-12">
            <h2>Find me</h2>
          </div>
          <div className="col-12 social padding">
            <a href="https://www.linkedin.com/in/plamen-mitev-4ba3b7181/" target="_blank"><i className="fab fa-linkedin" /></a>
            <a href="https://twitter.com/PlamenMitev4" target="_blank"><i className="fab fa-twitter" /></a>
            <a href="https://github.com/o0pmitev" target="_blank"><i className="fab fa-github-square" /></a>
            <a href="https://www.youtube.com/channel/UCxQjx8EBH_woQWcwAIomtOw?view_as=subscriber" target="_blank"><i className="fab fa-youtube" /></a>
          </div>
        </div>
      </div>
    )
  }
}