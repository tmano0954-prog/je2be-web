  let inputPath: string;
  if (mode === "j2b" || mode === "b2j" || mode === "p2j" || mode === "p2b" || mode === "j2x" || mode === "b2x" || mode === "j2p" || mode === "b2p") {
    console.log(`[converter] (${id}) extract...`);
    await extract(
      file,
      id,
      mode === "j2b" || mode === "b2j" || mode === "j2x" || mode === "b2x" ? "level.dat" : "GAMEDATA",
    );
    console.log(`[converter] (${id}) extract done`);
    inputPath = `/je2be/${id}/in`;
  } else {
