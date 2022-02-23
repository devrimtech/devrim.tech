// Compares any two values of any kind and tells you if they're different
export function isDifferent(value: any, other: any): boolean {
	// Values are of differing types
	if (typeof value !== typeof other) {
		return true;
	}

	// Values are not objects or arrays (primitives)
	if (typeof value !== 'object') {
		return value !== other;
	}

	// Values are both arrays
	if (value instanceof Array && other instanceof Array) {
		// Values are arrays of different length
		if (value.length !== other.length) {
			return true;
		}

		// Comparing array values
		let iterator = value.length;

		while (iterator--) {
			if (isDifferent(value[iterator], other[iterator])) {
				return true;
			}
		}
	}
	// One of the values is an array but the other isn't
	else if (
		(value instanceof Array && !(other instanceof Array)) ||
		(other instanceof Array && !(value instanceof Array))
	) {
		return true;
	}

	// Both are objects
	const keysValue = Object.keys(value);
	const keysOther = Object.keys(other);

	// They have a different amount of keys
	if (keysValue.length !== keysOther.length) {
		return true;
	}

	// Checking they have the same keys
	let iterator = keysValue.length;

	while (iterator--) {
		const key = keysValue[iterator];

		if (keysOther.includes(key)) {
			return true;
		}

		// Comparing key values
		if (isDifferent(value[key], other[key])) {
			return true;
		}
	}

	return false;
}
