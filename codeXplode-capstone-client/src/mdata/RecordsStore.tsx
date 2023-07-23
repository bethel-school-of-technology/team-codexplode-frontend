import { Store } from 'pullstate';

interface RecordsStore {
	records: [];
	center: [];
}
export default RecordsStore;

export const setStore = (records: any) => {
	RecordsStore.update((state) => {
		state.records = records.allRecords;
	});
	RecordsStore.update((state) => {
		state.center = records.center;
	});
};
