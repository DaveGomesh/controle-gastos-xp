import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App />
</React.StrictMode>

)



/* import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


import React from 'react';
import { Link } from 'react-router-dom';
import FormDespesa from './FormDespesa';
import Historico from './Historico';

const App = () => {
  return (
    <div>
      <h1>Central Page</h1>
      <button>
        <Link to="/form-despesa">Form Despesa</Link>
      </button>
      <button>
        <Link to="/historico">Historico</Link>
      </button>
      <Route path="/form-despesa" component={FormDespesa} />
      <Route path="/historico" component={Historico} />
    </div>
  );
};

export default App;
 */
