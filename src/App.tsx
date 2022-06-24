import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { client } from './lib/apollo';

const GET_LESSONS_QUERY = gql`
  query GetLessons {
    lessons {
      id
      title
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

function App() {
  // useEffect(() => {
  //   client.query({
  //     query: GET_LESSONS_QUERY,
  //   }).then(result => {
  //     console.log(result);
  //   }).catch(error => {
  //     console.log(error);
  //   });
  // }, []);

  const { loading, error, data } = useQuery<{lessons: Lesson[]}>(GET_LESSONS_QUERY);

  return (
    <ul>
      {loading && <p>Loading...</p>}
      {error && <p>Error :(</p>}
      {data?.lessons.map(lesson => (
        <li key={lesson.id}>{lesson.title}</li>
      ))}
    </ul>
  )
}

export default App
