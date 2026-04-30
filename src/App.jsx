import './App.css';
import Recipe from './components/Recipe';
import recipes from "./recipes.json";

const App = () => {
  return (
    <ul className='flex gap-10 justify-center w-full h-screen bg-amber-100'>
      {recipes.map(({ id, title, image, time, servings, calories, difficulty }) => (
        <Recipe id={id} title={title} image={image} time={time} servings={servings} calories={calories} difficulty={difficulty} />
      ))}
    </ul>
  );
};

export default App;