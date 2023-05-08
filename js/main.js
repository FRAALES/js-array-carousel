let activeItem = 0;

//seleziono il next
const next = document.querySelector('.next');
console.log(next);

//gestisco l'evento sul click sul next
next.addEventListener('click',
    function (){

        //se non sono all'ultimo elemento
        if (activeItem < (items.length - 1)) {
            //togli la classe active all'elemento attivo in quel momento
            items(activeItem).classList.remove('active');

            //passare all'item successivo
            activeItem = activeItem + 1;
            //activeItem++
            console.log("nuovo valore di activeItem = ", activeItem);

            //sull'item successivo aggiungere la classe active
            items(activeItem).classList.add('active');

            //se sono all'ultimo elemento faccio sparire il next
            if (activeItem === (items.length - 1)) {
                next.classList.add('hidden');
            }
        }




    }




)