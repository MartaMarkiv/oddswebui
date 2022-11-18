## Specifies that Tilt is allowed to run against the specified k8s context names.
## In this case we want to run the app against the XENA Training Cluster
## https://docs.tilt.dev/api.html#api.allow_k8s_contexts
allow_k8s_contexts('arn:aws:eks:us-east-1:157485876214:cluster/oddsbender-cluster')

## Run `helm template` on a given directory that contains a chart and return the fully rendered YAML.
## The `name` and `namespace` should be updated with the assigned student number.
## https://docs.tilt.dev/api.html#api.helm
yaml = helm(
  'deploy',
  # The release name, equivalent to helm --name
  name='oddsbender-web-ui',
  # REPLACE HERE - The namespace to install in, equivalent to helm --namespace
  namespace='dev-oddsbender',
  # The values file to substitute into the chart.
  values=[
    'conf-deploy/common.values.yaml'
  ],
  set = [
    'command=[]', 'args=[]'
  ]
)

## Apply the helm chart object created in above step.
## https://docs.tilt.dev/api.html#api.k8s_yaml
k8s_yaml(yaml)

## Build the front-end container with the development version of the Dockerfile
## Do not trigger a build when the backend, Tiltfile, or .vscode files/folders are updated
## Execute a live update of the code whenever a file in the frontend folder is changed.
## When the package.json or package-lock.json are changed trigger an npm install inside of the pod.
## https://docs.tilt.dev/api.html#api.docker_build-ui
docker_build('157485876214.dkr.ecr.us-east-2.amazonaws.com/web-ui', '.',
	# dockerfile='Dockerfile.dev',
  dockerfile='./build_images/web-ui/Dockerfile',
    ignore=['csv', 'Tiltfile', '.vscode', 'deploy/*', '.venv/*'],
    live_update=[
      sync('./src', '/app/web/src'),
		  run('cd /app/web && npm install', trigger=['./package.json'])
    ]
)

  
## Configure port forwarding to connect localhost directly to the port the app is running on in the pod.
## Port 3000 - Frontend Pod
## Port 5000 - Backend Pod
## Port 9229 - NodeJS Debugging
## https://docs.tilt.dev/api.html#api.k8s_resource
# k8s_resource('attendance-tracker', port_forwards=['3000:3000', '5000:5000', '9229:9229'])
