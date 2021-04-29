let li_items = document.querySelectorAll('.item');
console.log(`В списке ${li_items.length} категории`);
li_items.forEach(item => console.log(`Категория: ${item.querySelector('h2').innerText}. Кол-во элементов: ${item.querySelectorAll('li').length}`));