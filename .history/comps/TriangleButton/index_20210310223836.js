function TriangleButtonUI(tri="images/Circle-Triangle.png" url=".door-container") {
    return `
    <div style="
            width: 3rem;
            height: 3rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 3rem;
            border-radius: 25rem;
            background-color: #FFFFFF;
        "
        onmouseover="this.style.boxShadow= '0px 0px 10px 5px rgba(251, 0, 181, 0.7)'"
        onmouseout="this.style.boxShadow='0px 0px 0px 0px rgba(251, 0, 181, 0.7)'"
        >
            <a href="${url}">
                <img 
                src="${tri}"
                />
            </a>
        </div>
    `
}