const loop = f => f()||requestAnimationFrame(()=>loop(f));
