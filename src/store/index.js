import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        developer: 'Temitope Olotin',
        job: 'Software Developer',
        email: 'olotintemitope@gmail.com',
        skype: 'laztopaz',
        address: '14 Anfani close off Emmanuel Osakwe, Egbeda, Lagos',
        phone: '+2347033235351',
        about: `My name is Temitope a software developer at Andela.
            <br>
            Energetic software engineer with 5+ yearsâ€™ experience developing robust code for high-volume businesses. 
            Increased code efficiency of Cause Strategy Partners portal by 60% and improved the user experience which led to ease of use of about 40%. 
            A Team Lead that assisted with the development of high priority features that lead to customer retention of about 20% and brought in an additional 5%. 
            An enthusiastic team player and deep creative thinker. In my free time, I blog, composer songs and enjoy quality time with family.`,
        social: {
            facebook: 'https://www.facebook.com/Laztopaz',
            twitter: 'https://twitter.com/LytopzSolutionz',
            github: 'https://github.com/andela-tolotin',
            linkedin: 'https://www.linkedin.com/in/olotin-temitope-53b43272'
        },
        contacts: {
            name: '',
            email: '',
            message: ''
        },
        academicHistories: [{
            id: 1,
            school_name: 'The Federal Polytechnic, Ado Ekiti',
            year_from: '2007',
            year_to: '2012',
            description: 'I studied Computer Science and graduated with a CGPA 3.33.'
        }],
        certifications: [{
            id: 1,
            school_name: 'Udacity',
            year_from: 'June 2018',
            year_to: 'Dec 10, 2018',
            description: 'A graduate of Mobile Web Specialist'
        }],
        mentorships: [{
                id: 1,
                company_name: 'Andela',
                year_from: 'Nov 2016',
                year_to: 'Nov 2016',
                description: 'I participated in Andela Open Mentorship Program - Mentoring young minds on Cloud Computing, Relational, and Non-Relational Databases'
            },
            {
                id: 2,
                company_name: 'ALC Rwanda',
                year_from: 'Oct 2018',
                year_to: 'Present',
                description: 'I participated in Andela Learning Community Program - Helping unblock learners'
            }
        ],
        workHistories: [{
                id: 1,
                company_name: 'ITvessel Ltd, Ilorin',
                position: 'Fullstack Developer',
                year_from: 'Feb 2014',
                year_to: 'Aug 2015',
                description: `ITvessel Limited is an IT firm that is equipped with the best human resources and specializes in cloud application development, website and software application training.`
            },
            {
                id: 2,
                company_name: 'Hoog Ent Sol, Ilorin',
                position: 'Fullstack Developer',
                year_from: 'Oct 2015',
                year_to: 'Jan 2016',
                description: `Hoog Enterprise Solutions is an IT firm that helped companies build enterprise solutions for their businesses.`
            },
            {
                id: 3,
                company_name: 'Accounteer, Belgium',
                position: 'Web Developer,',
                year_from: 'Aug 2016',
                year_to: 'July 2017',
                description: `Accounteer is a Cloud Accounting Software startup based out of Belgium.`
            },
            {
                id: 4,
                company_name: 'Waldo Contacts, London',
                position: 'Web Developer',
                year_from: '2017',
                year_to: '2018',
                description: `Waldo leverage the power of Shopify to build an e-commerce shop for selling contact lenses.`
            },
            {
                id: 5,
                company_name: 'CSP, New York',
                position: 'Web Developer',
                year_from: 'Sep 2018',
                year_to: 'Present',
                description: `Cause Strategy Partners helps social good organizations achieve their missions fueled by great leadership, great strategy and, most importantly, great results.`
            },
            {
                id: 6,
                company_name: 'Andela, Lagos',
                position: 'Software Developer',
                year_from: 'Jan 2016',
                year_to: 'Present',
                description: `Andela scales high performing distributed engineering teams with Africaâ€™s most talented.`
            },
        ],
        technologies: [
            '<strong>FrontEnd:</strong> Angular2, Vue.js, jQuery, HTML5, CSS3, Web Accessibility,',
            '<strong>Frameworks:</strong> PHP/Laravel, PHP/Symfony, Lumen, Slim, Node.js',
            '<strong>Languages:</strong> PHP, Java, Ruby, Javascript',
            '<strong>Cloud:</strong> AWS, Heroku',
            '<strong>DevOps:</strong> Docker, K8s',
            '<strong>Version Control:</strong> Git',
            '<strong>CI Tools:</strong> Travis CI, Circle CI',
            '<strong>Databases:</strong> PostgreSQL, MySQL',
            '<strong>Mobile Web:</strong> Progressive Web App',
            '<strong>Caching:</strong> Redis, Memcache',
            '<strong>Testing:</strong> PHPUnit, Mocking, Selenium Driver, Codeception, Dusk',
            '<strong>Servers:</strong> Nginx, Apache'
        ]
    },
    getters: {
        DEVELOPER: state => {
            return state.developer;
        },
        JOB: state => {
            return state.job;
        },
        EMAIL: state => {
            return state.email;
        },
        SKYPE: state => {
            return state.skype;
        },
        ADDRESS: state => {
            return state.address;
        },
        PHONE: state => {
            return state.phone;
        },
        ABOUT: state => {
            return state.about;
        },
        SOCIAL: state => {
            return state.social;
        },
        CONTACTS: state => {
            return state.contacts;
        },
        ACADEMIC_HISTORIES: state => {
            return state.academicHistories;
        },
        CERTIFICATIONS: state => {
            return state.certifications;
        },
        MENTORSHIPS: state => {
            return state.mentorships;
        },
        WORK_HISTORIES: state => {
            return state.workHistories;
        },
        TECHNOLOGIES: state => {
            return state.technologies;
        }

    },
    mutations: {},
    actions: {}
});