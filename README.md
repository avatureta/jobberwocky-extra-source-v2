## JobberwockyExteneralJobs API

This API provides a single endpoint which returns a list of jobs that can be filtered using optional request's parameters.

First, build and execute the application:

```bash
$ docker build . -t avatureexternaljobs
$ docker run -p 8081:8080 avatureexternaljobs
```

Alternatively, you can run `npm install` and `node app.js` instead of using docker.

Now, you can access `http://localhost:8081/jobs`, which can receive the following params to filter the jobs:

- name
- salary_min
- salary_max
- country

Example: `http://localhost:8081/jobs?name=Engineer`

The API response is JSON-formatted and contains a list of jobs, grouped by country, where each job is represented by an array of three positions: name, salary, and skills (formatted in XML). 

Example:
```json
{
  "USA": [
    [
      "Cloud Engineer",
      65000,
      "<skills><skill>AWS</skill><skill>Azure</skill><skill>Docker</skill></skills>"
    ],
    [
      "DevOps Engineer",
      60000,
      "<skills><skill>CI/CD</skill><skill>Docker</skill><skill>Kubernetes</skill></skills>"
    ]
  ],
  "Spain": [
    [
      "Machine Learning Engineer",
      75000,
      "<skills><skill>Python</skill><skill>TensorFlow</skill><skill>Deep Learning</skill></skills>"
    ]
  ]
}
```
