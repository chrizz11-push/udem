import React,{useState, useEffect, Fragment} from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import app from "../base"

const Card = () => {
const [limit, setLimit] = useState([])
const [dev, setDev] = useState([])
const [devtwo, setDevtwo] = useState([])
  const [data, setData] = useState([]);


  const fetchDevData = async () => {
    await app
      .firestore()
      .collection("udemyCourses")
      .orderBy("category")
      .startAt("javascript").endAt("javascript")
      .onSnapshot((snap) => {
        const item = [];
        snap.forEach((doc) => {
          item.push({ ...doc.data(), id: doc.id });
        });
        setDev(item);
      });
  };

  const fetchDevtwoData = async () => {
    await app
      .firestore()
      .collection("udemyCourses")
      .orderBy("category")
      .startAt("python").endAt("python")
      .onSnapshot((snap) => {
        const item = [];
        snap.forEach((doc) => {
          item.push({ ...doc.data(), id: doc.id });
        });
        setDevtwo(item);
      });
  };


  




 
  
useEffect(() => {

fetchDevData()
fetchDevtwoData()

console.log("this is the data", dev);

}, []);
  return (
      <Fragment>
          <KeyHolder></KeyHolder>
    <Container>
      {
        dev.map(({id, avatar,title, rate,amount, teacher})=>(
          <Wrapper key={id}>
      <img src={avatar}alt="woman" />
      <Title>{title}</Title>
      <Teacher>{teacher}</Teacher>
      <Ratings>
        <NumRate>{rate}</NumRate>
        <Rate>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
        </Rate>
        <Raters>(14,16)</Raters>
      </Ratings>
      <Price>{amount}</Price>
      </Wrapper>
        ))
      }
    </Container>
    <Container>
      {
        devtwo.map(({id, avatar,title, rate,amount, teacher})=>(
          <Wrapper key={id}>
      <img src={avatar}alt="woman" />
      <Title>{title}</Title>
      <Teacher>{teacher}</Teacher>
      <Ratings>
        <NumRate>{rate}</NumRate>
        <Rate>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
        </Rate>
        <Raters>(14,16)</Raters>
      </Ratings>
      <Price>{amount}</Price>
      </Wrapper>
        ))
      }
    </Container>

    </Fragment>
  );
};

export default Card;
const KeyHolder = styled.div``;
const Wrapper = styled.div`
margin: 10px;
width: 225px;
  /* background-color: red; */
  height: 300px;
  img {
    width: 100%;
    height: 130px;
    object-fit: cover;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
`;
const NumRate = styled.div``;


const Rate = styled.div`
  color: #e59819;
  font-size: 15px;
`;

const Raters = styled.div``;

const Container = styled.div`
  display: flex;
  width: 100%;
flex-wrap: wrap;
align-items: center;
justify-content: center;
/* background-color: red; */


`;

const Title = styled.div`
  font-family: "sf pro display", -apple-system, BlinkMacSystemFont, Roboto,
    "segoe ui", Helvetica, Arial, sans-serif, "apple color emoji",
    "segoe ui emoji", "segoe ui symbol";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #1c1d1f;
  margin-top: 5px;
`;

const Teacher = styled.div`
  font-size: 13px;
  color: #6a6f73;
  margin-top: 5px;
`;

const Ratings = styled.div`
  margin-top: 10px;
  display: flex;
  /* background-color: red; */
  justify-content: space-between;
  width: 190px;
  align-items: center;
`;

const Price = styled.div`
  margin-top: 10px;
  font-weight: bold;
`;

// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
