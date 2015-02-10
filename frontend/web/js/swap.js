/**
 * Created by Dima on 10.10.2014.
 */
window.onload = function(){
    var balance = document.getElementById('user-swap');
    var summ = (balance.value*30/100) + parseInt( balance.value);
    if(summ>0){
        $('#res_sum').text(summ);
    }else{
        $('#res_sum').text(0)
    }
};
function counter(el){
    var summ = (el.value*30/100) + parseInt( el.value);
    if(summ>0){
        $('#res_sum').text(summ);
    }else{
        $('#res_sum').text(0)
    }
}
