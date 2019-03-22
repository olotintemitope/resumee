<template>
    <div id="app" class="wrapper top_60 container">
        <div class="row">
            <!-- Profile Section ================================================== -->
            <Profile/>
            <!-- Page Tab Container Div -->
            <div id="ajax-tab-container" class="col-lg-9 col-md-8 tab-container">
                <!-- Header ================================================== -->
                <div class="row">
                    <Header/>
                    <!-- Page Content ================================================== -->
                    <div class="col-md-12">
                        <div id="content" class="panel-container">
                            <!-- Text Section -->
                            <div class="row">
                                <section class="about-me line col-md-12 padding_30 padbot_45">
                                    <div class="section-title">
                                        <span></span>
                                        <h2>About Me</h2>
                                    </div>
                                    <p class="top_30" v-html="about">
                                        {{ about }}
                                    </p>
                                </section>
                            </div>
                            
                            <div id="resume">
                                <!-- Resume Section -->
                                <div class="row">
                                    <section class="education">
                                        <div class="section-title top_30">
                                            <span></span>
                                            <h2>My Resume</h2>
                                        </div>
                                        <div class="row">
                                            <!-- Working History -->
                                            <WorkingHistory/>
                                            <!-- Education History -->
                                            <EducationHistory />
                                        </div>
                                    </section>
                                </div>
                                <Skills/>
                                <Contact/>
                            </div>
                        </div>
                    </div>
                    <!-- col-md-12 end -->
                </div>
                <!-- row end -->
                <!-- Footer ==================================================-->
                <Footer />
            </div>
            <!-- Tab Container - End -->
        </div>
    </div>
</template>
<script>
    // Import Mixins
    import myMixin from './mixins/profile.mixins.js'

    // Import components
    import Header from "./components/header/header.vue"
    import Profile from "./components/profile/myprofile.vue"
    import Contact from "./components/contact/contact.vue"
    import Footer from "./components/footer/footer.vue" 
    import WorkingHistory from "./components/work/work_experience.vue"
    import EducationHistory from "./components/work/education_history.vue"
    import Skills from "./components/skills/skills.vue"
    
    // Import all css here
    import './../src/assets/css/bootstrap.css'
    import './../src/assets/css/reset.css'
    import './../src/assets/cubeportfolio/css/cubeportfolio.min.css'
    import './../src/assets/css/style.css'
    import './../src/assets/css/colors/pink.css'
    import './../src/assets/icon-fonts/font-awesome-4.7.0/css/font-awesome.min.css'
    import './../src/assets/icon-fonts/musician/flaticon.css'
    import './../src/assets/css/Demo.min.css'
    
    export default {
      name: "app",
      components: {
        Profile,
        Header,
        Contact,
        Footer,
        WorkingHistory,
        EducationHistory,
        Skills
      },
      mixins: [myMixin],
    };
</script>
<style>
    #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    }
</style>