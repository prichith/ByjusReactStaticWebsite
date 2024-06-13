import './App.css';
import Banner from './components/Banner';
import CardSection from './components/CardSection';
import Footer from './components/Footer';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import Products from './components/Products';
import RatingSection from './components/RatingSection';
import Teacher from './components/Teacher';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <CardSection />
      <IntroSection />
      <RatingSection />
      <Teacher />
      <Products />
      <Footer />
    </>
  );
}

export default App;
