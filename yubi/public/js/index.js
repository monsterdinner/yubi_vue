  //删除new Vue之外的所有！
  new Vue({
    el:"#main>div:nth-child(2)>h3:first-child",
    data:{ 
      res:[//为了保证首次加载前不错,必须给数据初始值
        {title:"",details:"",price:0},
        {title:"",details:"",price:0},
        {title:"",details:"",price:0}
      ]
    },
    /*
    beforeCreated(){}
    */
    created(){
      //this->当前vue
      (async function(self){
        var res=await axios.get(
          "http://localhost:3000/index/"
        );
        self.res=res.data;
      })(this)
    }
    /*
    beforeMount(){}
    mounted(){}
    beforeUpdate(){}
    updated(){}
    beforeDestroy(){}
    destroyed(){}
    */
  })
    
