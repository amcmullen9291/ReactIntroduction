import React, { Component } from 'react'

export default class ComponentState extends Component {
    constructor(props) {
        super(props);
        this.state = {
          quantity: 10,
          show: true,
          max: 5,
          min: 0
        };
      }
    
      IncreaseValue = () => {
          this.setState(prevState => {
            if(prevState.quantity < 20) {
              return {
                quantity: prevState.quantity + 1
              }
            } else {
              return null;
            }
          });
      }
      DecreaseValue = () => {
        this.setState(prevState => {
          if(prevState.quantity > -10) {
            return {
              quantity: prevState.quantity - 1
            }
          } else {
            return null;
          }
        });
      }
      ToggleClick = () => {
        this.setState({
          show: !this.state.show
        });
      }
      handleChange = (event) => {
        this.setState({quantity: event.target.value});
      }
    render(){
        return (
            <>
            <div id="statePageMainBackground">
        <div>
          <center><h1 id="welcome"><em>this</em>.setState</h1></center>
        </div>
        <div>
            <center>
                <p id="statePageBorder">
    <button onClick = {this.DecreaseValue} className="stateButtons"> - </button>
      <input className="statePageCounter" value={this.state.quantity} onChange={this.handleChange}/>
      <button onClick = {this.IncreaseValue} className="stateButtons"> + </button>
            </p>
      </center>
      </div>
        <ol id="setStateList">
          <span><center>setState()</center></span>
          <li>setState() tells React that a component needs to be re-rendered.</li>
          <li>An initial state is needed.</li>
          <li>setState() is asynchronous.</li>
          <li>In most cases, setState will lead to a re-render.</li>
          </ol>
          <br/>
          <center>
          <span><br/>In functional components, the hooks useState(), useDispatch() and useEffect(). are used to manage state.</span>
            <br/><br/><br/>
            </center>
        </div>
        <footer>
            <br/>
            <center><a href={"/"}><button id="homeButton">return home</button></a></center> 
        </footer>

            </>
        )
    }
}

