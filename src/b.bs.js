// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Fs = require("fs");
var Path = require("path");

Fs.readFile("./bsconfig.json", "utf8", (function (error, data) {
        if (error == null) {
          console.log(data);
        } else {
          console.error("config file errro: ", error);
        }
        
      }));

var completedTodos = Path.resolve(__dirname, "done.txt");

exports.completedTodos = completedTodos;
/*  Not a pure module */