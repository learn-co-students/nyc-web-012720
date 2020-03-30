State, Events, and Conditional Rendering
==============

## SWBATs
- [ ] Add event handlers to elements in React
- [ ] Explain why we have Synthetic Events
- [ ] Instantiate `state` inside and outside of the `constructor`
- [ ] Create event handler callbacks that manipulate `state`
- [ ] Trigger rerenders by calling `setState`
- [ ] Manipulate the DOM by changing values in `state` instead of using vanilla JS
- [ ] Correctly choose when to use `props` vs `state`, and explain why one would use one or the other

--------

## Lecture Notes

--------

### Using Events
1. Find piece of DOM 
  - `const beef = document.getElementById("beef")`
2. Add event listener to that piece 
  - `beef.addEventListener`
3. Give callback to event listener (remove, add, etc.)
  - `beef.addEventListener("click", () => {console.log("BEEF!")})`

In React, we don't have to do step 1, we can skip directly to step 2 by adding event handlers directly to our JSX. We still must supply the event handler with a callback.

--------

### Events
Synthentic events ensure that you can use the `event` object in the same way regardless of browser or machine. This comes back to the `learn once, write anywhere` principle.

Otherwise, events are more or less the same as they are in vanilla JS.

Because the `event` object in React is a Synthetic Event that is pooled, the event loses its value after some time. This means that in asynchronous events (intervals, timeouts, fetches) events will lose their values. Must use `event.persist()` to keep values around.

--------

### State
State is used for data that needs to be dynamic. Where props are passed down from parents to children and are static, values stored in state are meant to change, especially as the user interacts with the DOM. 

This is a key component of declarative programming in React: we tie our components to our state by integrating values in state into logic (e.g. conditional rendering). This way, changes in state eventually precipitate changes to the DOM

`setState` is a function inherited from `React.Component` and is used to change state. You MUST use `setState` if you wish to rerender your component - direct mutations to state will NOT trigger a rerender.

`setState` is asynchronous - this means that code written immediately after a `setState` will not see changes in your state. If you wish to call a function after state has been changed, you can pass a callback as the second argument to `setState`

`setState` can take an object OR a function as its first argument. Use the function when you intend to use the old state values when writing the new state values.

--------

### Deciding... should it be state? Where should state be?
Ask three questions about each piece of data:

- Is it passed in from a parent via props? If so, it probably isn’t state.
- Does it remain unchanged over time? If so, it probably isn’t state.
- Can you compute it based on any other state or props in your component? If so, it isn’t state.

** From Step 3: Identify The Minimal (but complete) Representation Of UI State of `Thinking in React`

For each piece of state in your application:

- Identify every component that renders something based on that state.
- Find a common owner component (a single component above all the components that need the state in the hierarchy).
- Either the common owner or another component higher up in the hierarchy should own the state.
- If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common owner component.

** From Step 4: Identify Where Your State Should Live of `Thinking in React`

--------

### Props

You can pass anything in `props`, even functions! We will often find ourselves passing functions down to children components - this is because while we might need state in one part of our application, our event listener might be attached to an entirely different component. To get around this, we define our state-changing functions in a component and then pass these functions downwards to be called by children components.

--------

## Extras

- [React Events in Depth](https://www.youtube.com/watch?v=dRo_egw7tBc)
- [Function Binding](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)
- [Class Field Declarations](https://github.com/tc39/proposal-class-fields)
- [event.target vs event.currentTarget](https://github.com/facebook/react/issues/5733)
- [JavaScript Event Delegation, and event.target vs. event.currentTarget](https://medium.com/@florenceliang/javascript-event-delegation-and-event-target-vs-event-currenttarget-c9680c3a46d1)
- [super() vs super(props)](https://overreacted.io/why-do-we-write-super-props/)

--------

## Poll Questions
- Which of the following are valid ways to update state? (functional and object notation)
- Method this.handleClick is defined with the event as the first argument. Which of the following will invoke this.handleClick correctly? 
- Imagine I have a MainContainer component that renders a NewRestaurantForm component. MainContainer should render NewRestaurantForm conditionally, so it can be toggled open and closed. Which the following is the *best* way to implement this behavior? 
- Consider this scenario: App renders both SearchBar and MainContainer components and MainContainer renders all of the RedditPost components. In what component should `state = { posts: [] }`, including the array of all post objects, live?