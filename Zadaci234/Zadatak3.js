const mesaniNiz = [
    17.5, 
    "oop", 
    false, 
    1000, 
    -12.457, 
    "kiaa", 
    true, 
    true
]; 

negiraj_bulove_vrednosti (mesaniNiz); 
function negiraj_bulove_vrednosti (parametar) {
    for (let i = 0; i < parametar.length; i++) {
        if (typeof parametar[i]=="boolean") {
            parametar[i] = !parametar[i]
        } ;
        
    }
}
console.log(negiraj_bulove_vrednosti(parametar)); 