const Stock = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      description: 'description',
      imgeUrl: `https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/350e7f3a-979a-402b-9396-a8a998dd76ab/image.jpg`
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      description: 'description',
      imgeUrl:  `https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/350e7f3a-979a-402b-9396-a8a998dd76ab/image.jpg`
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      description: 'description',
      imgeUrl: `https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/350e7f3a-979a-402b-9396-a8a998dd76ab/image.jpg`
    },
  ]

  const GetStock = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(Stock);           
            }, 1000);
    })
}

  export default GetStock