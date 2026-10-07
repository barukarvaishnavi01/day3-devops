import { useState } from "react";
import "./App.css";

function App() {
  const [status, setStatus] = useState("Ready");

  const testApp = () => {
    setStatus("Application is working 🚀");

    setTimeout(() => {
      setStatus("Ready");
    }, 3000);
  };

  return (
    <div className="app">
      <header className="navbar">
        <h2>DevOps Demo</h2>
        <span className="badge">React</span>
      </header>

      <main className="container">
        <section className="hero">
          <p className="label">AWS EC2 PROJECT</p>

          <h1>
            My First <span>DevOps App</span>
          </h1>

          <p className="description">
            A simple React application running on an AWS EC2 instance using
            Docker.
          </p>

          <button onClick={testApp}>Test Application</button>

          <p className="message">{status}</p>
        </section>

        <section className="cards">
          <div className="card">
            <div className="icon">⚛️</div>
            <h3>Frontend</h3>
            <p>React</p>
          </div>

          <div className="card">
            <div className="icon">🐳</div>
            <h3>Container</h3>
            <p>Docker</p>
          </div>

          <div className="card">
            <div className="icon">☁️</div>
            <h3>Server</h3>
            <p>AWS EC2</p>
          </div>
        </section>

        <section className="info">
          <h2>Deployment Information</h2>

          <div className="info-row">
            <span>Application</span>
            <strong>React Demo</strong>
          </div>

          <div className="info-row">
            <span>Environment</span>
            <strong>EC2</strong>
          </div>

          <div className="info-row">
            <span>Container</span>
            <strong>Docker</strong>
          </div>

          <div className="info-row">
            <span>Status</span>
            <strong className="running">● Running</strong>
          </div>
        </section>
      </main>

      <footer>
        <p>Learning DevOps with React + Docker + AWS 🚀</p>
      </footer>
    </div>
  );
}

export default App;
