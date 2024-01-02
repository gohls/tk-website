from ariadne.constants import PLAYGROUND_HTML
from flask import Flask, request, jsonify
from flask_cors import CORS
from ariadne import QueryType, load_schema_from_path, make_executable_schema, graphql_sync
from datasource import poems_data

# schema
type_defs = load_schema_from_path("schema.gql")

# Initialize query
query = QueryType()

# resolver
@query.field("poems")
def poems(*_):
   return poems_data

schema = make_executable_schema(type_defs, query)

app = Flask(__name__, static_url_path='', static_folder='client/build')
CORS(app)

@app.route("/graphql", methods=["POST"])
def graphql_server():
   data = request.get_json()
   success, result = graphql_sync(schema, data, context_value={"request": request})
   status_code = 200 if success else 400
   return jsonify(result), status_code

if __name__ == "__main__":
   app.run(debug=True)