import { useContext } from "react";
import { usersContext } from "../contexts/Users";

const Profil = () => {
  const { user } = useContext(usersContext);
  const handleMouseEnter = (e) => {
    // console.log(e.target.id);
  };
  return (
    <main>
      <section className="card">
        {user.map((oneUser) => {
          return (
            <>
              <article className="cardContainer">
                <img src={oneUser.picture.medium} alt="" />
                <p>Hi, my name is</p>
                <p>
                  {oneUser.name.title}
                  {`  `}
                  {oneUser.name.first}
                  {`  `}
                  {oneUser.name.last}
                </p>
              </article>
              <article className="icon">
                <div className="innerIcon">
                  <span onMouseEnter={() => handleMouseEnter("user")}>
                    <i class="fa-solid fa-user"></i>
                  </span>
                  <span onMouseEnter={() => handleMouseEnter("envelope")}>
                    <i class="fa-solid fa-envelope"></i>
                  </span>
                  <span onMouseEnter={() => handleMouseEnter("calendar")}>
                    <i class="fa-solid fa-calendar-days"></i>
                  </span>
                  <span onMouseEnter={() => handleMouseEnter("location")}>
                    <i class="fa-sharp fa-solid fa-map-location-dot"></i>
                  </span>
                  <span onMouseEnter={() => handleMouseEnter("phone")}>
                    <i class="fa-solid fa-phone"></i>
                  </span>
                  <span id="testID" onMouseEnter={handleMouseEnter}>
                    <i class="fa-solid fa-lock"></i>
                  </span>
                </div>
              </article>
            </>
          );
        })}
      </section>
    </main>
  );
};

export default Profil;
