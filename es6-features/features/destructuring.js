// var array = ['first', 'second', 'third'];
// var [a, , c] = array;
//
// console.log(a, c);

var todo = {
  description: 'watch new es6 section',
  completed: false
};
//
// // var {description} = todo;
// // console.log(description);
//
// var {description: message, completed} = todo;
// console.log(message);
// console.log(completed);

function getTodoStatus ({completed}) {
  if (typeof completed === 'boolean') {
    return [`Todo is ${completed ? '' : 'not '}completed.`]
  } else {
    return [undefined, {error: 'INVALID_TODO_ITEM'}]
  }
}

var [res, err] = getTodoStatus(todo);

if (err) {
  console.log(err.error);
} else {
  console.log(res);
}
