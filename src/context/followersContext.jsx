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

// createContext() creates a "space" to store data.
// useState() manages a piece of state and provides a function to update it.
// FollowersContext.Provider wraps around components, giving them access to the unfollowing state and SetUnfollowing function.
// Any component within FollowersProvider can use the context to access and update the unfollowing state.

