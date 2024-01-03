import P from 'prop-types';
import './App.css';
import React, { useEffect, useMemo, useRef, useState } from 'react';

const Post = ({ post, handleClick }) => {
  console.log('Filho, redenrizou');
  return (
    <div key={post.id} className='post'>
      <h1
        style={{ fontSize: '14px' }}
        onClick={() => handleClick(post.title)}>
        {post.title}
      </h1>
      <p>{post.body}</p>
    </div>
  );
}

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  onClick: P.func
}

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const input = useRef(null);
  const contador = useRef(0);

  console.log('Pai, redenrizou');

  //componnet did mount
  useEffect(() => {
    setTimeout(function() {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(r => r.json())
        .then(r => setPosts(r));
    }, 5000);
  }, [])

  useEffect(() => {
    input.current.focus();
  }, [value])

  useEffect(() => {
    contador.current++;
  })

  const handleClick = (value) => {
    setValue(value);
  }

  return (
    <div className="App">
      <h6>redenrizou: {contador.current}X</h6>
      <p>
        <input
          ref={input}
          type='search'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {
        useMemo(() => {
          return (
            posts.length > 0 &&
            posts.map(post => <Post key={post.id} post={post} handleClick={handleClick} />)
          )
        }, [posts])

      }

      {posts.length <= 0 && <p>Carregando...</p>}
    </div>
  );
}

export default App;
