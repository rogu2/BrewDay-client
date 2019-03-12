#!/bin/bash

curl "http://localhost:4741/brews/${ID}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "brew": {
      "id": "'"${ID}"'"
    }
  }'

echo
