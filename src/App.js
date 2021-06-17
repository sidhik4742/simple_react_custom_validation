import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {formValidator} from './Validator/FormValidator';

function App() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [error, setError] = useState(null);

  const formSubmitHandler = () => {
    let result = formValidator(fname, lname);
    console.log(result); // this will show the result
    if (result.status) {
      setError(result);
    } else {
      setError(null);
    }
  };

  return (
    <div className="App">
      <form action="/action_page.php">
        <label htmlFor="fname">First name:</label>
        <br />
        <input
          type="text"
          name="fname"
          onChange={(event) => setFname(event.target.value)}
        />
        <p className="errorStyle"> {error ? error.fname : null} </p>
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input
          type="text"
          name="lname"
          onChange={(event) => setLname(event.target.value)}
        />
        <p className="errorStyle"> {error ? error.lname : null} </p>
        <br />
        <br />
        <input
          type="button"
          defaultValue="Submit"
          onClick={formSubmitHandler}
        />
      </form>
    </div>
  );
}

export default App;
