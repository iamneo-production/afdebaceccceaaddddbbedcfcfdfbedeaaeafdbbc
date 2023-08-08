import { useState } from 'react';
import './App.css';
import Banner from './components/UI/Banner/Banner'
import Quiz from './components/UI/Banner/Quiz';


function App() {
  const [isStart, setIsStart] = useState(false);

  return (
    <div className="App">
      {!isStart && <Banner setIsStart={setIsStart} isStart={isStart} />}
      {isStart && <Quiz setIsStart={setIsStart} isStart={isStart} />}
    </div>
  );
}

export default App;
