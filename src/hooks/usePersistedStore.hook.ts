import { useEffect, useRef, useState } from 'preact/hooks';
import { dataPersist, PersistedCallback } from './dataPersist.helper';
import { isDifferent } from './isDifferent.helper';
import storage from './storage.helper';
import { useEventListener } from './useEventListener.hook';



export function usePersistedStore<T>(key: string, initialValue: T) {
	const globalState = useRef<PersistedCallback | null>(null);

	const [storeState, setStoreState] = useState(() =>
		storage.get(key, initialValue)
	);

	// Automatically update store state on storage events
	useEventListener('storage', (event: StorageEvent) => {
		if (event.key === key && event.newValue) {
			try {
				const newStoreState = JSON.parse(event.newValue);

				if (isDifferent(newStoreState, storeState)) {
					setStoreState(newStoreState);
				}
			} catch (e) {
				console.error(e);
			}
		}
	});

	useEffect(() => {
		// Subscribe to global persistance changes on mount
		globalState.current = dataPersist(key, setStoreState, initialValue);

		return (): void => globalState.current?.unsubscribe();
	}, []);

	useEffect(() => {
		storage.set(key, storeState);

		// Tell everybody else this store state has changed
		// (so they can update via their subscription)
		globalState.current?.emit(storeState);
	}, [storeState]);

	return [storeState, setStoreState];
}
