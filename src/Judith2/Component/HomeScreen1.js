import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

const HomeScreen1 = () => {
  return (
    <Container>
      <Wrapper>
        <Container1>
          <ImageBG src="/teaching.jpg" />
          <Wrapper1>
            <Left1>
              <Head1>Come teach with us</Head1>
              <Content>
                Become an instructor and change lives — including your own
              </Content>
              <Search>
                <Input placeholder="What do you want to learn" />
                <AiOutlineSearch />
              </Search>
            </Left1>
          </Wrapper1>
        </Container1>
        <ReasonsHolder>
          <Head>So many reasons to start</Head>
          <NewHolder>
            <Box>
              <Image2 src="1.jpg" />
              <Text2>
                <Text1>Teach your way</Text1>
                <Write>
                  Publish the course you want, in the way you want, and always
                  have of control your own content.
                </Write>
              </Text2>
            </Box>
            <Box>
              <Image2 src="2.jpg" />
              <Text2>
                <Text1>Teach your way</Text1>
                <Write>
                  Publish the course you want, in the way you want, and always
                  have of control your own content.
                </Write>
              </Text2>
            </Box>
            <Box>
              <Image2 src="3.jpg" />
              <Text2>
                <Text1>Teach your way</Text1>
                <Write>
                  Publish the course you want, in the way you want, and always
                  have of control your own content.
                </Write>
              </Text2>
            </Box>
          </NewHolder>

          <BlueBack>
            <CardHolder>
              <Card>
                <Num>40M</Num>
                <Text3>Students</Text3>
              </Card>
              <Card>
                <Num>40M</Num>
                <Text3>Students</Text3>
              </Card>
              <Card>
                <Num>40M</Num>
                <Text3>Students</Text3>
              </Card>
              <Card>
                <Num>40M</Num>
                <Text3>Students</Text3>
              </Card>
              <Card>
                <Num>40M</Num>
                <Text3>Students</Text3>
              </Card>
            </CardHolder>
          </BlueBack>
        </ReasonsHolder>
        <How>
          <NewHow>
            <PlanHolder>
              <Head2>How to begin</Head2>
              <Planner>
                <Plan1>Plan your Curriculum</Plan1>
                <Plan>Record your Video</Plan>
                <Plan>Record your Video</Plan>
              </Planner>
            </PlanHolder>
          </NewHow>
        </How>
        <TextImg>
          <Text4>
            You start with your passion and knowledge. Then choose a promising
            topic with the help of our Marketplace Insights tool.
            <br />
            <p>
              The way that you teach — what you bring to it <br />— is up to
              you.
            </p>
            <h5>How we help you</h5>
            <Text5>
              We offer plenty of resources on how to create your first course.
              And, our instructor dashboard and curriculum pages help keep you
              organized.
            </Text5>
          </Text4>
          <Image3 src="undraw.jpg" />
        </TextImg>
        <TextImg2>
          <Image4 src="teaching1.jpg" />
          <Text6>
            “I’m proud to wake up knowing my work is helping people around the
            world improve their careers and build great things. While being a
            full-time instructor is hard work, it lets you work when, where, and
            how you want.”
            <div>Frank Kane</div>
            <span>Data Science & IT Certifications</span>
          </Text6>
        </TextImg2>
        <TextDraw>
          <Image5 src="undraw3.jpg" />
          <TextHolder7>
            <Head3>You won’t have to do it alone</Head3>
            <Text7>
              Our Instructor Support Team is here to answer your questions and
              review your test video, while our Teaching Center gives you plenty
              of resources to help you through the process. Plus, get the
              support of experienced instructors in our online community.
              <br />
              <a> Need more details before you start? Learn more</a>
            </Text7>
          </TextHolder7>
          <Image6 src="undraw1.jpg" />
        </TextDraw>
        <TextDraw2>
          {/* <Text8> */}
          <h3>Become an instructor today</h3>
          <div>
            Join one of the world’s largest online learning marketplaces.
          </div>
          {/* </Text8> */}
          <Button2>Get Started</Button2>
        </TextDraw2>
      </Wrapper>
    </Container>
  );
};

export default HomeScreen1;

const Container1 = styled.div`
  width: 100%;
  height: 60vh;
`;

