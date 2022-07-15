import './App.css';
import openModal from './components/openModal';

function App() {
  function handleOpenModal (){
    openModal();
  }
  return (
    <div className="App">
      <button onClick={handleOpenModal}>Open Modal</button>
    </div>
  );
}

export default App;
