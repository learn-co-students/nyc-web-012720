updatePizza = () => {
    const id = this.state.currentPizza.id
    console.log(this.state.currentPizza)
    const configObject = {
          method: 'PATCH',
      headers: {'accept': 'application/json',
                'content-type': 'application/json'
    },
    body: JSON.stringify({
          topping: this.state.currentPizza.topping,
          vegetarian: this.state.currentPizza.vegetarian,
          size: this.state.currentPizza.size
        })
    }
    fetch(`http://localhost:3000/pizzas/${id}`, configObject)
    .then(resp => resp.json())
    .then(result => {
        // result is the new representation from the backend
        let newPizzas = this.state.pizzas.map(pizza => {
            if(pizza.id === result.id){
                return result 
            }else { return pizza }
        })
        this.setState({ pizzas: newPizzas })
    })



    // fetch('http://localhost:3000/pizzas')
    // .then(resp => resp.json())
    // .then(pizzas => this.setState({ pizzas }))}


postPizza = () => {
        const configObject = {
              method: 'POST',
          headers: {'accept': 'application/json',
                    'content-type': 'application/json'
        },
        body: JSON.stringify({
              topping: this.state.currentPizza.topping,
              vegetarian: this.state.currentPizza.vegetarian,
              size: this.state.currentPizza.size
            })
        }
        fetch(`http://localhost:3000/pizzas`, configObject)
        .then(resp => resp.json())
        .then(result => {
            // result is the repr of a NEW PIZZA
            this.setState({ pizzas: [result, ...this.state.pizzas ] })
        })