export const fetchCandidates = () => {
  fetch('https://nsbedfw-job-board-backend.herokuapp.com/candidates', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(response => response.json())
    .then(responseData => {
      return responseData;
    })
    .catch(error => console.log(error));
};

export const fetchJobPostings = () => {
  fetch('https://localhost:8080/jobs', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(response => response.json())
    .then(responseData => {
      console.log(responseData);
      return responseData;
    })
    .catch(error => console.log(error));
};
