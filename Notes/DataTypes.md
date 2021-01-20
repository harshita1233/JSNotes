1. What are data types in JS?
2. What are the differences between them?
3. How to convert from one form to another?
4. Why do we get undefined in console, while declaring variable.
5. type of Nan, null, undefined.
6. Comparing the data types
7. let const var, scoping
8. truthy falsy

---
Before diving deep into the topic, it is necessary to understand that even though we dont declare the type like in any other strongly typed language, `int x = 10` , that does not interpret that JS is untyped.
JS is both dynamically typed and weekly typed.

In **dynamic type**, once you run your code, the compiler check the variable, its value and then decides what is its type.

<pre>
var a;
typeof(a) //undefined
var b = 1;
typeof(b); //number
</pre>

In *weakly typed*,when code is interpreted,if you try to add `1+'2'`, using + operator. it will coerces your number into string and concatenates both together resulting in `12`.
<pre>
"" + 1 + 10 + 2 // "1102" 
</pre>
However, if you try to use <code>-</code> operator, string gets converted back into number and numeric subtraction occurs.
<pre>"1102" - 5 // 1097</pre>

Therefore, one thing we can conclude is:  
<b>string + number = concatenated string</b>  
<b>number + number = the sum of both numbers;</b>  
<b>string - number = the difference between (coerced string) and the number</b>  
***
Let's dive deep into data types.  
### 1. Primitives
1.1 Boolean- true or false  
1.2 null - it refers to invalid address or nonexistant object.  
1.3 Number - int,float.  
1.4 String- Array of characters  
1.5 Symbol  
1.6 undefined- unassigned value to the variable.  
1.7 BigInt - to represent integer value larger than (2^53-1) or lesser than -(-2^53-1) for negatives.  

## Explicit type conversion
1. to String
console.log(String(4));
2. to Boolean
console.log(Boolean(5))
## Implicit Conversion(coercion- automatic conversion by JS)
<pre>
console.log('1' * '2') // 2
</pre>
In the above example, multiplication operator coerced the type
of string to number.
-----

JavaScript’s primitive types are immutable, which means that they can’t be changed. The primitive types contain values that are fixed once they’re defined.
Apart from the above types everything else in JS is object.

1. Number-
They are of two types, number and BigInt.The largest and smallest available values for a number are Infinity and -Infinity respectively.The number type represents both integer and floating point numbers.