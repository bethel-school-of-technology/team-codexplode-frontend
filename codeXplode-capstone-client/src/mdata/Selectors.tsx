import { createSelector } from 'reselect';

const getState = (state: any) => state;

// Overall Getters
export const fetchRecords = createSelector(
	getState,
	(state: any) => state.records
);

// Precise Getters
export const fetchRecord = (recordId: any) =>
	createSelector(getState, (state: any) => {
		return state.records.filter((record: any) => record.id === recordId)[0];
	});
