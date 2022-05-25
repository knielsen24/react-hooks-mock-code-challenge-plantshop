User Experience

[x] When the app starts, I can see all plants.
		-need to render each item using map
		-useEffect and useState will be needed on initial render
[x] I can add a new plant to the page by submitting the form.
		- on submit the formdata gets passed to our plant list
		- should update state for plant list
[x] I can mark a plant as "sold out".
		-Toggle feature that renders message on plant card
		- Added state on PlantCard
[x?] I can search for plants by their name and see a filtered list of plants.
		-display filter that maps and uses includes to get values from searchbar
		-filter plants should be in PlantPage
		-need callback function passed down into search
		-onChange sends data back to plant page

		{
      "id": 1,
      "name": "Aloe",
      "image": "./images/aloe.jpg",
      "price": 15.99
    },

[x] I can delete a plant and it is still gone when I refresh the page.