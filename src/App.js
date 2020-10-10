import React from 'react';
import useFetchJobs from './useFetchJobs';
import {Container} from 'react-bootstrap'

function App() {
  const { jobs, loading, error } = useFetchJobs()
  return (
    <Container>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Error!! Try refreshing the page...</h2>}
      {jobs.length && 
        <h3>{jobs.length}</h3>
      }
    </Container>
  );
}

export default App;
