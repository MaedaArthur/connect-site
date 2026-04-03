'use server'

export async function subscriberAction(_prevState: { ok: boolean; message: string } | null, formData: FormData) {
  const nome = (formData.get('nome') as string)?.trim()
  const email = (formData.get('email') as string)?.trim()
  const curso = (formData.get('curso') as string)?.trim()
  const universidade = (formData.get('universidade') as string)?.trim()

  if (!nome || !email) {
    return { ok: false, message: 'Nome e e-mail são obrigatórios.' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { ok: false, message: 'E-mail inválido.' }
  }

  try {
    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': process.env.BREVO_API_KEY!,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        attributes: {
          FIRSTNAME: nome,
          LASTNAME: `${curso ?? ''} · ${universidade ?? ''}`.replace(/^ · | · $/g, '').trim() || undefined,
        },
        listIds: [Number(process.env.BREVO_LIST_ID ?? 2)],
        updateEnabled: true,
      }),
    })

    if (!res.ok) {
      const body = await res.json().catch(() => ({}))
      if (body?.code === 'DUPLICATE_PARAMETER') {
        return { ok: true, message: 'Você já está na lista. A gente avisa quando abrir!' }
      }
      console.error('[Brevo]', res.status, JSON.stringify(body))
      return { ok: false, message: 'Erro ao cadastrar. Tente novamente.' }
    }

    return { ok: true, message: 'Cadastrado! Você será o primeiro a saber quando abrir.' }
  } catch (err) {
    console.error('[Brevo] fetch error', err)
    return { ok: false, message: 'Erro de conexão. Tente novamente.' }
  }
}
