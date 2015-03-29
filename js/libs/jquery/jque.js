/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 */ var color_one;
    var color_two=0;
    $(document).ready(function(){
    $('#head').delay(500).fadeIn(1000);
    $('#bdy').delay(900).fadeIn(1000);
    $('#dev').click(function(){
        
        /*if($("#abt").css("color")==='rgb(255, 117, 25)'){
            $("#abt").css("color","#616161");
        };*/
        $('#head,#bdy').fadeToggle();
        $("#janar_port,#tharun_port").fadeToggle(500);
        $('#janar,#tharun').fadeToggle();
        
        
        color_one = $("#dev").css("color");
        if(color_one==='rgb(97, 97, 97)'){
            $("#dev").delay(200).css("color","#FF7519");
        }
        else if(color_one==='rgb(255, 117, 25)'){
            $("#dev").delay(200).css("color","#616161");
        }
        });
     
     $('#abt').click(function(){
       
        /*if(color_one==='rgb(97, 97, 97)'){
            $("#dev").css("color","#616161");
        };*/
        var color_two = $("#abt").css("color");
        if(color_two==='rgb(97, 97, 97)'){
            $("#abt").delay(200).css("color","#FF7519");
        }
        else if(color_two==='rgb(255, 117, 25)'){
            $("#abt").delay(200).css("color","#616161");
        };
        $('#mail').fadeToggle('slow');
        
        
        
        
        
         
     });
    
 });
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
   


