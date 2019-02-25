import React, { Component } from 'react';
import './EventList.css';

import { auth, firestore } from '../../Firebase/firebase';

import * as routes from '../../../Routes/routes';

const EventList = ({ events }) =>
    <div className="event-list">
        {Object.keys(events).map(key =>
            <ListItem event={events[key]}/>
        )}
	</div>

const EmptyList = () =>
	<div>
		{/* <Spinner /> */}
	</div>

const ListItem = ({ event }) =>
    <div className="event-list-item">

    </div>

export default EventList;