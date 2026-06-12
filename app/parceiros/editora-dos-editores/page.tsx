import Image from 'next/image'
import styles from '../parceiro.module.css'

export default function EditoraDosEditores() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.logoWrap}>
          <Image src="/parceiros/editora-dos-editores.jpeg" alt="Editora dos Editores" width={200} height={100} style={{ objectFit: 'contain' }} />
        </div>
        <p className={styles.tipo}>Patrocinador</p>
        <h1 className={styles.nome}>Editora dos Editores</h1>
        <p className={styles.descricao}>
          A Editora dos Editores é uma editora independente comprometida com a produção e difusão de conteúdo de qualidade. Acredita no poder transformador do conhecimento e apoia projetos que estimulam o pensamento crítico e a inovação entre jovens talentos.
        </p>
      </div>
    </main>
  )
}