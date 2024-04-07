class SearchView {
    parentEl = document.querySelector('form');
    data;

    getQuery() {
        return this.parentEl.querySelector('#search').value;
    }
    
    addHandlerCurrentPosSearch(handler) {
        document.querySelector('.submit').addEventListener('click', function (e) {
            e.preventDefault();
            handler();
        });
    }
    
    addHandlerSearch(handler) {
        this.parentEl.addEventListener('submit', e=>{
            e.preventDefault();
            handler();
            this.#clear();
        })

    }
    #clear() {
        this.parentEl.querySelector('#search').value = '';
    }




}

export default new SearchView()