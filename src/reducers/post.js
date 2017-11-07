import { SHOW_POSTS } from '../constants'

export default (posts = [], action) => {
	const {type, data} = action;

	switch(type) {
		case SHOW_POSTS:
			return data;
	}

	return posts;
}
