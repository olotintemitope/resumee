<template>
  <div class="row">
    <section class="discography col-md-12 padding_45 padbot_45">
      <div class="section-title bottom_45">
        <span></span>
        <h2>Skills</h2>
      </div>
      <!-- an album -->
      <div class="row">
        <div class="col-md-4 album-cover bottom_30">
          <img src="./../../assets/images/discography-2.jpg" alt>
        </div>
        <div class="col-md-8 album bottom_60">
          <ul>
            <li>Technologies</li>
            <li v-for="technology in technologies" :key="technology" v-html="technology">
                {{ technology }}
            </li>
          </ul>
        </div>
      </div>
      <hr>
    </section>
  </div>
</template>

<script>
export default {
    data() {
        return {
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
        }
    }
};
</script>

<style scoped>
ul > li {
    text-align: left;
}
</style>
