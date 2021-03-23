import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {

  paraOne: `Olá!! Me chamo Jonas Freitas. Sou um desenvolvedor web/desktop fullstack que é
  apaixonado por várias tecnologias web. Eu gosto de experimentar diferentes
  tecnologias. Tenho uma experiência de mais de 10 anos de desenvolvimento, aonde tive contato com várias linguagens e frameworks.`,
  paraTwo: `Meu foco atual está sobre javascript com NodeJs, Vuejs e ReactJs.`,
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Jonas', 'Freitas', 'Rio das Ostras', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby', 'VueJs']}
        />
        <h1 className="titleSeparate">Sobre mim</h1>
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="De Petrópolis - RJ"
            textH3="Em Rio das Ostras -RJ"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee.png"
            alt="coffee image"
            textH4="Café"
            textH3="Café + Eu = Acordado"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="meeting image"
            textH4="Socialmente desajeitado"
            textH3="Às vezes"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="motorcycle.png"
            alt="motorcycle image"
            textH4="Amo pedalar"
            textH3="Pedalar = menos sedentário"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Autodidata"
            textH3="Graças aos Livros e Documentações"
            height={60}
            width={60}
          />
        </Col>
        {/* <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Pursued B.Tech in"
            textH3="Computer Science"
            height={60}
            width={60}
          />
        </Col> */}
      </Row>
    </>
  );
};
export default AboutMe;
