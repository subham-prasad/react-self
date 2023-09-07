const burgerKing ={

    name: 'Burger King',
    img: 'https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20211214071325238343_482x264jpg',
    cuisines: ["Burger", "American"],
    rating: '4.2'
  }
  
  const RestaurantCard = () => {
    return (
      <div className="card">
        <img src={burgerKing.img}/>
        <h1>{burgerKing.name}</h1>
        <h2>{burgerKing.cuisines.join(",")}</h2>
        <h3> {burgerKing.rating} Stars</h3>
      </div>
    )
  }