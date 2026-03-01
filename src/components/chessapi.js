// chessApi.js
export async function getChessElo(username) {
  try {
    const res = await fetch(`https://api.chess.com/pub/player/${username}/stats`);
    if (!res.ok) throw new Error("Failed to fetch");
    const data = await res.json();

    return {
      blitz: data.chess_blitz?.last?.rating || "—",
      bullet: data.chess_bullet?.last?.rating || "—",
      rapid: data.chess_rapid?.last?.rating || "—",
    };
  } catch (err) {
    console.error("Chess API error:", err);
    return { blitz: "—", bullet: "—", rapid: "—" };
  }
}