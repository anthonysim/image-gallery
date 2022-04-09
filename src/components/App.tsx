import NavbarFirst from './NavbarFirst';
import NavbarSecond from './NavbarSecond';
import '../styling/App.scss';

function App() {
  return (
    <div>
      <NavbarFirst />
      <div className="container">
        <NavbarSecond />
      </div>
    </div>
  );
}

export default App;
