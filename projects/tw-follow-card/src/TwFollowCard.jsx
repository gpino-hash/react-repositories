import './TwFollowCard.css'
import PropTypes from 'prop-types';
import { useState } from 'react';

TwFollowCard.propTypes = {
  children: PropTypes.node,
  username: PropTypes.string,
  initialIsFollowing: PropTypes.bool
};

function TwFollowCard({ children, username = 'unknown', initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const imageSrc = `https://unavatar.io/${username}`;

  const buttonText = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing ? 'tw--follow-card--button is-following' : 'tw--follow-card--button';

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw--follow-card">
      <header className="tw--follow-card--header">
        <img src={imageSrc} alt={username} className="tw--follow-card--avatar" />
        <div className="tw--follow-card--info">
          <strong>{children}</strong>
          <span className="tw--follow-card--info-username">@{username}</span>
        </div>
      </header>

      <aside>
        <button
          className={buttonClassName}
          onClick={handleClick}
        >
          <span className="tw--follow-card--text">{buttonText}</span>
          <span className="tw--follow-card--stop">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}

export default TwFollowCard;
