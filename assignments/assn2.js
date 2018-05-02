$(function() {
    new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            buttonClicked: function(){
                alert('Button Clicked');
            },
            updateKeyDown: function(event){
                this.value = event.target.value;
            }
        }

    });
}