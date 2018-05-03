<template>
<div>
    <div class="title">
        <slot name="title"></slot>
        <!--this is a slot default, if nothing is put into them then they will just display the default information-->
        <span style="color: #ccc"><slot name="subtitle">Default Slot</slot></span>
    </div>
    <div>
        <!--unnamed alots are considered default slots and everything thats not titled will go in them-->
        <slot></slot>
    </div>
</div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    div {
        text-align: center;
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: auto;
    }
    h1 {
        color: red;
    }
    .title {
        font-style: italic;
    }
</style>