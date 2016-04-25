module.exports = {
  '<0': function(context) {
    var stack = context.stack;
    var el = stack.pop();
    var list = stack.pop();
    list[0] = el;
    stack.push(list);
  },
  '<1': function(context) {
    var stack = context.stack;
    var el = stack.pop();
    var list = stack.pop();
    list[1] = el;
    stack.push(list);
  },
  '0>': function(context) {
    var stack = context.stack;
    var list = stack.pop();
    stack.push(list[0]);
  },
  '1>': function(context) {
    var stack = context.stack;
    var list = stack.pop();
    stack.push(list[1]);
  }
};
