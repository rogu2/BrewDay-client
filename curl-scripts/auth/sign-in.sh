# VARIABLE=VALUE sh curl-scripts/auth/sign-in.sh

curl "https://brew-day.herokuapp.com/sign-in" \
  --include \
  --request POST \
  --header "Content-type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo
