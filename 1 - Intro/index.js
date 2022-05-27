const root = ReactDOM.createRoot(document.querySelector("#root"));

// * 1 - 1st practice
// root.render
// (
//     <div id="Main">
//         <h1>Hello World!</h1>
//         <ul>
//             <li>Music</li>
//             <li>Coding</li>
//         </ul>
//     </div>
// )

// * 2 - Custom components

// function MainContent () {
//     return (
//         <h1>Hey! This is my first custom component.</h1>
//     );
// }

// function List () {
//     return (
//         <div>
//             <h2>My second component. Some things that I like:</h2>
//             <ul>
//                 <li>Music</li>
//                 <li>Coding</li>
//             </ul>
//         </div>
//     );
// }

// root.render(
//     <div>
//         <MainContent />
//         <List></List>
//     </div>
// )


// * 3 - Declarative vs Imperative

//ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))

/* 
? Challenge - recreate the above line of code in vanilla JS by creating and
? appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
* My solution:
    const h1 = document.createElement("h1");
    h1.innerText = "Hello, JS!";
    h1.className = "header";
    const _root = document.querySelector("#root");
    _root.appendChild(h1);

*/

// * 4 - JSX

// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )

/* 
? Challenge: 

? Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

// * My solution
// const nav = (
//     <nav>
//         <h1>Website Brand</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// );

// root.render(nav);

/* 
* 5 - .append() instead of .render()?

? Challenge: find out what happens if we try to append JSX
? to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 
* My solution 
*/

// const page = (
//     <main>
//         <h1>Example title</h1>
//         <h3>An h3! wowzers!</h3>
//         <p>A paragraph - <a href="https://www.google.com">here's a link</a></p>
//         <ul>
//             <li>Item 1</li>
//             <li>Item 2</li>
//             <li>Item 3</li>
//         </ul>
//     </main>
// )

// const _root = document.querySelector("#root");
// _root.append(page);

// * Post-fix

// root.render(page);