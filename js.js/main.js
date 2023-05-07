
function tong() {
   //b1 : input
   var toan = document.getElementById('inputMa').value;
   var hoa = document.getElementById('inputHoa').value;
   var ly = document.getElementById('inputPhy').value;
   var area = document.getElementById('selectArea').value;
   var peoOject = document.getElementById('selectOject').value;
   var totalMin = document.getElementById('inputTotal').value;
   var sum = 0;
   //b2
   if (toan > 0 && ly > 0 && hoa > 0) {
      sum = Number(toan) + Number(hoa) + Number(ly) + Number(area) + Number(peoOject);
      

   } else if (toan == 0 || ly == 0 || hoa == 0){
      sum = 0;
      
   } else {
      alert('nhap lai diem mon hoc');
   }
   if(sum >= totalMin) {
      document.getElementById('txtResult').innerHTML = 'bạn đã đậu' +' '+ sum;
      console.log(sum);
   } else {
      document.getElementById('txtResult').innerHTML = 'bạn đã rớt' +' '+ sum;
      console.log(sum);
   }
}
document.getElementById('btnCalc').onclick = tong;

function  ele() {
   var total = 0;
   var name = document.getElementById('useName').value;
   var std = document.getElementById('count').value;
   if (std <= 50) {
      total = std*500;
   }else if (std > 50 && std <= 100) {
      total = std*650
   }else if (std>100 && std <=150) {
      total = std * 850;
   } else {
      total = std*1300;
   }
   document.getElementById('txtResultEle').innerHTML = 'ten:' + ' ' + name + ' '+ 'phi:' + ' ' + total.toLocaleString() + 'vnd';
}
function tax() {
   var name = document.getElementById('useNameTax').value;
   var totalYear = document.getElementById('totalYear').value;
   var totalPeople = document.getElementById('countPeo').value;
   var total = Number(totalYear) - 4e+6 - (Number(totalPeople) * 16e+5);
   var totalTax = 0 ;
   if ( total <= 60e+6) {
      totalTax = total * 0.05;
   }else if (total > 60e+6 && total <=120e+6) {
      totalTax = total * 0.1;
   }else if (total > 120e+6 && total <=210e+6) {
      totalTax = total * 0.1;
   }else if (total > 210e+6 && total <=384e+6) {
      totalTax = total * 0.15;
   }else if (total > 384e+6 && total <=624e+6) {
      totalTax = total * 0.25;
   }else if (total > 624e+6 && total <=960e+6) {
      totalTax = total * 0.3;
   }else if (total > 960e+6) {
      totalTax = total * 0.35;
   } else {
      alert (' nhap lai tong thu nhap nam');
   }
   document.getElementById('txtResultTax').innerHTML =  'Họ tên:' + ' ' + name + ' '+  'Tiền thuế thu nhập cá nhân:' + ' ' + totalTax.toLocaleString() + ' '+ 'VND';
}
function hiden() {
   var item = document.getElementById('selectCustomer').value;
   var inner = document.getElementById('inputInter');
   if (item == 'ND') {
      inner.style.display = 'none';
   } else {
      inner.style.display = 'block';
   }
}
function sumCap() {
   var item = document.getElementById('selectCustomer').value;
   var idCustomer = document.getElementById('inputMs').value;
   var countItem = document.getElementById('inputItem').value;
   var countInter = document.getElementById('inputInter').value;
   var totalCap = 0;
   console.log(item,idCustomer,countItem,countInter);
   switch (item) {
      case 'ND':
         totalCap = 4.5+20.5+(7.5*Number(countItem));
         break;
      case 'DN':
         if (countInter <= 10) {
            totalCap = 15 + 75 + (50 *Number(countItem));
         } else if (countInter >= 10) {
            totalCap = 15 + 75 + (5 * Number(countInter - 10)) + (50 *Number(countItem));
         }
         break;
   }
   document.getElementById('txtResultCap').innerHTML = 'Mã khách hàng: ' + ' ' + idCustomer + 'Tiền cáp: ' + ' ' + totalCap;
}
