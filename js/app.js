function caliRiceRec(){
    var input1 = document.getElementById("userInput").value;
    var water1 = input1 * 1.6;
    document.getElementById('output1').innerHTML = "For slightly al dente rice: Combine " + input1 + " cup(s) of rice with " + water1 + " cup(s) of water or broth and 1 Tbsp olive oil. Bring to a boil and stir once to mix. Reduce heat to low, cover with a tight-fitting lid and cook for 25 minutes. Remove from heat and let stand for 5 minutes. Fluff with a fork and serve. For softer rice: Increase liquid by 1/2 cup and cook time by 5 minutes.";
    document.getElementById('output2').innerHTML = "";
}

function whiteRiceRec(){
    var input2 = document.getElementById("userInput").value;
    var water2 = input2 * 2;
    document.getElementById('output2').innerHTML = "Combine " + input2 + " cup(s) of rice with " + water2 + " cup(s) of water and 1 Tbsp olive oil. Bring to a boil, then reduce heat to the lowest setting. Cook for about 18 minutes."
    document.getElementById("output1").innerHTML = "";
}
