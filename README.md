# Giffaw

Your goal is to integrate your Giffaw app with the Giphy API. By the end of this lab, your app should be able to retrieve and search Giphy's database of gifs.

## Basic Requirements

* A user can see the top 25 trending gifs on page load – See [Trending](https://developers.giphy.com/docs/) documentation
* A user can search for gifs, using the input field – See [Search](https://developers.giphy.com/docs/) documentation
* BONUS: A user can click a "See More" button at the bottom of the page to load more gifs

![desktop layout](https://cloud.githubusercontent.com/assets/3010270/13936044/2ffadf60-ef78-11e5-95c5-55b8aefe68d6.png)

## Introduction: Thinking Like An Engineer

You will need to write AJAX calls in your JavaScript file to get data from the Giphy API [here](http://developers.giphy.com/) and power your Giffaw app.

As we get into more complicated labs & problems, practice thinking like engineers. Engineers break down large problems into the smallest possible parts, and tackle each small part one at a time. This is an extremely valuable skill in web development, and one that you will need to nurture throughout your coding journey.

Here are some steps to get you into this mindset for Giffaw:

1. Familiarize yourself with the [Giphy docs](https://developers.giphy.com/docs/)
	- Note that you need an API key to access the Giphy API (none of your AJAX calls will work without one!)
	- Get particularly familiar with the Trending & Search API endpoints – you will be using these to meet your project requirements

1. Get that API key!
	- Follow the directions in the documentation to get an API key (does NOT have to be a production API key)

1. Test the API out in your browser before writing any code (i.e. your AJAX calls)
	- Go to an API endpoint in your browser, using your API key
	- For example: go to http://api.giphy.com/v1/gifs/trending?api_key=whatever-your-api-key-is-here in your browser to see the top 25 trending Giphy gifs
	- You should see a JSON object with your API response

1. Review how to write an AJAX call
	```js
	$.ajax({

		// What kind of request
		method: "GET",

		// The URL for the request
		url: "http://api.giphy.com/v1/gifs/trending",

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

We first want to write jQuery that returns and `console.log()`s that same JSON object we saw when we visited an API endpoint in our browser. How do we do this?

1. 

1. Start coding in your `scripts/app.js` file
	- Don't try to do everything at once! 
	- First, make an AJAX call to the Giphy Trending endpoint when your page loads (i.e. when your document is ready)
	
	```js
	$.ajax({
		// What kind of request
		method: "GET",

		// The URL for the request
		url: [put your trending API endpoint URL here],

		// Code to run if the request succeeds.
		// The JSON response you get back from the Giphy API is the first argument in your success function.
		success: function(json) {
			// console.log this json argument to see if you got the correct data!
			// Once you have the correct data showing up, you should iterate through the 25 gifs you got
			// and start appending them to the <div class="gif-gallery"></div> in your HTML page
		},

		// Code to run if the request fails!
		// The raw request, its status, and the error thrown are the arguments passed to your error function.
		error: function (xhr, status, error) {
			alert("Sorry, there was a problem!");
			console.log("Status: " + status);
			console.log("Error: " + error);
		}
	});
	```
	
	- Then, console.log the JSON you got back from Giphy's API
	- Then, think about what you need to to get the gifs to load on the page. There is a bunch of stuff in the API response's JSON object – figure out what you need
	- Finally, generate image tags for each gif in the JSON data and `append()` these image tags to the DOM


## Search Gifs
1. How would you repurpose your first AJAX request (to the Trending endpoint) to GET the data you want from the Search endpoint?
	- What is your new API url? What are the query parameters?
	- HINT: you need to `serialize()` your form data (i.e. your search term)
1. HINT: you need to `serialize()` your form data to send the search term with your API search request for 
	```js
	$.ajax({

		// What kind of request
		method: "GET",

		// The URL for the request
		url: [put your search API endpoint URL here],

		// The data to send aka your search term options
		data: $("form").serialize(),

		// Code to run if the request succeeds;
		// the response is passed to the function
		success: function(json) {
			// console.log this json argument to see if you got the correct data!
			// Once you have the correct data showing up, you should iterate through the 25 gifs you got
			// and start appending them to the <div class="gif-gallery"></div> in your HTML page
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

1. Get the input box to make a different AJAX call to the search URL.
	- Does a search box button have a default action? What do we want do with that?
	- Are we just appending more and more gifs to the DOM? Do we need to clear previous gifs before loading more?
	- OMG are you making a one page app using AJAX like a boss?

## BONUS
1. Add a `Load More` button that, when clicked, appends 25 more gifs to the bottom of the page.
	- Use the `offset` query parameter 
	- See Giphy's Search API documentation for more information.

## Solution 
- Solution in the [`solution` branch](https://github.com/SF-WDI-LABS/giffaw/tree/solution)
- "Load More" button solution in the [`solution-more` branch](https://github.com/SF-WDI-LABS/giffaw/tree/solution-more)

## Additional Resources

- [http://youmightnotneedjquery.com](http://youmightnotneedjquery.com/)
- [jQuery AJAX Docs](http://api.jquery.com/jquery.ajax/)
- [Some useful jQuery DOM Manipulation Docs](http://api.jquery.com/prepend/)