const Wrapper1 = styled.div`
  height: 100%;
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const ImageBG = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
  position: absolute;
  //z-index: -1;
  @media screen and (max-width: 768px) {
    position: unset;
  }
`;

const Head1 = styled.div`
  font-family: SuisseWorks, Georgia, Times, "times new roman", serif,
    "apple color emoji", "segoe ui emoji", "segoe ui symbol";
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  color: #1c1d1f;
  margin-bottom: 5px;
`;

const Content = styled.div`
  font-size: 19px;
  margin-bottom: 5px;
`;

const Search = styled.div`
  /* background-color: red; */
  height: 45px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  width: 80%;
  font-size: 15px;
  margin-bottom: 5px;
`;

const Left1 = styled.div`
  background-color: white;
  height: 70%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 20px;
  z-index: 1;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const Input = styled.input`
  flex: 1;
  height: 100%;
  border: none;
  outline: none;
  font-size: 15px;
  background-color: transparent;
  ::placeholder {
    font-size: 15px;
  }
`;

const Left = styled.div`
  z-index: 1;
  height: 100%;
  left: 50px;
  position: absolute;
  top: 50px;
  @media screen and (max-width: 768px) {
    position: unset;
  }
  /* background-color: #ededed; */
`;

const Button2 = styled.div`
  width: 300px;
  height: 50px;
  background-color: black;
  margin-top: 18px;
  color: white;
  font-size: 15px;
  font-weight: bold;
  font-family: poppins;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text8 = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  h3 {
    font-size: 40px;
    text-align: center;
    font-family: poppins;
    flex-wrap: wrap;
  }
  div {
    //text-align: center;
    width: 480px;
    font-size: 25px;
    text-align: center;
    font-family: poppins;
    display: flex;
    justify-content: center;
    color: black;
  }
`;

const TextDraw2 = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #f7f9fa;
  align-items: center;
  flex-direction: column;
  padding-bottom: 20px;
`;

const Text7 = styled.div`
  text-align: center;
  font-size: 20px;
  font-family: poppins;
  a {
    font-size: 16px;
    color: blue;
    text-decoration: blue;
    margin-top: 40px;
    font-weight: bold;
    border-bottom: 1px solid blue;
  }
`;

const TextDraw = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Image6 = styled.img`
  min-width: 200px;
  //width: 300px;
  min-height: 200px;
  height: 400px;
  background-color: lavender;
  //margin: 0 10px;
  object-fit: cover;
  margin-top: 80px;
  //margin-right: -80px;
`;

const Image5 = styled.img`
  min-width: 200px;
  //width: 300px;
  min-height: 200px;
  height: 400px;
  background-color: lavender;
  margin-top: 80px;
  object-fit: cover;
  //margin-left: -100px;
`;

const Head3 = styled.div`
  font-size: 30px;
  font-family: poppins;
  font-weight: bold;
`;

const TextHolder7 = styled.div`
width: 400px;
  background-color; :red;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  position: relative;

`;

const Text6 = styled.div`
  margin-top: 20px;
  display: flex;
  margin-right: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
  //font-size: 17px;
  //justify-content: center;
  width: 300px;
  // width: 400px;
  min-height: 150px;
  //height: 400px;
  font-family: poppins;
  font-size: 20px;
  div {
    font-size: 16px;
    font-family: poppins;
    font-weight: bold;
    margin-top: 15px;
  }
  span {
    font-size: 19px;
    font-family: poppins;
  }
`;

const Image4 = styled.img`
  width: 350px;
  //margin: 0 30px;
  //width: 450px;
  //min-height: 200px;
  height: 400px;
  margin: 0 20px;

  background-color: lavender;
  // margin: 0 10px;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    width: 300px;
  }
  //display: none;
`;

const TextImg2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 60px;
  flex-wrap: wrap;
  background-color: #f7f9fa;
  @media screen and (max-width: 768px) {
    // width: 0px;
    width: 100%;
    justify-content: center;
    text-align: center;
  }
`;

const Text5 = styled.div``;

const Image3 = styled.img`
  min-width: 300px;
  //width: 450px;
  min-height: 200px;
  height: 400px;
  background-color: lavender;
  //margin: 0 10px;
  object-fit: cover;
  margin: 0 20px;
