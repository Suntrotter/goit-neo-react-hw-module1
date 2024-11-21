import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
      <div className={css.profile}>
        <img className={css.avatar} src={image} alt={name} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.bottom}>
        <li className={css.item}>
          <span className={css.title}>Followers</span>
          <span className={css.stat}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.title}>Views</span>
          <span className={css.stat}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.title}>Likes</span>
          <span className={css.stat}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;