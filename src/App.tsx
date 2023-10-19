import { FC } from 'react';
import VideoHeader from './components/VideoHeader';


import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div className="App">
    <VideoHeader />

    <div className="container-fluid position-absolute w-100 h-100">
      <div className="row h-100">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start p-5">
          <h1>Your Name</h1>
          <h3>Your Title</h3>
        </div>
        <div className="col-md-6 overflow-auto p-5">
          {/* Add a lot of content here to test scrolling */}
          <p>Content here...</p>
          {/* ... */}
        </div>
      </div>
    </div>
  </div>
);
}
 
