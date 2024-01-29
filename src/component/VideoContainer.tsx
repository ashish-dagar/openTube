import { useEffect } from "react";
import { YOU_TUBE_API } from "../constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const dataRes = {
  "kind": "youtube#videoListResponse",
  "etag": "7x438qqrJJNyJKmc-QkEt5E2NDo",
  "items": [
      {
          "kind": "youtube#video",
          "etag": "Gr_GW6MH4JemPoHbycHC5jwlITA",
          "id": "krsBRQbOPQ4",
          "snippet": {
              "publishedAt": "2024-01-27T17:00:00Z",
              "channelId": "UCX6OQ3DkcsbYNE6H8uQQuVA",
              "title": "$1 vs $250,000,000 Private Island!",
              "description": "Watch until the end to see how crazy the last island is \nPlay my ALL NEW MrBeast's Disco Dop level in Stumble Guys today! Download now and you could win $10K! https://stumbleguys.onelink.me/Zh4x/MrBeastYT\nNO PUR. NEC’Y. 18+. Ends 2/3/24. Terms apply: https://bit.ly/MrBeastSweepstakes_OfficialRules\n\nMusic Provided by https://www.extrememusic.com\n\nNew Merch - https://mrbeast.store\n\nCheck out Viewstats! - https://www.viewstats.com/\n\nSUBSCRIBE OR I TAKE YOUR DOG\n╔═╦╗╔╦╗╔═╦═╦╦╦╦╗╔═╗\n║╚╣║║║╚╣╚╣╔╣╔╣║╚╣═╣ \n╠╗║╚╝║║╠╗║╚╣║║║║║═╣\n╚═╩══╩═╩═╩═╩╝╚╩═╩═╝\n\nFor any questions or inquiries regarding this video, please reach out to chucky@mrbeastbusiness.com\n\n----------------------------------------------------------------\nfollow all of these or i will kick you\n• Facebook - https://www.facebook.com/MrBeast6000/\n• Twitter - https://twitter.com/MrBeast\n•  Instagram - https://www.instagram.com/mrbeast\n•  Im Hiring! - https://www.mrbeastjobs.com/\n\nNO PURCHASE NECESSARY. Open to US residents (excl. NY & FL; incl. DC), 18+ (19+ AL/NE; 21+ MS) at entry. Starts 1/27/24 at 12:00pm ET. Ends 2/3/24 at 11:59pm ET. To enter visit https://stumbleguys.onelink.me/Zh4x/MrBeastYT. Void where prohibited and outside US. Prize: one (1) $10k cash prize. Sponsor: MrBeastYouTube, LLC. Odds of winning depend on number of eligible entries rec’d. Other terms apply. See https://bit.ly/MrBeastSweepstakes_OfficialRules",
              "thumbnails": {
                  "default": {
                      "url": "https://i.ytimg.com/vi/krsBRQbOPQ4/default.jpg",
                      "width": 120,
                      "height": 90
                  },
                  "medium": {
                      "url": "https://i.ytimg.com/vi/krsBRQbOPQ4/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                  },
                  "high": {
                      "url": "https://i.ytimg.com/vi/krsBRQbOPQ4/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                  },
                  "standard": {
                      "url": "https://i.ytimg.com/vi/krsBRQbOPQ4/sddefault.jpg",
                      "width": 640,
                      "height": 480
                  },
                  "maxres": {
                      "url": "https://i.ytimg.com/vi/krsBRQbOPQ4/maxresdefault.jpg",
                      "width": 1280,
                      "height": 720
                  }
              },
              "channelTitle": "MrBeast",
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "defaultLanguage": "en",
              "localized": {
                  "title": "$1 vs $250,000,000 Private Island!",
                  "description": "Watch until the end to see how crazy the last island is \nPlay my ALL NEW MrBeast's Disco Dop level in Stumble Guys today! Download now and you could win $10K! https://stumbleguys.onelink.me/Zh4x/MrBeastYT\nNO PUR. NEC’Y. 18+. Ends 2/3/24. Terms apply: https://bit.ly/MrBeastSweepstakes_OfficialRules\n\nMusic Provided by https://www.extrememusic.com\n\nNew Merch - https://mrbeast.store\n\nCheck out Viewstats! - https://www.viewstats.com/\n\nSUBSCRIBE OR I TAKE YOUR DOG\n╔═╦╗╔╦╗╔═╦═╦╦╦╦╗╔═╗\n║╚╣║║║╚╣╚╣╔╣╔╣║╚╣═╣ \n╠╗║╚╝║║╠╗║╚╣║║║║║═╣\n╚═╩══╩═╩═╩═╩╝╚╩═╩═╝\n\nFor any questions or inquiries regarding this video, please reach out to chucky@mrbeastbusiness.com\n\n----------------------------------------------------------------\nfollow all of these or i will kick you\n• Facebook - https://www.facebook.com/MrBeast6000/\n• Twitter - https://twitter.com/MrBeast\n•  Instagram - https://www.instagram.com/mrbeast\n•  Im Hiring! - https://www.mrbeastjobs.com/\n\nNO PURCHASE NECESSARY. Open to US residents (excl. NY & FL; incl. DC), 18+ (19+ AL/NE; 21+ MS) at entry. Starts 1/27/24 at 12:00pm ET. Ends 2/3/24 at 11:59pm ET. To enter visit https://stumbleguys.onelink.me/Zh4x/MrBeastYT. Void where prohibited and outside US. Prize: one (1) $10k cash prize. Sponsor: MrBeastYouTube, LLC. Odds of winning depend on number of eligible entries rec’d. Other terms apply. See https://bit.ly/MrBeastSweepstakes_OfficialRules"
              },
              "defaultAudioLanguage": "en"
          },
          "contentDetails": {
              "duration": "PT16M59S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "true",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
          },
          "statistics": {
              "viewCount": "60774762",
              "likeCount": "2946034",
              "favoriteCount": "0",
              "commentCount": "70155"
          }
      },
      {
          "kind": "youtube#video",
          "etag": "9iNFj2xkXtN-mR7USFyUMsZDgkI",
          "id": "CykicwiC_Mk",
          "snippet": {
              "publishedAt": "2024-01-28T05:18:48Z",
              "channelId": "UCWJ2lWNubArHWmf3FIHbfcQ",
              "title": "LAKERS at WARRIORS | FULL GAME HIGHLIGHTS | January 27, 2024",
              "description": "Never miss a moment with the latest news, trending stories and highlights to bring you closer to your favorite players and teams.\nDownload now: https://app.link.nba.com/NBAapp\n\nThe Los Angeles Lakers defeated the Golden State Warriors, 145-144, in double-overtime. LeBron James recorded 36 points, a career-high 20 rebounds and 12 assists for the Lakers, while Anthony Davis (29 points, 13 rebounds, 4 blocks) and D’Angelo Russell (28 points, 5 assists, 5 3PM) added a combined 57 points in the victory. Stephen Curry tallied a season-high 46 point and 9 3PM for the Warriors. The Lakers improve to 24-23 on the season, while the Warriors fall to 19-24.",
              "thumbnails": {
                  "default": {
                      "url": "https://i.ytimg.com/vi/CykicwiC_Mk/default.jpg",
                      "width": 120,
                      "height": 90
                  },
                  "medium": {
                      "url": "https://i.ytimg.com/vi/CykicwiC_Mk/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                  },
                  "high": {
                      "url": "https://i.ytimg.com/vi/CykicwiC_Mk/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                  },
                  "standard": {
                      "url": "https://i.ytimg.com/vi/CykicwiC_Mk/sddefault.jpg",
                      "width": 640,
                      "height": 480
                  },
                  "maxres": {
                      "url": "https://i.ytimg.com/vi/CykicwiC_Mk/maxresdefault.jpg",
                      "width": 1280,
                      "height": 720
                  }
              },
              "channelTitle": "NBA",
              "tags": [
                  "Basketball",
                  "G League",
                  "NBA",
                  "game-0022300650"
              ],
              "categoryId": "17",
              "liveBroadcastContent": "none",
              "localized": {
                  "title": "LAKERS at WARRIORS | FULL GAME HIGHLIGHTS | January 27, 2024",
                  "description": "Never miss a moment with the latest news, trending stories and highlights to bring you closer to your favorite players and teams.\nDownload now: https://app.link.nba.com/NBAapp\n\nThe Los Angeles Lakers defeated the Golden State Warriors, 145-144, in double-overtime. LeBron James recorded 36 points, a career-high 20 rebounds and 12 assists for the Lakers, while Anthony Davis (29 points, 13 rebounds, 4 blocks) and D’Angelo Russell (28 points, 5 assists, 5 3PM) added a combined 57 points in the victory. Stephen Curry tallied a season-high 46 point and 9 3PM for the Warriors. The Lakers improve to 24-23 on the season, while the Warriors fall to 19-24."
              }
          },
          "contentDetails": {
              "duration": "PT10M1S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "regionRestriction": {
                  "allowed": [
                      "CA",
                      "IN",
                      "PH",
                      "US"
                  ]
              },
              "contentRating": {},
              "projection": "rectangular"
          },
          "statistics": {
              "viewCount": "1662237",
              "likeCount": "26240",
              "favoriteCount": "0",
              "commentCount": "4567"
          }
      },
      {
          "kind": "youtube#video",
          "etag": "A98DPDP34qxpC0ADj_h2n2z4rNw",
          "id": "IPoX9QcIBcI",
          "snippet": {
              "publishedAt": "2024-01-27T17:12:47Z",
              "channelId": "UCwVg9btOceLQuNCdoQk9CXg",
              "title": "I Built 4 SECRET Rooms You'd Never Find!",
              "description": "We filled my house with SECRET ROOMS and challenged a real bounty hunter to find us! The ending was crazy...\n\nSubscribe below! \nSTAY WILD @StayWild- \nCAM HUFF @CamHuff \nDEREK DAYS @DerekDays \n\nGET THE MERCH! https://staywildshop.com\n\n☆ FOLLOW ME!\nINSTAGRAM: @BenAzelart https://www.instagram.com/benazelart/\nYOUTUBE: Ben Azelart https://www.youtube.com/benazelart/\nSNAPCHAT: @BenAzelart",
              "thumbnails": {
                  "default": {
                      "url": "https://i.ytimg.com/vi/IPoX9QcIBcI/default.jpg",
                      "width": 120,
                      "height": 90
                  },
                  "medium": {
                      "url": "https://i.ytimg.com/vi/IPoX9QcIBcI/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                  },
                  "high": {
                      "url": "https://i.ytimg.com/vi/IPoX9QcIBcI/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                  },
                  "standard": {
                      "url": "https://i.ytimg.com/vi/IPoX9QcIBcI/sddefault.jpg",
                      "width": 640,
                      "height": 480
                  },
                  "maxres": {
                      "url": "https://i.ytimg.com/vi/IPoX9QcIBcI/maxresdefault.jpg",
                      "width": 1280,
                      "height": 720
                  }
              },
              "channelTitle": "Ben Azelart",
              "tags": [
                  "ben azelart",
                  "brent rivera",
                  "Lexi rivera",
                  "stokes twins",
                  "ben Azelart girlfriend",
                  "Lexi rivera boyfriend",
                  "mylifeaseva",
                  "lexi hensler",
                  "Andrew davila",
                  "pierson",
                  "Pierson wodzynski",
                  "Jeremy hutchins",
                  "dom brack",
                  "Brent and pierson",
                  "Airrack",
                  "mrbeast",
                  "preston",
                  "unspeakable",
                  "Mathew beem",
                  "Ryan trahan",
                  "secret room",
                  "i built",
                  "bounty hunter"
              ],
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "localized": {
                  "title": "I Built 4 SECRET Rooms You'd Never Find!",
                  "description": "We filled my house with SECRET ROOMS and challenged a real bounty hunter to find us! The ending was crazy...\n\nSubscribe below! \nSTAY WILD @StayWild- \nCAM HUFF @CamHuff \nDEREK DAYS @DerekDays \n\nGET THE MERCH! https://staywildshop.com\n\n☆ FOLLOW ME!\nINSTAGRAM: @BenAzelart https://www.instagram.com/benazelart/\nYOUTUBE: Ben Azelart https://www.youtube.com/benazelart/\nSNAPCHAT: @BenAzelart"
              },
              "defaultAudioLanguage": "en"
          },
          "contentDetails": {
              "duration": "PT23M13S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
          },
          "statistics": {
              "viewCount": "3278009",
              "likeCount": "43427",
              "favoriteCount": "0",
              "commentCount": "3358"
          }
      },
      {
          "kind": "youtube#video",
          "etag": "bijJGilSn7QdLRoXs-rhPSkJdJo",
          "id": "XVgCLQ_JQfU",
          "snippet": {
              "publishedAt": "2024-01-26T19:40:08Z",
              "channelId": "UCKrdjiuS66yXOdEZ_cOD_TA",
              "title": "Megan Thee Stallion - HISS [Official Video]",
              "description": "The official video for Megan Thee Stallion's \"HISS\" - OUT NOW!\n\nBuy \"HISS\": http://mts.lnk.to/HissITUNES\n\nStream \"HISS\": http://mts.lnk.to/Hiss\n\nText Megan Thee Stallion:\n(832) 210-1202\n\nFollow Megan Thee Stallion:\nhttps://www.instagram.com/theestallion\nhttps://twitter.com/theestallion\nhttps://www.tiktok.com/@theestallion\nhttps://www.facebook.com/theestallionn\nhttps://soundcloud.com/megan-thee-stallion\n\n--\n#MeganTheeStallion #HISS #OfficialVideo \n\nI just want to kick this shit off by saying fuck y’all\nI don’t have to clear my name on a motherfuckin thang\nEverytime I get mentioned one of y’all bitch ass niggas get 24 hours of attention\nI’m finna get this shit off my chest to lay it to rest\nLet’s go\n\nI feel like Mariah Carey\ngot these niggas so obsessed\nmy pussy so famous might get managed by Kris Jenner next\nhe can’t move on can’t let it go\nhe hooked nose full of that Tina snow\nand since niggas need Megan help to make money bitch come be my hoe\nall of you bitches is weak on the Bible talking shit from where no one can find you\nI could never be judged by a bitch that was dancing making R. Kelly go viral \nim sexy af and I’m freaky get who ever I want ini mini why the fuck would I stay with a nigga that’s weak In the\nsheets and don’t know how to please me \nbodies on bodies on bodies on bodies\nsay he fucked Megan and now he the topic\nthese niggas thinking they lowered the value\nall this free promo I’m turning a profit\nhate when a nigga be kissing and telling\nsay he a playa but he in his feelings\nbet I won’t give up the pussy again shit should’ve gave it to his friend\nThese hoes don’t be mad at Megan these hoes mad at Megan’s law\nI don’t really know what the problem is but I guarantee yall don’t want me to start\nbitch you a pussy never finna check me every chance you get bet yo weak ass won’t\naddress me\nbitches swear the G but the G must stand for Goofy\nwhen the fuck did all the gangster niggas turn to groupies\nevery body wanna kick it when you ain’t a threat these niggas don’t like me cause they\nknow I’m on they neck\n\nY’all goofy ass hoes look so dumb every time y’all celebrate fake news, ha! Using my name for likes and views, I don’t give a fuck what y’all make trend, bitch I still win\nAh!\n\nNigga ain’t you hear ? I ain’t scared of dick\nany man go against me I handle shit\nI’m the Teflon don in the court room\nthey be throwing that dirt don’t shit stick \nall these lil rap niggas so fraud Xanax be they hardest bars\nthese niggas hate on BBLS and be walking around with the same scars ,\nreal curvy no etching niggas fight to get in my section\ndon’t speak on my body count is the dick ain’t worth coming back for seconds,\ncosplay gangsters fake ass accents posted in another nigga hood like a bad bitch\nima big dog bitch can’t lil sis me hoes get views when they tryna diss me\nmake one move gottem in a tizzy killing shit that’s why they tryna RIP me\nstill going hard with the odds against me these niggas don’t have fans they bots these\nbitches don’t have ass they shots and they still tuned in if they fans or not\nallegations from the opposition bitch niggas just eating it up these blogs get paid to lie yall\ntalk shit and be broke as fuck\nbottom line is I’m still rich do Megan bad and I’m still good bringing up who might’ve\nfucked and the bottom line is they still would\nI just wanna fuck my nigga In peace but all my old niggas still love me niggas ain’t hit this\npussy in years damn I knew my shit was heat\nnone of you niggas was wifey material none of you niggas was worth all the drama none of\nyou niggas was hitting it raw and mad I’m not one of yo baby mamas always got my\nass out always let my titties show when I’m in the gym I think about bitches that I’m\nshitting on I’m way too fucking cocky to take him back if he been cheating I can’t let none\nof you raggedy bitches think that yall my equal every since I claimed the summer all you\nbitches want a season ask a hoe why she don’t like me bet she can’t give you a reason\nyou know motherfucking well these bitches wanna sound like Tina don’t you ever grab a mic and think that me and you competing \n\nbad bitch and the walls ain’t bending post photo\nname, start trending why every time one of y’all z list goes do an interview I get\nmentioned? Ion give a fuck who think what you niggas is typing for nothing on the internet\ntyping that shit to me write him a letter or something\n\nSay bitch ass nigga don’t type me nothing else, don’t write me nothing else, download j pay since y’all\nniggas got so much to say or schedule a conjugal visit or something. Ha Ha! Dick riding ass niggas\nAh!",
              "thumbnails": {
                  "default": {
                      "url": "https://i.ytimg.com/vi/XVgCLQ_JQfU/default.jpg",
                      "width": 120,
                      "height": 90
                  },
                  "medium": {
                      "url": "https://i.ytimg.com/vi/XVgCLQ_JQfU/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                  },
                  "high": {
                      "url": "https://i.ytimg.com/vi/XVgCLQ_JQfU/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                  },
                  "standard": {
                      "url": "https://i.ytimg.com/vi/XVgCLQ_JQfU/sddefault.jpg",
                      "width": 640,
                      "height": 480
                  },
                  "maxres": {
                      "url": "https://i.ytimg.com/vi/XVgCLQ_JQfU/maxresdefault.jpg",
                      "width": 1280,
                      "height": 720
                  }
              },
              "channelTitle": "Megan Thee Stallion",
              "tags": [
                  "Megan Thee Stallion",
                  "Rap",
                  "Houston",
                  "Hottie",
                  "Hip Hop 2019",
                  "Hip Hop",
                  "Megan Thee Stallion - HISS [Official Lyric Video]",
                  "Megan Thee Stallion HISS",
                  "HISS Megan Thee Stallion",
                  "HISS",
                  "hiss megan thee stallion",
                  "megan thee stallion hiss",
                  "hiss",
                  "meg",
                  "meg the stallion hiss",
                  "hiss meg the stallion",
                  "meg hiss",
                  "hiss meg",
                  "meg the stallion",
                  "megan",
                  "thee",
                  "stallion",
                  "meg the stallion new music",
                  "meg the stallion new release",
                  "meg new music",
                  "hottie",
                  "hotties",
                  "HISS official lyric video",
                  "hiss lyric video"
              ],
              "categoryId": "10",
              "liveBroadcastContent": "none",
              "localized": {
                  "title": "Megan Thee Stallion - HISS [Official Video]",
                  "description": "The official video for Megan Thee Stallion's \"HISS\" - OUT NOW!\n\nBuy \"HISS\": http://mts.lnk.to/HissITUNES\n\nStream \"HISS\": http://mts.lnk.to/Hiss\n\nText Megan Thee Stallion:\n(832) 210-1202\n\nFollow Megan Thee Stallion:\nhttps://www.instagram.com/theestallion\nhttps://twitter.com/theestallion\nhttps://www.tiktok.com/@theestallion\nhttps://www.facebook.com/theestallionn\nhttps://soundcloud.com/megan-thee-stallion\n\n--\n#MeganTheeStallion #HISS #OfficialVideo \n\nI just want to kick this shit off by saying fuck y’all\nI don’t have to clear my name on a motherfuckin thang\nEverytime I get mentioned one of y’all bitch ass niggas get 24 hours of attention\nI’m finna get this shit off my chest to lay it to rest\nLet’s go\n\nI feel like Mariah Carey\ngot these niggas so obsessed\nmy pussy so famous might get managed by Kris Jenner next\nhe can’t move on can’t let it go\nhe hooked nose full of that Tina snow\nand since niggas need Megan help to make money bitch come be my hoe\nall of you bitches is weak on the Bible talking shit from where no one can find you\nI could never be judged by a bitch that was dancing making R. Kelly go viral \nim sexy af and I’m freaky get who ever I want ini mini why the fuck would I stay with a nigga that’s weak In the\nsheets and don’t know how to please me \nbodies on bodies on bodies on bodies\nsay he fucked Megan and now he the topic\nthese niggas thinking they lowered the value\nall this free promo I’m turning a profit\nhate when a nigga be kissing and telling\nsay he a playa but he in his feelings\nbet I won’t give up the pussy again shit should’ve gave it to his friend\nThese hoes don’t be mad at Megan these hoes mad at Megan’s law\nI don’t really know what the problem is but I guarantee yall don’t want me to start\nbitch you a pussy never finna check me every chance you get bet yo weak ass won’t\naddress me\nbitches swear the G but the G must stand for Goofy\nwhen the fuck did all the gangster niggas turn to groupies\nevery body wanna kick it when you ain’t a threat these niggas don’t like me cause they\nknow I’m on they neck\n\nY’all goofy ass hoes look so dumb every time y’all celebrate fake news, ha! Using my name for likes and views, I don’t give a fuck what y’all make trend, bitch I still win\nAh!\n\nNigga ain’t you hear ? I ain’t scared of dick\nany man go against me I handle shit\nI’m the Teflon don in the court room\nthey be throwing that dirt don’t shit stick \nall these lil rap niggas so fraud Xanax be they hardest bars\nthese niggas hate on BBLS and be walking around with the same scars ,\nreal curvy no etching niggas fight to get in my section\ndon’t speak on my body count is the dick ain’t worth coming back for seconds,\ncosplay gangsters fake ass accents posted in another nigga hood like a bad bitch\nima big dog bitch can’t lil sis me hoes get views when they tryna diss me\nmake one move gottem in a tizzy killing shit that’s why they tryna RIP me\nstill going hard with the odds against me these niggas don’t have fans they bots these\nbitches don’t have ass they shots and they still tuned in if they fans or not\nallegations from the opposition bitch niggas just eating it up these blogs get paid to lie yall\ntalk shit and be broke as fuck\nbottom line is I’m still rich do Megan bad and I’m still good bringing up who might’ve\nfucked and the bottom line is they still would\nI just wanna fuck my nigga In peace but all my old niggas still love me niggas ain’t hit this\npussy in years damn I knew my shit was heat\nnone of you niggas was wifey material none of you niggas was worth all the drama none of\nyou niggas was hitting it raw and mad I’m not one of yo baby mamas always got my\nass out always let my titties show when I’m in the gym I think about bitches that I’m\nshitting on I’m way too fucking cocky to take him back if he been cheating I can’t let none\nof you raggedy bitches think that yall my equal every since I claimed the summer all you\nbitches want a season ask a hoe why she don’t like me bet she can’t give you a reason\nyou know motherfucking well these bitches wanna sound like Tina don’t you ever grab a mic and think that me and you competing \n\nbad bitch and the walls ain’t bending post photo\nname, start trending why every time one of y’all z list goes do an interview I get\nmentioned? Ion give a fuck who think what you niggas is typing for nothing on the internet\ntyping that shit to me write him a letter or something\n\nSay bitch ass nigga don’t type me nothing else, don’t write me nothing else, download j pay since y’all\nniggas got so much to say or schedule a conjugal visit or something. Ha Ha! Dick riding ass niggas\nAh!"
              },
              "defaultAudioLanguage": "en"
          },
          "contentDetails": {
              "duration": "PT3M15S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
          },
          "statistics": {
              "viewCount": "4931735",
              "likeCount": "420013",
              "favoriteCount": "0",
              "commentCount": "33026"
          }
      },
      {
          "kind": "youtube#video",
          "etag": "IjdQj_ceNAwzO-7N4A16ddlUtTM",
          "id": "8YFGFc2z9Ow",
          "snippet": {
              "publishedAt": "2024-01-28T12:47:05Z",
              "channelId": "UCurvRE5fGcdUgCYWgh-BDsg",
              "title": "FIGHT HIGHLIGHTS | Jaime Munguia vs. John Ryder",
              "description": "January 27, 2024 -- Jaime Munguia vs. John Ryder fight highlights from Phoenix, Arizona, presented by @AutoZone.\n\nSubscribe to our YouTube channel 👉  http://bit.ly/DAZNBoxingYouTube\nSubscribe to the DAZN X Series YouTube channel 👉 https://bit.ly/XSeriesYouTube \n\nDownload the DAZN app now 👉  http://bit.ly/DAZNYoutube\n\nFollow DAZN Boxing On Social Media 👇\nTwitter: https://www.twitter.com/DAZNBoxing\nInstagram: https://www.instagram.com/DAZNBoxing\nFacebook: https://www.facebook.com/DAZN\n\nThe DAZN Boxing Show ► https://bit.ly/3EQ70HN\nDAZN Rewind ► https://bit.ly/32iAaRT\n\n#munguiaryder #DAZN #DAZNBoxing #Boxing",
              "thumbnails": {
                  "default": {
                      "url": "https://i.ytimg.com/vi/8YFGFc2z9Ow/default.jpg",
                      "width": 120,
                      "height": 90
                  },
                  "medium": {
                      "url": "https://i.ytimg.com/vi/8YFGFc2z9Ow/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                  },
                  "high": {
                      "url": "https://i.ytimg.com/vi/8YFGFc2z9Ow/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                  },
                  "standard": {
                      "url": "https://i.ytimg.com/vi/8YFGFc2z9Ow/sddefault.jpg",
                      "width": 640,
                      "height": 480
                  },
                  "maxres": {
                      "url": "https://i.ytimg.com/vi/8YFGFc2z9Ow/maxresdefault.jpg",
                      "width": 1280,
                      "height": 720
                  }
              },
              "channelTitle": "DAZN Boxing",
              "tags": [
                  "dazn",
                  "boxing",
                  "highlights",
                  "full fight",
                  "ko",
                  "knockout",
                  "top 10",
                  "The DAZN Boxing Show",
                  "Pelea",
                  "Boxeo",
                  "Pugile",
                  "dazn boxing",
                  "Jaime Munguia",
                  "John Ryder",
                  "boxing highlights",
                  "Jaime Munguia highlights",
                  "john ryder highlights",
                  "munguia ryder highlights"
              ],
              "categoryId": "17",
              "liveBroadcastContent": "none",
              "defaultLanguage": "en",
              "localized": {
                  "title": "FIGHT HIGHLIGHTS | Jaime Munguia vs. John Ryder",
                  "description": "January 27, 2024 -- Jaime Munguia vs. John Ryder fight highlights from Phoenix, Arizona, presented by @AutoZone.\n\nSubscribe to our YouTube channel 👉  http://bit.ly/DAZNBoxingYouTube\nSubscribe to the DAZN X Series YouTube channel 👉 https://bit.ly/XSeriesYouTube \n\nDownload the DAZN app now 👉  http://bit.ly/DAZNYoutube\n\nFollow DAZN Boxing On Social Media 👇\nTwitter: https://www.twitter.com/DAZNBoxing\nInstagram: https://www.instagram.com/DAZNBoxing\nFacebook: https://www.facebook.com/DAZN\n\nThe DAZN Boxing Show ► https://bit.ly/3EQ70HN\nDAZN Rewind ► https://bit.ly/32iAaRT\n\n#munguiaryder #DAZN #DAZNBoxing #Boxing"
              },
              "defaultAudioLanguage": "en"
          },
          "contentDetails": {
              "duration": "PT9M17S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "regionRestriction": {
                  "blocked": [
                      "BY",
                      "MX",
                      "RU"
                  ]
              },
              "contentRating": {},
              "projection": "rectangular"
          },
          "statistics": {
              "viewCount": "426015",
              "likeCount": "6432",
              "favoriteCount": "0",
              "commentCount": "1641"
          }
      }
  ],
  "nextPageToken": "CAUQAA",
  "pageInfo": {
      "totalResults": 200,
      "resultsPerPage": 5
  }
}

const VideoContainer = () => {

  const fetchVideos = async () => {
    // const response = await fetch(YOU_TUBE_API);
    // const data = await response.json();
   // console.log("====", data)
  }
  useEffect(() => {
    fetchVideos()
  }, []);
  return <div style={{display: 'flex', flexWrap: 'wrap'}}>
    <Link to={`/watch?v=${dataRes.items[0].id}`}>
    <VideoCard info={dataRes.items[0]} />
    </Link>
    <VideoCard info={dataRes.items[0]} />
    <VideoCard info={dataRes.items[0]} />
    <VideoCard info={dataRes.items[0]} />
    <VideoCard info={dataRes.items[0]} />
    <VideoCard info={dataRes.items[0]} />
    <VideoCard info={dataRes.items[0]} />
    <VideoCard info={dataRes.items[0]} />
    <VideoCard info={dataRes.items[0]} />
    <VideoCard info={dataRes.items[0]} />
    <VideoCard info={dataRes.items[0]} />
    <VideoCard info={dataRes.items[0]} />
    <VideoCard info={dataRes.items[0]} />
    <VideoCard info={dataRes.items[0]} />
    <VideoCard info={dataRes.items[0]} />
    <VideoCard info={dataRes.items[0]} />
    <VideoCard info={dataRes.items[0]} />
    <VideoCard info={dataRes.items[0]} />
    <VideoCard info={dataRes.items[0]} />
    <VideoCard info={dataRes.items[0]} />
    <VideoCard info={dataRes.items[0]} />

  </div>  
}

export default VideoContainer;