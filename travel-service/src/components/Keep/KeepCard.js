import styled from "styled-components";
const Card = styled.div`
  position: relative;
  background-image: ${(props) => `url(${props.$bgImg})`};
  background-size: cover;
`
const KeepCard = ({title, tel, image, addr}) => {
    return(
        <Card
        className="KeepCard"
        $bgImg={image == "" ? "/assets/accommodation_image.jpg" : image}
        >
            <div className="text_box">
                <p>{title}</p>
                <div className="info">
                    <p>{tel}</p>
                    <p>{addr}</p>
                </div>
            </div>
         
        </Card>
    )
}

export default KeepCard