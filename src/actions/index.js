import axios from 'axios';
import {
	SHOW_POSTS
} from '../constants';

export function showPosts(data) {
	return {
		type: SHOW_POSTS,
		data
	};
}

export function getPosts(userId) {
	return dispatch => 
		axios.get(`https://api.stackexchange.com/2.2/users/${userId}/posts?order=desc&sort=activity&site=stackoverflow`)
			.then(function ({data}) {
				console.log(data);
				dispatch(showPosts(data.items));
			})
			.catch(function (error) {
				console.log(error);
			});
}
