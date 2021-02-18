// Ref: https://cloud.google.com/cloud-build/docs/api/reference/rest/v1/projects.builds#Build
// Ref: https://www.npmjs.com/package/@google-cloud/cloudbuild

// Imports the Google Cloud client library
const {CloudBuildClient} = require('@google-cloud/cloudbuild');
 
// Creates a client
const cb = new CloudBuildClient();

// Add a project ID from the environment
const projectId = process.env.PROJECT_ID || 'PRJ_ERROR';

// Process the function
async function step_function() {

  // Create a new build object
  const testObject = {
    steps: [
      {
        "name": "gcr.io/google.com/cloudsdktool/cloud-sdk",
        "args": ["gcloud", "-h"],
      },
    ]
  }

  const [resp] = await cb.createBuild({
    projectId: projectId,
    build: testObject
  });
}



/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.step_2 = (req, res) => {
  let message = req.query.message || req.body.message || 'Activity Tracking: Step 1 Endpoint';

  step_function();

  res.status(200).send(message);
};

