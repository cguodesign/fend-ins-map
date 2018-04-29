import traceback
import requests
import json
from flask import Flask
from flask_cors import CORS
from flask import jsonify, request

app = Flask(__name__)
CORS(app)

YELP_TOKEN = 

@app.route('/yelp_business_match')
def yelp_business_match():
    print 'getting yelp business match api'
    address1 = request.args.get('address1')
    name = request.args.get('name')
    city = request.args.get('city')

    print name
    print address1
    print city

    try:
        r = requests.get(
            'https://api.yelp.com/v3/businesses/matches',
            headers={'Authorization': YELP_TOKEN},
            params={'name': name, 'address1': address1, 'city': city, 'state':'NY','country':'US'})
        return r.text
    except:
        print traceback.print_exc()
        return 'failed to get yelp business match api'

@app.route('/yelp_business_detail')
def yelp_business_detail():
    print 'getting yelp business details'
    requestUrl = 'https://api.yelp.com/v3/businesses/' + request.args.get('business_id')
    # requestUrl = 'https://api.yelp.com/v3/businesses/WavvLdfdP6g8aZTtbBQHTw'
    try:
        r = requests.get(
            requestUrl,
            headers={'Authorization': YELP_TOKEN}
        )
        return r.text
    except:
        print traceback.print_exc()
        return 'failed to get yelp business details api'
