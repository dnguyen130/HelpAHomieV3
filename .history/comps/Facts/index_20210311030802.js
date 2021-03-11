function FactsUI(h3='Sleep Facts', 
p1='12.3% of adults who get insufficient sleep report having poor mental health', 
p2='1 in 2 adults have trouble going to sleep or staying asleep.', 
p3='1 in 5 adults do not find their sleep refreshing.', 
p4='1 in 3 adults have difficulty staying awake during waking hours.', 
img1='images/facts/facts/12point3.svg 123${url="123.svg"}', 
img2='${url="1 out of 2.svg"}', 
img3='${url="1 out of 5.svg"}', 
img4='${url="1 out of 3.svg"}'){
    return `
    <div class="fact1">
        <h3 style="
        font-size: 2rem;
        ">${h3}</h3>

        <p class="paras">${p1}</p>
        <img src='${img1}' class="factimg"></img>

        <p class="paras">${p2}</p>
        <img src='${img2}' class="factimg"></img>

        <p class="paras">${p3}</p>
        <img src='${img3}' class="factimg3"></img>

        <p class="paras">${p4}</p>
        <img src='${img4}' class="factimg4"></img>

    </div>
    `
}