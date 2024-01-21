import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './App';
import { render } from 'react-dom';
import './App.css';
import { HeroImage } from './HeroImage';
import Gallery  from './Gallery.js';

// eslint-disable-next-line no-unused-vars
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
// eslint-disable-next-line no-unused-vars
render(<galimgx />, document.getElementById('root'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


