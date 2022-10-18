import {StudentReservationRelease} from "./dictionaries";

export const handleStudentReservationRelease = async (id: string) => {
    const res = await fetch(`${StudentReservationRelease}/${id}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        credentials: "include",
    });
    const data = await res.json();
    console.log(`Zwrócono rezerwację kursanta o ID: ${id} do puli dostępnych osób. ${data.message}.`);

    window.location.href = "/to-talk";
}
