import React from 'react';
import { Link } from 'react-router';

export default class LoginContainer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      emailValue:"",
      passValue:""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
  }

  handleChange(e){
    this.setState({[e.target.id]: e.target.value});
  }

  handleSubmitLogin(e){
    e.preventDefault();
    if(this.state.emailValue === "nestor" && this.state.passValue === "1234"){
      console.log(this.props)
      this.props.history.push('/dashboard');
    }else{
      alert("Usuario no Logueado!")
    }
  }

  render(){
    return(
      <div>
        <h1>Login</h1>
        <div>
        <form onSubmit={this.handleSubmitLogin} action ="/login" method='post'>
          <p><input
              name='username'
              placeholder='username'
              id='emailValue'
              onChange={this.handleChange}
          /></p>
          <p><input
            type='password'
            name='password'
            placeholder='password'
            id='passValue'
            onChange={this.handleChange}
          /></p>
          <button>Login</button>
        </form>
        </div>
      </div>
    )
  }
}