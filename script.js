function calcular() {
   
   let n1 = parseFloat(document.getElementById('numero1').value);
   let n2 = parseFloat(document.getElementById('numero2').value);
   let op = parseFloat(document.getElementById('operacao').value);
   let res = 0;

   if ((isNaN(n1) || n1 == '') || (isNaN(n2) || n2 == '')) {
       return alert('Por favor, digite um valor válido.');
   }

   if (isNaN(op) || op == '') {
       return alert('Esta operação é inválida.');
   }

   switch (parseFloat(op)) {
       case 1:
           res = (n1 + n2);
           break;
       case 2:
           res = n1 - n2;
           break;
       case 3:
           res = n1 * n2;
           break;
       case 4:
           res = n1 / n2;
           break;
       default:
           alert('Operação inválida');
   }
   document.getElementById('resultado').innerHTML = res.toFixed(2);
}
function limpar(){

   document.getElementById('numero1').value='';
   document.getElementById('numero2').value='';
   document.getElementById('operacao').value='';
}