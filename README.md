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

Example: `http://localhost:8081/jobs?name=Java`

The API response is JSON-formatted and contains a list of jobs, grouped by country, where each job is represented by an array of three positions (name, salary, skills). 

Example:
```json
{
    "Argentina": [
        ["Developer", 30000, ["OOP", "PHP"]],
        ["Senior Developer", 40000, ["OOP", "PHP", "MySQL"]]
    ],
    "Spain": [
        ["DBA", 35000, "Spain", ["MySQL", "Percona", "Bash"]]
    ]
}
```
