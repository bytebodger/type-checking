class booleanValidation {
   aBoolean = (value = false) => {
      if (typeof value === 'boolean')
         return true;
      console.error(value, 'is not a Boolean');
      return false;
   };
   
   anArray = (value = []) => {
      if (Array.isArray(value))
         return true;
      console.error(value, 'is not an array');
      return false;
   };
   
   anInteger = (value = 0) => {
      if (Number.isInteger(value))
         return true;
      console.error(value, 'is not an integer');
      return false;
   };
   
   anObject = (value = {}) => {
      if (typeof value === 'object' && !Array.isArray(value) && value !== null)
         return true;
      console.error(value, 'is not an object');
   };
   
   aNonNegativeInteger = (value = -1) => {
      return this.anInteger(value) && value >= 0;
   };
   
   aNumber = (value = 0) => {
      if (typeof value === 'number')
         return true;
      console.error(value, 'is not a number');
      return false;
   };
   
   aPopulatedArray = (value = []) => {
      if (Array.isArray(value) && value.length > 0)
         return true;
      console.error(value, 'is not a populated array');
      return false;
   };
   
   aPopulatedObject = (value = {}) => {
      if (this.nullOrUndefined(value)) {
         console.error(value, 'is not a populated object');
         return false;
      }
      if (typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length > 0)
         return true;
      console.error(value, 'is not a populated object');
      return false;
   };
   
   aPopulatedString = (value = '') => {
      if (typeof value === 'string' && value.trim() !== '')
         return true;
      console.error(value, 'is not a populated string');
      return false;
   };
   
   aPositiveInteger = (value = -1) => {
      return this.anInteger(value) && value > 0;
   };
   
   aString = (value = '') => {
      if (typeof value === 'string')
         return true;
      console.error(value, 'is not a string');
      return false;
   };
   
   null = variable => variable === null;
   
   nullOrUndefined = (variable) => (variable === undefined || variable === null);
   
   undefined = variable => variable === undefined;
}

const is = new booleanValidation();
export default is;
