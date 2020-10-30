import React, { Component } from 'react';


class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstname: '',
        lastname: ''
    };
    handleChange = (e) => {
        this.setState({
           [e.target.id]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };
    render() {
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit} >
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-filed">
                        <label htmlFor="email" >Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-filed">
                        <label htmlFor="password" >Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-filed">
                        <label htmlFor="firstname" >Firstname</label>
                        <input type="password" id="firstname" onChange={this.handleChange} />
                    </div>
                    <div className="input-filed">
                        <label htmlFor="lastname" >Lastname</label>
                        <input type="text" id="lastname" onChange={this.handleChange} />
                    </div>
                    <div className="input-filed">
                        <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignUp;