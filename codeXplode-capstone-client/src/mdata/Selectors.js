import { createSelector } from 'reselect';

const getState = (state) => state;

// Overall Getters
export const fetchRecords = createSelector(getState, (state) => state.records);

// Precise Getters
export const fetchRecord = (recordId) =>
	createSelector(getState, (state) => {
		return state.records.filter((record) => record.id === recordId)[0];
	});
