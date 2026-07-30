export default function Home() {
  return (
    <main className="presentation-shell">
      <iframe
        className="presentation-frame"
        src="/ar-worklist-presentation.html"
        title="The AR Working List · Process Walkthrough"
      />
      <noscript>
        <p>
          This presentation requires JavaScript.{" "}
          <a href="/ar-worklist-presentation.html">Open the presentation</a>.
        </p>
      </noscript>
    </main>
  );
}
