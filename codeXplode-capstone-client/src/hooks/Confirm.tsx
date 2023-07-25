import { Dialog } from '@capacitor/dialog';

const showConfirm = async (title: string, message: string) => {
	const { value } = await Dialog.confirm({
		title,
		message
	});

	return value;
};

export default showConfirm;
