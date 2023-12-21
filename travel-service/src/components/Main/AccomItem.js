const AccomItem = ({title, addr1, firstimage, tel}) =>{
  const defaultImage = process.env.PUBLIC_URL + `/assets/accommodation_image.jpg`
    
    return(
        <div className="AccomItem">
                <div className="accom_head">
                    <h3>{title}</h3>
                    {tel&&<span>{tel}</span>}
                </div>
                <img src={firstimage?firstimage:defaultImage} />
                <p className="accom-addr">{addr1}</p>
        </div>
    )
}

export default AccomItem