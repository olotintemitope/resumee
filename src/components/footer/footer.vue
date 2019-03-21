<template>
    <footer>
        <div class="footer col-md-12 top_30 bottom_30">
            <div class="name col-md-4 hidden-md hidden-sm hidden-xs">{{ developer }}</div>
            <div class="copyright col-lg-8 col-md-12">{{ copyright }}</div>
        </div>
    </footer>
</template>

<script>
import myMixin from './../../mixins/profile.mixins.js'

export default {
    props: {
    },
    mixins: [myMixin],
    data() {
        return  {
            copyright: '© 2017 All rights reserved',
        }
    },
}
</script>

<style>

</style>
