from google.cloud.devtools import cloudbuild_v1

def trigger_cloud_build(request):
    build = {"steps": [
          {
            "name": "bash",
            "args": ["echo", "Hello Cloud Build"],
          }
        ],
    }
    client = cloudbuild_v1.CloudBuildClient()

    response = client.create_build(
            project_id="PROJECT_ID",
            build=cloudbuild_v1.Build(build),
    )


def step_one_entrypoint(request):
    """Responds to any HTTP request.
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.

    request_json = request.get_json()
    if request.args and 'message' in request.args:
        return request.args.get('message')
    elif request_json and 'message' in request_json:
        return request_json['message']
    else:
        return f'Hello World!'
    """
    trigger_cloud_build(request)
    return f'Hi step one entrypoint'

