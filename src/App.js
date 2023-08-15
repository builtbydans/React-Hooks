import './App.css';
import ReducerCounter from './hooks/useReducer/ReducerCounter';
import StateCounter from './hooks/useState/StateCounter';
import StateName from './hooks/useState/StateName';

function App() {
  return (
    <div className="App">
      {/* <StateCounter /> */}
      {/* <StateName /> */}
      <ReducerCounter />
    </div>
  );
}

export default App;
