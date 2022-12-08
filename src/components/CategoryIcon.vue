<!-- this creates the template for the category icons -->
<template>
    <div :class="[project.category=='D' ? 'categoryBoxGreen' : '' , project.category=='C' ? 'categoryBoxLightBlue' : '' , project.category=='F' ? 'categoryBoxPurple' : '']">
        <div>{{project.category}}</div>
    </div>
    
</template>

<script>
export default {
    // this holds the category object
    name: 'Category',
    props: {
        project: Object,
    },}
</script>

<!-- these are the styling components for the category icons -->
<style scoped>
    .categoryBoxGreen {
        padding: 6px 9px 5px;
        border-style:none;
        border-radius: 50%;
        background-color: rgb(204,244,229);
        color: rgb(21,207,125);
        font-size: 14px;
    }
    .categoryBoxLightBlue {
        padding: 6px 9px 5px;
        border-style:none;
        border-radius: 50%;
        background-color: rgb(202, 244, 255);
        color: rgb(3, 204, 254);
        font-size: 14px;
    }
    .categoryBoxPurple {
        padding: 6px 9px 5px;
        border-style:none;
        border-radius: 50%;
        background-color: rgb(240,229,250);
        color: rgb(181,129,235);
        font-size: 14px;
    }
</style>