import React, {Component} from 'react'

export default class Social extends Component {
  render() {
    return (
      <div className="container-fluid">
      <footer>
        <div className="container-fluid padding">
          <div className="row text-center">
            <div className="col-md-4" id="logoFooterID">
              <img src={process.env.PUBLIC_URL + '/footer2.png'} />
              <hr className="light" />
              <p>+49 1517 1599482</p>
              <p>pmitev89@gmail.com</p>
              <p>Berlin, Germany 12487</p>
            </div>
            <div className="col-md-4">
              <hr className="light" />
              <p>Curriculum Vitae</p>
              <hr className="light" />
              {/* RESUME */}
              <div className="row">
                <div className="col-sm">
                  <button type="button" className="btn btn-primary modal-button" data-toggle="modal" data-target=".bg-example-modal">RESUME</button>
                  <div className="modal fade bg-example-modal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5>RESUME</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>{/* /modal-header */}
                        <div className="modal-body">
                          <embed id="modal-embed" src={process.env.PUBLIC_URL + '/mitev-plamen-resume.pdf'} />
                        </div>{/* /modal-body */}
                      </div>{/* /modal-content */}
                    </div>{/* /modal-dialog */}
                  </div>{/* /modal fade */}
                </div>{/* /col-sm */}
              </div>{/* /row */}
              {/*       /MODAL        */}
            </div>
            <div className="col-md-4">
              <hr className="light" />
              <p>Mission</p>
              <hr className="light" />
              <p>Quick Response</p>
              <p>Custom Design</p>
              <p>Quality work</p>
              <p>Fast delivery</p>
              <p>Clients satisfaction</p>
            </div>
            <div className="col-12">
              <hr className="light-100" />
              <p className="rights-text"> © 2018, All Rights Reserved, Developed by Plamen Mitev <br /><i className="fas fa-cogs" />
                Made in Berlin, Germany
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
    )
  }
}