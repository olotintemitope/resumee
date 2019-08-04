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

import {store} from './../../store/index.js'

export default {
    data() {
        return {
            academicHistories: store.getters.ACADEMIC_HISTORIES,
            certifications: store.getters.CERTIFICATIONS,
            mentorships: store.getters.MENTORSHIPS
        }
    }
}
</script>

<style>

</style>
