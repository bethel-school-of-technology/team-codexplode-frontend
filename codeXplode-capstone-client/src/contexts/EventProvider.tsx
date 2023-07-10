import axios from 'axios';
import { useEffect, useState } from 'react';
import EventContext from './EventContext';
import React from 'react';

interface Event {
	id: number;
	title: string;
	description: string;
	location?: string;
	host: string;
	cuisine: string;
	meal: string;
	participants: string;
	when: string;
	where: string;
}

interface EventProviderProps {
	children: React.ReactNode;
}

export const EventProvider: React.FC<EventProviderProps> = (
	props: EventProviderProps
) => {
	const [events, setEvents] = useState<Event[]>([]);
	const baseUrl = 'http://localhost:3000/api/Events';

	useEffect(() => {
		async function getEvents() {
			await getAllEvents();
		}
		getEvents();
	}, []);

	function getAllEvents() {
		return axios.get(baseUrl).then((response) => setEvents(response.data));
	}

	function addEvent(event: any) {
		return axios.post(baseUrl, event).then((response) => {
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

	function deleteEvent(id: number) {
		return axios.put(baseUrl + id).then((response) => {
			getAllEvents();
			return new Promise((resolve) => resolve(response.data));
		});
	}

	return (
		<EventContext.Provider
			value={{
				events,
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
