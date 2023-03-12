import React from "react";
import VideoCard from "./VideoCard";
import '../Styles/Videos.css'
import '../Styles/AllVideos.css'

const Videos = () => {
    return(<div className="Videos" >
        <h2>Recommended</h2>
        <div className="allVideos">
        <VideoCard
                          image={'https://i.ytimg.com/an_webp/s0ii3Tcz6a8/mqdefault_6s.webp?du=3000&sqp=CNSftaAG&rs=AOn4CLDr6PYT9E4ordcVchK5ZsvSqC34Sg'}
                          title={'Junior vs Senior React Folder Structure'}
                          views={'2.3 M'}
                          time={'3 day ago'}
                          logo=  {'https://yt3.ggpht.com/ytc/AL5GRJXjrfspJ8wxKzvK-Q9qRfQGRPFGj1OfJGzDDDOp=s68-c-k-c0x00ffffff-no-rj'}
                          channel={'Web Dev Simplified'}
                          />
                    <VideoCard
              image={'me.png'}
              title={'Hello 👋, This is my youtube clone.'}
              views={'∞ M'}
              time={'Just Now'}
              logo=  {'https://avatars.githubusercontent.com/u/108014979?v=4'}
              channel={'React JS Developer'}
            />
            <VideoCard
              image={'https://i.ytimg.com/vi/1LkOa7Ky2ak/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAdBrvhaHfVMfhmmI6fN3EnXsz4RQ'}
              title={'Why React.js is taking a new direction'}
              views={'2.1 M'}
              time={'3 day ago'}
              logo=  {'https://yt3.ggpht.com/z8m8Nc31z3PdVqbMPzS_MEApQKgXjP6faDEto0lIPXy9S50QSSMtCYHZ5V-opH73q9BAjxpb_g=s68-c-k-c0x00ffffff-no-rj'}
              channel={'Academind'}
            />
            <VideoCard
                          image={'https://i.ytimg.com/vi/0yeua71j5b4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBs1x09zW46GEfsIhYqLwHYL1gTog'}
                          title={'ReactJS 🔥🔥🔥 '}
                          views={'3.5 M'}
                          time={'5 day ago'}
                          logo=  {'https://yt3.ggpht.com/QQxn6hSdStL-VcuX_etPIbukeFXe0YIRZmGLz0wQ1f5e_OMViLxE2x9ZVpeFeMVJA3B34oy4zA=s68-c-k-c0x00ffffff-no-rj'}
                          channel={'codedamn'}
                          />
            <VideoCard               
              image={'https://i.ytimg.com/vi/UUga4-z7b6s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA1twlAOcnXAgGMgKBqbXRLA7WX9Q'}
              title={'Junior vs Senior React Folder Structure'}
              views={'4.9 M'}
              time={'12 day ago'}
              logo=  {'https://yt3.ggpht.com/ytc/AL5GRJXjrfspJ8wxKzvK-Q9qRfQGRPFGj1OfJGzDDDOp=s68-c-k-c0x00ffffff-no-rj'}
              channel={'Web Dev Simplified'}
              />
            <VideoCard
                          image={'https://i.ytimg.com/vi/_oO4Qi5aVZs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjd8Fd1kdPCMa3SaM7ayppw8Ol2Q'}
                          title={'Modern UI/UX'}
                          views={'2.1 M'}
                          time={'8 day ago'}
                          logo=  {'https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s68-c-k-c0x00ffffff-no-rj'}
                          channel={'JavaScript Mastery'}
                          />
            <VideoCard
                          image={'https://i.ytimg.com/vi/y0wXQ5EdW_0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBzNGqZZdmueetSDMiY67pWxqrqgw'}
                          title={'Relaxing SOLO Camping with Rain Forest Mountain views'}
                          views={'1.3 M'}
                          time={'11 day ago'}
                          logo=  {'https://yt3.ggpht.com/ytc/AL5GRJXiEFmANICWK5_rSpYFVCGZ1VAnAKMWF0FrMHSP6A=s88-c-k-c0x00ffffff-no-rj'}
                          channel={'Go4x4'}
                          />
            <VideoCard
                          image={'https://i.ytimg.com/vi/GnI_8tlo_YM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkqjx4zYNZhX471dcUZy2vwK6Gbg'}
                          title={'PUBG : RTX 4090 24GB ( 4K Ultra Graphics )'}
                          views={'3.3 M'}
                          time={'15 day ago'}
                          logo=  {'https://yt3.ggpht.com/ytc/AL5GRJWrvS_ZC3_eCMfQEZlhC37cRtKQbhXMwDrlWNG_Dg=s88-c-k-c0x00ffffff-no-rj'}
                          channel={'GTX 1050 T'}
                          />
            <VideoCard
                          image={'https://i.ytimg.com/vi/3pZNzF6LBII/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCieBgYq_yYbrdqFVSXTntVJcDJ8A'}
                          title={'Discovery That Changed Physics! Gravity is NOT a Force!'}
                          views={'3.6 M'}
                          time={'1 day ago'}
                          logo=  {'https://yt3.ggpht.com/ytc/AL5GRJUwJq4tRHGhzqluxZ-gdd3TUhsFQFlXV1tUqPkfBQ=s88-c-k-c0x00ffffff-no-rj'}
                          channel={'Destiny'}
                          />
<VideoCard
              image={'https://i.ytimg.com/vi/1LkOa7Ky2ak/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAdBrvhaHfVMfhmmI6fN3EnXsz4RQ'}
              title={'Why React.js is taking a new direction'}
              views={'2.1 M'}
              time={'3 day ago'}
              logo=  {'https://yt3.ggpht.com/z8m8Nc31z3PdVqbMPzS_MEApQKgXjP6faDEto0lIPXy9S50QSSMtCYHZ5V-opH73q9BAjxpb_g=s68-c-k-c0x00ffffff-no-rj'}
              channel={'Academind'}
            />
            <VideoCard
                          image={'https://i.ytimg.com/vi/0yeua71j5b4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBs1x09zW46GEfsIhYqLwHYL1gTog'}
                          title={'ReactJS 🔥🔥🔥 '}
                          views={'3.5 M'}
                          time={'5 day ago'}
                          logo=  {'https://yt3.ggpht.com/QQxn6hSdStL-VcuX_etPIbukeFXe0YIRZmGLz0wQ1f5e_OMViLxE2x9ZVpeFeMVJA3B34oy4zA=s68-c-k-c0x00ffffff-no-rj'}
                          channel={'codedamn'}
                          />
            <VideoCard               
              image={'https://i.ytimg.com/vi/UUga4-z7b6s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA1twlAOcnXAgGMgKBqbXRLA7WX9Q'}
              title={'Junior vs Senior React Folder Structure'}
              views={'4.9 M'}
              time={'12 day ago'}
              logo=  {'https://yt3.ggpht.com/ytc/AL5GRJXjrfspJ8wxKzvK-Q9qRfQGRPFGj1OfJGzDDDOp=s68-c-k-c0x00ffffff-no-rj'}
              channel={'Web Dev Simplified'}
              />
            <VideoCard
                          image={'https://i.ytimg.com/vi/_oO4Qi5aVZs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjd8Fd1kdPCMa3SaM7ayppw8Ol2Q'}
                          title={'Modern UI/UX'}
                          views={'2.1 M'}
                          time={'8 day ago'}
                          logo=  {'https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s68-c-k-c0x00ffffff-no-rj'}
                          channel={'JavaScript Mastery'}
                          />
                        <VideoCard
                                 image={'https://assets-global.website-files.com/5f15530648874c5f977e91c2/637ef1f502c0f83324cbf1ad_ABM%20College%20Web%20developer%20main.jpg'}
                                 title={'Discovery That Changed Physics! Gravity is NOT a Force!'}
                                 views={'3.6 M'}
                                 time={'1 day ago'}
                                 logo=  {'https://yt3.ggpht.com/ytc/AL5GRJUwJq4tRHGhzqluxZ-gdd3TUhsFQFlXV1tUqPkfBQ=s88-c-k-c0x00ffffff-no-rj'}
                                 channel={'Destiny'}
                          />
            <VideoCard
                          image={'https://i.ytimg.com/vi/y0wXQ5EdW_0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBzNGqZZdmueetSDMiY67pWxqrqgw'}
                          title={'Relaxing SOLO Camping with Rain Forest Mountain views'}
                          views={'1.3 M'}
                          time={'11 day ago'}
                          logo=  {'https://yt3.ggpht.com/ytc/AL5GRJXiEFmANICWK5_rSpYFVCGZ1VAnAKMWF0FrMHSP6A=s88-c-k-c0x00ffffff-no-rj'}
                          channel={'Go4x4'}
                          />
            <VideoCard
                          image={'https://i.ytimg.com/vi/GnI_8tlo_YM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkqjx4zYNZhX471dcUZy2vwK6Gbg'}
                          title={'PUBG : RTX 4090 24GB ( 4K Ultra Graphics )'}
                          views={'3.3 M'}
                          time={'15 day ago'}
                          logo=  {'https://yt3.ggpht.com/ytc/AL5GRJWrvS_ZC3_eCMfQEZlhC37cRtKQbhXMwDrlWNG_Dg=s88-c-k-c0x00ffffff-no-rj'}
                          channel={'GTX 1050 T'}
                          />
        </div>
    </div>)
}

export default Videos;