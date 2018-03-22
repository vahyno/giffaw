# Giffaw

Your goal is to integrate your Giffaw app with the Giphy API. By the end of this lab, your app should be able to retrieve and search Giphy's database of gifs.

## Basic Requirements

* A user can see the top 25 trending gifs on page load – See [Trending](https://developers.giphy.com/docs/) documentation
* A user can search for gifs, using the input field – See [Search](https://developers.giphy.com/docs/) documentation
* BONUS: A user can click a "See More" button at the bottom of the page to load more gifs

Your site should look something like:

![desktop layout](https://cloud.githubusercontent.com/assets/3010270/13936044/2ffadf60-ef78-11e5-95c5-55b8aefe68d6.png)

## Introduction

You will need to write AJAX calls in your JavaScript file to get data from the Giphy API and power your Giffaw app.

Make use of the fantastic Giphy API [here](http://developers.giphy.com/). Check out the documentation [here](https://developers.giphy.com/docs/).

## Preparation: Thinking Like An Engineer

As we get into more complicated problems, we need to start thinking more and more like engineers. Engineers break down large problems into the smallest possible parts, and tackle each small part one at a time. This is one of the major skills for web development!

Here's some steps to follow to help get you in this mindset:

1. Familiarize yourself with the [docs](https://developers.giphy.com/docs/)
	- Get particularly familiar with the Trending and Search endpoints
	- Note that you need an API key to access the API (none of your AJAX calls will work without one!)

1. Get that API key!
	- Follow the directions in the documentation to get an API key (does NOT have to be a production API key)

1. Test the API out in your browser before writing any code (i.e. your AJAX calls)
	- Go to an API endpoint in your browser, using your API key
	- For example: go to http://api.giphy.com/v1/gifs/search?q=cats&api_key=whatever-your-api-key-is-here in your browser to see your search request result for the search-term "cats"
	- You should see a JSON object with your API response

1. Review how to write an AJAX call

```js
	$.ajax({

	// What kind of request
	method: "GET",

	// The URL for the request
	url: "http://api.giphy.com/search",

	// The data to send aka query parameters
	data: $("form").serialize(),

	// Code to run if the request succeeds;
	// the response is passed to the function
	success: function(json) {
		$("div").append("<h1>"+json.title+"</h1>");
	},

	// Code to run if the request fails; the raw request and
	// status codes are passed to the function
	error: function (xhr, status, errorThrown) {
		alert("Sorry, there was a problem!");
		console.log("Status: " + status);
		console.log("Error: " + errorThrown);
	}
});
```

1. Fork and clone this project, and start looking around!
	- Are your HTML, CSS, and JS files all linked together properly?

## Get Trending Gifs

We first want to write jQuery that returns and `console.log()`s that same object we saw when we opened the API in our browser. BUT HOW DO I AJAX!!??
	- Look at this example of an `$.ajax` request:
	```js
	$.ajax({

		// What kind of request
		method: "GET",

		// The URL for the request
		url: "http://api.giphy.com/search",

		// The data to send aka query parameters
		data: $("form").serialize(),

		// Code to run if the request succeeds;
		// the response is passed to the function
		success: onSuccess,

		// Code to run if the request fails; the raw request and
		// status codes are passed to the function
		error: onError
	});

	function onSuccess(json) {
		$("div").append("<h1>"+json.title+"</h1>");
	}

	function onError(xhr, status, errorThrown) {
		alert("Sorry, there was a problem!");
		console.log("Error: " + errorThrown);
		console.log("Status: " + status);
		console.dir(xhr);
	}
	```
	- How would you repurpose this to GET the data you want from the URL you want.
		- What is your base API url? What are the query parameters?
		- HINT: you need to `serialize()` your form data.

4. Start playing in your scripts/app.js file.
	- Your first step is to make an Ajax call fire when your page loads. Don't try to do everything at once! First try to log the data to the console. Then work on logging specific data you want. What do you need to get the gifs to actually load on the page? There is a bunch of stuff in this data object and you need to figure out what you need.
	- Once you narrowed that down, THEN you want to build functions that generate HTML Strings and `append()` them to the page.
	- First log those strings to the console, and make sure they look like you think they should. THEN append them into the DOM!

5. Can you bonus? Get the input box to make a different AJAX call to the search URL.
	- Does a search box button have a default action? What do we want do with that?
	- Are we just appending more and more gifs to the dom? Do we need to clear previous gifs before loading more?
	- OMG are you making a one page app using AJAX like a boss?

6. Can you do the BONUS? Add a `Load More` button that, when clicked, appends 25 more gifs to the bottom of the page.
	- You will need to make use of the `offset` query parameter. See [Search Endpoint](https://github.com/Giphy/GiphyAPI#search-endpoint) section for more information.

## Solution 
- Solution in the [`solution` branch](https://github.com/SF-WDI-LABS/giffaw/tree/solution)
- "Load More" button solution in the [`solution-more` branch](https://github.com/SF-WDI-LABS/giffaw/tree/solution-more)

## Additional Resources

- [http://youmightnotneedjquery.com](http://youmightnotneedjquery.com/)
- [jQuery AJAX Docs](http://api.jquery.com/jquery.ajax/)
- [Some useful jQuery DOM Manipulation Docs](http://api.jquery.com/prepend/)
