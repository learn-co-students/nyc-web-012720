# Questions
Correct answers and bolded and prefixed with **.


1. Which of the following are valid ways to update state? ( Multiple Choice)

Answer 1: this.state.clicked = !this.state.clicked

****Answer 2**: this.setState({ clicked: !this.state.clicked })

****Answer 3**: this.setState(prevState => ({clicked: !prevState.clicked}))

Answer 4: this.state.clicked = false

Answer 5: this.setState(prevState => {clicked: !prevState.clicked})

2. Method this.handleClick is defined with the event as the first argument. Which of the following will invoke this.handleClick correctly? ( Multiple Choice)

****Answer 1**: <Card handleClick={this.handleClick} />

Answer 2: <Card handleClick={() => this.handleClick} />

****Answer 3**: <Card handleClick={event => this.handleClick(event)} />

Answer 4: <Card handleClick={event => this.handleClick()} />

3. Imagine I have a MainContainer component that renders a NewRestaurantForm component. MainContainer should render NewRestaurantForm conditionally, so it can be toggled open and closed. Which the following is the *best* way to implement this behavior? ( Single Choice)

Answer 1: state in NewRestaurantForm

****Answer 2**: state in MainContainer

Answer 3: props from App to MainContainer

Answer 4: props from MainContainer to NewRestaurantForm

4. Consider this: App renders both SearchBar and MainContainer components. MainContainer renders all of the RedditPost components. SearchBar searches posts. In what component should `state = { posts: [] }`, including the array of all post objects, live? ( Single Choice)

****Answer 1**: App

Answer 2: SearchBar

Answer 3: MainContainer

Answer 4: RedditPost



---------------

# Answer explanations

Question 1. 
The answer needs to include both the object notation for setting state and functional setState. Answer 3 is right instead of answer 5 because an object needs to be wrapped in parentheses to be implicitly returned. 

Question 2. 
Answers 1 and 3 are essentially the same. In the first, we only put the reference and know that React will invoke handleChange with the event as the first argument under the hood and in the second we explicitly invoke handleChange with the event received by the wrapper arrow function. 

Question 3. 
Because we need to be able to track and change whether or not the form is being shown, and because MainContainer is what will (or won't) render the form, we should implement this behavior by holding some state in MainContainer. 

Question 4. 
MainContainer needs access to all of the posts in order to them. SearchBar will also need to be able to affect the posts because we should only show posts that include the search term. Because those two components are siblings, state needs to live in their closest common ancestor - App. 