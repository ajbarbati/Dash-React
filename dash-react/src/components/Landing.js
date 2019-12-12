import React, { Component } from "react"
import LineExample from "./Line"
import DynamicDoughnutExample from "./Dynamic-doughnut"
import HorizontalBarExample from './HorizontalBar'
import "./Landing.css"
import profilePic from './undraw_profile_pic_ic5t.svg'

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="profile-user-box card-box bg-custom">
                  <div className="row">
                    <div className="col-sm-6">
                      <span className="float-left mr-3">
                        <img
                          src={profilePic}
                          alt=""
                          className="thumb-lg rounded-circle"
                        />
                      </span>
                      <div className="media-body text-white">
                        <h4 className="mt-1 mb-1 font-18">Michael A. Franklin</h4>
                        <p className="font-13 text-light">
                          Admin
                        </p>
                        <p className="text-light mb-0">California, United States</p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="text-right">
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4">
                <div className="card-box">
                  <DynamicDoughnutExample />
                </div>
                <div className="card-box ribbon-box">
                  <div className="ribbon ribbon-primary">Update</div>
                  <div className="clearfix"></div>
                  <HorizontalBarExample/>
                </div>
              </div>
              <div className="col-xl-8">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="card-box tilebox-one">
                      <i className="icon-layers float-right text-muted"></i>
                      <h6 className="text-muted text-uppercase mt-0">Orders</h6>
                      <h2 className="" data-plugin="counterup">
                        1,587
                      </h2>
                      <span className="badge badge-custom">+11% </span><br/>
                      <span className="text-muted">From previous period</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="card-box tilebox-one">
                      <i className="icon-paypal float-right text-muted"></i>
                      <h6 className="text-muted text-uppercase mt-0">Revenue</h6>
                      <h2 className="">
                        $<span data-plugin="counterup">46,782</span>
                      </h2>
                      <span className="badge badge-danger">-29% </span><br/>
                      <span className="text-muted">From previous period</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="card-box tilebox-one">
                      <i className="icon-rocket float-right text-muted"></i>
                      <h6 className="text-muted text-uppercase mt-0">
                        Product Sold
                      </h6>
                      <h2 className="" data-plugin="counterup">
                        1,890
                      </h2>
                      <span className="badge badge-custom">+89% </span><br/>
                      <span className="text-muted">Last year</span>
                    </div>
                  </div>
                </div>
                <div className="card-box">
                  <LineExample />
                </div>
                <div className="card-box">
                  <h4 className="header-title mb-3">My Projects</h4>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Project Name</th>
                          <th>Start Date</th>
                          <th>Due Date</th>
                          <th>Status</th>
                          <th>Assigned</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Software A</td>
                          <td>01/01/2019</td>
                          <td>07/05/2019</td>
                          <td>
                            <span className="label label-info">
                              Work in Progress
                            </span>
                          </td>
                          <td>Yes</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Network 34C</td>
                          <td>01/01/2019</td>
                          <td>07/05/2019</td>
                          <td>
                            <span className="label label-success">Pending</span>
                          </td>
                          <td>No</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Systems Database D</td>
                          <td>01/01/2019</td>
                          <td>07/05/2019</td>
                          <td>
                            <span className="label label-pink">Done</span>
                          </td>
                          <td>Yes</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Company Frontend</td>
                          <td>01/01/2019</td>
                          <td>07/05/2019</td>
                          <td>
                            <span className="label label-purple">
                              Work in Progress
                            </span>
                          </td>
                          <td>Yes</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Install New Software</td>
                          <td>01/01/2019</td>
                          <td>07/05/2019</td>
                          <td>
                            <span className="label label-warning">Coming soon</span>
                          </td>
                          <td>Yes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing
