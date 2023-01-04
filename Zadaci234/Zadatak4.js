const niz1 = ['a','b']; 
const niz2 = ['a','b']; 

da_li_su_jednaki(niz1, niz2); 
function da_li_su_jednaki(params1, params2) {
    if (params1.length !== params2.length) {
        return false
    }
    for (let i = 0; i < params1.length; i++) {
       if (params1[i] !==params2[i]) {
        return false
       };
        
    }
    return true; 
}
console.log(da_li_su_jednaki(params1, params2))