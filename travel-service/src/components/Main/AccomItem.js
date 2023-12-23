import { Link } from "react-router-dom";

const AccomItem = ({ title, addr1, firstimage, tel, contentid }) => {
  const defaultImage =
    process.env.PUBLIC_URL + `/assets/accommodation_image.jpg`;

  return (
    <div className="AccomItem">
      <Link to={`/accomdetail/${contentid}`}>
        <div className="accom_head">
          <h3>{title}</h3>
          {tel && <span>{tel}</span>}
        </div>
        <img src={firstimage ? firstimage : defaultImage} />
        <p className="accom-addr">{addr1}</p>
      </Link>
    </div>
  );
};

export default AccomItem;
