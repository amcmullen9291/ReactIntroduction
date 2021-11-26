import { ActionTypes } from '../Constants/Action.types';

export const setFunctionalComponentFacts = (FunctionalFacts) => {
    return {
        type: ActionTypes.SET_FACTS,
        payload: FunctionalFacts
    }
}

export const setClassComponentFacts = (ClassComponentFacts) => {
    return {
        type: ActionTypes.SET_FACTS,
        payload: ClassComponentFacts
    }
}