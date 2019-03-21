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
                <p class="little-text">{{ workHistory.description }}</p>
            </li>
            <!-- a work -->
            
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            workHistories: [
                {
                    id: 1,
                    company_name: 'Facebook Inc',
                    position: 'Art Director',
                    year_from: '2010',
                    year_to: 'Present',
                    description: `Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.`
                },
                {
                    id: 2,
                    company_name: 'Google',
                    position: 'Senior Designer',
                    year_from: '2008',
                    year_to: '2010',
                    description: `So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward.`
                },
                {
                    id: 3,
                    company_name: 'Creative Shake',
                    position: 'Junior Designer',
                    year_from: '2005',
                    year_to: '2008',
                    description: `Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract.`
                }
            ]
        }
    }
}
</script>

<style>

</style>
