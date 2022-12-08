<!-- this creates the template for a project -->
<template>
    <div :class="[curProject.category=='D' ? 'green' : '' , curProject.category=='C' ? 'lightBlue' : '' , curProject.category=='F' ? 'purple' : '' , 'project']">
      
      <h4 >
          <h1><Category :project="curProject"/></h1>
          <h3>{{curProject.name}} </h3>
          
          <h6>
            {{curProject.users}} users
          </h6>

          <h5>
            <dashboard :dashboardNums='curProject.dashboards' />
          </h5>
          <h6>
            <Button text="Delete" color = 'White' tColor="#E23777" :project="curProject" @delete-project="$emit('delete-project',curProject.name)"/>
          </h6>
          
        </h4>
    </div>
    <!-- :style="{color: '#666c65'}" -->
</template>

<script>
import Category from './CategoryIcon.vue'
import Button from './Button';
import dashboard from './Dashboard';
export default {
  // this holds the components of a project
    name: 'Project',
    props: {
        curProject: Object,
    },
    components: {
      Button, dashboard, Category,
    },
    emits: ['delete-project'],
}
</script>

<!-- these are the styling components for a project -->
<style scope>
.project h1 {
  padding-top:1px;
}
.project h5 {
  padding-top: 5px;
}
.project h3 {
  padding-top: 5px;
}

.project h6 {
  color: #666c65;
  font-size:14px;
  font-weight:100;
  padding-top:5px;
}

.green {
  border-left: 11px solid rgb(4,204,117);
}
.lightBlue {
  border-left: 11px solid rgb(3, 204, 254);
}
.purple {
  border-left: 11px solid rgb(178,126,234);
}
.project {
  background: #ffffff;
  margin: 7px;
  padding:20px;
  border-radius:10px;
  box-shadow: 0px 10px rgb(243,245,252);
  height:70px;
}
.project h4 {
  display: flex;
  justify-content: space-between;
  position:relative;
  font-size:14px;
}

</style>