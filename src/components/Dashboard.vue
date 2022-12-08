<!-- this creates the template for the dashboards text -->
<template>
    <div class="dashboardBox">
        <div> {{dashboardNums}} dashboards </div>
    </div>
    
</template>

<script>
export default {
    // this holds the dashboard string
    name: 'dashboard',
    props: {
        dashboardNums: String,
    },}
</script>

<!-- these are the styling components of the dashboard -->
<style scoped>
    .dashboardBox {
        padding: 2px 15px;
        border-style: solid;
        border-width: 2px;
        border-radius: 7px;
        background-color: rgb(204,244,229);
        border-color: rgb(128,228,184);
        color: rgb(14,207,121);
        font-weight:500;
        cursor: pointer;
    }
</style>