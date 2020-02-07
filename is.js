class booleanValidation {
   aBoolean(value) {
      return (typeof value === 'boolean');
   }
   
   aGuid(value) {
      if (!this.aPopulatedString(value)) { return false; }
      if (value.length !== 32) { return false; }
      for (let i = 0; i < 32; i++) {
         const characterCode = value.charCodeAt(i);
         if (i === 0) {
            if (!(characterCode >= 65 && characterCode <= 90)) { return false; }
         } else {
            if (!(characterCode >= 48 && characterCode <= 57) && !(characterCode >= 65 && characterCode <= 90)) { return false; }
         }
      }
      return true;
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
   
   aNonnegativeInteger(value) {
      return Number.isInteger(value) && value >= 0;
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
