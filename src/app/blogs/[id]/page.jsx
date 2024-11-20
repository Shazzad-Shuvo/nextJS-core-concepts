import React from "react";

const BlogDetailsPage = async ({ params }) => {
  const id = parseInt((await params).id);
  console.log(typeof id);

  const blogs = [
    {
      id: 1,
      question: "What is JavaScript, and why is it important?",
      answer:
        "JavaScript is a high-level, versatile programming language commonly used to create dynamic and interactive effects on web pages. It's essential for web development because it allows developers to build interactive elements, handle user input, and enhance the user experience in web applications.",
    },
    {
      id: 2,
      question: "What is the difference between `var`, `let`, and `const`?",
      answer:
        "`var` is function-scoped, while `let` and `const` are block-scoped. `let` allows you to reassign values, whereas `const` is used for variables that shouldn't be reassigned. Using `let` and `const` is generally preferred due to their block scoping and clearer semantics in modern JavaScript.",
    },
    {
      id: 3,
      question:
        "What are arrow functions, and how do they differ from regular functions?",
      answer:
        "Arrow functions are a shorter syntax for writing functions in JavaScript, introduced in ES6. They differ from regular functions in that they don't have their own `this` context, which makes them useful for certain use cases like callbacks. Arrow functions are especially helpful for cleaner, more concise code.",
    },
    {
      id: 4,
      question: "How does JavaScript handle asynchronous operations?",
      answer:
        "JavaScript handles asynchronous operations using callbacks, promises, and async/await syntax. This allows it to manage tasks like API calls, file handling, and timers without blocking other code execution, creating a smoother experience in applications by handling time-consuming tasks in the background.",
    },
    {
      id: 5,
      question: "What is closure in JavaScript?",
      answer:
        "A closure is a function that retains access to its parent scope even after the parent function has finished executing. Closures are commonly used for data encapsulation and maintaining state across function calls, allowing for powerful functionality in JavaScript applications.",
    },
    {
      id: 6,
      question: "What is the DOM, and how does JavaScript interact with it?",
      answer:
        "The DOM (Document Object Model) is a programming interface that represents the structure of a web page as a tree of objects. JavaScript interacts with the DOM to manipulate HTML and CSS dynamically, enabling developers to create interactive and responsive web applications by updating the DOM based on user actions.",
    },
    {
      id: 7,
      question: "What are JavaScript data types?",
      answer:
        "JavaScript has several data types, including primitive types like `string`, `number`, `boolean`, `null`, `undefined`, and `symbol`, as well as complex types like `object` and `function`. Understanding these data types is fundamental to handling data correctly in JavaScript applications.",
    },
    {
      id: 8,
      question: "What is event delegation in JavaScript?",
      answer:
        "Event delegation is a technique where a single event listener is added to a parent element instead of individual child elements. It uses event bubbling to capture events on child elements, making it more efficient for handling multiple elements, especially when dynamically adding new ones.",
    },
    {
      id: 9,
      question: "How do you handle errors in JavaScript?",
      answer:
        "Errors in JavaScript can be handled using `try...catch` blocks. This allows you to catch exceptions and handle them gracefully, preventing runtime errors from crashing the application. You can also use `finally` to run cleanup code regardless of whether an error occurred.",
    },
    {
      id: 10,
      question: "What is the purpose of `this` keyword in JavaScript?",
      answer:
        "`this` refers to the context in which a function is invoked. Its value depends on how a function is called, allowing developers to reference the object that owns the function. In arrow functions, `this` is lexically bound, meaning it takes the value from the surrounding scope.",
    },
  ];

  const {question, answer} = blogs.find((blog) => blog.id === id);

  return (
    <div className="h-screen p-16 text-center">
        <h3 className="text-emerald-700 font-semibold text-xl">{question}</h3>
        <p>{answer}</p>
    </div>
  );
};

export default BlogDetailsPage;
