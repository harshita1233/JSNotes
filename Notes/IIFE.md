1. when to use
2. how is relevant in react
3. Why do we need it.
4. Show converting a normal funct to IFFE
---
IIFE: Immediately Invoked Function Expression
Syntax: 
<pre>
(function(){
    //type your logic
})();
</pre>
It is a self executing function expression and wraps the inside members to scope.Those wrapping paranthesis are actually what make our function,internally be considered an expression.. Otherwise the function declaration would be invalid and will throw error as *function expression requires a name*
Function declarations require a name, while function expressions do not require it.
<pre>
(function(){
    console.log('hello IIFE') //hello IIFE
})();</pre>
As soon as you write the above function, it will execute by itself and will log the desired output.Also, it prevent from polluting the global scope.

***Closure and IIFE***
<pre>var sum = (function(){
    var foo = 20;
    function bar(){
        foo = foo +10;
        console.log(foo);
    }
    return bar
})();
sum() //30
sum() //40
</pre>

In the above example, sum is a function expression whose value is IIFE. So sum is assigned the returned value of self executed function or the function bar is being assigned to the sum.
