import './App.css';
import React from 'react';
import AttendeesApp from './components/attendees-app/attendees-app.component';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <AttendeesApp />
      </div>
    )
  }
}

export default App;
