import React from 'react'
import IngredientsList from './IngredientsList';
import ClaudeRecipe from './ClaudeRecipe';
import { getRecipe } from '../ai.js';

const Main = () => {

  const [ingredients, setIngredients] = React.useState([]);
  const [recipeShown, setRecipeShown] = React.useState(false);
  const [recipe, setRecipe] = React.useState(null);

  async function toggleRecipeShown() {
    if(!recipeShown){
      const response = await getRecipe(ingredients);
      setRecipe(response);
    }
    setRecipeShown(prev => !prev);
  }

  const ingredientListItems = ingredients.map((ingredient, idx) => {
    return (
      <li key={idx} className='font-medium'>{ingredient}</li>
    )
  });

  function addIngredient(formData){
    const newIngredient = formData.get('ingredients');
    
    if (newIngredient) {
      setIngredients(prev => [...prev, newIngredient]);
    }
  }

  return (
    <main>
      <form action={addIngredient} className='flex items-center justify-center gap-2 pt-20'>
        <input 
          type="text"
          placeholder='e.g. oregano'
          aria-label='Add ingredients'
          name='ingredients'
          id='ingredients'
          className='border-2 border-gray-300 rounded-md p-2 min-w-[300px] max-w-[600px] w-full'
        />
        <button type='submit' className='bg-[#141413] text-white border rounded-md p-2.5 text-sm hover:cursor-pointer'><span className='mr-1'>+</span>Add Ingredients</button>
      </form>

      

      <IngredientsList length={ingredients.length} ingredientListItems={ingredientListItems} toggleRecipeShown={toggleRecipeShown}/>

      {recipeShown && <ClaudeRecipe recipe={recipe} />}
    </main>
  )
}

export default Main
