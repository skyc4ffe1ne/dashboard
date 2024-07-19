export async function getData() {
  const link = "http://localhost:8000/bookings";
  try {
    const res = await fetch(link);
    if (!res.ok) {
      throw new Error(`${res.status} , ${res.statusText}`);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
