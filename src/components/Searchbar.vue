<!-- this creates the template for the searchbar -->
<template>
    <div class="search-bar">
        <div class="search">
            <input
            @input="handleChange"
            v-model="searchText"
            class="form-control"
            type="text"
            placeholder="Search for a key word"
            />
        </div>
    </div>
</template>

<script >
// this handles the searchbar action
export default {
    name: 'searchbar',
    data() {
        return {
            searchText: '',
        };
    },
    // this makes it so that the project list updates as a user types in the searhbar
    methods: {
        handleChange(){
            console.log("someone's writing something in search bar");
            this.$emit("search", this.searchText);
        },
    },
}
</script>
<!-- these are the styling components for this file -->
<style>
    .search {
        height:220px;
    }
    /* edits the searchbar's design */
    .form-control {
        border-radius: 5px;
        border-style: solid;
        border-color: #cacbcb;
        background-color: #fefffe;
        color: gray;
        display:block;
        width:100%;
        padding: 1px 12px;
    }
</style>