import "./App.css";
import Button from "@mui/material/Button";
import { Grid, TextField, Stack } from "@mui/material";

function App() {
  return (
    <>
      <Grid container>
        <Stack spacing={2}>
          <TextField variant="outlined" label="Username" />
          <TextField variant="outlined" type="password" label="Password" />
          <Button variant="contained">Login</Button>
          <a href="#">
            <u>Don't have an account? Create one</u>
          </a>
          <a href="#">
            <u>Forgotten your password?</u>
          </a>
        </Stack>
      </Grid>
    </>
  );
}

export default App;
