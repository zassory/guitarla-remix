export const getCurso = async() => {
    const answer = await fetch(`${process.env.API_URL}/curso?populate=imagen`);
    return await answer.json();
}