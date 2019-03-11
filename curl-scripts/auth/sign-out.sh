# VARIABLE=VALUE sh curl-scripts/auth/sign-out.sh

curl "https://brew-day.herokuapp.com/sign-out" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json"

echo
