function removeNoJsClass() {
    document.documentElement.classList.remove('no-js');
}

removeNoJsClass();

function filters() {
    const filtersWrap = document.querySelector('[data-filters]');
    const filtersBtn = filtersWrap.querySelector('[data-filters-btn]');
    const filtersCboxList = Array.prototype.slice.call(filtersWrap.querySelectorAll('[data-cbox]'));
    const filtersItemsList = Array.prototype.slice.call(document.querySelectorAll('[data-level]'));

    filtersBtn.addEventListener('click', function () {
        if (filtersWrap.dataset.filters === 'close') {
            openFilters();
        } else {
            closeFilters();
        }
    })

    function openFilters() {
        filtersWrap.dataset.filters = 'open';
        filtersBtn.dataset.filtersBtn = "open";
    }

    function closeFilters() {
        filtersWrap.dataset.filters = 'close';
        filtersBtn.dataset.filtersBtn = "close";
    }

    filtersCboxList.forEach(item => {
        item.addEventListener('change', function (e) {
            let chosenLevel = e.target.dataset.cbox;
            filtersItemsList.forEach(item => {
                if(item.dataset.level === chosenLevel) {
                    item.classList.toggle('inactive');
                }
            })
        })
    });
}

filters();