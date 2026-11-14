/* 編輯台 content.
   desk:true  → original report written for this game from real current news (full text here, with editor tasks).
   otherwise  → wire card: real article read on the publisher's site; questions written for this game.
   Daily updates insert new entries right after the NEW marker (newest first). */
window.NEWS = [
/*NEW*/
{id:"o20261114-measles",desk:true,date:"2026-11-14",slug:"MEASLES-US",zh:"美國麻疹死亡增加，聯邦與州吵統計",place:"Pennsylvania, USA",topic:"公衛・政治",lv:2,
 sources:[{name:"Al Jazeera",url:"https://www.aljazeera.com/news/2026/11/14/measles-associated-deaths-reach-10-in-us-after-two-more-deaths-reported"}],
 paras:[
  {s:["Two more people have died after catching measles in the United States, bringing the number of measles-associated deaths this year to 10.","Wisconsin reported the death of an infant, while Pennsylvania said its latest victim had not been vaccinated."],k:0,a:[],w:"導言第一句交代最新、最重要的事實：死亡數增加到 10。"},
  {s:["The figures underline how far the country has slipped since it declared measles eliminated in 2000.","More than 5,400 cases have been confirmed so far this year, according to data compiled by the Centers for Disease Control and Prevention (CDC) and Johns Hopkins University, more than double the 2,289 recorded in 2025.","Pennsylvania has been the hardest-hit state, with over 1,500 cases and seven deaths."],k:0,a:[],w:"段首用 underline 點出意義（疫情倒退），後面是數字佐證。"},
  {s:["Yet the official national tally tells a different story.","The CDC’s website lists only six measles-related deaths this year, fewer than the total reported by state health officials.","According to reports, Health Secretary Robert F Kennedy Jr asked the agency’s director not to include some of the deaths, arguing there was no evidence linking them to measles."],k:0,a:[1],w:"Yet 轉折開啟新主題：官方統計對不上。"},
  {s:["The disagreement has turned into a public dispute between Mr Kennedy and Pennsylvania’s governor, Josh Shapiro.","Pennsylvania counts a death as measles-associated if a confirmed patient dies within 30 days of their first symptoms, unless something clearly unrelated caused it.","Epidemiologists note that this approach has long been standard practice, and the CDC says it is now working with state experts on a common definition."],k:0,a:[],w:"段首說爭議升高，後面解釋雙方的計算方式。"},
  {s:["Behind the numbers lies a steady fall in vaccination.","Coverage among kindergarten children has dropped from 95.2% in the 2019–20 school year to 92.4% in 2025–26, even though two doses of the MMR vaccine are about 97% effective.","Because elimination status depends on going at least 12 months without sustained spread, experts warn the US could lose it very soon."],k:0,a:[2],w:"段首點出背後原因（接種率下降），最後一句是後果，也很重要。"}
 ],
 err:{p:1,s:1,wrong:"More than 5,400 cases have been confirmed so far this year, according to data compiled by the Centers for Disease Control and Prevention (CDC) and Johns Hopkins University, a slight fall from the 2,289 recorded in 2025.",
  e:"5,400 比 2,289 多了一倍以上，不可能是「小幅下降」；而且同段第一句說疫情在倒退。數字和前後文互相矛盾，就是要抓的錯。"},
 heads:{o:["US measles deaths reach 10 as officials clash over the count","CDC confirms measles has been eliminated in the US","Pennsylvania bans unvaccinated children from schools","New measles vaccine found to be 97% effective"],a:0,
  e:"好標題要同時抓到「死亡增加」和「統計爭議」兩個重點。第二個和內文相反；第三個文中沒提；第四個把現有的 MMR 疫苗誤寫成新疫苗。"},
 cut:{p:3,a:[],e:"第 3 段已經說了官方數字對不上、衛生部長的要求；第 4 段是爭議的延伸細節（計算方式）。刪掉它，讀者還是看得懂整件事。導言、數據、原因都不能刪。"},
 g:{infant:"嬰兒",vaccinated:"接種疫苗的",underline:"凸顯；強調",slipped:"退步；下滑",eliminated:"根除",compiled:"彙整",tally:"統計數字",dispute:"爭執；爭議",epidemiologists:"流行病學家",coverage:"覆蓋率",kindergarten:"幼兒園",sustained:"持續的",elimination:"根除"},
 q:[
  {y:"infer",t:"A reader writes: “Why do the CDC and the states give different death totals?” What is the best reply?",o:["The states counted deaths from other diseases by mistake","There is a dispute over which deaths should count as measles-associated","The CDC only counts deaths of children","The states have stopped sending data to the CDC"],a:1,e:"第 3、4 段：雙方對「麻疹相關死亡」的認定不同，衛生部長據報要求不列入部分案例。"},
  {y:"detail",t:"A reader asks: “What could the US lose soon?” According to the article, it is",o:["federal funding for vaccines","its status as a country where measles has been eliminated","its seat on a WHO committee","access to the MMR vaccine"],a:1,e:"最後一段：連續傳播滿 12 個月就會失去「已根除」的地位。"},
  {y:"vocab",t:"A reader is confused by the word “tally” in paragraph 3. It is closest in meaning to",o:["count","rumour","warning","law"],a:0,e:"tally＝統計、計數。official national tally＝官方全國統計。"}
 ]},
{id:"o20261113-microsoft",desk:true,date:"2026-11-13",slug:"MICROSOFT-OUTAGE",zh:"微軟全球大當機",place:"Australia",topic:"科技",lv:1,
 sources:[{name:"ABC News (Australia)",url:"https://www.abc.net.au/news/2026-11-13/microsoft-outlook-outage/107380958"}],
 paras:[
  {s:["Users around the world were locked out of their email on Friday after a major Microsoft outage hit Outlook, Teams and other online services.","The company said its services were gradually coming back, but the recovery was slow and uneven."],k:0,a:[],w:"導言：誰、發生什麼事、影響什麼服務。"},
  {s:["The disruption was felt far beyond office workers.","In Australia, shops that rely on email lost sales, some patients could not reach telehealth appointments, and a number of remote schools closed for the day.","Government agencies, including the country’s spy agency and federal police, were also affected."],k:0,a:[],w:"段首概括「影響很廣」，後面舉例。"},
  {s:["Early on, many people feared a cyberattack.","However, Microsoft said it had found no sign of malicious activity.","Instead, it blamed a large number of servers that became unavailable, pushing extra load onto the rest of its system until a process that handles secure connections was overwhelmed."],k:2,a:[1],w:"However 先否定駭客說，Instead 之後才是真正的原因，這句最關鍵。"},
  {s:["The road back was bumpy.","About an hour after Microsoft announced a recovery, some of the restored servers began failing again, and engineers had to prepare a fresh fix before slowly reintroducing traffic.","Reports of problems on the tracking website Downdetector peaked in the early hours of the morning, Australian time, before falling."],k:0,a:[1],w:"短短的主題句：恢復過程不順。後面是具體經過。"},
  {s:["The outage also reached other governments.","Japan said parts of its government IT systems were hit, and staff at the US House of Representatives also reported problems.","For many organisations, the episode was a reminder of how much daily work now depends on a single provider."],k:2,a:[0],w:"最後一句把事件拉高成一個觀察：太依賴單一供應商。結尾句常是作者想留給讀者的重點。"}
 ],
 err:{p:3,s:1,wrong:"About an hour after Microsoft announced a recovery, all of its services were fully restored and no further problems were reported.",
  e:"同段第一句說恢復過程「不順」（bumpy），而且第一段說恢復「慢且不均」。這句卻說一小時後就全部恢復、沒有問題，前後矛盾。"},
 heads:{o:["Hackers break into Microsoft servers worldwide","Global Microsoft outage disrupts email and work apps; company rules out cyberattack","Australian schools close for a week over email problems","Japan and the US sign IT security deal with Microsoft"],a:1,
  e:"內文明說不是網路攻擊，第一個標題錯；學校只停課一天，第三個誇大；第四個文中沒提。"},
 cut:{p:4,a:[3],e:"前三段是核心：發生什麼、影響誰、原因是什麼。最後一段是其他國家的補充與評論，刪掉最不影響理解。刪恢復過程那段也勉強可以，算對一半。"},
 g:{outage:"服務中斷",uneven:"不均勻的",disruption:"中斷；混亂",telehealth:"遠距醫療",remote:"偏遠的",malicious:"惡意的",unavailable:"無法使用的",overwhelmed:"不堪負荷",bumpy:"顛簸的；不順的",reintroducing:"重新導入",episode:"事件",provider:"供應商"},
 q:[
  {y:"infer",t:"A reader writes: “So was this a hacking attack?” What is the best reply based on the article?",o:["Yes, Microsoft confirmed hackers were responsible","No, Microsoft found no sign of malicious activity and blamed server failures","Nobody knows, because Microsoft refused to comment","Yes, but only in Australia"],a:1,e:"第 3 段：沒有惡意活動的跡象，原因是大量伺服器無法使用。"},
  {y:"detail",t:"Which of these was NOT mentioned as affected?",o:["Australia’s federal police","Japan’s government IT systems","The US House of Representatives","The British Parliament"],a:3,e:"文中提到澳洲警察、日本政府、美國眾議院，沒有英國國會。"},
  {y:"vocab",t:"In paragraph 4, “bumpy” most nearly means",o:["smooth and fast","full of problems and setbacks","very expensive","completely finished"],a:1,e:"bumpy 原意是路面顛簸，引申為過程不順。"}
 ]},
{id:"o20261113-myanmar",desk:true,date:"2026-11-13",slug:"US-MYANMAR",zh:"美國為稀土接近緬甸軍政府",place:"Naypyidaw, Myanmar",topic:"國際・經濟",lv:3,
 sources:[{name:"ABC News (Australia)",url:"https://www.abc.net.au/news/2026-11-13/trump-quest-for-rare-earths-brings-us-closer-to-myanmar-regime/107376926"}],
 paras:[
  {s:["The United States has quietly reopened talks with Myanmar’s military-led government, a regime Washington has accused of genocide, in a shift driven partly by its search for rare earth minerals.","Senior US officials have met the country’s coup leader turned president, Min Aung Hlaing, in Tokyo and in the capital, Naypyidaw, this year."],k:0,a:[],w:"導言一句就包含事件（重啟會談）、對象（被控種族滅絕的政權）和動機（稀土）。"},
  {s:["The contacts mark a striking reversal.","After the military seized power in a 2021 coup, Washington imposed sanctions on its leaders and downgraded relations.","Now, officials hope to counter China’s influence in the region and secure access to Myanmar’s mineral wealth."],k:0,a:[2],w:"段首定調（大轉彎），後面用「過去 vs 現在」說明。"},
  {s:["Rare earths are essential to products ranging from smartphone screens and electric vehicles to solar panels, weapons and AI chips, and the US relies heavily on foreign suppliers.","Myanmar, which has hundreds of mines, is a major source, but most of its output goes to China, which dominates global processing.","Analysts therefore doubt that Washington can build an alternative supply chain quickly: many mines lie in Kachin State near the Chinese border, in territory held by armed groups fighting the military."],k:2,a:[],w:"這段重點在最後：therefore 帶出結論（短期內很難另建供應鏈）。前兩句是推論的前提。"},
  {s:["For Min Aung Hlaing, the renewed attention is a diplomatic prize.","He became president this year after elections that critics widely dismissed as a sham, and his government has spent heavily on lobbying in Washington, hiring a US firm for more than $3m a year.","Analysts suggest the outreach could even help Myanmar return to high-level meetings of ASEAN, the South-East Asian bloc that has largely shut it out."],k:0,a:[],w:"段首說明對緬甸軍方的意義，後面是佐證。"},
  {s:["Human rights advocates, however, are alarmed.","Since the coup, fighting is estimated to have killed around 100,000 people and displaced millions, and rights groups point to UN findings of war crimes and of genocide against the Rohingya minority.","Campaigners warn that engagement without conditions risks legitimising the generals and easing the pressure meant to protect civilians."],k:2,a:[0],w:"however 開啟反方，最後一句說清楚他們擔心什麼，是本段核心。"}
 ],
 err:{p:2,s:1,wrong:"Myanmar, which has hundreds of mines, is a major source, and most of its output goes to the United States, which dominates global processing.",
  e:"如果美國主導稀土加工、又拿到緬甸大部分產量，前一句就不會說美國「高度依賴外國供應」，第 2 段也不必「抗衡中國影響力」。這句和整篇的邏輯相反。"},
 heads:{o:["Myanmar holds its first free elections in decades","China agrees to share Myanmar’s rare earths with the US","US reopens talks with Myanmar’s military rulers as it eyes rare earths","UN lifts sanctions on Myanmar after peace deal"],a:2,
  e:"只有這個標題抓到「美國重啟會談」和「為了稀土」。選舉被批評是假選舉；中國分享、聯合國解除制裁都沒有出現在文中。"},
 cut:{p:3,a:[],e:"全文核心是：美國重啟會談（1、2 段）、為了稀土但很難成功（3 段）、人權團體擔憂（5 段）。第 4 段是緬甸軍方的收穫，屬於補充角度，刪掉影響最小。"},
 g:{regime:"政權",genocide:"種族滅絕",coup:"政變",striking:"驚人的",reversal:"逆轉",sanctions:"制裁",downgraded:"降級",essential:"不可或缺的",dominates:"主導",alternative:"替代的",territory:"領土；地區",sham:"騙局；假的",lobbying:"遊說",bloc:"集團",displaced:"流離失所",legitimising:"使合法化"},
 q:[
  {y:"infer",t:"A reader asks: “Why are human rights groups worried about these talks?” The best reply is that they fear the talks",o:["will raise rare earth prices","could make the military government look legitimate and reduce pressure to protect civilians","will force the US to leave ASEAN","will make China angry at Myanmar"],a:1,e:"最後一段：沒有條件的接觸，可能讓將領們顯得正當，削弱保護平民的壓力。"},
  {y:"infer",t:"Why do analysts doubt the US can quickly build an alternative supply chain?",o:["Myanmar has no rare earth mines","China dominates processing, and many mines are in areas held by armed groups","The US has banned rare earth imports","Rare earths are no longer used in technology"],a:1,e:"第 3 段 therefore 前後的兩個原因。"},
  {y:"vocab",t:"In paragraph 2, “reversal” most nearly means",o:["a change to the opposite direction","a short pause","a written apology","a secret agreement"],a:0,e:"從制裁、降級關係，變成重啟會談，就是 reversal（逆轉）。"},
  {y:"attitude",t:"How does the article present the talks overall?",o:["As a clear victory for human rights","As a strategic move that carries serious ethical risks","As a purely economic deal with no political meaning","As a rumour with no evidence"],a:1,e:"文章交代戰略動機，也用最後一段呈現人權疑慮，態度是平衡但提出警示。"}
 ]},
{id:"n20261113-europe",date:"2026-11-13",src:"Al Jazeera",url:"https://www.aljazeera.com/news/2026/11/13/europe-seeks-seat-at-ukraine-peace-talks-but-lacks-unified-voice",
 title:"EU agrees on five countries to represent Europe in Ukraine peace talks",zh:"歐洲想在烏克蘭和談有一席之地",place:"Dublin, Ireland",topic:"國際・政治",lv:3,mins:5,words:600,
 vocab:{sidelined:"被邊緣化的",trilateral:"三方的",envoy:"特使",overtures:"示好；試探性提議",brokered:"居中斡旋促成的",unanimous:"全體一致的",uncompromising:"不妥協的",vulnerable:"易受傷害的",freelance:"各行其是的",architecture:"架構",blindsided:"被殺個措手不及",coalition:"聯盟"},
 keys:{s:["Europe will send a team from the EU and five countries to the next Ukraine peace talks.","Europe fears being sidelined in negotiations shaped by the US and Russia.","European leaders disagree about who should speak for Europe.","A Kremlin spokesman compared European leaders to “spiders in a jar”.","The EU’s foreign policy chief is a former prime minister of Estonia.","Germany’s chancellor asked the US president to avoid surprises."],k:[0,1,2],
  w:"國際新聞常見結構：決定（派代表團）＋背景擔憂（被邊緣化）＋內部問題（意見不一）。引述的比喻、人物背景、個別請求都是細節。"},
 q:[
  {y:"main",t:"What is the article mainly about?",o:["Europe’s effort to secure a role in Ukraine peace talks, weakened by its lack of a single voice","A new trade deal between Ireland and Russia","The election of a new EU president","Ukraine’s decision to join NATO"],a:0,e:"標題說派代表，內文一路在講「想參與」與「意見不一」。"},
  {y:"detail",t:"Why does Moscow oppose European involvement in direct talks?",o:["It says European countries fund and arm Ukraine’s military","It wants the talks held in Dublin","It prefers China as a mediator","It says Europe has no diplomats"],a:0,e:"俄方的理由：歐洲國家資助並供應烏克蘭軍隊。"},
  {y:"detail",t:"Why did Italy’s prime minister support appointing a single envoy?",o:["She wanted the job herself","Too many groups could lead individual countries to act on their own","The US required it","It would save money"],a:1,e:"她認為討論的團體太多，會讓各國各自進行外交（freelance diplomacy）。"},
  {y:"vocab",t:"To be “sidelined” in negotiations means to be",o:["placed in charge","pushed aside and left out of decisions","invited as a guest of honour","asked to pay the costs"],a:1,e:"sideline 原指場邊，引申為被邊緣化、排除在外。"},
  {y:"infer",t:"What does the US envoy’s remark about Europe naming one representative suggest?",o:["That Europe’s internal disunity is a major obstacle","That Russia has already accepted Europe","That the US will leave the talks","That Europe should not take part at all"],a:0,e:"他說歐洲若能選出一位代表，比讓俄國接受歐洲加入還難得，暗示歐洲內部分歧才是大問題。"}
 ]},
{id:"n20261113-chiclayo",date:"2026-11-13",src:"Al Jazeera",url:"https://www.aljazeera.com/news/2026/11/13/pope-thanks-crowds-on-emotional-return-to-second-home-in-perus-chiclayo",
 title:"Pope thanks crowds on emotional return to ‘second home’ in Peru’s Chiclayo",zh:"教宗重返秘魯「第二個家」",place:"Chiclayo, Peru",topic:"人物・文化",lv:1,mins:3,words:400,
 vocab:{diocese:"教區",missionary:"傳教士",homily:"講道",motorcade:"車隊",devastating:"毀滅性的",localised:"局部的（未擴散）",oversaw:"監督；主管",pilgrimage:"朝聖",ubiquitous:"無所不在的",homeland:"祖國；家鄉",recovery:"康復",esplanade:"廣場；開闊空地"},
 keys:{s:["Pope Leo returned to Chiclayo, the Peruvian city where he once served as bishop.","Huge crowds welcomed him, just one month after his surgery.","His years in Peru made him a beloved local figure.","Some people camped overnight to see him.","The Mass was held in a desert park outside the city.","He will have a private dinner with priests before leaving."],k:[0,1,2],
  w:"人物新聞的重點：誰、回到哪裡、為什麼特別。露營、地點、晚餐是讓故事更生動的細節，但不是重點。"},
 q:[
  {y:"main",t:"What is the article mainly about?",o:["A new treatment for lung cancer","The pope’s emotional return to a city in Peru where he used to work","Traffic problems in Peruvian cities","The pope’s plan to move permanently to Peru"],a:1,e:"整篇圍繞教宗重回奇克拉約，以及當地人的熱情。"},
  {y:"detail",t:"Before becoming pope, Leo served in Chiclayo as",o:["its mayor","a hospital doctor","its bishop","a university teacher"],a:2,e:"他 2015 到 2023 年擔任奇克拉約主教。"},
  {y:"detail",t:"What did doctors say about the pope’s cancer?",o:["It had spread and needs more surgery","It was localised and needs no further treatment","It forced the trip to be cancelled","It has not been diagnosed yet"],a:1,e:"醫師說腫瘤是局部的、沒有擴散，不需要後續治療。"},
  {y:"vocab",t:"A “motorcade” is",o:["a religious song","a line of vehicles carrying an important person","a large outdoor market","a type of church building"],a:1,e:"motor（車）＋ -cade（行列，如 parade）＝ 車隊。"},
  {y:"infer",t:"Why do locals still call him “Padre Roberto”?",o:["They knew him as Father Robert Prevost when he was a priest there","It is the title given to all popes","It is the name of the city’s cathedral","He asked them to use a Spanish nickname"],a:0,e:"他本名 Robert Francis Prevost，在秘魯當神父時就被這樣稱呼。"}
 ]},
];
