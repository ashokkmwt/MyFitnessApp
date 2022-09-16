import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import styles from '../src/components/css/index.module.css'


function App() {
  return (
    <div className={styles.container}>
      <Header />
      <hr />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
