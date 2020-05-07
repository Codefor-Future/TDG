app=new Vue({
    el:"#app",
    data:{
        contents:[],
        tenPost:[],
        pageNo:0
    },
    methods:{
        async loadContent(){
            await axios
                .get("https://jsonplaceholder.typicode.com/posts")
                .then(response => {
                    var startPost=this.pageNo*10
                    var endPost=startPost+10
                    this.tenPost=response.data.slice(startPost,endPost)
                
                })
                
        },
        showMore(){
            this.pageNo+=1
            this.loadContent()
            this.contents=this.contents.concat(this.tenPost);
        }
    },
    mounted(){
        this.loadContent()
        
    }
})