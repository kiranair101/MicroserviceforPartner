# Communication Contract: Microservice Implemented for Partner
Request Portion: Two functions are being run asynchronously. One function to hold the value of a random card and one function to hold the value of a random deck which holds 50 random cards. An object is created to hold the value of the random card. Then the value stored in the API is fetched to retrieve the data from that card. That information will be placed in the corresponding key's value. Finally that object will be returned. Same goes for the random deck except the data of a single card will be added 50 times (the number of card in a deck) and then that object is also returned. We then export those two functions to the controller.mjs file where the actual request takes place. Two get requests are implemented to handle the two objects that are supposed to be sent to the browser. Within both get requests, the asynchronous functions are being called to get the objects.

Response Portion: Depending on what the user wants whether it is a random card or random deck, each corresponding function and that value will be returned to the browser


![Drawing - Microservice (1)](https://user-images.githubusercontent.com/103273940/218556646-6aca7312-359a-4d27-89e4-42ece98b2b42.jpg)

