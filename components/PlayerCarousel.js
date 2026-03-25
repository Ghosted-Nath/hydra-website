"use client";

import { useMemo, useState } from "react";
import CutoutImage from "./CutoutImage";
import { players } from "./site-data";

const sports = [
  {
    key: "soccer",
    label: "Soccer",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2 6.5 5l-1 6L9 16l6 1 4.5-5-1-6L12 2Zm-3.4 9.1 3.4-2.4 3.4 2.4-1.3 4-4.2.7-2.6-4.7Zm-1-4.4L11 4.8 8.3 9H6.5l1.1-2.3Zm9.9 0L18.6 9h-1.8l-2.7-4.2 3.4 1.9ZM8.2 18.1l1.8-1.1 2 .3v2.9l-3.8-2.1Zm7.6 0L12 20.2v-2.9l2-.3 1.8 1.1Z" />
      </svg>
    )
  },
  {
    key: "sumo",
    label: "Sumo",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 4h6v3h2a3 3 0 0 1 3 3v2h-2v5h1v2H5v-2h1v-5H4v-2a3 3 0 0 1 3-3h2V4Zm0 5H7a1 1 0 0 0-1 1h12a1 1 0 0 0-1-1h-2v2H9V9Zm-1 4v4h8v-4H8Z" />
      </svg>
    )
  },
  {
    key: "race",
    label: "Race",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 5h14v3H5V5Zm1 4h5v5H6V9Zm7 0h5v5h-5V9Zm-7 6h5v4H6v-4Zm7 0h5v4h-5v-4Z" />
      </svg>
    )
  },
  {
    key: "drone",
    label: "Drone",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M10.5 10.5 7 7m10 0-3.5 3.5M7 17l3.5-3.5M17 17l-3.5-3.5M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM7 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm10 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM7 15a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm10 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" />
      </svg>
    )
  }
];

const placeholderFields = [
  "Matches",
  "Wins",
  "Losses",
  "Titles",
  "Best Rank",
  "Notes"
];

export default function PlayerCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSport, setActiveSport] = useState(null);

  const activePlayer = players[activeIndex];

  const cyclePlayer = (direction) => {
    setActiveIndex((value) => (value + direction + players.length) % players.length);
  };

  const playerDetails = useMemo(
    () => [
      ["Name", activePlayer.name],
      ["Age", activePlayer.age],
      ["Role", activePlayer.role],
      ["Specialization", activePlayer.speciality],
      ["Experience", activePlayer.years]
    ],
    [activePlayer]
  );

  return (
    <section className="team-showcase">
      <article className="player-card-wrap">
        <button className="side-arrow left" onClick={() => cyclePlayer(-1)} aria-label="Previous player">
          &#10094;
        </button>

        <button className="side-arrow right" onClick={() => cyclePlayer(1)} aria-label="Next player">
          &#10095;
        </button>

        <div className="player-card-glow" />
        <div className="player-card-frame">
          <div key={`${activeIndex}-${activeSport || "closed"}`} className="player-card-motion">
            <div className="player-card-top">
              <div className="player-card-visual">
                <img src="/assets/player-card.jpeg" alt="" className="player-card-base" />
                <CutoutImage src={activePlayer.asset} alt={activePlayer.name} className="player-cutout" />
              </div>

              <div className="player-card-meta">
                <div className="micro-label">Player Spotlight</div>
                <div className="player-heading-row">
                  <h3>{activePlayer.name}</h3>
                  <div className="player-age-chip">Age {activePlayer.age}</div>
                </div>

                <div className="player-detail-panel">
                  <div className="player-detail-strip">
                    {playerDetails.map(([label, value]) => (
                      <span key={label}>
                        <small>{label}</small>
                        <strong>{value}</strong>
                      </span>
                    ))}
                  </div>

                  <div className="player-sport-tabs">
                    {sports.map((sport) => (
                      <button
                        key={sport.key}
                        type="button"
                        className={`player-sport-tab ${activeSport === sport.key ? "active" : ""}`}
                        onClick={() => setActiveSport((value) => (value === sport.key ? null : sport.key))}
                        aria-label={`Show ${sport.label} placeholders`}
                      >
                        <span className="player-sport-icon">{sport.icon}</span>
                        <small>{sport.label}</small>
                      </button>
                    ))}
                  </div>

                  {activeSport ? (
                    <div className="player-stats-panel">
                      <div className="player-stats-panel-head">
                        <span>{sports.find((sport) => sport.key === activeSport)?.label}</span>
                        <strong>Placeholder Stats</strong>
                      </div>
                      <div className="player-stats-grid">
                        {placeholderFields.map((field) => (
                          <div key={`${activeSport}-${field}`} className="player-stat-item">
                            <span>{field}</span>
                            <strong>-</strong>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
