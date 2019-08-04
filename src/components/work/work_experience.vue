<template>
    <div class="working-history col-md-6 padding_15 padbot_30">
        <ul class="timeline col-md-12 top_45">
            <li>
                <i class="fa fa-suitcase" aria-hidden="true"></i>
                <h2 class="timeline-title">Working History</h2>
            </li>
            <!-- a work -->
            <li v-for="workHistory in workHistories" v-bind:key="workHistory.id">
                <h3 class="line-title">{{ workHistory.position }} - {{ workHistory.company_name }}</h3>
                <span>{{ workHistory.year_from }} - {{ workHistory.year_to }}</span>
                <p class="little-text" v-html="workHistory.description">{{ workHistory.description }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import {store} from './../../store/index.js'

export default {
    data() {
        return {
            workHistories: store.getters.WORK_HISTORIES
        }
    }
}
</script>

<style>

</style>
