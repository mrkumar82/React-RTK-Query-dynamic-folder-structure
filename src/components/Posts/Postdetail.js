import React from 'react';
import {
  useGetPostByIdQuery,
  useDeletePostByIdMutation,
} from '../../services/post';
import { useParams, Link } from 'react-router-dom';

const Postdetail = () => {
  const params = useParams();
  const { data, isError, isLoading } = useGetPostByIdQuery(params.id);
  const [deleteItem, res] = useDeletePostByIdMutation();

  const deleteHandler = (id) => {
    deleteItem(id);
  };

  if (isLoading) return <h2>Loading</h2>;
  if (isError) return <h2>Error loading data</h2>;

  return (
    <div>
      <h2>Post detail</h2>
      <Link to='/'>Back</Link>
      {data && (
        <div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
          <button onClick={() => deleteHandler(data.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Postdetail;
