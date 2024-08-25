class Item {
    constructor(id, name, stock, used) {
        
        this.id = id;
        this.name = name;
        this.stock = stock;
        this.used = used;
    }
    
    
    getId() {
        return this.id;
    }
    
    getName() {
        return this.name;
    }
    
    getStock() {
        return this.stock;
    }
    
    getUsed() {
        return this.used;
    }
    
    addStock(num) {
        this.stock += num;
    }
    
    
    sale(num) {
        if (this.stock < num) {
          throw new Error('在庫が足りません')
        } else {
          this.stock -= num;
        }
      
    }
}

class Chair extends Item {
    constructor(id, name, stock, used) {
        
        super(id, name, stock, used);
        
    }
    
    getUsed() {
        return this.used;
    }

}

let chair1 = new Chair('0001', 'デスクチェア', '30', 'used');
let chair2 = new Chair('0002', 'ダイニングチェア', '50', 'used');
let chair3 = new Chair('0003', '子ども用チェア', '20', 'new');
let item4 = new Item('0004', '鍋', 100);

let itemList = [chair1, chair2, chair3, item4]

itemList.forEach((e) => {
    console.log(e);
})