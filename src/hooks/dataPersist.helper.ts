import { isDifferent } from './isDifferent.helper';
const persistance: {
	[persistanceKey: string]: { callbacks: Function[]; value: any };
} = {};

export interface PersistedCallback {
	unsubscribe: () => void;
	emit: (value: any) => void;
}

export function dataPersist(
	key: string,
	callback: Function,
	initialValue?: any
): PersistedCallback {
	if (!persistance[key]) {
		persistance[key] = { callbacks: [], value: initialValue };
	}

	persistance[key].callbacks.push(callback);

	return {
		unsubscribe(): void {
			const callbacks = persistance[key].callbacks;
			const index = callbacks.indexOf(callback);

			if (index !== -1) {
				callbacks.splice(index, 1);
			}
		},

		emit(value: any): void {
			if (isDifferent(value, persistance[key].value)) {
				persistance[key].value = value;

				let iterator = persistance[key].callbacks.length;

				while (iterator--) {
					const cb = persistance[key].callbacks[iterator];

					if (cb !== callback) {
						cb(value);
					}
				}
			}
		}
	};
}
