import './App.css';
import Fexample from './Examoles/Fexample';

import Employeecard from './props_exaples/Topic-1/Task-2/Employeecard';
import Profileimage from './props_exaples/Topic-1/Task-3/Imagescard';
import Buttons from './useState_examples/Buttons';
import Login from './useState_examples/Login';
import TextTracker from './useState_examples/TextTracker';
import Form from './useState_examples/Form';
import Quality from './productsuseState/quality';
import PassoordShow from './productsuseState/PassoordShow';
function App() {
  return (
    <div className="App">
      <Employeecard />
      <Profileimage />
      <Fexample/>
      <Buttons/>
      <TextTracker/>
      <Login/>
      <Form/>
      <Quality/>
      <PassoordShow/>
    </div>
  );
}

export default App;
