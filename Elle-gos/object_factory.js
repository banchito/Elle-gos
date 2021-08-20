let someObject = null;

const objectMutationFactory = {
  /*
  TODO:
   const someObj = {};
   objectMutationFactory.setObject(someObj);
   */
  setObject: (object) => {
    someObject = object;
  },
  /*
  TODO:
   const theObj = objectMutationFactory.getObject();
   console.log(theObj === someObj); // => true
   */
  getObject: () => {
    return someObject
  },
  /*
  TODO:
   objectMutationFactory.addProperty('test key', 'test value');
   console.log(someObj['test key']); // => 'test value'
   */
  addProperty: (name, value) => {
    someObject[name] = value;
    
  },
  /*
  TODO:
   objectMutationFactory.removeProperty('test key');
   console.log(someObj['test key']); // => undefined
   */
  removeProperty: (name) => {
    delete  someObject[name]
  },
  /*
  TODO:
   objectMutationFactory.addProperty('one', 1);
   objectMutationFactory.addProperty('two', 2);
   console.log(someObj); // => { one: 1, two: 2 }
   objectMutationFactory.removeAllProperties();
   console.log(someObj); // => {};
   */
  removeAllProperties: () => {
    const props = Object.keys(someObject)
    props.forEach((prop)=>{
      delete someObject[prop];
    })
    
    // for(let key in someObject){

    // }
  },
  /*
  TODO:
   objectMutationFactory.addProperty('clone key', 'clone');
   console.log(someObj); // => { 'clone key': 'clone' }
   const clonedSomeObj = objectMutationFactory.clone();
   console.log(clonedSomeObj); // => { 'clone key': 'clone' }
   console.log(someObj === clonedSomeObj); // => false
   */
  clone: () => {
    //const newObj = { ...someObject }
    //return newObj
    return { ...someObject }
  },
};

objectMutationFactory.setObject({})
objectMutationFactory.addProperty("name","value")
objectMutationFactory.clone()

// objectMutationFactory.removeProperty('name')

console.log(someObject)
