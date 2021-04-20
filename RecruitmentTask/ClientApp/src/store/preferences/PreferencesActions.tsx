import { Action } from '../../../models/Action';
import { SortableHeader } from '../../../models/SortBy';

export enum PreferencesActionTypes {
    SET_SORT_BY = `[Preferences] Set Sort By`
}

export const setSortBy = ( type: SortableHeader ): Action => ({
    type: PreferencesActionTypes.SET_SORT_BY as PreferencesActionTypes.SET_SORT_BY,
    payload: type
});

export type PreferencesActions = ReturnType<typeof setSortBy>;