`;

const Text4 = styled.div`
  width: 250px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
  //justify-content: center;
  //width: 400px;
  /* min-height: 150px; */
  //height: 400px;
  font-family: poppins;
  font-size: 19px;
  h5 {
    font-family: poppins;
    font-size: 19px;
  }
  //margin: 0 10px;
`;

const TextImgHolder = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  flex-wrap: wrap;
  z-index: 1000;
  //align-items: center;
  //justify-content: center;

  // background-color: green;
  align-items: center;
`;

const TextImg = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  margin-top: 60px;
  flex-wrap: wrap;
`;

const Planner = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 1px solid grey;
`;

const Plan = styled.div`
  //width: 100%;
  display: flex;
  font-weight: bold;
  font-size: 20px;
  color: grey;
  margin: 10px 10px;
  height: 100%;
  //  border-bottom: 1px solid grey;

  //background-color: red;
`;

const Plan1 = styled.div`
  //width: 100%;
  display: flex;
  font-weight: bold;
  font-size: 20px;
  color: black;
  margin: 10px 10px;
  //border-bottom: 1px solid grey;
  // border-bottom: 2px solid black;
`;

const PlanHolder = styled.div`
  width: 80%;
  min-height: 30px;
  height: 100%;
  display: flex;
  font-family: poppins;

  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
`;

const Head2 = styled.div`
  margin: 30px 0;
  font-weight: bold;
  font-size: 35px;
  font-family: poppins;
`;

const NewHow = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  //border-bottom: 1px solid black;
`;

const How = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;

  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const CardHolder = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  //background-color: green;
`;

const Text3 = styled.div``;

const Num = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

const Card = styled.div`
  width: 100px;
  height: 100px;
  color: white;
  margin: 0 50px;
  font-family: poppins;
  display: flex;
  justify-content: center;
  //background-color: red;
  align-items: center;
  flex-direction: column;
  // text-align: center;
`;

const BlueBack = styled.div`
  width: 100%;
  min-height: 180px;
  height: 100%;
  background-color: #5624d0;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  align-items: center;
  //align-items: center;
`;

const NewHolder = styled.div`
  width: 90%;
  display: flex;
  //flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 100%;
`;

const Text1 = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-top: 40px;
  //margin-bottom: 30px;
`;

const Write = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  text-align: center;
`;

const Head = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  color: black;
  font-weight: bold;
  font-size: 28px;
  font-family: poppins;
  text-align: center;
`;

const BoxHolder = styled.div`
  width: 100%;
  height: 650px;
  display: flex;
  justify-content: center;
  //align-items: center;
  flex-wrap: wrap;

  // background-color: red;
`;

const Image2 = styled.img`
  width: 150px;
  height: 100px;
  background-color: lavender;
  object-fit: cover;
`;

const Box = styled.div`
  width: 310px;
  height: 240px;
  //background-color: red;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const ReasonsHolder = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Text2 = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  width: 300px;
  font-size: 20px;
  color: black;
`;

const Button = styled.div`
  width: 320px;
  height: 50px;
  background-color: black;
  font-family: poppins;
  font-weight: bold;
  font-size: 15px;
  margin-top: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: red;
  @media screen and (max-width: 768px) {
    width: 220px;
  }
`;

const Image = styled.img`
  text-align: center;
  /* height: 650px; */
  position: absolute;
  /* margin: 0 10px; */
  /* z-index: -1; */
  object-fit: cover;
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 768px) {
    object-fit: cover;
    position: unset;
    height: 500px;
    width: none;
  }
`;

const Container = styled.div`
  //min-width: 100vw;

  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  //flex-direction: column;
  flex-wrap: wrap;
  /* @media screen and (max-width: 768px) {
    width: 320px;
  } */
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  //align-items: center;
  flex-wrap: wrap;
  //background-color: red;
`;

const TextHolder = styled.div`
  min-width: 320px;
  //width: 550px;
  min-height: 350px;
  height: 400px;
  //background-color: red;
  margin-left: 10px;
  margin-right: 10px;
  //margin-bottom: 20px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  color: white;
  /* background-color: red; */
  z-index: 1;

  font-family: poppins;
  flex-direction: column;
  span {
    margin: 20px 0;
    font-size: 50px;
    width: 300px;
    color: black;
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    width: 320px;
  }
`;
