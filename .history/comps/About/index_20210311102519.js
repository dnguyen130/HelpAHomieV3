function AboutUI(tMain="GOTTEM", bottomright="#E43131", topleft="#FFFFFF", pMain="Paragraphs are cool")
{
    return `
    <div class="about"
    style= 
    "
    background: linear-gradient(315deg, ${bottomright}, ${topleft});
    height: 100vh;
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    "
    > 
    <h2 style= 
    "
    display: flex;
    font-family: Arial;
    font-size: 5rem;
    margin: 0;
    "
    >
    ${tMain}
    </h2>
    <p style= 
    "
    font-family: Arial;
    font-size: 2rem;
    width: 100%;
    ">
    ${pMain}
    </p>
    </div>
    `
}