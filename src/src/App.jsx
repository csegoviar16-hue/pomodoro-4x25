import React, { useEffect, useMemo, useRef, useState } from "react";
}`}
>
{notificationsOn ? "Notificaciones activas" : "Activar notificaciones"}
</button>
</div>
</div>
</div>
</div>


<aside className="bg-neutral-900 rounded-2xl p-6 shadow-xl border border-neutral-800">
<div className="mb-3">
<h2 className="text-lg font-semibold mb-1">Ciclo actual</h2>
<p className="text-sm text-neutral-400">Intervalo {intervalIndex} de 4</p>
<div className="mt-2 flex gap-1">
{[1, 2, 3, 4].map((i) => (
<div
key={i}
className={`h-2 flex-1 rounded-full ${
i < intervalIndex ? "bg-neutral-600" : i === intervalIndex ? "bg-neutral-300" : "bg-neutral-800"
}`}
/>
))}
</div>
</div>


<div className="text-sm text-neutral-300 space-y-2">
<div>
<span className="text-neutral-400">Siguiente:</span>{" "}
{phase === "work"
? intervalIndex < 4
? "Descanso corto (5 min)"
: "Descanso largo (30 min)"
: phase === "short"
? `Trabajo ${intervalIndex + 1}/4 (25 min)`
: "Reiniciar ciclo (Trabajo 1/4)"}
</div>
<div>
<span className="text-neutral-400">Ciclos completados:</span> {cyclesCompleted}
</div>
</div>


<div className="mt-4 flex flex-col gap-2">
<button onClick={restartCycle} className="px-4 py-2 rounded-2xl bg-neutral-100 text-neutral-900 font-semibold">
Reiniciar 4 intervalos
</button>
<p className="text-xs text-neutral-500">
Consejo: deja esta pestaña abierta. El título del navegador muestra el tiempo restante.
</p>
</div>
</aside>
</div>


<footer className="mt-6 text-xs text-neutral-500">
Hecho para empezar ya: 25/5/30 preconfigurados, auto‑avance y notificaciones en pantalla + navegador (opcionales).
</footer>
</div>
</div>
);
}
