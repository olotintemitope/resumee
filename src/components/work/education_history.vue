<template>
    <div class="education-history col-md-6 padding_15 padbot_30">
        <ul class="timeline col-md-12 top_45">
            <li>
                <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                <h2 class="timeline-title">Education History</h2>
            </li>
            <!-- a work -->
            <li v-for="academicHistory in academicHistories" :key="academicHistory.id">
                <h3 class="line-title">{{ academicHistory.school_name }}</h3>
                <span>{{ academicHistory.year_from }} - {{ academicHistory.year_to }}</span>
                <p class="little-text">{{ academicHistory.description }}</p>
            </li>
        </ul>

        <ul class="timeline col-md-12 top_45">
            <li>
                <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                <h2 class="timeline-title">Certifications</h2>
            </li>
            <!-- a work -->
            <li v-for="certification in certifications" :key="certification.id">
                <h3 class="line-title">{{ certification.school_name }}</h3>
                <span>{{ certification.year_from }} - {{ certification.year_to }}</span>
                <p class="little-text">{{ certification.description }}</p>
            </li>
        </ul>

        <ul class="timeline col-md-12 top_45">
            <li>
                <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                <h2 class="timeline-title">Mentorship</h2>
            </li>
            <!-- a work -->
            <li v-for="mentorship in mentorships" :key="mentorship.id">
                <h3 class="line-title">{{ mentorship.company_name }}</h3>
                <span>{{ mentorship.year_from }} - {{ mentorship.year_to }}</span>
                <p class="little-text">{{ mentorship.description }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            academicHistories: [
                {
                    id: 1,
                    school_name: 'The Federal Polytechnic, Ado Ekiti',
                    year_from: '2007',
                    year_to: '2012',
                    description: 'I studied Computer Science and graduated with a CGPA 3.33.'
                }
            ],
            certifications: [
                {
                    id: 1,
                    school_name: 'Udacity',
                    year_from: 'June 2018',
                    year_to: 'Dec 10, 2018',
                    description: 'A graduate of Mobile Web Specialist'
                }
            ],
            mentorships: [
                {
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
            ]
        }
    }
}
</script>

<style>

</style>
