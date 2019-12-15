import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List,ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import UserForms from './UserForms';

 export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        //process form
        this.props.nextStep();
    }
    back= e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const{values:{firstName,lastName,email,occupation, city,bio},handleChange}=this.props;
        return (
            <MuiThemeProvider>
             <React.Fragment>
                 <AppBar title="Confirm User Data"/>
                 
                <List>
                    <ListItem
                        primaryText="FirstName" secondaryText={firstName}
                        />
                </List>
                <List>
                    <ListItem
                        primaryText="LastName" secondaryText={lastName}
                    />
                </List>

                <List>
                    <ListItem
                        primaryText="Email" secondaryText={email}
                        />
                </List>

                <List>
                    <ListItem
                        primaryText="Occupation" secondaryText={occupation}
                    />
                </List>
                <List>
                    <ListItem
                        primaryText="City" secondaryText={city}
                    />
                </List>

                <List>
                    <ListItem
                        primaryText="Bio" secondaryText={bio}
                    />
                </List>



                 <RaisedButton
                 label="Continue"
                 primary={true}
                 style={styles.button}
                 onClick={this.continue}
                 />
                 <RaisedButton
                 label="Back"
                 primary={false}
                 style={styles.button}
                 onClick={this.back}
                 />
             </React.Fragment>
            </MuiThemeProvider>
        )
    
    }
}
const styles={
    button:{
        margin:15
    }
}
export default Confirm