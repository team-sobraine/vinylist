import Pages from "./pages/Pages";
import Navbar from "./components/Navbar";
import { BrowserRouter } from 'react-router-dom';
import ScrollReset from './components/ScrollReset';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollReset>
          <Navbar />
          <Pages />
        </ScrollReset>
      </BrowserRouter>
    </div>
  );
}

export default App;
