var var1 = "true";
var var2 = true;
var var3 = 2;

function toggle_boolean (variable) {
  if (typeof variable === 'boolean') {
    return !variable;
  } else {
    return "Not a boolean.";
  }
}

console.log("Variable 1 (String) result: " + toggle_boolean(var1))
console.log("Variable 2 (Boolean) result: " + toggle_boolean(var2))
console.log("Variable 3 (Int) result: " + toggle_boolean(var3))
