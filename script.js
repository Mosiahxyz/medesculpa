
let cont = 20
let contn = 35

let main = function(){

    $(".nao").on("click", function (event){

        $(".sim").css("font-size", cont);
        $(".nao").css("height", contn);


        cont = cont + 20

        switch (cont) {

            case 40: $(".nao").val("foi brincadeira parça"); break;
 
            case 60: $(".nao").val("errei, fui mlk"); break;
        
            case 80: $(".nao").val("eu falei sem querer"); break;

            case 100: $(".nao").val("já pedi desculpa ;-;"); break;

            case 120: $(".nao").val("perdoa logo"); break;

            case 140: $(".nao").val("para de graça"); break;
           
        }
    })


        $(".sim").on("click", function (event){

            $(".sim").remove()
            $(".nao").remove()

            let img = $("<img>").attr("src", "./image.png")

            $("div").append(img);
            $("p").text("desculpas aceitas!")



    })
}

$(document).ready(main)