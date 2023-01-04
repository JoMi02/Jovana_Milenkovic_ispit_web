const nizNiski = [
    "fink", 
    "os", 
    "aisp"
]; 
ispisi_uvecane_niske (nizNiski); 

function ispisi_uvecane_niske (parametar) {
    for (i=0; i<parametar.length; i++) {
        console.log (parametar[i].toUpperCase()); 
    }
}
