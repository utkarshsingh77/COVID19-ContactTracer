import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Entries() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
      <Typography className="headers" variant="h5" component="h2">
          Where have you been and how are you?
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Help yourself and your community by helping us track the spread of COVID-19
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Submit</Button>
      </CardActions>
    </Card>
  );
}