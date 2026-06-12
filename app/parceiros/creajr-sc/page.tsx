import Image from 'next/image'
import styles from '../parceiro.module.css'

export default function CreaJRSC() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.logoWrap}>
          <Image src="/parceiros/creajr-sc.jpg" alt="CreaJR-SC" width={200} height={100} style={{ objectFit: 'contain' }} />
        </div>
        <p className={styles.tipo}>Realizador</p>
        <h1 className={styles.nome}>CreaJR-SC</h1>
        <p className={styles.descricao}>
          O CreaJR-SC é a câmara especializada jovem do CREA-SC, que representa estudantes e profissionais recém-formados das áreas de engenharia, agronomia e geociências em Santa Catarina. Comprometido com o desenvolvimento profissional da nova geração, o CreaJR-SC apoia iniciativas que aproximam o mundo acadêmico do mercado de trabalho.
        </p>
      </div>
    </main>
  )
}