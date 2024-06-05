//Require module
const express = require('express');
// Express Initialize
const app = express();
const port = 8080;

const JOBS = [
    {'name': 'Jr Java Developer', 'salary': 24000, 'country': 'Argentina', 'skills': ['Java', 'OOP']},
    {'name': 'SSr Java Developer', 'salary': 34000, 'country': 'Argentina', 'skills': ['Java', 'OOP', 'Design Patterns']},
    {'name': 'Sr Java Developer', 'salary': 44000, 'country': 'Argentina', 'skills': ['Java', 'OOP', 'Design Patterns']},
    {'name': 'Jr PHP Developer', 'salary': 24000, 'country': 'Spain', 'skills': ['PHP', 'OOP']},
    {'name': 'SSr PHP Developer', 'salary': 34000, 'country': 'Spain', 'skills': ['PHP', 'OOP', 'Design Patterns']},
    {'name': 'Sr Developer', 'salary': 44000, 'country': 'Argentina', 'skills': ['PHP', 'OOP', 'Design Patterns']},
    {'name': 'Functional Analyst', 'salary': 38000, 'country': 'Argentina', 'skills': ['UX']},
    {'name': 'Jr Python Developer', 'salary': 28000, 'country': 'USA', 'skills': ['Python', 'OOP']},
    {'name': 'React Developer', 'salary': 49000, 'country': 'Argentina', 'skills': ['React', 'TypeScript']},
    {'name': 'Angular Developer', 'salary': 49000, 'country': 'Argentina', 'skills': ['Angular', 'TypeScript']},
    {'name': 'Database Analyst', 'salary': 34000, 'country': 'Spain', 'skills': ['MySQL']},
    {'name': 'Database Administrator', 'salary': 44000, 'country': 'Argentina', 'skills': ['MySQL', 'Percona']},
    {'name': 'Linux Admin', 'salary': 43000, 'country': 'USA', 'skills': ['Linux', 'Docker']},
    {'name': 'Windows server Admin', 'salary': 44000, 'country': 'Argentina', 'skills': ['Windows Server']},
    {'name': 'Jr UX Designer', 'salary': 25000, 'country': 'Spain', 'skills': ['UX']},
    {'name': 'Sr UX Designer', 'salary': 40000, 'country': 'Argentina', 'skills': ['UX']},
    {'name': 'Go Developer', 'salary': 50000, 'country': 'USA', 'skills': ['Go']},
    {'name': 'Jr C# Developer', 'salary': 30000, 'country': 'Argentina', 'skills': ['C#', 'OOP']},
    {'name': 'SSr C# Developer', 'salary': 46000, 'country': 'USA', 'skills': ['C#', 'OOP', 'Design Patterns']},
    {'name': 'Sr C# Developer', 'salary': 50000, 'country': 'Spain', 'skills': ['C#', 'OOP', 'Design Patterns']},
    {'name': 'Sr C++ Developer', 'salary': 50000, 'country': 'USA', 'skills': ['C++', 'OOP', 'Design Patterns']},
    {'name': 'Sr C Developer', 'salary': 54000, 'country': 'USA', 'skills': ['C', 'Design Patterns']},
    {'name': 'Ruby Developer', 'salary': 34000, 'country': 'Argentina', 'skills': ['Ruby', 'OOP']},
    {'name': 'Business Analyst', 'salary': 30000, 'country': 'Spain', 'skills': ['BI']},
    {'name': 'CTO', 'salary': 100000, 'country': 'Spain', 'skills': []},
    {'name': 'Network Administrator', 'salary': 40000, 'country': 'USA', 'skills': ['Networking', 'IT']},
    {'name': 'Kotlin Developer', 'salary': 50000, 'country': 'Spain', 'skills': ['Kotlin', 'OOP']},
    {'name': 'Cloud Engineer', 'salary': 65000, 'country': 'USA', 'skills': ['AWS', 'Azure', 'Docker']},
    {'name': 'Data Scientist', 'salary': 70000, 'country': 'Argentina', 'skills': ['Python', 'Machine Learning', 'Statistics']},
    {'name': 'Machine Learning Engineer', 'salary': 75000, 'country': 'Spain', 'skills': ['Python', 'TensorFlow', 'Deep Learning']},
    {'name': 'DevOps Engineer', 'salary': 60000, 'country': 'USA', 'skills': ['CI/CD', 'Docker', 'Kubernetes']},
    {'name': 'Cybersecurity Specialist', 'salary': 72000, 'country': 'Argentina', 'skills': ['Security', 'Penetration Testing']},
    {'name': 'Project Manager', 'salary': 55000, 'country': 'Spain', 'skills': ['Project Management', 'Agile']},
    {'name': 'Mobile App Developer', 'salary': 48000, 'country': 'Argentina', 'skills': ['iOS', 'Android', 'Flutter']},
    {'name': 'Blockchain Developer', 'salary': 90000, 'country': 'USA', 'skills': ['Blockchain', 'Solidity']},
    {'name': 'Game Developer', 'salary': 53000, 'country': 'USA', 'skills': ['Unity', 'C#']},
    {'name': 'AI Research Scientist', 'salary': 85000, 'country': 'Spain', 'skills': ['AI', 'Machine Learning', 'Python']},
    {'name': 'Full Stack Developer', 'salary': 58000, 'country': 'Argentina', 'skills': ['JavaScript', 'Node.js', 'React']},
    {'name': 'Tech Lead', 'salary': 75000, 'country': 'Spain', 'skills': ['Leadership', 'Java', 'Agile']},
    {'name': 'Scrum Master', 'salary': 65000, 'country': 'USA', 'skills': ['Scrum', 'Agile', 'Project Management']},
    {'name': 'Frontend Developer', 'salary': 54000, 'country': 'Argentina', 'skills': ['HTML', 'CSS', 'JavaScript']},
    {'name': 'Backend Developer', 'salary': 59000, 'country': 'Spain', 'skills': ['Java', 'Spring', 'Microservices']}
];

function convertSkillsToXML(skillsArray) {
    return skillsArray.reduce((xmlString, skill) => {
        return xmlString + `<skill>${skill}</skill>`;
    }, '<skills>') + '</skills>';
}

app.listen(port,()=> {
    console.log('listening port ' + port);
})

app.get('/jobs', (req,res) => {
    try {
        let name = req.query.name;
        let salary_min = req.query.salary_min;
        let salary_max = req.query.salary_max;
        let country = req.query.country;
        res.send(
            JOBS.filter(
                job => (
                    (name === undefined || job.name.toLowerCase().includes(name.toLowerCase()))
                    && (salary_min === undefined || job.salary >= salary_min)
                    && (salary_max === undefined || job.salary <= salary_max)
                    && (country === undefined || job.country.toLowerCase() === country.toLowerCase())
                )
            ).reduce((groupedJobs, job) => {
                const country = job.country;
                if (!groupedJobs[country]) {
                    groupedJobs[country] = [];
                }
                groupedJobs[country].push(
                    [job.name, job.salary, convertSkillsToXML(job.skills)]
                );
                return groupedJobs;
            }, {})
        );
    } catch (error) {
        return res.status(400).json({status: 400, message: error.toString()})
    } 
})
