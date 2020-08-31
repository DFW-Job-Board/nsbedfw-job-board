import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Hero from '../Hero/Hero';
import api from '../../utility/api';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import AddToJobBoard from '../AddToJobBoard/AddToJobBoard';

const useStyles = makeStyles(theme => ({
  button: {
    marginBottom: theme.spacing(4),
    justifyContent: 'center',
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const JobGrid = () => {
  const classes = useStyles();
  const [jobPosts, setJobPosts] = useState([]);
  const [addToJobBoardOpen, setAddToJobBoard] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/jobs');
      console.log(response);
      setJobPosts(response.data);
    }
    fetchData();
  }, []);

  const openAddToJobBoard =() => {
    setAddToJobBoard(true);
  }

  const closeAddToJobBoard = () =>{
    setAddToJobBoard(false);
  }

  return (
    <div>
      <Container className={classes.cardGrid} maxWidth='md'>
        <Hero header={false}></Hero>
        <Button className={classes.button} variant='outlined' color='primary' onClick={openAddToJobBoard}>
          add job to board
        </Button>
        <AddToJobBoard open={addToJobBoardOpen} onClose={closeAddToJobBoard}></AddToJobBoard>
        <Grid container spacing={4}>
          {jobPosts &&
            jobPosts.map(post => (
              <Grid item key={post.id} xs={12} sm={6} m={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    // image={`https://source.unsplash.com/featured/?${post.industry}`}
                    image={`https://source.unsplash.com/search/photos?query=${post.industry}`}
                    title='Image title'
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {post.companyName}
                    </Typography>
                    <Typography>{`Title: ${post.title}`}</Typography>
                    <Typography>{`Looking for ${post.skillLevel} level positions in ${post.industry}.`}</Typography>
                  </CardContent>
                  <CardActions></CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
      <Typography component='h1' variant='h2' align='center' color='textPrimary' gutterBottom>
        No Jobs Posted
      </Typography>
    </div>
  );
};

export default JobGrid;
