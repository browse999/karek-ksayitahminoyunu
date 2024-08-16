//  Matematik yarismasi



let sayi1 , sayi2 , sayi3 

sayi1 , sayi2 , sayi3 = Number()



let soru1 = prompt(`64'ün karekökü kaçtır ?  8  , 6  , 9  , 1 `)


if(soru1==8) {

    alert(`Tebrikler doğru cevap sıradaki sorunuz geliyor !`)

   let soru2 = prompt(`121 'in karekökü kaçtır ? 10 ,20 , 30 , 11`)

    if(soru2==11) {

        alert('Tebrikler doğru cevapladınız sorunuz geliyor !')
    }

    else{
        alert('Yarismayi kaybettiniz')
    }

   let soru3 = prompt(`81 in karekökü kaçtır 2 ,5 ,9 ,12`) 

   if (soru3==9){
    alert('Tebrikler oyunu kazandınız.')
   }

   else{
    alert('Yarismayi kaybettiniz')
}
}

else(

    alert('Oyunu kaybettiniz !')
)