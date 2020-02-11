
import { 
    createStore
} from 'redux';


{
    movieCount: 0
}

const ADD_TO_MOVIE_COUNT = 'ADD_TO_MOVIE_COUNT'
{
    type: ADD_TO_MOVIE_COUNT 
}

{
    burritosEaten: 0
}

const ADD_TO_BURRISTOS_EATEN = 'ADD_TO_BURRISTOS_EATEN'
{
    type: ADD_TO_BURRISTOS_EATEN
}

{
    favoriteSong: "happy birthday"
}


const UPDATE_SONG = 'UPDATE_SONG'
{
    type: UPDATE_SONG,
    payload: {
        
        songName: 'unhappy birthday',
        updateDate: '2020-02-11'
    }
}

{
    coffees: 0
}

const INCREMENT_COFFEE_COUNT = 'INCREMENT_COFFEE_COUNT'
{
    type: INCREMENT_COFFEE_COUNT
}


const defaultLunchState = {
    lunch: 'burrito'
}
 
const UPDATE_LUNCH_ITEM = 'UPDATE_LUNCH_ITEM'

// example action that modifies lunch item
// {
//     type: UPDATE_LUNCH_ITEM,
//     payload: {
//         item_name: 'hot dog'
//     }
// }

function lunch(state=defaultLunchState, action) {
    const newState = { ...state };
    switch (action, type) {
        case UPDATE_LUNCH_ITEM:
            newState.lunch = action.payload.itemNamr;
            break;
        default:
            console.log('Did not match');
            break;
    }

    return newState;
}



