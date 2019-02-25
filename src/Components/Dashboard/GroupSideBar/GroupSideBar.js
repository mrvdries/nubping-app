import React, { Component } from 'react';
import './GroupSideBar.css';

import { auth, firestore } from '../../Firebase/firebase';

import * as routes from '../../../Routes/routes';

const GroupSideBar = ({ groups }) =>
    <div className="group-list">
        {Object.keys(groups).map(key =>
            <ListItem event={groups[key]}/>
        )}
	</div>

const EmptyList = () =>
	<div>
		{/* <Spinner /> */}
	</div>

const ListItem = ({ event }) =>
    <div className="group-list-item">

    </div>

export default GroupSideBar;