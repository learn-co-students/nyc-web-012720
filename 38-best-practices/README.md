React Best Practices
====================

## SWBAT

- [ ] Write cleaner React code

## Objectives

- Opinions
  - [X] Code Organization/file structure 
        - Folders: Components & Containers, orrrr organized by resource
  - [X] Presentational vs Container components

- Optimizations:
  - [X] Functional vs Class Components (required for state & lifecycle methods) ===> until Hooks
  - [X] Fragments ===> it allows you to group siblings without adding any intermediary nodes in the DOM tree (ie a div)

- Best Practices:
  - [X] "then" callback for setState
  - [X] Callbacks (avoid useless wrapping)
  - [X] Functional setState

- JS tricks/bugs often seen in React:
  - [X] Arrow functions returning objects () => ({ })
  - [ ] Destructuring  ====> let { likes, name } = this.props
  - [ ] Spread (w/ prepend and append) this.setState({ messages: [...this.state.messages, 'newmessage']})
  - [ ] Objects with the same key/value name ===> let myPerson = {firstName, lastName}
  - [ ] constructor vs. ES7 instance variables ===> ie state = {}
  - [ ] dynamic keys ==>  { [variable]: "as_key" } 
  - fetchy bois...? like curly bois but nah...?

- Too Involved for RN
    - [ ] HOCs Magic magic magic!
    - [ ] Hooks Hooks Hooks! 
    - [ ] Redux

## Resources

[Dan Abramov: Presentational vs Container](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
[Pure Components](https://reactjs.org/docs/react-api.html#reactpurecomponent)
[Redux Code Structure](https://redux.js.org/faq/code-structure)
[HOCs](https://reactjs.org/docs/higher-order-components.html)
[Hooks](https://reactjs.org/docs/hooks-intro.html)

## Lecture Notes

