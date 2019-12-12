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
        <div class="content">
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <div class="profile-user-box card-box bg-custom">
                  <div class="row">
                    <div class="col-sm-6">
                      <span class="float-left mr-3">
                        <img
                          src={profilePic}
                          alt=""
                          class="thumb-lg rounded-circle"
                        />
                      </span>
                      <div class="media-body text-white">
                        <h4 class="mt-1 mb-1 font-18">Michael A. Franklin</h4>
                        <p class="font-13 text-light">
                          Admin
                        </p>
                        <p class="text-light mb-0">California, United States</p>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="text-right">
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-4">
                <div class="card-box">
                  <DynamicDoughnutExample />
                </div>
                <div class="card-box ribbon-box">
                  <div class="ribbon ribbon-primary">Update</div>
                  <div class="clearfix"></div>
                  <HorizontalBarExample/>
                </div>
              </div>
              <div class="col-xl-8">
                <div class="row">
                  <div class="col-sm-4">
                    <div class="card-box tilebox-one">
                      <i class="icon-layers float-right text-muted"></i>
                      <h6 class="text-muted text-uppercase mt-0">Orders</h6>
                      <h2 class="" data-plugin="counterup">
                        1,587
                      </h2>
                      <span class="badge badge-custom">+11% </span><br/>
                      <span class="text-muted">From previous period</span>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="card-box tilebox-one">
                      <i class="icon-paypal float-right text-muted"></i>
                      <h6 class="text-muted text-uppercase mt-0">Revenue</h6>
                      <h2 class="">
                        $<span data-plugin="counterup">46,782</span>
                      </h2>
                      <span class="badge badge-danger">-29% </span><br/>
                      <span class="text-muted">From previous period</span>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="card-box tilebox-one">
                      <i class="icon-rocket float-right text-muted"></i>
                      <h6 class="text-muted text-uppercase mt-0">
                        Product Sold
                      </h6>
                      <h2 class="" data-plugin="counterup">
                        1,890
                      </h2>
                      <span class="badge badge-custom">+89% </span><br/>
                      <span class="text-muted">Last year</span>
                    </div>
                  </div>
                </div>
                <div class="card-box">
                  <LineExample />
                </div>
                <div class="card-box">
                  <h4 class="header-title mb-3">My Projects</h4>
                  <div class="table-responsive">
                    <table class="table">
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
                            <span class="label label-info">
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
                            <span class="label label-success">Pending</span>
                          </td>
                          <td>No</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Systems Database D</td>
                          <td>01/01/2019</td>
                          <td>07/05/2019</td>
                          <td>
                            <span class="label label-pink">Done</span>
                          </td>
                          <td>Yes</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Company Frontend</td>
                          <td>01/01/2019</td>
                          <td>07/05/2019</td>
                          <td>
                            <span class="label label-purple">
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
                            <span class="label label-warning">Coming soon</span>
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
