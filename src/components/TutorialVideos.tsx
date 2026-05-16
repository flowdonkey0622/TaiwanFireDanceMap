import { tutorialPlaylists } from "../data/tutorialPlaylists";

function getPlaylistEmbedUrl(playlistId: string): string {
  const params = new URLSearchParams({
    list: playlistId,
    rel: "0",
    modestbranding: "1",
  });

  return `https://www.youtube.com/embed/videoseries?${params.toString()}`;
}

export function TutorialVideos() {
  return (
    <section className="tutorial-section" aria-labelledby="tutorial-title">
      <div className="tutorial-intro">
        <p className="eyebrow">Flow Tutorials</p>
        <h2 id="tutorial-title">教學影片</h2>
        <p>
          依道具分類整理 YouTube 教學播放清單。播放清單更新後，這裡會自動顯示最新影片。
        </p>
      </div>

      <div className="tutorial-grid">
        {tutorialPlaylists.map((playlist) => (
          <article
            className={`tutorial-card tutorial-card--${playlist.accent}`}
            key={playlist.id}
          >
            <div className="tutorial-card__copy">
              <p className="eyebrow">Playlist</p>
              <h3>{playlist.title}</h3>
              <p>{playlist.description}</p>
              <a
                href={`https://www.youtube.com/playlist?list=${playlist.playlistId}`}
                target="_blank"
                rel="noreferrer"
              >
                開啟播放清單
              </a>
            </div>

            {/* 使用 YouTube playlist embed，避免逐支維護影片 ID。 */}
            <div className="tutorial-video">
              <iframe
                src={getPlaylistEmbedUrl(playlist.playlistId)}
                title={`${playlist.title} YouTube 播放清單`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
