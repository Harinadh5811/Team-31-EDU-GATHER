import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import Input from '@mui/material/Input';
import './Groups.css'
const theme = createTheme();

export default function Groups() {
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // Add the image file to FormData
    if (selectedFile) {
      data.append('groupImage', selectedFile);
    }

    const groupData = {
      groupName: data.get('groupName'),
      groupDescription: data.get('groupDescription'),
      // File is added to the FormData directly, no need to include it here
    };

    axios.post('http://localhost:8081/groups', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => {
      console.log(response.data);
      alert("Group created successfully");
    })
    .catch((error) => {
      console.error("There was an error creating the group!", error);
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 17,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AddCircleOutlineIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create Group
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} encType="multipart/form-data">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="groupName"
                  label="Group Name"
                  name="groupName"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="groupDescription"
                  label="Group Description"
                  name="groupDescription"
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  accept="image/*"
                  id="groupImage"
                  type="file"
                  onChange={handleFileChange}
                  className="button-red"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              
            >
              Create Group
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
