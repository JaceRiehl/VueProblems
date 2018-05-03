<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{name}}</p>
    </div>
</template>

<script>
export default{
    //this property 'name' has to be the same as the parent.
    props: ['name']
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
