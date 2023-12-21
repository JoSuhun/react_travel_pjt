const AccomItem = ({title, addr1, firstimage, tel}) =>{
  const defaultImage = process.env.PUBLIC_URL + `/assets/accommodation_image.jpg`
    
    return(
        <div className="AccomItem">
            <div>
                <a>
                    <h3>{title}</h3>
                    <span>{tel}</span>
                </a>
                <img src={firstimage?firstimage:defaultImage} />
                <p className="accom-addr">{addr1}</p>
            </div>
        </div>
    )
}

export default AccomItem