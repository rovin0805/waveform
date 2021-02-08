import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  layout: {},
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  guest: {
    marginTop: 50,
  },
}));

const SignUpPresenter = ({
  creds: { email, password, role, sendCred, updateCred },
}) => {
  const classes = useStyles;
  return (
    <Container style={{ marginTop: 150 }} component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h3" align="center">
          KSTARS 회원가입
        </Typography>
        <form className={classes.form} noValidate onSubmit={sendCred}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={email}
            onChange={(event) => updateCred(event, "email")}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(event) => updateCred(event, "password")}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="role"
            label="Role"
            type="role"
            id="role"
            value={role}
            onChange={(event) => updateCred(event, "role")}
          />
          {email && password && role ? (
            <Link to={"/waveform"}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
            </Link>
          ) : (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
          )}
        </form>
      </div>
    </Container>
  );
};

export default SignUpPresenter;