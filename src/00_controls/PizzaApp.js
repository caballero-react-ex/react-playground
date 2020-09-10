import React, { Component } from 'react';

class PizzaAppClass extends Component {
  state = {
    size: 'medium',
    topping: '',
    glutenFree: false,
    instructions: ""
  }

  handleSubmit = event => {
    event.preventDefault();
    const {size, topping, glutenFree, instructions} = this.state; 
    alert(`
    Your order:
    Size: ${size}
    Gluten free? ${glutenFree ? 'yes' : 'no'}
    Topping: ${topping || 'none'}
    Special instructions: ${instructions || 'none'}
    `)
  }

  setSize = event => {
    this.setState({
      size: event.target.value
    })
  }

  setTopping = event => {
    this.setState({
      topping: event.target.value
    })
  }

  setGluten = event => {
    this.setState({
      glutenFree: event.target.checked
    })
  }

  setInstructions = event => {
    this.setState({
      instructions: event.target.value
    })
  }

  render() {
    const {size, topping, glutenFree, instructions} = this.state; 
    

    return(
      <div>
        <h1>Order Your Pizza</h1>
        <form onSubmit={this.handleSubmit}>
          <h4 style={{marginBottom: "5px"}}>SIZE</h4>
          <div style={{display: "block", marginBottom: "20px"}}>
          <label>
            <input
              type="radio"
              value="small"
              checked={size === 'small'}
              onChange={this.setSize}
            />
            Small
          </label>
          <label>
            <input
              type="radio"
              value="medium"
              checked={size === 'medium'}
              onChange={this.setSize}
            />
            Medium
          </label>
          <label>
            <input
              type="radio"
              value="large"
              checked={size === 'large'}
              onChange={this.setSize}
            />
            Large
          </label>
          </div>

          <h4 style={{marginBottom: "5px"}}>TOPPING</h4>
          <label style={{display: "block", marginBottom: "20px"}}>
            <select onChange={this.setTopping} value={topping}>
              <option value="">
                - PICK A TOPPING -
              </option> 
              <option value="extra cheese">
                extra cheese
              </option> 
              <option value="bacon">
                bacon
              </option> 
              <option value="anchovies">
                anchovies
              </option> 
            </select>
          </label>
          <label>
            <input 
              type="checkbox"
              checked={glutenFree}
              onChange={this.setGluten}
            />
            Gluten Free
          </label>
          <label>
            <h4 style={{marginBottom: "5px"}}>EXTRA INSTRUCTIONS</h4>
            <textarea
              value={instructions}
              onChange={this.setInstructions}
            ></textarea>

          </label>

          <div style={{borderTop: "1px solid black"}}>
            <button type="submit" style={{marginTop:"20px"}}>Send Order</button>
          </div>
          
        </form>
      </div>
    )
  }
}

export default PizzaAppClass; 