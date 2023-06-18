import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { blue, orange, purple, red } from "@mui/material/colors";
import Card from "@mui/material/Card";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
// import DossierVert from "../../../assets/images/chu/DossierVert.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function DossierVertStructure() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const source = queryParams.get("source");
  return (
    <Box sx={{ flexGrow: 1, mt: 2 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={11}>
          <Item>
            <Box
              sx={{
                display: "flex",
                bgcolor: "primary.main",
                color: "primary.contrastText",
                m: -1,
              }}
            >
              <Grid
                item
                xs={8}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "start",
                }}
              >
                <h3>
                  Dossier d'exploitation du retard de croissance
                  staturo-pondéral
                </h3>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "end",
                }}
              >
                <h4>Patient X</h4>
              </Grid>
            </Box>

            <br></br>
            <br></br>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card sx={{ width: 345 }}>
                    <h1>IDENTITE</h1>
                    <br />
                    <CardActions sx={{ backgroundColor: "blue" }}>
                      <Stack spacing={6} direction="row">
                        {source === "voir" || (
                          <Button
                            size="small"
                            variant="contained"
                            component={Link}
                            to="ImpressionPatientIdentite"
                          >
                            Voir
                          </Button>
                        )}
                        {source === "remplire" || (
                          <Button size="small" variant="contained">
                            Remplir
                          </Button>
                        )}
                        {source === "remplire" || (
                          <Button
                            size="small"
                            variant="contained"
                            component={Link}
                            to="UpdatePatientIdentite"
                          >
                            Modifier
                          </Button>
                        )}
                      </Stack>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card sx={{ width: 345 }}>
                    <h1>PARACLINIQUE</h1> <br></br>
                    <CardActions sx={{ backgroundColor: "blue" }}>
                      <Stack spacing={6} direction="row">
                        {source === "voir" || (
                          <Button
                            size="small"
                            variant="contained"
                            component={Link}
                            to="ImpressionPatientIdentite"
                          >
                            Voir
                          </Button>
                        )}
                        {source === "remplire" || (
                          <Button size="small" variant="contained">
                            Remplir
                          </Button>
                        )}
                        {source === "remplire" || (
                          <Button
                            size="small"
                            variant="contained"
                            component={Link}
                            to="UpdatePatientIdentite"
                          >
                            Modifier
                          </Button>
                        )}
                      </Stack>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card sx={{ width: 345 }}>
                    <h1>Documents</h1> <br></br>
                    <CardActions sx={{ backgroundColor: "blue" }}>
                      <Stack spacing={6} direction="row">
                        {source === "voir" || (
                          <Button
                            size="small"
                            variant="contained"
                            component={Link}
                            to="ImpressionPatientIdentite"
                          >
                            Voir
                          </Button>
                        )}
                        {source === "remplire" || (
                          <Button size="small" variant="contained">
                            Remplir
                          </Button>
                        )}
                        {source === "remplire" || (
                          <Button
                            size="small"
                            variant="contained"
                            component={Link}
                            to="UpdatePatientIdentite"
                          >
                            Modifier
                          </Button>
                        )}
                      </Stack>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Box>
            <br></br>

            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card sx={{ width: 345 }}>
                    <h1>ANTECEDENTS</h1>
                    <h2> 1- Personnels</h2>
                    <br></br>

                    <CardActions sx={{ backgroundColor: "blue" }}>
                      <Stack spacing={6} direction="row">
                        {source === "voir" || (
                          <Button
                            size="small"
                            variant="contained"
                            component={Link}
                            to="ImpressionPatientIdentite"
                          >
                            Voir
                          </Button>
                        )}
                        {source === "remplire" || (
                          <Button size="small" variant="contained">
                            Remplir
                          </Button>
                        )}
                        {source === "remplire" || (
                          <Button
                            size="small"
                            variant="contained"
                            component={Link}
                            to="UpdatePatientIdentite"
                          >
                            Modifier
                          </Button>
                        )}
                      </Stack>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card sx={{ width: 345, justifyContent: "end" }}>
                    <h1>ANTECEDENTS</h1>
                    <h2> 2- Familiaux</h2>
                    <br></br>
                    <CardActions sx={{ backgroundColor: "blue" }}>
                      <Stack spacing={6} direction="row">
                        {source === "voir" || (
                          <Button
                            size="small"
                            variant="contained"
                            component={Link}
                            to="ImpressionPatientIdentite"
                          >
                            Voir
                          </Button>
                        )}
                        {source === "remplire" || (
                          <Button size="small" variant="contained">
                            Remplir
                          </Button>
                        )}
                        {source === "remplire" || (
                          <Button
                            size="small"
                            variant="contained"
                            component={Link}
                            to="UpdatePatientIdentite"
                          >
                            Modifier
                          </Button>
                        )}
                      </Stack>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card sx={{ width: 345, justifyContent: "end" }}>
                    <h1>DIAGNOSTIC RETENU </h1>
                    <h2>ET PEC THERAPEUTIQUE</h2>
                    <br></br>
                    <CardActions sx={{ backgroundColor: "blue" }}>
                      <Stack spacing={6} direction="row">
                        {source === "voir" || (
                          <Button
                            size="small"
                            variant="contained"
                            component={Link}
                            to="ImpressionPatientIdentite"
                          >
                            Voir
                          </Button>
                        )}
                        {source === "remplire" || (
                          <Button size="small" variant="contained">
                            Remplir
                          </Button>
                        )}
                        {source === "remplire" || (
                          <Button
                            size="small"
                            variant="contained"
                            component={Link}
                            to="UpdatePatientIdentite"
                          >
                            Modifier
                          </Button>
                        )}
                      </Stack>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Box>
            <br></br>

            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card sx={{ width: 345 }}>
                    <h1>COURBE CROISSANCE</h1>
                    <br></br>

                    <CardActions sx={{ backgroundColor: "blue" }}>
                      <Stack spacing={6} direction="row">
                        {source === "voir" || (
                          <Button
                            size="small"
                            variant="contained"
                            component={Link}
                            to="ImpressionPatientIdentite"
                          >
                            Voir
                          </Button>
                        )}
                        {source === "remplire" || (
                          <Button size="small" variant="contained">
                            Remplir
                          </Button>
                        )}
                        {source === "remplire" || (
                          <Button
                            size="small"
                            variant="contained"
                            component={Link}
                            to="UpdatePatientIdentite"
                          >
                            Modifier
                          </Button>
                        )}
                      </Stack>
                    </CardActions>
                  </Card>
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card sx={{ width: 345 }}>
                    <h1>EXAMEN PHYSIQUE</h1>
                    <br></br>

                    <CardActions sx={{ backgroundColor: "blue" }}>
                      <Stack spacing={6} direction="row">
                        {source === "voir" || (
                          <Button
                            size="small"
                            variant="contained"
                            component={Link}
                            to="ImpressionPatientIdentite"
                          >
                            Voir
                          </Button>
                        )}
                        {source === "remplire" || (
                          <Button size="small" variant="contained">
                            Remplir
                          </Button>
                        )}
                        {source === "remplire" || (
                          <Button
                            size="small"
                            variant="contained"
                            component={Link}
                            to="UpdatePatientIdentite"
                          >
                            Modifier
                          </Button>
                        )}
                      </Stack>
                    </CardActions>
                  </Card>
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card sx={{ width: 345, justifyContent: "end" }}>
                    <h1>SUIVI ...</h1>
                    <br></br>
                    <CardActions sx={{ backgroundColor: "blue" }}>
                      <Stack spacing={6} direction="row">
                        {source === "voir" || (
                          <Button
                            size="small"
                            variant="contained"
                            component={Link}
                            to="ImpressionPatientIdentite"
                          >
                            Voir
                          </Button>
                        )}
                        {source === "remplire" || (
                          <Button size="small" variant="contained">
                            Remplir
                          </Button>
                        )}
                        {source === "remplire" || (
                          <Button
                            size="small"
                            variant="contained"
                            component={Link}
                            to="UpdatePatientIdentite"
                          >
                            Modifier
                          </Button>
                        )}
                      </Stack>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
export default DossierVertStructure;
