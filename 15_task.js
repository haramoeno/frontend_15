class Item {
    constructor(id, name, used) {
        
        this.id = id;
        this.name = name
        this,used = used;
    }
    
    
    getId() {
        return this.id;
    }
    
    getName() {
        return this.name;
    }
    
    getUsed() {
        return this.used;
    }
}

class Chair extends Item {
    constructor(id, name, used) {
        
        super(id, name, used);
        this.used = used;
    }
    
    getUsed() {
        return this.used;
    }

}

let chair1 = new Chair('0001', 'デスクチェア', 'used');
let chair2 = new Chair('0002', 'ダイニングチェア', 'used');
let chair3 = new Chair('0003', '子ども用チェア', 'new');
let item4 = new Item('0004', '鍋', 100);

let itemList = [chair1, chair2, chair3, item4]

itemList.forEach((e) => {
    console.log(e);
})