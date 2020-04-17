export default class is {
   /**
    * @param {boolean} value
    * @param {boolean} suppressError
    * @returns {boolean}
    */
   static aBoolean = (value = false, suppressError = false) => {
      if (typeof value === 'boolean')
         return true;
      if (!suppressError)
         console.error(value, 'is not a Boolean');
      return false;
   };
   
   /**
    * @param {function} value
    * @param {boolean} suppressError
    * @returns {boolean}
    */
   static aFunction = (value = () => {}, suppressError = false) => {
      if (typeof value === 'function')
         return true;
      if (!suppressError)
         console.error(value, 'is not a function');
      return false;
   };
   
   /**
    * @param {[]} value
    * @param {boolean} suppressError
    * @returns {boolean}
    */
   static anArray = (value = [], suppressError = false) => {
      if (Array.isArray(value))
         return true;
      if (!suppressError)
         console.error(value, 'is not an array');
      return false;
   };
   
   /**
    * @param {number} value
    * @param {boolean} suppressError
    * @returns {boolean}
    */
   static anInteger = (value = 0, suppressError = false) => {
      if (Number.isInteger(value))
         return true;
      if (!suppressError)
         console.error(value, 'is not an integer');
      return false;
   };
   
   /**
    * @param {Object} value
    * @param {boolean} suppressError
    * @returns {boolean}
    */
   static anObject = (value = {}, suppressError = false) => {
      if (typeof value === 'object' && !Array.isArray(value) && value !== null)
         return true;
      if (!suppressError)
         console.error(value, 'is not an object');
      return false;
   };
   
   /**
    * @param {number} value
    * @param {boolean} suppressError
    * @returns {boolean}
    */
   static aNonNegativeInteger = (value = -1, suppressError = false) => {
      return this.anInteger(value, suppressError) && value >= 0;
   };
   
   /**
    * @param {number} value
    * @param {boolean} suppressError
    * @returns {boolean}
    */
   static aNumber = (value = 0, suppressError = false) => {
      if (typeof value === 'number')
         return true;
      if (!suppressError)
         console.error(value, 'is not a number');
      return false;
   };
   
   /**
    * @param {[]} value
    * @param {boolean} suppressError
    * @returns {boolean}
    */
   static aPopulatedArray = (value = [], suppressError = false) => {
      if (Array.isArray(value) && value.length > 0)
         return true;
      if (!suppressError)
         console.error(value, 'is not a populated array');
      return false;
   };
   
   /**
    * @param {Object} value
    * @param {boolean} suppressError
    * @returns {boolean}
    */
   static aPopulatedObject = (value = {}, suppressError = false) => {
      if (this.nullOrUndefined(value)) {
         if (!suppressError)
            console.error(value, 'is not a populated object');
         return false;
      }
      if (typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length > 0)
         return true;
      if (!suppressError)
         console.error(value, 'is not a populated object');
      return false;
   };
   
   /**
    * @param {string} value
    * @param {boolean} suppressError
    * @returns {boolean}
    */
   static aPopulatedString = (value = '', suppressError = false) => {
      if (typeof value === 'string' && value.trim() !== '')
         return true;
      if (!suppressError)
         console.error(value, 'is not a populated string');
      return false;
   };
   
   /**
    * @param {number} value
    * @param {boolean} suppressError
    * @returns {boolean}
    */
   static aPositiveInteger = (value = -1, suppressError = false) => {
      return this.anInteger(value, suppressError) && value > 0;
   };
   
   /**
    * @param {string} value
    * @param {boolean} suppressError
    * @returns {boolean}
    */
   static aString = (value = '', suppressError = false) => {
      if (typeof value === 'string')
         return true;
      if (!suppressError)
         console.error(value, 'is not a string');
      return false;
   };
   
   /**
    * @param {*} variable
    * @returns {boolean}
    */
   static null = variable => variable === null;
   
   /**
    * @param {*} variable
    * @returns {boolean}
    */
   static nullOrUndefined = variable => (variable === undefined || variable === null);
   
   /**
    * @param {*} variable
    * @returns {boolean}
    */
   static undefined = variable => variable === undefined;
}
