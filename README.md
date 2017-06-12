# Take screenshots of Docker Datacenter, automatically

This automates the task of taking screenshots of Docker Datacenter for
docs.docker.com.
This won't deploy a DDC instance for you, so you'll need to do that before
taking any screenshots.

## 1. Fork and clone this repo

This is pretty much the usual Git workflow

## 2. Choose your DDC instance

Edit the environment variables in `docker-compose.yml` file to point to your
DDC instance. Here's an example:

```
UCP_URL=https://192.168.99.102
UCP_ADMIN_USERNAME=admin
UCP_ADMIN_PASSWORD=password
```

## 3. Run the compose file

```
cd ddc-screenshots
docker-compose up
```

This deploys the containers that take the screenshots, and will save the
screenshots at `/output`.

## 4. Contribute

This uses [nightwatchjs](http://nightwatchjs.org/) to walk through the DDC UI
and take the screenshots. Here are the files you should care about

```
└── src
    ├── app
    │   ├── commands
    │   ├── pages --> Utility functions for each page so that you DRY
    │   ├── reports
    │   └── tests --> The starting point for each run
    ├── fixtures --> seed data used during the runs, like licenses.
```
