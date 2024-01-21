import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './App';
import { render } from 'react-dom';
import './App.css';
import { HeroImage } from './HeroImage';
import Gallery  from './Gallery.js';

class galimgx extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <HeroImage />
        <Gallery />
      </div>
    );
  }
}

render(<galimgx />, document.getElementById('root'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


