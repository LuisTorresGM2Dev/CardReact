function Card ({title,img,description}){
    return(
            <div className='cardContent'>
                <p>{title}</p>
                <img src={img} alt="" />
                <p>{description}</p>
            </div>
    )
}
export { Card };