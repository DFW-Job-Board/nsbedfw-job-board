import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import JobBoard from '../JobBoard/JobBoard'
import { content } from '../../utility/emailContent';
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
}));

const JobPost = ({ jobPost }) => {
  return (
    <div className='job-post'>
      {jobPost ? (
        <Card variant='outlined' style={{ margin: '10px auto' }}>
          <CardContent>
            <Typography gutterBottom variant='headline' component='h2'>
              Industry: {jobPost.industry}
            </Typography>
            <Typography gutterBottom variant='headline' component='h3'>
              {jobPost.skillLevel} level position
            </Typography>
            {jobPost.companies_of_interest.length > 0 ? (
              <Typography gutterBottom variant='headline' component='h4'>
                Companies of Interest: {jobPost.companies_of_interest}
              </Typography>
            ) : null}
            <Typography component='p'>{jobPost.description}</Typography>
          </CardContent>
          <CardActions>
            <Button
              style={{ mariginLeft: 'auto' }}
              size='small'
              color='primary'
              // target="_blank"
              href={`mailto:${jobPost.email}?subject=${content.subject}&body=${jobPost.firstName}${content.body}`}
            >
              Contact
            </Button>
          </CardActions>
        </Card>
      ) : null}
    </div>
  );
};

export default JobPost;
