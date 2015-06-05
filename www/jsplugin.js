var JsPlugin = function() {};  
  
JsPlugin.prototype.alert = function() {  
    alert("I am a js plugin");  
};  
  
var jsPlugin = new JsPlugin();  
module.exports = jsPlugin;
