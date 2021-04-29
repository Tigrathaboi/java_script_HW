const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

ingredients.forEach(ingridient => {
    let li_items = document.createElement("li");
    li_items.innerHTML = ingridient;
    document.querySelector("#ingredients").append(li_items);
});