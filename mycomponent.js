app.component("mycomponent", {
    template:`<p>
    <button @click="addCount(); sendToParent()">CLICK ME PLEASE {{ count }}</button>
    </p>
    <h3>{{myprops }}</h3>`,
    props:{
        myprops:{
            type:String
        }
    },
    data(){
        return{
            count:0
        }
    },
    methods:{
        addCount(){
            this.count++;
        },
        // création d'un événement écouté par le parent
        sendToParent(){
            this.$emit("hello-parent","I'm your child");

        }

    },
    computed:{

    }
});