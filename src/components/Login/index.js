import React from 'react';
import GoogleLogin from 'react-google-login';
import { LoginAction } from './action';
import {connect} from 'react-redux';
import "./style.css";
/*client id: 716183238856-v5oq75ra26sr5tf35pfkipg6lltjqjq4.apps.googleusercontent.com */

class Login extends React.Component{
    responseGoogle = (response) => {
        this.props.LoginAction(response.googleId);
        console.log(response.googleId);
    }
    render(){
        console.log(this.props.list)
        return(
            <div className="row" style={{backgroundColor:"gray"}}>
                <div className="col-2"></div>
                <div className="col-8 div-middle" style={{height:"900px"}}>
                    <div className="div-middle" style={{height:"400px", width:"500px", position:"relative"}}>
                        <div style={{top:"0", position:"absolute"}}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSzvN-kr-5RykDZrdCYd9fDKKvBQHhi2wbXJwn_WMNonSoVzwd&s" />
                        </div>
                        <div style={{bottom:"50px", position:"absolute"}}>
                            <GoogleLogin
                                clientId="716183238856-v5oq75ra26sr5tf35pfkipg6lltjqjq4.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                        </div>
                    </div>
                </div>    
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        list: state.LoginReducer
    }
}

export default connect(mapStateToProps, {LoginAction})(Login)