
import cuid from 'cuid';

export const cuidFn = cuid;

const defState = { restaurants: [], reviews: [] }

export default function manageRestaurants(state = defState, action) {
    switch(action.type){
        case 'ADD_RESTAURANT':
            const restaurant = { id: cuid(), text: action.text }
            return {...state,
                 restaurants: state.restaurants.concat(restaurant) }

        case 'DELETE_RESTAURANT':
            const restaurants =  state.restaurants.filter(restaurant => restaurant.id !== action.id) 
            return {...state, restaurants}
            
        case 'ADD_REVIEW':
            const review = { text: action.review.text, restaurantId: action.review.restaurantId, id: cuidFn() };
            return { ...state,
                reviews: [...state.reviews, review]
            }

        case 'DELETE_REVIEW':
            const reviews = state.reviews.filter(review => review.id !== action.id);
            return {...state, reviews }

        default:
            return state
    }
}