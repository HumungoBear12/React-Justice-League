import React from 'react'
import Banner from '../Components/banner'
import Comics from '../Components/comics'
import Clips from '../Components/clips'

const Home = () => {
  return (
    <div>
        {/* <Banner/> */}
        <div className="home-container">
          <h2>The Justice League</h2>
          <div className="home-flex">
            <img className="ZSJL" src="https://preview.redd.it/88tinsbw9e981.jpg?auto=webp&s=c8c900a264c77faafbf525c0abddced1aa2e5e58" alt="" />
            <div className="home-info">
                <p><strong>The World's Greatest Super Heroes</strong>, the Justice League has endured many roster changes to remain the earth's premiere team of champions.Separately, DC Super Heroes like Superman, Batman, Wonder Woman, Flash and Green Lantern are the greatest fighters for truth and justice the world has ever known. <br/><br/>Collectively, however, they are a force of nature, leaders of a team of heroes who are only rivaled by the pantheons of gods from ancient mythology—the Justice League. The League is the earth’s first line of defense against threats too large for humanity to face alone.<br/><br/>For decades, the Justice League has saved humanity from the worst threats it has ever faced, from alien warlords to ancient demons and powerful sorcerers, to the God of Evil himself, Darkseid. And every time, they have overcome the odds and saved the human race.<br/><br/>Although the Justice League is not the world’s first superhero team, it is nevertheless the standard by which all other superhero teams are measured. Although the League has gone through several permutations over the years, and has broken up and gotten back together countless times, when the chips are down and the earth needs its greatest heroes back together on the front lines, the League always answers the call to duty.</p>
                <div>
                  <h3>Top Members of the league</h3>
                  <hr/>
                  <div className="home-character"> 
                    <a href=""><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/10b3cb41-186f-499b-a824-e369f838b46b/dckpuij-9520bf1d-d27b-49d3-920e-354dc5a28b81.jpg/v1/fill/w_1280,h_2195,q_75,strp/superman_icon_by_thuddleston_dckpuij-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjE5NSIsInBhdGgiOiJcL2ZcLzEwYjNjYjQxLTE4NmYtNDk5Yi1hODI0LWUzNjlmODM4YjQ2YlwvZGNrcHVpai05NTIwYmYxZC1kMjdiLTQ5ZDMtOTIwZS0zNTRkYzVhMjhiODEuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.xRnPuEeUwd62S9GraWJJ3IeiIwnmR1UdqdjlXjP0U48" alt="" /></a>
                    <a href=""><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/10b3cb41-186f-499b-a824-e369f838b46b/dckpvu4-8266ec38-272a-4f78-aa0f-c579519c728a.jpg/v1/fill/w_1280,h_2293,q_75,strp/batman_icon_by_thuddleston_dckpvu4-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjI5MyIsInBhdGgiOiJcL2ZcLzEwYjNjYjQxLTE4NmYtNDk5Yi1hODI0LWUzNjlmODM4YjQ2YlwvZGNrcHZ1NC04MjY2ZWMzOC0yNzJhLTRmNzgtYWEwZi1jNTc5NTE5YzcyOGEuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ymfXk-9v1zi95ORWvGBFSNF3xh5ZND4ffWNzd-M_U4E" alt="" /></a>
                    <a href=""><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/10b3cb41-186f-499b-a824-e369f838b46b/dckpuf0-7dc8e6ae-b922-4279-afcf-77906b4ca356.jpg/v1/fill/w_1280,h_2293,q_75,strp/wonder_woman_icon_by_thuddleston_dckpuf0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjI5MyIsInBhdGgiOiJcL2ZcLzEwYjNjYjQxLTE4NmYtNDk5Yi1hODI0LWUzNjlmODM4YjQ2YlwvZGNrcHVmMC03ZGM4ZTZhZS1iOTIyLTQyNzktYWZjZi03NzkwNmI0Y2EzNTYuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.iv-IwwMz6dIkArTDdbEu9t8D-O_DujK-EuHHkPTcJgc" alt="" /></a>
                    <a href=""><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/10b3cb41-186f-499b-a824-e369f838b46b/dcp35am-f5f6a548-ce51-40d5-bfc1-24becf3bce01.jpg/v1/fill/w_1024,h_1835,q_75,strp/flash_icon_by_thuddleston_dcp35am-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgzNSIsInBhdGgiOiJcL2ZcLzEwYjNjYjQxLTE4NmYtNDk5Yi1hODI0LWUzNjlmODM4YjQ2YlwvZGNwMzVhbS1mNWY2YTU0OC1jZTUxLTQwZDUtYmZjMS0yNGJlY2YzYmNlMDEuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.h0JOPS0mRoEDt8-DnLLnpjIGI57cUeRYpdw7yVpFbEw" alt="" /></a>
                    <a href=""><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/10b3cb41-186f-499b-a824-e369f838b46b/dclbdxc-9cb8cbec-797b-4534-8e9d-3c6ead5f704d.jpg/v1/fill/w_1024,h_1756,q_75,strp/john_stewart_icon_by_thuddleston_dclbdxc-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTc1NiIsInBhdGgiOiJcL2ZcLzEwYjNjYjQxLTE4NmYtNDk5Yi1hODI0LWUzNjlmODM4YjQ2YlwvZGNsYmR4Yy05Y2I4Y2JlYy03OTdiLTQ1MzQtOGU5ZC0zYzZlYWQ1ZjcwNGQuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.GFwK_WruCoZpub4bRBj6Q41R-kRjZxu88WWThZuiQ9o" alt="" /></a>
                    <a href=""><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/10b3cb41-186f-499b-a824-e369f838b46b/dcwkp7r-c56efeb8-799e-455b-b42d-c7cac765b868.jpg/v1/fill/w_1280,h_2195,q_75,strp/aquaman_suit_icon_by_thuddleston_dcwkp7r-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjE5NSIsInBhdGgiOiJcL2ZcLzEwYjNjYjQxLTE4NmYtNDk5Yi1hODI0LWUzNjlmODM4YjQ2YlwvZGN3a3A3ci1jNTZlZmViOC03OTllLTQ1NWItYjQyZC1jN2NhYzc2NWI4NjguanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.GWV5p5OT17REil7pqTi78i-d2Igg4jr6_Fdm9vG3hws" alt="" /></a>
                    <a href=""><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/10b3cb41-186f-499b-a824-e369f838b46b/dckpw5p-0c77aa40-3059-4234-9c47-6d8538f62523.jpg/v1/fill/w_1024,h_1835,q_75,strp/martian_manhunter_commission_by_thuddleston_dckpw5p-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgzNSIsInBhdGgiOiJcL2ZcLzEwYjNjYjQxLTE4NmYtNDk5Yi1hODI0LWUzNjlmODM4YjQ2YlwvZGNrcHc1cC0wYzc3YWE0MC0zMDU5LTQyMzQtOWM0Ny02ZDg1MzhmNjI1MjMuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.fE3egM-zzojsrfgZ7icu8e92iBcBk35yFXxo5ohB5vI" alt="" /></a>
                    <a href=""><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/10b3cb41-186f-499b-a824-e369f838b46b/de937px-fd477d52-97a6-4127-b27f-c665ef8e2d75.jpg/v1/fill/w_1280,h_2195,q_75,strp/green_arrow_icon_by_thuddleston_de937px-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjE5NSIsInBhdGgiOiJcL2ZcLzEwYjNjYjQxLTE4NmYtNDk5Yi1hODI0LWUzNjlmODM4YjQ2YlwvZGU5MzdweC1mZDQ3N2Q1Mi05N2E2LTQxMjctYjI3Zi1jNjY1ZWY4ZTJkNzUuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.j7yKtVakL5dswuZfRHq3w6N1GDKPgBl3I5UJXxoZnt0" alt="" /></a>
                  </div>
                </div>
            </div>
          </div>
          <div>
            <Comics/>
          </div>
          <div>
            <Clips/>
          </div>
        </div>
    </div>
  )
}

export default Home