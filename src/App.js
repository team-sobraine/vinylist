import Pages from "./pages/Pages";
import { BrowserRouter } from 'react-router-dom';
import ScrollReset from './components/ScrollReset';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollReset>
          <Pages />
        </ScrollReset>
      </BrowserRouter>
    </div>
  );
}

export default App;
