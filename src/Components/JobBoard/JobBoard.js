// import React from 'react';
// import { fetchCandidates, fetchJobPostings } from '../../apiCalls';
// import Card from '@material-ui/core/Card';
// import CardConent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import './JobBoard.css';
// import logo from './logo.png';
// import JobPost from '../JobPost/JobPost';
// import Container from '@material-ui/core/Container';

// export default class JobBoard extends React.Component {
//   state = {
//     candidatesList: [],
//     searchStrings: '',
//   };

//   constructor() {
//     super();
//     this.getCandidates();
//     this.getJobPostings();
//   }

//   getCandidates = () => {
//     const candidates = fetchCandidates();
//     this.state = { candidatesList: candidates };
//   };

//   getJobPostings = () => {
//     const jobPostings = fetchJobPostings();
//     this.state = { jobsList: jobPostings };
//   };

//   // onSearchInputChange = event => {
//   //   if (event.target.value) {
//   //     this.setState({ searchString: event.target.value });
//   //   } else {
//   //     this.setState({ searchString: '' });
//   //   }
//   //   this.getCandidates();
//   // };

//   render() {
//     return (
//       <div className='job-board'>
//         <img className='nsbe-logo' src={logo}></img>
//         <Container
//           maxWidth='sm'
//           style={{ overflow: 'scroll', height: '500px', border: 'solid 2px', margin: '50px auto' }}
//         >
//           {this.state.candidatesList ? (
//             <div>
//               {this.state.candidatesList.map(jobPost => (
//                 <JobPost jobPost={jobPost}> </JobPost>
//               ))}
//             </div>
//           ) : (
//             'No Job Postings Found'
//           )}
//         </Container>
//       </div>
//     );
//   }
// }
