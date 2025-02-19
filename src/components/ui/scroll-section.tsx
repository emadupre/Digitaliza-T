
const ScrollSection = () => {
  return (
    <>
      <header>
        <h1 className="fluid">you can<br />scroll.</h1>
      </header>
      <main>
        <section className="content fluid">
          <h2>
            <span aria-hidden="true">you can&nbsp;</span>
            <span className="sr-only">you can ship things.</span>
          </h2>
          <ul aria-hidden="true" style={{ '--count': '22' } as React.CSSProperties}>
            {[
              'design.', 'prototype.', 'solve.', 'build.', 'develop.',
              'debug.', 'learn.', 'cook.', 'ship.', 'prompt.',
              'collaborate.', 'create.', 'inspire.', 'follow.', 'innovate.',
              'test.', 'optimize.', 'teach.', 'visualize.', 'transform.',
              'scale.', 'do it.'
            ].map((text, i) => (
              <li key={i} style={{ '--i': i } as React.CSSProperties}>
                {text}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export default ScrollSection;
