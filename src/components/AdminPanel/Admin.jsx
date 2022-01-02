import React, { Component, useState, useEffect } from "react";
import { useStyles } from "./styles";
import SearchBar from "material-ui-search-bar";

import {
  Button,
  Grid,
  Typography,
  Box,
  FormControl,
  Table,
  TableBody,
  TableCell,
  TextField,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import {
  PostRequest,
  getRequest,
  PutRequest,
  DeleteRequest,
} from "../../Network/CRUD";
import { useNavigate } from "react-router-dom";
import { LocationOnOutlined } from "@material-ui/icons";

const Admin = () => {
  const [activeElement, setActiveElement] = useState("Project");
  const [newProject, setNewProject] = useState(false);
  const [update, setUpdate] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [location, setLocation] = useState("");
  const [numberOfUnits, setNumberOfUnits] = useState(0);
  const [numberOfBuildings, setNumberOfBuildings] = useState(0);
  const [headerImage, setHeaderImage] = useState();
  const [brochureImage, setbroChureImage] = useState();
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  const [tempProject, setTempProject] = useState({});
  let navigate = useNavigate();
  useEffect(() => {
    if (!window.localStorage.getItem("email")) {
      navigate("/");
    }
    (async () => {
      const response = await getRequest("Project");
      console.log("response", response);
      if (response.status === 200) {
        setProjects(response.data);
        setFilteredProjects(response.data);

        console.log("seett");
      }
    })();
  }, []);
  const searchOnChange = (word) => {
    console.log("word", word);
    const filter = projects.filter((item) => item.projectName.includes(word));
    setFilteredProjects(filter);
  };
  const EditClick = (e) => {
    setUpdate(true);
    const project = projects.filter((item) => item.id == e);
    console.log("Edit", project);
    setTempProject(project[0]);
    setProjectName(project[0].projectName);
    setLocation(project[0].location);
    setNumberOfBuildings(project[0].numberOfBuildings);
    setNumberOfUnits(project[0].numberOfUnits);
  };
  const Update = async () => {
    setNewProject(false);
    setUpdate(false);
    let body = new FormData();
    body.append("projectName", projectName);
    body.append("location", location);
    body.append("numberOfBuildings", numberOfBuildings);
    body.append("numberOfUnits", numberOfUnits);
    body.append("closed", false);

    if (headerImage) {
      body.append("headerImage", headerImage);
    }
    if (brochureImage) {
      body.append("ProSureImage", brochureImage);
    }
    const respone = await PutRequest(body, `Project/${tempProject.id}`);
    if (respone.status == 204) {
      await updateUI();
    }
  };
  const updateUI = async () => {
    const resp = await getRequest("Project");
    if (resp.status === 200) {
      setProjects(resp.data);
      setFilteredProjects(resp.data);
    }
  };
  const DeleteClick = async (e) => {
    console.log(e);
    if (e) {
      const repsonse = DeleteRequest(`Project/${e}`);
      console.log(repsonse);
      if (repsonse.status == 201) {
        alert("DELETED");
        await updateUI();
      }
    }
  };

  const AddNew = async () => {
    setNewProject(false);
    let body = new FormData();
    console.log();
    body.append("projectName", projectName);
    body.append("location", location);
    body.append("numberOfBuildings", numberOfBuildings);
    body.append("numberOfUnits", numberOfUnits);
    body.append("headerImage", headerImage);
    body.append("ProSureImage", brochureImage);

    const respone = await PostRequest(body, "Project");
    console.log("res", respone);
    updateUI();
  };
  const { Title } = Typography;
  const styles = useStyles();
  return (
    <>
      <div className={styles.banner}>
        <Box>
          <Typography variant="h2" style={{ marginTop: "50px" }}>
            <Box
              component="span"
              fontWeight="700"
              fontSize="5rem"
              color="white"
            >
              ADMIN PANEL{" "}
            </Box>
          </Typography>
          <Typography variant="h2" style={{ marginTop: "50px" }}>
            <Grid container>
              <Grid xs={5} lg={5} item>
                <Box>
                  <Button
                    variant="outlined"
                    className={
                      activeElement == "Project"
                        ? styles.MuiButtonactive
                        : styles.MuiButton
                    }
                    onClick={() => {
                      setActiveElement("Project");
                      setUpdate(false);
                      setNewProject(false);
                    }}
                    fullWidth
                  >
                    Projects
                  </Button>
                </Box>
              </Grid>
              <Grid xs={2} lg={2} item></Grid>
              <Grid xs={5} lg={5} item>
                <Box>
                  <Button
                    variant="outlined"
                    className={
                      activeElement == "Project"
                        ? styles.MuiButton
                        : styles.MuiButtonactive
                    }
                    onClick={() => {
                      setActiveElement("Mobile");
                    }}
                    fullWidth
                  >
                    {" "}
                    Phone Numbers
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Typography>
        </Box>
      </div>
      {newProject || update ? (
        <Grid container>
          <Grid item xs={12} lg={3}></Grid>
          <Grid item xs={12} lg={6}>
            <FormControl style={{ marginTop: "10px" }} fullWidth>
              <h2 htmlFor="projectName" style={{ color: "white" }}>
                Project Name
              </h2>
              <TextField
                id="projectName"
                value={projectName}
                variant="outlined"
                onChange={(e) => {
                  setProjectName(e.target.value);
                }}
                InputProps={{
                  className: styles.input,
                }}
              />
            </FormControl>
            <FormControl style={{ marginTop: "10px" }} fullWidth>
              <h2 htmlFor="projectLocation" style={{ color: "white" }}>
                Project Location
              </h2>
              <TextField
                id="projectLocation"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                variant="outlined"
                InputProps={{
                  className: styles.input,
                }}
              />
            </FormControl>
            <FormControl style={{ marginTop: "10px" }} fullWidth>
              <h2 style={{ color: "white" }} htmlFor="buildings">
                Number of buildings
              </h2>
              <TextField
                id="buildings"
                value={numberOfBuildings}
                onChange={(e) => {
                  setNumberOfBuildings(e.target.value);
                }}
                variant="outlined"
                InputProps={{
                  className: styles.input,
                }}
              />
            </FormControl>{" "}
            <FormControl style={{ marginTop: "10px" }} fullWidth>
              <h2 style={{ color: "white" }} htmlFor="Units">
                Number of Units
              </h2>
              <TextField
                id="Units"
                type="number"
                value={numberOfUnits}
                onChange={(e) => {
                  setNumberOfUnits(e.target.value);
                }}
                variant="outlined"
                InputProps={{
                  className: styles.input,
                }}
              />
            </FormControl>
            <FormControl style={{ marginTop: "10px" }} fullWidth>
              <h2 style={{ color: "white" }} htmlFor="Units">
                brochure Image
              </h2>
              <TextField
                id="Units"
                type="file"
                onChange={(e) => {
                  setbroChureImage(e.target.files[0]);
                }}
                variant="outlined"
                InputProps={{
                  className: styles.input,
                }}
              />
            </FormControl>
            <FormControl style={{ marginTop: "10px" }} fullWidth>
              <h2 style={{ color: "white" }} htmlFor="Units">
                Header Image
              </h2>
              <TextField
                id="header"
                variant="outlined"
                type="file"
                onChange={(e) => {
                  setHeaderImage(e.target.files[0]);
                }}
                InputProps={{
                  className: styles.input,
                }}
              />
            </FormControl>
            <FormControl
              style={{
                marginTop: "10px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="outlined"
                onClick={newProject ? AddNew : update ? Update : null}
                style={{
                  marginRight: "25%",
                  marginLeft: "25%",
                  marginTop: "10px",
                  color: "white",
                  fontSize: "1.3rem",
                  borderColor: "white",
                }}
              >
                {newProject ? "Create New Project" : " Update Project"}
              </Button>
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={3}></Grid>
        </Grid>
      ) : (
        <>
          <div>
            <Grid container>
              <Grid item xs={12} lg={8}>
                <Box className={styles.searchDiv}>
                  <SearchBar
                    style={{ margin: "20px" }}
                    onChange={(e) => {
                      searchOnChange(e);
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Box className={styles.searchDiv}>
                  <Button
                    variant="outlined"
                    className={styles.btn}
                    onClick={() => {
                      setNewProject(true);
                    }}
                  >
                    {" "}
                    Add New Project
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </div>

          <TableContainer
            component={Paper}
            style={{
              marginLeft: "2%",
              marginRight: "2%",
              width: "96%",
              marginTop: "1%",
              background: "black",
            }}
          >
            <Table sx={{ minWidth: 450 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className={styles.cell}>Project Name</TableCell>
                  <TableCell className={styles.cell} align="center">
                    Location
                  </TableCell>
                  <TableCell className={styles.cell} align="center">
                    Number of Buildings
                  </TableCell>
                  <TableCell className={styles.cell} align="center">
                    Number of Units
                  </TableCell>
                  <TableCell className={styles.cell} align="center"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredProjects?.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      className={styles.cell}
                      component="th"
                      scope="row"
                    >
                      {row.projectName}
                    </TableCell>
                    <TableCell className={styles.cell} align="center">
                      {row.location}
                    </TableCell>
                    <TableCell className={styles.cell} align="center">
                      {row.numberOfBuildings}
                    </TableCell>
                    <TableCell className={styles.cell} align="center">
                      {row.numberOfUnits}
                    </TableCell>
                    <TableCell className={styles.cell} align="center">
                      <Button
                        style={{ color: "green", borderColor: "green" }}
                        variant="outlined"
                        id={row.id}
                        onClick={(e) => {
                          EditClick(row.id);
                        }}
                      >
                        Edit
                      </Button>
                      {"   "}
                      <Button
                        style={{
                          marginRight: "10px",
                          marginLeft: "10px",
                        }}
                        id={row.id}
                        onClick={(e) => {
                          DeleteClick(row.id);
                        }}
                        variant="outlined"
                        color="secondary"
                        variant="outlined"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </>
  );
};
export default Admin;
/*import React, { Component } from "react";
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

*/
