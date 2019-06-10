var z = 0;

$(document).ready(function (){
        $("#body").click(function(){
            console.log("didit");
            z++;
            if (z%2==0){
                $("#munt").attr("src","1.jpg");
                $("#gabe").attr("src","a.jpg");
                $("#rox").attr("src","x.jpg");

            }else{
                $("#munt").attr("src","2.jpg");
                $("#gabe").attr("src","b.jpg");
                $("#rox").attr("src","z.jpg");

            }
        });
    }
);