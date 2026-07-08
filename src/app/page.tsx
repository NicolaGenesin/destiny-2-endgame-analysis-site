import manifest from "../../resource-manifest.json";

const sourceUrl = "https://docs.google.com/spreadsheets/d/1JM-0SlxVDAi-C6rGVlLxa-J1WGewEeL8Qvq4htWZHhY";
const pageTitle = "Destiny 2: Endgame Analysis";
const sourceFidelity = "translate the source 1:1 into a more user-friendly website";

const quickStats = [
  { label: "Best score", value: String(manifest.source_document.best_score) },
  { label: "Latest score", value: String(manifest.source_document.latest_score) },
  { label: "Visible rows", value: String(manifest.source_document.visible_rows) },
  { label: "Last seen", value: manifest.source_document.last_seen },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-6 py-10 md:px-10">
      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-8 shadow-2xl shadow-black/20">
        <p className="text-sm uppercase tracking-[0.25em] text-sky-300">Standalone resource-site MVP</p>
        <h1 className="mt-3 text-4xl font-semibold text-white md:text-6xl">{pageTitle}</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          This Next.js + TypeScript + Tailwind scaffold is the starting point for turning the source document into a standalone website.
          The source remains canonical; the site should preserve it 1:1 while improving navigation, readability, and context.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {quickStats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <div className="text-sm text-slate-400">{stat.label}</div>
              <div className="mt-2 text-2xl font-semibold text-white">{stat.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <article className="rounded-3xl border border-slate-800 bg-slate-950/70 p-8">
          <h2 className="text-2xl font-semibold text-white">Source of truth</h2>
          <p className="mt-4 text-slate-300">
            The original document should be translated into website components without changing its meaning.
            Research and editorial notes belong around the source, not instead of it.
          </p>
          <dl className="mt-6 grid gap-4 text-sm text-slate-300 md:grid-cols-2">
            <div>
              <dt className="text-slate-500">Canonical URL</dt>
              <dd className="mt-1 break-all text-sky-300">
                <a href={sourceUrl} target="_blank" rel="noreferrer">{manifest.source_document.canonical_source_url}</a>
              </dd>
            </div>
            <div>
              <dt className="text-slate-500">Source type</dt>
              <dd className="mt-1">{manifest.source_document.doc_type}</dd>
            </div>
            <div>
              <dt className="text-slate-500">Document key</dt>
              <dd className="mt-1 break-all">{manifest.source_document.doc_key}</dd>
            </div>
            <div>
              <dt className="text-slate-500">Fidelity rule</dt>
              <dd className="mt-1">{sourceFidelity}</dd>
            </div>
          </dl>
        </article>

        <aside className="rounded-3xl border border-slate-800 bg-slate-950/70 p-8">
          <h2 className="text-2xl font-semibold text-white">MVP backlog</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-slate-300">
            {manifest.website_backlog.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </aside>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-8">
          <h2 className="text-2xl font-semibold text-white">Discovery context</h2>
          <div className="mt-5 space-y-5 text-slate-300">
            <div>
              <p className="text-sm uppercase tracking-wide text-slate-500">Authors seen</p>
              <ul className="mt-2 space-y-2">
                {manifest.discovery_context.authors_seen.map((item) => (
                  <li key={item} className="rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wide text-slate-500">Titles seen</p>
              <ul className="mt-2 space-y-2">
                {manifest.discovery_context.titles_seen.map((item) => (
                  <li key={item} className="rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-8">
          <h2 className="text-2xl font-semibold text-white">Project data layers</h2>
          <ul className="mt-5 space-y-3 text-slate-300">
            <li><code className="rounded bg-slate-900 px-2 py-1 text-sky-300">resource-manifest.json</code> — publishing intent and source metadata</li>
            <li><code className="rounded bg-slate-900 px-2 py-1 text-sky-300">data/source-document.json</code> — extracted source structure</li>
            <li><code className="rounded bg-slate-900 px-2 py-1 text-sky-300">data/research-context.json</code> — provenance and deep research</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
