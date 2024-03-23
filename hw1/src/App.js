import Movie from './Movie';
import PersonalPage from './PersonalPage';
import Time from './Time';
import Animal from './Animals';
import './App.css';

function App() {
  return (
    <div className="App">
      <Movie
        name="Back to the future"
        director="Robert Zemeckis"
        year="1985"
        studio="Universal Picture"
        poster="./poster.jpg"
      />

      <PersonalPage
        name="John Doe"
        phone="123-456-7890"
        email="email@gmail.com"
        city="Mykolaiv"
        photo="./person.png"
      />

      <Time />

      <Animal
        species="Dog"
        name="Rex"
        age="3 years"
        description="Friendly and playful"
        image="dog.jpg"
      />
    </div>
  );
}

export default App;
