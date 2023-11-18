const A = store.connect(class  {
    constructor(){
       
    }
    show() {
        this.set('a', 222)
        console.log(this.get('a'))
    }
})