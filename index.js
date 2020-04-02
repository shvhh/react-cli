#!/usr/bin/env node

const userInput = require('./lib/userInput');
const { createClassComponent, createFunctionalComponent } = require('./lib/createClassComponent');
if (userInput._.includes('c')) {
  // c for create component
  if (userInput.n) {
    // for name of component
    if (userInput.c) {
      // component is class based
      createClassComponent(userInput.n);
    } else if (userInput.f) {
      // component is function based
      createFunctionalComponent(userInput.n);
    }
  } else {
    throw Error('enter component name');
  }
}
