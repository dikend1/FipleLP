import { commands } from "../data/commands";

export function ProductSection() {
  return (
    <section className="section product" id="product">
      <div className="section-heading">
        <p className="eyebrow">What it launches</p>
        <h2>Your daily Mac actions, arranged like stickers on your iPhone.</h2>
      </div>
      <div className="product-grid">
        {commands.map(({ title, description, Icon }) => (
          <article className="product-card" key={title}>
            <Icon size={28} strokeWidth={1.7} />
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
