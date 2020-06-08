import React from 'react';
import Navbar from './components/navbar'
import Content from './components/content'
import Splash from './components/splash'
import Contact from './components/contact'
import Team from './components/team'
import Testimonial from './components/testimonial'
import Story from './components/story'
import Footer from './components/footer'
import './App.css';

class App extends React.Component {
  render (){
    return (
      <div className="App">
        <Navbar/>
        <Splash/>
        <Content/>
        <Team/>
        <Story/>
        <Testimonial/>
        <Contact/>
        <Footer/>     
    </div>
    )
  }
}

export default App;
