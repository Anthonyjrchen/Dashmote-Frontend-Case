<!-- this creates the main template for the app -->
<template>
  <div style="background-color:rgb(238,245,249)" class="container">
    
    <div class="header"> 
       <!--this is the header component of the page  -->
        <Header />    
    </div>
    <div class="hr">       
        <!-- this is the divider that separates the header from the body -->
    </div>
    <div class="search">
      <!-- this is the search bar component, I pass in the list of projects and the receive the @emit when someone types something in the search bar. -->
      <searchbar :projects="projects" @search="filter"/>
    </div>
    <div>
      <!-- this is my project's component that I used to display all projects. It receives an @emit signal when somoene click's a project's delete button -->
      <Projects :projects="projects" @delete-project="deleteProject"/>
    </div>
  </div>
</template>

<script>
import  Header from './components/Header'
import Projects from './components/Projects'
import searchbar from './components/Searchbar'
export default {
  name: 'App',
  components: {
    Header, Projects, searchbar,
  },
  data() {
    return {
      projects: [],
      filterProjects: []
    }
  },
  methods: {
    // method to delete project from list
    deleteProject(name) {
      if(confirm('Are you sure you want to delete this project?')) {
        this.filterProjects = this.filterProjects.filter((project) => project.name !== name);
        this.projects = this.filterProjects;
      }
    },
    // method to filter project list when searchbar changes
    filter(filterText) {
      this.projects = this.filterProjects.filter((project) => project.name.toLowerCase().includes(filterText.toLowerCase()));
    },
  },
  // these are the projects
  created() {
    this.projects = [
      {
        name: 'Project A',
        users: '4',
        dashboards: '3',
        category: 'D',
      },
      {
        name: 'Project B',
        users: '2',
        dashboards: '4',
        category: 'C',
      },
      {
        name: 'Project C',
        users: '1',
        dashboards: '2',
        category: 'F',
      },
      {
        name: 'Project D',
        users: '3',
        dashboards: '2',
        category: 'D',
      },
    ];
    this.filterProjects = this.projects;
  },
}
</script>

<!-- these are the stlying components for this file -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
/* sets box sizing */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
/* edits the font, color, and overflow of the body */
body {
  font-family: 'Classic Grotesque', sans-serif;
  font-size: 13px;
  font-weight: 300;
  color:#293877;
  overflow-y:hidden;
  
}
/* edits the search bar's positioning */
.search {
  display:flex;
  justify-content: right;
  padding-right:60px;
  padding-top:90px;
  padding-bottom:100px;
}
/* edits the height and radius of the main container */
.container {
  height:100vh;
  border-radius: 5px;
  
}
/* edits the border and opacity of the header divider */
.hr {
  border-top: 2px solid gray;
  opacity: 0.5;
}
</style>
