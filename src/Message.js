import './App.css';

function Message(props) {
  return (
    <div className="App">
      <header className="App-header">
         My First React App
        <a href={props.pull}>Pull request</a>
      </header>
    </div>
  );
}

export default Message;
