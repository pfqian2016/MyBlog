"use strict";

$(document).ready(function () {
  var text = "";
  $(".buttons").click(function (event) {
    var $screen = $("#screen");
    var $target = $(event.target);
    if ($target.is("button")) {
      if ($target.text() === "=") {
        //TODO calculate the value
        var value = eval($screen.val());
        $screen.val(value);
      } else if ($target.text() === "AC") {
        text = "";
        $screen.val(text);
      } else if ($target.text() === "CE") {
        var newText = text.slice(0, text.length - 1);
        $screen.val(newText);
      } else {
        text += $target.text();
        $screen.val(text);
      }
    }
  });
});