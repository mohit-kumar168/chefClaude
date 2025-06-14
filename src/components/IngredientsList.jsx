import React from 'react'

const IngredientsList = ({length, ingredientListItems, toggleRecipeShown}) => {
  return (
        length > 0 &&
        <section className='flex flex-col items-center justify-center mt-10'>
          <h2 className='text-3xl font-semibold'>Ingredients on hand: </h2>

          <ul className='flex flex-col items-start gap-2 mt-10 list-disc pl-6 max-w-[600px] mx-auto'>
            {ingredientListItems}
          </ul>

          {
            length > 3 && 
            <div className="flex items-center justify-center text-left gap-4 mt-10 p-6 bg-[#F0EFEB] rounded-md max-w-[550px] mx-auto">
                <div className='pr-10'>
                    <h3 className='font-semibold'>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={toggleRecipeShown} className='bg-[#D17557] text-white text-sm font-medium p-2 rounded-md hover:cursor-pointer'>Get a recipe</button>
            </div>
            }
        </section>
  )
}

export default IngredientsList
