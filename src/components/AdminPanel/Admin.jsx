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

  useEffect(() => {
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
    if (headerImage) {
      body.append("headerImage", headerImage);
    }
    if (brochureImage) {
      body.append("ProSureImage", brochureImage);
    }
    const respone = await PutRequest(body, "Project");
    console.log("res", respone);
  };
  const DeleteClick = async (e) => {
    console.log(e);
    if (e) {
      const repsonse = DeleteRequest(`Project/${e}`);
      console.log(repsonse);
      if (repsonse.status == 201) {
        alert("DELETED");
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
