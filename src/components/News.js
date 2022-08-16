import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class news extends Component {
  articles = [
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Rael Ombuor",
      title:
        "Raila Odinga calls Kenya election results null and void, calls for calm - The Washington Post",
      description:
        "In a news conference, Odinga singled out the head of the election commission for bias and violating the constitution in declaring a winner without the agreement of other IEBC commissioners.",
      url: "https://www.washingtonpost.com/world/2022/08/16/kenya-election-odinga-ruto/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/JPS7ARQ5MMI63HHGNASTXUYYMQ.jpg&w=1440",
      publishedAt: "2022-08-16T14:41:45Z",
      content:
        "Placeholder while article actions load\r\nNAIROBI Kenyan presidential candidate Raila Odinga declared the results of the election null and void and promised to challenge them in court, ignoring calls f… [+3796 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Times",
      },
      author: "Michael Schwirtz",
      title:
        "Ukraine War News: Blasts Hit Russian Ammunition Depot in Crimea - The New York Times",
      description:
        "The explosions came a week after blasts at a Russian air base on the peninsula destroyed several fighter jets. A senior Ukrainian official said that an elite military unit was responsible for the latest attack.",
      url: "https://www.nytimes.com/live/2022/08/16/world/ukraine-russia-news-war",
      urlToImage:
        "https://static01.nyt.com/images/2022/08/16/multimedia/16ukraine-briefing-promo-1045am/16ukraine-briefing-promo-1045am-facebookJumbo.jpg",
      publishedAt: "2022-08-16T14:31:10Z",
      content:
        "The Primorsky beach in Yalta, Crimea, in 2017.Credit...Denis Sinyakov for The New York Times\r\nKYIV, Ukraine The Crimean Peninsula dangles off Ukraines southern coast like a diamond, blessed with a te… [+4300 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Trump Organization CEO Expected To Plead Guilty In NY Tax Evasion Case - CBS Miami",
      description:
        "Trump Organization CEO Allen Weisselberg is expected to plead guilty to tax evasion charges stemming from an investigation into the former President's compan...",
      url: "https://www.youtube.com/watch?v=62o32bqMEMM",
      urlToImage: "https://i.ytimg.com/vi/62o32bqMEMM/hqdefault.jpg",
      publishedAt: "2022-08-16T14:24:45Z",
      content: null,
    },
    {
      source: {
        id: "abc-news",
        name: "ABC News",
      },
      author: "Emily Shapiro",
      title: "First lady Jill Biden tests positive for COVID-19 - ABC News",
      description: 'She developed "cold-like symptoms" Monday night.',
      url: "https://abcnews.go.com/US/lady-jill-biden-tests-positive-covid-19/story?id=88441076",
      urlToImage:
        "https://s.abcnews.com/images/International/jill-biden-file-ap-jef-220816_1660656991260_hpMain_16x9_992.jpg",
      publishedAt: "2022-08-16T14:17:16Z",
      content:
        'First lady Jill Biden has tested positive for COVID-19, according to her office.\r\nJill Biden tested negative on Monday during her routine testing, and then developed "cold-like symptoms" Monday night… [+1485 chars]',
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Guardian sport",
      title:
        "Tiger Woods to meet with top golfers to stem defections to LIV Series - The Guardian",
      description:
        "Tiger Woods is set to meet with some of the best golfers in the world as he attempts to stop defections from the PGA Tour to the Saudi-backed LIV Golf Series",
      url: "https://amp.theguardian.com/sport/2022/aug/16/tiger-woods-to-meet-with-top-golfers-to-stem-defections-to-liv-series",
      urlToImage: null,
      publishedAt: "2022-08-16T14:15:00Z",
      content:
        "LIV Golf Series<ul><li>Saudi-backed league has used huge contracts to lure players</li><li>Woods reportedly wants to retain integrity of PGA Tour</li></ul>\r\nTue 16 Aug 2022 13.33 BST\r\nTiger Woods is … [+3390 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Trump's midterms revenge campaign takes aim at lawmaker Liz Cheney - Reuters",
      description:
        "Donald Trump's campaign to oust congressional Republicans who supported his impeachment gets its last major test of the U.S. midterm primary season on Tuesday, when Liz Cheney and Lisa Murkowski face challengers backed by the former president.",
      url: "https://www.reuters.com/world/us/trumps-revenge-campaign-takes-aim-key-wyoming-alaska-republicans-2022-08-16/",
      urlToImage:
        "https://www.reuters.com/resizer/RclsCsEun8kfkKIi83pAH-c1uNE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FPOEYIKTCZKIFOTWONMX6ZI2TI.jpg",
      publishedAt: "2022-08-16T13:43:00Z",
      content:
        "Aug 16 (Reuters) - Donald Trump's campaign to oust congressional Republicans who supported his impeachment gets its last major test of the U.S. midterm primary season on Tuesday, when Liz Cheney and … [+5188 chars]",
    },
    {
      source: {
        id: null,
        name: "Barron's",
      },
      author: "Teresa Rivas, Angela Palumbo",
      title:
        "Why Is Walmart Stock Rising? Retailer Tops Estimates and Boosts Its Forecast. - Barron's",
      description:
        "The discount giant bounced back from a miserable first quarter and expects a strong back-to-school sales in the next month or so.",
      url: "https://www.barrons.com/articles/walmart-earnings-stock-price-51660235876",
      urlToImage: "https://images.barrons.com/im-601964/social",
      publishedAt: "2022-08-16T13:41:00Z",
      content:
        "Walmart\r\n s\r\n sales rose and earnings surpassed estimates in the second quarter, sending shares of the retail giant higher. On Tuesday, \r\nWalmart\r\n(ticker: WMT) posted adjusted earnings of $1.77 a sh… [+2947 chars]",
    },
    {
      source: {
        id: null,
        name: "Page Six",
      },
      author: "Francesca Bacardi",
      title:
        "Florence Pugh confirms she and Zach Braff broke up earlier this year - Page Six",
      description:
        "The “Don’t Worry Darling” star opened up about the quiet separation in Harper’s Bazaar, sharing, “I automatically get a lumpy throat when I talk about it.”",
      url: "https://pagesix.com/2022/08/16/florence-pugh-confirms-she-and-zach-braff-broke-up/",
      urlToImage:
        "https://pagesix.com/wp-content/uploads/sites/3/2022/08/florence-pugh-zac-braff-05.jpg?quality=75&strip=all&w=1200",
      publishedAt: "2022-08-16T13:21:00Z",
      content:
        "Florence Pugh confirmed she and Zach Braff quietly broke up in early 2022 after nearly three years of dating.\r\nWeve been trying to do this separation without the world knowing, because its been a rel… [+1742 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "https://www.theguardian.com/profile/chris-stein",
      title:
        "Biden aims for victory lap as he signs Inflation Reduction Act – live - The Guardian US",
      description:
        "White House hopes climate and healthcare bill will mark turning point for Biden’s presidency and boost Democrats in the midterms",
      url: "https://www.theguardian.com/us-news/live/2022/aug/16/biden-climate-healthcare-bill-inflation-reduction-act-democrats-us-politics-latest",
      urlToImage:
        "https://i.guim.co.uk/img/media/289593007daf17d3f51be44d42258b7aedae1c1d/0_371_5568_3341/master/5568.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=08be90fb26e62ebc6528c912041489b3",
      publishedAt: "2022-08-16T13:00:00Z",
      content:
        "The Inflation Reduction Act is the the type of law Democrats have been trying to pass for years, if not decades. It also could have been so much more.\r\nTake a look at the American Jobs Plan and the A… [+8561 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "Giuliani on being told he’s target of election probe: ‘We’re starting to live in a fascist state’ - The Hill",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMihAFodHRwczovL3RoZWhpbGwuY29tL3JlZ3VsYXRpb24vMzYwMzYyNS1naXVsaWFuaS1vbi1iZWluZy10b2xkLWhlcy10YXJnZXQtb2YtZWxlY3Rpb24tcHJvYmUtd2VyZS1zdGFydGluZy10by1saXZlLWluLWEtZmFzY2lzdC1zdGF0ZS_SAQA?oc=5",
      urlToImage: null,
      publishedAt: "2022-08-16T12:40:00Z",
      content: null,
    },
    {
      source: {
        id: "ign",
        name: "IGN",
      },
      author: "Ryan Leston",
      title:
        "Ezra Miller Apologizes for Recent Behavior, Says They're Suffering 'Complex Mental Health Issues' - IGN - IGN",
      description:
        'The Flash star Ezra Miller has issued an apology for their recent behaviour, said they\'re suffering "complex mental healthy issues", and confirmed they have begun treatment.',
      url: "https://www.ign.com/articles/ezra-miller-apologizes-complex-mental-health-issues",
      urlToImage:
        "https://assets-prd.ignimgs.com/2022/06/19/theflash-1623696668930-1655665330114.jpg?width=1280",
      publishedAt: "2022-08-16T11:43:31Z",
      content:
        "The Flash star Ezra Miller has issued an apology for their recent behavior.\r\nAccording to Variety, the 29-year-old actor confirmed that they are suffering complex mental health issues following a ser… [+2236 chars]",
    },
    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Ryan Gaydos",
      title:
        "Texas falls outside preseason college football rankings despite first-place vote in coaches poll - Fox News",
      description:
        "The Texas Longhorns will start the season with a few key players on the mend and outside of the AP Top 25 poll after receiving a first-place vote in the coaches poll.",
      url: "https://www.foxnews.com/sports/texas-falls-outside-preseason-college-football-rankings-despite-first-place-vote-coaches-poll",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2022/08/Steve-Sarkisian.jpg",
      publishedAt: "2022-08-16T11:22:37Z",
      content:
        "Texas Longhorns football is always intriguing to watch and the 2022 season will be no different.\r\nNotably, Texas received one first-place vote in the AFCA Coaches Poll released last week. The coaches… [+2094 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Ella Nilsen and Rachel Ramirez, CNN",
      title:
        "Steep water cuts are coming for the Southwest as Colorado River shrinks and Lake Mead's level plummets - CNN",
      description:
        "New mandatory water cuts are coming for the Colorado River. But they aren't enough to solve the West's water crisis.",
      url: "https://www.cnn.com/2022/08/16/us/colorado-river-water-cuts-lake-mead-negotiations-climate/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220816032942-colorado-river-arizona-california-border-super-tease.jpg",
      publishedAt: "2022-08-16T11:07:00Z",
      content:
        "Officials reveal new details about the 3 sets of human remains found at Lake Mead\r\nThe West's historic drought is threatening hydropower at Hoover Dam\r\nExperts say the term 'drought' may be insuffici… [+296 chars]",
    },
    {
      source: {
        id: "financial-times",
        name: "Financial Times",
      },
      author: "Nic Fildes",
      title:
        "Scientists vow to bring Tasmanian tiger back from extinction - Financial Times",
      description:
        "US biotech behind project to recreate woolly mammoth turns its attention to thylacine",
      url: "https://www.ft.com/content/60ef876f-5b83-43d5-bf32-ea102e542545",
      urlToImage:
        "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F7dedac36-b45f-44cb-b322-09a986b38bec.jpg?source=next-opengraph&fit=scale-down&width=900",
      publishedAt: "2022-08-16T11:03:27Z",
      content:
        "The Tasmanian tiger could be reintroduced into the wild within a decade after a US biotechnology company backed by the Winklevoss twins pledged to recreate the animal almost 90 years after it was dec… [+4141 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Jacqueline Howard, CNN",
      title:
        "Why calling monkeypox an STD is about more than just a label - CNN",
      description:
        "A hallmark of the ongoing monkeypox outbreak is that most cases have been linked to sexual activity, and this has prompted some debate around whether to describe the illness as a sexually transmitted disease.",
      url: "https://www.cnn.com/2022/08/16/health/monkeypox-std-debate/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220803092852-monkeypox-super-tease.jpg",
      publishedAt: "2022-08-16T11:00:00Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "Google is accidentally pushing Android 12 instead of Android 13 to some Pixel users - Android Police",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMiZGh0dHBzOi8vd3d3LmFuZHJvaWRwb2xpY2UuY29tL2dvb2dsZS1hY2NpZGVudGFsbHktcHVzaGluZy1hbmRyb2lkLTEyLWluc3RlYWQtYW5kcm9pZC0xMy1waXhlbC11c2Vycy_SAQA?oc=5",
      urlToImage: null,
      publishedAt: "2022-08-16T10:58:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Carmen Reinicke",
      title:
        "Stock futures are little changed, traders await Walmart earnings - CNBC",
      description: "Here's how stock futures traded early Tuesday morning",
      url: "https://www.cnbc.com/2022/08/15/stock-market-news-futures-open-to-close.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107103947-1660578167510-nyse1.jpg?v=1660578193&w=1920&h=1080",
      publishedAt: "2022-08-16T10:34:00Z",
      content:
        "U.S. stock futures were little changed Tuesday after a solid session the prior day, as traders awaited quarterly reports from major U.S. retailers. \r\nDow Jones Industrial Average futures dipped 26 po… [+1306 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "Jan M. Olsen",
      title:
        "Estonia removes Soviet-era monument, citing public order - The Associated Press - en Español",
      description:
        "COPENHAGEN, Denmark (AP) — Estonia's government said Tuesday it has decided to remove a Soviet-era monument from public space in an eastern border town sitting in the Baltic country's Russian-speaking part, with the prime minister saying the reason for the di…",
      url: "https://apnews.com/article/russia-ukraine-estonia-world-war-ii-denmark-146b552568e5d09de7f31ed6a2e952c9",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/37ac91f85ed0462ca4aa2b1ee130927c/3000.jpeg",
      publishedAt: "2022-08-16T10:29:59Z",
      content:
        "COPENHAGEN, Denmark (AP) Estonias government said Tuesday it has decided to remove a Soviet-era monument from public space in an eastern border town sitting in the Baltic countrys Russian-speaking pa… [+3622 chars]",
    },
    {
      source: {
        id: "abc-news",
        name: "ABC News",
      },
      author: "The Associated Press",
      title:
        "Memphis hospital locks down while treating shooting victims - ABC News",
      description:
        "Authorities say people have been wounded in a shooting that led to a lockdown of a hospital in Memphis, Tennessee",
      url: "https://abcnews.go.com/US/wireStory/memphis-hospital-locks-treating-shooting-victims-88433819",
      urlToImage:
        "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
      publishedAt: "2022-08-16T10:01:16Z",
      content:
        "MEMPHIS, Tenn. -- Six people were wounded in a shooting that led to a lockdown of a hospital early Tuesday in Memphis, Tennessee, authorities said.\r\nMemphis police said the six were shot shortly afte… [+931 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Rhea Mogul, CNN",
      title:
        "Chinese research ship Yuan Wang 5 docks at Sri Lanka's Hambantota port - CNN",
      description:
        "A Chinese research ship docked at a southern Sri Lankan port Beijing leases from the government on Tuesday, officials said, despite security concerns raised by India about the vessel's presence in nearby waters.",
      url: "https://www.cnn.com/2022/08/16/asia/india-china-tensions-military-ship-docks-sri-lanka-intl-hnk/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220816021443-02-chinese-military-ship-sri-lanka-super-tease.jpg",
      publishedAt: "2022-08-16T08:55:00Z",
      content:
        "(CNN)A Chinese research ship docked at a southern Sri Lankan port Beijing leases from the government on Tuesday, officials said, despite security concerns raised by India about the vessel's presence … [+7003 chars]",
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <div>
        <h2> NewsApp </h2>

        <div className="container my-3">
          <div className="row">
            <div className="col-md-4">
              <NewsItem />
            </div>
            <div className="col-md-4">
              <NewsItem />
            </div>
            <div className="col-md-4">
              <NewsItem />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
