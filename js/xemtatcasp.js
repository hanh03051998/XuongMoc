const listItem = [
    {
        id: 1,
        name: 'Bàn uống nước',
        image: 'images/san-pham-noi-bat/phong-khach-ban-uong-nuoc.png',
        desc: 'Size vừa, nâu đạm',
        price: '8.999.000'
    },
    {
        id: 2,
        name: 'Bàn uống nước 2',
        image: 'images/san-pham-noi-bat/phong-khach-ban-uong-nuoc-2.png',
        desc: 'Size vừa, nâu vân gỗ',
        price: '3.999.000'
    },
    {
        id: 3,
        name: 'Kệ TV',
        image: 'images/san-pham-noi-bat/phong-khach-ke-ti-vi.png',
        desc: '4 ngăn, gỗ lim',
        price: '12.999.000'
    },
    {
        id: 4,
        name: 'Kệ đồ',
        image: 'images/san-pham-noi-bat/sp-4.jpg',
        desc: '4 ngăn, trắng gỗ',
        price: '2.499.000'
    },
    {
        id: 5,
        name: 'Sofa',
        image: 'images/xem-tc-sp/so-fa1.jpg',
        desc: 'Size tắng sữa',
        price: '8.999.000'
    },
    {
        id: 6,
        name: 'Sofa 2',
        image: 'images/xem-tc-sp/so-fa2.jpg',
        desc: 'Size vừa, nâu vân gỗ',
        price: '3.999.000'
    },
    {
        id: 7,
        name: 'Bàn uống nước',
        image: 'images/xem-tc-sp/so-fa3.jpg',
        desc: '4 ngăn, gỗ lim',
        price: '12.999.000'
    },
    {
        id: 8,
        name: 'Bàn uống nước',
        image: 'images/xem-tc-sp/so-fa4.jpg',
        desc: '4 ngăn, trắng gỗ',
        price: '4.499.000'
    },
    {
        id: 9,
        name: 'Bàn uống nước',
        image: 'images/xem-tc-sp/so-fa5.jpg',
        desc: 'Size vừa nâu đậm',
        price: '8.999.000'
    },
    {
        id: 10,
        name: 'Kệ đồ',
        image: 'images/xem-tc-sp/so-fa6.jpg',
        desc: 'Size vừa, nâu vân gỗ',
        price: '3.999.000'
    },
    {
        id: 11,
        name: 'Kệ đồ 2',
        image: 'images/xem-tc-sp/so-fa7.jpg',
        desc: '4 ngăn gõ lim',
        price: '12.999.000'
    },
    {
        id: 12,
        name: 'Giá đồ',
        image: 'images/xem-tc-sp/so-fa8.jpg',
        desc: '4 ngăn, trắng gỗ',
        price: '2.499.000'
    },
    {
        id: 13,
        name: 'Giá đồ',
        image: 'images/xem-tc-sp/so-fa8.jpg',
        desc: 'Size tắng sữa',
        price: '10.330.000'
    },
    {
        id: 14,
        name: 'Kệ đồ 2',
        image: 'images/xem-tc-sp/so-fa7.jpg',
        desc: 'Size tắng sữa',
        price: '20.000.999'
    },
]

let pagination = {
    pageNumber: 1,
    pageSize: 12
}
function setListItem(list) {
    $('.product__list').html(''); //thiết lập class news về rỗng
    for (let i = 0; i < list.length; i++) {
        let item = ` <div class="col-md-3 product__item">
        <div class="product__item__img">
            <a href="#">
                <img src="${list[i].image}">
            </a>

        </div>
        <a href="#">${list[i].name}</a>
        <div class="slide__item__icon">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
        <span>(${list[i].desc})</span>
        <p>${list[i].price} VNĐ</p>
    </div> `

        $('.product__list').append(item);
    }
}
setListItem(listItem.slice(0, pagination.pageSize));

$('.product__pagination ul li').click(function () {
    $('.product__paginationul li').removeClass('active');
    $(this).addClass('active');

    let page = $(this).attr('page-number');
    pagination.pageNumber = parseInt(page);

    let arr = listItem.slice(pagination.pageNumber * pagination.pageSize - pagination.pageSize, pagination.pageSize * pagination.pageNumber)
    
    setListItem(arr);
});

// Tìm kiếm theo giá sản  phẩm
$('.classify ul li').click(function () {
    let value = $(this).attr('value');
    let minPrice = 0, maxPrice = 0
    if(value == 1) {
        minPrice = 0;
        maxPrice = 5;
    }
    if(value == 2) {
        minPrice = 5;
        maxPrice = 10;
    }
    if(value == 3) {
        minPrice = 10;
        maxPrice = 15;
    }
    if(value == 4) {
        minPrice = 15;
        maxPrice = Infinity;
    }
    let arr = [];
    for(let i = 0; i < listItem.length; i++) {
        if(minPrice <= parseInt(listItem[i].price) && (parseInt(listItem[i].price) < maxPrice)) {
            arr.push(listItem[i]);
        }
    }
    setListItem(arr);
});

