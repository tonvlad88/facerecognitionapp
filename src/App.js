import React, { Component } from 'react';
import Clarifai from 'clarifai';

// components
// import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
// import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';

// beautifications
import Particles from 'react-particles-js';
import './App.css';


const faceDetectAPI = new Clarifai.App({
 apiKey: '58cea05bfcfb45a6a2b3fd08ce01cacb'
});
 

const particlesOptions = {
  "particles": {
    "number": {
      "value": 300,
      "density": {
        "enable": true,
        "value_area": 1262.6362266116362
      }
    },
    
  },
  
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'home',
      // isSignedIn: false,
      placeholder:'Input image url here...',
    }  
  }

  calculateFaceLocation = (data) => {
    if (typeof data.outputs[0].data.regions === 'undefined') {
      return '';
    }

    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;    
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol : clarifaiFace.left_col * width,
      topRow : clarifaiFace.top_row * height,
      rightCol : width - (clarifaiFace.right_col * width),
      bottomRow : height - (clarifaiFace.bottom_row * height)
    }

  }

  displayFaceBox = (box) => {
    this.setState( {box : box} );
  }

  onInputChange = (event) => {
    this.setState( {input : event.target.value} );
  }

  onDetectFace = (event) => {
    this.setState( {imageUrl : this.state.input} );
    faceDetectAPI.models
    .predict(
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));  
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState( {isSignedIn: false} );
    } else if (route === 'home') {
      this.setState( {isSignedIn: true} );
    }    
    this.setState( {route: route} );
  }

  render() {

    // const {  imageUrl, box, route, isSignedIn}  = this.state;
    const {  imageUrl, box, route}  = this.state;

    return (      
      <div className="App">

        <Particles className="particles"
          params={particlesOptions}          
        />
             
        {/*<Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>  */}      
        { 
          route === 'home'
          ?
            <div>              
              <Logo />
              {/*<Rank />*/}
              <ImageLinkForm 
                onInputChange={this.onInputChange} 
                onDetectFace={this.onDetectFace}
                placeholderText={this.state.placeholder}
              />        
              <FaceRecognition imageUrl={imageUrl} box={box} />
            </div>
          :
            ( route === 'signin') 
            ?  
              <Signin onRouteChange={this.onRouteChange}/>
            :
              <Register onRouteChange={this.onRouteChange}/>
        }

      </div>
    );
  }
}

export default App;
