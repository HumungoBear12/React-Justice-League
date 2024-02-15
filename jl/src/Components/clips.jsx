import React from 'react'

const clips = () => {
    const top = {
        marginTop:"1rem",
    }
    const bat = {
        width:"20rem",
        height:"90%",
        marginTop:"auto",
        marginBottom:"auto",
        marginRight:"1rem",

    }
    const bat1 = {
        width:"20rem",
        height:"90%",
        marginTop:"auto",
        marginBottom:"auto",
        marginLeft:"1rem",

    }
  return (
    <div className="container-clips">
        <h2 className='clip-2'>Clips From Justice League</h2>
        <div className="clips-container">
            <div className="clips-flex">
                    <div className="clips-div1">
                            <div>
                                <h3>Batman Sings the Blues</h3>
                                <hr />
                                <p>"Am I Blue?"—The song Batman sings in order to free Wonder Woman from her enchantment—was previously featured in Batman & Mr. Freeze: SubZero, where it is heard playing on the radio of Barbara Gordon's roommate</p>
                                <a href="https://youtu.be/w4XIAjNuHPg"><button>Click Here</button></a>
                            </div>
                            <img style={bat} src="https://i.redd.it/en2wzcwmmrgc1.jpeg" alt="" />
                    </div>
                    <div className="clips-div2">
                            <div>
                                <h3>Superman & Batman vs Darkseid</h3>
                                <hr />
                                <p>In the season finale of Justice League Unlimited, Darksied tries to take over the world while Batman and Superman fight and defend the world for one final time.</p>
                                <a href="https://youtu.be/4cG4BNJBXBU"><button>Click Here</button></a>
                            </div>
                            <img src="https://i.ytimg.com/vi/4cG4BNJBXBU/maxresdefault.jpg" alt="" />
                    </div>
                    <div className="clips-div1">
                    <img style={bat1} src="https://i.ytimg.com/vi/TlVauMtPgTs/maxresdefault.jpg" alt="" />
                            <div>
                                <h3>Batman Risks it All</h3>
                                <hr />
                                <p>In Justice League S2E13's climax, Batman's tactical genius shines as he orchestrates a daring plan to thwart the Thanagarian invasion, rallying his allies and sacrificing to protect Earth from destruction, securing victory against overwhelming odds.</p>
                                <a href="https://youtu.be/TlVauMtPgTs"><button>Click Here</button></a>
                            </div>
                    </div>
                    <div className="clips-div2">
                    <img style={top} src="https://i.ytimg.com/vi/vjKMHqCDdD8/maxresdefault.jpg" alt="" />
                            <div>
                                <h3>The Flash Turns Back Time </h3>
                                <hr />
                                <p>In Zacks Synders Justice League fail to stop the mother box from forming unity and the flash is the only one who can fix it, and he does so by breaking his one rule...</p>
                                <a href="https://youtu.be/tmO0w1pXHjs"><button>Click Here</button></a>
                            </div>
                    </div>
            </div>
            <div className="clips-flex">
                <div className="clips-div2">
                <img style={top} src="https://images.bauerhosting.com/legacy/empire-tmdb/films/49521/images/jYLh4mdOqkt30i7LTFs3o02UcGF.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80" alt="" />
                        <div>
                            <h3>Supermans First Flight</h3>
                            <hr />
                            <p>Clark tests his flying abilities after uncovering the Kryptonian scout ship where his father presents him with Superman's suit.</p>
                            <a href="https://youtu.be/IYdg1Y8S0N0"><button>Click Here</button></a>
                        </div>
                </div>
                <div className="clips-div1">
                        <div>
                            <h3>No Man's Land Battle </h3>
                            <hr />
                            <p>When Steve tells Diana that crossing No Man's Land is impossible, she personally leads the charge into enemy territory, As she does heroically.</p>
                            <a href="https://youtu.be/lLfQ81xwf6I"><button>Click Here</button></a>
                        </div>
                        <img style={bat} src="https://s3-us-west-2.amazonaws.com/prd-rteditorial/wp-content/uploads/2019/02/06145556/wonder-woman-no-mans-land-700x380.jpg" alt="" />
                </div>
                <div className="clips-div2">
                        <div>
                            <h3>Green Latern Oath</h3>
                            <hr />
                            <p>In brightest day, in blackest night, No evil shall escape my sight. Let those who worship evil's might,Beware my power, Green Lantern's light!!</p>
                            <a href="https://youtu.be/BjP7Ua45elQ"><button>Click Here</button></a>
                        </div>
                        <img src="https://sportshub.cbsistatic.com/i/2021/03/18/4f6d9057-fa03-4181-8692-59e7bf0bbc06/green-lantern-john-stewart-justice-league-phil-lamarr-1213426.jpg" alt="" />
                </div>
                <div className="clips-div1">
                    <img style={bat1} src="https://i.ytimg.com/vi/EX3O40xOy04/maxresdefault.jpg" alt="" />
                            <div>
                                <h3>Aquaman vs. King Orm</h3>
                                <hr />
                                <p>Standing in his way is Aquaman, Orm's half-human, half-Atlantean brother and true heir to the throne. With help from royal counselor Vulko, Aquaman must retrieve the legendary Trident of Atlan and embrace his destiny as protector of the deep.</p>
                                <a href=""><button>Click Here</button></a>
                            </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default clips