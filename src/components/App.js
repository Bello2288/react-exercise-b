import Form from '../components/Form';
import './App.css';
import {useState} from 'react';


const INITIAL_POSTS = [{title: 'this is a title', body: 'this is the body'}];


function App() {
  const [posts, setPosts] = useState(INITIAL_POSTS);

  const addPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  return (
    <div className="App">
      <Form posts={posts} addPost={addPost} />
    </div>
  );
}

export default App;