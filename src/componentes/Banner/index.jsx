import React from 'react'
import styles from './Banner.module.css'
import imgCirculoColorido from 'assets/circulo_colorido.png'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>
          Olá, Mundo!
        </h1>
        <p className={styles.paragrafo}>
          Boas vindas ao Olá Mundo, eu sou o Lucas, estudante da Alura. Aqui você pode acompanhar e conhecer um pouco mais sobre o mundo da tecnologia.
        </p>
      </div>
      <div className={styles.imagens}>
        <img className={styles.circuloColorido} 
        src={imgCirculoColorido} aria-hidden={true} 
        />
        <img className={styles.minhaFoto} 
          src="https://github.com/rodrigues14.png" 
          alt="Minha do Lucas Rodrigues"
        />
      </div>
    </div>
  )
}
