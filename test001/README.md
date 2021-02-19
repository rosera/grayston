# Deploy Cloud Function


- [x] STEP e.g. step_1 (as defined in your activity tracking code)
- [x] PROJECT_ID 



## Deploy the Cloud Function
```
gcloud functions deploy [STEP] --set-env-vars PROJECT_ID=$GOOGLE_CLOUD_PROJECT --runtime nodejs12 --trigger-http --allow-unauthenticated
```
