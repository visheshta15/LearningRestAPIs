# install the server
npm install json-server

# Create a db.json or db.json5 file

# to run the server
json-server --watch db.json --port 3031

# status code
200         ok          GET
201         created     POST
204  response is for when the request succeeds but has no body to return

500 is a generic error response. It means that the server encountered an unexpected condition that prevented it from fulfilling the request.

# restfull api
# GET 
fetch the records

# POST
create new record

# PUT
updating the entire resource

# PATCH
update only the fields that have changed in the resource

# DELETE