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
      //jwtStore.set(res.data.jwt);
      console.log(jwt);
      router.push({
        name: "Cursos",
      });
    })
    .catch((error) => {
      console.error(error);
    });
>>>>>>> d5ae2a8bd92ba92b1835359783f401b9b6b1eb83
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

const getCourseInformation = (courseId, courseRef) => {
    const jwt = localStorage.getItem("token");

    axios.get("http://localhost:8000/courses/", {
        params: {
            token: jwt,
            courseId: courseId
        }
    }).then((res) => {
        courseRef.value = res.data;
        console.log("Course Information: ", res.data);
    }).catch((err) => {
        console.error("Error in getCourseInformation: ", err.message);
    })
}

export { sendTokenToServer, getUserCourses, getCourseInformation };
