'use strict'
function ConvertNumbers(inputValue) {
  return inputValue
    .replace(/[\u0660-\u0669]/g, function (number) {
      return number.charCodeAt(0) - 1632
    })
    .replace(/[\u06F0-\u06F9]/g, function (number) {
      return number.charCodeAt(0) - 1776
    })
}

module.exports = ConvertNumbers