function AboutUI(tMain="GOTTEM", bottomright="#E43131", topleft="#FFFFFF", pMain="Paragraphs are cool")
{
    return `
    <div class="about"
    style= 
    "
    background: linear-gradient(315deg, ${bottomright}, ${topleft});
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
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
    padding-left: 2rem;
    ">
    ${pMain}
    </p>
    </div>
    `
}