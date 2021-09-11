class Stack{
    constructor(){
        this.items=[];
    }
    // add element 
    push(element){
        this.items.push(element)
    }
    // return the last element
    pop(element){
        if(this.items.length==0)
        return "Stack underflow"
        else        
      return this.items.pop()
    }
    peek(){
        // to view the top element in stack
        return this.items[this.items.length-1]
    }
    isEmpty(){
        
        return this.items.length==0
    }
    printStack(){
        let str="";
        for(var i=this.items.length-1;i>=0;i--){
            str+=this.items[i]+" ";
        }
        return str;
    }
}
// application of stack postfixevaluation
function postFix(exp){
    var stack=new Stack()
    for(let i=0;i<exp.length;i++){
        var c=exp[i]
        if(!isNaN(c))
        stack.push(c-'0');
        else{
            var val1=stack.pop()
            var val2=stack.pop()
            if(val1=="Stack Underflow" || val2=="Stack Underflow")
            return "Can't perform"
            switch(c){
                case '+':
                stack.push(val2+val1);
                break;
                case '-':
                stack.push(val2-val1);
                break;
                case '/':
                stack.push(val2/val1);
                break;
                case '*':
                stack.push(val2*val1);
                break;
            }
        }
    }
console.log(stack.pop())
return stack.pop()
}

postFix("235*+8-")
