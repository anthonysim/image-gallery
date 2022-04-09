import ImageGallery from './ImageGallery';
import NavbarFirst from './NavbarFirst';
import NavbarSecond from './NavbarSecond';
import Footer from './Footer';
import '../styling/App.scss';

function App() {
  return (
    <div>
      <NavbarFirst />
      <div className="container">
        <NavbarSecond />
        <ImageGallery />
        <Footer />
      </div>
    </div>
  );
}

export default App;
