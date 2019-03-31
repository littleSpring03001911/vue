module.exports ={
    devServer:{
        port:8002,
        open:false,
        proxy:{
         "/api":{
             target:"http://47.100.98.132",
             changeOrigin:true,
             ws:true
     } 
     }
    },
   
 }
 