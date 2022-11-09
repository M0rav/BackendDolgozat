interface Artwork  {
    title : string;
    year : Number;
    price : Number;
    }
    
    
    class Statue implements Artwork {
    
    title: string;
    year : Number;
    price : Number;
    height : Number;
    
    constructors(title:string, year: Number, price: Number, height){
        this.title = title;
        this.year = year;
        this.price = price;
    }
    
    }

    
let lista: Artwork[] =[];

document.addEventListener('DOMContentLoaded', () => {

    let darab = 0;
    let osszespenz = 0;

  


    document.getElementById('btnfelvetel')?.addEventListener('click', () => {
        (document.getElementById('inputName') as HTMLElement).textContent = '';
        (document.getElementById('inputPrice') as HTMLElement).textContent = '';
        (document.getElementById('inputYear') as HTMLElement).textContent = '';
        (document.getElementById('inputHeight')as HTMLElement).textContent = '';

    })
    document.getElementById('btnfelvetel')?.addEventListener('click', () => {
    (document.getElementById('listaDb') as HTMLElement).textContent =  darab;


    })

    
})