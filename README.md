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

Test POST body (in json) <br>
{ <br>
  "name": "Test Event", <br>
  "description": "Description of Event", <br>
  "startdate": "2024-05-20 08:00", <br>
  "enddate": "2024-05-20 17:00" <br> 
}


# Images
![GET example](/screenshots\Get.png?raw=true "GET example")
![GET example](/screenshots\Post.png?raw=true "GET example")