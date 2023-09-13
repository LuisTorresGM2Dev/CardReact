
import './App.css'
import { Card } from './components/Card'

const myArray = [
  {
      title: "Pelota YPF",
      img: "https://www.eldiariodelcentrodelpais.com/wp-content/uploads/2017/08/p21-f2-arriba-chiquita.jpg",
      description: "Pelota original de Messi"
  },
  {
      title: "Remera Juventus Local",
      img: "https://img01.ztat.net/article/spp-media-p1/54dea984f08147cf850d215f945ba2b4/12eeb176799a4c9f832598b7c212ef9e.jpg?imwidth=1800&filter=packshot",
      description: "Temporada 2023/2024"
  },
  {
      title: "Camiseta Jayson Tatum ",
      img: "https://tirolibreuy.com/cdn/shop/products/bostoncelticscity.jpg?v=1672412936",
      description: "City Edition"
  },
  {
    title: "Pelota YPF",
    img: "https://www.eldiariodelcentrodelpais.com/wp-content/uploads/2017/08/p21-f2-arriba-chiquita.jpg",
    description: "Pelota original de Messi"
},
{
    title: "Remera Juventus Local",
    img: "https://img01.ztat.net/article/spp-media-p1/54dea984f08147cf850d215f945ba2b4/12eeb176799a4c9f832598b7c212ef9e.jpg?imwidth=1800&filter=packshot",
    description: "Temporada 2023/2024"
},
{
    title: "Camiseta Jayson Tatum ",
    img: "https://tirolibreuy.com/cdn/shop/products/bostoncelticscity.jpg?v=1672412936",
    description: "City Edition"
} 
];  
function App() {
  const cardComponents = myArray.map((producto)  =>  {
    return (
        <Card
          title={producto.title}
          img= {producto.img}
          description = {producto.description}
        />
    )
  })

  return(
    <div className='cardContainer'>
      {cardComponents}  
    </div>
  )

}

export default App
