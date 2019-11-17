const skills = [
    'HTML/CSS',
    'JavaScript',
    'ReactJs',
    'NodeJs',
    'MongoDB',
    'Git/GitHub',
    'SASS',
    'C language',
    'C++',
];

const experiences = [
    {
        'employee': 'Department of Visual Media, BITS Pilani',
        'title': 'Frontend Web Developer',
        'start': 'Aug-2018',
        'end': 'Present',
        'description': 'Manages the technical aspects of all three festivals of BITS Pilani.'
    },
    {
        'employee': 'Birla Institute of Technology and Science, Pilani',
        'title': 'Teaching Assistant (Software Development and Educational Technology)',
        'start': 'Aug-2019',
        'end': 'Present',
        'description': 'Manages various portals, website and other vital internet and intranet services. Also provides certified classes of software development and data science.'
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
        'title': "OASIS'19 - Wallet Web App(frontend)",
        'description': 'Web application to facilitate client-vendor interaction on food stalls present in one of the largest inter-collegiate cultural fests of India.',
        'GitHub Repo': 'https://github.com/mukul0596/oasis-2019-wallet/',
        'Web url': 'https://objective-hawking-ea0fd0.netlify.com/'
    },
    {
        'title': "Official BOSM Website",
        'description': 'Official main website for one of the largest inter-collegiate sports fests of India, hosted by BITS Pilani (Pilani Campus).',
        'GitHub Repo': 'https://github.com/dvm-bitspilani/bosm-2019-main/',
        'Web url': 'https://www.bits-bosm.org/'
    },
    {
        'title': "Official OASIS Website",
        'description': 'Official main website for one of the largest inter-collegiate cultural fests of India, hosted by BITS Pilani (Pilani Campus).',
        'GitHub Repo': 'https://github.com/dvm-bitspilani/oasis-2019-main/',
        'Web url': 'https://www.bits-oasis.org/'
    },
    {
        'title': "Weather Website(full stack)",
        'description': 'Personal project for getting weather details.',
        'GitHub Repo': 'https://github.com/mukul0596/weather-website/',
        'Web url': 'https://mukul0596-weather-application.herokuapp.com/',
        'tags': ['Personal Project']
    },
    {
        'title': "Burger Builder Web App",
        'description': 'Personal project for ordering your own customized burger.',
        'GitHub Repo': 'https://github.com/mukul0596/burger-builder-v2.0/',
        'Web url': 'https://mukul0596.github.io/burger-builder-v2.0/index.html/',
        'tags': ['Personal Project']
    },
    {
        'title': "IKC-Deal(backend)",
        'description': 'The goal of the project is to develop the backend of the IKC Deal mobile app with NodeJs. The app contains shopping, auction, inbuilt wallet and affiliate marketing features.',
        'App url': 'https://play.google.com/store/apps/details?id=org.ikc.ikc_deal/',
        'tags': ['Private Paid Project']
    },
    {
        'title': "BITS Pilani - Official Website (frontend)",
        'description': 'As part of the Software Development and Educational Technology department, the official website of BITS Pilani is under development by a team of 5 students including me.',
        'tags': ['Under Development ', 'Private']
    },
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

const typeOfProjectLinks = ['GitHub Repo', 'Web url', 'App url']

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

        typeOfProjectLinks.map(link => {
            if (project[link]) {
                const linkTo = document.createElement('a');
                linkTo.innerHTML = link;
                linkTo.href = project[link];
                linkTo.className = 'link';
                div.appendChild(linkTo);
                div.appendChild(document.createElement('br'));
            }
        });

        if (project.tags) {
            project.tags.map(tagName => {
                const tag = document.createElement('span');
                tag.innerHTML = '[' + tagName + ']';
                tag.className = 'tag';
                div.appendChild(tag);
            });
        }
        
        document.getElementsByClassName('projects')[0].appendChild(div);
    });
}