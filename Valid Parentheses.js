var isValid = function(s) {
    let brackets = ['(', ')', '{', '}', '[', ']'];
    let stack = [];
    let nextOne = '';
    for (var i in s) {
        let index = brackets.indexof(i);
        if(index == 1) {
            return false;
        }

        if ((index % 2) == 1) {
            
        } else {
            
        }
        
        stack.append(i);
    }
};
