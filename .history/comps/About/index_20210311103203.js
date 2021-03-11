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
    color: white;
    text-shadow: 2px 4px 6px rgba(0, 0, 0, 0.9);
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
    font-size: 1.5rem;
    padding-left: 3rem;
    ">
    ${pMain}
    </p>
    </div>
    `
}