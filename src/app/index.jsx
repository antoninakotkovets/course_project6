
import './index.css';

import Providers from './Providers'
import Pages from '../pages';
import AppBar from '../shared/ui/AppBar';


function App() {
  return (
    <Providers>
      <div className="App">
      
        <AppBar/>
        <Pages/>

      </div>
    </Providers>
  );
}

export default App;
