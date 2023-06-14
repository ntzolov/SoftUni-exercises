function extensibleObject() {
  const myObj = {
    extend(obj) {
      for (const key in obj) {
        if (typeof obj[key] === 'function') {
          myObj.__proto__[key] = obj[key];
        } else {
          myObj[key] = obj[key];
        }
      }
    },
  };

  return myObj;
}

const myObj = extensibleObject();

const template = {
  extensionMethod: function () {},
  extensionProperty: 'someString',
};

myObj.extend(template);

console.log(myObj.__proto__);
