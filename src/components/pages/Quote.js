import React from 'react'
import '../../App.css'

export default class Form extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        phone: '',
        serviceType: '',
        comments: ''
    }
  
    change = (e) => {
        this.setState({[e.target.name]: e.target.vale});
    };
  
    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state);
    };
  
    render(){
        return (
            <div className='form-box'>
                <h5>Hulstein Concrete Quote Form</h5>
                <form>
                    <input 
                    name="firstName"
                    className='form-input'
                    placeholder='First Name' 
                    value={this.state.firstName} 
                    onChange={e => this.change(e)} />
                    <br />
                    <input 
                    name="lastName"
                    className='form-input'
                    placeholder='Last Name' 
                    value={this.state.lastName} 
                    onChange={e => this.change(e)} />
                    <br />
                    <input 
                    name="username"
                    className='form-input'
                    placeholder='username' 
                    value={this.state.username} 
                    onChange={e => this.change(e)} />
                    <br />
                    <input 
                    name="email"
                    className='form-input'
                    placeholder='email' 
                    value={this.state.email} 
                    onChange={e => this.change(e)} />
                    <br />
                    <input 
                    name="password"
                    className='form-input'
                    type="password"
                    placeholder='password' 
                    value={this.state.password} 
                    onChange={e => this.change(e)} />
                    <br />
                    <input 
                    name="phone"
                    className='form-input'
                    placeholder='phone' 
                    value={this.state.phone} 
                    onChange={e => this.change(e)} />
                    <br />
                    <input 
                    name="serviceType"
                    className='form-input'
                    placeholder='Service Type' 
                    value={this.state.serviceType} 
                    onChange={e => this.change(e)} />
                    <br />
                    <input 
                    name="comments"
                    className='comments-input'
                    placeholder='Comments' 
                    value={this.state.comments} 
                    onChange={e => this.change(e)} />
                    <br />
                    <button onClick={e => this.onSubmit(e)}>Submit</button>
                </form>
            </div>
        )
    }
  }
  
  
  
/////////////////////// ORIGINAL//////////////////
// export default function Quote(){
    
//     return (
//         <h1 className='quote'>QUOTE</h1>
        
//     )
    
// }