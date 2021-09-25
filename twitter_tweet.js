const storeForm=document.querySelector('#form');
const newList=document.querySelector('#list');
storeForm.addEventListener('submit',function(e){
    e.preventDefault();
    const quant=storeForm.elements.quantity.value;
    const prodt=storeForm.elements.items.value;
    const addToList=document.createElement('li');
    
    addToList.append(quant);
    addToList.append(` ${prodt}`);
    newList.append(addToList);
})
newList.addEventListener('click',function (e){
    e.target.nodeName === 'LI' && e.target.remove();
})