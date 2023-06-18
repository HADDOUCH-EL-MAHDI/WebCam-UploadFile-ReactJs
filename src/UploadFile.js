import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import CardActions from "@mui/material/CardActions";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function UploadFile() {
  const [file, setFile] = useState();
  const inputRef = useRef(null);

  const handleUploadClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (!e.target.files) {
      return;
    }

    setFile(e.target.files[0]);
    // Effectuez ici toute la logique de téléchargement de fichier...
  };

  return (
    <Box sx={{ flexGrow: 1, mt: 4 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={11}>
          <Item>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "primary.main",
                color: "primary.contrastText",
                p: 2,
                m: -1,
              }}
            >
              <h3>Ajouter un fichier au Patient</h3>
            </Box>
            <br />
            <br />

            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  md={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card sx={{ width: 400 }}>
                    <h1>Télécharger un fichier</h1>
                    <br></br>
                    <CardActions sx={{ 
                      backgroundColor: "blue",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center", }}>
                      <div>
                        <div>
                          <Stack>
                          <button  onClick={handleUploadClick}>
              {file ? `${file.name}` : "Cliquez pour sélectionner"}
            </button>
                          </Stack>
                        </div>
                      </div>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Box>

            <input
              type="file"
              ref={inputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default UploadFile;
