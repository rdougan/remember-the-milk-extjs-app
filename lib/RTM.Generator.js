/**
 * @class RTM.Generator
 * @extends Ext.util.Observable
 * 
 */
RTM.Generator = function() {
  
};

RTM.Generator.prototype = {
  /**
   * @property apiKey
   * @type String
   * The API Key
   */
  apiKey: "51cc9d6e0450350b7e48d73e9c34c96d",
  
  /**
   * The base url for each type of request
   */
  baseUrl: {
    auth: "http://www.rememberthemilk.com/services/auth/?",
    rest: "http://api.rememberthemilk.com/services/rest/?"
  },
  
  /**
   * @property secretKey
   * @type String
   * The secret key given by the API
   */
  secretKey: "0adac875e639bb60",
  
  /**
   * Builds a Url for the RTM API from the passed paramaters.
   * @param {Array} params An array of paramaters to be sent in the Url
   * @param {Object} config Config object
   * @return {String} Request URL
   */
  build: function(params, config) {
    var config = config || {};
    
    // Check if the params is set + is an object (array), if not, then return as we cant
    // do anything
    if (!params && typeof params !== "Object") {
      return;
    };
    
    // Set the default type
    Ext.applyIf(config, {
      type: 'rest'
    });
    
    // Check if the type of url is available
    if (!this.baseUrl[config.type]) {
      return;
    };
    
    // Push the api_key into the array of params
    params.push({
      name:  'api_key',
      value: this.apiKey
    });
    
    // Set the Url we have to start with
    var url = this.baseUrl[config.type];
    
    // generate the api_sig
    var endUrl = this.generateApiSig(params);
    
    // Add the endUrl to the baseUrl
    url = url + endUrl;
    
    return url;
  },
  
  /**
   * Generates an api sig
   * @param {Array} params The paramaters to be added to the url
   * @return {String} The end url
   */
  generateApiSig: function(params) {
    // Sort the array
    params.sort(this.sortObjectArray);
    
    // Loop through each of the array and convert it to a string
    var str = this.secretKey;
    for (var i = 0; i < params.length; i++) {
      str = str + params[i].name;
      str = str + params[i].value;
    };
    
    // Loop through each of the array and convert it to a url
    var endUrl = "";
    for (var i = 0; i < params.length; i++) {
      endUrl = endUrl + params[i].name;
      endUrl = endUrl + "=" + params[i].value + "&";
    };
    
    // Generate a hash (md5) of the str
    var hash = hex_md5(str);
    
    // Return the object with the 2 keys
    return endUrl + "api_sig=" + hash;
  },
  
  /**
   * Sorts the array of objects depending on the objects name key
   */
  sortObjectArray: function(a, b) {
    var nameA = a.name.toLowerCase();
    var nameB = b.name.toLowerCase();
    
    if (nameA < nameB) { return -1; };
    if (nameA > nameB) { return 1; };
    
    return 0;
  }
  
};