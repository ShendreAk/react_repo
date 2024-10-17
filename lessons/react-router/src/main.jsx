import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './routes/App.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CreatePost from './components/createPost.jsx';
import PostList, { postLoader } from './components/Postlist.jsx';
import { submitPostAction } from './components/createPost.jsx';


const router = createBrowserRouter(
  [{
    path: '/',
    element: <App />,
    children: [{
      path: '/', element: <PostList />, loader: postLoader
    },
    { path: '/create-post', element: <CreatePost />, action: submitPostAction }]
  }]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
