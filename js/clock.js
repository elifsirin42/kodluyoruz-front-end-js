//Kullanıcıdan isim alma

var isim = prompt("Adınız Nedir?");
   
if( (isim != "") && (isim != null) ) 

alert("Merhaba " + isim + "!");
   
else if(isim == "") 

alert("Boş giriş yaptınız!");

else if(isim == null) 

alert("Giriş yapmaktan vazgeçtiniz!");

document.getElementById("myName").innerHTML = isim;

// showTime Fonsiyonu yazıldı
function showTime() {

   //date metodu kullanılarak istenilenler alındı
   let date  = new Date();
   let day   = date.getDay();
   let hours = date.getHours();
   let min   = date.getMinutes();
   let sec   = date.getSeconds();


      // Gün olarak alınan değer string olarak gösterildi. (: 1 = Pazartesi)
      switch(day){
         case 1:
               day = 'Pazartesi';
               break;
         case 2:
               day = 'Salı';
               break;
         case 3:
               day = 'Çarşamba';
               break;
         case 4:
               day = 'Perşembe';
               break;
         case 5:
               day = 'Cuma'
               break;
         case 6:
               day = 'Cumartesi'
               break;
         case 7:
               day = 'Pazar'
               break;        
   }

   //10 dan kucuk ise basına '0' kondu.
   hours = hours < 10 ? "0" + hours : hours;
   min   = min < 10 ? "0" + min : min;
   sec   = sec < 10 ? "0" + sec : sec;
 
   let clock = hours + ":" + min + ":" + sec + " " + day;
   document.querySelector("#myClock").textContent = clock;
      
   setTimeout(showTime, 1000);
   }
   showTime();