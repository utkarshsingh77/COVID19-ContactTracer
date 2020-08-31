import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  TextField,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Overview() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [zip, setZip] = useState("");
  const [data, setData] = useState(false);

  const handleChange = (e) => {
    setZip(e.target.value);
  };

  const submitZip = () => {
    axios
      .get(`/${zip}`)
      .then((res) => console.log(res.data))
      .catch(() => console.log("error"));
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className="headers" variant="h5" component="h2">
          What's going on in my area?
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Enter Zip Code
        </Typography>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            onChange={handleChange}
            value={zip}
            id="outlined-basic"
            label="Zip Code"
            variant="outlined"
            size="small"
          />
          <Button onClick={submitZip} label="Submit">
            Submit
          </Button>
        </form>
        <Typography className={classes.pos} color="textSecondary">
          Here is some information for you
        </Typography>
      </CardContent>
    </Card>
  );
}
