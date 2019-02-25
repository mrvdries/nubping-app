import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from "react-router-dom";
import { auth, firestore } from '../Firebase';
import './Dashboard.css';

import logo from '../../logo.svg';

import EventList from './EventList/EventList';
import GroupSideBar from './GroupSideBar/GroupSideBar';

import * as routes from '../../Routes/routes';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            groups: null,
        };

        this.getGroups = this.getGroups.bind(this);
    }
    componentDidMount() {
		window.scrollTo(0, 0);
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.getGroups();
            }
        });
	}
	getGroups(){
		let id = this.state.userId;
        firestore.onceGetGroups(id).then(snapshot => {

        })
        .catch(err => {
            console.log('Error getting documents', err);
        });
	}
    render() {
        const {
            groups
          } = this.state;
        return (
            <div>
                <GroupSideBar groups={groups}/>
                <div className="dashboard-content">
                    <Router>
                        <Switch>
                            <Route path={routes.DashboardGroup} render={ () => <EventList/> }/>
                        </Switch>
                    </Router>
                </div>
            </div>
        );
    }
}

export default withRouter(Dashboard);