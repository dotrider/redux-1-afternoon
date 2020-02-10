import { createStore } from 'redux';

const initialState = {
        name: '',
        category: '',
        firstName: '',
        lastName: '',
        ingredients: [],
        instructions: [],
        recipes: []
}



export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const UPDATE_FIRSTNAME= 'UPDATE_FIRSTNAME';
export const UPDATE_LASTNAME= 'UPDATE_LASTNAME';
export const ADD_INGREDIENT= 'UPDATE_INGRIDIENTS';
export const ADD_INSTRUCTIONS= 'ADD_INSTRUCTIONS';
export const ADD_RECIPE= 'ADD_RECIPE';


function reducer (state = initialState, action){
    const{type, payload} = action;

    switch(type){
        case UPDATE_NAME:
            return{
                ...state,
                name: payload
            }
        case UPDATE_CATEGORY:
            return{
                ...state,
                category: payload
            }
        case UPDATE_FIRSTNAME:
            return{
                ...state,
                firstName: payload
            }
        case UPDATE_LASTNAME:
            return{
                ...state,
                lastName: payload
            }
        case ADD_INGREDIENT:
            const newIngredients = [...state.ingredients, payload]
            return{
                ...state,
                ingredients: newIngredients
            }
        case ADD_INSTRUCTIONS:
            const newIntructions = [...state.instructions, payload] 
            return{
                ...state,
                instructions: newIntructions
            }
        case ADD_RECIPE:
            const {name, category, firstName, lastName, ingredients, instructions} = state;

            const recipie = {
            name,
            category,
            firstName,
            lastName,
            ingredients,
            instructions,
            }
            const newRecipes = [...state.recipes, recipie];
            return { ...state, recipes: newRecipes}

        default: return state;
    }

}

export default createStore(reducer);
