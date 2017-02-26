var button = document.getElementById('counter');


button.onclick=function(){
  
  var request = new XMLhttpRequest();
  request.onreadystatechange = fuction(){
    if(request.readyState === XMLHttpRequest.DONE){
        if(request.status === 200){
            var counter=request.responseTest;
            var span=document.getElementById('count');
            span.innerHTML= counter,Tostring() ;
        }
    }  
  }
  
  requset.open('GET',"http://manasa-gullapalli.imad.hasura-app.io/counter",true);
  request.send(null);
  
};