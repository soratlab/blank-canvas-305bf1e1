export default function FontTest() {
  return (
    <div className="p-10 space-y-4">
      <h1 className="text-2xl font-bold mb-6">Teste de Fonte — Sora</h1>

      <p className="text-lg" style={{ fontWeight: 100 }}>
        Sora Thin — 100
      </p>

      <p className="text-lg" style={{ fontWeight: 200 }}>
        Sora ExtraLight — 200
      </p>

      <p className="text-lg" style={{ fontWeight: 300 }}>
        Sora Light — 300
      </p>

      <p className="text-lg" style={{ fontWeight: 400 }}>
        Sora Regular — 400
      </p>

      <p className="text-lg" style={{ fontWeight: 500 }}>
        Sora Medium — 500
      </p>

      <p className="text-lg" style={{ fontWeight: 600 }}>
        Sora SemiBold — 600
      </p>

      <p className="text-lg" style={{ fontWeight: 700 }}>
        Sora Bold — 700
      </p>

      <p className="text-lg" style={{ fontWeight: 800 }}>
        Sora ExtraBold — 800
      </p>
    </div>
  );
}
