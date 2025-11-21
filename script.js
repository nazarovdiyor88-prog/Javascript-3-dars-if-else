// 1-masala
// let a = 5;
// if (a > 0){
//     a ++ 
//     console.log(a);  
// }else{
//     console.log(a);    
// }
// 2-masala if2. Butun son berilgan. Agar, berilgan son musbat bo`lsa, 1 ga oshiring, agar manfiy bo`lsa 2 ga kamaytiring. 
// Agar 0 ga teng bo`lsa, 10 ni o`zlashtirsin. Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin.
// let a = -5;
// if ( a > 0 ){
//     a++
// }
// if ( a < 0 ){
//     a-=2
// }
// if ( a == 0 ){
//     a+=10
// }   
// console.log(a);
       
//   3-masala Uchta butun son berilgan. Shu sonlar orasidan nechta musbat son borligini aniqlovchi programma tuzilsin.  
// let a=1;
// let b=2;
// let c=3;
// if (a>0 && b>0 && c>0){
//     console.log("Hammasi musbat");
// }else{
//     if (a>0){
//         console.log("a musbat");
//     }else{
//         if (a<0){
//             console.log("a manfiy");
//         }else{
//             console.log("a 0 ga teng");   
//         }      
//     }
//     if (b>0){
//         console.log("b musbat");
//     }else{
//         if (b<0){
//             console.log("b manfiy");
//         }else{
//             console.log("b 0 ga teng");   
//         }       
//     }
//     if (c>0){
//         console.log("c musbat");
//     }else{
//         if (c<0){
//             console.log("c manfiy");
//         }else{
//             console.log("c 0 ga teng");   
//         }      
//     }
// }

// 4-masala Uchta butun son berilgan. Shu sonlarni ikkitasi o`zaro teng, qolgan bittasini tartib raqami aniqlansin.
// let a=5;
// let b=4;
// let c=4;
// if (a==b){
//     console.log("Qolgan uchinchi sonning tartib raqami 3");
// }
// if (a==c){
//     console.log("Qolgan uchinchi sonning tartib raqami 2");
// }
// if (b==c){
//     console.log("Qolgan uchinchi sonning tartib raqami 1");
// }else{
//     console.log("kiritilgan sonlar teng emas");
// }

// 5-masala x haqiqiy soni berilgan. Quyidagi funksiya hisoblansin.
                // agar x < -2 yoki x > 2 bo’lsa 2 * x 
                // aks holda -3 * x;

// let x=-1;
// if (x<-2 || x>2){
//     console.log(2*x);    
// }else{
//     console.log(-3*x);
// }

// 6-masala Butun son berilgan. Berilgan sonni 
// "musbat toq", "musbat juft", "nol", “manfiy juft”, “manfiy toq” ekranga yozadigan programma tuzilsin.

// let a=0
// if (a>0 && a%2==0){
//     console.log("kiritilgan son musbat juft");    
// }
// if (a>0 && !(a%2==0)){
//     console.log("kiritilgan son musbat toq");
// }
// if (a==0){
//     console.log("kiritilgan son no'l");
// }
// if (a<0 && a%2==0){
//     console.log("kiritilgan son manfiy juft");    
// }
// if (a<0 && !(a%2==0)){
//     console.log("kiritilgan son manfiy toq");
// }

// 7-masala 1-7 gacha bo'lgan butun sonlar berilgan. 
// Kiritilgan songa mos ravishda hafta kunlarini so'zda ifodalovchi programma tuzilsin. (1-Dushanba, 2-Seshanba,...h.k)

// let a=-1;
// if (a==1){
//     console.log(`${a}-Dushanba`);
// }
// if (a==2){
//     console.log(`${a}-Seshanba`);
// }
// if (a==3){
//     console.log(`${a}-Chorshanba`);
// }
// if (a==4){
//     console.log(`${a}-Payshanba`);
// }   
// if (a==5){
//     console.log(`${a}-Juma`);
// }
// if (a==6){
//     console.log(`${a}-Shanba`);
// }
// if (a==7){
//     console.log(`${a}-Yakshanba`);
// }
// if (a<=0 || a>7){
//     console.log("Bu raqamda hafta kuni yo'q");
// }  

        // 8-masala A, B haqiqiy va amal butun soni berilgan. 
        // A va B sonlari ustida arifmetik amallar bajaruvchi programma tuzilsin. 
        // Amal quyidagi qiymatlarni qabul qiladi: 
        // 1-qo`shish, 2-ayirish, 3-bo`lish, 4- ko`paytirish.
 
// let A=5;
// let B=6;
// const Qo=1;
// const Ay=2;
// const Ko=3;
// const Bo=4;
// const C=5;
// if (C==1){
//     console.log("Yig'indi=",A+B);    
// }
// if (C==2){
//     console.log("Ayirma=",A-B);    
// }
// if (C==3){
//     console.log("Ko'paytma=",A*B);    
// }
// if (C==4){
//     console.log("Bo'linma=",A/B);    
// }
// if (C<=0 || C>4){
//     console.log("Bajariladigan amal mavjud emas!");
    
// }

