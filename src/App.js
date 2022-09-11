import logo from './logo.svg';
import './App.css';

function App() {
  const title = 'Welcome to new blog'
  const likes=50;
  const person={name: 'yoshi', age:30};
  const link="https://google.com/";

  return (
    <div className="App">
      <div className="content">
        <h1> {title}</h1>
        <p>Liked {likes}</p>

        <p>{10}</p>
        <p>{"hello, ninjas"}</p>
        <p>{[1,2,3,4,5,6]}</p>
        <p>{Math.random()*10}</p>

        <a href={link}>Google site</a>
      </div>
    </div>
  );
}

export default App;
