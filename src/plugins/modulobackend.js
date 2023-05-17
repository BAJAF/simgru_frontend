import axios from "axios";

const sendTokenToServer = (token, router, jwtStore) => {
    axios
        .get("http://localhost:8000/jwt/" + token + "/")
        .then((res) => {
            jwtStore.set(res.data.jwt);
            console.log(res.data.jwt);
            router.push({
                name: "Cursos",
            });
        })
        .catch((error) => {
            console.error(error);
        });
};

const getUserCourses = (cursos, jwtStore) => {
    let jwt = jwtStore.jwt;

    const axInstance = axios.create({
        headers: {
            "Access-Control-Allow-Origin": "*",
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
