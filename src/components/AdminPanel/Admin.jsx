import React, { Component } from "react";
import "./Admin.css";
import { Row, Col, Typography } from "antd";
import { Button, Grid } from "@material-ui/core";

class Admin extends Component {
  state = {
    activeElement: "Project",
  };
  componentDidMount() {
    //     (async () => {
    //       let Reserved = [];
    //       let response = await getRequest(`appointments/patient/`);
    //       if (response?.data) {
    //         response = response.data;
    //         this.setState({ appointments: response.reverse() });
    //         this.state.appointments.map(async (item) => {
    //           item.date =
    //             item.date.split("T")[0] +
    //             " " +
    //             item.date.split("T")[1].split(".")[0];
    //           if (item.status !== "complete" && item.status !== "absentDoctor") {
    //             Reserved.push(item);
    //             this.setState({ appointments: Reserved });
    //           }
    //         });
    //       }
    //     })();
    //   }
    //   accept = (e) => {
    //     const response = axiosPut(
    //       {},
    //       `appointments/client-approve-update/${e.target.id}`
    //     );
    //     if (response.status !== 200) {
    //       alert("something went wrong");
    //     }
  }

  render() {
    const { Title } = Typography;
    return (
      <Col id="reserved" span={24}>
        <Row justify="center" align="middle">
          <Col span={24}>
            <Title style={{ marginBottom: "60px" }}>ADMIN PANEL</Title>
          </Col>
          <Col>
            <Row
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginLeft: "30px",
                marginRight: "30px",
              }}
            >
              <Col
                style={{
                  display: "inline-block",
                  minWidth: "50%",
                }}
                xs={{ span: 10 }}
                lg={{ span: 10 }}
                className={ 
                  this.state.activeElement === "Project" ? "active" : ""
                }
                onClick={() => {
                  this.setState({ activeElement: "Project" });
                }}
              >
                Projects
              </Col>
              <Col
                style={{ display: "inline-block", minWidth: "50%" }}
                xs={{ span: 10 }}
                className={
                  this.state.activeElement === "PhoneNumbers" ? "active" : ""
                }
                onClick={() => {
                  this.setState({ activeElement: "PhoneNumbers" });
                }}
                lg={{ span: 10 }}
              >
                PhoneNumbers
              </Col>
            </Row>
          </Col>
        </Row>
        <Row></Row>
        <Row justify="center">
          <Col span={24}>
            <Row justify="center">
              <Col xs={{ span: 23 }} lg={{ span: 3 }}>
                Project Name
              </Col>
              <Col xs={{ span: 23 }} lg={{ span: 3 }}>
                Location
              </Col>
              <Col xs={{ span: 23 }} lg={{ span: 3 }}>
                Number of Buildings
              </Col>
              <Col xs={{ span: 23 }} lg={{ span: 3 }}>
                Number of Units
              </Col>
            </Row>

            {/* data */}

            <Row justify="center" key="222">
              <Col xs={{ span: 23 }} lg={{ span: 3 }}>
                <Row style={{ height: "100%" }} justify="center" align="middle">
                  <Col>Nameee1</Col>
                </Row>
              </Col>
              <Col xs={{ span: 23 }} lg={{ span: 3 }}>
                <Row style={{ height: "100%" }} justify="center" align="middle">
                  <Col>Location</Col>
                </Row>
              </Col>

              <Col xs={{ span: 23 }} lg={{ span: 3 }}>
                <Row style={{ height: "100%" }} justify="center" align="middle">
                  <Col>100</Col>
                </Row>
              </Col>
              <Col xs={{ span: 23 }} lg={{ span: 3 }}>
                <Row style={{ height: "100%" }} justify="center" align="middle">
                  <Col>100</Col>
                </Row>
              </Col>
              <Col xs={{ span: 23 }} lg={{ span: 3 }}>
                <Row style={{ height: "100%" }} justify="center" align="middle">
                  <Col>
                    <Button variant={"outlined"} style={{ marginLeft: "5px" }}>
                      Edit
                    </Button>
                  </Col>
                  <Col>
                    <Button variant={"outlined"} style={{ marginLeft: "5px" }}>
                      Delete
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    );
  }
}
export default Admin;
/* 
  <Button
                                    style={{ marginLeft: "5px" }}
                                    variant={"outlined"}
                                  >
                                    <NavLink
                                      to={{
                                        pathname: `/editappointment/${element._id}`,
                                      }}
                                    >
                                      {this.props.t("edit")}
                                    </NavLink>
                                  </Button>

*/
