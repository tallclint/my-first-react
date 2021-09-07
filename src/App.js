import './App.css';

/*
  Component names must be capitalized!
  They can take in an optional "props" object
  They must return something (null, undefined, whatever, JSX)
  No dashes, instead camel case (myNameIsCasey)
  Use curly brackets to "interpolate" ie inject JS code into JSX
*/

function App(props) {
  /* props.name, props.age */
  console.log(props);
  return (
    <div className="App"> {/* document.createElement('div') */}
      <h1>Hello, world!</h1>
    </div>
  );
}

export default App;
