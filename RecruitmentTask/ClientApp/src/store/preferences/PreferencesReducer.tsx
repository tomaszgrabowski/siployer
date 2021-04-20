import { SortBy } from '../../../models/SortBy';
import { PreferencesActions, PreferencesActionTypes } from './PreferencesActions';

export type PreferencesState = {
    sortBy: SortBy
}

const initialPreferencesState: PreferencesState = {
    sortBy: {
        type: 'city',
        asc: true
    }
};

export const preferencesReducer = ( state: PreferencesState = initialPreferencesState, action: PreferencesActions ) => {
    switch ( action.type ) {
        case PreferencesActionTypes.SET_SORT_BY:
            const calculateOrder = () => {
                if ( action.payload === state.sortBy.type ) {
                    return !state.sortBy.asc;
                }
                return true;
            };
            return {
                ...state,
                sortBy: {
                    type: action.payload,
                    asc: calculateOrder()
                }
            };
        default:
            return state;
    }
};
