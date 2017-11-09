import axios from 'axios';
import {
	SHOW_POSTS
} from '../constants';

function getStackOverflowPosts(userId) {
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

function getFacebookPosts(userId) {
	return dispatch =>
		axios.get(`https://graph.facebook.com/v2.11/${userId}/feed`)
			.then(function ({data}) {
				console.log(data);
				dispatch(showPosts(data.items));
			})
			.catch(function (error) {
				console.log(error);
			});
}

function getVkPosts(userId) {
	return dispatch =>
		axios.get(`https://api.vk.com/method/wall.get?owner_id=${userId}&access_token=cc6889b5cc6889b5cc6889b562cc37ed09ccc68cc6889b5966b90bd09598083caa4027b`)
			.then(function ({data}) {
				console.log(data);
				dispatch(showPosts(data.items));
			})
			.catch(function (error) {
				console.log(error);
			});
}

export function showPosts(data) {
	return {
		type: SHOW_POSTS,
		data
	};
}

export function getPosts(networkType, userId) {
	switch (networkType) {
		case 'SO':
			return getStackOverflowPosts(userId);
			break;
		case 'FB':
			//return getFacebookPosts(userId);
			break;
		case 'VK':
			//return getVkPosts(userId);
			break;
	}
}
