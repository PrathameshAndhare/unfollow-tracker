import github from '../assets/github.svg';
import search from '../assets/search.svg';
import HeaderStyle from '../styles/headerStyle.css';
import { useState, useEffect, useRef, useContext } from 'react';
import { fetchPagination } from '../helpers/fetch';
import { getUnfollowers } from '../helpers/getUnfollowers';
import { FollowersContext } from '../context/followersContext';
import { UnfollowersContext } from '../context/unfollowersContext';

export default function Header() {
	const refUserInput = useRef(''); 
	const [user, setUser] = useState('');
	const [loader, setLoader] = useState(false);
	const { SetUnfollowing } = useContext(FollowersContext);
	const { SetUnfollowers } = useContext(UnfollowersContext);

	const handleClick = () => {
		setUser(refUserInput.current.value.toLowerCase());
		refUserInput.current.value = '';
	};

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleClick();
        }
    };

    useEffect(() => {
        // Set focus to the input field when the component mounts
        refUserInput.current.focus();
    }, []);

	useEffect(() => {
		if (user === '') return;

		const getData = async () => {
			const followersUrl = `https://api.github.com/users/${user}/followers?per_page=100`;
			const followingUrl = `https://api.github.com/users/${user}/following?per_page=100`;

			setLoader(true);

			const [follower, following] = await Promise.all([
				fetchPagination(followersUrl),
				fetchPagination(followingUrl),
			]);

			SetUnfollowers(getUnfollowers(follower, following));// you do not follow
			SetUnfollowing(getUnfollowers(following, follower));// do not follow you

			setLoader(false);
		};

		getData();
	}, [user]);

	console.log(user);

	return (
		<HeaderStyle>
			<h3>GitHub Unfollower Tracker</h3>

			<div className='wrapper'>
				<div className='input__wrapper'>
					<img src={github} alt='GitHub logo' />
					<input
						ref={refUserInput}
						type='text'
						name='user'
                        onKeyPress={handleKeyPress}
                        
						placeholder='Enter GitHub username here'
						required
					/>
				</div>

				<button onClick={handleClick}>
					{loader ? 'Loading' : 'Search'}
					<img src={search} alt='search icon' />
				</button>
			</div>
		</HeaderStyle>
	);
}

// state if changed, componenet re renders, but if ref changed , componenet dosent rerenders.

// to avoid reinitialization of variables etc.. everytime componenet rerenders, useRef is used 

// Promise.all is used to concurrently fetch data from two different URLs (followersUrl and followingUrl). Both fetchPagination calls return promises, 
// and Promise.all waits for both promises to resolve. Once both promises have resolved, follower and following will contain the resolved 
// values (data fetched from the respective URLs) in the same order as they were provided in the input array. 
