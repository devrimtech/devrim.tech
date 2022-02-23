/* eslint-disable no-empty */
export default {
	get(key: string, initialValue?: any): any {
		if (!('localStorage' in window)) {
			return initialValue;
		}

		try {
			const value = localStorage.getItem(key);

			return value ? JSON.parse(value) : initialValue;
		} catch (e) {
			return initialValue;
		}
	},

	set(key: string, value: any): void {
		if (!('localStorage' in window)) {
			return;
		}

		try {
			localStorage.setItem(key, JSON.stringify(value));
		} catch (e) { }
	}
};
