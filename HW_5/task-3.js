class Storage {
    constructor(item) {
        this.items = item;
    }

    getItems() {
        return this.items;
    }
    addItem(item) {
        return this.items.push(item);
    }
    removeItem(item) {
        for (let i = 0; i < this.items.length; i += 1) {
            if(this.items[i] === item) {
                return this.items.splice(this.items.indexOf(item), 1);
            }
        }
        return `Нет такого элемента`;
    }
}

const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
  ]);
  const items = storage.getItems();
  console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  storage.addItem('Дроид');
  console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  storage.removeItem('Пролонгер');
  console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
  console.log(storage.removeItem('Пролонгер')); // Нет такого элемента

