1. Why do we need closure
2. When to use closure


In the advanced concepts of JS, one that plays a crucial role is **closures**.
>In technical words, closure is when the function is able to remember its lexical scope even when that function is executing outside its lexical scope.

In layman terms, when we see a function written inside another function, than the inside function has access to variables in the outer function, thus creating closure. Accessing variables outside your immediate lexical scope creates closure, in simpler terms, closures are just variables coming from higher scope.
<pre>function sayHello(name){
    var hello=`Hello`
    console.log(hello) //hello
    var log = function(){
        console.log(`Welcome to inner function, ${hello} ${name}`) //Welcome to inner function, Hello Harshita
    }
    return log
}
let myClosure = sayHello('Harshita')
myClosure()</pre>
In the above example, we have a function sayHello() which declares a local variable hello and a function variable log. Out function sayHello() returns the function expression log. Now the variable myClosure points to the log() from sayHello().When we called myClosure() function it invokes the log() function from sayHello() function, providing us the accurate result. Meaning that the log() i.e inner function remembers the value of the hello variable declared in outside function, sayHello(). This is called closure.
>The functions defined in the closure remembers the environment in which it was created.
Now, when and how are we even supposed to use it? To answer this question we will see the below example-
We are trying to achieve the functionality to get the number of time the user has liked a post.
<pre>let likeCountPost = 0; // to keep track of likes, whenever like counts gets increased,irrespective of how many times called declared globally 
    function getLikesOnPost(){ //function to update the likes
        likeCountPost += 1;
    }
    getLikesOnPost();
    console.log("Like Count is", likeCountPost) //1
    getLikesOnPost();
    console.log("Like Count is", likeCountPost) //2
</pre>
In the above example we have created a global variable likeCountPost so that we could retain the value of how many time the post has been liked by the user
Now, since `likeCountPost` is declared globally, it is global variables, capable of getting changed by any other code or function, see below example for reference-
<pre>let likeCountPost = 0;
    function getLikesOnPost(){
        likeCountPost += 1;
    }
    getLikesOnPost();
    likeCountPost = 0;
    console.log("Like Count is", likeCountPost) //0
</pre>
Because of mistakenly setting likeCountPost to 0, it will never get incremented. Let's see how can we achieve the desired functionality by bringing likeCountPost in local.
<pre>
    function getLikesOnPost(){ 
        let likeCountPost = 0;
        return likeCountPost += 1;
    }
    let likes = getLikesOnPost();
    console.log("Like Count is", getLikesOnPost())//1
    console.log("Like Count is", getLikesOnPost())//1
</pre>
In the above example, we can observe that there is a problem, likeCountPost is always getting incremented to 1,instead it should have been 2,it is because, everytime we call the function, it gets recreated and likeCountPost gets initialised again and set to 0 again,as likeCountPost gets destroyed when the function finished its execution, keeping us stuck here.
Now, to keep track of the last updated increment, or to preserve the likeCountPost between function calls. likes got created when function executed and destroyed when the function is finished
<pre>
    function getLikesOnPost(){ 
        let likeCountPost = 0;
        return function getCount(){
            return likeCountPost += 1;
        }
    }
    let likes = getLikesOnPost();
    console.log("Like Count is", likes())//1
    console.log("Like Count is", likes())//2
</pre>
In the above example, we put function getCount inside getLikesOnPost as it will be responsible for incrementing the likeCountPost variable.To call getCount outside the function, we have returned the function and its value as well, enabling us to call getCount outside the function.
Therefore, we figured out how to call getCount function outside of the scope it was defined in,by returning the inner function and storing its reference in likes variable and have called the function. We have preserved the likeCountPost variable.
1. We called the function getLikesOnPost, which created instance of the inner function getCount().From basic scoping rules, the function getCount has access to any variables declared in outer scope and can access it.
2.We returned the getCount() function, and were able to call it outside the scope
3. When it finished running,likeCountPost didnt get garbage collected or reinitialed when the function was again called  because of closure as the instance of the inner function was still alive and assigned to likes, the closure preserved that variable.
Closures are the powerful asset to Javascript.
Closured allows us to remember values
