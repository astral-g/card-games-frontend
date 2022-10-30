import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form action="/post" method="POST" className="testForm">
          <button>Connected?</button>
        </form>
      </header>
    </div>
  );
}

export default App;
