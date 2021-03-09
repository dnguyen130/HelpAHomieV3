function DecisionUI(){
    return `
    <div style ="
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100vh;
        width: 100vw;
        font-family: Arial;
    " 
    >
        <div style ="
            background-color: #FFFFFF;
            border-radius: 200px;
            min-height:100px;
            width:1400px;
            display:inline-flex;
            justify-content:center;
            align-items:center;
            background: linear-gradient(270deg, #005E37 0%, rgba(255, 255, 255, 0) 100%), rgba(57, 69, 74, 0.8);
            border: 10px solid #86FF9E;
            font-size: 3rem;
            color: #E7CFFF;
            text-shadow: 0px 0px 10px #FF00C7;
        ">
        Discussion
        </div>
        <div style ="
            background-color: #FFFFFF;
            border-radius: 200px;
            min-height: 75px;
            width: 1000px;
            display:inline-flex;
            justify-content:center;
            align-items:center;
            background: linear-gradient(270deg, #005E37 0%, rgba(255, 255, 255, 0) 100%), rgba(57, 69, 74, 0.8);
            border: 10px solid #86FF9E;
            color: #FFFFFF;
            font-size: 1.6rem;
        ">
        How has your eating schedule been?
        </div>
        <div style ="
            background-color: #FFFFFF;
            border-radius: 200px;
            min-height: 75px;
            width: 1000px;
            display:inline-flex;
            justify-content:center;
            align-items:center;
            background: linear-gradient(270deg, #005E37 0%, rgba(255, 255, 255, 0) 100%), rgba(57, 69, 74, 0.8);
            border: 10px solid #86FF9E;
            color: #FFFFFF;
            font-size: 1.6rem;
        ">
        Sleeping properly?
        </div>
        <div style ="
            background-color: #FFFFFF;
            border-radius: 200px;
            min-height: 75px;
            width: 1000px;;
            display:inline-flex;
            justify-content:center;
            align-items:center;
            background: linear-gradient(270deg, #005E37 0%, rgba(255, 255, 255, 0) 100%), rgba(57, 69, 74, 0.8);
            border: 10px solid #86FF9E;
            color: #FFFFFF;
            font-size: 1.6rem;
        ">
        Have you been out of the house at all?
        </div>
    </div>
    `
}

export const Decision = DecisionUI();