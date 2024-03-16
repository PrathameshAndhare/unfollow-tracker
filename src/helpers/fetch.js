function fetchPagination(url, page = 1, previousResponse = []) {
	return fetch(`${url}&page=${page}`, {
		headers: {
			Authorization: `token${import.meta.env.VITE_GITHUB_TOKEN}`
		},
	}).then(response => {
		if (response.ok) {
			return response.json();
		}
		throw new Error(response.status); // if this then directly go to line 21
	})
	.then(newResponse => {
		const response = [...previousResponse, ...newResponse];
		if (newResponse.length !== 0) {
			page++;
			return fetchPagination(url, page, response);
		} else {
			return response;
		}
	})
	.catch(error => console.log(error));
}

export { fetchPagination };

// import.meta.env.VITE_GITHUB_TOKEN is accessing the environment variable VITE_GITHUB_TOKEN from the environment where the code is running.

// Environment variables are used to store sensitive information like API keys or tokens securely outside of the codebase.

// In this case, VITE_GITHUB_TOKEN is assumed to contain a token that provides access to GitHub's API.

//Headers are key-value pairs that provide additional information about the request or the data being sent.

// In the provided code snippet, the Authorization header is set using the headers property to pass authentication credentials (in this case, a token) to the server.

// This is a common use case for custom headers, especially when making requests to APIs that require authentication.

//So, overall, the code is indeed trying to fetch a response from the URL while passing additional information (the GitHub token) for 
//authentication purposes via the Authorization header in the request headers
