<!-- this creates the template for the header -->
<template>
    <header>
        <a-button type="primary">
            <bell-outlined :style="{fontSize : '25px'}" />
            <span class="button_badge"></span>
        </a-button>
        
        <h1>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Anthony Chen &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </h1>
        <img src="./selfPhoto.png" alt="">
    </header>
</template>

<script>
import Button from './Button'
import { BellOutlined } from '@ant-design/icons-vue';
export default {
    // this holds the header components
    name: 'Header',
    components: {
        Button, BellOutlined
    },
}
</script>

<!-- these are the styling components for the header -->
<style scoped>
    a-button {
        cursor: pointer;
    }
    a-button:hover {
        color: #d63031;
    }
    .button_badge {
        background-color: #fa3e3e;
        border-radius:50%;
        color:white;
        padding: 1px 3px;
        height:10px;
        width:10px;
        border-radius: 50%;
        position: absolute;
        top:14px;
        right:321px;
    }
    bell-outlined {
        height:25px;
        width:25px;
    }
    header {
        display: flex;
        justify-content: right;
        padding: 0px 120px 0px;
        height: 50px;
        align-items: center;
    }
    .header h1 {
        justify-content: space-between;
        font-size: 15px;
    }
    img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
    }
    
</style>
