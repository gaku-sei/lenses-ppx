// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");

function get(state, field) {
  if (typeof field === "number") {
    switch (field) {
      case 0 : 
          return state[/* email */0];
      case 1 : 
          return state[/* age */1];
      case 2 : 
          return state[/* hobbies */2];
      
    }
  } else if (field.tag) {
    return Caml_array.caml_array_get(state[/* hobbies */2], field[0]);
  } else {
    try {
      return Caml_array.caml_array_get(state[/* hobbies */2], field[0]);
    }
    catch (exn){
      return undefined;
    }
  }
}

function set(state, field, value) {
  if (typeof field === "number") {
    switch (field) {
      case 0 : 
          return /* record */[
                  /* email */value,
                  /* age */state[/* age */1],
                  /* hobbies */state[/* hobbies */2]
                ];
      case 1 : 
          return /* record */[
                  /* email */state[/* email */0],
                  /* age */value,
                  /* hobbies */state[/* hobbies */2]
                ];
      case 2 : 
          return /* record */[
                  /* email */state[/* email */0],
                  /* age */state[/* age */1],
                  /* hobbies */value
                ];
      
    }
  } else if (field.tag) {
    Caml_array.caml_array_set(state[/* hobbies */2], field[0], value);
    return /* record */[
            /* email */state[/* email */0],
            /* age */state[/* age */1],
            /* hobbies */state[/* hobbies */2]
          ];
  } else if (value !== undefined) {
    Caml_array.caml_array_set(state[/* hobbies */2], field[0], value);
    return /* record */[
            /* email */state[/* email */0],
            /* age */state[/* age */1],
            /* hobbies */state[/* hobbies */2]
          ];
  } else {
    return state;
  }
}

var StateLenses = /* module */[
  /* get */get,
  /* set */set
];

var state_002 = /* hobbies : array */[
  "foo",
  "bar"
];

var state = /* record */[
  /* email */"fakenickels@brazil.gov.br",
  /* age */0,
  state_002
];

console.log("fakenickels@brazil.gov.br");

console.log(0);

console.log(get(state, /* HobbiesAt */Block.__(0, [1])));

exports.StateLenses = StateLenses;
exports.state = state;
/*  Not a pure module */
