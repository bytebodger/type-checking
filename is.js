class booleanValidation {
	aBoolean(value) {
		return (typeof value === 'boolean');
	}
	
	anArray(value) {
		return Array.isArray(value);
	}
	
	anInteger(value) {
		return Number.isInteger(value);
	}
	
	anObject(value) {
		return (typeof value === 'object' && !Array.isArray(value) && value !== null);
	}
	
	aNumber(value) {
		return typeof value === 'number';
	}
	
	aPopulatedArray(value) {
		if (!Array.isArray(value)) { return false; }
		return !!value.length;
	}
	
	aPopulatedObject(value) {
		if (this.nullOrUndefined(value)) { return false; }
		return (typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length > 0);
	}
	
	aPopulatedString(value) {
		return (typeof value === 'string' && value.trim() !== '');
	}
	
	aString(value) {
		return (typeof value === 'string');
	}
	
	null(variable) {
		return variable === null;
	}
	
	nullOrUndefined(variable) {
		return (variable === undefined || variable === null);
	}
	
	undefined(variable) {
		return variable === undefined;
	}
}

const is = new booleanValidation();
export default is;
