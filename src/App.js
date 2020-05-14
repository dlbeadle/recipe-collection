// App.js
import React from 'react';

class App extends React.Component {
  state = {
    isAddRecipeFormDisplayed: false,
    recipes: [],
    newRecipeName: "",
    newRecipeInstructions: ""
  }

  toggleAddRecipeForm = () => {
    this.setState({isAddRecipeFormDisplayed: !this.state.isAddRecipeFormDisplayed})
  }

  submitRecipe = (event) => {
    event.preventDefault()
    let currentRecipes = this.state.recipes

    currentRecipes.push(
      {
        name: this.state.newRecipeName,
        instructions: this.state.newRecipeInstructions
      }
    )

    this.setState({recipes: currentRecipes})
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
  
    this.setState({[name]: target.value});
  }

  render(){
    const addNewRecipeForm = (
      <form id="recipe-form" onSubmit={this.submitRecipe}>
        <label htmlFor="newRecipeName">Recipe name: </label>
        <input type="text" name="newRecipeName" onChange={this.handleChange} value={this.state.newRecipeName} />
        <label htmlFor="newRecipeInstructions">Instructions:</label>
        <textarea name="newRecipeInstructions" 
                  placeholder="write recipe instructions here..." 
                  onChange={this.handleChange} 
                  value={this.state.newRecipeInstructions} />
        <input type="submit" />
      </form>
    )

  return (
    <div className="App">
      <h1 className="App-header">My Recipes</h1>
      {
        this.state.isAddRecipeFormDisplayed 
        ? addNewRecipeForm 
        : <button id="add-recipe" onClick={this.toggleAddRecipeForm}>Add Recipe</button>
      }
      {
        this.state.recipes.length > 0 ?
        <ul>
          {/* {this.state.recipes} */}
          {/* {console.log(this.state.recipes)} */}
          <li key>{ this.state.recipes[0].name }</li>
        </ul> :
        <p>There are no recipes to list.</p>
      }
    </div>
  )
  }
}

export default App;
