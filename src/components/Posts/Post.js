import React, { useState } from 'react';
import {
  useGetAllPostQuery,
  useCreatePostMutation,
  useUpdatePostByIdMutation,
} from '../../services/post';
import { Link } from 'react-router-dom';

const Post = () => {
  const { data, isError, isLoading } = useGetAllPostQuery();
  const [createpost, resp] = useCreatePostMutation();
  const [updatePost, response] = useUpdatePostByIdMutation();
  const [search, setSearch] = useState();

  console.log(response);
  const createPostHandler = () => {
    const post = {
      title: 'New post title',
      body: 'post body description',
      userId: 1,
    };
    createpost(post);
  };
  const updatePostHandler = () => {
    console.log('tests');
    const post = {
      title: 'New post title',
      body: 'post body description',
      userId: 1,
      id: 1,
    };
    updatePost(post);
  };

  if (isLoading) return <h2>Loading...</h2>;

  if (isError) return <h2>Error loading data...</h2>;

  return (
    <div>
      <div className='button'>
        <button type='button' onClick={() => createPostHandler()}>
          Create Post
        </button>
        <button type='button' onClick={() => updatePostHandler()}>
          Update Post
        </button>
      </div>

      <div className='search'>
        <input
          type='text'
          placeholder='Search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {data &&
        data
          .filter(
            (post) =>
              post.title.toLowerCase().includes(search?.toLowerCase()) ||
              post.body.toLowerCase().includes(search?.toLowerCase())
          )
          .map((post) => {
            let newTitle = post.title.replace(
              new RegExp(search, 'gi'),
              (match) => `<span style=color:#ff0000;'>${match}</span>`
            );
            let newBody = post.body.replace(
              new RegExp(search, 'gi'),
              (match) => `<span style=color:#ff0000;'>${match}</span>`
            );
            return (
              <div key={post.id}>
                <h2>
                  {post.id}.
                  <span dangerouslySetInnerHTML={{ __html: newTitle }}></span>
                </h2>
                <p dangerouslySetInnerHTML={{ __html: newBody }}></p>
                <Link to={`post/${post.id}`}>Read more</Link>
                <hr />
              </div>
            );
          })}
    </div>
  );
};

export default Post;
