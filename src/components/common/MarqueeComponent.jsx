const MarqueeComponent = ({ target, title }) => {
  return (
    <section className="marquee">
      <section className="content" ref={(el) => target && (target.current = el)}>
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <h5 key={i} aria-label="hidden">
              {title}
            </h5>
          ))}
      </section>
      <section className="content" ref={(el) => target && (target.current = el)}>
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <h5 key={i} aria-label="hidden">
              {title}
            </h5>
          ))}
      </section>
    </section>
  );
};

export default MarqueeComponent;
