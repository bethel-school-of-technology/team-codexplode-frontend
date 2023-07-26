import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

interface Result {
	id: string;
	name: string;
	image_url: string;
	url: string;
	review_count: string;
	categories: [{ alias: string; title: string }];
	rating: number;
	price: string;
	location: {
		address1: string;
		city: string;
		zip_code: string;
		country: string;
		state: string;
		display_address: [string];
	};
	coordinates: {
		latitude: number;
		longitude: number;
	};
	display_phone: string;
	distance: number;
}

export const RestaurantContext = createContext<RestaurantContextProps>({
	results: [],
	getAllResults: () => Promise.resolve()
});

export interface RestaurantContextProps {
	results: Result[];
	getAllResults: () => Promise<void>;
}

interface RestaurantProviderProps {
	children: React.ReactNode;
}

export const RestaurantProvider = ({ children }: RestaurantProviderProps) => {
	const [results, setResults] = useState<Result[]>([]);
	const baseUrl = 'https://api.yelp.com/v3/businesses/search';
	//const apiKey =
	// 	'Bearer t4t89UCiSnjKrLL_D7-ljoHxfD_iOnmqW3JSYZpsN5lT6Kvuhsys0Vq_7FGQpr-prilXt1VwXI8HN-tBazqFIkkUhvo5u73w3y8YYQWU29oVnt6l_zmUmMK3uZS9ZHYx';
	// const lat = 41.477142;
	// const long = -81.925546; ?location=en_US&latitude=41.477142&longitude=-81.925546'

	const config = {
		headers: {
			accept: 'application/json',
			Authorization:
				'Bearer t4t89UCiSnjKrLL_D7-ljoHxfD_iOnmqW3JSYZpsN5lT6Kvuhsys0Vq_7FGQpr-prilXt1VwXI8HN-tBazqFIkkUhvo5u73w3y8YYQWU29oVnt6l_zmUmMK3uZS9ZHYx'
		},
		params: {
			term: 'restaurants',
			locations: '14532 Lake Ave, Lakewood, OH 44107',
			radius: 1609,
			sort_by: 'rating',
			limit: 25
		}
	};

	useEffect(() => {
		console.log(results);
		async function getResults() {
			await getAllResults();
		}
		getResults();
	}, []);

	function getAllResults() {
		return axios
			.get(baseUrl, config)
			.then((response) => setResults(response.data))
			.catch((err) => console.error(err));
	}
	console.log(results);
	return (
		<RestaurantContext.Provider
			value={{
				results,
				getAllResults
			}}>
			{children}
		</RestaurantContext.Provider>
	);
};

//JavaScript
// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer t4t89UCiSnjKrLL_D7-ljoHxfD_iOnmqW3JSYZpsN5lT6Kvuhsys0Vq_7FGQpr-prilXt1VwXI8HN-tBazqFIkkUhvo5u73w3y8YYQWU29oVnt6l_zmUmMK3uZS9ZHYx'
//     }
//   };

//   fetch('https://api.yelp.com/v3/businesses/search?location=Cleveland%2C%20Ohio&radius=20&categories=&locale=en_US&sort_by=rating&offset=15', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

//HTTP
// GET /v3/businesses/search?location=Cleveland%2C%20Ohio&radius=20&categories=&locale=en_US&sort_by=rating&offset=15 HTTP/1.1
// Accept: application/json
// Authorization: Bearer t4t89UCiSnjKrLL_D7-ljoHxfD_iOnmqW3JSYZpsN5lT6Kvuhsys0Vq_7FGQpr-prilXt1VwXI8HN-tBazqFIkkUhvo5u73w3y8YYQWU29oVnt6l_zmUmMK3uZS9ZHYx
// Host: api.yelp.com

//Node
// const fetch = require('node-fetch');

// const url = 'https://api.yelp.com/v3/businesses/search?location=Cleveland%2C%20Ohio&radius=20&categories=&locale=en_US&sort_by=rating&offset=15';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer t4t89UCiSnjKrLL_D7-ljoHxfD_iOnmqW3JSYZpsN5lT6Kvuhsys0Vq_7FGQpr-prilXt1VwXI8HN-tBazqFIkkUhvo5u73w3y8YYQWU29oVnt6l_zmUmMK3uZS9ZHYx'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));

// const searchData = async (categories: string, type: SearchType): Promise<any> => {
//     const
// }
// const searchData = async (categories:string, type: SearchType): Promise<any> => {

//     const result = await fetch(`${url}&=${lat}&=${long}&${apiKey}`);
//     return result.json();
// };

// const sdk = require('api')('@yelp-developers/v1.0#29blk6qj5xa');
// sdk.auth(
//     'Bearer t4t89UCiSnjKrLL_D7-ljoHxfD_iOnmqW3JSYZpsN5lT6Kvuhsys0Vq_7FGQpr-prilXt1VwXI8HN-tBazqFIkkUhvo5u73w3y8YYQWU29oVnt6l_zmUmMK3uZS9ZHYx'
// );
// let url = 'https://api.yelp.com/v3/businesses/search?location=en_US';
// let apiKey =
//     'Bearer t4t89UCiSnjKrLL_D7-ljoHxfD_iOnmqW3JSYZpsN5lT6Kvuhsys0Vq_7FGQpr-prilXt1VwXI8HN-tBazqFIkkUhvo5u73w3y8YYQWU29oVnt6l_zmUmMK3uZS9ZHYx';
// let lat = 41.477142;
// let long = -81.925546;

// GET /v3/businesses/search?location=Cleveland%2C%20Ohio&radius=20&categories=&locale=en_US&sort_by=rating&offset=15 HTTP/1.1
// Accept: application/json
// Authorization: Bearer t4t89UCiSnjKrLL_D7-ljoHxfD_iOnmqW3JSYZpsN5lT6Kvuhsys0Vq_7FGQpr-prilXt1VwXI8HN-tBazqFIkkUhvo5u73w3y8YYQWU29oVnt6l_zmUmMK3uZS9ZHYx
// Host: api.yelp.com

// 'use strict';
//     const yelp = require('yelp-fusion');
//     const client = yelp.client('Bearer t4t89UCiSnjKrLL_D7-ljoHxfD_iOnmqW3JSYZpsN5lT6Kvuhsys0Vq_7FGQpr-prilXt1VwXI8HN-tBazqFIkkUhvo5u73w3y8YYQWU29oVnt6l_zmUmMK3uZS9ZHYx');

//     client.autocomplete({
//       text: 'pizza'
//     }).then(response => {
//       console.log(response.jsonBody.terms[0].text);
//     }).catch(e => {
//       console.log(e);
//     });

// fetch(url, options)
// .then(res => res.json())
// .then(json => console.log(json))
// .catch(err => console.error('error:' + err));
