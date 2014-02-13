if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      return arr.indexOf(item)
    },

    sum : function(arr) {
      var total = arr.reduce(function(a,b) {
        return a + b
      })
      return total
    },

    remove : function(arr, item) {
      for (var i = arr.length; i--;){
        if (arr[i] === item) {
          arr.splice(i, 1)
        }
      }
      return arr
    },

    removeWithoutCopy : function(arr, item) {
      var origArr = arr
      for (var i = arr.length; i--;){
        if (arr[i] === item) {
          arr.splice(i, 1)
        }
      }
      return origArr
    },

    append : function(arr, item) {
      arr.push(item)
      return arr
    },

    truncate : function(arr) {
      arr.pop()
      return arr
    },

    prepend : function(arr, item) {
      arr.unshift(item)
      return arr
    },

    curtail : function(arr) {
      arr.shift()
      return arr
    },

    concat : function(arr1, arr2) {
      var arr = arr1.concat(arr2)
      return arr
    },

    insert : function(arr, item, index) {
      var arrFirstPart = arr.slice(0, index)
        , newArr = arrFirstPart.push(item)
        , arrLastPart = arr.slice(index, arr.length)
        , arr
      arr = arrFirstPart.concat(arrLastPart)
      return arr
    },

    count : function(arr, item) {
      var indices = []
        , idx = arr.lastIndexOf(item)
      while (idx !== -1){
        indices.push(idx)
        idx = (idx > 0 ? arr.lastIndexOf(item, idx - 1) : -1)
      }
      log(indices)

    },

    duplicates : function(arr) {

    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
