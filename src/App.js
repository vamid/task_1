import './App.scss';
import Header from 'components/Header';
import { Grid } from "@mui/material"
import avatarImg from "./assets/images/avatar.jpg"

function App() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={9}>
          <Header user={{ img: avatarImg, firstName: "Zelto", lastName: "Olinbekov" }} />
        </Grid>
      </Grid>
    </>

  );
}

export default App;
