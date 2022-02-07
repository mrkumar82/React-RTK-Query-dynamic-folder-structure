import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Post from './components/Posts/Post';
import Postdetail from './components/Posts/Postdetail';
import Folder from './components/Folder/Folder';
import { explorer } from './data/data';

function App() {
  return (
    <div className='App'>
      <h1>React RTK Query</h1>
      <Router>
        <Routes>
          <Route path='/' element={<Post />} />
          <Route path='post/:id' element={<Postdetail />} />
          <Route path='folder' element={<Folder explorer={explorer} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
