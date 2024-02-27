export default function Page() {
  return (
    <form
      name="interesse"
      method="POST"
      data-netlify="true"
      encType="application/x-www-form-urlencoded"
    >
      <input type="hidden" name="form-name" value="interesse" />
      <input name="nome" type="text" required placeholder="seu nome" />
      <input placeholder="e-mail" name="email" required type="email" />
      <input
        required
        placeholder="celular"
        name="celular"
        type="tel"
        maxLength={15}
      />
      <input type="hidden" name="curso interessado" value="pageTitle" />
      <button type="submit">Enviar</button>
    </form>
  );
}
