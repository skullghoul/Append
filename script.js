const storeItems = [

    {
      name: 'TV',
      price: 800.00,
      inStock: true
    },
    {
      name: 'Phone',
      price: 700.00,
      inStock: false
    },
    {
      name: 'Game Console',
      price: 300.00,
      inStock: true
    },
    {
      name: 'Laptop',
      price: 1200.00,
      inStock: true
    },
    {
      name: 'Smart Watch',
      price: 200.00,
      inStock: false
    },
    {
      name: 'Headphones',
      price: 100.00,
      inStock: true
    },
  ];


storeItems.forEach(function(item){
  if(item.inStock === true){
  $('#appendToMe').append(`<p>${item.name}: $${item.price}</p>`).attr('price','item').addClass('inStock')
  }
  else{
  $('#appendToMe').append(`<p>${item.name}: Not in stock</p>`).addClass('notInStock')
  }
  });