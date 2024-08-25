import logo from './logo.svg';
import './App.css';


function App() {

  const title = 'Welcome to the new blog';
  const likes = 50 ;

  return (
    <div className="App">
      <div className="conten">
        <h1>App Component</h1>
        <h1 className="title">{title}</h1>
        <p>Number of likes: {likes}</p>
      </div>
    </div>
  );
}

export default App;
