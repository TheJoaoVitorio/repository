import './App.css';
import Header from './components/Header';
import MainContent from './components/Main';
import CardSection from './components/CardSection';
import CardMain from './components/CardMain';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainContent></MainContent>
      <CardMain></CardMain>
      <CardSection></CardSection>
    </div>
  );
}

export default App;
