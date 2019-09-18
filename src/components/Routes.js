import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import Register from './Register';
import Login from './Login';
import GamesListContainer from './GamesListContainer';

function Routes(props) {
    const message = props.user.message
    const user = message? message.split(" ")[2]:null
    const jwt = props.user.jwt
    return (
        <div>
            {!props.user.jwt && 
            <Switch>
                <Route 
                    exact path='/' 
                    render= {props =>
                                <div>
                                    <Register/>
                                    <Login/>
                                </div>
                            } 
                />
            </Switch>}
            {props.user.jwt && 
            <Switch>
                <Route 
                    exact path='/' 
                    render= {props =>
                                <div>
                                    <GamesListContainer 
                                        jwt={jwt}
                                        user={user}
                                    />
                                </div>
                            } 
                />
            </Switch> }
        </div>)
}

const mapStateToProps = state => ({
  user: state.user
})

export default withRouter(connect(mapStateToProps)(Routes))