/** 

1. mycarDetails fonksiyonunu "GA12345 Toyota" ciktisini verecek sekilde duzenleyin.

**/

var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(){
        console.log(this.registrationNumber + " " + this.brand);
    }
}

var myCarDetails =  car.displayDetails;
// 1.Çözüm >>> Bind ile fonksiyonu nesneye bağlamak
   var myCarDetails =  car.displayDetails;
   var myToyoto = myCarDetails.bind(car);
   myToyoto();

   // 2. Çözüm >>> call ya da apply kulanmak 
    
   myCarDetails.call(car); 
   myCarDetails.apply(car);

   /* 
   ancak apply bu örnekte çalışmasına rağmen normalde fonksiyona parametre olarak argüman listesi gönderir call da fonksiyona tek tek argüman gönderir:
   
   */


/** 

2.name parametresi alan bir isValidName fonksiyonu yazin. Fonksiyon asagidaki kosullarin hepsi saglaniyorsa true, saglanmiyorsa false donmelidir:

name string olmali
name bos olmamali
bosluk icerebilir, ancak bosluk haridcindeki isimler en az 2 karakterden olusmali.

**/

function isValidName(name) {
  /// your code here
  let init;
    if(typeof(name) === 'string' && name !== null){
        let removeOuterSpace = name.trim();
        let rename = removeOuterSpace.split(/[\s,]+/); 
        rename.some(e => e.length < 2 ) ? init = false : init = true; 
    }else {
        
         return init = false;

          }

   return init;
}
console.log(isValidName("Ahmet") === true); // true
 console.log(isValidName(false) === false); // true
 console.log(isValidName(null) === false);  // true
 console.log(isValidName(undefined) === false); // true
 console.log(isValidName("") === false);        // true
 console.log(isValidName("  \t\n") === false);  // true
 console.log(isValidName("X") === false);       // true


/**


3. summary fonkisyonunu ciktisi "Brave New World was written by Aldous Huxley. It is a dystopian novel written in 1932." olacak sekilde cagirin.

**/

const book = {
  title: 'Brave New World',
  author: 'Aldous Huxley',
}

function summary(genre, year) {
  console.log(
    `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`,
  )
}

// 1.çözüm
summary.call(book, "dystopian", 1932);
// 2.çözüm
summary.apply(book, ["dystopian", 1932]);
// 3.çözüm
let summaryBook = summary.bind(book, "dystopian", 1932);
summaryBook();




