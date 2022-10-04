import { useContext, useState } from "react";
import { usersContext } from "../contexts/Users";
import { useNavigate } from "react-router-dom";

const Profil = () => {
  const [hover, setHover] = useState("user");
  const { user } = useContext(usersContext);
  const navigate = useNavigate();

  if (user === null) {
    navigate("/");
  }

  const handleMouseEnter = (hover) => {
    setHover(hover);
  };
  return (
    <main>
      <section className="card">
        {user.map((oneUser) => {
          return (
            <>
              <article className="cardContainer">
                <img src={oneUser.picture.medium} alt="" />
                {hover === "user" && (
                  <>
                    <p>Hi, my name is</p>
                    <p>
                      {oneUser.name.title}
                      {`  `}
                      {oneUser.name.first}
                      {`  `}
                      {oneUser.name.last}
                    </p>
                  </>
                )}

                {hover === "envelope" && (
                  <>
                    <p>My email adress is</p>
                    <p>{oneUser.email}</p>
                  </>
                )}
                {hover === "calendar" && (
                  <>
                    <p>My birthday is</p>
                    <p>{oneUser.dob.date}</p>
                  </>
                )}
                {hover === "location" && (
                  <>
                    <p>My adress is</p>
                    <p>
                      {oneUser.location.street.name}{" "}
                      {oneUser.location.street.number}
                    </p>
                  </>
                )}
                {hover === "phone" && (
                  <>
                    <p>My phone number is</p>
                    <p>{oneUser.cell}</p>
                  </>
                )}
                {hover === "lock" && (
                  <>
                    <p>My password is</p>
                    <p>{oneUser.login.password}</p>
                  </>
                )}
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
                  <span onMouseEnter={() => handleMouseEnter("lock")}>
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
