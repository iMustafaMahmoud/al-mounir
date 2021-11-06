import React, { Component, useState } from "react";
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

const Admin = () => {
  const [activeElement, setActiveElement] = useState("Project");
  const [newProject, setNewProject] = useState(false);
  const { Title } = Typography;
  function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24),
    createData("Ice cream sandwich", 237, 9.0, 37),
    createData("Eclair", 262, 16.0, 24),
    createData("Cupcake", 305, 3.7, 67),
    createData("Gingerbread", 356, 16.0, 49),
  ];
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
      {newProject ? (
        <Grid container>
          <Grid item xs={12} lg={3}></Grid>
          <Grid item xs={12} lg={6}>
            <FormControl style={{ marginTop: "10px" }} fullWidth>
              <h2 htmlFor="projectName" style={{ color: "white" }}>
                Project Name
              </h2>
              <TextField
                id="projectName"
                variant="outlined"
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
                variant="outlined"
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
                style={{
                  marginRight: "25%",
                  marginLeft: "25%",
                  marginTop: "10px",
                  color: "white",
                  fontSize: "1.3rem",
                  borderColor: "white",
                }}
              >
                Create New Project
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
                    // value={this.state.value}
                    //onChange={(newValue) => this.setState({ value: newValue })}
                    //onRequestSearch={() => doSomethingWith(this.state.value)}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Box className={styles.searchDiv}>
                  <Button variant="outlined" className={styles.btn}>
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
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      className={styles.cell}
                      component="th"
                      scope="row"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell className={styles.cell} align="center">
                      {row.calories}
                    </TableCell>
                    <TableCell className={styles.cell} align="center">
                      {row.fat}
                    </TableCell>
                    <TableCell className={styles.cell} align="center">
                      {row.carbs}
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
/*
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
              }}px
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

      }

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
 
 
 
 */
