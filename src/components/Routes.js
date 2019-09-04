import React from 'react'
import EventsListContainer from './EventsListContainer'
import EventDetailsContainer from './EventDetailsContainer'
import LoginFormContainer from './LoginFormContainer'
import SignUpFormContainer from './SignupFormContainer'
import TicketDetailsContainer from './TicketDetailsContainer'
import {Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import CreateTicketFormContainer from './CreateTicketFormContainer';
import AddCommentFormContainer from './AddCommentFormContainer';
import CreateEventFormContainer from './CreateEventFormContainer';

function Routes(props) {
    //When the login form is used it sets the title depending on the component visited 
    const loginMessages = [
        "You need to log in to create an event",
        "You need to log in to add a ticket",
        "You need to log in to add a comment"
    ]
    //Gets the name of the authenticated user to be used as the ticket or comment author
    const user = props.user ? props.user.user : ""
    const jwt = props.user ? props.user.jwt : ""

    return (
        <div>
            {!props.authenticated && 
            //Routes used when the user is not authenticated
            <Switch>
                <Route 
                    exact path='/' 
                    render= {props =>
                                <div>
                                    <CreateEventFormContainer
                                    />
                                </div>
                            } 
                />
                <Route 
                    path='/list/:id' 
                    render= {props =>
                                <div>
                                    <EventsListContainer 
                                        id={Number(props.match.params.id)}
                                    />
                                    <LoginFormContainer
                                        message={loginMessages[0]}
                                    />
                                    <SignUpFormContainer/>
                                </div>
                            } 
                />                <Route 
                    path='/events/:id' 
                    render= {props =>
                                <div>
                                    <EventDetailsContainer
                                        id={Number(props.match.params.id)}
                                    />
                                    <LoginFormContainer 
                                        message={loginMessages[1]}
                                    />
                                </div>
                            } 
                />
                <Route 
                    path='/tickets/:id' 
                    render= {props =>
                                <div>
                                    <TicketDetailsContainer
                                        id={Number(props.match.params.id)}
                                    />
                                    <LoginFormContainer 
                                        message={loginMessages[2]}
                                    />
                                </div>
                            } 
                />
            </Switch>}
            
            {props.authenticated && 
            //Routes used when the user is authenticated
            <Switch>
                <Route 
                    exact path='/' 
                    render= {props =>
                                <div>
                                    <EventsListContainer />
                                    <CreateEventFormContainer 
                                        jwt={jwt}
                                    />
                                </div>
                            } 
                />
                <Route 
                    path='/events/:id' 
                    render= {props =>
                                <div>
                                    <EventDetailsContainer
                                        id={Number(props.match.params.id)}
                                    />
                                    <CreateTicketFormContainer 
                                        id={Number(props.match.params.id)}
                                        user={user}
                                        jwt={jwt}
                                    />
                                </div>
                            } 
                />
                <Route 
                    path='/tickets/:id' 
                    render= {props =>
                                <div>
                                    <TicketDetailsContainer
                                        id={Number(props.match.params.id)}
                                        user={user}
                                        jwt={jwt}
                                    />
                                    <AddCommentFormContainer
                                        id={Number(props.match.params.id)}
                                        user={user}
                                        jwt={jwt}
                                    />
                                </div>
                            } 
                />
            </Switch> }
        </div>)
}

const mapStateToProps = state => ({
  authenticated: !!state.currentUser,
  user: state.currentUser ? state.currentUser:null
})

export default withRouter(connect(mapStateToProps)(Routes))