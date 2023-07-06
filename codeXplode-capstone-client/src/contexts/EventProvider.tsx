import axios from 'axios';
import { useEffect, useState } from 'react';
import EventContext from './EventContext';
import React from 'react';

interface Event {
	title: string;
	when: string;
	where: string;
}

interface EventProviderProps {
	children: React.ReactNode;
}

export const EventProvider: React.FC<EventProviderProps> = (
	props: EventProviderProps
) => {
	const [Event, setEvent] = useState<Event[]>([]);
	const baseUrl = 'http://localhost:3000/api/Events';

	useEffect(() => {
		async function getEvents() {
			await getAllEvents();
		}
		getEvents();
	}, []);

	function getAllEvents() {
		return axios.get(baseUrl).then((response) => setEvent(response.data));
	}

	function addEvent(Event: any) {
		return axios.post(baseUrl, Event).then((response) => {
			getAllEvents();
			return new Promise((resolve) => resolve(response.data));
		});
	}

	function editEvent() {
		return axios.put(baseUrl + Event, Event).then((response) => {
			getAllEvents();
			return new Promise((resolve) => resolve(response.data));
		});
	}

	function deleteEvent(id: any) {
		return axios.put(baseUrl + id).then((response) => {
			getAllEvents();
			return new Promise((resolve) => resolve(response.data));
		});
	}

	return (
		<EventContext.Provider
			value={{
				Event,
				getAllEvents,
				addEvent,
				editEvent,
				deleteEvent
			}}
		>
			{props.children}
		</EventContext.Provider>
	);
};
