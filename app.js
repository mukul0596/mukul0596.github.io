const skills = [
    'HTML',
    'CSS',
    'SCSS',
    'JavaScript',
    'jQuery',
    'Node.js',
    'React.js',
    'MongoDB',
    'Git',
    'GitHub',
    'C++',
    'C language',
    'pHp',
    'Java',
    'Problem Solving',
    'Creativity',
    'Decision Making',
    'Leadership',
    'Time Management',
    'Linux',
    'Windows',
    'Bootstrap',
    'Soft skills',
    'MS Office',
    'Adobe Photshop'
];

const experiences = [
    {
        'employee': 'Department of Visual Media, BITS Pilani',
        'title': 'Frontend Web Developer',
        'start': 'Aug-2018',
        'description': 'Department of Visual Media (DVM) is one of the most renowned department of BITS Pilani which manages and controls all the technical aspects of all three fests of BITS Pilani'
    },
    {
        'employee': 'Birla Institute of Technology and Science, Pilani',
        'title': 'Teaching Assistant (Software Development and Educational Technology)',
        'start': 'Aug-2019',
        'description': 'The Software Development and Educational Technology (SDET) division of BITS Pilani works on managing the websites, portals, apps and other software related technologies of BITS Pilani. And as a part of the team my job is to build the official website for all four campuses of BITS Pilani.'
    }
];

const educations = [
    {
        'institute': 'St. Francis School',
        'degree': 'Matriculate',
        'year': '2016',
        'marks': '92.2%'
    },
    {
        'institute': 'Sunbeam School Mughalsarai',
        'degree': 'Intermediate',
        'year': '2018',
        'marks': '93.8%'
    },
    {
        'institute': 'Birla Institute of Technology and Science, Pilani',
        'degree': 'Bachelor of Engineering (Hons) - Mechanical Engineering',
        'year': 'Current'
    }
];

const projects = [
    {
        'title': 'ikc-deal(backend)',
        'description': 'The project was a private project of a BITS alumni. The goal of the project was to create the backend of the ikc- deal mobile app with NodeJs and deploy it on aws. ikc-deal is a mobile application that provides various service like shopping, affiliate marketing, auction, mobile recharge and an inbuilt wallet. The project was done by two JavaScript developers in about 1.5 months.',
        'link': 'https://github.com/chirag-singhal/ikc-deal'
    },
    {
        'title': 'BITS Pilani Website',
        'description': 'The project is to build the official website of Birla Institute of Technology and Science (BITS) along with a content management system (CMS). The project is currently in progress under the professor Yashwardhan Sharma of BITS Pilani. The team working on the project consists of 4 members 2 backend and 2 frontend developer. The backend of the project us written in django and the frontend is written with HTML, CSS, jQuery and vanilla JS. My role is of a frontend developer.',
        'link': 'https://github.com/rohitrajhans/BITS-website'
    }
];


window.onload = () => {
    appendSkills();
    appendExperiences();
    appendEducations();
    appendProjects();
}


const appendSkills = () => {
    skills.map(skill => {
        const div = document.createElement('div');
        div.innerHTML = skill;
        div.className = 'skill';
        document.getElementsByClassName('skills')[0].appendChild(div);
    });
}

const appendExperiences = () => {
    experiences.map(experience => {
        const div = document.createElement('div');
        div.className = 'experience';
        const head = document.createElement('div');
        head.className = 'header';
        const employee = document.createElement('span');
        employee.innerHTML = experience.employee;
        employee.className = 'employee';
        head.appendChild(employee);
        const duration = document.createElement('span');
        duration.innerHTML = experience.start + ' - ' + ((experience.end) ? experience.end : '');
        duration.className = 'duration';
        head.appendChild(duration);
        div.appendChild(head);
        const title = document.createElement('div');
        title.innerHTML = experience.title;
        title.className = 'title';
        div.appendChild(title);
        const description = document.createElement('div');
        description.innerHTML = experience.description;
        description.className = 'description';
        div.appendChild(description);
        document.getElementsByClassName('experiences')[0].appendChild(div);
    });
}

const appendEducations = () => {
    educations.map(education => {
        const div = document.createElement('div');
        div.className = 'education';
        const head = document.createElement('div');
        head.className = 'header';
        const institute = document.createElement('span');
        institute.innerHTML = education.institute;
        institute.className = 'institute';
        head.appendChild(institute);
        const year = document.createElement('span');
        year.innerHTML = education.year;
        year.className = 'year';
        head.appendChild(year);
        div.appendChild(head);
        const degree = document.createElement('div');
        degree.innerHTML = education.degree;
        degree.className = 'degree';
        div.appendChild(degree);
        if (education.marks) {
            const marks = document.createElement('div');
            marks.innerHTML = education.marks;
            marks.className = 'marks';
            div.appendChild(marks);
        }
        document.getElementsByClassName('educations')[0].appendChild(div);
    });
}

const appendProjects = () => {
    projects.map(project => {
        const div = document.createElement('div');
        div.className = 'project';
        const title = document.createElement('div');
        title.innerHTML = project.title;
        title.className = 'title';
        div.appendChild(title);
        const description = document.createElement('div');
        description.innerHTML = project.description;
        description.className = 'description';
        div.appendChild(description);
        const link = document.createElement('a');
        link.innerHTML = project.link;
        link.href = project.link;
        link.className = 'link';
        div.appendChild(link);
        document.getElementsByClassName('projects')[0].appendChild(div);
    });
}