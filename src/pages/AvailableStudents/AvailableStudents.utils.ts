import {getAllStudent} from "../../utils/paths";

export const getStudents = async() => {
    const res = await fetch(getAllStudent, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        credentials: "include",
    });
    const data = await res.json();
    console.log(data);
}