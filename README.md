# Description
REST API for an Event Management Application

# Setup
1. Download as a Zip
2. Unzip and open in VSC
3.  Download Node.js either from
    - https://nodejs.org/en/download/
    - or install manually
      - _winget install Schniz.fnm_
      - _fnm install 22_
      - _node -v_ (Should print "v22.15.1".)
      - _npm -v_ (Should print "10.9.2".)
4. Run _npm install_
5. Run_ node app.js_ to run server
6. Go to http://localhost:3000/events to verify the server is running

# Testing
To test if API works, use Postman API platform and send a GET request using http://localhost:3001/events as the URL.
It should return a json with all the data. You can refine this search using GET /events/:id or GET /events/name/:name instead of GET /events.

To test the POST, do POST /events and include the following as a json body (replace the placeholders).

{ <br>
  "name": "Test Event", <br>
  "description": "Description of Event", <br>
  "startdate": "2024-05-20 08:00", <br>
  "enddate": "2024-05-20 17:00" <br> 
}


# Images
Example of testing API with GET http://localhost:3001/events
![GET example](/screenshots/Get.png?raw=true "GET example")

Example of testing API with POST http://localhost:3001/events (need json body)
![Post example](/screenshots/Post.png?raw=true "Post example")
