#!/bin/bash

docker build -t mnr-transaction-id .

docker run -d --name mnr-transaction-id -p 5500:5500 mnr-transaction-id

./node_modules/.bin/tape 'test/integration/**/*.test.js' | ./node_modules/.bin/tap-summary

docker rm -f mnr-transaction-id
