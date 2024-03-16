import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const FollowersContext = createContext();

export const FollowersProvider = ({ children }) => {
	const [unfollowing, SetUnfollowing] = useState();

	return (
		<FollowersContext.Provider value={{ unfollowing, SetUnfollowing }}>
			{children}
		</FollowersContext.Provider>
	);
};

FollowersProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
// FollowersProvider, you must pass at least one child component or element to it. If you don't provide any children, React will issue a warning in development mode.

// FollowersProvider creates a special container that holds important information (whether a user is unfollowing something) and allows other parts of your app to access and use this information as needed.

// Instead of passing props down everywhere, a space is created by createContext()
// context -> space 
// To store data, .Provider is used which takes arg as value which denotes the data to be stored.

// This box (FollowersProvider) wraps around other parts of your application. It tells React that any component inside it can access the unfollowing information and the tool SetUnfollowing.
