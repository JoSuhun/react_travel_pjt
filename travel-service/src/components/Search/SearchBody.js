import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { APIContext } from "../../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: calc(100% - 200px);
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
`;

const InnerBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 20%;
  min-width: 250px;
  margin: 10px;
  height: 400px;
  border: 1px solid grey;
  border-radius: 10px;
`;

const CardImg = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const CardDesc = styled.div`
  position: relative;
  width: calc(100% - 30px);
  height: 150px;
  padding: 0 15px;

  & > p {
    font-size: 10pt;
    color: grey;
  }
`;

const GoBtn = styled.button`
  position: absolute;
  bottom: 40px;
  right: 15px;
  font-size: 10pt;
  color: grey;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;

const StyledForm = styled.form`
  width: calc(100% - 40px);
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  & > select {
    margin: 0 5px;
    padding: 10px;
    border: 0;
  }

  & > input {
    margin: 0 5px;
    width: 300px;
    padding: 10px;
    border: 0;
    border-bottom: 1px solid black;
  }

  & > button {
    padding: 10px;
    width: 75px;
    border: 2px solid lightgrey;
    background-color: lightgrey;
    cursor: pointer;

    &:hover {
      border-color: grey;
      background-color: grey;
    }
  }
`;

const Default = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function SearchBody() {
  const [keyword, setKeyword] = useState("");
  const [type, setType] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearched, SetIsSearched] = useState(false);
  const API_KEY = React.useContext(APIContext);

  const navigate = useNavigate();
  const types = [
    ["", "전체"],
    [12, "관광지"],
    [14, "문화시설"],
    [15, "축제공연행사"],
    [25, "여행코스"],
    [28, "레포츠"],
    [32, "숙박"],
    [38, "쇼핑"],
    [39, "음식점"],
  ];

  const changeKeyword = (event) => {
    setKeyword(event.target.value);
  };

  const search = async (event) => {
    event.preventDefault();

    const json = await axios.get(
      `https://apis.data.go.kr/B551011/KorService1/searchKeyword1?serviceKey=${API_KEY}&numOfRows=100&pageNo=1&MobileOS=WIN&MobileApp=test&_type=json&listYN=Y&arrange=A&keyword=${keyword}${
        type == "" ? "" : `&contentTypeId=${type}`
      }`
    );
    SetIsSearched(true);
    json.data.response.body.items == ""
      ? setSearchResults([])
      : setSearchResults(json.data.response.body.items.item);
  };

  const changeType = (event) => {
    setType(event.target.value);
  };

  const goToDetail = (id, type) => {
    if (type == 32) {
      navigate(`/accomdetail/${id}`);
    } else {
      alert("준비중입니다");
    }
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={search}>
        <select onChange={changeType}>
          {types.map((each) => (
            <option key={each[0]} value={each[0]}>
              {each[1]}
            </option>
          ))}
        </select>
        <input value={keyword} onChange={changeKeyword} type="text" />
        <button type="submit">검색</button>
      </StyledForm>
      {!isSearched ? (
        <Default>검색어를 입력해주세요.</Default>
      ) : searchResults.length > 0 ? (
        <InnerBox>
          {searchResults.map((each) => (
            <Card key={each.contentid}>
              <CardImg
                src={
                  each.firstimage == ""
                    ? "/assets/search_image.jpg"
                    : each.firstimage
                }
                alt={each.title}
              />
              <CardDesc>
                <h4>{each.title}</h4>
                <p>{each.addr1}</p>
                <GoBtn
                  onClick={() => {
                    goToDetail(each.contentid, each.contenttypeid);
                  }}
                >
                  자세히 보기
                </GoBtn>
              </CardDesc>
            </Card>
          ))}
        </InnerBox>
      ) : (
        <Default>검색 결과가 없습니다.</Default>
      )}
    </Wrapper>
  );
}

export default SearchBody;
