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
export default {
    data() {
        return {
            workHistories: [
                {
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
                    description: `Andela scales high performing distributed engineering teams with Africa’s most talented.`
                },
            ]
        }
    }
}
</script>

<style>

</style>
