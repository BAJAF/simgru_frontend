import axios from "axios";

const sendTokenToServer = (token, router, jwtStore) => {
<<<<<<< HEAD
    axios
        .get("http://localhost:8000/jwt/" + token + "/")
        .then((res) => {
            jwtStore.set(res.data.jwt);
            console.log(res.data.jwt);
            router.push({
                name: "Dashboard",
            });
        })
        .catch((error) => {
            console.error(error);
        });
=======
  axios
    .get("http://localhost:8000/jwt/" + token + "/")
    .then((res) => {
      const jwt = res.data.jwt;
      localStorage.setItem("token", jwt);
      //jwtStore.set(jwt);
      console.log(jwt);
      router.push({
        name: "Cursos",
      });
    })
    .catch((error) => {
      console.error(error);
    });
>>>>>>> e38e969b1e9e043e093bf63bb130bec7a3a92110
};

const getUserCourses = (cursos, jwtStore) => {
  const jwt = localStorage.getItem("token");
  //let jwt = jwtStore.jwt;

  const axInstance = axios.create({
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${jwt}`,
    },
  });

  axInstance
    .get("http://localhost:8000/courses/" + jwt)
    .then((res) => {
      console.log(res);
      cursos.value = res.data.courses;
    })
    .catch((error) => {
      console.error(error);
    });
};

export { sendTokenToServer, getUserCourses };
