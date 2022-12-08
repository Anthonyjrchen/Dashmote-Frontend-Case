<!-- this creates the template for the projects -->
<template>
    <div class="projectSection">
        <div class="smallerSection">
            <div :key="curProject.name" v-for="curProject in projects">
            <Project :curProject = 'curProject' @delete-project="$emit('delete-project',curProject.name)"/>
            </div>
            <div class="emptySpace"></div>
        </div>
    </div>
    
</template>

<script>
import Project from './Project'
// this holds the array of projects, and has a section that holds the emits.
    export default {
        name: 'Projects',
        props: {
            projects: Array,
        },
        components: {
            Project,
        },
        emits: ['delete-project'],
    }
</script>

<!-- these are the styling components for the projects -->
<style scoped>
/* projects positioning */
.emptySpace {
    height:200px;
}
.projectSection {
    padding:0px 90px;
}
.smallerSection {
    height: 400px;
    overflow-y: scroll;
}
/* width */
::-webkit-scrollbar {
  width: 10px;

}
/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background-color: #888; 
  border-radius: 10px;
  
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>