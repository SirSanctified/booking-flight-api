# booking-flight-restapi

![](./rest.png)

## Objectives

Create a REST API for fight booking

## How It Works

1. Clone this repository to your local machine
2. Run ```npm start```. This will start the server on port 8000
3. Head to your Postman and enter ```http://localhost:8000/``` with the ```get``` method selected. Initially there are no flights since there is no database backend. An empty JSON array is returned.
4. To post/book your flight, enter flight details as JSON in the request body using the following format:
    ```{
        "title": "your flight title",
        "time": "your flight time",
        "price": "your flight's price",
        "date": "date of your flight"
    }```
and send your request with the ```post``` method selected. You will be informed that it was successifull. You may want to add as many flight as you like
5. Now get should return you a list of flights you added
6. To get a particular flight, enter ```http://localhost:8000/{id}``` with the ```get``` method selected, where ```id``` is an id of a flight that exists. You will get your flight back
7. To update a particular flight, enter ```http://localhost:8000/{id}``` with the ```patch``` method selected. In the body, enter the JSON representation of the fields to be updated. For example, to update the time, use ```{
    "time": "new time"
}```
8. To remove a particular flight, enter ```http://localhost:8000/{id}``` with the ```delete``` method selected.