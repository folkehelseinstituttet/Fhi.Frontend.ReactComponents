/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable import/no-extraneous-dependencies */
const nodeSassVariables = require('node-sass-variables');
const camelCase = require('lodash.camelcase');

const path = require('path');

const variables = nodeSassVariables.getSassVariablesSync(path.resolve('node_modules/@folkehelseinstituttet/style/src/core/_core.variables.scss'));

const jsVariables = {};

const getSassVariableValue = (variable) => {
  let value;
  switch (variable.type) {
    case ('SassNumber'):
      value = `${variable.value}${variable.unit}`;
      break;
    case ('SassColor'):
      value = variable.value.hex;
      break;
    case ('SassString'):
      value = variable.value;
      break;
    case ('SassList'):
      value = variable.value.map((val) => getSassVariableValue(val)).join(',');
      break;
    default:
      value = variable.value;
      break;
  }
  return value;
};

for (const prop in variables) {
  jsVariables[camelCase(prop)] = getSassVariableValue(variables[prop]);
}

// Console.log sends json back to npm script for saving in file
console.log(JSON.stringify(jsVariables));
