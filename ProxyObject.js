// Target object
const target = {
    name: "John",
    age: 30,
  };
  
  // Handler object containing traps (methods)
  const handler = {
    get: function (target, property) {
      // Intercepting property access
      console.log(`Getting property "${property}"`);
      return target[property];
    },
    set: function (target, property, value) {
      // Intercepting property assignment
      console.log(`Setting property "${property}" to ${value}`);
      target[property] = value;
    },
  };
  
  // Creating a Proxy
  const proxy = new Proxy(target, handler);
  
  // Accessing properties through the Proxy
  console.log(proxy.name);  // Logs: Getting property "name"     John
  proxy.age = 31;           // Logs: Setting property "age" to 31
  