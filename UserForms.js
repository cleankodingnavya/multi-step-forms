import React, { Component } from 'react';
import FormUserDetais from './FormUserDetails';
import FormPersonalDetais from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
export default class UserForms extends Component {
    state={
        step:1,
        firstName:'',
        lastName:'',
        email:'',
        occupation:'',
        city:'',
        bio:''
    }

    //proceed to next step
    nextStep =()=>{
        const{step}=this.state;
        this.setState({
            step:step+1
        });
    }


    //go back to prev step
    prevStep=()=>{
        const{step}=this.state;
        this.setState({
            step:step-1
        });
    }

    //handle field change
    handleChange = input => e =>{
        this.setState({ [input]: e.target.value});
    };
    render() {
        const{step}=this.state;
        const {firstName,lastName,email,occupation,city,bio}=this.state
        const values={firstName,lastName,email,occupation,city,bio}

        switch(step){
            case 1:
                return(<FormUserDetais
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
                />)
                case 2:{
                    return(<FormPersonalDetais
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        />)
                }
                case 3:{
                    return(<Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        />)
                }
                case 4:{
                    return <Success/>
                }
        }
        return (
            <div>
                
            </div>
        )
    }
}
