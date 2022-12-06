import React from 'react'
import styles from './SobreMim.module.css'
import PostModelo from 'componentes/PostModelo'
import fotoCapa from "assets/sobre_mim__foto_capa.jpg"
import fotoSobreMim from "assets/sobre_mim_foto.png"

export default function SobreMim() {
  return (

    <PostModelo 
      fotoCapa={fotoCapa} 
      titulo="Sobre mim">
      
      <h3 className={styles.subtitulo}>
        Olá, eu sou o Lucas!
      </h3>

      <img src={fotoSobreMim} alt="Foto do Lucas Rodrigues" className={styles.fotoSobreMim}/>

      <p className={styles.paragrafo}>Olá, tudo bem? Me chamo Lucas e sou estudante da Alura.</p>
      <p className={styles.paragrafo}>Minha história na programação começou no início de 2022 e logo depois ingressei no curso de Análise e Desenvolvimento de Sistemas na FIAP, e desde então, tenho me dedicado diariamente em busca dos meus objetivos.</p>
      <p className={styles.paragrafo}>Alguns meses depois, comecei a focar na área de desenvolvimento Front-end, que desde o início gostei muito. Possuo conhecimento em HTML5, CSS3, JavaScript, Bootstrap e tenho focado meus estudos em React junto com a Alura.</p>
      <p className={styles.paragrafo}>Uma das maneiras que mais gosto de estudar é praticando, isso me ajuda a fixar o que aprendi e ver a onde estão minhas dúvidas. Durante meu período de estudos desenvolvi diversos projetos pessoais, sendo um deles o meu portfólio, onde conto um pouco mais sobre mim e apresento meu trabalho.</p>
      <p className={styles.paragrafo}>O meu foco no momento é ingressar no mercado de trabalho, através de um estágio, e poder aprender ainda mais e crescer pessoal e profissionalmente, além de contribuir e ajudar a empresa a criar soluções que impactam a vida de milhares de pessoas.</p>
      <p className={styles.paragrafo}>Sei que a caminhada não será fácil, porém com muito foco e dedicação, aos poucos vou alcançando os meus objetivos.</p>

    </PostModelo>

  )
}
