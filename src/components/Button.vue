<!-- this creates the template for the button -->
<template>
    <button v-on:click="onDelete(project.name)" :style="{background:color, color:tColor}" :class="button">{{text}}</button>
</template>

<script>
export default {
    // this holds the button components
    name: 'Button',
    props: {
        text: String,
        color: String,
        tColor: String,
        project: Object,
    },
    methods: {
        onDelete(name) {
            this.$emit('delete-project', name);
        },
    }
}
</script>
<!-- this is the styling component for the button -->
<style scoped>
    button {
        border:none;
        cursor:pointer;
    }
</style>