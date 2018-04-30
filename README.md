# Introduction:

- About:
  This is a final project for Udacity's frontend nanodegree program, the apps shows 20 most popular ramen places in NYC, and provides a quick glance at if the ramen place is open via Yelp api.

- Contact:
  - Chong Guo, cguo{dot}tju{at}gmail.com

- Data Used:
  - Json format data (hard-coded) for name and the address of the ramen shops.
  - Google api to provide location service
  - Yelp api to provide photos of the ramen places, opening status.

- Opensource Libs Used:
  - [React and create-react-app](https://reactjs.org/)
  - [axios](https://github.com/axios/axios)
  - [google-maps-react](https://github.com/fullstackreact/google-maps-react)
  - [flask](http://flask.pocoo.org/docs/1.0/installation/#)
  - [flask_cors](http://flask-cors.readthedocs.io/en/latest/)
  - [font-awesome](https://fontawesome.com/)
  - [react-onclickoutside](https://github.com/Pomax/react-onclickoutside)

# How to run the project:

## 1. place the dev tokens ( you can find them in the comment of the Udacity submission)
- In /fend-ramen-map-server/app.py, line 11, Add the YELP_TOKEN in the notes.
- In /fend-ramen-map-server/app.py, line 96, Add the apiKey from google map.
- In /src/Mapcontainer.js, line 79, Add the apiKey from google map.

## 2. start the backend server, in the terminal:
- ```cd fend-ramen-map-server```
- If you have python3
  - Mac:
    ```
    python3 -m venv venv
    ```
  - windows
    ```
    py -3 -m venv venv
    ```
- If you have python2
  - (mac) ```virtualenv venv```
  - (windows) ```\Python27\Scripts\virtualenv.exe venv```
- ```pip install -r requirements.txt``` to install dependencies
- ```. venv/bin/activate``` to activate the virtual environment
- ```flask run``` to start the server at localhost:5000
  - to exit the flask server
    - Command/Ctrl + C to exit the server
    - enter ```deactivate``` in the terminal to exit the virtualenv

## 3. run the frontend app in dev mode:
- ```cd fend-ramen-map```
- ```yarn install``` to install dependencies
- ```yarn start``` to start dev mode

## 4. Quick Guide:
- Dropdown on the top navigation bar provides switches between all places, and the places that are currently open.
- On the bottom, there are 20 recommended places, can be viewed horizontally.
  - Each card contains 3 pictures. Pictures can be shuffles via the shuffle button.
  - Clicking on the card will zoom in to the place's detailed map and show a bouncing ramen icon.

## Troubleshooting:
- For virtualenv issues, please refer to:
  - [virtualenv install](http://flask.pocoo.org/docs/1.0/installation/#)
- This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
