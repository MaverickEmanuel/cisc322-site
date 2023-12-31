import a1_report from './assets/a1_report.pdf';
import a2_report from './assets/a2_report.pdf';
import a3_report from './assets/a3_report.pdf';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>
          The Byte Badgers
        </h1>
      </div>
      <div className="Body">
      <div className="A3">
          <h1>Assignment 3</h1>
          <p><a href="https://youtu.be/PxZqHa5IrtE?si=fMov0wPYFxNHnnkh">Presentation Video</a></p>
          <object width="100%" height="100%" data={a3_report} type="application/pdf"> </object>
        </div>
        <div className="A2">
          <h1>Assignment 2</h1>
          <p><a href="https://youtu.be/_5Jki2VroNE?si=lxrYOtVIG1nyNVYK">Presentation Video</a></p>
          <object width="100%" height="100%" data={a2_report} type="application/pdf"> </object>
        </div>
        <div className="A1">
          <h1>Assignment 1</h1>
          <p><a href="https://www.youtube.com/watch?v=I-CpHCy_k7o">Presentation Video</a></p>
          <object width="100%" height="100%" data={a1_report} type="application/pdf"> </object>
        </div>
        <div className="Members">
          <h2>Group Members</h2>
          <p>
            Carter Brisbois<br></br>
            Dan Munteanu<br></br>
            Maverick Emanuel<br></br>
            Nathan Gerryts<br></br>
            Oliver Dantzer<br></br>
            Trayden Boucher<br></br>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
