# Introduction:

- About:
  This is a final project for Udacity's frontend nanodegree program, the apps shows 20 most popular ramen places in NYC, and provides a quick glance at if the ramen place is open via Yelp api.

- Contact:
  - Chong Guo, cguo{dot}tju{at}gmail.com

- Opensource Libs Used:
  - [React and create-react-app](https://reactjs.org/)
  - [axios](https://github.com/axios/axios)
  - [google-maps-react](https://github.com/fullstackreact/google-maps-react)
  - [flask](http://flask.pocoo.org/docs/1.0/installation/#)
  - [flask_cors](http://flask-cors.readthedocs.io/en/latest/)

# How to run the project:

## 1. place the dev tokens
- In /fend-ramen-map-server/app.py, line 11, Add the YELP_TOKEN in the notes.
- In /src/Mapcontainer.js, Add the apiKey from google map.

## 2. start the backend server, in the terminal:
- cd fend-ramen-map-server
- If you have python3
  - python3 -m venv venv (mac)
  - py -3 -m venv venv (windows)
- If you have python2
  - virtualenv venv (mac)
  - \Python27\Scripts\virtualenv.exe venv (windows)
- pip install -r requirements.txt
- . venv/bin/activate

## 3. run the frontend app in dev mode:
- cd fend-ramen-map
- yarn install
- yarn start

## Troubleshooting:
- For virtualenv issues, please refer to:
  - [virtualenv install](http://flask.pocoo.org/docs/1.0/installation/#)
- This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
