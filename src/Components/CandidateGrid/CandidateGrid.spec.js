import React from 'react';
import ReactDOM from 'react-dom';
import CandidateGrid from './CandidateGrid';
import {BrowserRouter as Router, Route} from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router>
    <Route path="/candidates" component={CandidateGrid}></Route>
    </Router>, div);
});
