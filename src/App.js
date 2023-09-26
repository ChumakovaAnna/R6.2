import './App.css';
import Form from './components/Form';
import Note from './components/Note';
import {ListNotes} from './components/ListNotes';

function App() {
  return (
    <div className="App">
      <ListNotes></ListNotes>
      <Form></Form>
    </div>
  );
}

export default App;
