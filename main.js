const RootComponent = ({
        data(){
            return{
                title:"Carousel",
                count: 0,
                index:0,
                slides:[
                    {
                        src:"slide1.jpg",
                    },
                    {
                        src:"slide2.jpg"
                    },
                    {
                        src:"slide3.jpg"

                    }
                ]
            }
        },
        methods:{
            
            
    
        },
       
        mounted(){
            setInterval(()=>{
                this.count++
            } ,1000);
            setInterval( ()=>{
                if (this.index<this.slides.length-1){
                    this.index++
                }else {
                    this.index =0;
                }
            } ,1000);
        },
        
        
    
    });
const app = Vue.createApp(RootComponent);
