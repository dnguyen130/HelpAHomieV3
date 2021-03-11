function AboutUI(tMain="GOTTEM", bottomright="#E43131", topleft="#FFFFFF", h2align="center", palign="center", pMain="Paragraphs are cool")
{
    return `
    <div class="about"
    style= 
    "
    background: linear-gradient(315deg, ${bottomright}, ${topleft});
    "
    > 
    <h2 style= 
    "
    display: flex;
    font-family: Arial;
    text-align: ${h2align};
    font-size: 5rem;
    "
    >
    ${tMain}
    </h2>
    <p style= 
    "
    display: flex;
    margin: 15px;
    text-align: ${palign}
    font-family: Arial;
    font-size: 2rem;
    ">
    ${pMain}
    </p>
    </div>
    `
}