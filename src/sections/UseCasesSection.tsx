const useCases = [
  ["For builders", "Open editor, terminal, localhost, docs, and AI assistant from one tile."],
  ["For creators", "Launch design tools, assets, browser preview, and export shortcuts."],
  ["For focus", "Start your writing or study setup without touching Cmd+Tab again."],
];

export function UseCasesSection() {
  return (
    <section className="section use-cases">
      <div className="big-statement">
        <p className="eyebrow">Why Fiple</p>
        <h2>Not a remote desktop. Not another dock. A second command surface for your Mac.</h2>
      </div>
      <div className="use-case-list">
        {useCases.map(([title, body]) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
