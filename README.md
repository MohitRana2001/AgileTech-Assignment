# AgileTech-Assignment

## API DOCUMENTAION

The API follows a RESTful architecture with the base URL as https://example.com/api/v3/app. All requests and responses are in JSON format.

<hr>
## API Endpoints:

### Request Type: GET
API Endpoint: /events/:id <br>
Payload: None <br>
Description: Retrieves an event based on its unique ID.<br>
<hr>

## Get Latest Events:

### Request Type: GET
API Endpoint: /events/latest <br>
Payload: Optional query parameters - limit (integer), page (integer). <br>
Description: Retrieves the latest events. Optional query parameters limit and page can be used for pagination.<br>
<hr>

## Create Event:

### Request Type: POST
API Endpoint: /events <br>
Payload:

<table>
    <tr>
        <th>Payload</th>
        <th>Category</th>
        <th>Type</th>
    </tr>
    <tr>
        <td>1.</td>
        <td>name</td>
        <td>String</td>
    </tr>
    <tr>
        <td>2.</td>
        <td>Tagline</td>
        <td>String</td>
    </tr>
    <tr>
        <td>3.</td>
        <td>Schedule</td>
        <td>String</td>
    </tr>
    <tr>
        <td>4.</td>
        <td>Description</td>
        <td>String</td>
    </tr>
    <tr>
        <td>5.</td>
        <td>Moderator</td>
        <td>String</td>
    </tr>
    <tr>
        <td>6.</td>
        <td>Category</td>
        <td>String</td>
    </tr>
    <tr>
        <td>7.</td>
        <td>Sub_categor</td>
        <td>String</td>
    </tr>
    <tr>
        <td>8.</td>
        <td>rigor_rank</td>
        <td>Integer</td>
    </tr>
    <tr>
        <td>9.</td>
        <td>Attendees</td>
        <td>Array of user ID's</td>
    </tr>
</table>

Description: Creates a new event with the given details and returns the ID of the created event.
Update Event:

### Request Type: PUT
API Endpoint: /events/:id
Payload: same as the Create Event endpoint
Description: Updates an existing event based on its unique ID.

<hr>

## Delete Event:

### Request Type: DELETE
API Endpoint: /events/:id <br>
Payload: None <br>
Description: Deletes an existing event based on its unique ID.

<hr>
<hr>
<hr>
## CRUD Functionality Documentation:

### Create:
To create a new event, send a POST request to the /events endpoint with the required details as payload. The API will return the ID of the created event.

<hr>

### Read:
To retrieve an event by its ID, send a GET request to the /events/:id endpoint with the ID of the event as the parameter. The API will return the event details.

To retrieve the latest events, send a GET request to the /events/latest endpoint. The API will return the latest events. Optional query parameters limit and page can be used for pagination.

<hr>

### Update:
To update an existing event, send a PUT request to the /events/:id endpoint with the ID of the event as the parameter and the updated details as payload.

<hr>

### Delete:
To delete an existing event, send a DELETE request to the /events/:id endpoint with the ID of the event as the parameter. The API will delete the event.

<hr>
<hr>
