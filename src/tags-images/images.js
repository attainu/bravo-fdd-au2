export default function image_urls(){
    let images = {
        "img":[ 
            {
                "tag": "electro",
                "url": "https://lastfm.freetls.fastly.net/i/u/300x300/9fd718d4c80e4ac89107c6c0bb908440.webp"
            },
            {
                "tag": "seen line",
                "url": "https://www.side-line.com/wp-content/uploads/2019/07/christian-spies-jjrVtiTAnEQ-unsplash.jpg"
            },
            {
                "tag": "alternative",
                "url": "https://lastfm.freetls.fastly.net/i/u/avatar300s/9b109fcab6c48f5714c8554a31ab9943.webp"
            },
            {
                "tag":   "indie",
                "url":  "https://lastfm.freetls.fastly.net/i/u/avatar300s/dab2f0f68e74f3498d6dca96d8ec6e93.webp"
            },
            {
                "tag":  "pop",
                "url":  "https://www.englishclub.com/images/vocabulary/music/madonna.jpg"
            },
            {
                "tag":  "female-vocalists",
                "url":  "https://lastfm.freetls.fastly.net/i/u/300x300/8697378ee14c17292c12614af6f372f6.webp"
            },
            {
                "tag":  "metal",
                "url":  "https://lastfm.freetls.fastly.net/i/u/avatar300s/3678be8979db483ebda032762e670777.webp"
            },
            {
                "tag":  "alternative-rock",
                "url":  "https://cdn.britannica.com/s:700x450/48/23048-004-8ABE02C6/REM.jpg"
            },
            {
                "tag":  "jazz",
                "url":  "https://lastfm.freetls.fastly.net/i/u/avatar300s/dabfa13f8e67402f9ef7619eb7845cb2.webp"
            },
            {
                "tag":  "classic-rock",
                "url":  "https://lastfm.freetls.fastly.net/i/u/300x300/c86aa5a2cbed445ea0621b5d70310b5c.webp"
            },
            {
                "tag":  "ambient",
                "url":  "data:image/jpeg;base64,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"
            },
            {
                "tag":  "experimental",
                "url":  "https://cdn3.pitchfork.com/albums/24704/homepage_large.07c8af96.jpg"
            },
            {
                "tag":  "folk",
                "url":  "https://latviansonline.com/wp-content/uploads/2019/01/Rava-1834x1018.jpg"
            },
            {
                "tag":   "punk",
                "url":  "https://cdn.britannica.com/s:300x300/52/23152-050-08E3FD92/Ramones.jpg"
            },
            {
                "tag":  "indie-rock",
                "url":  "https://www.udiscovermusic.com/wp-content/uploads/2017/08/The-Verve-Urban-Humns-Album-Cover-web-optimised-820.jpg"
            },
            {
                "tag":  "hard-rock",
                "url":  "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fadammorganstern%2Ffiles%2F2019%2F01%2FMetallica-with-Dave-Pickerell-1200x800.jpg"
            },
            {
                "tag":  "hip-hop",
                "url":  "https://cdn-03.independent.ie/life/article38168421.ece/30a15/AUTOCROP/w620/2019-06-02_lif_50731257_I1.JPG"
            },
            {
                "tag":  "instrumental",
                "url":  "https://www.cfbands.com/uploads/1/3/6/9/13694168/2610451_orig.jpg"
            },
            {
                "tag":  "singer-songwriter",
                "url":  "http://phillyinfluencer.com/wp-content/uploads/2018/08/hiphop.jpg"
            },
            {
                "tag":  "black metal",
                "url":  "https://images.theconversation.com/files/179798/original/file-20170726-30134-1eb4oy8.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&h=502&fit=crop&dpr=1"
            },
            {
                "tag":   "dance",
                "url":  "https://www.colum.edu/img/academics/majors-and-programs/hip-hop-studies-minor-dancing.jpg"
            },
            {
                "tag": "80's",
                "url":  "https://i.guim.co.uk/img/media/cca6a74227267513c82b8f4241c8f62e0ad5b4b5/0_72_2070_1858/master/2070.jpg?width=700&quality=45&auto=format&fit=max&dpr=2&s=b6b3c076ff88b38a41dc6e59aaa1dae8"
            },
            {
                "tag":  "progressive-rock",
                "url":  "https://www.colum.edu/img/academics/majors-and-programs/hip-hop-studies-minor-mc-765.jpg"
            },
            {
                "tag":  "death-metal",
                "url":  "https://www.revolvermag.com/sites/default/files/styles/image_750_x_420/public/media/images/article/dandq_0.jpg?itok=s8NURjGJ&timestamp=1532454135&c=9fd1448644d8bd5bb350f5b868a6d1e1"
            },
            {
                "tag":  "heavy-metal",
                "url":  "https://www.revolvermag.com/sites/default/files/styles/original_image__844px_x_473px_/public/media/section-media/haunt-band-alejandro-ramos-web.jpg?itok=AKtamWUd&timestamp=1545343208"
            },
            {
                "tag":  "hardcore",
                "url":  "https://cdn.store-assets.com/s/217431/i/7358753_480x.jpeg"
            },
            {
                "tag":  "british",
                "url":  "https://lastfm.freetls.fastly.net/i/u/300x300/c86aa5a2cbed445ea0621b5d70310b5c.webp"
            },
            {
                "tag":  "soul",
                "url":  "https://lastfm.freetls.fastly.net/i/u/avatar300s/dabfa13f8e67402f9ef7619eb7845cb2.webp"
            },
            {
                "tag":  "chillout",
                "url":  "https://cdn.britannica.com/s:300x300/52/23152-050-08E3FD92/Ramones.jpg"
            },
            {
                "tag":  "electronica",
                "url":  "http://phillyinfluencer.com/wp-content/uploads/2018/08/hiphop.jpg"
            },
            {
                "tag":  "Classical",
                "url":  "https://www.colum.edu/img/academics/majors-and-programs/hip-hop-studies-minor-dancing.jpg"
            },
            {
                "tag":  "industrial",
                "url":  "https://www.cfbands.com/uploads/1/3/6/9/13694168/2610451_orig.jpg"
            },
            {
                "tag":  "Soundtrack",
                "url":   "https://www.side-line.com/wp-content/uploads/2019/07/christian-spies-jjrVtiTAnEQ-unsplash.jpg"
            },
            {
                "tag":  "rap",
                "url":  "https://media.wired.com/photos/5955a8975992c54331ac1589/master/w_825,c_limit/Eminem_42-27383443.jpg"
            },
            {
                "tag":  "blues",
                "url":  "https://lastfm.freetls.fastly.net/i/u/avatar300s/3678be8979db483ebda032762e670777.webp"
            },
            {
                "tag":  "punk-rock",
                "url":  "https://www.englishclub.com/images/vocabulary/music/madonna.jpg"
            },
            {
                "tag":  "thrash-metal",
                "url": "https://lastfm.freetls.fastly.net/i/u/300x300/8697378ee14c17292c12614af6f372f6.webp"
            },
            {
                "tag":  "90's",
                "url":  "https://i.guim.co.uk/img/media/cca6a74227267513c82b8f4241c8f62e0ad5b4b5/0_72_2070_1858/master/2070.jpg?width=700&quality=45&auto=format&fit=max&dpr=2&s=b6b3c076ff88b38a41dc6e59aaa1dae8"
            },
            {
                "tag":  "acoustic",
                "url":  "https://lastfm.freetls.fastly.net/i/u/avatar300s/dabfa13f8e67402f9ef7619eb7845cb2.webp"
            },
            {
                "tag":  "metalcore",
                "url":  "https://cdn.store-assets.com/s/217431/i/7358753_480x.jpeg"
            },
            {
                "tag":  "psychedelic",
                "url":  "https://lastfm.freetls.fastly.net/i/u/avatar300s/3678be8979db483ebda032762e670777.webp"
            },
            {
                "tag":  "japanese",
                "url":  "https://img.kpopmap.com/2019/01/fb-bts-bangtan-boys-next-generation-leaders-20181.jpg"
            },
            {
                "tag":  "post-rock",
                "url":  "https://lastfm.freetls.fastly.net/i/u/avatar300s/dabfa13f8e67402f9ef7619eb7845cb2.webp"
            },
            {
                "tag":  "german",
                "url":  "https://cdn3.pitchfork.com/albums/24704/homepage_large.07c8af96.jpg"
            },

            {
                "tag":  "progressive-metal",
                "url":  "https://lastfm.freetls.fastly.net/i/u/avatar300s/dabfa13f8e67402f9ef7619eb7845cb2.webp"
            },

            {
                "tag":  "funk",
                "url":  "https://cdn.britannica.com/s:700x450/48/23048-004-8ABE02C6/REM.jpg"
            },

            {
                "tag":  "Hip-Hop",
                "url":  "https://cdn-03.independent.ie/life/article38168421.ece/30a15/AUTOCROP/w620/2019-06-02_lif_50731257_I1.JPG"
            },

            {
                "tag":  "new-wave",
                "url":  "https://www.englishclub.com/images/vocabulary/music/madonna.jpg"
            },

            {
                "tag":  "trance",
                "url":  "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2014/10/17/275947-manali-trance.jpg"
            }
        ]
    }
    return images;
}