//Client ID
//Rnm8XChWqBd_USLoMaRBow

//API Key
//t4t89UCiSnjKrLL_D7-ljoHxfD_iOnmqW3JSYZpsN5lT6Kvuhsys0Vq_7FGQpr-prilXt1VwXI8HN-tBazqFIkkUhvo5u73w3y8YYQWU29oVnt6l_zmUmMK3uZS9ZHYx
export enum SearchType {
	all = '',
	categories = 'catgeories',
	rating = 'rating',
	price = 'price',
	distance = 'distance'
	// coordinates = 'latitude', 'longitude'
}

export interface SearchResult {
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

export const YelpApi = () => {
	const fetch = require('node-fetch');

	const url =
		'https://api.yelp.com/v3/businesses/search?location=en_US&latitude=41.477142&longitude=-81.925546';
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization:
				'Bearer t4t89UCiSnjKrLL_D7-ljoHxfD_iOnmqW3JSYZpsN5lT6Kvuhsys0Vq_7FGQpr-prilXt1VwXI8HN-tBazqFIkkUhvo5u73w3y8YYQWU29oVnt6l_zmUmMK3uZS9ZHYx'
		}
	};

	const searchData = fetch(url, options)
		.then((res: any) => res.json())
		.then((json: any) => console.log(json))
		.catch((err: any) => console.error('error:' + err));

	return {
		YelpApi,
		searchData
	};
};

export default YelpApi;

// const sdk = require('api')('@yelp-developers/v1.0#29blk6qj5xa');
// sdk.auth(
//     'Bearer t4t89UCiSnjKrLL_D7-ljoHxfD_iOnmqW3JSYZpsN5lT6Kvuhsys0Vq_7FGQpr-prilXt1VwXI8HN-tBazqFIkkUhvo5u73w3y8YYQWU29oVnt6l_zmUmMK3uZS9ZHYx'
// );
// let url = 'https://api.yelp.com/v3/businesses/search?location=en_US';
// let apiKey =
//     'Bearer t4t89UCiSnjKrLL_D7-ljoHxfD_iOnmqW3JSYZpsN5lT6Kvuhsys0Vq_7FGQpr-prilXt1VwXI8HN-tBazqFIkkUhvo5u73w3y8YYQWU29oVnt6l_zmUmMK3uZS9ZHYx';
// let lat = 41.477142;
// let long = -81.925546;

// const searchData = async (categories:string, type: SearchType): Promise<any> => {

//     const result = await fetch(`${url}&=${lat}&=${long}&${apiKey}`);
//     return result.json();
// };

//sdk.v3_business_search({location: 'en_US', latitude: '41.477142', longitude: '-81.925546'})
//.then(({ data }) => console.log(data))
//.catch(err => console.error(err));
// axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${locationSearched}`, {
//   headers: {
//     Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
// },
//   params: {
//   categories: 'breakfast_brunch',
// }
// })
// .then((res) => {
// console.log(res)
// })
// .catch((err) => {
// console.log ('error')
// })
