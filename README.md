# AgileTech-Assignment

## API DOCUMENTAION

The API follows a RESTful architecture with the base URL as https://example.com/api/v1. All requests and responses are in JSON format.

## API Endpoints:

### Request Type: GET
API Endpoint: /events/:id
Payload: None
Description: Retrieves an event based on its unique ID.
Get Latest Events:

### Request Type: GET
API Endpoint: /events/latest
Payload: Optional query parameters - limit (integer), page (integer)
Description: Retrieves the latest events. Optional query parameters limit and page can be used for pagination.
Create Event:

### Request Type: POST
API Endpoint: /events
Payload: name (string), tagline (string), schedule (string), description (string), moderator (string), category (string), sub_category (string), rigor_rank (integer), attendees (array of user IDs)
Description: Creates a new event with the given details and returns the ID of the created event.
Update Event:

### Request Type: PUT
API Endpoint: /events/:id
Payload: same as the Create Event endpoint
Description: Updates an existing event based on its unique ID.
Delete Event:

### Request Type: DELETE
API Endpoint: /events/:id
Payload: None
Description: Deletes an existing event based on its unique ID.


## CRUD Functionality Documentation:

### Create:
To create a new event, send a POST request to the /events endpoint with the required details as payload. The API will return the ID of the created event.

### Read:
To retrieve an event by its ID, send a GET request to the /events/:id endpoint with the ID of the event as the parameter. The API will return the event details.

To retrieve the latest events, send a GET request to the /events/latest endpoint. The API will return the latest events. Optional query parameters limit and page can be used for pagination.

### Update:
To update an existing event, send a PUT request to the /events/:id endpoint with the ID of the event as the parameter and the updated details as payload.

### Delete:
To delete an existing event, send a DELETE request to the /events/:id endpoint with the ID of the event as the parameter. The API will delete the event.