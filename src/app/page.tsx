import React from 'react';
import Header from "@/component/header/header";
import Carrousel from "@/component/carrousel/carrousel";
import style from "@/style/page.module.css"
import Button from "@/component/button/button";
import Footer from "@/component/footer/footer";
import Card from "@/component/card/card";
import ContentAdocao from '@/component/card/content/contentAdoca';

import { NunitoFont } from "@/font/font";

export default function Home() {

  const info = [
    {
      value: '+100',
      description: 'Animais adotados'
    },
    {
      value: '42',
      description: 'Animais resgatados'
    },
    {
      value: '23',
      description: 'Campanhas de arrecadação'
    },
  ]

  const cards = [
    {
      nane: 'Jujuba',
      age: '2 anos',
      type: 'Cachorro',
      vaccine: 'Vacinado',
      image: './dog/jujuba_1.png',
    },
    {
      nane: 'Jujuba',
      age: '2 anos',
      type: 'Cachorro',
      vaccine: 'Vacinado',
      image: './dog/petisco_1.png',
    },
    {
      nane: 'Jujuba',
      age: '2 anos',
      type: 'Cachorro',
      vaccine: 'Vacinado',
      image: './dog/jujuba_1.png',
    },
    {
      nane: 'Jujuba',
      age: '2 anos',
      type: 'Cachorro',
      vaccine: 'Vacinado',
      image: './dog/petisco_1.png',
    },
    {
      nane: 'Jujuba',
      age: '2 anos',
      type: 'Cachorro',
      vaccine: 'Vacinado',
      image: './dog/jujuba_1.png',
    }
  ]


  return (
    <main>

      <Header />

      <section className={`${style.section_carrousel} ${style.breakpoint}`}>
        <Carrousel />
      </section>

      <section className={`${style.section_adocao} ${style.breakpoint}`} id='section_adocao'>
        <div className={`${style.content_adocao} ${style.breakpoint}`}>
          <h2 className={`${style.title} ${style.title_neutral}`}>Adote um bichinho</h2>
          <div className={style.cards_adocao}>
            {cards.map((item, index) => (
              <Card key={index}>
                <div>
                  <div className={style.card_image_adocao_content}>
                    <img src={item.image} alt={item.image} className={style.card_image_adocao}/>
                  </div>
                  <div className={`${style.content_card} ${NunitoFont.className}`}>
                    <ContentAdocao name={item.nane} age={item.age} vaccine={item.vaccine} type={item.type}/>
                    <Button label="Entrar em contato" variant="secondary" type="a" size="small"/>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className={style.section_ajuda} id='section_ajuda'>
        <div className={`${style.content_ajuda} ${style.breakpoint}`}>
          <h2 className={`${style.title} ${style.title_primary}`}>Realize uma ajuda</h2>
          <p className={`${style.description} ${NunitoFont.className}`}>
            As contribuições podem ser feitas de várias formas relacionadas
            a campanhas específicas nos links abaixo, ou através de uma doação
            para apoiar a causa de forma geral. Seja qual for a sua escolha,
            seu apoio fará toda a diferença.
          </p>
          <div className={style.cnpj}> 
            <p className={style.subtitle}>CNPJ: 42.880.314/0001-76</p>
            <Button label="Copiar chave PIX" variant="primary" type="button" size="medium"/>
          </div>
        </div>
      </section>

      <section className={`${style.section_sobre} ${style.breakpoint}`} id='section_sobre'>
        <div className={`${style.content_sobre} ${style.breakpoint}`}>
          <h2 className={`${style.title} ${style.title_neutral}`}>Sobre nosso projeto</h2>
          <p className={`${style.description} ${NunitoFont.className}`}>
            As <b>Protetoras em Ação</b> dedica-se há mais de 5 anos à proteção,
            assistência e adoção de animais na região de Itapema, contribuindo para
            melhorar a vida dos nossos queridos bichinhos.
          </p>
          <div className={style.date_about}>
            {info.map((item, index) => (
              <div className={style.item_about} key={index}>
                <h3 className={style.title_about}>{item.value}</h3>
                <p className={style.description_about}>{item.description}</p>
              </div>
            ))}
          </div>
          <div className={style.gallery}>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
