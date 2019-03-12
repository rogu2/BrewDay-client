#!/bin/bash

curl "http://localhost:4741/brews/brews" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
