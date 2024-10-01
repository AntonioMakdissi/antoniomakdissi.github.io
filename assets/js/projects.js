$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/inprogress.jpg',
            link: '',
            title: 'Deep Clustering',
            demo: false,
            technologies: ['Python'],
            description: "Deep Clustering for Tabular Data: Application to Medical Data (in progress)",
            categories: ['featured', 'reasearch']
        },
        {
            image: 'assets/images/speedrun.png',
            link: 'https://github.com/AntonioMakdissi/seniorProject',
            title: 'SpeedRun',
            demo: 'https://antoniomakdissi.github.io/seniorProject/',
            technologies: ['PHP', 'CSS', 'Javascript', 'SQL', 'HTML'],
            description: "Delivery web application with mobile app and tracking. Multi-user support, easy to deploy and use. (Senior Project)",
            categories: ['featured', 'webdev']
        },
        {
            image: 'assets/images/NNergy.PNG',
            link: 'https://github.com/AntonioMakdissi/NNergy',
            title: 'NNergy',
            demo: false,
            technologies: ['Python'],
            description: "This application calculates and analyzes the energy consumption of various neural network layers.",
            categories: ['featured', 'reasearch', 'diy']
        },
        {
            image: 'assets/images/OCAtari.png',
            link: 'https://github.com/AntonioMakdissi/OCAtariRL',
            title: 'OCAtariRL',
            demo: false,
            technologies: ['Python'],
            description: "Object-centric reinforcement learning environments, focuses on the interpretability of model",
            categories: ['featured', 'reasearch', 'diy']
        },
        {
            image: 'assets/images/Obstacle-Avoidance-Voice-Controlled-Robotic-Vehicle.png',
            link: '',
            title: 'Obstacle avoiding Arduino car',
            demo: false,
            technologies: ['C/C++', 'Arduino', 'DIY'],
            description: "Ever wondered how many times a URL has been shared on popular social networks?",
            categories: ['diy']
        },

        {
            image: 'assets/images/old-lcd.jpg',
            title: 'Reusing Old LCD Panel',
            link: '',
            demo: false,
            technologies: ['DIY'],
            description: "Reusing a dead laptop's LCD panel as a secondary monitor.",
            categories: ['diy']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">DEMO</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}