// 9-masala Yoshni yillarda aniqlovchi 20-69 gacha butun son berilgan. 
// Kiritilgan sonni so`zlarda ifodalovchi programma tuzilsin. ("yigirma yosh", "qirq uch yosh❞ va h.k.)

// let yosh20="Yigirma";
// let yosh30="O'ttiz";
// let yosh40="Qirq";
// let yosh60="Oltmish";
// let yosh69="Oltmish to'qqiz";
// let yosh50="Ellik";
// let yosh10="O'n";
// let yosh70="Yetmish";
// let yosh80="Sakson";
// let yosh90="To'qson";

// let Yosh=80;
// if (Yosh==80){
//     console.log(`${yosh80} yosh`);   
// }
// if (Yosh==20){
//     console.log(`${yosh20} yosh`);   
// }
// if (Yosh==10){
//     console.log(`${yosh10} yosh`);   
// }
// if (Yosh==30){
//     console.log(`${yosh30} yosh`);   
// }
// if (Yosh==40){
//     console.log(`${yosh40} yosh`);   
// }
// if (Yosh==90){
//     console.log(`${yosh90} yosh`);   
// }
// if (Yosh==60){
//     console.log(`${yosh60} yosh`);   
// }
// if (Yosh==69){
//     console.log(`${yosh69} yosh`);   
// }

                                        // Uyga vazifa

// 1-masala Butun son berilgan. Agar, berilgan son musbat bo`lsa, 1 ga oshirilsin, aks holda o`zgartirilmasin. 
// Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin.    

// let a=-1;
// if (a>0){
//     console.log(a+1);
// }else{
//     console.log(a);
// }

// 2-masala Butun son berilgan. Agar, berilgan son musbat bo`lsa, 1 ga oshiring, agar manfiy bo`lsa 2 ga kamaytiring. 
// Agar 0 ga teng bo`lsa, 10 ni o`zlashtirsin. Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin.

// let a = 5;
// if ( a > 0 ){
//     a++
// }
// if ( a < 0 ){
//     a-=2
// }
// if ( a == 0 ){
//     a+=10
// }   
// console.log(a);

// 3-masala Uchta butun son berilgan. Shu sonlar orasidan nechta musbat son borligini aniqlovchi programma tuzilsin.

// let a=1;
// let b=2;
// let c=3;
// if (a>0 && b>0 && c>0){
//     console.log("Hammasi musbat");
// }else{
//     if (a>0){
//         console.log("a musbat");
//     }else{
//         if (a<0){
//             console.log("a manfiy");
//         }else{
//             console.log("a 0 ga teng");   
//         }      
//     }
//     if (b>0){
//         console.log("b musbat");
//     }else{
//         if (b<0){
//             console.log("b manfiy");
//         }else{
//             console.log("b 0 ga teng");   
//         }       
//     }
//     if (c>0){
//         console.log("c musbat");
//     }else{
//         if (c<0){
//             console.log("c manfiy");
//         }else{
//             console.log("c 0 ga teng");   
//         }      
//     }
// }

// 4-masla Ikkita butun son berilgan. Shu sonlarning kattasini aniqlovchi programma tuzilsin.

// let a=5;
// let b=6;
// if (a>b){
//     console.log("a soni b dan katta");
// }else{
//     console.log("b soni a dan katta");   
// }

// 5-masala Ikkita butun son berilgan. Shu sonlarning kichigini tartib raqamini aniqlovchi programma tuzilsin.

// let a=5;
// let b=6;
// if (a>b){
//     console.log("kichik sonning tartib raami 2");    
// }else{
//     console.log("kichik sonning tartib raami 1");
// } 

// 6-masala Ikkita butun son berilgan. Shu sonlarning avval kattasini keyin kichigini ekranga chiqaruvchi programma tuzilsin.

// let a=7;
// let b=8;
// if (a>b){
//     console.log(`Kiritilgan sonlarning kattasi ${a} kichigi ${b}`);  
// }else{
//     console.log(`Kiritilgan sonlarning kattasi ${b} kichigi ${a}`);
// }

// 8-masala A va B butun sonlari berilgan. 
// Agar o`zgaruvchilar o`zaro teng bo`lmasa, A va B o`zgaruvchilari ularning yig'indisini o`zlashtirsin. 
// Agar teng bo`lsa, 0 ni o`zlashtirsin. A va B ning qiymati ekranga chiqarilsin.

// let a=5;
// let b=5;
// if (!(a==b)){
//     console.log("a=",a+b,"b=",a+b);   
// }else{
//     console.log("a=",a+0,"b=",0+b);
// }

// 9-masala  A va B butun sonlari berilgan. 
// Agar o`zgaruvchilar o`zaro teng bo`lmasa, A va B bu sonlarning kattasini o`zlashtirsin. 
// Agar teng bo`lsa, 0 ni o`zlashtirsin. A va B ning qiymati ekranga chiqarilsin.

// let a=5;
// let b=6;
// if (!(a==b)){
//     if (a>b){
//         console.log("a=",a+a,"b=",b+a);
//     }else{
//         console.log("a=",a+b,"b=",b+b);
//     }      
// }else{
//     console.log("a=",a+0,"b=",0+b);
// }