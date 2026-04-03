'use server'

export async function inscricaoAction(
  _prevState: { ok: boolean; message: string } | null,
  formData: FormData,
) {
  const nome = (formData.get('nome') as string)?.trim()
  const email = (formData.get('email') as string)?.trim()
  const whatsapp = (formData.get('whatsapp') as string)?.trim()
  const interesse = (formData.get('interesse') as string)?.trim()
  const curso = (formData.get('curso') as string)?.trim()
  const universidade = (formData.get('universidade') as string)?.trim()
  const periodo = (formData.get('periodo') as string)?.trim()
  const florianopolis = formData.get('florianopolis') === 'on'
  const motivacao = (formData.get('motivacao') as string)?.trim()
  const analise = (formData.get('analise') as string)?.trim()
  const transporte = (formData.get('transporte') as string)?.trim()
  const bolsa = formData.get('bolsa') === 'on'
  const motivoBolsa = (formData.get('motivoBolsa') as string)?.trim()
  const autorizacao = formData.get('autorizacao') === 'on'

  if (!nome || !email || !interesse || !curso || !universidade || !periodo || !motivacao || !analise || !transporte) {
    return { ok: false, message: 'Preencha todos os campos obrigatórios.' }
  }

  if (!florianopolis) {
    return { ok: false, message: 'É necessário estar em Florianópolis durante o evento para participar.' }
  }

  try {
    const res = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify({
        parent: { database_id: process.env.NOTION_DATABASE_ID },
        properties: {
          Nome: { title: [{ text: { content: nome } }] },
          Email: { email },
          WhatsApp: { phone_number: whatsapp || null },
          Curso: { rich_text: [{ text: { content: curso } }] },
          Universidade: { rich_text: [{ text: { content: universidade } }] },
          Período: { select: { name: periodo } },
          Interesse: { select: { name: interesse } },
          'Por que participar': { rich_text: [{ text: { content: motivacao } }] },
          'Análise de problema': { rich_text: [{ text: { content: analise } }] },
          Transporte: { select: { name: transporte === 'sim' ? 'Sim' : 'Não' } },
          'Solicita bolsa': { checkbox: bolsa },
          'Motivo da bolsa': { rich_text: [{ text: { content: motivoBolsa || '' } }] },
          'Autoriza compartilhamento': { checkbox: autorizacao },
          Status: { select: { name: 'Pendente' } },
        },
      }),
    })

    if (!res.ok) {
      const body = await res.json().catch(() => ({}))
      console.error('[Notion]', res.status, JSON.stringify(body))
      return { ok: false, message: 'Erro ao enviar inscrição. Tente novamente.' }
    }

    return { ok: true, message: '' }
  } catch (err) {
    console.error('[Notion] fetch error', err)
    return { ok: false, message: 'Erro de conexão. Tente novamente.' }
  }
}
