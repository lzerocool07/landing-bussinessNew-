
;(function(){
    window.onload = function(){
        var block = document.querySelectorAll('.b');
        var block1 = document.querySelectorAll('.a');
        var res = 0 ;
        var  res1 = 0;
        for(var i = 0 , l = 0 ; i < block.length , l < block1.length; i++, l++){
            if(block[i].clientHeight > res){
            res = block[i].clientHeight;
            }
            
            if(block1[l].clientHeight > res1){
            res1 = block1[l].clientHeight;
            }
        }
        for(var j = 0 ;j < block.length; j++){
            block[j].style.height = res + 'px';
        }
//        for(var k = 0 ;k < block1.length; k++){
//            block1[k].style.height = res1 + 'px';
//        }
    }
}());

    
    

    