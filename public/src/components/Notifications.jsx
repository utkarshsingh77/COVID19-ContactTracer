import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 250,
    minHeight: 150,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Notifications() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;


  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
      <Typography className="headers" variant="h5" component="h2">
          Notifications
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Please sign in to see personalized notifications
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Sign in</Button>
      </CardActions>
    </Card>
  );
}