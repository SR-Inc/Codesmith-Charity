import React, { Component } from 'react';
import Login from './components/Login';
import Donation from './components/Donation';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


class App extends Component{
    constructor(props) {
      super(props);
      this.state = {
        credit_card : '', 
        amount: '',
        user_id: 0,
        individualTotal: 0
      };
    this.onDonate = this.onDonate.bind(this);
    this.postToDB = this.postToDB.bind(this);
    }

  // Changing the value of state to the value of input of donation form
  onDonate(event){
    console.log(event.target);
    this.setState({
      ...this.state,
      [event.target.id]: event.target.value
    });
    // this.setState({...this.state, [event.target.id]: event.target.value})
  };

  postToDB(){
    // post request
    const donationObj = 
    {
      user_id: this.state.user_id,
      amount: this.state.amount,
      credit_card: this.state.credit_card,
    };
    
    fetch('/donation', {
    method: 'POST', // or 'PUT'
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(donationObj),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
    console.error('Error:', error);
    });
    this.setState({
      ...this.state,
      credit_card : '', 
      amount: '',
      user_id: 0
    })
    
  };


      render() {
        // if (this.props.state.user !== null) {
        //   return <Redirect to = '/donation'/>;
        // }
        
        return (
          <Router>
            <div>
              <div className="main">
                  <h1>Codesmith Alumni Scholarship</h1>
                  <p>info about scholarship info about scholarship info about scholarship info about scholarship info about scholarship info about scholarship</p>   
                  <h3 id="totalHomePage">Total Raised ${this.state.totalRaised}</h3>
              </div>
              
              <Switch>
                <Route
                  exact path= "/a"
                  render = {props => <Login {...props}  state = {this.state}/>}
                />
                <Route
                  exact path= "/"
                  render = {props => <Donation {...props}  onDonate = {this.onDonate} postToDB = {this.postToDB}  state = {this.state} />  }
                />  onDonation
              </Switch>
            </div>
          </Router>
          
        )
      };
    }
  

    
  
export default App;


{/* <div className="btn">
    <button id="donateHome"> Donate </button>
    <button id="applyHome">Apply</button>  
</div> */}


    // componentDidMount() {
    //     console.log("inside component did mount")
    //     fetch('/donations')
    //       .then(res => res.json())
    //       .then((totals) => {
    //           console.log('totals: ',totals)
    //           const totalRaised = totals;
    //           return this.setState({
    //               ...this.state,
    //               totalRaised : totals
    //           })
    //       })
    //       .catch(err => console.log('get project: ERROR: ', err));
    // }