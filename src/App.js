import './App.css';
import ChartDiv from './components/ChartDiv';
import Filters from './components/Filters';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <Filters />
      <ChartDiv />
      <Table />
    </div>
  );
}

export default App;
