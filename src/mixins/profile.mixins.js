export default {
    created() {
        console.log('vue instance created');
    },
    mounted() {
        console.log('vue instance mounted');
    },
    data() {
        return {
            developer: 'Temitope Olotin',
            job: 'Software Developer',
            email: 'olotintemitope@gmail.com',
            skype: 'laztopaz',
        }
    }
}