import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  TextField,
  CardActions,
  CardContent,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
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
  table: {
    maxWidth: 350,
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
      .then((res) => {
        let recentDeathCount = 0;
        let recentPosCount = 0;
        let oldestDeathCount = 0;
        let oldestPosCount = 0;
        res.data.counties.forEach((county) => {
          let oldestIndex = county.historicData.length - 1;
          recentDeathCount += county.historicData[0].deathCt;
          oldestDeathCount += county.historicData[oldestIndex].deathCt;
          recentPosCount += county.historicData[0].positiveCt;
          oldestPosCount += county.historicData[oldestIndex].positiveCt;
        });
        let newDeaths = recentDeathCount - oldestDeathCount;
        let newPositives = recentPosCount - oldestPosCount;
        setData({ newDeaths: newDeaths, newPositives: newPositives });
        console.log(newDeaths);
        console.log(newPositives);
        console.log(res.data);
      })
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
        {data && (
          <div>
            <Typography className={classes.pos} color="textSecondary">
              Here is some information for you:
            </Typography>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableCell>New COVID-19 Cases in the last 7 days</TableCell>
                  <TableCell align="right">
                    New COVID-19 Deaths in the last 7 days
                  </TableCell>
                </TableHead>
                <TableBody>
                  <TableCell>{data.newPositives}</TableCell>
                  <TableCell>{data.newDeaths}</TableCell>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
