import './App.css';
import Header from './components/Header';
import TinderCards from './components/TinderCards';
import SwipeButtons from './components/SwipeButtons';

function App() {
  return (
    // BEM - naming convention
    <div className="app">
      {/* Header */}
      <Header/>
      {/* TinderCards */}
      <TinderCards/>
      {/* SwipeButtons */}
      <SwipeButtons/>
    </div>
  );
}

export default App;
