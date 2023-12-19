import './AccomItem.css'

const AccomItem = ({title, addr1, firstimage, areacode}) =>{
    return(
        <div className="AccomItem">
            <h3>{title}</h3>
            <img src={firstimage} />
            <p className="accom-addr">{addr1}</p>
        </div>
    )
}

export default AccomItem