import '../css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/header'
import Footer from '../components/footer'
import Sidebar from '../components/sidebar'
import CreatePost from '../components/createPost'
import PostList from '../components/Postlist'
import { useState } from 'react'
import PostListProvider from '../store/postsListStore'
import { Outlet } from 'react-router-dom';

function App() {
  // const [tab, setSelectTab] = useState('Home');

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar className='sidebar' /*setSelectTab={setSelectTab} tab={tab}*/ ></Sidebar>
        <div className="content">
          <Header ></Header>
          {/* {tab === 'Home' ? (<PostList></PostList>) : (<CreatePost></CreatePost>)} */}
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>

  );
}

export default App;
