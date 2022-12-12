import vegeta from './img/vegeta-despechao.gif';
import dancingVegeku from './img/dancing-goku.gif';
import seniorGoku from './img/senor-goku.gif';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={vegeta} className="App-logo" alt="logo" />
        <p>
          A Menopausic Webpage.
        </p>
        <a
          className="App-link"
          href="https://www.mayoclinic.org/es-es/diseases-conditions/menopause/symptoms-causes/syc-20353397"
          target="_blank"
          rel="noopener noreferrer"
        >
          Una página para menopausics
        </a>
        <img className="mt-3" src={dancingVegeku} alt="logo" />
        <img className="mt-3" src={seniorGoku} alt="logo" />
        <iframe
            className="mt-3"
            width="560" height="315" src="https://www.youtube.com/embed/tUP81EOy4Ts" title="El señor Vegeta"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
      </header>
    </div>
  );
}

export default App;
