import React, { createContext, useEffect, useState } from 'react';

import axios from 'axios';

export interface Event {
    _id?: string;
    title: string;
    description: string;
    location?: string;
    host?: any;
    cuisine: string;
    meal: string;
    mediaCardUrl?: string;
    participants?: any;
    when: string;
}

export const EventContext = createContext<EventContextProps>({
    events: [],
    getAllEvents: () => Promise.resolve(),
    addEvent: (event: Event) => Promise.resolve(event),
    editEvent: (event: Event) => Promise.resolve(event),
    deleteEvent: (id: string) => Promise.resolve({}),
    getEvent: (id: string) => Promise.resolve(id),
});

export interface EventContextProps {
    events: Event[];
    getAllEvents: () => Promise<void>;
    addEvent: (event: Event) => Promise<Event>;
    editEvent: (event: Event) => Promise<Event>;
    deleteEvent: (id: string) => Promise<object>;
    getEvent: (id: string) => Promise<any>;
}

interface EventProviderProps {
	children: React.ReactNode;
}

export const EventProvider = ({ children }: EventProviderProps) => {
	const [events, setEvents] = useState<Event[]>([]);
	const baseUrl = 'http://localhost:3000/api/events';

	useEffect(() => {
		console.log('useEffect');
		async function getEvents() {
			await getAllEvents();
		}
		getEvents();
	}, []);

  function getAllEvents() {
		return axios.get(baseUrl).then((response) => setEvents(response.data));
	}

	function addEvent(event: any): Promise<Event> {
		const token = { Authorization: `Bearer ${localStorage.getItem('token')}` };

		return axios.post(baseUrl, event, { headers: token }).then((response) => {
			getAllEvents();
			return new Promise((resolve) => resolve(response.data));
		});
	}

  function editEvent(event: Event): Promise<Event> {
		const token = { Authorization: `Bearer ${localStorage.getItem('token')}` };

		return axios
			.put(`${baseUrl}/${event._id}`, event, { headers: token })
			.then((response) => {
				getAllEvents();
				return new Promise((resolve) => resolve(response.data));
		});
	}

	function deleteEvent(id: string): Promise<object> {
		const token = { Authorization: `Bearer ${localStorage.getItem('token')}` };

		return axios
			.delete(`${baseUrl}/${id}`, { headers: token })
			.then((response) => {
				getAllEvents();
				return new Promise((resolve) => resolve(response.data));
		});
	}

	// function to get one event by id:
	function getEvent(id: string): Promise<any> {
		return axios.get(`${baseUrl}/${id}`).then((response) => {
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
				deleteEvent,
				getEvent
			}}>
			{children}
		</EventContext.Provider>
	);
};
