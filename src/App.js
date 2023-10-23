import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import a1_report from './assets/a1_report.pdf';
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
        <div className="A1-pdf">
          <h1>Assignment 1</h1>
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
