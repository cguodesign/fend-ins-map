#Introduction:
##


## Contact:
Chong Guo, cguo{dot}tju@gmail.com


#How to run the project:

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



===============
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)
