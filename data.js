// Bilingual Data for Maus: A Survivor's Tale (Art Spiegelman)
// Batch 1: Pages 1 to 10
// Batch 2: Pages 11 to 20
const bookData = {
  title: "Maus: A Survivor's Tale",
  amharicTitle: "ማውስ፡ የተረፈው ሰው ታሪክ",
  author: "Art Spiegelman",
  amharicAuthor: "አርት ስፒገልማን",
  batches: [
    {
      id: "batch_1",
      title: "Batch 1: Pages 1–10",
      amharicTitle: "ክፍል 1፡ ገጾች 1–10",
      description: "Cover, Introduction, Prologue, and Chapter 1 Opening in Rego Park.",
      amharicDescription: "የሽፋን ገጽ፣ መቅድም፣ እና የምዕራፍ አንድ መግቢያ በሬጎ ፓርክ።",
      pageRange: [1, 10]
    },
    {
      id: "batch_2",
      title: "Batch 2: Pages 11–20",
      amharicTitle: "ክፍል 2፡ ገጾች 11–20",
      description: "Chapter 1: 'The Sheik' (Youth in Częstochowa, Lucia Greenberg, Meeting Anja Zylberberg, and Wedding in Sosnowiec).",
      amharicDescription: "ምዕራፍ አንድ፡ «ሼኩ» (በቼስቶኮቫ ያሳለፈው ወጣትነት፣ ሉቺያ ግሪንበርግ፣ ከአንጃ ጋር መተዋወቅ፣ እና በሶስኖቪየክ የተደረገው ጋብቻ)።",
      pageRange: [11, 20]
    },
    {
      id: "batch_3",
      title: "Batch 3: Pages 21–30",
      amharicTitle: "ክፍል 3፡ ገጾች 21–30",
      description: "Chapter 2: 'The Honeymoon' (Pills, Communist Conspiracy, Richieu's Birth, Depression, and the Swastika in Czechoslovakia).",
      amharicDescription: "ምዕራፍ ሁለት፡ «የጫጉላው ጊዜ» (ክኒኖች፣ የኮሚኒስት ሴራ፣ የሪሺዩ መወለድ፣ የአንጃ ድብርት፣ እና በቼኮዝሎቫኪያ የታየው የስዋስቲካ አርማ)።",
      pageRange: [21, 30]
    },
    {
      id: "batch_4",
      title: "Batch 4: Pages 31–40",
      amharicTitle: "ክፍል 4፡ ገጾች 31–40",
      description: "Sanitarium Recovery, Return to Bielsko, Outbreak of WWII, Draft Notice, and Trenches on the German Frontier.",
      amharicDescription: "በህክምና ማዕከሉ ማገገም፣ ወደ ቤልስኮ መመለስ፣ የሁለተኛው የዓለም ጦርነት መፈንዳት፣ የውትድርና ጥሪ፣ እና በጀርመን ድንበር ጉድጓዶች ውስጥ የተደረገው ፍልሚያ።",
      pageRange: [31, 40]
    },
    {
      id: "batch_5",
      title: "Batch 5: Pages 41–50",
      amharicTitle: "ክፍል 5፡ ገጾች 41–50",
      description: "Frontline Combat on the River, Shooting 'The Tree', Capture by German Soldiers, POW Camp Segregation, and the Cold Tents.",
      amharicDescription: "በወንዙ ዳር የተደረገ የፊት ለፊት ውጊያ፣ 'የዛፍ' መስሎ የተደበቀውን ወታደር መተኮስ፣ በጀርመኖች መማረክ፣ የአይሁድ የጦር ምርኮኞች ካምፕ፣ እና የበረዶ ድንኳኖች ህይወት።",
      pageRange: [41, 50]
    }
  ],
  pages: [
    // -------------------------------------------------------------
    // BATCH 1: PAGES 1 - 10
    // -------------------------------------------------------------
    {
      pageNumber: 1,
      bookPageLabel: "Cover",
      amharicLabel: "የሽፋን ገጽ",
      image: "images/page_1.webp",
      type: "cover",
      summaryEn: "Front cover depicting mouse-headed Jews sheltered beneath a stylized cat-like swastika emblem.",
      summaryAm: "አይሁዶችን በአይጥ አምሳል፣ ናዚዎችን ደግሞ በድመት ቅርጽ በተሰራ የስዋስቲካ አርማ ጥላ ስር ያቀፈው የመጽሐፉ ዋና ሽፋን።",
      panels: [
        {
          id: "p1-1",
          speaker: "Title",
          speakerAm: "አርዕስት",
          role: "title",
          en: "MAUS: A SURVIVOR'S TALE",
          am: "ማውስ፡ የተረፈው ሰው ታሪክ",
          notes: "'Maus' is the German word for Mouse. Art Spiegelman uses anthropomorphic animals: Jews as mice, Germans as cats, Poles as pigs, Americans as dogs."
        },
        {
          id: "p1-2",
          speaker: "Author",
          speakerAm: "ደራሲ",
          role: "author",
          en: "art spiegelman",
          am: "አርት ስፒገልማን",
          notes: "American cartoonist Art Spiegelman, son of Polish Holocaust survivors Vladek and Anja Spiegelman."
        }
      ]
    },
    {
      pageNumber: 2,
      bookPageLabel: "Inside Flap / Book Overview",
      amharicLabel: "የመጽሐፉ መግቢያ እና ዳሰሳ",
      image: "images/page_2.webp",
      type: "text_page",
      summaryEn: "Jacket description highlighting the groundbreaking graphic novel form and Kafkaesque power of the narrative.",
      summaryAm: "ስለ መጽሐፉ ይዘት፣ አጻጻፍ እና የካፍካ ዓይነት ልብ-ነኪ የስነ-ጽሑፍ ጥንካሬ የሚያብራራ የመጽሐፉ ጀርባ መግለጫ።",
      panels: [
        {
          id: "p2-1",
          speaker: "Synopsis",
          speakerAm: "ማጠቃለያ",
          role: "prose",
          en: "Maus is the story of Vladek Spiegelman, a Jewish survivor of Hitler's Europe, and of his son, a cartoonist who tries to come to terms with his father, his father's terrifying story, and History itself.",
          am: "«ማውስ» በሂትለር አውሮፓ የደረሰውን እልቂት የተረፈው አይሁዳዊ ቭላዴክ ስፒገልማን እና የአባቱን አስፈሪ ታሪክ፣ ራሱን አባቱን እና ታሪክን ለመረዳት የሚታገለው የካርቱኒስት ልጁ ታሪክ ነው።",
          notes: ""
        },
        {
          id: "p2-2",
          speaker: "Form & Style",
          speakerAm: "ስልት እና ቅርጽ",
          role: "prose",
          en: "Its form, the cartoon (the Nazis are cats, the Jews mice) succeeds perfectly in shocking us out of any lingering sense of familiarity with the events described, approaching, as it does, the unspeakable through the diminutive.",
          am: "መጽሐፉ የተዘጋጀበት ቅርጽ—ካርቱን (ናዚዎች ድመቶች፣ አይሁዶች ደግሞ አይጦች ተደርገው የቀረቡበት)—ስለተፈጸሙት ክስተቶች የነበረንን ማንኛውንም የለመደ አስተሳሰብ በማናወጥ፣ ሊነገር የማይችለውን አስከፊ ታሪክ በትንንሽ እንስሳት አምሳል በማቅረብ እጅግ ይረብሻል።",
          notes: ""
        },
        {
          id: "p2-3",
          speaker: "Critical Acclaim",
          speakerAm: "የሃያሲያን ምስክርነት",
          role: "quote",
          en: "It is, as the New York Times Book Review has commented, 'a remarkable feat of documentary detail and novelistic vividness... an unfolding literary event.'",
          am: "ዘ ኒው ዮርክ ታይምስ ቡክ ሪቪው እንዳስነበበው፦ «በሰነድ ዝርዝር መረጃ እና በልብ-ወለድ ህያውነት የታጀበ አስደናቂ ስራ... የሚደነቅ የስነ-ጽሑፍ ክስተት ነው።»",
          notes: ""
        },
        {
          id: "p2-4",
          speaker: "Dual Stories",
          speakerAm: "ሁለቱ ትረካዎች",
          role: "prose",
          en: "Moving back and forth from Poland to Rego Park, New York, Maus tells two powerful stories: The first is Spiegelman's father's account of how he and his wife survived Hitler's Europe, a harrowing tale filled with countless brushes with death, improbable escapes, and the terror of confinement and betrayal.",
          am: "ከፖላንድ ወደ ሬጎ ፓርክ ኒው ዮርክ እየተመላለሰ «ማውስ» ሁለት ሃያላን ታሪኮችን ይተርካል፦ የመጀመሪያው የስፒገልማን አባት እርሱና ባለቤቱ የሂትለርን አውሮፓ እንዴት እንደተረፉ የሚገልጽበት፣ ስፍር ቁጥር በሌላቸው የሞት አፋፍ ገጠመኞች፣ ባልተጠበቁ ማምለጫዎች፣ እና በእስርና በክህደት ሽብር የተሞላ ልብ-ሰቃይ ታሪክ ነው።",
          notes: ""
        },
        {
          id: "p2-5",
          speaker: "Father & Son",
          speakerAm: "አባትና ልጅ",
          role: "prose",
          en: "The second is the author's tortured relationship with his aging father as they try to lead a normal life of minor arguments and passing visits against a backdrop of history too large to pacify. At all levels, this is the ultimate survivor's tale—and that, too, of the children who somehow survive even the survivors.",
          am: "ሁለተኛው ደግሞ ደራሲው ከእርጅና ላይ ከደረሰው አባቱ ጋር ያለው የተወሳሰበና አስቸጋሪ ግንኙነት ሲሆን፣ ለማስታረቅ አዳጋች በሆነው ታሪክ ጥላ ስር ሆነው በትንንሽ ጭቅጭቆች እና አጫጭር ጉብኝቶች የተሞላ መደበኛ ህይወት ለመምራት የሚያደርጉትን ጥረት ያሳያል። በሁሉም ረገድ ይህ ወደር የሌለው የተረፈ ሰው ታሪክ ነው—እንዲሁም ከተረፉት የተወለዱት ልጆች እንኳን እንዴት በህይወት እንደሚዘልቁ ያሳያል።",
          notes: ""
        },
        {
          id: "p2-6",
          speaker: "A New Literature",
          speakerAm: "አዲስ ዓይነት ስነ-ጽሑፍ",
          role: "prose",
          en: "Maus takes Spiegelman's parents to the gates of Auschwitz and him to the edge of despair (with a sequel to come). Put aside all your preconceptions. These cats and mice are not Tom and Jerry, but something quite different. This is a new kind of literature.",
          am: "«ማውስ» የስፒገልማንን ወላጆች እስከ አውሽዊትዝ (Auschwitz) የሞት ካምፕ ደጃፍ፣ እርሱንም እስከ ተስፋ መቁረጥ ጫፍ ያደርሳቸዋል። የቀደመ ግምትዎትን ሁሉ ወደ ጎን ይተው። እነዚህ ድመቶችና አይጦች ቶም እና ጄሪ አይደሉም፤ ፈጽሞ የተለዩ ናቸው። ይህ አዲስ ዓይነት የስነ-ጽሑፍ ፈጠራ ነው።",
          notes: ""
        },
        {
          id: "p2-7",
          speaker: "David Levine",
          speakerAm: "ዴቪድ ሌቪን",
          role: "quote",
          en: "'In its effect on the reader, on a par with Kafka.' — David Levine",
          am: "«በአንባቢው ላይ በሚያሳድረው ተጽዕኖ፣ ከካፍካ (Kafka) ድርሰቶች ጋር የሚተካከል ነው።» — ዴቪድ ሌቪን",
          notes: "Franz Kafka, famous author known for surreal, existential literature exploring alienation and persecution."
        }
      ]
    },
    {
      pageNumber: 3,
      bookPageLabel: "Title Page",
      amharicLabel: "የውስጥ አርዕስት ገጽ",
      image: "images/page_3.webp",
      type: "title_page",
      summaryEn: "Interior title page featuring the iconic emblem and publisher imprint.",
      summaryAm: "የመጽሐፉ ዋና አርዕስት እና የአሳታሚው ማህተም የቀረበበት ገጽ።",
      panels: [
        {
          id: "p3-1",
          speaker: "Title",
          speakerAm: "አርዕስት",
          role: "title",
          en: "MAUS: A SURVIVOR'S TALE",
          am: "ማውስ፡ የተረፈው ሰው ታሪክ",
          notes: ""
        },
        {
          id: "p3-2",
          speaker: "Author & Publisher",
          speakerAm: "ደራሲ እና አሳታሚ",
          role: "author",
          en: "art spiegelman — PENGUIN BOOKS",
          am: "አርት ስፒገልማን — ፔንግዊን ቡክስ (Penguin Books)",
          notes: ""
        }
      ]
    },
    {
      pageNumber: 4,
      bookPageLabel: "Epigraph",
      amharicLabel: "መሪ ጥቅስ",
      image: "images/page_4.webp",
      type: "epigraph",
      summaryEn: "Chilling quote from Adolf Hitler displaying the dehumanizing ideology that fueled the Holocaust.",
      summaryAm: "ናዚዎች አይሁዶችን ሰው እንዳልሆኑ አድርገው በመቁጠር የፈጸሙትን ጭፍጨፋ የሚያረጋግጥ የአዶልፍ ሂትለር አስፈሪ ጥቅስ።",
      panels: [
        {
          id: "p4-1",
          speaker: "Adolf Hitler",
          speakerAm: "አዶልፍ ሂትለር",
          role: "quote",
          en: "“The Jews are undoubtedly a race, but they are not human.” — Adolf Hitler",
          am: "«አይሁዶች ያለምንም ጥርጥር አንድ ዘር ናቸው፣ ነገር ግን የሰው ልጆች አይደሉም።» — አዶልፍ ሂትለር",
          notes: "This dehumanization is central to why Spiegelman chose to portray Jews as mice and Nazis as cats."
        }
      ]
    },
    {
      pageNumber: 5,
      bookPageLabel: "Page 4 (Prologue Part 1)",
      amharicLabel: "ገጽ 4 (መቅድም - ክፍል 1)",
      image: "images/page_5.webp",
      type: "comic",
      summaryEn: "Young Artie is abandoned by his friends in Rego Park when his roller skate breaks.",
      summaryAm: "ህፃኑ አርቲ በሬጎ ፓርክ ከጓደኞቹ ጋር ስኬቲንግ ሲጫወት ጫማው ተላቆ ሲወድቅ ጓደኞቹ ጥለውት ይሸሻሉ።",
      panels: [
        {
          id: "p5-1",
          speaker: "Artie (Narrator)",
          speakerAm: "አርቲ (ተራኪ)",
          role: "narration",
          en: "Rego Park, N.Y. c. 1958. It was summer, I remember. I was ten or eleven...",
          am: "ሬጎ ፓርክ፣ ኒው ዮርክ። በ1958 ገደማ። የበጋ ወቅት እንደነበር አስታውሳለሁ። አስር ወይም አስራ አንድ ዓመቴ ነበር...",
          notes: "Rego Park is a neighborhood in Queens, New York City, where many European Jewish survivors settled."
        },
        {
          id: "p5-2",
          speaker: "Howie / Steve",
          speakerAm: "ሃዊ / ስቲቭ (ጓደኞቹ)",
          role: "dialogue",
          en: "LAST ONE TO THE SCHOOLYARD IS A ROTTEN EGG!",
          am: "ወደ ትምህርት ቤቱ ቅጥር ግቢ መጨረሻ የደረሰ የበሰበሰ እንቁላል ነው!",
          notes: "A popular American children's racing taunt."
        },
        {
          id: "p5-3",
          speaker: "Artie (Narrator)",
          speakerAm: "አርቲ (ተራኪ)",
          role: "narration",
          en: "...I was roller-skating with Howie and Steve... 'til my skate came loose.",
          am: "...ከሃዊ እና ከስቲቭ ጋር ስኬቲንግ እየተጫወትኩ ነበር... የእግሬ ስኬት ጫማ እስኪላቀቅ ድረስ።",
          notes: ""
        },
        {
          id: "p5-4",
          speaker: "Artie",
          speakerAm: "አርቲ",
          role: "dialogue",
          en: "OW!",
          am: "አው!",
          notes: ""
        },
        {
          id: "p5-5",
          speaker: "Artie",
          speakerAm: "አርቲ",
          role: "dialogue",
          en: "HEY! WAIT UP FELLAS!",
          am: "ሄይ! ጓዶች ጠብቁኝ እንጂ!",
          notes: ""
        },
        {
          id: "p5-6",
          speaker: "Friends",
          speakerAm: "ጓደኞቹ",
          role: "dialogue",
          en: "ROTTEN EGG! HA HA!",
          am: "የበሰበሰ እንቁላል! ሃሃ!",
          notes: ""
        },
        {
          id: "p5-7",
          speaker: "Artie",
          speakerAm: "አርቲ",
          role: "dialogue",
          en: "W-WAIT UP! (SNK, SNF)",
          am: "ጠ-ጠብቁኝ! (እያለቀሰና እያሸተተ)",
          notes: ""
        },
        {
          id: "p5-8",
          speaker: "Artie (Narrator)",
          speakerAm: "አርቲ (ተራኪ)",
          role: "narration",
          en: "My father was in front, fixing something...",
          am: "አባቴ ከፊት ለፊት የሆነ ነገር እየጠገነ ነበር...",
          notes: "Introduces Vladek's perpetual habit of repairing and building things with his hands."
        }
      ]
    },
    {
      pageNumber: 6,
      bookPageLabel: "Page 5 (Prologue Part 2)",
      amharicLabel: "ገጽ 5 (መቅድም - ክፍል 2)",
      image: "images/page_6.webp",
      type: "comic",
      summaryEn: "Vladek teaches Artie a grim lesson on the harsh reality of human friendship when survival is at stake.",
      summaryAm: "ቭላዴክ ለህፃኑ አርቲ በችግርና በህይወት አድን ትግል ጊዜ የእውነተኛ ጓደኝነትን ትርጉም በምሬት ያስተምረዋል።",
      panels: [
        {
          id: "p6-1",
          speaker: "Vladek",
          speakerAm: "ቭላዴክ (አባት)",
          role: "dialogue",
          en: "ARTIE! COME TO HOLD THIS A MINUTE WHILE I SAW.",
          am: "አርቲ! እኔ እንጨቱን እስክሰነጥቅ ድረስ ይህንን ለአንድ ደቂቃ ያዝልኝ።",
          notes: ""
        },
        {
          id: "p6-2",
          speaker: "Artie",
          speakerAm: "አርቲ",
          role: "dialogue",
          en: "SNRK?",
          am: "እኽ? (በእንባ ታንቆ)",
          notes: ""
        },
        {
          id: "p6-3",
          speaker: "Vladek",
          speakerAm: "ቭላዴክ (አባት)",
          role: "dialogue",
          en: "WHY DO YOU CRY, ARTIE? HOLD BETTER ON THE WOOD.",
          am: "ለምን ታለቅሳለህ አርቲ? እንጨቱን በደንብ አጥብቀህ ያዝ።",
          notes: ""
        },
        {
          id: "p6-4",
          speaker: "Artie",
          speakerAm: "አርቲ",
          role: "dialogue",
          en: "I-I FELL, AND MY FRIENDS SKATED AWAY W-WITHOUT ME.",
          am: "ወ-ወድቄ እኮ ነው፤ ጓደኞቼም እ-እኔን ጥለውኝ ሸሽተው ሄዱ።",
          notes: ""
        },
        {
          id: "p6-5",
          speaker: "Artie (Narrator)",
          speakerAm: "አርቲ (ተራኪ)",
          role: "narration",
          en: "He stopped sawing.",
          am: "መጋዙን ማሰራት አቆመ።",
          notes: "A dramatic visual beat highlighting Vladek's shift into his Holocaust survival worldview."
        },
        {
          id: "p6-6",
          speaker: "Vladek",
          speakerAm: "ቭላዴክ (አባት)",
          role: "dialogue",
          en: "FRIENDS? YOUR FRIENDS?...",
          am: "ጓደኞች? ያንተ ጓደኞች?... ",
          notes: ""
        },
        {
          id: "p6-7",
          speaker: "Vladek",
          speakerAm: "ቭላዴክ (አባት)",
          role: "dialogue",
          en: "IF YOU LOCK THEM TOGETHER IN A ROOM WITH NO FOOD FOR A WEEK...",
          am: "ለአንድ ሳምንት ያህል ምንም ምግብ በሌለበት ክፍል ውስጥ አብረሃቸው ብትቆልፍባቸው...",
          notes: ""
        },
        {
          id: "p6-8",
          speaker: "Vladek",
          speakerAm: "ቭላዴክ (አባት)",
          role: "dialogue",
          en: "...THEN YOU COULD SEE WHAT IT IS, FRIENDS!...",
          am: "...ያን ጊዜ ጓደኛ ማለት ምን እንደሆነ ታይ ነበር!...",
          notes: "One of the most famous quotes in graphic novel literature, illustrating the trauma survivors carry."
        }
      ]
    },
    {
      pageNumber: 7,
      bookPageLabel: "Contents / Subtitle",
      amharicLabel: "ማውጫ እና ንዑስ ርዕስ",
      image: "images/page_7.webp",
      type: "contents",
      summaryEn: "Part I subtitle 'My Father Bleeds History' and table of contents for Chapters 1 through 6.",
      summaryAm: "የመጀመሪያው ክፍል ንዑስ ርዕስ «አባቴ ታሪክን ያፈሳል» እና ከምዕራፍ 1 እስከ 6 ያለው የይዘት ማውጫ።",
      panels: [
        {
          id: "p7-1",
          speaker: "Book I Title",
          speakerAm: "የመጽሐፍ 1 ርዕስ",
          role: "title",
          en: "MY FATHER BLEEDS HISTORY (MID-1930s TO WINTER 1944)",
          am: "«አባቴ ታሪክን ያነባል / ያፈሳል» (ከ1930ዎቹ አጋማሽ እስከ 1944 ክረምት)",
          notes: "Refers both to Vladek bleeding memories of the war and the burden carried by the second generation."
        },
        {
          id: "p7-2",
          speaker: "Chapter 1",
          speakerAm: "ምዕራፍ 1",
          role: "toc",
          en: "9 • one / the sheik",
          am: "9 • ምዕራፍ አንድ / ሼኩ (The Sheik)",
          notes: ""
        },
        {
          id: "p7-3",
          speaker: "Chapter 2",
          speakerAm: "ምዕራፍ 2",
          role: "toc",
          en: "25 • two / the honeymoon",
          am: "25 • ምዕራፍ ሁለት / የጫጉላው ጊዜ (The Honeymoon)",
          notes: ""
        },
        {
          id: "p7-4",
          speaker: "Chapter 3",
          speakerAm: "ምዕራፍ 3",
          role: "toc",
          en: "41 • three / prisoner of war",
          am: "41 • ምዕራፍ ሦስት / የጦር እስረኛ (Prisoner of War)",
          notes: ""
        },
        {
          id: "p7-5",
          speaker: "Chapter 4",
          speakerAm: "ምዕራፍ 4",
          role: "toc",
          en: "71 • four / the noose tightens",
          am: "71 • ምዕራፍ አራት / ገመዱ እየጠበበ መጣ (The Noose Tightens)",
          notes: ""
        },
        {
          id: "p7-6",
          speaker: "Chapter 5",
          speakerAm: "ምዕራፍ 5",
          role: "toc",
          en: "95 • five / mouse holes",
          am: "95 • ምዕራፍ አምስት / የአይጥ ጉድጓዶች (Mouse Holes)",
          notes: ""
        },
        {
          id: "p7-7",
          speaker: "Chapter 6",
          speakerAm: "ምዕራፍ 6",
          role: "toc",
          en: "129 • six / mouse trap",
          am: "129 • ምዕራፍ ስድስት / የአይጥ ወጥመድ (Mouse Trap)",
          notes: ""
        }
      ]
    },
    {
      pageNumber: 8,
      bookPageLabel: "Chapter 1 Cover",
      amharicLabel: "የምዕራፍ አንድ ሽፋን",
      image: "images/page_8.webp",
      type: "chapter_cover",
      summaryEn: "Chapter One title card 'The Sheik', showing young Vladek dressed stylishly as Rudolph Valentino.",
      summaryAm: "ምዕራፍ አንድ «ሼኩ»፤ ወጣቱ ቭላዴክ እንደ ዝነኛው የፊልም ተዋናይ ሩዶልፍ ቫለንቲኖ በሚያምር ልብስ ተውቦ የሚያሳይ ሥዕል።",
      panels: [
        {
          id: "p8-1",
          speaker: "Chapter Header",
          speakerAm: "የምዕራፍ ርዕስ",
          role: "title",
          en: "CHAPTER ONE: The SHEIK",
          am: "ምዕራፍ አንድ፡ ሼኩ (The Sheik)",
          notes: "Alludes to the 1921 film 'The Sheik' starring Rudolph Valentino, as Vladek was handsome and sought after by women in his youth."
        }
      ]
    },
    {
      pageNumber: 9,
      bookPageLabel: "Page 11 (Chapter 1, Comic Page 1)",
      amharicLabel: "ገጽ 11 (ምዕራፍ 1 - ገጽ 1)",
      image: "images/page_9.webp",
      type: "comic",
      summaryEn: "Artie visits his father Vladek and stepmother Mala in Rego Park after not seeing them for years.",
      summaryAm: "አርቲ ለበርካታ ዓመታት ካላያቸው በኋላ በሬጎ ፓርክ ወደሚኖሩት አባቱ ቭላዴክ እና የእንጀራ እናቱ ማላ ዘንድ ይሄዳል።",
      panels: [
        {
          id: "p9-1",
          speaker: "Artie (Narrator)",
          speakerAm: "አርቲ (ተራኪ)",
          role: "narration",
          en: "I went out to see my father in Rego Park. I hadn't seen him in a long time—we weren't that close.",
          am: "በሬጎ ፓርክ የሚኖረውን አባቴን ልጠይቀው ሄድኩ። ካየሁት ረጅም ጊዜ ሆኖኝ ነበር—እኛ ያን ያህል የምንቀራረብ አልነበርንም።",
          notes: ""
        },
        {
          id: "p9-2",
          speaker: "Artie",
          speakerAm: "አርቲ",
          role: "dialogue",
          en: "POPPA!",
          am: "አባዬ!",
          notes: ""
        },
        {
          id: "p9-3",
          speaker: "Vladek",
          speakerAm: "ቭላዴክ (አባት)",
          role: "dialogue",
          en: "OI, ARTIE. YOU'RE LATE. I WAS WORRIED.",
          am: "ኦይ፣ አርቲ። ዘገየህ እኮ። ተጨንቄ ነበር።",
          notes: "'Oi' (or Oy) is a common Yiddish exclamation of worry, surprise, or exasperation."
        },
        {
          id: "p9-4",
          speaker: "Vladek",
          speakerAm: "ቭላዴክ (አባት)",
          role: "dialogue",
          en: "IT'S A SHAME FRANÇOISE ALSO DIDN'T COME.",
          am: "ፍራንሷዝ አብራህ አለመምጣቷ ያሳዝናል።",
          notes: "Françoise Mouly is Artie's French wife."
        },
        {
          id: "p9-5",
          speaker: "Artie",
          speakerAm: "አርቲ",
          role: "dialogue",
          en: "UH-HUH. SHE SENDS REGARDS.",
          am: "አዎ። ሰላምታ ልካልሃለች።",
          notes: ""
        },
        {
          id: "p9-6",
          speaker: "Artie (Narrator)",
          speakerAm: "አርቲ (ተራኪ)",
          role: "narration",
          en: "He had aged a lot since I saw him last. My mother's suicide and his two heart attacks had taken their toll.",
          am: "ለመጨረሻ ጊዜ ካየሁት ወዲህ በጣም አርጅቷል። የእናቴ እራሷን ማጥፋት እና ያጋጠሙት ሁለት የልብ ድካሞች አካላቱን ክፉኛ ጎድተውታል።",
          notes: "Artie's mother, Anja, committed suicide in 1968, leaving deep trauma in the family."
        },
        {
          id: "p9-7",
          speaker: "Vladek",
          speakerAm: "ቭላዴክ (አባት)",
          role: "dialogue",
          en: "MALA! LOOK WHO'S HERE! ARTIE!",
          am: "ማላ! ማን እንደመጣ እይ! አርቲ መጥቷል!",
          notes: ""
        },
        {
          id: "p9-8",
          speaker: "Artie (Narrator)",
          speakerAm: "አርቲ (ተራኪ)",
          role: "narration",
          en: "He was remarried. Mala knew my parents in Poland before the war. She was a survivor too, like most of my parents' friends.",
          am: "በድጋሚ አግብቷል። ማላ ከጦርነቱ በፊት በፖላንድ ሳሉ ወላጆቼን ታውቃቸው ነበር። እንደ አብዛኞቹ የወላጆቼ ጓደኞች ሁሉ እርሷም ከእልቂቱ የተረፈች ነበረች።",
          notes: ""
        },
        {
          id: "p9-9",
          speaker: "Mala",
          speakerAm: "ማላ",
          role: "dialogue",
          en: "HI, ARTIE. LET ME TAKE YOUR COAT.",
          am: "ሰላም አርቲ። ኮትህን ልቀበልህ።",
          notes: ""
        },
        {
          id: "p9-10",
          speaker: "Mala",
          speakerAm: "ማላ",
          role: "dialogue",
          en: "THE DINNER IS ON THE TABLE.",
          am: "እራቱ በጠረጴዛው ላይ ቀርቧል።",
          notes: ""
        },
        {
          id: "p9-11",
          speaker: "Vladek",
          speakerAm: "ቭላዴክ (አባት)",
          role: "dialogue",
          en: "ACCH, MALA! A WIRE HANGER YOU GIVE HIM?! I HAVEN'T SEEN ARTIE IN ALMOST TWO YEARS— WE HAVE PLENTY WOODEN HANGERS.",
          am: "አኽ፣ ማላ! የሽቦ መስቀያ ነው የምትሰጪው?! አርቲን ካየሁት እኮ ወደ ሁለት ዓመት ገደማ ሆኖኛል—ብዙ የእንጨት መስቀያዎች አሉን እኮ!",
          notes: "Highlights Vladek's fixation on thriftiness and domestic details, a recurring conflict between him and Mala."
        },
        {
          id: "p9-12",
          speaker: "Artie (Narrator)",
          speakerAm: "አርቲ (ተራኪ)",
          role: "narration",
          en: "They didn't get along.",
          am: "እርስ በእርሳቸው አይስማሙም ነበር።",
          notes: ""
        }
      ]
    },
    {
      pageNumber: 10,
      bookPageLabel: "Page 12 (Chapter 1, Comic Page 2)",
      amharicLabel: "ገጽ 12 (ምዕራፍ 1 - ገጽ 2)",
      image: "images/page_10.webp",
      type: "comic",
      summaryEn: "In Artie's old bedroom, Vladek exercises on his stationary bicycle and begins telling the story of his youth in Poland.",
      summaryAm: "አርቲ በነበረበት የቀድሞ መኝታ ክፍል ውስጥ፣ ቭላዴክ የአካል ብቃት ብስክሌቱን እየረገጠ በፖላንድ ስላሳለፈው የወጣትነት ታሪኩ ማውጋት ይጀምራል።",
      panels: [
        {
          id: "p10-1",
          speaker: "Artie (Narrator)",
          speakerAm: "አርቲ (ተራኪ)",
          role: "narration",
          en: "After dinner he took me into my old room...",
          am: "ከእራት በኋላ ወደ ቀድሞ ክፍሌ ይዞኝ ሄደ...",
          notes: ""
        },
        {
          id: "p10-2",
          speaker: "Vladek",
          speakerAm: "ቭላዴክ (አባት)",
          role: "dialogue",
          en: "COME—WE'LL TALK WHILE I PEDAL...",
          am: "ና—እኔ ብስክሌቱን ስረግጥ እናወራለን...",
          notes: ""
        },
        {
          id: "p10-3",
          speaker: "Vladek",
          speakerAm: "ቭላዴክ (አባት)",
          role: "dialogue",
          en: "IT'S GOOD FOR MY HEART, THE PEDALING. BUT, TELL ME, HOW IS IT BY YOU? HOW IS GOING THE COMICS BUSINESS?",
          am: "ብስክሌቱን መርገጡ ለልቤ ጤንነት ጥሩ ነው። ግን ንገረኝ፣ አንተ ጋር እንዴት ነው? የኮሚክስ ስራህ እንዴት እየሄደ ነው?",
          notes: "Notice Vladek's distinctive grammatical syntax ('How is it by you?'), reflecting his Yiddish/Polish native phrasing."
        },
        {
          id: "p10-4",
          speaker: "Artie",
          speakerAm: "አርቲ",
          role: "dialogue",
          en: "I STILL WANT TO DRAW THAT BOOK ABOUT YOU... THE ONE I USED TO TALK TO YOU ABOUT. ABOUT YOUR LIFE IN POLAND, AND THE WAR.",
          am: "አሁንም ስለ አንተ ያንን መጽሐፍ የመሳል ፍላጎት አለኝ... ሁሌም እነግርህ የነበረውን መጽሐፍ። በፖላንድ ስላሳለፍከው ህይወትህ እና ስለ ጦርነቱ።",
          notes: ""
        },
        {
          id: "p10-5",
          speaker: "Vladek",
          speakerAm: "ቭላዴክ (አባት)",
          role: "dialogue",
          en: "IT WOULD TAKE MANY BOOKS, MY LIFE, AND NO ONE WANTS ANYWAY TO HEAR SUCH STORIES.",
          am: "የእኔ ህይወት ብዙ መጽሐፍትን ይፈጃል፤ ደግሞም እንደነዚህ ያሉ ታሪኮችን ማንም ሊሰማ አይፈልግም።",
          notes: "The panel shows Vladek's forearm tattooed with the Auschwitz concentration camp prisoner number 175113."
        },
        {
          id: "p10-6",
          speaker: "Artie",
          speakerAm: "አርቲ",
          role: "dialogue",
          en: "I WANT TO HEAR IT. START WITH MOM... TELL ME HOW YOU MET.",
          am: "እኔ መስማት እፈልጋለሁ። ከእናቴ ጀምር... እንዴት እንደተገናኛችሁ ንገረኝ።",
          notes: ""
        },
        {
          id: "p10-7",
          speaker: "Vladek",
          speakerAm: "ቭላዴክ (አባት)",
          role: "dialogue",
          en: "BETTER YOU SHOULD SPEND YOUR TIME TO MAKE DRAWINGS WHAT WILL BRING YOU SOME MONEY...",
          am: "ጊዜህን ገንዘብ በሚያስገኙልህ ስዕሎች ላይ ብታውለው ይሻልሃል...",
          notes: ""
        },
        {
          id: "p10-8",
          speaker: "Vladek",
          speakerAm: "ቭላዴክ (አባት)",
          role: "dialogue",
          en: "BUT, IF YOU WANT, I CAN TELL YOU... I LIVED THEN IN CZESTOCHOWA, A SMALL CITY NOT FAR FROM THE BORDER OF GERMANY...",
          am: "ግን ከፈለግክ ልነግርህ እችላለሁ... ያኔ የምኖረው ከጀርመን ድንበር ብዙም በማትርቀው በቼስቶኮቫ (Czestochowa) በምትባል ትንሽ ከተማ ውስጥ ነበር...",
          notes: "Częstochowa is a city in southern Poland near Silesia."
        },
        {
          id: "p10-9",
          speaker: "Vladek",
          speakerAm: "ቭላዴክ (አባት)",
          role: "narration",
          en: "I WAS IN TEXTILES—BUYING AND SELLING—I DIDN'T MAKE MUCH, BUT ALWAYS I COULD MAKE A LIVING.",
          am: "በጨርቃ ጨርቅ ንግድ ውስጥ ነበርኩ—እገዛለሁ እሸጣለሁ—ብዙ ባላተርፍም፣ ሁልጊዜም ቢሆን ራሴን የማስተዳድርበት ገቢ ነበረኝ።",
          notes: "Vladek recalls his early days as a dashing young salesman before the shadow of war fell."
        }
      ]
    },

    // -------------------------------------------------------------
    // BATCH 2: PAGES 11 - 20 (Chapter 1 Conclusion)
    // -------------------------------------------------------------
    {
      pageNumber: 11,
      bookPageLabel: "Page 13 (Chapter 1, Comic Page 3)",
      amharicLabel: "ገጽ 13 (ምዕራፍ 1 - ገጽ 3)",
      image: "images/page_11.webp",
      type: "comic",
      summaryEn: "Young Vladek is handsome and popular with women in Częstochowa. A friend introduces him to Lucia Greenberg.",
      summaryAm: "ወጣቱ ቭላዴክ በቼስቶኮቫ እጅግ ማራኪና በሴቶች ዘንድ ተወዳጅ ነበር። አንድ ጓደኛው ከሉቺያ ግሪንበርግ ጋር ያስተዋውቀዋል።",
      panels: [
        {
          id: "p11-1",
          speaker: "Vladek (Narrator)",
          speakerAm: "ቭላዴክ (ተራኪ)",
          role: "narration",
          en: "I WAS, AT THAT TIME, YOUNG, AND REALLY A NICE, HANDSOME BOY.",
          am: "በዚያን ጊዜ ወጣት ነበርኩ፤ በእውነቱ በጣም ቆንጆ እና ማራኪ ልጅ ነበርኩ።",
          notes: ""
        },
        {
          id: "p11-2",
          speaker: "Vladek (Narrator)",
          speakerAm: "ቭላዴክ (ተራኪ)",
          role: "narration",
          en: "I HAD A LOT OF GIRLS WHAT I DIDN'T EVEN KNOW THAT WOULD RUN AFTER ME. (RRING!)",
          am: "የማላውቃቸው በርካታ ሴቶች እንኳን ሳይቀሩ ይከተሉኝ ነበር። (የስልክ ደወል!)",
          notes: ""
        },
        {
          id: "p11-3",
          speaker: "Yulek (on phone)",
          speakerAm: "ዩሌክ (በስልክ)",
          role: "dialogue",
          en: "HELLO, VLADEK? THIS IS YULEK...",
          am: "ሄሎ ቭላዴክ? ዩሌክ ነኝ...",
          notes: ""
        },
        {
          id: "p11-4",
          speaker: "Yulek",
          speakerAm: "ዩሌክ",
          role: "dialogue",
          en: "A FRIEND OF MINE, LUCIA GREENBERG, WOULD LIKE TO BE INTRODUCED TO YOU.",
          am: "ሉቺያ ግሪንበርግ የምትባል ጓደኛዬ ከአንተ ጋር መተዋወቅ ትፈልጋለች።",
          notes: ""
        },
        {
          id: "p11-5",
          speaker: "Vladek",
          speakerAm: "ቭላዴክ (አባት)",
          role: "dialogue",
          en: "PEOPLE ALWAYS TOLD ME I LOOKED JUST LIKE RUDOLPH VALENTINO.",
          am: "ሰዎች ሁልጊዜም ልክ እንደ ሩዶልፍ ቫለንቲኖ (Rudolph Valentino) እንደምመስል ይነግሩኝ ነበር።",
          notes: "Rudolph Valentino was the ultimate 1920s Hollywood romantic heartthrob, famous for the film 'The Sheik'."
        },
        {
          id: "p11-6",
          speaker: "Lucia",
          speakerAm: "ሉቺያ",
          role: "dialogue",
          en: "EVENTUALLY, I TOOK LUCIA TO DANCE... 'DO YOU LIVE ALONE?' — 'YES.'",
          am: "በመጨረሻም ሉቺያን ዳንስ ይዣት ሄድኩ... «ብቻህን ነው የምትኖረው?» — «አዎ።»",
          notes: ""
        },
        {
          id: "p11-7",
          speaker: "Vladek & Lucia",
          speakerAm: "ቭላዴክ እና ሉቺያ",
          role: "dialogue",
          en: "VLADEK: 'I HAVE A SMALL APARTMENT. MY PARENTS MOVED TO SOSNOWIEC.' — LUCIA: 'I'D LIKE TO SEE IT SOMETIME.' — VLADEK: 'MAYBE SOMETIME.'",
          am: "ቭላዴክ፦ «ትንሽ አፓርታማ አለኝ፤ ወላጆቼ ወደ ሶስኖቪየክ ተዛውረዋል።» — ሉቺያ፦ «አንድ ቀን አይቼው ብጎበኘው ደስ ይለኛል።» — ቭላዴክ፦ «ምናልባት ሌላ ጊዜ።»",
          notes: ""
        }
      ]
    },
    {
      pageNumber: 12,
      bookPageLabel: "Page 14 (Chapter 1, Comic Page 4)",
      amharicLabel: "ገጽ 14 (ምዕራፍ 1 - ገጽ 4)",
      image: "images/page_12.webp",
      type: "comic",
      summaryEn: "Lucia clings to Vladek wherever he goes and insists on visiting his apartment.",
      summaryAm: "ሉቺያ ቭላዴክ በሄደበት ሁሉ ትከተለዋለች፤ ቤቱን እንድታይ እንዲጋብዛት አጥብቃ ትወተውተዋለች።",
      panels: [
        {
          id: "p12-1",
          speaker: "Vladek & Lucia",
          speakerAm: "ቭላዴክ እና ሉቺያ",
          role: "dialogue",
          en: "WHEREVER I WENT — I LOOKED AROUND — AND LUCIA GREENBERG WOULD BE ALSO THERE... 'VLADEK!—WHICH WAY ARE YOU GOING?' — 'JUST TO THE MARKET.' — 'ME TOO—LET'S WALK TOGETHER.'",
          am: "በሄድኩበት ሁሉ—ዙሪያዬን ስመለከት—ሉቺያ ግሪንበርግ እዚያው ትገኛለች... «ቭላዴክ! ወዴት እየሄድክ ነው?» — «ወደ ገበያ።» — «እኔም እዚያው ነኝ—አብረን እንሂድ።»",
          notes: ""
        },
        {
          id: "p12-2",
          speaker: "Artie",
          speakerAm: "አርቲ",
          role: "dialogue",
          en: "BUT, POP... MOM'S NAME WAS ANNA ZYLBERBERG!...",
          am: "ግን አባዬ... የእናቴ ስም እኮ አና ዚልበርበርግ አይደል?!...",
          notes: "Artie is confused because he expected to hear the story of his mother, Anja."
        },
        {
          id: "p12-3",
          speaker: "Vladek",
          speakerAm: "ቭላዴክ (አባት)",
          role: "dialogue",
          en: "ALL THIS WAS BEFORE I MET ANJA—JUST LISTEN, YES?",
          am: "ይህ ሁሉ የሆነው እናትህን አንጃን ከማግኘቴ በፊት ነው—ዝም ብለህ አድምጠኝ፣ እሺ?",
          notes: ""
        },
        {
          id: "p12-4",
          speaker: "Lucia",
          speakerAm: "ሉቺያ",
          role: "dialogue",
          en: "WHY DON'T YOU EVER INVITE ME TO YOUR HOME?... ARE YOU ASHAMED OF IT? (SHE KEPT INSISTING ME TO SHOW HER MY APARTMENT...)",
          am: "ለምን አንዴም ወደ ቤትህ አትጋብዘኝም?... በቤትህ ታፍራለህ እንዴ? (አፓርታማዬን እንዳሳያት አጥብቃ ትወተውተኝ ነበር...)",
          notes: ""
        },
        {
          id: "p12-5",
          speaker: "Vladek & Lucia",
          speakerAm: "ቭላዴክ እና ሉቺያ",
          role: "dialogue",
          en: "—SO FINALLY, I INVITED HER... 'EVERYTHING'S SO NEAT AND CLEAN!' — 'I LIKE TO KEEP THINGS IN ORDER.'",
          am: "—በመጨረሻም ጋበዝኳት... «ሁሉም ነገር በጣም ፅዱና የተስተካከለ ነው!» — «እኔ ነገሮችን በስርዓት ማስቀመጥ እወዳለሁ።»",
          notes: ""
        },
        {
          id: "p12-6",
          speaker: "Lucia & Vladek",
          speakerAm: "ሉቺያ እና ቭላዴክ",
          role: "dialogue",
          en: "LUCIA: 'YOU MUST HAVE ANOTHER GIRL-FRIEND WHO CLEANS FOR YOU—NO?' — VLADEK: 'NO.' (...I DIDN'T WANT TO BE MORE CLOSER WITH HER, BUT SHE REALLY WOULDN'T LET ME GO.)",
          am: "ሉቺያ፦ «ቤትህን የምታጸዳልህ ሌላ ፍቅረኛ አለችህ ማለት ነው—አይደል?» — ቭላዴክ፦ «በፍጹም።» (...ከእሷ ጋር ይበልጥ መቀራረብ አልፈለግኩም ነበር፤ እርሷ ግን በፍጹም ልትተወኝ አልቻለችም።)",
          notes: ""
        }
      ]
    },
    {
      pageNumber: 13,
      bookPageLabel: "Page 15 (Chapter 1, Comic Page 5)",
      amharicLabel: "ገጽ 15 (ምዕራፍ 1 - ገጽ 5)",
      image: "images/page_13.webp",
      type: "comic",
      summaryEn: "Vladek stays with Lucia for several years despite having no intention to marry. In December 1935, a cousin tells him about Anja.",
      summaryAm: "ቭላዴክ የመጋባት ሃሳብ ሳይኖረው ከሉቺያ ጋር ለዓመታት ይቆያል። በታህሳስ 1935 የአጎቱ ልጅ ስለ አንጃ ይነግረዋል።",
      panels: [
        {
          id: "p13-1",
          speaker: "Artie & Vladek",
          speakerAm: "አርቲ እና ቭላዴክ",
          role: "dialogue",
          en: "ARTIE: 'WAS SHE THE FIRST GIRL YOU—UH—' — VLADEK: 'YES... WE WERE MORE INVOLVED, SO LIKE THE YOUTHS HERE TODAY.'",
          am: "አርቲ፦ «የመጀመሪያዋ አብረሃት የተኛህ ልጅ እርሷ ነበረች?...» — ቭላዴክ፦ «አዎ... የዛሬ ወጣቶች እንደሚያደርጉት ይበልጥ ተቀራርበን ነበር።»",
          notes: "Artie delicately asks about Vladek's sexual history, and Vladek candidly confirms."
        },
        {
          id: "p13-2",
          speaker: "Lucia & Vladek",
          speakerAm: "ሉቺያ እና ቭላዴክ",
          role: "dialogue",
          en: "WE SAW EACH OTHER TOGETHER FOR MAYBE THREE OR FOUR YEARS. LUCIA: 'LET'S GET ENGAGED, VLADEK.' — VLADEK: 'IT'S LATE. I'LL TAKE YOU HOME.'",
          am: "ለሦስት ወይም ለአራት ዓመታት ያህል አብረን ተያየን። ሉቺያ፦ «እንጋባ እንጂ ቭላዴክ።» — ቭላዴክ፦ «መሽቷል፣ ወደ ቤትሽ ልሸኝሽ።»",
          notes: ""
        },
        {
          id: "p13-3",
          speaker: "Lucia & Vladek",
          speakerAm: "ሉቺያ እና ቭላዴክ",
          role: "dialogue",
          en: "LUCIA: 'NOT YET, PLEASE.' — VLADEK: 'COME ON—YOUR PARENTS WOULD WORRY.' (HER FAMILY WAS NICE, BUT HAD NO MONEY, EVEN FOR A DOWRY.)",
          am: "ሉቺያ፦ «ገና ነው እባክህ።» — ቭላዴክ፦ «ተነሺ እንጂ—ወላጆችሽ ይጨነቃሉ እኮ።» (ቤተሰቦቿ ጥሩ ሰዎች ነበሩ፤ ነገር ግን ለጥሎሽ የሚሆን ምንም ገንዘብ አልነበራቸውም።)",
          notes: "Dowry was a major cultural and economic expectation among European Jewish families before the war."
        },
        {
          id: "p13-4",
          speaker: "Vladek (Narrator)",
          speakerAm: "ቭላዴክ (ተራኪ)",
          role: "narration",
          en: "DECEMBER 1935. WELL, EVERY HOLIDAY I WENT TO VISIT MY FAMILY... IT WAS MAYBE A JOURNEY OF 35 OR 40 MILES. CZESTOCHOWA / SOSNOWIEC. 'COUSIN VLADEK!'",
          am: "ታህሳስ 1935። በበዓላት ወቅት ቤተሰቦቼን ለመጠየቅ እሄድ ነበር... የ35 ወይም 40 ማይል ጉዞ ነበር። ከቼስቶኮቫ ወደ ሶስኖቪየክ። «የአጎቴ ልጅ ቭላዴክ!»",
          notes: ""
        },
        {
          id: "p13-5",
          speaker: "Cousin",
          speakerAm: "የአጎቱ ልጅ",
          role: "dialogue",
          en: "IT'S GOOD TO SEE YOU AGAIN. LISTEN...",
          am: "እንደገና በማየቴ ደስ ብሎኛል! ስማኝማ...",
          notes: ""
        },
        {
          id: "p13-6",
          speaker: "Cousin",
          speakerAm: "የአጎቱ ልጅ",
          role: "dialogue",
          en: "THERE'S A GIRL IN MY CLASS—I WANT YOU TO MEET US TOMORROW—HER NAME IS ANJA.",
          am: "በክፍሌ ውስጥ የምትማር አንዲት ልጅ አለች—ነገ እንድታገኛት እፈልጋለሁ—ስሟ አንጃ ይባላል።",
          notes: ""
        },
        {
          id: "p13-7",
          speaker: "Cousin",
          speakerAm: "የአጎቱ ልጅ",
          role: "dialogue",
          en: "SHE'S INCREDIBLY CLEVER, FROM A RICH FAMILY... A VERY GOOD GIRL...",
          am: "እጅግ በጣም ብልህ ናት፤ ከሃብታም ቤተሰብ የተገኘች... በጣም መልካም ልጅ ናት...",
          notes: ""
        }
      ]
    },
    {
      pageNumber: 14,
      bookPageLabel: "Page 16 (Chapter 1, Comic Page 6)",
      amharicLabel: "ገጽ 16 (ምዕራፍ 1 - ገጽ 6)",
      image: "images/page_14.webp",
      type: "comic",
      summaryEn: "Vladek meets Anja. When Anja and the cousin speak in English, Vladek surprises them by answering in fluent English.",
      summaryAm: "ቭላዴክ ከአንጃ ጋር ይገናኛል። አንጃ እና ዘመዱ በእንግሊዝኛ ሲያወሩ ቭላዴክ በእንግሊዝኛ መልስ ሰጥቶ ያስደምማቸዋል።",
      panels: [
        {
          id: "p14-1",
          speaker: "Cousin & Anja",
          speakerAm: "የአጎት ልጅ እና አንጃ",
          role: "dialogue",
          en: "THE NEXT MORNING WE ALL MET TOGETHER. MY COUSIN AND ANJA SPOKE SOMETIMES IN ENGLISH. COUSIN: 'HOW YOU LIKE HIM?' — ANJA: 'HE'S A HANDSOME BOY AND SEEMS VERY NICE.' (THEY COULDN'T KNOW I UNDERSTOOD.)",
          am: "በማግስቱ ጠዋት ሁላችንም አብረን ተገናኘን። የአጎቴ ልጅና አንጃ አልፎ አልፎ በእንግሊዝኛ ያወሩ ነበር። ዘመዱ፦ «እንዴት አየሽው ወደድሽው?» — አንጃ፦ «ቆንጆ ልጅ ነው፣ በጣምም ደግ ይመስላል።» (እኔ እንደገባኝ ሊያውቁ አልቻሉም ነበር።)",
          notes: "Speaking English in 1930s Poland was a sign of high bourgeois education and sophistication."
        },
        {
          id: "p14-2",
          speaker: "Cousin",
          speakerAm: "የአጎቱ ልጅ",
          role: "dialogue",
          en: "WELL—I PROMISED TO BE HOME EARLY... I'LL LEAVE YOU TWO ALONE.",
          am: "እንግዲህ—በጊዜ ወደ ቤት እመለሳለሁ ብዬ ቃል ገብቻለሁ... ሁለታችሁን ብቻችሁን ልተዋችሁ።",
          notes: ""
        },
        {
          id: "p14-3",
          speaker: "Vladek & Anja",
          speakerAm: "ቭላዴክ እና አንጃ",
          role: "dialogue",
          en: "VLADEK: 'YOU KNOW, YOU SHOULD BE CAREFUL SPEAKING ENGLISH— A \"STRANGER\" COULD UNDERSTAND.' — ANJA: 'Y-YOU KNOW ENGLISH?'",
          am: "ቭላዴክ፦ «እንግሊዝኛ ስታወሩ መጠንቀቅ እንዳለባችሁ ታውቂያለሽ—ማንም \"ባዳ\" ሰው ሊረዳው ይችላልና።» — አንጃ፦ «እ-እንግሊዝኛ ታውቃለህ እንዴ?!»",
          notes: ""
        },
        {
          id: "p14-4",
          speaker: "Anja & Vladek",
          speakerAm: "አንጃ እና ቭላዴክ",
          role: "dialogue",
          en: "ANJA: 'DID YOU STUDY IT IN SCHOOL?' — VLADEK: 'I HAD TO QUIT SCHOOL AT ABOUT 14 TO WORK.'",
          am: "አንጃ፦ «በትምህርት ቤት ነው የተማርከው?» — ቭላዴክ፦ «በ14 ዓመቴ አካባቢ ለመስራት ስል ትምህርቴን አቋርጬ ነበር።»",
          notes: ""
        },
        {
          id: "p14-5",
          speaker: "Vladek",
          speakerAm: "ቭላዴክ (አባት)",
          role: "dialogue",
          en: "...BUT I TOOK PRIVATE LESSONS... I ALWAYS DREAMED OF GOING TO AMERICA.",
          am: "...ነገር ግን የግል ትምህርት ወስጄ ነበር... ሁልጊዜም ወደ አሜሪካ የመሄድ ህልም ነበረኝ።",
          notes: "A bittersweet premonition: Vladek's dream of America would only come after the nightmare of Auschwitz."
        },
        {
          id: "p14-6",
          speaker: "Anja & Vladek",
          speakerAm: "አንጃ እና ቭላዴክ",
          role: "dialogue",
          en: "ANJA: 'IT'S A SHAME YOU HAVE TO RETURN TO CZESTOCHOWA SO SOON.' — VLADEK: 'YES. BUT I HAVE MY BUSINESS.'",
          am: "አንጃ፦ «ወደ ቼስቶኮቫ በቶሎ መመለስህ ያሳዝናል።» — ቭላዴክ፦ «አዎ፣ ነገር ግን ስራዬ እዚያ ነው።»",
          notes: ""
        },
        {
          id: "p14-7",
          speaker: "Anja & Vladek",
          speakerAm: "አንጃ እና ቭላዴክ",
          role: "dialogue",
          en: "ANJA: 'HAVE YOU A PHONE AT HOME?' (AS SOON I CAME BACK TO CZESTOCHOWA, SHE CALLED — ONCE A DAY... TWICE... EVERY DAY WE TALKED.)",
          am: "አንጃ፦ «ቤትህ ስልክ አለህ?» (ልክ ወደ ቼስቶኮቫ እንደተመለስኩ ትደውልልኝ ጀመር—በቀን አንድ ጊዜ... ሁለት ጊዜ... በየቀኑ እናወራ ነበር።)",
          notes: ""
        }
      ]
    },
    {
      pageNumber: 15,
      bookPageLabel: "Page 17 (Chapter 1, Comic Page 7)",
      amharicLabel: "ገጽ 17 (ምዕራፍ 1 - ገጽ 7)",
      image: "images/page_15.webp",
      type: "comic",
      summaryEn: "Anja sends poetic letters and a photograph. Lucia arrives, sees the framed photo, and makes a furious scene.",
      summaryAm: "አንጃ ልብ-ነኪ ደብዳቤዎችን እና ፎቶዋን ትልክለታለች። ሉቺያ መጥታ ፎቶውን ስታይ እጅግ ተበሳጭታ ጠብ ታነሳለች።",
      panels: [
        {
          id: "p15-1",
          speaker: "Vladek",
          speakerAm: "ቭላዴክ (አባት)",
          role: "narration",
          en: "AND THEN SHE STARTED WRITING TO ME SUCH BEAUTIFUL LETTERS— ALMOST NOBODY COULD WRITE POLISH LIKE SHE WROTE.",
          am: "ከዚያም እጅግ የሚያማምሩ ደብዳቤዎችን ትጽፍልኝ ጀመር—እንደ እርሷ አድርጎ ፖላንድኛ መጻፍ የሚችል ማንም ሰው አልነበረም ማለት ይቻላል።",
          notes: "Anja was highly cultivated, passionate about literature, and translated documents into Polish and German."
        },
        {
          id: "p15-2",
          speaker: "Vladek",
          speakerAm: "ቭላዴክ (አባት)",
          role: "narration",
          en: "I VISITED A COUPLE TIMES TO HER. SHE SENT ME A PHOTO... I BOUGHT A VERY NICE FRAME...",
          am: "ሁለት ጊዜ ያህል ጎበኘኋት። ፎቶዋን ላከችልኝ... የሚያምር ፍሬም ገዛሁለት...",
          notes: ""
        },
        {
          id: "p15-3",
          speaker: "Lucia & Vladek",
          speakerAm: "ሉቺያ እና ቭላዴክ",
          role: "dialogue",
          en: "IT PASSED MAYBE A WEEK UNTIL LUCIA AGAIN CAME AND SAW THE PHOTO... VLADEK: 'I'M GOING TO GET ENGAGED TO HER, LUCIA.' — LUCIA: 'PSSH! AND LOOK AT WHAT A BEAUTY YOU PICKED.'",
          am: "አንድ ሳምንት ያህል ሳያልፍ ሉቺያ በድጋሚ መጥታ ፎቶውን አየችው... ቭላዴክ፦ «ከእርሷ ጋር ልታጭ ነው ሉቺያ።» — ሉቺያ፦ «ፕሽ! ደግሞ የመረጥካትን ቆንጆ እይላት እስቲ!»",
          notes: ""
        },
        {
          id: "p15-4",
          speaker: "Vladek",
          speakerAm: "ቭላዴክ (አባት)",
          role: "dialogue",
          en: "LOOKS AREN'T EVERYTHING, LUCIA. IT ISN'T GOOD FOR EITHER OF US THAT YOU KEEP COMING UP HERE...",
          am: "ውበት ሁሉም ነገር አይደለም ሉቺያ። ሁልጊዜ እዚህ እየመጣሽ መወትወትሽ ለሁለታችንም ጥሩ አይደለም...",
          notes: ""
        },
        {
          id: "p15-5",
          speaker: "Vladek & Lucia",
          speakerAm: "ቭላዴክ እና ሉቺያ",
          role: "dialogue",
          en: "VLADEK: '...WE HAVE TO PLAN FOR OUR FUTURES, AND—' — LUCIA: 'FORGET HER! LET ME MAKE YOU HAPPY!' (IT WAS NOT SO EASY TO GET FREE FROM LUCIA.)",
          am: "ቭላዴክ፦ «...ለወደፊት ህይወታችን ማቀድ አለብን...» — ሉቺያ፦ «እርሷን እርሳት! እኔ ደስተኛ ላድርግህ!» (...ከሉቺያ እጅ መላቀቅ ያን ያህል ቀላል አልነበረም።)",
          notes: ""
        }
      ]
    },
    {
      pageNumber: 16,
      bookPageLabel: "Page 18 (Chapter 1, Comic Page 8)",
      amharicLabel: "ገጽ 18 (ምዕራፍ 1 - ገጽ 8)",
      image: "images/page_16.webp",
      type: "comic",
      summaryEn: "Vladek falls deeply in love with Anja's intelligence. Her school director praises her, and Vladek is invited to meet her wealthy family.",
      summaryAm: "ቭላዴክ በአንጃ አዕምሮ እና ቅንነት ፍቅር ይወድቃል። የትምህርት ቤት ዳይሬክተሯ ያመሰግናታል፤ ወደ ሃብታም ቤተሰቧ እራት ይጋበዛል።",
      panels: [
        {
          id: "p16-1",
          speaker: "Artie & Vladek",
          speakerAm: "አርቲ እና ቭላዴክ",
          role: "dialogue",
          en: "ARTIE: 'MOM WASN'T THAT ATTRACTIVE, HUH?' — VLADEK: 'NOT SO LIKE LUCIA... BUT IF YOU TALKED A LITTLE TO HER, YOU STARTED LOVING HER MORE AND MORE.'",
          am: "አርቲ፦ «እማማ ያን ያህል ቆንጆ አልነበረችም ማለት ነው?» — ቭላዴክ፦ «እንደ ሉቺያ አልነበረችም... ነገር ግን ትንሽ ካወራሃት በኋላ ይበልጥ ወደድካት ነበር።»",
          notes: ""
        },
        {
          id: "p16-2",
          speaker: "School Director",
          speakerAm: "የትምህርት ቤቱ ዳይሬክተር",
          role: "dialogue",
          en: "ONE TIME WE WALKED INTO THE DIRECTOR FROM HER SCHOOL... 'YOU'RE VERY LUCKY, MR. SPIEGELMAN...'",
          am: "አንድ ቀን ከትምህርት ቤቷ ዳይሬክተር ጋር ተገናኘን... «አቶ ስፒገልማን፣ በጣም እድለኛ ነዎት...»",
          notes: ""
        },
        {
          id: "p16-3",
          speaker: "School Director",
          speakerAm: "የትምህርት ቤቱ ዳይሬክተር",
          role: "dialogue",
          en: "...YOU DON'T KNOW WHAT A GIRL YOU'RE GETTING—I'VE HAD MANY STUDENTS...",
          am: "...ምን ዓይነት ምርጥ ልጅ እንዳገኙ አያውቁም—ብዙ ተማሪዎች አስተምሬያለሁ...",
          notes: ""
        },
        {
          id: "p16-4",
          speaker: "School Director & Vladek",
          speakerAm: "ዳይሬክተር እና ቭላዴክ",
          role: "dialogue",
          en: "DIRECTOR: '...BUT NEVER ONE AS SENSITIVE AND INTELLIGENT AS ANNA!' — VLADEK: 'YES—THAT'S WHY I PICKED HER.'",
          am: "ዳይሬክተር፦ «...ነገር ግን እንደ አና አስተዋይና ልበ-ጥሩ የሆነ ተማሪ አጋጥሞኝ አያውቅም!» — ቭላዴክ፦ «አዎ—የመረጥኳትም ለዚህ ነው አልኩት።»",
          notes: ""
        },
        {
          id: "p16-5",
          speaker: "Vladek",
          speakerAm: "ቭላዴክ (አባት)",
          role: "dialogue",
          en: "I WISH YOU COULD VISIT ME IN CZESTOCHOWA—I'D LIKE TO SHOW YOU OFF TO MY FRIENDS.",
          am: "በቼስቶኮቫ መጥተሽ ብትጎበኚኝ ደስ ይለኝ ነበር—ለጓደኞቼ ላሳይሽ እፈልጋለሁ።",
          notes: ""
        },
        {
          id: "p16-6",
          speaker: "Anja",
          speakerAm: "አንጃ",
          role: "dialogue",
          en: "I'VE BEGGED MY MOTHER TO LET ME GO—BUT SHE'S SO RELIGIOUS AND OLD-FASHIONED.",
          am: "እናቴ እንድሄድ እንድትፈቅድልኝ ተማጽኛት ነበር—ነገር ግን እጅግ ሃይማኖተኛ እና የድሮ አስተሳሰብ ያላት ናት...",
          notes: ""
        },
        {
          id: "p16-7",
          speaker: "Anja & Vladek",
          speakerAm: "አንጃ እና ቭላዴክ",
          role: "dialogue",
          en: "ANJA: '...SHE WOULD NEVER ALLOW ME TO GO TO A BACHELOR'S APARTMENT!' (ANJA'S PARENTS WERE ANXIOUS SHE SHOULD BE MARRIED. SHE WAS 24; I WAS THEN 30.)",
          am: "አንጃ፦ «...ወደ ጎልማሳ ወንድ አፓርታማ እንድሄድ በፍጹም አትፈቅድልኝም!» (የአንጃ ወላጆች ባል እንድታገባ በጣም ይጨነቁ ነበር። እርሷ የ24 ዓመት ወጣት ነበረች፤ እኔ ደግሞ የ30 ዓመት ጎልማሳ ነበርኩ።)",
          notes: ""
        },
        {
          id: "p16-8",
          speaker: "Anja",
          speakerAm: "አንጃ",
          role: "dialogue",
          en: "OH, MY PARENTS WOULD LIKE YOU TO COME TO DINNER TOMORROW NIGHT. (THE ZYLBERBERG FAMILY WAS VERY WELL OFF—MILLIONAIRES!)",
          am: "ነገ ማታ ወደ እራት ግብዣችን እንድትመጣ ወላጆቼ ይፈልጋሉ። (የዚልበርበርግ ቤተሰቦች እጅግ በጣም ሃብታሞች—ሚሊየነሮች ነበሩ!)",
          notes: ""
        }
      ]
    },
    {
      pageNumber: 17,
      bookPageLabel: "Page 19 (Chapter 1, Comic Page 9)",
      amharicLabel: "ገጽ 19 (ምዕራፍ 1 - ገጽ 9)",
      image: "images/page_17.webp",
      type: "comic",
      summaryEn: "Vladek visits the opulent Zylberberg home, inspects Anja's closet, finds pills, and moves to Sosnowiec after their engagement.",
      summaryAm: "ቭላዴክ ወደ ሃብታሙ የዚልበርበርግ መኖሪያ ቤት ይሄዳል፤ የአንጃን ቁምሳጥን ሲፈትሽ ክኒኖች ያገኛል፤ ከታጩም በኋላ ወደ ሶስኖቪየክ ይዛወራል።",
      panels: [
        {
          id: "p17-1",
          speaker: "Zylberberg Parents",
          speakerAm: "የአንጃ ወላጆች",
          role: "dialogue",
          en: "THE ZYLBERBERGS HAD A HOSIERY FACTORY—ONE OF THE BIGGEST IN POLAND... BUT WHEN I CAME IN TO THEIR HOUSE IT WAS SO LIKE A KING CAME... 'WELCOME, WELCOME. ANJA—VLADEK IS HERE!'",
          am: "የዚልበርበርግ ቤተሰቦች በፖላንድ ውስጥ ካሉት ታላላቅ የካልሲ እና የጨርቃ ጨርቅ ፋብሪካዎች አንዱ ባለቤት ነበሩ... ወደ ቤታቸው ስገባ ልክ እንደ ንጉስ አድርገው ተቀበሉኝ... «እንኳን ደህና መጣህ፣ እንኳን ደህና መጣህ። አና—ቭላዴክ መጥቷል!»",
          notes: ""
        },
        {
          id: "p17-2",
          speaker: "Anja",
          speakerAm: "አንጃ",
          role: "dialogue",
          en: "MAKE YOURSELF COMFORTABLE WHILE I HELP WITH THE DINNER.",
          am: "እኔ እራቱን እስከማዘጋጅ ድረስ ዘና በል ተቀመጥ።",
          notes: ""
        },
        {
          id: "p17-3",
          speaker: "Vladek",
          speakerAm: "ቭላዴክ (አባት)",
          role: "dialogue",
          en: "TO SEE WHAT A HOUSEKEEPER SHE WAS, I PEEKED INTO ANJA'S CLOSET. 'EVERYTHING IS NEAT AND STRAIGHT JUST THE WAY I LIKE IT!'",
          am: "ምን ዓይነት የቤት እመቤት እንደሆነች ለማየት ወደ አንጃ ቁምሳጥን ውስጥ አጮልቄ አየሁ። «ሁሉም ነገር ልክ እንደምወደው በስርዓት የተስተካከለና ፅዱ ነው!»",
          notes: "Vladek's practical, meticulous nature shows through even in romance."
        },
        {
          id: "p17-4",
          speaker: "Vladek",
          speakerAm: "ቭላዴክ (አባት)",
          role: "dialogue",
          en: "BUT WHAT'S THIS—PILLS?! (I WROTE DOWN EVERY PILL.)",
          am: "ግን ይህ ምንድን ነው—ክኒኖች?! (የእያንዳንዱን ክኒን ስም ጻፍኩት።)",
          notes: ""
        },
        {
          id: "p17-5",
          speaker: "Vladek & Anja",
          speakerAm: "ቭላዴክ እና አንጃ",
          role: "dialogue",
          en: "VLADEK: 'IF SHE WAS SICK, THEN WHAT DID I NEED IT FOR?' — ANJA: 'DINNER IS READY!'",
          am: "ቭላዴክ፦ «የታመመች ከሆነ ለምን አስፈለገኝ ብዬ አሰብኩ።» — አንጃ፦ «እራቱ ደርሷል!»",
          notes: ""
        },
        {
          id: "p17-6",
          speaker: "Anja's Father & Vladek",
          speakerAm: "የአንጃ አባት እና ቭላዴክ",
          role: "dialogue",
          en: "LATER, A FRIEND, A DRUGGIST, TOLD ME THE PILLS WERE ONLY BECAUSE SHE WAS SO SKINNY AND NERVOUS. FATHER: 'HOW ABOUT SOME MORE GEFILTE FISH, VLADEK?' (SO, TO MAKE A LONG STORY SHORT, BY THE END OF 1936 WE WERE ENGAGED AND I MOVED FROM CZESTOCHOWA TO SOSNOWIEC.)",
          am: "በኋላ ላይ አንድ ፋርማሲስት ጓደኛዬ ክኒኖቹ የተሰጧት በጣም ቀጭን እና ጭንቀት ስለሚበዛባት ብቻ እንደሆነ ነገረኝ። አባት፦ «ትንሽ ተጨማሪ ጌፊልቴ አሳ (Gefilte fish) ልጨምርልህ ቭላዴክ?» (እናም ታሪኩን ባጭሩ ለማድረግ፣ በ1936 ማብቂያ ላይ ታጨን፤ እኔም ከቼስቶኮቫ ወደ ሶስኖቪየክ ተዛወርኩ።)",
          notes: "Gefilte fish is a traditional Ashkenazi Jewish dish served on Shabbat and holidays."
        }
      ]
    },
    {
      pageNumber: 18,
      bookPageLabel: "Page 20 (Chapter 1, Comic Page 10)",
      amharicLabel: "ገጽ 20 (ምዕራፍ 1 - ገጽ 10)",
      image: "images/page_18.webp",
      type: "comic",
      summaryEn: "Lucia ambushes Vladek at his apartment, drops to the floor clinging to his legs, begging him not to leave her for Anja.",
      summaryAm: "ሉቺያ በቭላዴክ አፓርታማ ድንገት በመገኘት መሬት ላይ ተደፍታ እግሮቹን አጥብቃ በመያዝ ከአንጃ ጋር እንዳይጋባ በለቅሶ ትለምነዋለች።",
      panels: [
        {
          id: "p18-1",
          speaker: "Vladek",
          speakerAm: "ቭላዴክ (አባት)",
          role: "narration",
          en: "ACH! HERE I FORGOT TO TELL SOMETHING FROM BEFORE I MOVED TO SOSNOWIEC BUT AFTER OUR ENGAGEMENT WAS MADE.",
          am: "አኽ! ወደ ሶስኖቪየክ ከመዛወሬ በፊት ነገር ግን ከታጨን በኋላ የሆነውን አንድ ነገር መናገር ረሳሁት።",
          notes: ""
        },
        {
          id: "p18-2",
          speaker: "Vladek",
          speakerAm: "ቭላዴክ (አባት)",
          role: "dialogue",
          en: "ONE EVENING THE BELL RANG... 'LUCIA!'",
          am: "አንድ ምሽት የበር ደወል ተደወለ... «ሉቺያ!»",
          notes: ""
        },
        {
          id: "p18-3",
          speaker: "Vladek & Lucia",
          speakerAm: "ቭላዴክ እና ሉቺያ",
          role: "dialogue",
          en: "VLADEK: 'WHAT ARE YOU DOING HERE? I'M ON MY WAY OUT.' — LUCIA: 'I-I'LL COME WITH YOU.'",
          am: "ቭላዴክ፦ «እዚህ ምን ታደርጊያለሽ? እኔ ልወጣ እኮ ነው።» — ሉቺያ፦ «እ-እኔም ከአንተ ጋር እመጣለሁ።»",
          notes: ""
        },
        {
          id: "p18-4",
          speaker: "Vladek & Lucia",
          speakerAm: "ቭላዴክ እና ሉቺያ",
          role: "dialogue",
          en: "VLADEK: 'NO, YOU CAN'T COME WI—' — LUCIA: 'PLEASE, VLADEK!'",
          am: "ቭላዴክ፦ «አይ፣ ከአኔ ጋር መምጣት አትችይም—» — ሉቺያ፦ «እባክህ ቭላዴክ!»",
          notes: ""
        },
        {
          id: "p18-5",
          speaker: "Vladek (Narrator)",
          speakerAm: "ቭላዴክ (ተራኪ)",
          role: "narration",
          en: "SHE FELL ON THE FLOOR AND HELD STRONG MY LEGS.",
          am: "መሬት ላይ ወደቀችና እግሮቼን አጥብቃ ያዘችኝ።",
          notes: "This panel directly mirrors the iconic Chapter 1 title image 'The Sheik' where Lucia clings to Vladek's leg."
        },
        {
          id: "p18-6",
          speaker: "Lucia & Vladek",
          speakerAm: "ሉቺያ እና ቭላዴክ",
          role: "dialogue",
          en: "LUCIA: 'DON'T RUN AWAY!' (I SAW NOW THAT I WENT TOO FAR WITH HER.)",
          am: "ሉቺያ፦ «አትሩጥ አትተወኝ!» (ከእርሷ ጋር ድንበር እንዳለፍኩ አሁን ተረዳሁ።)",
          notes: ""
        },
        {
          id: "p18-7",
          speaker: "Vladek (Narrator)",
          speakerAm: "ቭላዴክ (ተራኪ)",
          role: "narration",
          en: "SLAM! I RAN OUT TO MY FRIEND WHAT INTRODUCED US. HE WENT TO CALM HER DOWN AND TOOK HER HOME.",
          am: "SLAM! (በሩ ተዘረረ!) እኛን ወዳስተዋወቀን ጓደኛዬ ዘንድ ሮጬ ሄድኩ። እርሱም ሄዶ አረጋጋትና ወደ ቤቷ ወሰዳት።",
          notes: ""
        }
      ]
    },
    {
      pageNumber: 19,
      bookPageLabel: "Page 21 (Chapter 1, Comic Page 11)",
      amharicLabel: "ገጽ 21 (ምዕራፍ 1 - ገጽ 11)",
      image: "images/page_19.webp",
      type: "comic",
      summaryEn: "Anja abruptly cuts communication with Vladek after receiving a poison-pen letter full of vicious lies from Częstochowa.",
      summaryAm: "አንጃ ከቼስቶኮቫ የስም ማጥፋት ደብዳቤ ከደረሳት በኋላ ከቭላዴክ ጋር ግንኙነት ታቋርጣለች፤ ቭላዴክም ሁኔታውን ለማስተካከል በባቡር ይጓዛል።",
      panels: [
        {
          id: "p19-1",
          speaker: "Vladek (Narrator)",
          speakerAm: "ቭላዴክ (ተራኪ)",
          role: "narration",
          en: "I DIDN'T HEAR MORE FROM LUCIA — BUT ALSO I STOPPED HEARING FROM ANJA...",
          am: "ከሉቺያ ምንም ነገር አልሰማሁም—ነገር ግን ከአንጃም ምንም መስማት አቆምኩ...",
          notes: ""
        },
        {
          id: "p19-2",
          speaker: "Vladek (on phone)",
          speakerAm: "ቭላዴክ (በስልክ)",
          role: "dialogue",
          en: "NO TELEPHONE CALLS, NO LETTERS, NOTHING! WHAT HAPPENED? 'HELLO, MRS. ZYLBERBERG. COULD I SPEAK TO ANJA?'",
          am: "የስልክ ጥሪ የለም፣ ደብዳቤ የለም፣ ምንም ነገር የለም! ምን ተፈጠረ? «ጤና ይስጥልኝ ወ/ሮ ዚልበርበርግ። ከአንጃ ጋር መነጋገር እችል ይሆን?»",
          notes: ""
        },
        {
          id: "p19-3",
          speaker: "Mrs. Zylberberg & Vladek",
          speakerAm: "ወ/ሮ ዚልበርበርግ እና ቭላዴክ",
          role: "dialogue",
          en: "MRS. ZYLBERBERG: 'SHE SAYS SHE WON'T SPEAK TO YOU!' — VLADEK: 'BUT WHY?'",
          am: "ወ/ሮ ዚልበርበርግ፦ «ከአንተ ጋር ማውራት እንደማትፈልግ ተናግራለች!» — ቭላዴክ፦ «ግን ለምን?»",
          notes: ""
        },
        {
          id: "p19-4",
          speaker: "Mrs. Zylberberg & Vladek",
          speakerAm: "ወ/ሮ ዚልበርበርግ እና ቭላዴክ",
          role: "dialogue",
          en: "MRS. ZYLBERBERG: 'SHE GOT A LETTER FROM SOMEONE IN CZESTOCHOWA. MY GOD! IT SAYS THE WORST THINGS IN THE WORLD ABOUT YOU!' — VLADEK: 'WELL, I CAN'T CONVINCE HER ON THE PHONE. I'LL COME DOWN BY TRAIN ON FRIDAY AFTER WORK.'",
          am: "ወ/ሮ ዚልበርበርግ፦ «ከቼስቶኮቫ ከአንድ ሰው ደብዳቤ ደርሷታል። ፈጣሪ ሆይ! በዓለም ላይ ያሉትን ሁሉንም መጥፎ ነገሮች ስለ አንተ ይናገራል!» — ቭላዴክ፦ «በስልክ ላሳምናት አልችልም። አርብ ከስራ በኋላ በባቡር እመጣለሁ።»",
          notes: ""
        },
        {
          id: "p19-5",
          speaker: "Vladek & Anja",
          speakerAm: "ቭላዴክ እና አንጃ",
          role: "dialogue",
          en: "IT WASN'T EVEN A HOLIDAY, BUT I WENT ANYWAY TO SOSNOWIEC. VLADEK: 'SO, TELL ME, ANJA—WHAT HAVE I DONE THAT'S SO HORRIBLE?' — ANJA: 'YOU SHOULD KNOW—JUST READ THIS!'",
          am: "የበዓል ቀን እንኳን አልነበረም፣ ነገር ግን ወደ ሶስኖቪየክ ሄድኩ። ቭላዴክ፦ «እንግዲህ ንገሪኝ አንጃ—ይህን ያህል የከፋ ምን አደረግኩ?» — አንጃ፦ «ማወቅ አለብህ—ይህንን አንብበው እስቲ!»",
          notes: ""
        }
      ]
    },
    {
      pageNumber: 20,
      bookPageLabel: "Page 22 (Chapter 1, Comic Page 12)",
      amharicLabel: "ገጽ 22 (ምዕራፍ 1 - ገጽ 12)",
      image: "images/page_20.webp",
      type: "comic",
      summaryEn: "Vladek proves the slander came from jealous Lucia, wins Anja's heart back, and on February 14, 1937, they are wed in Sosnowiec.",
      summaryAm: "ደብዳቤው በቅናት በተሞላችው ሉቺያ እንደተጻፈ ቭላዴክ ያስረዳል፤ የአንጃን ልብ ይመልሳል፤ በየካቲት 14፣ 1937 በሶስኖቪየክ በደማቅ ሁኔታ ይጋባሉ።",
      panels: [
        {
          id: "p20-1",
          speaker: "Vladek",
          speakerAm: "ቭላዴክ (አባት)",
          role: "dialogue",
          en: "I DON'T EVEN WANT TO SEE IT. JUST TELL ME WHO WROTE IT. OR, BETTER YET, I'LL TELL YOU —",
          am: "ማየት እንኳን አልፈልግም። ማን እንደጻፈው ብቻ ንገሪኝ፤ ወይም እኔው ራሴ ልንገርሽ —",
          notes: ""
        },
        {
          id: "p20-2",
          speaker: "Vladek & Anja",
          speakerAm: "ቭላዴክ እና አንጃ",
          role: "dialogue",
          en: "VLADEK: '—LUCIA GREENBERG, RIGHT?' — ANJA: 'IT'S JUST SIGNED \"YOUR SECRET FRIEND, L.\"'",
          am: "ቭላዴክ፦ «—ሉቺያ ግሪንበርግ አይደለችም?» — አንጃ፦ «የተፈረመው \"ሚስጥራዊ ጓደኛሽ፣ ኤል\" ተብሎ ብቻ ነው።»",
          notes: ""
        },
        {
          id: "p20-3",
          speaker: "Anja (reading letter)",
          speakerAm: "አንጃ (ደብዳቤውን እያነበበች)",
          role: "dialogue",
          en: "IT SAYS YOU HAVE A VERY BAD REPUTATION IN CZESTOCHOWA...",
          am: "በቼስቶኮቫ ውስጥ በጣም መጥፎ ስም እንዳለህ ይናገራል...",
          notes: ""
        },
        {
          id: "p20-4",
          speaker: "Anja",
          speakerAm: "አንጃ",
          role: "dialogue",
          en: "...THAT YOU HAVE A LOT OF GIRLFRIENDS...",
          am: "...በርካታ ሴት ፍቅረኞች እንዳሉህ...",
          notes: ""
        },
        {
          id: "p20-5",
          speaker: "Anja",
          speakerAm: "አንጃ",
          role: "dialogue",
          en: "...AND THAT YOU'RE MARRYING ME FOR MY MONEY!",
          am: "...ደግሞም እኔን የምታገባኝ ለገንዘቤ ብለህ እንደሆነ ይገልጻል!",
          notes: ""
        },
        {
          id: "p20-6",
          speaker: "Vladek",
          speakerAm: "ቭላዴክ (አባት)",
          role: "dialogue",
          en: "ACH, ANJA—YOU SHOULD KNOW ME BETTER... ASK ANYONE IN CZESTOCHOWA ABOUT MY CHARACTER.",
          am: "አኽ አንጃ—በደንብ ልታውቂኝ ይገባል... በቼስቶኮቫ ያለውን ማንኛውንም ሰው ስለ ስነ-ምግባሬ ጠይቂ።",
          notes: ""
        },
        {
          id: "p20-7",
          speaker: "Vladek",
          speakerAm: "ቭላዴክ (አባት)",
          role: "dialogue",
          en: "LUCIA'S AN OLD GIRL-FRIEND WHO WON'T LEAVE ME ALONE. SHE MEANS NOTHING AT ALL TO ME. (AND AFTER MUCH TALKING, I CONVINCED HER.)",
          am: "ሉቺያ ልትተወኝ የማትፈልግ የቀድሞ ጓደኛዬ ናት። ለእኔ ምንም ማለት አይደለችም። (እናም ከረጅም ንግግር በኋላ አሳመንኳት።)",
          notes: ""
        },
        {
          id: "p20-8",
          speaker: "Vladek & Father-in-law",
          speakerAm: "ቭላዴክ እና አማቱ",
          role: "dialogue",
          en: "SO I MOVED TO SOSNOWIEC AT THE END OF 1936; AND FEBRUARY 14, 1937, WE WERE MARRIED. FATHER-IN-LAW: 'AND NOW SOME VODKA TO TOAST THE YOUNG COUPLE.'",
          am: "ስለዚህ በ1936 መጨረሻ ወደ ሶስኖቪየክ ተዛወርኩ፤ በየካቲት 14፣ 1937 (February 14, 1937) ተጋባን። አማቴ፦ «አሁን ደግሞ ለወጣቶቹ ጥንዶች ቮድካ እናንሳ!»",
          notes: "Valentine's Day wedding (February 14), marking the high point of Vladek and Anja's pre-war happiness."
        },
        {
          id: "p20-9",
          speaker: "Vladek (Narrator)",
          speakerAm: "ቭላዴክ (ተራኪ)",
          role: "narration",
          en: "I MOVED INTO ONE OF FATHER-IN-LAW'S TWO APARTMENTS. HE OWNED BOTH, AND HE GAVE TO ME PART OWNERSHIP AND A VERY BEAUTIFUL GOLD WATCH FOR A WEDDING GIFT.",
          am: "ወደ አማቴ ሁለተኛ አፓርታማ ተዛወርኩ። የሁለቱም ባለቤት እርሱ ነበር፤ ለእኔም የባለቤትነት ድርሻ እና እጅግ የሚያምር የወርቅ የእጅ ሰዓት ለሰርግ ስጦታ ሰጠኝ።",
          notes: "End of Chapter One ('The Sheik'). Chapter Two begins with their honeymoon in Bielsko and the looming storm of war."
        }
      ]
    }
,

    // -------------------------------------------------------------
    // BATCH 3: PAGES 21 - 30 (Chapter 2: The Honeymoon)
    // -------------------------------------------------------------
    {
        "pageNumber": 21,
        "bookPageLabel": "Page 23 (Chapter 1 Epilogue)",
        "amharicLabel": "ገጽ 23 (የምዕራፍ 1 ማጠቃለያ)",
        "image": "images/page_21.webp",
        "type": "comic",
        "summaryEn": "Artie and Vladek argue about whether to include the private Lucia story in the comic book.",
        "summaryAm": "አርቲ እና ቭላዴክ ስለ ሉቺያ የተነገረው የግል ታሪክ በመጽሐፉ ውስጥ መካተት እንዳለበትና እንደሌለበት ይከራከራሉ።",
        "panels": [
            {
                "id": "p21-1",
                "speaker": "Vladek",
                "speakerAm": "ቭላዴክ (አባት)",
                "role": "dialogue",
                "en": "BUT THIS WHAT I JUST TOLD YOU—ABOUT LUCIA AND SO—I DON'T WANT YOU SHOULD WRITE THIS IN YOUR BOOK.",
                "am": "ነገር ግን አሁን የነገርኩህ ነገር—ስለ ሉቺያ እና የመሳሰሉት—በመጽሐፍህ ውስጥ እንድትጽፈው አልፈልግም።",
                "notes": "Vladek worries about dignity and propriety."
            },
            {
                "id": "p21-2",
                "speaker": "Artie",
                "speakerAm": "አርቲ",
                "role": "dialogue",
                "en": "WHAT? WHY NOT?",
                "am": "ምን? ለምን አይሆንም?",
                "notes": ""
            },
            {
                "id": "p21-3",
                "speaker": "Vladek",
                "speakerAm": "ቭላዴክ (አባት)",
                "role": "dialogue",
                "en": "IT HAS NOTHING TO DO WITH HITLER, WITH THE HOLOCAUST!",
                "am": "ከሂትለር ወይም ከእልቂቱ (ሆሎኮስት) ጋር ምንም የሚያገናኘው ነገር የለም እኮ!",
                "notes": ""
            },
            {
                "id": "p21-4",
                "speaker": "Artie",
                "speakerAm": "አርቲ",
                "role": "dialogue",
                "en": "BUT POP—IT'S GREAT MATERIAL. IT MAKES EVERYTHING MORE REAL—MORE HUMAN.",
                "am": "ግን አባዬ—እጅግ ድንቅ መረጃ ነው። ሁሉንም ነገር ይበልጥ እውነተኛ እና ይበልጥ ሰብዓዊ ያደርገዋል...",
                "notes": ""
            },
            {
                "id": "p21-5",
                "speaker": "Artie",
                "speakerAm": "አርቲ",
                "role": "dialogue",
                "en": "I WANT TO TELL YOUR STORY, THE WAY IT REALLY HAPPENED.",
                "am": "ያንተን ታሪክ በትክክል እንደተከሰተበት መንገድ ልተርከው እፈልጋለሁ።",
                "notes": "Art Spiegelman's artistic commitment to unflinching honesty."
            },
            {
                "id": "p21-6",
                "speaker": "Vladek",
                "speakerAm": "ቭላዴክ (አባት)",
                "role": "dialogue",
                "en": "BUT THIS ISN'T SO PROPER, SO RESPECTFUL... I CAN TELL YOU OTHER STORIES, BUT SUCH PRIVATE THINGS, I DON'T WANT YOU SHOULD MENTION.",
                "am": "ነገር ግን ይህ ያን ያህል ተገቢ እና አክብሮት የተሞላበት አይደለም... ሌሎች ታሪኮችን ልነግርህ እችላለሁ፤ ነገር ግን እንደነዚህ ያሉ የግል ጉዳዮችን እንድትጠቅሳቸው አልፈልግም።",
                "notes": ""
            },
            {
                "id": "p21-7",
                "speaker": "Artie",
                "speakerAm": "አርቲ",
                "role": "dialogue",
                "en": "OKAY, OKAY—I PROMISE.",
                "am": "እሺ፣ እሺ—ቃል እገባልሃለሁ።",
                "notes": "A profound meta-fictional moment: Artie promises, but by publishing this exact exchange, he breaks his promise to honor a higher truth."
            }
        ]
    },
    {
        "pageNumber": 22,
        "bookPageLabel": "Page 25 (Chapter 2 Title Page)",
        "amharicLabel": "ገጽ 25 (የምዕራፍ ሁለት ሽፋን)",
        "image": "images/page_22.webp",
        "type": "chapter_cover",
        "summaryEn": "Chapter Two cover titled 'The Honeymoon' showing mice gazing in horror at a giant Nazi flag.",
        "summaryAm": "ምዕራፍ ሁለት «የጫጉላው ጊዜ»፤ አይጦች በፍርሃት ወደ ተሰቀለው ግዙፍ የናዚ ባንዲራ ሲመለከቱ የሚያሳይ ሽፋን።",
        "panels": [
            {
                "id": "p22-1",
                "speaker": "Chapter Title",
                "speakerAm": "የምዕራፍ ርዕስ",
                "role": "title",
                "en": "CHAPTER TWO: The HONEYMOON",
                "am": "ምዕራፍ ሁለት፡ የጫጉላው ጊዜ (The Honeymoon)",
                "notes": "Contrasts the sweetness of marriage with the impending shadow of Nazi tyranny across Central Europe."
            }
        ]
    },
    {
        "pageNumber": 23,
        "bookPageLabel": "Page 26 (Chapter 2, Comic Page 1)",
        "amharicLabel": "ገጽ 26 (ምዕራፍ 2 - ገጽ 1)",
        "image": "images/page_23.webp",
        "type": "comic",
        "summaryEn": "In Rego Park, Artie visits Vladek as he sorts dozens of daily pills. Artie asks about Anja's past relationships.",
        "summaryAm": "በሬጎ ፓርክ ቭላዴክ በርካታ የዕለት ክኒኖቹን ሲቆጥር አርቲ አባቱን ስለ እናቱ የቀድሞ ህይወት ይጠይቃል።",
        "panels": [
            {
                "id": "p23-1",
                "speaker": "Artie (Narrator)",
                "speakerAm": "አርቲ (ተራኪ)",
                "role": "narration",
                "en": "FOR THE NEXT FEW MONTHS I WENT BACK TO VISIT MY FATHER QUITE REGULARLY, TO HEAR HIS STORY.",
                "am": "ለቀጣዮቹ ጥቂት ወራት የአባቴን ታሪክ ለመስማት ዘወትር እየሄድኩ እጠይቀው ነበር።",
                "notes": ""
            },
            {
                "id": "p23-2",
                "speaker": "Artie & Vladek",
                "speakerAm": "አርቲ እና ቭላዴክ",
                "role": "dialogue",
                "en": "ARTIE: 'ABOUT MOM... —UH... WHAT ARE YOU DOING, POP?' — VLADEK: '...11... 12... 13... I'M MAKING INTO DAILY PORTIONS MY PILLS. ...14... 15...'",
                "am": "አርቲ፦ «ስለ እማማ... —እ... ምን እየሰራህ ነው አባዬ?» — ቭላዴክ፦ «...11... 12... 13... የዕለት እንክብሎቼን በየክፍላቸው እያከፋፈልኩ ነው... 14... 15...»",
                "notes": ""
            },
            {
                "id": "p23-3",
                "speaker": "Artie & Vladek",
                "speakerAm": "አርቲ እና ቭላዴክ",
                "role": "dialogue",
                "en": "VLADEK: '...16... 17... 18...' — ARTIE: 'SO MANY?' — VLADEK: 'IT'S 6 PILLS FOR THE HEART, 1 FOR DIABETES... AND MAYBE 25 OR 30 VITAMINS.'",
                "am": "ቭላዴክ፦ «...16... 17... 18...» — አርቲ፦ «ይህ ሁሉ በዛ እኮ?» — ቭላዴክ፦ «6 የልብ ክኒን፣ 1 የስኳር... እና ወደ 25 ወይም 30 የሚሆኑ ቪታሚኖች።»",
                "notes": ""
            },
            {
                "id": "p23-4",
                "speaker": "Vladek",
                "speakerAm": "ቭላዴክ (አባት)",
                "role": "dialogue",
                "en": "FOR MY CONDITION I MUST FIGHT TO SAVE MYSELF. DOCTORS, THEY ONLY GIVE ME 'JUNK FOOD'... THAT'S HOW I CALL PRESCRIPTION DRUGS NOW. I STUDY THIS IN MY PREVENTION MAGAZINES... MAYBE YOU WANT TO READ?",
                "am": "ለጤንነቴ ሁኔታ ራሴን ለማዳን መታገል አለብኝ። ዶክተሮች የሚሰጡኝ 'ቆሻሻ ምግብ' ብቻ ነው... የታዘዙ መድኃኒቶችን አሁን የምጠራው እንዲህ ነው። በመከላከያ መጽሔቶቼ ላይ አጠናዋለሁ... ማንበብ ትፈልጋለህ?",
                "notes": ""
            },
            {
                "id": "p23-5",
                "speaker": "Artie & Vladek",
                "speakerAm": "አርቲ እና ቭላዴክ",
                "role": "dialogue",
                "en": "ARTIE: 'NO THANKS. ABOUT MOM—DID SHE HAVE ANY BOYFRIENDS BEFORE SHE MET YOU?' — VLADEK: 'NOT ROMANTIC... BUT ONE TALL BOY FROM WARSAW... HE WAS... A COMMUNIST!'",
                "am": "አርቲ፦ «አይ አመሰግናለሁ። ስለ እማማ—አንተን ከማግኘቷ በፊት የወንድ ጓደኛ ነበራት?» — ቭላዴክ፦ «የፍቅር አልነበረም... ነገር ግን ከዋርሶ የመጣ አንድ ረጅም ልጅ ነበር... እርሱም... ኮሚኒስት ነበር!»",
                "notes": "In pre-war Poland, communism was strictly illegal and considered treasonous."
            }
        ]
    },
    {
        "pageNumber": 24,
        "bookPageLabel": "Page 27 (Chapter 2, Comic Page 2)",
        "amharicLabel": "ገጽ 27 (ምዕራፍ 2 - ገጽ 2)",
        "image": "images/page_24.webp",
        "type": "comic",
        "summaryEn": "Anja secretly translates and passes communist documents. Vladek comes home to find their seamstress neighbor arrested.",
        "summaryAm": "አንጃ የኮሚኒስት ሰነዶችን በድብቅ ትተረጉም ነበር፤ ቭላዴክ ከጉዞ ሲመለስ ሰፋፊዋ ጎረቤታቸው በፖሊስ መታሰሯን ያውቃል።",
        "panels": [
            {
                "id": "p24-1",
                "speaker": "Vladek (Narrator)",
                "speakerAm": "ቭላዴክ (ተራኪ)",
                "role": "narration",
                "en": "EVEN AFTER THE MARRIAGE, WHEN THIS FELLOW CAME TO SOSNOWIEC, ANJA ALWAYS RAN TO SEE HIM. I DIDN'T KNOW, OF COURSE, THAT HE WAS COMMUNIST. I ALWAYS KEPT FAR AWAY FROM COMMUNIST PEOPLE.",
                "am": "ከተጋባን በኋላም እንኳ፣ ያ ልጅ ወደ ሶስኖቪየክ ሲመጣ አንጃ እርሱን ለማየት ሁልጊዜ ትሮጥ ነበር። እርሱ ኮሚኒስት መሆኑን በእርግጥ አላወቅኩም ነበር። እኔ ግን ከኮሚኒስቶች ዘወትር እሸሽ ነበር።",
                "notes": ""
            },
            {
                "id": "p24-2",
                "speaker": "Neighbors & Crowd",
                "speakerAm": "ጎረቤቶች እና ህዝቡ",
                "role": "dialogue",
                "en": "A LITTLE AFTER WE WERE MARRIED I CAME HOME FROM A SELLING TRIP... 'HEY VLADEK—THEY JUST ARRESTED THE SEAMSTRESS THAT LIVES DOWN YOUR HALL!...' — 'SHE HAD SOME SECRET COMMUNIST DOCUMENTS!'",
                "am": "ከተጋባን ጥቂት ጊዜ በኋላ ከሽያጭ ጉዞዬ ወደ ቤት ተመለስኩ... «ሄይ ቭላዴክ—ኮሪደሩ መጨረሻ የምትኖረውን ሰፋፊ ሴትዮ አሁን አሰሯት!...» — «ሚስጥራዊ የኮሚኒስት ሰነዶች ተገኝተውባታል!»",
                "notes": ""
            },
            {
                "id": "p24-3",
                "speaker": "Vladek & Father-in-law",
                "speakerAm": "ቭላዴክ እና አማቱ",
                "role": "dialogue",
                "en": "AND WHEN I WENT UPSTAIRS... VLADEK: 'THE POLICE JUST ARRES—HUH? WHAT'S THE MATTER?' — FATHER: 'THE POLICE WERE HERE! LOOKING FOR ANJA!'",
                "am": "ወደ ላይ ወደ ቤታችን ስወጣ... ቭላዴክ፦ «ፖሊሶች አሁን እኮ ያቺን ሰፋፊ—እንዴ? ምን ተፈጠረ?» — አማቱ፦ «ፖሊሶች እዚህ መጥተው ነበር! አንጃን ፍለጋ!»",
                "notes": ""
            },
            {
                "id": "p24-4",
                "speaker": "Father-in-law",
                "speakerAm": "አማቱ",
                "role": "dialogue",
                "en": "SHE JUST TOLD US... THAT BOY FROM WARSAW BRINGS COMMUNIST MESSAGES. SHE TRANSLATES THEM INTO GERMAN AND PASSES THEM ON! (ANJA WAS INVOLVED IN CONSPIRATIONS!)",
                "am": "አሁን ነገረችን... ያ ከዋርሶ የመጣው ልጅ የኮሚኒስት መልዕክቶችን ያመጣላት ነበር። እርሷም ወደ ጀርመንኛ ተርጉማ ታስተላልፋቸው ነበር! (አንጃ በሚስጥራዊ ሴራ ውስጥ ተሳትፋ ነበር!)",
                "notes": "Anja's youthful intellectual idealism led her into dangerous underground politics."
            }
        ]
    },
    {
        "pageNumber": 25,
        "bookPageLabel": "Page 28 (Chapter 2, Comic Page 3)",
        "amharicLabel": "ገጽ 28 (ምዕራፍ 2 - ገጽ 3)",
        "image": "images/page_25.webp",
        "type": "comic",
        "summaryEn": "Anja stashes the communist package with Miss Stefanska the seamstress just before the police search the house.",
        "summaryAm": "ፖሊስ ቤቱን ከመፈተሹ ጥቂት ቀደም ብሎ አንጃ የኮሚኒስት ጥቅሉን ከሰፋፊዋ ወይዘሪት ስቴፋንስካ ዘንድ ትደብቃለች።",
        "panels": [
            {
                "id": "p25-1",
                "speaker": "Phone Caller",
                "speakerAm": "ደዋይ (በስልክ)",
                "role": "dialogue",
                "en": "A LITTLE BEFORE THE POLICE CAME, SHE GOT FROM FRIENDS A TELEPHONE CALL... 'THEY SUSPECT YOU! HIDE THE PAPERS QUICKLY! BUT THEY'RE IMPORTANT—TRY NOT TO DESTROY THEM.'",
                "am": "ፖሊስ ከመምጣቱ ጥቂት ቀደም ብሎ ከጓደኞቿ የስልክ ጥሪ ደረሳት፦ «ጠረጥረውሻል! ሰነዶቹን በአስቸኳይ ደብቂ! ነገር ግን ወሳኝ ስለሆኑ እንዳታጠፊያቸው!»",
                "notes": ""
            },
            {
                "id": "p25-2",
                "speaker": "Anja",
                "speakerAm": "አንጃ",
                "role": "dialogue",
                "en": "WHAT TO DO? SHE RAN TO THE SEAMSTRESS WHAT WAS ONE OF OUR TENANTS. 'MISS STEFANSKA—PLEASE! HIDE THIS PACKAGE FOR ME—DON'T TELL ANYONE ABOUT IT!' (AND ANJA WAS A GOOD CUSTOMER, SO SHE AGREED.)",
                "am": "ምን ታድርግ? ተከራያችን ወደነበረችው ሰፋፊ ሮጣ ሄደች፦ «ወይዘሪት ስቴፋንስካ—እባክሽን! ይህን እቃ ደብቂልኝ—ለማንም እንዳትናገሪ!» (አንጃ ጥሩ ደንበኛ ስለነበረች ተስማማች።)",
                "notes": ""
            },
            {
                "id": "p25-3",
                "speaker": "Police & Miss Stefanska",
                "speakerAm": "ፖሊስ እና ወ/ሪት ስቴፋንስካ",
                "role": "dialogue",
                "en": "THE POLICE WENT OVER OUR HOUSE TOP TO BOTTOM. IT WAS NOTHING TO FIND SO THEY SEARCHED THE NEIGHBORS. POLICE: 'OKAY—HOW DID YOU GET THIS PACKAGE?' — STEFANSKA: 'I NEVER SAW IT BEFORE—ONE OF MY CUSTOMERS MUST HAVE LEFT IT!' (ANJA WAS SAFE, BUT THE SEAMSTRESS THEY ARRESTED.)",
                "am": "ፖሊሶች ቤታችንን ከላይ እስከ ታች ፈተሹ፤ ምንም ባለማግኘታቸው ጎረቤቶችን ፈተሹ። ፖሊስ፦ «ይህን ጥቅል ከየት አገኘሽው?» — ስቴፋንስካ፦ «በጭራሽ አይቼው አላውቅም—ከደንበኞቼ አንዱ ጥሎት ሄዶ መሆን አለበት!» (አንጃ ተረፈች፣ ሰፋፊዋ ግን ታሰረች።)",
                "notes": "The Polish police are drawn as pigs in Spiegelman's visual metaphor."
            }
        ]
    },
    {
        "pageNumber": 26,
        "bookPageLabel": "Page 29 (Chapter 2, Comic Page 4)",
        "amharicLabel": "ገጽ 29 (ምዕራፍ 2 - ገጽ 4)",
        "image": "images/page_26.webp",
        "type": "comic",
        "summaryEn": "Vladek gives Anja an ultimatum to renounce politics. Father-in-law frees the seamstress and buys Vladek a textile factory.",
        "summaryAm": "ቭላዴክ አንጃ ፖለቲካውን እንድታቆም ያስጠነቅቃል፤ አማቱ ሰፋፊዋን ከእስር ያስፈታል፣ ለቭላዴክም የጨርቃ ጨርቅ ፋብሪካ ያቋቁማል።",
        "panels": [
            {
                "id": "p26-1",
                "speaker": "Vladek",
                "speakerAm": "ቭላዴክ (አባት)",
                "role": "dialogue",
                "en": "WHEN I FOUND OUT THIS STORY, I WAS READY TO BREAK THE MARRIAGE. I TOLD HER 'ANJA, IF YOU WANT ME YOU HAVE TO GO MY WAY... IF YOU WANT YOUR COMMUNIST FRIENDS, THEN I CAN'T STAY IN THIS HOUSE!' AND SHE WAS A GOOD GIRL, AND OF COURSE SHE STOPPED ALL SUCH THINGS.",
                "am": "ይህንን ታሪክ ባወቅኩ ጊዜ ትዳሩን ለማፍረስ ተዘጋጅቼ ነበር። ለእርሷ እንዲህ አልኳት፦ «አንጃ፣ እኔን የምትፈልጊ ከሆነ በእኔ መንገድ መጓዝ አለብሽ... የኮሚኒስት ጓደኞችሽን የምትመርጪ ከሆነ እኔ በዚህ ቤት ውስጥ መቆየት አልችልም!» እናም መልካም ልጅ ስለነበረች እንዲህ ያሉ ነገሮችን ሁሉ አቆመች።",
                "notes": ""
            },
            {
                "id": "p26-2",
                "speaker": "Artie & Vladek",
                "speakerAm": "አርቲ እና ቭላዴክ",
                "role": "dialogue",
                "en": "ARTIE: 'WHAT HAPPENED TO THE SEAMSTRESS?' — VLADEK: 'MISS STEFANSKA SAT IN PRISON FOR A LONGER TIME—MAYBE 3 MONTHS. IT WASN'T ENOUGH EVIDENCE AND FINALLY THE POLICE LEFT HER GO. FATHER-IN-LAW PAID THE COST FROM THE LAWYERS AND GAVE TO HER SOME MONEY—IT COST MAYBE 15,000 ZLOTYS.'",
                "am": "አርቲ፦ «ሰፋፊዋስ ምን ሆነች?» — ቭላዴክ፦ «ወይዘሪት ስቴፋንስካ ለረጅም ጊዜ—ምናልባት ለ3 ወራት በእስር ቆየች። በቂ ማስረጃ ባለመገኘቱ ፖሊስ ለቀቃት። አማቴ ለጠበቆችና ለእርሷ ወደ 15,000 ዝሎቲ ከፈለላት።»",
                "notes": "15,000 zlotys was a staggering fortune in 1930s Poland."
            },
            {
                "id": "p26-3",
                "speaker": "Father-in-law & Vladek",
                "speakerAm": "አማቱ እና ቭላዴክ",
                "role": "dialogue",
                "en": "FATHER: 'YOU KNOW, VLADEK, WHEN YOU AND ANJA GIVE ME A GRANDCHILD, I WANT HIM TO BE WELL-OFF.' — VLADEK: 'WELL, I ALMOST HAVE ENOUGH TO START A TEXTILE SHOP...' — FATHER: 'A SHOP? PFUI! YOU OUGHT TO HAVE A TEXTILE FACTORY! I CAN GIVE YOU THE MONEY AND PLENTY OF CREDIT.'",
                "am": "አማቱ፦ «አንተና አንጃ የልጅ ልጅ ስትሰጡኝ፣ የተደላደለ ኑሮ እንዲኖረው እፈልጋለሁ።» — ቭላዴክ፦ «ትንሽ የጨርቃ ጨርቅ ሱቅ ለመክፈት የሚያስችል ገንዘብ አለኝ...» — አማቱ፦ «ሱቅ? በፍጹም! ትልቅ ፋብሪካ ሊኖርህ ይገባል! እኔ ገንዘቡን እና ሙሉ ብድሩን እሰጥሃለሁ።»",
                "notes": "Vladek started his factory in Bielsko."
            }
        ]
    },
    {
        "pageNumber": 27,
        "bookPageLabel": "Page 30 (Chapter 2, Comic Page 5)",
        "amharicLabel": "ገጽ 30 (ምዕራፍ 2 - ገጽ 5)",
        "image": "images/page_27.webp",
        "type": "comic",
        "summaryEn": "October 1937: Birth of first son Richieu. Vladek also recounts Artie's difficult post-war birth and spills his pills.",
        "summaryAm": "ጥቅምት 1937 የበኩር ልጅ ሪሺዩ ተወለደ፤ ቭላዴክ ከአርቲ ጋር ስላሳለፈው አስቸጋሪ የወሊድ ጊዜ እያወራ ክኒኖቹን ይበትናል።",
        "panels": [
            {
                "id": "p27-1",
                "speaker": "Doctor & Vladek",
                "speakerAm": "ሐኪም እና ቭላዴክ",
                "role": "dialogue",
                "en": "BY OCTOBER 1937, THE FACTORY WAS GOING, AND IT WAS BORN MY FIRST SON, RICHIEU. DOCTOR: 'HE'S A BIG BABY—OVER 3 KILOS.' — VLADEK: 'MY GOD—ANJA ONLY WEIGHS 39!'",
                "am": "በጥቅምት 1937 ፋብሪካው ተጠናክሮ ሲሰራ፣ የመጀመሪያ ልጄ ሪሺዩ (Richieu) ተወለደ። ሐኪሙ፦ «ትልቅ ህፃን ነው—ከ3 ኪሎ በላይ ይመዝናል!» — ቭላዴክ፦ «ፈጣሪ ሆይ—አንጃ እኮ 39 ኪሎ ብቻ ናት የምትመዝነው!»",
                "notes": ""
            },
            {
                "id": "p27-2",
                "speaker": "Vladek & Artie",
                "speakerAm": "ቭላዴክ እና አርቲ",
                "role": "dialogue",
                "en": "VLADEK: 'OF COURSE, YOU NEVER KNEW HIM. HE DIDN'T COME OUT FROM THE WAR.' — ARTIE: 'YES, I KNOW...'",
                "am": "ቭላዴክ፦ «በእርግጥ አንተ አታውቀውም። ከጦርነቱ በህይወት አልተረፈም።» — አርቲ፦ «አዎ፣ አውቃለሁ...»",
                "notes": "Richieu's tragic death in the Holocaust casts a permanent shadow over Artie's life."
            },
            {
                "id": "p27-3",
                "speaker": "Vladek",
                "speakerAm": "ቭላዴክ (አባት)",
                "role": "dialogue",
                "en": "BUT YOU—AFTER THE WAR, WHEN YOU WERE BORN—IT WAS VERY PREMATURE. THE DOCTORS THOUGHT YOU WOULDN'T LIVE. I FOUND A SPECIALIST WHAT SAVED YOU... HE HAD TO BREAK YOUR ARM TO TAKE YOU OUT FROM ANJA'S BELLY!",
                "am": "አንተ ግን—ከጦርነቱ በኋላ ስትወለድ—በጣም ያለጊዜህ ነበር የተወለድከው። ዶክተሮች በህይወት አትተርፍም ብለው አስበው ነበር። አንተን ያዳነህን አንድ ስፔሻሊስት አገኘሁ... ከሆዷ ውስጥ አንተን ለማውጣት ክንድህን መስበር ነበረበት!",
                "notes": ""
            },
            {
                "id": "p27-4",
                "speaker": "Vladek",
                "speakerAm": "ቭላዴክ (አባት)",
                "role": "dialogue",
                "en": "AND WHEN YOU WERE A TINY BABY YOUR ARM ALWAYS JUMPED UP, LIKE SO! WE JOKED AND CALLED YOU 'HEIL HITLER!' ALWAYS WE PUSHED YOUR ARM DOWN, AND YOU WOULD— OOPS! (LOOK NOW WHAT YOU MADE ME DO!)",
                "am": "ህፃን ሳለህ ክንድህ ሁልጊዜ ልክ እንደዚህ ወደ ላይ ይዘረጋ ነበር! እኛም በቀልድ «ሃይል ሂትለር!» ብለን እንጠራህ ነበር። ሁልጊዜም እጅህን ወደ ታች እንመልሰው ነበር... ውይ! (አየህ አሁን ምን እንዳደረግከኝ? ክኒኖቼ ተበተኑ!)",
                "notes": "A dark, bittersweet Jewish joke about Artie's twitching newborn arm."
            },
            {
                "id": "p27-5",
                "speaker": "Artie & Vladek",
                "speakerAm": "አርቲ እና ቭላዴክ",
                "role": "dialogue",
                "en": "ARTIE: 'ME? OKAY, I'LL RE-COUNT THEM LATER.' — VLADEK: 'NO! YOU DON'T KNOW COUNTING PILLS. I'LL DO IT AFTER... I'M AN EXPERT FOR THIS.'",
                "am": "አርቲ፦ «እኔ? እሺ፣ ቆይቼ እኔው እቆጥርልሃለሁ።» — ቭላዴክ፦ «አይሆንም! አንተ ክኒን መቁጠር አታውቅም። እኔው ራሴ እቆጥረዋለሁ... እኔ በዚህ ረገድ ባለሙያ ነኝ።»",
                "notes": ""
            }
        ]
    },
    {
        "pageNumber": 28,
        "bookPageLabel": "Page 31 (Chapter 2, Comic Page 6)",
        "amharicLabel": "ገጽ 31 (ምዕራፍ 2 - ገጽ 6)",
        "image": "images/page_28.webp",
        "type": "comic",
        "summaryEn": "Anja suffers severe postpartum depression and loses the will to live. The family decides she must go to a Czech sanitarium.",
        "summaryAm": "አንጃ በከፍተኛ የወሊድ ድብርት ተውጣ የመኖር ፍላጎቷን ታጣለች፤ ቤተሰቡ በቼኮዝሎቫኪያ ወደሚገኝ የህክምና ማዕከል እንድትሄድ ይወስናል።",
        "panels": [
            {
                "id": "p28-1",
                "speaker": "Phone Message",
                "speakerAm": "የስልክ ጥሪ",
                "role": "dialogue",
                "en": "SO... ANJA STAYED WITH THE FAMILY AND I WENT TO LIVE IN BIELSKO FOR MY FACTORY BUSINESS AND TO FIND US AN APARTMENT... BUT SOON IT CAME FROM SOSNOWIEC A TELEPHONE... 'VLADEK! COME HOME RIGHT AWAY—ANJA IS SICK!'",
                "am": "እናም... አንጃ ከቤተሰቦቿ ጋር ቆየች፤ እኔ ደግሞ ለፋብሪካው ስራ እና አፓርታማ ለመፈለግ በቤልስኮ መኖር ጀመርኩ... ብዙም ሳይቆይ ከሶስኖቪየክ የስልክ ጥሪ መጣ፦ «ቭላዴክ! በአስቸኳይ ወደ ቤት ና—አንጃ ታማለች!»",
                "notes": ""
            },
            {
                "id": "p28-2",
                "speaker": "Vladek & Anja",
                "speakerAm": "ቭላዴክ እና አንጃ",
                "role": "dialogue",
                "en": "SHE WAS CRYING AS SOON I CAME IN... VLADEK: 'WHAT'S WRONG, DARLING?' — ANJA: 'SOB. IT DOESN'T MATTER... NOTHING MATTERS.' — VLADEK: 'BUT WHY ARE YOU CRYING?' — ANJA: 'I DON'T KNOW! I HAVE A GOOD FAMILY... A FINE SON... I SHOULD BE HAPPY...'",
                "am": "ወደ ቤት ስገባ እያለቀሰች ነበር... ቭላዴክ፦ «ምን ሆነሻል የኔ ፍቅር?» — አንጃ፦ «(በለቅሶ) ምንም ለውጥ የለውም... ምንም ትርጉም የለውም።» — ቭላዴክ፦ «ግን ለምን ታለቅሻለሽ?» — አንጃ፦ «አላውቅም! ጥሩ ቤተሰብ አለኝ... ቆንጆ ልጅ አለኝ... ደስተኛ መሆን ነበረብኝ...»",
                "notes": ""
            },
            {
                "id": "p28-3",
                "speaker": "Anja",
                "speakerAm": "አንጃ",
                "role": "dialogue",
                "en": "BUT I DON'T CARE. I JUST DON'T WANT TO LIVE.",
                "am": "«ነገር ግን ግድ የለኝም። በህይወት መኖር አልፈልግም!»",
                "notes": "Anja's clinical depression foreshadows her eventual suicide decades later in 1968."
            },
            {
                "id": "p28-4",
                "speaker": "Father-in-law & Mother",
                "speakerAm": "አማቱ እና አማቷ",
                "role": "dialogue",
                "en": "FATHER: 'GIVING BIRTH WAS TOO MUCH OF A STRAIN. SHE'S ALWAYS HYSTERICAL OR DEPRESSED... A BREAKDOWN!' — THE DOCTOR TOLD US ABOUT A SANITARIUM... BUT SOMEBODY MUST GO WITH HER... SOMEONE SHE TRUSTS.",
                "am": "አባቷ፦ «መውለዱ ከባድ ጫና ፈጥሮባታል፤ በከፍተኛ ጭንቀትና ድብርት ተውጣለች... የአዕምሮ ድካም ገጥሟታል!» — ዶክተሩ በቼኮዝሎቫኪያ ውስጥ ስለሚገኝ አንድ የህክምና ማዕከል ነገረን... ነገር ግን አንጃ የምታምነው ሰው አብሯት መሄድ አለበት።",
                "notes": ""
            },
            {
                "id": "p28-5",
                "speaker": "Father-in-law",
                "speakerAm": "አማቱ",
                "role": "dialogue",
                "en": "EVERYTHING'S ARRANGED—THE CHILD CAN STAY HERE WITH A GOVERNESS. AND I'LL WATCH YOUR FACTORY.",
                "am": "ሁሉም ነገር ተዘጋጅቷል—ህፃኑ ልጅ እዚህ ከሞግዚት ጋር ይቆያል፤ እኔ ደግሞ ፋብሪካህን እከታተልልሃለሁ።",
                "notes": ""
            }
        ]
    },
    {
        "pageNumber": 29,
        "bookPageLabel": "Page 32 (Chapter 2, Comic Page 7)",
        "amharicLabel": "ገጽ 32 (ምዕራፍ 2 - ገጽ 7)",
        "image": "images/page_29.webp",
        "type": "comic",
        "summaryEn": "En route to the Czech sanitarium in early 1938, the Jewish train passengers gaze with terror at a giant Nazi Swastika flag.",
        "summaryAm": "በ1938 መጀመሪያ ላይ ወደ ቼክ የህክምና ማዕከል ሲጓዙ፣ በባቡሩ ውስጥ ያሉት አይሁዶች በከተማይቱ ላይ የተሰቀለውን የናዚ ስዋስቲካ አርማ በፍርሃት ይመለከታሉ።",
        "panels": [
            {
                "id": "p29-1",
                "speaker": "Vladek (Narrator)",
                "speakerAm": "ቭላዴክ (ተራኪ)",
                "role": "narration",
                "en": "RIGHT AWAY, WE WENT. THE SANITARIUM WAS INSIDE CZECHOSLOVAKIA, ONE OF THE MOST EXPENSIVE AND BEAUTIFUL IN THE WORLD.",
                "am": "ወዲያውኑ ተጓዝን። የህክምና ማዕከሉ በቼኮዝሎቫኪያ ውስጥ የሚገኝ በዓለም ላይ ካሉ እጅግ ውድ እና ውብ ስፍራዎች አንዱ ነበር።",
                "notes": ""
            },
            {
                "id": "p29-2",
                "speaker": "Train Passengers",
                "speakerAm": "የባቡሩ ተሳፋሪዎች",
                "role": "dialogue",
                "en": "I REMEMBER WHEN WE WERE ALMOST ARRIVED, WE PASSED A SMALL TOWN. 'OI!' EVERYBODY—EVERY JEW FROM THE TRAIN—GOT VERY EXCITED AND FRIGHTENED. 'LOOK!'",
                "am": "ልንደርስ ስንቃረብ በአንዲት ትንሽ ከተማ እንዳለፍን አስታውሳለሁ። «ኦይ!» በባቡሩ ውስጥ የነበሩት አይሁዶች በሙሉ እጅግ ተደናገጡና ፈሩ! «ተመልከቱ!»",
                "notes": ""
            },
            {
                "id": "p29-3",
                "speaker": "Vladek (Narrator)",
                "speakerAm": "ቭላዴክ (ተራኪ)",
                "role": "narration",
                "en": "IT WAS THE BEGINNING OF 1938—BEFORE THE WAR—HANGING HIGH IN THE CENTER OF TOWN, IT WAS A NAZI FLAG.. HERE WAS THE FIRST TIME I SAW, WITH MY OWN EYES, THE SWASTIKA.",
                "am": "በ1938 መጀመሪያ ላይ ነበር—ከጦርነቱ በፊት—በከተማይቱ መሃል ከፍ ብሎ የተሰቀለው የናዚ ባንዲራ ነበር... በገዛ ዓይኔ የስዋስቲካን (Swastika) አርማ ለመጀመሪያ ጊዜ ያየሁት እዚህ ነበር።",
                "notes": "Sudetenland in Czechoslovakia was filled with ethnic German pro-Nazi agitation prior to Hitler's annexation in late 1938."
            }
        ]
    },
    {
        "pageNumber": 30,
        "bookPageLabel": "Page 33 (Chapter 2, Comic Page 8)",
        "amharicLabel": "ገጽ 33 (ምዕራፍ 2 - ገጽ 8)",
        "image": "images/page_30.webp",
        "type": "comic",
        "summaryEn": "Train passengers share terrifying stories of escalating Nazi persecution in Germany: pogroms, synagogue burnings, and public humiliation.",
        "summaryAm": "የባቡሩ ተሳፋሪዎች በጀርመን ውስጥ ስለሚፈጸሙት የናዚ ጭካኔዎች፣ የፀረ-አይሁድ እልቂት (Pogrom) እና የምኩራቦች መቃጠል አሰቃቂ ታሪኮችን ይጋራሉ።",
        "panels": [
            {
                "id": "p30-1",
                "speaker": "Passenger",
                "speakerAm": "ተሳፋሪ",
                "role": "dialogue",
                "en": "I TELL YOU, THERE'S A POGROM GOING ON IN GERMANY TODAY! ONE FELLOW TOLD US OF HIS COUSIN WHAT WAS LIVING IN GERMANY... HE HAD TO SELL HIS BUSINESS TO A GERMAN AND RUN OUT FROM THE COUNTRY WITHOUT EVEN THE MONEY.",
                "am": "«እላችኋለሁ፣ ዛሬ በጀርመን ውስጥ አይሁዶችን የማጥፋት ጭፍጨፋ (Pogrom) እየተካሄደ ነው!» አንድ ሰው በጀርመን ይኖር ስለነበረው ዘመዱ ነገረን... ንግዱን ለጀርመናዊ በግድ ሸጦ ገንዘቡን እንኳን ሳያገኝ ከአገር መሸሽ ነበረበት።",
                "notes": "Depicts the Aryanization of Jewish businesses under Nazi law."
            },
            {
                "id": "p30-2",
                "speaker": "Vladek (Narrator)",
                "speakerAm": "ቭላዴክ (ተራኪ)",
                "role": "narration",
                "en": "IT WAS VERY HARD THERE FOR THE JEWS—TERRIBLE! ('I AM A FILTHY JEW'). ANOTHER FELLOW TOLD US OF A RELATIVE IN BRANDENBURG— THE POLICE CAME TO HIS HOUSE AND NO ONE HEARD AGAIN FROM HIM.",
                "am": "በዚያ ለአይሁዶች እጅግ በጣም ከባድ እና አስፈሪ ነበር! (በአንገታቸው ላይ «እኔ ቆሻሻ አይሁዳዊ ነኝ» የሚል ሰሌዳ እየተሰቀለባቸው በጎዳና ይዋረዱ ነበር)። ሌላ ሰው በብራንደንበርግ ስለሚኖር ዘመዱ ነገረን—ፖሊሶች ወደ ቤቱ መጡ፣ ከዚያ ወዲህም ድምፁ ጠፋ።",
                "notes": ""
            },
            {
                "id": "p30-3",
                "speaker": "Vladek (Narrator)",
                "speakerAm": "ቭላዴክ (ተራኪ)",
                "role": "narration",
                "en": "IT WAS MANY, MANY SUCH STORIES— SYNAGOGUES BURNED, JEWS BEATEN WITH NO REASON, WHOLE TOWNS PUSHING OUT ALL JEWS ('THIS TOWN IS JEW FREE')— EACH STORY WORSE THAN THE OTHER.",
                "am": "እንዲህ ያሉ ስፍር ቁጥር የሌላቸው ታሪኮች ነበሩ—ምኩራቦች ተቃጥለዋል፣ ያለ ምንም ምክንያት አይሁዶች ይደበደባሉ፣ ሙሉ ከተሞች «ከአይሁድ የፀዱ» እየተባሉ ይታወጃሉ—እያንዳንዱ ታሪክ ከቀዳሚው የከፋ ነበር።",
                "notes": "Reflects the prelude to Kristallnacht (Night of Broken Glass) in 1938."
            },
            {
                "id": "p30-4",
                "speaker": "Passengers",
                "speakerAm": "ተሳፋሪዎች",
                "role": "dialogue",
                "en": "PASSENGER 1: 'LET'S HOPE THOSE NAZI GANGSTERS GET THROWN OUT OF POWER!' — PASSENGER 2: 'JUST PRAY THAT THEY DON'T START A WAR!!'",
                "am": "ተሳፋሪ 1፦ «እነዚያ የናዚ ወንበዴዎች ከስልጣን እንዲወገዱ ተስፋ እናድርግ!» — ተሳፋሪ 2፦ «ጦርነት እንዳያነሱ ብቻ ጸልዩ!!»",
                "notes": "Tragically, within a year, the war broke out, engulfing Poland and the entire world."
            }
        ]
    }
,

    // -------------------------------------------------------------
    // BATCH 4: PAGES 31 - 40 (Ch. 2 Climax & Ch. 3 Prisoner of War)
    // -------------------------------------------------------------
    {
        "pageNumber": 31,
        "bookPageLabel": "Page 34 (Chapter 2, Comic Page 9)",
        "amharicLabel": "ገጽ 34 (ምዕራፍ 2 - ገጽ 9)",
        "image": "images/page_31.webp",
        "type": "comic",
        "summaryEn": "Vladek and Anja arrive at the lavish Czechoslovakian sanitarium. Anja begins to recover and receives photos of baby Richieu.",
        "summaryAm": "ቭላዴክና አንጃ በቼኮዝሎቫኪያ ወደሚገኘው የቅንጦት ህክምና ማዕከል ደረሱ፤ አንጃ እያገገመች ትመጣለች፣ የህፃኑን የሪሺዩን ፎቶም ተቀበለች።",
        "panels": [
            {
                "id": "p31-1",
                "speaker": "Vladek (Narrator)",
                "speakerAm": "ቭላዴክ (ተራኪ)",
                "role": "narration",
                "en": "THE SANITARIUM WAS FAR AWAY FROM EVERYTHING— SO PEACEFUL, SO QUIET.",
                "am": "የህክምና ማዕከሉ ከሁሉም ግርግር የራቀ ነበር—እጅግ ጸጥተኛ፣ እጅግ ሰላማዊ።",
                "notes": ""
            },
            {
                "id": "p31-2",
                "speaker": "Vladek & Anja",
                "speakerAm": "ቭላዴክ እና አንጃ",
                "role": "dialogue",
                "en": "VLADEK: 'LOOK AT HOW BEAUTIFUL THESE GARDENS ARE, ANJA.' — ANJA: 'UH HUH.' (PEOPLE CAME FROM ALL OVER THE WORLD WITH DIFFERENT SICKNESSES. IT WAS EVEN SHOPS HERE... A THEATER... REALLY BEAUTIFUL...)",
                "am": "ቭላዴክ፦ «አንጃ፣ እነዚህ የአትክልት ስፍራዎች ምን ያህል ውብ እንደሆኑ ተመልከቺ።» — አንጃ፦ «እህ-እህ።» (ከተለያዩ የበሽታ ዓይነቶች ለማገገም ሰዎች ከመላው ዓለም ይመጡ ነበር። እዚህ ሱቆች፣ የቴአትር አዳራሽ ሳይቀር ነበሩ... በእውነቱ እጅግ ውብ ነበር...)",
                "notes": ""
            },
            {
                "id": "p31-3",
                "speaker": "Vladek & Anja",
                "speakerAm": "ቭላዴክ እና አንጃ",
                "role": "dialogue",
                "en": "VLADEK: 'OUR ROOM IS LIKE A LUXURY HOTEL—LOOK AT THIS VIEW.' — ANJA: 'UH HUH.' (EACH MORNING NURSES WOULD VISIT TO ANJA.)",
                "am": "ቭላዴክ፦ «ክፍላችን ልክ የቅንጦት ሆቴል ይመስላል—ይህን እይታ ተመልከቺ።» — አንጃ፦ «እህ-እህ።» (በየማለዳው ነርሶች አንጃን ለመንከባከብ ይመጡ ነበር።)",
                "notes": ""
            },
            {
                "id": "p31-4",
                "speaker": "Anja & Vladek",
                "speakerAm": "አንጃ እና ቭላዴክ",
                "role": "dialogue",
                "en": "AND EACH FEW DAYS I TALKED TO THE BIG SPECIALIST AT THE CLINIC. ANJA: 'WELL, WHAT DID THE DOCTOR SAY??' — VLADEK: 'HE TOLD ME YOU'RE DOING FINE... FINE... JUST RELAX.'",
                "am": "በየጥቂት ቀኑም በክሊኒኩ ውስጥ ካለው ዋና ስፔሻሊስት ጋር እናገር ነበር። አንጃ፦ «እንግዲህ፣ ዶክተሩ ምን አለ??» — ቭላዴክ፦ «በጣም በጥሩ ሁኔታ እያገገምሽ እንደሆነ ነገረኝ... ደህና ነሽ... ብቻ ተረጋጊ።»",
                "notes": ""
            },
            {
                "id": "p31-5",
                "speaker": "Vladek (Narrator)",
                "speakerAm": "ቭላዴክ (ተራኪ)",
                "role": "narration",
                "en": "I UNDERSTOOD MUCH OF SUCH SICKNESSES, SO I HELPED ALWAYS TO CALM HER DOWN.",
                "am": "ስለ እንደዚህ ዓይነት ህመሞች ብዙ እረዳ ነበር፤ ስለዚህም እርሷን ለማረጋጋት ሁልጊዜ እረዳ ነበር።",
                "notes": ""
            },
            {
                "id": "p31-6",
                "speaker": "Vladek & Anja",
                "speakerAm": "ቭላዴክ እና አንጃ",
                "role": "dialogue",
                "en": "VLADEK: 'LOOK—WE GOT A LETTER FROM HOME TODAY. WITH A PHOTO OF RICHIEU—LET ME SEE.' — ANJA: 'HE'S A HANDSOME BOY... JUST LIKE HIS FATHER, YES?' — VLADEK: 'YES.'",
                "am": "ቭላዴክ፦ «ተመልከቺ—ዛሬ ከቤት ደብዳቤ ደርሶናል። የሪሺዩ ፎቶም አብሮ አለ—እስቲ ላሳይሽ።» — አንጃ፦ «ቆንጆ ልጅ ነው... ልክ እንደ አባቱ፣ አይደል?» — ቭላዴክ፦ «አዎ።»",
                "notes": ""
            }
        ]
    },
    {
        "pageNumber": 32,
        "bookPageLabel": "Page 35 (Chapter 2, Comic Page 10)",
        "amharicLabel": "ገጽ 35 (ምዕራፍ 2 - ገጽ 10)",
        "image": "images/page_32.webp",
        "type": "comic",
        "summaryEn": "Vladek entertains Anja in cafes and tells the comical family story of his father chasing a lost pillow on horseback in 1914.",
        "summaryAm": "ቭላዴክ በአዳራሾች ውስጥ አንጃን እያስደሰተ በ1914 አባቱ በፈረስ የጠፋበትን ትራስ ሲያሳድድ የደረሰበትን አስቂኝ ታሪክ ይተርክላታል።",
        "panels": [
            {
                "id": "p32-1",
                "speaker": "Vladek",
                "speakerAm": "ቭላዴክ (አባት)",
                "role": "dialogue",
                "en": "IN THE EVENINGS WE WENT EITHER TO THE THEATER OR TO DANCE IN THE CAFE. 'DID I TELL YOU THE TRAGEDY ABOUT THE PILLOW MY FAMILY LOST AT THE START OF THE 1914 WAR?'",
                "am": "ምሽት ላይ ወደ ቴአትር ወይም በካፌው ውስጥ ዳንስ እንሄድ ነበር። «በ1914 ጦርነት መጀመሪያ ላይ ቤተሰቦቼ ስለጠፋባቸው ትራስ አስቂኝ መከራ ነግሬሻለሁ?»",
                "notes": "Refers to the outbreak of World War I in 1914."
            },
            {
                "id": "p32-2",
                "speaker": "Vladek",
                "speakerAm": "ቭላዴክ (አባት)",
                "role": "dialogue",
                "en": "I WAS SEVEN... WE LIVED TOO CLOSE TO THE BORDER... IT WASN'T SAFE... SO WE TOOK WHAT WE COULD ON A WAGON PULLED BY FOUR HORSES AND WENT TO MY GRANDFATHER'S HOME IN RADOMSKO...",
                "am": "ሰባት ዓመቴ ነበር... ለድንበሩ እጅግ ተቀራርበን እንኖር ነበርና አስተማማኝ አልነበረም... ስለዚህ በአራት ፈረሶች በሚጎተት ጋሪ የቻልነውን ጭነን በራዶምስኮ ወደሚገኘው የአያቴ ቤት ተጓዝን...",
                "notes": ""
            },
            {
                "id": "p32-3",
                "speaker": "Vladek",
                "speakerAm": "ቭላዴክ (አባት)",
                "role": "dialogue",
                "en": "SOMEONE RODE PAST US AND TOLD US THAT WE'D DROPPED A PILLOW A FEW MILES BACK. A GUY TRAVELING TO AMSTOW PICKED IT UP. IMAGINE—MY FATHER NEVER RODE A HORSE BEFORE...",
                "am": "አንድ መንገደኛ አልፎን ሲሄድ ከጥቂት ማይሎች በፊት ትራስ እንደጣርን ነገረን፤ ወደ አምስቶው የሚጓዝ ሰውም አንስቶታል። አስቢው እንግዲህ—አባቴ በህይወቱ ፈረስ ጋልቦ አያውቅም ነበር...",
                "notes": ""
            },
            {
                "id": "p32-4",
                "speaker": "Vladek",
                "speakerAm": "ቭላዴክ (አባት)",
                "role": "dialogue",
                "en": "BUT HE UNHITCHED ONE FROM THE WAGON AND RODE TOWARD AMSTOW. WE WAITED AND WAITED... MOTHER STARTED CRYING: 'SURELY HE FELL AND GOT KILLED!' SHE HAD BEGGED HIM TO 'LET THE PILLOW GO AND TAKE ALL OUR TROUBLES WITH IT!'",
                "am": "ነገር ግን ከጋሪው አንዱን ፈረስ ፈትቶ ወደ አምስቶው ጋለበ! እኛም ጠበቅን ጠበቅን... እናቴ እያለቀሰች፦ «በእርግጠኝነት ወድቆ ተገድሏል!» አለች። እርሷም «ትራሱ ይቅር መከራችንን ይዞ ይጥፋ» ብላ ለምናው ነበር!",
                "notes": ""
            },
            {
                "id": "p32-5",
                "speaker": "Vladek & Anja",
                "speakerAm": "ቭላዴክ እና አንጃ",
                "role": "dialogue",
                "en": "THE HORSE WAS BONY AND DIDN'T HAVE A SADDLE... FINALLY, LATE THAT NIGHT, FATHER RODE BACK WITH THE PILLOW... UNDER HIS BLOODY 'TUCHUS'... SO, FATHER GOT HIS PILLOW BACK... BUT HE COULDN'T SIT DOWN FOR THE REST OF THE WAR! — ANJA: 'I LOVE YOU, VLADEK.'",
                "am": "ፈረሱ ኮርቻ ያልነበረው የቀጨጨ ፈረስ ነበር... በመጨረሻም በዚያው ምሽት አባቴ ትራሱን በደማው መቀመጫው (Tuchus) ስር አድርጎ ተመለሰ!... እናም አባቴ ትራሱን አስመለሰ፤ ነገር ግን በቀረው የጦርነቱ ዘመን በሙሉ መቀመጥ አልቻለም ነበር! — አንጃ፦ «እወድሃለሁ ቭላዴክ።»",
                "notes": "'Tuchus' is Yiddish for backside/rear end."
            },
            {
                "id": "p32-6",
                "speaker": "Vladek (Narrator)",
                "speakerAm": "ቭላዴክ (ተራኪ)",
                "role": "narration",
                "en": "AND SHE WAS SO LAUGHING AND SO HAPPY, THAT SHE APPROACHED EACH TIME AND KISSED ME, SO HAPPY SHE WAS.",
                "am": "በጣም ሳቀች እና እጅግ ደስተኛ ሆነች፤ ሁልጊዜም ወደ እኔ እየቀረበች ትስማኝ ነበር፣ ያን ያህል ደስተኛ ሆና ነበር።",
                "notes": ""
            }
        ]
    },
    {
        "pageNumber": 33,
        "bookPageLabel": "Page 36 (Chapter 2, Comic Page 11)",
        "amharicLabel": "ገጽ 36 (ምዕራፍ 2 - ገጽ 11)",
        "image": "images/page_33.webp",
        "type": "comic",
        "summaryEn": "After 3 months, they return healthy to Poland, but discover Vladek's Bielsko factory was looted while they were away.",
        "summaryAm": "ከ3 ወራት በኋላ ጤናዋ ተመልሶ ወደ ፖላንድ ሲመለሱ፣ በሌሉበት ወቅት በቤልስኮ የሚገኘው የቭላዴክ ፋብሪካ ሙሉ በሙሉ እንደተዘረፈ ያውቃሉ።",
        "panels": [
            {
                "id": "p33-1",
                "speaker": "Vladek (Narrator)",
                "speakerAm": "ቭላዴክ (ተራኪ)",
                "role": "narration",
                "en": "WE STAYED MAYBE 3 MONTHS, AND WHEN WE CAME BACK, ANJA WAS COMPLETELY DIFFERENT FROM WHEN SHE LEFT.",
                "am": "ለሦስት ወራት ያህል ቆየን፤ ስንመለስም አንጃ ከሄደችበት ጊዜ ፍጹም የተለየች (ደስተኛና ጤነኛ) ሆና ነበር።",
                "notes": ""
            },
            {
                "id": "p33-2",
                "speaker": "Anja & Father-in-law",
                "speakerAm": "አንጃ እና አባቷ",
                "role": "dialogue",
                "en": "ANJA: 'YOO HOO, POPPA!' — FATHER: 'ANJA! YOU LOOK LIKE A MILLION!'",
                "am": "አንጃ፦ «ዩሁ አባዬ!» — አባቷ፦ «አንጃ! ልክ እንደ ሚሊየን ብር ታበሪያለሽ እኮ!»",
                "notes": ""
            },
            {
                "id": "p33-3",
                "speaker": "Father-in-law & Vladek",
                "speakerAm": "አማቱ እና ቭላዴክ",
                "role": "dialogue",
                "en": "FATHER: 'LISTEN, VLADEK... I DIDN'T WANT YOU TO WORRY WHILE YOU WERE AT THE SANITARIUM, BUT— BRACE YOURSELF—THE BIELSKO FACTORY HAS BEEN ROBBED!' — VLADEK: 'WHAT!'",
                "am": "አማቱ፦ «ስማኝ ቭላዴክ... በህክምና ማዕከሉ ሳለህ እንድትጨነቅ አልፈለግኩም ነበር፣ ነገር ግን—ልብህን አጠንክር—የቤልስኮው ፋብሪካህ ተዘርፏል!» — ቭላዴክ፦ «ምን?!»",
                "notes": ""
            },
            {
                "id": "p33-4",
                "speaker": "Father-in-law & Vladek",
                "speakerAm": "አማቱ እና ቭላዴክ",
                "role": "dialogue",
                "en": "FATHER: 'IT HAPPENED LAST MONTH. THEY TOOK EVERYTHING!' — VLADEK: 'AI! AI! AI! I DIDN'T EVEN HAVE TIME TO INSURE IT BEFORE WE LEFT.' — FATHER: 'WELL, AT LEAST I CAN HELP YOU BUILD IT UP AGAIN.'",
                "am": "አማቱ፦ «ባለፈው ወር ነው የተከሰተው፤ ሁሉንም ነገር ወስደውታል!» — ቭላዴክ፦ «ዋይ! ዋይ! ዋይ! ከመሄዳችን በፊት ኢንሹራንስ ለማስገባት እንኳን ጊዜ አልነበረኝም!» — አማቱ፦ «ለማንኛውም እንደገና እንድትገነባው እኔ ልረዳህ እችላለሁ።»",
                "notes": ""
            },
            {
                "id": "p33-5",
                "speaker": "Artie & Vladek",
                "speakerAm": "አርቲ እና ቭላዴክ",
                "role": "dialogue",
                "en": "ARTIE: 'WERE YOU LOOTED AS PART OF SOME KIND OF ANTI-SEMITIC ACTIVITY?' — VLADEK: 'I DON'T THINK THIS WAS IT. JUST A ROBBERY... LIKE WHEN THEY ROBBED US IN REGO PARK HERE, LAST YEAR.'",
                "am": "አርቲ፦ «የተዘረፋችሁት በፀረ-አይሁድ እንቅስቃሴ ምክንያት ነበር እንዴ?» — ቭላዴክ፦ «ያን ያህል አይመስለኝም፤ ተራ ዘረፋ ነበር... ልክ ባለፈው ዓመት እዚህ ሬጎ ፓርክ ውስጥ እንደዘረፉን ዓይነት።»",
                "notes": ""
            },
            {
                "id": "p33-6",
                "speaker": "Vladek",
                "speakerAm": "ቭላዴክ (አባት)",
                "role": "dialogue",
                "en": "WELL... IN BIELSKO, FATHER-IN-LAW HELPED US AGAIN TO ESTABLISH OURSELVES...",
                "am": "ለማንኛውም... በቤልስኮ አማቴ እንደገና ራሳችንን እንድናቋቁም ረዳን...",
                "notes": ""
            }
        ]
    },
    {
        "pageNumber": 34,
        "bookPageLabel": "Page 37 (Chapter 2, Comic Page 12)",
        "amharicLabel": "ገጽ 37 (ምዕራፍ 2 - ገጽ 12)",
        "image": "images/page_34.webp",
        "type": "comic",
        "summaryEn": "Vladek re-establishes a prosperous life in Bielsko, but anti-Semitic riots break out in town with chants of 'Jews Out!'",
        "summaryAm": "ቭላዴክ በቤልስኮ የተደላደለ ኑሮውን መልሶ ያደራጃል፤ ነገር ግን በከተማይቱ «አይሁዶች ይውጡ!» የሚሉ የፀረ-አይሁድ ሁከቶች ይፈነዳሉ።",
        "panels": [
            {
                "id": "p34-1",
                "speaker": "Vladek (Narrator)",
                "speakerAm": "ቭላዴክ (ተራኪ)",
                "role": "narration",
                "en": "IN A COUPLE MONTHS WE WERE WELL-OFF—QUITE WELL-OFF... A WORKING FACTORY, A 2-BEDROOM APARTMENT, A POLISH GOVERNESS, AND EVEN A MAID.",
                "am": "በጥቂት ወራት ውስጥ ኑሯችን ተደላደለ—በጣም ጥሩ ሆነ... የሚሰራ ፋብሪካ፣ ባለ ሁለት መኝታ አፓርታማ፣ ፖላንዳዊት ሞግዚት፣ አልፎ ተርፎም አገልጋይ ነበረችን።",
                "notes": ""
            },
            {
                "id": "p34-2",
                "speaker": "Governess & Anja",
                "speakerAm": "ሞግዚቷ እና አንጃ",
                "role": "dialogue",
                "en": "GOVERNESS: 'LOOK, RICHIEU, POPPA'S HOME!' — ANJA: 'YOU LOOK UPSET, VLADEK.' — VLADEK: 'THERE WAS ANOTHER RIOT DOWNTOWN TODAY... EVERYONE YELLING, \"JEWS OUT! JEWS OUT!\"... EVEN TWO PEOPLE KILLED. THE POLICE JUST WATCHED!'",
                "am": "ሞግዚት፦ «እይ ሪሺዩ፣ አባዬ ወደ ቤት መጣ!» — አንጃ፦ «ተረብሸሃል እኮ ቭላዴክ?» — ቭላዴክ፦ «ዛሬ ከተማ ውስጥ ሌላ ሁከት ተነስቶ ነበር... ሁሉም ሰው \"አይሁዶች ይውጡ! አይሁዶች ይውጡ!\" እያለ ይጮሃል... ሁለት ሰዎች እንኳን ተገድለዋል። ፖሊስ ዝም ብሎ ይመለከት ነበር!»",
                "notes": ""
            },
            {
                "id": "p34-3",
                "speaker": "Vladek & Anja",
                "speakerAm": "ቭላዴክ እና አንጃ",
                "role": "dialogue",
                "en": "VLADEK: 'IT'S THOSE NAZIS STIRRING EVERYBODY UP!' — ANJA: 'WHEN IT COMES TO JEWS, THE POLES DON'T NEED MUCH STIRRING UP!'",
                "am": "ቭላዴክ፦ «ህዝቡን የሚያነሳሱት እነዚያ ናዚዎች ናቸው!» — አንጃ፦ «ስለ አይሁዶች ሲነሳ፣ ፖላንዳውያን ብዙ መቀስቀስ አያስፈልጋቸውም!»",
                "notes": ""
            },
            {
                "id": "p34-4",
                "speaker": "Janina (Governess) & Anja",
                "speakerAm": "ጃኒና (ሞግዚቷ) እና አንጃ",
                "role": "dialogue",
                "en": "JANINA: 'MRS. SPIEGELMAN—HOW CAN YOU SAY SUCH A THING. I THINK OF YOU AS PART OF MY OWN FAMILY!' — ANJA: 'I'M SORRY, JANINA. I DIDN'T MEAN YOU! I'M JUST WORRIED!'",
                "am": "ጃኒና፦ «ወይዘሮ ስፒገልማን—እንዴት እንደዚህ ትያለሽ? እኔ እኮ እንደ ቤተሰቤ ነው የማያችሁ!» — አንጃ፦ «ይቅርታ ጃኒና፣ አንቺን ለማለት ፈልጌ አይደለም! በጣም ስለተጨነቅኩ ነው!»",
                "notes": ""
            },
            {
                "id": "p34-5",
                "speaker": "Anja & Vladek",
                "speakerAm": "አንጃ እና ቭላዴክ",
                "role": "dialogue",
                "en": "ANJA: 'MAYBE WE SHOULD MOVE AWAY, LIKE SOME OTHERS HAVE.' — VLADEK: 'IF THINGS GET REALLY BAD WE'LL RUN BACK TO SOSNOWIEC.'",
                "am": "አንጃ፦ «እንደ ሌሎች ሰዎች እኛም ከዚህ ብንሸሽ ይሻል ይሆን?» — ቭላዴክ፦ «ነገሮች በጣም ከተበላሹ ወደ ሶስኖቪየክ እንሸሻለን።»",
                "notes": ""
            },
            {
                "id": "p34-6",
                "speaker": "Artie & Vladek",
                "speakerAm": "አርቲ እና ቭላዴክ",
                "role": "dialogue",
                "en": "ARTIE: 'WHY WOULD SOSNOWIEC BE ANY SAFER THAN BIELSKO?' — VLADEK: 'WE THOUGHT THEN, THAT HITLER WANTED ONLY THE PARTS FROM POLAND, LIKE BIELSKO, WHAT USED TO BE PARTS FROM GERMANY BEFORE THE FIRST WORLD WAR.'",
                "am": "አርቲ፦ «ሶስኖቪየክ ከቤልስኮ ይበልጥ እንዴት ሰላም ይሆናል ተብሎ ይታሰባል?» — ቭላዴክ፦ «ያን ጊዜ ያሰብነው፣ ሂትለር የሚፈልገው ልክ እንደ ቤልስኮ ያሉ ከድሮው የአንደኛው የዓለም ጦርነት በፊት የጀርመን አካል የነበሩትን የፖላንድ ግዛቶች ብቻ ነው ብለን ነበር።»",
                "notes": ""
            }
        ]
    },
    {
        "pageNumber": 35,
        "bookPageLabel": "Page 38 (Chapter 2, Comic Page 13)",
        "amharicLabel": "ገጽ 38 (ምዕራፍ 2 - ገጽ 13)",
        "image": "images/page_35.webp",
        "type": "comic",
        "summaryEn": "August 24, 1939: Vladek receives a draft notice for the Polish army reserves. Anja flees to Sosnowiec while Vladek marches to the frontier.",
        "summaryAm": "ነሐሴ 24፣ 1939 ቭላዴክ የውትድርና ጥሪ ደረሰው፤ አንጃ እቃዎችን ይዛ ወደ ሶስኖቪየክ ስትሸሽ፣ ቭላዴክ ወደ ጀርመን ድንበር ግንባር ዘመተ።",
        "panels": [
            {
                "id": "p35-1",
                "speaker": "Vladek & Anja",
                "speakerAm": "ቭላዴክ እና አንጃ",
                "role": "dialogue",
                "en": "WE WERE VERY HAPPY, STILL, FOR OVER A YEAR—UNTIL AUGUST 24, 1939. ANJA: 'A LETTER—FROM THE GOVERNMENT!' — VLADEK: 'A DRAFT NOTICE! I WAS IN THE POLISH RESERVES ARMY, AND SO I HAD TO GO RIGHT AWAY!'",
                "am": "ለአንድ ዓመት ያህል በጣም ደስተኞች ነበርን—እስከ ነሐሴ 24፣ 1939 ድረስ። አንጃ፦ «ከመንግስት የተላከ ደብዳቤ!» — ቭላዴክ፦ «የውትድርና ጥሪ! እኔ በተጠባባቂው የፖላንድ ጦር ውስጥ ነበርኩ፣ ስለዚህ ወዲያውኑ መዝመት ነበረብኝ!»",
                "notes": "August 24, 1939 was just one week before Hitler invaded Poland."
            },
            {
                "id": "p35-2",
                "speaker": "Vladek & Anja",
                "speakerAm": "ቭላዴክ እና አንጃ",
                "role": "dialogue",
                "en": "IT WAS A BIG CONFUSION... EVERYONE KNEW IT WOULD BE NOW A WAR... VLADEK: 'QUICK! PACK EVERYTHING! YOUR FATHER WILL TAKE YOU TO SOSNOWIEC.' — ANJA: 'VLADEK, I'M AFRAID!'",
                "am": "ትልቅ ግራ መጋባት ተፈጠረ... አሁን ጦርነት መፈንዳቱ አይቀሬ መሆኑን ሁሉም ሰው ያውቅ ነበር... ቭላዴክ፦ «ቶሎ በይ! ሁሉንም እቃ አዘጋጂ! አባትሽ ይዞሽ ወደ ሶስኖቪየክ ይሄዳል።» — አንጃ፦ «ቭላዴክ፣ በጣም ፈርቻለሁ!»",
                "notes": ""
            },
            {
                "id": "p35-3",
                "speaker": "Vladek & Anja",
                "speakerAm": "ቭላዴክ እና አንጃ",
                "role": "dialogue",
                "en": "VLADEK: 'GRAB YOUR KNICK-KNACKS, AND THE DOLL COLLECTION!' — ANJA: 'THEY'RE NOT IMPORTANT!' — VLADEK: 'YOU'LL SEE. YOU MAY ENJOY THEM.' (I WAS RIGHT. WHEN THINGS WENT WORSE LATER, SHE WAS ABLE TO SELL SUCH THINGS.)",
                "am": "ቭላዴክ፦ «ትንንሽ ጌጣጌጦችሽንና የአሻንጉሊት ስብስቦችሽን ሁሉ ያዢ!» — አንጃ፦ «እነርሱ እኮ አስፈላጊ አይደሉም!» — ቭላዴክ፦ «ይገባሻል፣ ቆይቶ ይጠቅሙሻል።» (ትክክል ነበርኩ፤ በኋላ ነገሮች ክፉኛ በተበላሹ ጊዜ እነዚህን እቃዎች ሸጣ መኖር ችላለች።)",
                "notes": ""
            },
            {
                "id": "p35-4",
                "speaker": "Vladek (Narrator)",
                "speakerAm": "ቭላዴክ (ተራኪ)",
                "role": "narration",
                "en": "SO ANJA AND RICHIEU AND THE GOVERNESS WENT IN ONE WAY—TO SOSNOWIEC... AND I WENT THEN IN A DIFFERENT DIRECTION... TO THE FRONTIER AGAINST GERMANY.",
                "am": "እናም አንጃ፣ ሪሺዩ እና ሞግዚቷ በአንድ አቅጣጫ—ወደ ሶስኖቪየክ ተጓዙ... እኔ ደግሞ ወደ ሌላ አቅጣጫ... በጀርመን ድንበር ወደሚገኘው ግንባር አመራሁ።",
                "notes": ""
            }
        ]
    },
    {
        "pageNumber": 36,
        "bookPageLabel": "Page 39 (Chapter 2, Comic Page 14)",
        "amharicLabel": "ገጽ 39 (ምዕራፍ 2 - ገጽ 14)",
        "image": "images/page_36.webp",
        "type": "comic",
        "summaryEn": "September 1, 1939: The war begins. In Rego Park, Vladek complains of his blind glass eye, hemorrhages, and botched surgeries.",
        "summaryAm": "መስከረም 1፣ 1939 ጦርነቱ ፈነዳ፤ በሬጎ ፓርክ ቭላዴክ ስለ ግራ የመስታወት ዓይኑ፣ ስለ ደም መፍሰስ እና ስለ ህመሙ ያወጋል።",
        "panels": [
            {
                "id": "p36-1",
                "speaker": "Vladek",
                "speakerAm": "ቭላዴክ (አባት)",
                "role": "dialogue",
                "en": "AND ON SEPTEMBER 1, 1939, THE WAR CAME. I WAS ON THE FRONT, ONE OF THE FIRST TO— ACH! SO TWICE I SPILLED MY DRUGSTORE!",
                "am": "እናም በመስከረም 1፣ 1939 ጦርነቱ ፈነዳ። እኔ በግንባር ላይ ከነበሩት የመጀመሪያዎቹ አንዱ— አኽ! (ክኒኖቹ ተበተኑ) መድኃኒቶቼን ለሁለተኛ ጊዜ በተንኳቸው!",
                "notes": "September 1, 1939: Nazi Germany invades Poland, igniting World War II."
            },
            {
                "id": "p36-2",
                "speaker": "Vladek",
                "speakerAm": "ቭላዴክ (አባት)",
                "role": "dialogue",
                "en": "IT'S MY EYES. EVER SINCE I GOT IN MY LEFT EYE THE HEMORRHAGING AND THE GLAUCOMA, IT HAD TO BE TAKEN OUT FROM ME. AND NOW I DON'T SEE SO WELL.",
                "am": "ዓይኖቼ ችግር ስላለባቸው ነው። በግራ ዓይኔ ላይ የደም መፍሰስ እና የግላኮማ (Glaucoma) በሽታ ከገጠመኝ ወዲህ ዓይኔ መውጣት ነበረበት፤ አሁን በደንብ ማየት አልችልም።",
                "notes": ""
            },
            {
                "id": "p36-3",
                "speaker": "Vladek & Artie",
                "speakerAm": "ቭላዴክ እና አርቲ",
                "role": "dialogue",
                "en": "VLADEK: 'AND NOW I HAVE A CATARACT INSIDE MY ONE GOOD EYE. YOU SEE HOW I HAVE TO SUFFER? I TOLD YOU ABOUT THE BIG-SHOT SPECIALIST WHAT WAS GOING TO OPERATE ME?' — ARTIE: 'UH-HUH.'",
                "am": "ቭላዴክ፦ «አሁን ደግሞ በቀረችኝ አንዲት ዓይኔ ላይ የዓይን ሞራ (Cataract) አለብኝ። ምን ያህል እንደምሰቃይ ታያለህ? ሊያክመኝ ስለነበረው ትልቅ ስፔሻሊስት ነግሬሃለሁ?» — አርቲ፦ «አዎ።»",
                "notes": ""
            },
            {
                "id": "p36-4",
                "speaker": "Vladek",
                "speakerAm": "ቭላዴክ (አባት)",
                "role": "dialogue",
                "en": "HE LAST YEAR PUT ME INTO THE HOSPITAL FOR AN IMMEDIATE OPERATION... AND THEN HE JUST LEFT ME.. HE WENT SOMEWHERE AWAY TO GIVE LECTURES ON THE TELEVISION!",
                "am": "ባለፈው ዓመት ለአስቸኳይ ቀዶ ህክምና ሆስፒታል አስገባኝ... ከዚያም ዝም ብሎ ጥሎኝ ሄደ... በቴሌቪዥን ላይ ትምህርት ለመስጠት የሆነ ቦታ ሄደ!",
                "notes": ""
            }
        ]
    },
    {
        "pageNumber": 37,
        "bookPageLabel": "Page 40 (Chapter 2 Epilogue)",
        "amharicLabel": "ገጽ 40 (የምዕራፍ 2 ማጠቃለያ)",
        "image": "images/page_37.webp",
        "type": "comic",
        "summaryEn": "Vladek tells of his artificial glass eye and ends the day's storytelling as his hand and Artie's writing hand grow tired.",
        "summaryAm": "ቭላዴክ ስለ ሰራሹ የመስታወት ዓይኑ አስቂኝ ገጠመኝ ይተርካል፤ የእለቱን ታሪክ አጠናቀው አርቲም እጁ እስኪደክም መጻፉን ያቆማል።",
        "panels": [
            {
                "id": "p37-1",
                "speaker": "Vladek",
                "speakerAm": "ቭላዴክ (አባት)",
                "role": "dialogue",
                "en": "MY EYE STARTED SO BLEEDING, I HAD TO RUN OUT TO FIND A DOCTOR IN A DIFFERENT HOSPITAL. THERE ANOTHER SPECIALIST OPERATED RIGHT AWAY! OTHERWISE I COULD HAVE DIED. SO NOW IT'S A GLASS EYE.",
                "am": "ዓይኔ ክፉኛ ደም መፍሰስ ጀመረ፣ በሌላ ሆስፒታል ዶክተር ፍለጋ መሮጥ ነበረብኝ። እዚያ ሌላ ስፔሻሊስት ወዲያውኑ ቀዶ ህክምና አደረገልኝ! አለበለዚያ ልሞት እችል ነበር። አሁን የመስታወት ዓይን (Glass eye) ነው ያለኝ።",
                "notes": ""
            },
            {
                "id": "p37-2",
                "speaker": "Vladek",
                "speakerAm": "ቭላዴክ (አባት)",
                "role": "dialogue",
                "en": "HE DID A GOOD JOB, NO? ONE TIME, EVEN, A YOUNG DOCTOR CAME TO MY BED THERE IN THE HOSPITAL... HE LOOKED WITH A LIGHT A LONG TIME IN MY EYES AND TOLD: 'MR. SPIEGELMAN, YOUR LEFT EYE IS PERFECT!..'",
                "am": "ጥሩ ስራ ሰርቷል፣ አይደል? አንድ ጊዜ እንዲያውም አንድ ወጣት ዶክተር ሆስፒታል ውስጥ ወደ አልጋዬ መጣ... በብርሃን ዓይኖቼን ለረጅም ጊዜ ተመለከተና፦ «አቶ ስፒገልማን፣ የግራ ዓይንዎ እጅግ ፍጹም ነው!..» አለኝ።",
                "notes": ""
            },
            {
                "id": "p37-3",
                "speaker": "Vladek & Artie",
                "speakerAm": "ቭላዴክ እና አርቲ",
                "role": "dialogue",
                "en": "VLADEK: '\"...BUT IN YOUR RIGHT EYE IS CATARACTS.\" HE DIDN'T KNOW, OF COURSE, THAT THE LEFT EYE IS GLASS... AND I DIDN'T TELL ANYTHING TO HIM. I DIDN'T WANT TO MAKE HIM AN EMBARRASSMENT.' — ARTIE: 'UH-HUH—YOU TOLD ME ABOUT THAT.'",
                "am": "ቭላዴክ፦ «\"...ነገር ግን በቀኝ ዓይንዎ ላይ የዓይን ሞራ አለብዎ።\" የግራ ዓይኔ የመስታወት መሆኑን በእርግጥ አላወቀም ነበር... እኔም አላሳፈርኩትም፣ ምንም አልነገርኩትም።» — አርቲ፦ «አዎ—ስለዚህ ጉዳይ ነግረኸኛል እኮ።»",
                "notes": ""
            },
            {
                "id": "p37-4",
                "speaker": "Vladek & Artie",
                "speakerAm": "ቭላዴክ እና አርቲ",
                "role": "dialogue",
                "en": "VLADEK: 'WELL, IT'S ENOUGH FOR TODAY, YES? I'M TIRED AND I MUST COUNT STILL MY PILLS.' — ARTIE: 'OKAY, GOOD IDEA... MY HAND IS SORE FROM WRITING ALL THIS DOWN.'",
                "am": "ቭላዴክ፦ «እንግዲህ፣ ለዛሬ ይበቃናል፣ አይደል? ደክሞኛል፣ ክኒኖቼንም መቁጠር አለብኝ።» — አርቲ፦ «እሺ፣ ጥሩ ሀሳብ ነው... ይህን ሁሉ በመጻፍ እጄ ራሱ ዝሏል።»",
                "notes": "Conclusion of Chapter 2 ('The Honeymoon')."
            }
        ]
    },
    {
        "pageNumber": 38,
        "bookPageLabel": "Page 41 (Chapter 3 Title Page)",
        "amharicLabel": "ገጽ 41 (የምዕራፍ ሦስት ሽፋን)",
        "image": "images/page_38.webp",
        "type": "chapter_cover",
        "summaryEn": "Chapter Three title card 'Prisoner of War' showing German Nazi soldiers capturing a Jewish mouse soldier.",
        "summaryAm": "ምዕራፍ ሦስት «የጦር እስረኛ»፤ ጀርመናውያን ናዚ ወታደሮች አይሁዳዊውን የፖላንድ ወታደር በምርኮ ሲይዙት የሚያሳይ ሽፋን።",
        "panels": [
            {
                "id": "p38-1",
                "speaker": "Chapter Title",
                "speakerAm": "የምዕራፍ ርዕስ",
                "role": "title",
                "en": "CHAPTER THREE: PRISONER of WAR",
                "am": "ምዕራፍ ሦስት፡ የጦር እስረኛ (Prisoner of War)",
                "notes": "Covers Vladek's military service, front-line combat, capture, and internment in Nazi POW camps."
            }
        ]
    },
    {
        "pageNumber": 39,
        "bookPageLabel": "Page 43 (Chapter 3, Comic Page 1)",
        "amharicLabel": "ገጽ 43 (ምዕራፍ 3 - ገጽ 1)",
        "image": "images/page_39.webp",
        "type": "comic",
        "summaryEn": "At dinner in Rego Park, Vladek forces Artie to finish every green bean, recounting his lifelong obsession with never wasting food.",
        "summaryAm": "በሬጎ ፓርክ እራት ላይ ቭላዴክ አርቲ አተር እንዳያተርፍ ያስገድደዋል፤ በህይወት ዘመኑ ምግብን ላለማባከን ያለውን ጽኑ አቋም ያሳያል።",
        "panels": [
            {
                "id": "p39-1",
                "speaker": "Artie (Narrator)",
                "speakerAm": "አርቲ (ተራኪ)",
                "role": "narration",
                "en": "I VISITED MY FATHER MORE OFTEN IN ORDER TO GET MORE INFORMATION ABOUT HIS PAST..",
                "am": "ስለ ቀድሞ ታሪኩ ተጨማሪ መረጃ ለማግኘት አባቴን ይበልጥ በተደጋጋሚ እጠይቀው ነበር...",
                "notes": ""
            },
            {
                "id": "p39-2",
                "speaker": "Mala & Artie",
                "speakerAm": "ማላ እና አርቲ",
                "role": "dialogue",
                "en": "MALA: 'HAVE SOME MORE GREEN BEANS, ARTIE.' — VLADEK: 'YES, LOOK—YOU DON'T EAT ANYTHING!' — ARTIE: 'NO THANKS. I'VE HAD ENOUGH.' — VLADEK: 'SO FINISH AT LEAST WHAT'S ON YOUR PLATE!' — ARTIE: 'OKAY... OKAY.'",
                "am": "ማላ፦ «አርቲ፣ ትንሽ ተጨማሪ ባቄላ ጨምር።» — ቭላዴክ፦ «አዎ፣ ተመልከት—ምንም አልበላህም እኮ!» — አርቲ፦ «አይ አመሰግናለሁ፣ በቅቶኛል።» — ቭላዴክ፦ «ቢያንስ በሳህንህ ላይ ያለውን ጨርስ!» — አርቲ፦ «እሺ... እሺ።»",
                "notes": ""
            },
            {
                "id": "p39-3",
                "speaker": "Artie & Mala",
                "speakerAm": "አርቲ እና ማላ",
                "role": "dialogue",
                "en": "ARTIE: 'Y'KNOW, MALA, WHEN I WAS LITTLE, IF I DIDN'T EAT EVERYTHING MOM SERVED, POP AND I WOULD ARGUE 'TIL I RAN TO MY ROOM CRYING...' — MALA: 'YOU SHOULD KNOW IT'S IMPOSSIBLE TO ARGUE WITH YOUR FATHER.'",
                "am": "አርቲ፦ «ታውቂያለሽ ማላ፣ ህፃን ሳለሁ እናቴ ያቀረበችልኝን ሁሉ ካልጨረስኩ፣ እኔና አባቴ እየተጨቃጨቅን ወደ ክፍሌ ሮጬ እስካለቅስ ድረስ እንጣላ ነበር...» — ማላ፦ «ከአባትህ ጋር መከራከር እንደማይቻል ልታውቅ ይገባሃል።»",
                "notes": ""
            },
            {
                "id": "p39-4",
                "speaker": "Artie & Vladek",
                "speakerAm": "አርቲ እና ቭላዴክ",
                "role": "dialogue",
                "en": "ARTIE: '...MOM WOULD OFFER TO COOK SOMETHING I LIKED BETTER, BUT POP JUST WANTED TO LEAVE THE LEFT-OVER FOOD AROUND UNTIL I ATE IT. SOMETIMES HE'D EVEN SAVE IT TO SERVE AGAIN AND AGAIN UNTIL I'D EAT IT OR STARVE.' — VLADEK: 'YES! SO IT HAS TO BE. ALWAYS YOU MUST EAT ALL WHAT IS ON YOUR PLATE.' — MALA: 'ACCH, VLADEK.'",
                "am": "አርቲ፦ «...እማማ የምወደውን ሌላ ምግብ ልትሰራልኝ ትፈልግ ነበር፤ አባቴ ግን እስክበላው ድረስ የተረፈውን ምግብ እንዳለ ያስቀምጠው ነበር። እስክበላው ወይም እስክራብ ድረስ ደጋግሞ ያቀርብልኝ ነበር።» — ቭላዴክ፦ «አዎ! መሆን ያለበትም እንዲህ ነው! በሳህንህ ላይ ያለውን ሁሉ መብላት አለብህ!» — ማላ፦ «አኽ፣ ቭላዴክ።»",
                "notes": "Holocaust survivors' obsessive relationship with food conservation."
            }
        ]
    },
    {
        "pageNumber": 40,
        "bookPageLabel": "Page 44 (Chapter 3, Comic Page 2)",
        "amharicLabel": "ገጽ 44 (ምዕራፍ 3 - ገጽ 2)",
        "image": "images/page_40.webp",
        "type": "comic",
        "summaryEn": "Artie redirects Vladek from complaining about Mala back to 1939: brief army training and being dug into trenches on the German frontier.",
        "summaryAm": "አርቲ የአባቱን ትኩረት ወደ 1939 ይመልሰዋል፤ የጥቂት ቀናት የውትድርና ስልጠና እና በጀርመን ድንበር ወንዝ አጠገብ በጉድጓዶች ውስጥ የተደረገው ዝግጅት።",
        "panels": [
            {
                "id": "p40-1",
                "speaker": "Artie & Vladek",
                "speakerAm": "አርቲ እና ቭላዴክ",
                "role": "dialogue",
                "en": "ARTIE: 'FORTUNATELY FOR ME, MOM WOULD EVENTUALLY FEED ME SOMETHING I LIKED, AND THROW AWAY THE OLD FOOD WHILE YOU WEREN'T LOOKING.' — VLADEK: 'YES. ANJA WAS TOO EASY WITH YOU ALWAYS.'",
                "am": "አርቲ፦ «እንደ እድል ሆኖ፣ እማማ አንተ ሳታይ ያንን የቆየ ምግብ ደፍታ የምወደውን ሌላ ነገር ታበላኝ ነበር።» — ቭላዴክ፦ «አዎ፣ አንጃ ለአንተ ሁልጊዜም በጣም ልቧ ይራራል ነበር።»",
                "notes": ""
            },
            {
                "id": "p40-2",
                "speaker": "Artie & Vladek",
                "speakerAm": "አርቲ እና ቭላዴክ",
                "role": "dialogue",
                "en": "ARTIE: 'HMMH. THANKS FOR THE DINNER, MALA. IT WAS DELICIOUS.' — VLADEK: 'PFEH—THE CHICKEN WAS, I THOUGHT, TOO DRY. COME, WE'LL TALK BETTER IN THE LIVING ROOM.'",
                "am": "አርቲ፦ «እምም፣ ስለ እራቱ አመሰግናለሁ ማላ፣ በጣም ይጣፍጣል።» — ቭላዴክ፦ «ፕፌህ—ዶሮው በጣም የደረቀ ነበር። ና፣ ሳሎን ውስጥ በደንብ እናወራለን።»",
                "notes": ""
            },
            {
                "id": "p40-3",
                "speaker": "Artie & Vladek",
                "speakerAm": "አርቲ እና ቭላዴክ",
                "role": "dialogue",
                "en": "VLADEK: '...I TELL YOU, WITH MALA I DON'T KNOW WHAT TO DO. SHE—' — ARTIE: 'PLEASE, POP! I'D RATHER NOT HEAR ALL THAT AGAIN. TELL ME ABOUT 1939, WHEN YOU WERE DRAFTED.'",
                "am": "ቭላዴክ፦ «...እልሃለሁ፣ ከማላ ጋር ምን እንደማደርግ ግራ ገብቶኛል። እርሷ እኮ—» — አርቲ፦ «እባክህ አባዬ! ያንን ዳግመኛ ባልሰማ እመርጣለሁ። በ1939 ስለተጠራህበት የውትድርና ጊዜ ንገረኝ።»",
                "notes": ""
            },
            {
                "id": "p40-4",
                "speaker": "Vladek (Narrator)",
                "speakerAm": "ቭላዴክ (ተራኪ)",
                "role": "narration",
                "en": "1939? YES... WE WERE GIVEN ARMY TRAININGS FOR A FEW DAYS AND THEN, BY THE START OF SEPTEMBER WE WERE ON THE FRONTIER... WE WERE ALL DUG INTO TRENCHES NEAR A RIVER. ON THE OTHER SIDE IT WAS GERMANS.",
                "am": "1939? አዎ... ለጥቂት ቀናት የውትድርና ስልጠና ተሰጠን፤ በመስከረም መጀመሪያ ላይም ግንባሩ ላይ ነበርን... በወንዙ አጠገብ በቆፈርናቸው ጉድጓዶች (Trenches) ውስጥ ተደብቀን ነበር። ማዶ በኩል ያሉት ጀርመናውያን ነበሩ።",
                "notes": "The opening battle of WWII on the Polish-German frontier."
            }
        ]
    }
,

    // -------------------------------------------------------------
    // BATCH 5: PAGES 41 - 50 (POW Camp, Frontline, Freezing Tents)
    // -------------------------------------------------------------
    {
        "pageNumber": 41,
        "bookPageLabel": "Page 45 (Chapter 3, Comic Page 3)",
        "amharicLabel": "ገጽ 45 (ምዕራፍ 3 - ገጽ 3)",
        "image": "images/page_41.webp",
        "type": "comic",
        "summaryEn": "Vladek tells Artie about his father's extreme measures to keep his sons out of the military, including pulling teeth and starvation.",
        "summaryAm": "ቭላዴክ አባቱ ልጆቹን ከውትድርና ለማስቀረት ጥርስ እስከመንቀል እና በረሃብ እስከማሰቃየት ያደረጋቸውን አስከፊ ጥረቶች ይተርካል።",
        "panels": [
            {
                "id": "p41-1",
                "speaker": "Artie & Vladek",
                "speakerAm": "አርቲ እና ቭላዴክ",
                "role": "dialogue",
                "en": "IT WAS EVERYTHING QUIET UNTIL NEAR MORNING... ARTIE: 'WAIT A MINUTE. THEY ONLY TRAINED YOU FOR A FEW DAYS BEFORE SENDING YOU INTO COMBAT?' — VLADEK: 'WELL, THE FIRST TIME I WENT INTO THE ARMY FOR 18 MONTHS WHEN I WAS 21. THEN EVERY 4 YEARS I WENT TO LUBLIN FOR A MONTH TO TRAIN.'",
                "am": "እስከ ንጋቱ ድረስ ሁሉም ነገር ጸጥ ያለ ነበር... አርቲ፦ «ቆይ አንድ ደቂቃ! ወደ ውጊያ ከመላካችሁ በፊት ለጥቂት ቀናት ብቻ ነው ያሰለጠኗችሁ?» — ቭላዴክ፦ «የመጀመሪያውን ጊዜ በ21 ዓመቴ ለ18 ወራት በጦር ሰራዊቱ ውስጥ አገልግዬ ነበር። ከዚያም በየ4 ዓመቱ ለስልጠና ለአንድ ወር ወደ ሉብሊን እሄድ ነበር።»",
                "notes": ""
            },
            {
                "id": "p41-2",
                "speaker": "Vladek",
                "speakerAm": "ቭላዴክ (አባት)",
                "role": "dialogue",
                "en": "YOU KNOW, MY FATHER TRIED TO KEEP ALL HIS CHILDREN OUT FROM THE ARMY... BECAUSE WHEN HE WAS YOUNG, HE HAD THEN TO GO INTO THE RUSSIAN ARMY. ...AND THERE THEY TOOK YOU FOR 25 YEARS... TO SIBERIA!",
                "am": "ታውቃለህ፣ አባቴ ልጆቹን በሙሉ ከውትድርና ለማስቀረት ይጥር ነበር... ምክንያቱም እርሱ ወጣት ሳለ በሩሲያ ጦር ሰራዊት ውስጥ መመልመል ነበረበት፤ በዚያም ለ25 ዓመታት... ወደ ሳይቤሪያ ይወስዱህ ነበር!",
                "notes": "Tsarist Russia enforced brutal 25-year military conscription on Jewish men (the Cantonist decrees)."
            },
            {
                "id": "p41-3",
                "speaker": "Vladek",
                "speakerAm": "ቭላዴክ (አባት)",
                "role": "dialogue",
                "en": "MY FATHER PULLED OUT 14 OF HIS TEETH TO ESCAPE. IF YOU MISSED 12 TEETH THEY LEFT YOU GO.",
                "am": "አባቴ ከውትድርና ለማምለጥ 14 ጥርሶቹን በገዛ እጁ ነቀለ! 12 ጥርስ ከጎደለህ በነጻ ይለቁህ ነበር።",
                "notes": ""
            },
            {
                "id": "p41-4",
                "speaker": "Vladek",
                "speakerAm": "ቭላዴክ (አባት)",
                "role": "dialogue",
                "en": "SO WHEN MY BROTHER MARCUS GOT 21 YEARS, FATHER PUT HIM ON A STARVATION DIET. ALWAYS MARCUS WAS SICKLY—SO THIN. AND WHEN HE WENT FOR THE ARMY EXAMINATION... THEY DIDN'T TAKE HIM.",
                "am": "ስለዚህ ወንድሜ ማርከስ 21 ዓመት ሲሞላው፣ አባቴ በከባድ የረሃብ አመጋገብ ላይ አስቀመጠው። ማርከስ ሁልጊዜ ህመምተኛና እጅግ ከሲታ ሆነ፤ ለውትድርና ምርመራ ሲሄድም... አልወሰዱትም።",
                "notes": ""
            },
            {
                "id": "p41-5",
                "speaker": "Vladek",
                "speakerAm": "ቭላዴክ (አባት)",
                "role": "dialogue",
                "en": "A YEAR LATER WHEN IT CAME MY TURN, FATHER WANTED TO MAKE TO ME THE SAME THING. IT WAS SOMETHING TERRIBLE!...",
                "am": "ከአንድ ዓመት በኋላ የእኔ ተራ ሲደርስ፣ አባቴ በእኔም ላይ ተመሳሳይ ነገር ሊያደርግ ፈለገ። እጅግ አስከፊ ነገር ነበር!...",
                "notes": ""
            }
        ]
    },
    {
        "pageNumber": 42,
        "bookPageLabel": "Page 46 (Chapter 3, Comic Page 4)",
        "amharicLabel": "ገጽ 46 (ምዕራፍ 3 - ገጽ 4)",
        "image": "images/page_42.webp",
        "type": "comic",
        "summaryEn": "Vladek's father starves him on salted herring, deprives him of sleep, and fills him with coffee to fail the military physical.",
        "summaryAm": "የቭላዴክ አባት በምርመራው እንዳያልፍ ጨዋማ አሳ ብቻ እያበላ፣ እንቅልፍ በመንሳት እና ቡና በማጠጣት ሰውነቱን አደከመው።",
        "panels": [
            {
                "id": "p42-1",
                "speaker": "Father & Vladek",
                "speakerAm": "አባቱ እና ቭላዴክ",
                "role": "dialogue",
                "en": "THREE MONTHS BEFORE THE EXAMINATION HE STARTED WITH ME... FATHER: 'WAKE UP, VLADEK! YOU'RE SLEEPING TOO MUCH!' — VLADEK: 'ONLY THREE HOURS A NIGHT?'",
                "am": "ከምርመራው ሦስት ወራት ቀደም ብሎ በእኔ ላይ ጀመረ... አባቴ፦ «ተነስ ቭላዴክ! በጣም ትተኛለህ እኮ!» — ቭላዴክ፦ «በሌሊት ሦስት ሰዓት ብቻ ተኝቼ?»",
                "notes": ""
            },
            {
                "id": "p42-2",
                "speaker": "Father & Vladek",
                "speakerAm": "አባቱ እና ቭላዴክ",
                "role": "dialogue",
                "en": "FATHER: 'STOP, VLADEK. YOU MUSTN'T EAT SO MUCH!' — VLADEK: 'BUT I'M HUNGRY!' — FATHER: 'OKAY—HAVE ONE MORE HERRING.' (FOR THREE MONTHS I ATE ONLY SALTED HERRING AND NO WATER TO LOSE WEIGHT.)",
                "am": "አባቴ፦ «ተወው ቭላዴክ፣ ብዙ መብላት የለብህም!» — ቭላዴክ፦ «ግን ራበኝ እኮ!» — አባቴ፦ «እሺ—አንድ ተጨማሪ ጨዋማ አሳ ብላ።» (ክብደት ለመቀነስ ለሦስት ወራት ያህል ጨዋማ አሳ ብቻ በላሁ፣ ውሃም አልጠጣሁም።)",
                "notes": ""
            },
            {
                "id": "p42-3",
                "speaker": "Father & Vladek",
                "speakerAm": "አባቱ እና ቭላዴክ",
                "role": "dialogue",
                "en": "AND A FEW DAYS BEFORE THE EXAM, NO SLEEP AND NO FOOD... FATHER: 'GOOD BOY—JUST A LITTLE MORE COFFEE!' (ONLY A GALLON COFFEE A DAY FOR MY HEART.)",
                "am": "ከምርመራው ጥቂት ቀናት በፊት ምንም እንቅልፍና ምግብ አልነበረም... አባቴ፦ «ጎበዝ ልጅ—ትንሽ ተጨማሪ ቡና ጠጣ!» (ለልቤ ምት መዛባት ሲባል በቀን አንድ ጋሎን ሙሉ ቡና ይጠጣ ነበር።)",
                "notes": ""
            },
            {
                "id": "p42-4",
                "speaker": "Military Doctor & Officer",
                "speakerAm": "የጦር ሐኪሙ እና መኮንኑ",
                "role": "dialogue",
                "en": "AND WHEN FINALLY I WENT FOR MY MEDICAL EXAMINATION... OFFICER: 'HERE'S A HEALTHY ONE.' — DOCTOR: 'UM!... NO... THERE SEEMS TO BE SOMETHING WRONG WITH HIM. BUILD YOURSELF UP FOR A YEAR, YOUNG MAN, AND WE'LL REVIEW YOUR CASE AGAIN.'",
                "am": "በመጨረሻም ለህክምና ምርመራ ስሄድ... መኮንኑ፦ «ይኸው ጤነኛ ልጅ።» — ሐኪሙ፦ «እም!... አይ... በጤንነቱ ላይ የሆነ ችግር ያለ ይመስላል። ወጣት ሰው፣ ለአንድ ዓመት ሰውነትህን አጠንክርና ጉዳይህን እንደገና እናየዋለን።»",
                "notes": ""
            }
        ]
    },
    {
        "pageNumber": 43,
        "bookPageLabel": "Page 47 (Chapter 3, Comic Page 5)",
        "amharicLabel": "ገጽ 47 (ምዕራፍ 3 - ገጽ 5)",
        "image": "images/page_43.webp",
        "type": "comic",
        "summaryEn": "Vladek refused a second year of starvation torture and joined the army in 1922. Fast-forward to 1939: morning gunfire on the border.",
        "summaryAm": "ቭላዴክ ዳግመኛ በረሃብ መሰቃየት ስላልፈለገ በ1922 ጦሩን ተቀላቀለ፤ በ1939 ድንበር ላይ በጠዋት የተኩስ እሩምታ ይከፈታል።",
        "panels": [
            {
                "id": "p43-1",
                "speaker": "Vladek & Artie",
                "speakerAm": "ቭላዴክ እና አርቲ",
                "role": "dialogue",
                "en": "THE NEXT YEAR FATHER WANTED I WOULD AGAIN DO THE SAME THING. BUT I BEGGED HIM AND WENT IN 1922 TO THE ARMY... ARTIE: 'BUT LET'S GET BACK TO 1939!' — VLADEK: 'YES. YOU SEE HOW YOU MIX ME UP? IN 1939 WE WERE ON THE FRONTIER, DIGGED INTO TRENCHES BY A RIVER.'",
                "am": "በቀጣዩ ዓመት አባቴ ተመሳሳይ ነገር እንዳደርግ ፈለገ፤ እኔ ግን ተማጽኜው በ1922 ወደ ጦር ሰራዊቱ ገባሁ... አርቲ፦ «ግን ወደ 1939 ታሪክ እንመለስ!» — ቭላዴክ፦ «አዎ፣ እንዴት እንደምታምታታኝ አየህ? በ1939 ድንበር ላይ፣ በወንዙ ዳር በተቆፈሩ ጉድጓዶች ውስጥ ነበርን።»",
                "notes": ""
            },
            {
                "id": "p43-2",
                "speaker": "Polish Officer & Vladek",
                "speakerAm": "የፖላንድ መኮንን እና ቭላዴክ",
                "role": "dialogue",
                "en": "IT WAS QUIET UNTIL NEAR MORNING. THEN I HEARD SHOOTING ON BOTH SIDES. AN OFFICER SNEAKED OVER TO ME: 'DIG IN DEEPER. YOU'LL GET KILLED. YOUR GUN IS COLD! WHY AREN'T YOU SHOOTING?'",
                "am": "እስከ ንጋቱ ድረስ ጸጥ ያለ ነበር፤ ከዚያም በሁለቱም በኩል የተኩስ ድምፅ ሰማሁ። አንድ መኮንን ወደ እኔ ተደፍቶ መጣ፦ «ጉድጓዱን ጠለቅ አድርገህ ቆፍር፣ ትገደላለህ እኮ! ጠመንጃህ ቀዝቅዟል! ለምን አትተኩስም?»",
                "notes": ""
            },
            {
                "id": "p43-3",
                "speaker": "Vladek",
                "speakerAm": "ቭላዴክ (አባት)",
                "role": "dialogue",
                "en": "I DIDN'T SEE AT WHAT TO SHOOT... (KPOK! KPOK! KPOK!) ...BUT I DIGGED DEEPER AND STARTED TO SHOOT!",
                "am": "ምን ላይ እንደምተኩስ አልታየኝም ነበር... (ክፖክ! ክፖክ! ክፖክ!) ...ነገር ግን ጉድጓዴን ጠለቅ አድርጌ ቆፍሬ መተኮስ ጀመርኩ!",
                "notes": ""
            }
        ]
    },
    {
        "pageNumber": 44,
        "bookPageLabel": "Page 48 (Chapter 3, Comic Page 6)",
        "amharicLabel": "ገጽ 48 (ምዕራፍ 3 - ገጽ 6)",
        "image": "images/page_44.webp",
        "type": "comic",
        "summaryEn": "Vladek spots a moving German soldier camouflaged as a tree and shoots him until he stops moving.",
        "summaryAm": "ቭላዴክ እንደ ዛፍ ቅርንጫፎችን ለብሶ የተደበቀውን የሚንቀሳቀስ የጀርመን ወታደር አይቶ እስኪወድቅ ድረስ ይተኩስበታል።",
        "panels": [
            {
                "id": "p44-1",
                "speaker": "Vladek",
                "speakerAm": "ቭላዴክ (አባት)",
                "role": "narration",
                "en": "THEN BULLETS CAME IN MY DIRECTION. (PWNNG) I DUG DEEPER MY TRENCH BUT I STOPPED TO SHOOT. 'WHY SHOULD I KILL ANYONE?'",
                "am": "ጥይቶች ወደ እኔ አቅጣጫ መዝነብ ጀመሩ። (ፏንግ!) ጉድጓዴን ጠለቅ አድርጌ ቆፈርኩ ነገር ግን መተኮሴን አቆምኩ። «ለምን ማንንም ሰው እገድላለሁ?» ብዬ አሰብኩ።",
                "notes": ""
            },
            {
                "id": "p44-2",
                "speaker": "Vladek",
                "speakerAm": "ቭላዴክ (አባት)",
                "role": "narration",
                "en": "BUT WHEN I LOOKED IN MY GUN, I SAW... A TREE!... AND THE TREE WAS ACTUALLY MOVING! 'I MUST BE SEEING THINGS. HOW CAN A TREE RUN?'",
                "am": "ነገር ግን በጠመንጃዬ ማነጣጠሪያ ስመለከት... አንድ ዛፍ አየሁ!... ዛፉ በእውነቱ ይንቀሳቀስ ነበር! «ቅዥት አይቼ መሆን አለበት፤ ዛፍ እንዴት ይሮጣል?»",
                "notes": "Camouflage foliage used by German assault troops."
            },
            {
                "id": "p44-3",
                "speaker": "Vladek & German Soldier",
                "speakerAm": "ቭላዴክ እና የጀርመን ወታደር",
                "role": "dialogue",
                "en": "WELL, IF IT MOVED, I HAD TO SHOOT! (PNG!) — SOLDIER: 'AKH!'",
                "am": "የሚንቀሳቀስ ከሆነ እንግዲህ መተኮስ ነበረብኝ! (ተኩስ!) — ወታደሩ፦ «አኽ!»",
                "notes": ""
            },
            {
                "id": "p44-4",
                "speaker": "Vladek",
                "speakerAm": "ቭላዴክ (አባት)",
                "role": "narration",
                "en": "IT HELD UP A HAND TO SHOW IT WAS HURT. TO SURRENDER. BUT I KEPT SHOOTING AND SHOOTING, UNTIL FINALLY THE TREE STOPPED MOVING. WHO KNOWS; OTHERWISE HE COULD HAVE SHOT ME!",
                "am": "እንደቆሰለ እና እጅ እንደሚሰጥ ለማሳየት እጁን አነሳ። እኔ ግን ዛፉ መንቀሳቀስ እስኪያቆም ድረስ ሳላቋርጥ ተኮስኩበት። ማን ያውቃል፤ አለበለዚያ እርሱ እኔን ሊተኩስብኝ ይችል ነበር!",
                "notes": "Vladek's honest admission of survival instinct overcoming moral restraint in the chaos of battle."
            }
        ]
    },
    {
        "pageNumber": 45,
        "bookPageLabel": "Page 49 (Chapter 3, Comic Page 7)",
        "amharicLabel": "ገጽ 49 (ምዕራፍ 3 - ገጽ 7)",
        "image": "images/page_45.webp",
        "type": "comic",
        "summaryEn": "The Polish lines collapse. Vladek is captured by German soldiers, escapes a beating by speaking German, and is marched as a POW.",
        "summaryAm": "የፖላንድ ጦር ተሸነፈ፤ ቭላዴክ በጀርመኖች ተማረከ፣ በጀርመንኛ መልስ በመስጠቱ ከድብደባ ተረፈና ወደ ምርኮኞች ተወሰደ።",
        "panels": [
            {
                "id": "p45-1",
                "speaker": "German Soldiers & Vladek",
                "speakerAm": "ጀርመናውያን ወታደሮች እና ቭላዴክ",
                "role": "dialogue",
                "en": "AFTER TWO HOURS OF FIGHTING, THE NAZIS OVERCAME OUR SIDE OF THE RIVER. GERMAN: 'GET UP! GIVE ME YOUR GUN! IT'S HOT! YOU WERE SHOOTING AT US!'",
                "am": "ከሁለት ሰዓታት ውጊያ በኋላ ናዚዎች የወንዙን የእኛን ወገን ተቆጣጠሩት። ጀርመናዊው፦ «ተነስ! ጠመንጃህን ስጠኝ! ጠመንጃው ሞቋል! በእኛ ላይ ስትተኩስ ነበር!»",
                "notes": ""
            },
            {
                "id": "p45-2",
                "speaker": "Vladek",
                "speakerAm": "ቭላዴክ (አባት)",
                "role": "dialogue",
                "en": "MY COMMANDER MADE ME SHOOT. I ONLY FIRED IN THE AIR! (I ANSWERED IN GERMAN AND HIS PARTNER STOPPED HIM FROM BEATING ME.)",
                "am": "«አዛዤ እንድተኩስ አስገድዶኝ ነው፤ ወደ አየር ላይ ብቻ ነው የተኮስኩት!» (በጀርመንኛ መለስኩለት፤ ጓደኛውም እንዳይደበድበኝ ከለከለው።)",
                "notes": ""
            },
            {
                "id": "p45-3",
                "speaker": "Vladek",
                "speakerAm": "ቭላዴክ (ተራኪ)",
                "role": "narration",
                "en": "THEY MARCHED ME TO WHERE IT WAS MORE LIKE ME. WAR PRISONERS. AND ALL FROM US WHAT WEREN'T INJURED THEY MARCHED OVER TO THEIR SIDE OF THE RIVER TO LOOK FOR DEAD SOLDIERS.",
                "am": "እኔን ወደሚመስሉት ወሰዱኝ—ወደ ጦር ምርኮኞች። ያልቆሰልነውን በሙሉ የሞቱ ወታደሮቻቸውን እንድንፈልግ ወደ ወንዙ ማዶ ወሰዱን።",
                "notes": ""
            }
        ]
    },
    {
        "pageNumber": 46,
        "bookPageLabel": "Page 50 (Chapter 3, Comic Page 8)",
        "amharicLabel": "ገጽ 50 (ምዕራፍ 3 - ገጽ 8)",
        "image": "images/page_46.webp",
        "type": "comic",
        "summaryEn": "POWs are ordered to carry dead German soldiers. Vladek finds Jan, the camouflaged soldier he killed, and carries him to the truck.",
        "summaryAm": "ምርኮኞች የሞቱትን ወታደሮች እንዲሸከሙ ታዘዙ፤ ቭላዴክ የተኮሰበትን ጃን የተባለውን ወታደር አስከሬን አግኝቶ ወደ መኪናው ይሸከመዋል።",
        "panels": [
            {
                "id": "p46-1",
                "speaker": "German Officer",
                "speakerAm": "ጀርመናዊ መኮንን",
                "role": "dialogue",
                "en": "ATTENTION! ALL PRISONERS WILL CARRY OUR DEAD AND WOUNDED TO THE WAITING RED CROSS TRUCKS.",
                "am": "«ትኩረት! ሁሉም ምርኮኞች የሞቱትንና የቆሰሉትን ወታደሮቻችንን ወደ ቀይ መስቀል መኪኖች ይሸከማሉ!»",
                "notes": ""
            },
            {
                "id": "p46-2",
                "speaker": "Guard & Vladek",
                "speakerAm": "ጠባቂው እና ቭላዴክ",
                "role": "dialogue",
                "en": "GUARD: 'YOU! WHERE DO YOU THINK YOU'RE GOING?' — VLADEK: 'I-I THOUGHT I SAW A BODY OVER BY THE RIVER!' (I KNEW WHERE THE ONE I SHOT SHOULD BE LAYING.)",
                "am": "ጠባቂው፦ «አንተ! ወዴት እየሄድክ ይመስልሃል?» — ቭላዴክ፦ «በወንዙ ዳር አስከሬን ያየሁ መስሎኝ ነው!» (የተኮስኩበት ሰው የት እንደሚገኝ አውቅ ነበር።)",
                "notes": ""
            },
            {
                "id": "p46-3",
                "speaker": "Guard & Vladek",
                "speakerAm": "ጠባቂው እና ቭላዴክ",
                "role": "dialogue",
                "en": "VLADEK: 'YES. HERE!' — GUARD: 'ER VERBLUTETE! HIS BLOOD RAN OUT! CARRY HIM OVER TO THE TRUCK WITH THE OTHERS.'",
                "am": "ቭላዴክ፦ «አዎ፣ እዚህ አለ!» — ጠባቂው፦ «ደሙ ፈሶ አልቋል! ከሌሎቹ ጋር ወደ መኪናው ውሰደው።»",
                "notes": "'Er verblutete' is German for 'He bled to death'."
            },
            {
                "id": "p46-4",
                "speaker": "Vladek",
                "speakerAm": "ቭላዴክ (ተራኪ)",
                "role": "narration",
                "en": "HIS NAME WAS JAN... AND I KNEW THAT I KILLED HIM. AND I SAID TO MYSELF: 'WELL, AT LEAST I DID SOMETHING.'",
                "am": "ስሙ ጃን (Jan) ይባል ነበር... እኔ እንደገደልኩት አወቅኩ። በልቤም እንዲህ አልኩ፦ «ለማንኛውም ቢያንስ አንዲት ነገር አደረግኩ።»",
                "notes": "A stark, unromanticized depiction of wartime killing."
            }
        ]
    },
    {
        "pageNumber": 47,
        "bookPageLabel": "Page 51 (Chapter 3, Comic Page 9)",
        "amharicLabel": "ገጽ 51 (ምዕራፍ 3 - ገጽ 9)",
        "image": "images/page_47.webp",
        "type": "comic",
        "summaryEn": "POWs arrive at a camp near Nuremberg. Jewish prisoners are segregated, threatened with hanging, and stripped of valuables.",
        "summaryAm": "ምርኮኞች ኑረምበርግ አቅራቢያ ወዳለ ካምፕ ተወሰዱ፤ አይሁዶች ተለይተው በስቅላት ተዛቱ፣ ገንዘባቸውም ተዘረፈ።",
        "panels": [
            {
                "id": "p47-1",
                "speaker": "Nazi Officer",
                "speakerAm": "ናዚ መኮንን",
                "role": "dialogue",
                "en": "THEY TOOK US TO A PLACE NEAR NUREMBERG WHERE IT WAS MANY WAR PRISONERS. THE JEWS THEY MADE TO STAND SEPARATE. OFFICER: 'IT'S ALL YOUR FAULT, THIS WAR! WE SHOULD HANG YOU RIGHT HERE ON THIS SPOT!' (OF COURSE, NOBODY OF US SAID A WORD.)",
                "am": "ኑረምበርግ አቅራቢያ በርካታ የጦር ምርኮኞች ወዳሉበት ቦታ ወሰዱን፤ አይሁዶችን ለይተው እንዲቆሙ አደረጉ። መኮንኑ፦ «የዚህ ጦርነት ጥፋት በሙሉ የእናንተ ነው! እዚሁ ቦታ ላይ ልንሰቅላችሁ ይገባል!» (በእርግጥ ማናችንም አንዲት ቃል አልተናገርንም።)",
                "notes": ""
            },
            {
                "id": "p47-2",
                "speaker": "Guard & Vladek",
                "speakerAm": "ጠባቂው እና ቭላዴክ",
                "role": "dialogue",
                "en": "GUARD: 'PUT DOWN ALL YOUR VALUABLES!' (HE CAME UP TO ME... I HAD MAYBE 300 ZLOTYS. MANY OTHERS HAD ONLY 5 OR 6 ZLOTYS.) GUARD: 'WHY SO MUCH MONEY, JEW? DO YOU EXPECT TO DO SOME BUSINESS HERE? SHOW ME YOUR HANDS!'",
                "am": "ጠባቂው፦ «ያላችሁን ውድ ዕቃ በሙሉ መሬት ላይ አስቀምጡ!» (ወደ እኔ መጣ... ወደ 300 ዝሎቲ ነበረኝ፤ ሌሎች 5 ወይም 6 ዝሎቲ ብቻ ነበር ያላቸው)። ጠባቂው፦ «ለምን ይህን ያህል ገንዘብ ያዝክ አንተ አይሁዳዊ? እዚህ ንግድ ልትሰራ አስበሃል እንዴ? እጆችህን አሳየኝ!»",
                "notes": ""
            },
            {
                "id": "p47-3",
                "speaker": "Guard & Vladek",
                "speakerAm": "ጠባቂው እና ቭላዴክ",
                "role": "dialogue",
                "en": "GUARD: 'YOU NEVER WORKED A DAY IN YOUR LIFE!' — VLADEK (TO ARTIE): 'LIKE YOU, ARTIE, MY HANDS WERE ALWAYS VERY DELICATE.' — GUARD: 'WELL, JEW, DON'T WORRY. WE'LL FIND WORK FOR YOU!' (AND THEY DID.)",
                "am": "ጠባቂው፦ «በህይወትህ አንዲት ቀንም ሰርተህ አታውቅም!» — ቭላዴክ (ለአርቲ)፦ «ልክ እንዳንተ አርቲ፣ የእኔም እጆች ሁልጊዜ በጣም ለስላሳ ነበሩ።» — ጠባቂው፦ «ለማንኛውም አንተ አይሁዳዊ አትጨነቅ፤ ስራ እናገኝልሃለን!» (እናም አገኙልን።)",
                "notes": ""
            }
        ]
    },
    {
        "pageNumber": 48,
        "bookPageLabel": "Page 52 (Chapter 3, Comic Page 10)",
        "amharicLabel": "ገጽ 52 (ምዕራፍ 3 - ገጽ 10)",
        "image": "images/page_48.webp",
        "type": "comic",
        "summaryEn": "Forced labor cleaning stables in an hour. In Rego Park, Vladek chides Artie for dropping cigarette ashes on the carpet.",
        "summaryAm": "በአንድ ሰዓት ውስጥ የፈረስ በረት የማጽዳት አስገዳጅ ስራ፤ በሬጎ ፓርክ ቭላዴክ አርቲን ምንጣፉ ላይ የሲጋራ አመድ በመጣሉ ይገስጻል።",
        "panels": [
            {
                "id": "p48-1",
                "speaker": "German Guard",
                "speakerAm": "ጀርመናዊ ጠባቂ",
                "role": "dialogue",
                "en": "ANOTHER GERMAN TOOK 4 OR 5 FROM US TO A STABLE. 'SEE THIS MESS? IT BETTER BE SPOTLESSLY CLEAN IN ONE HOUR. UNDERSTAND!' (IT WAS IMPOSSIBLE TO DO IT IN ONE HOUR!)",
                "am": "ሌላ ጀርመናዊ አራት ወይም አምስት ሆነን ወደ ፈረስ በረት ወሰደን። «ይህን ቆሻሻ አያችሁ? በአንድ ሰዓት ውስጥ እንከን ሳይኖረው ፅዱ መሆን አለበት። ገብቷችኋል!» (በአንድ ሰዓት ውስጥ መጨረስ በፍጹም የማይቻል ነበር!)",
                "notes": ""
            },
            {
                "id": "p48-2",
                "speaker": "German Guard",
                "speakerAm": "ጀርመናዊ ጠባቂ",
                "role": "dialogue",
                "en": "WE REALLY WORKED VERY HARD. BUT, AN HOUR LATER... 'NOT FINISHED YET? THIS WILL COST YOU YOUR SOUP, YOU LAZY BASTARDS!'",
                "am": "በጣም ደክመን ሰራን፤ ከአንድ ሰዓት በኋላ ግን ጠባቂው መጥቶ፦ «ገና አልጨረሳችሁም?! እናንተ ሰነፎች፣ ይህ የዕለት ሾርባችሁን ያሳጣችኋል!» አለን።",
                "notes": ""
            },
            {
                "id": "p48-3",
                "speaker": "Vladek & Artie",
                "speakerAm": "ቭላዴክ እና አርቲ",
                "role": "dialogue",
                "en": "VLADEK: 'AND SOMEHOW WE DID MAKE THE JOB IN ONLY AN HOUR AND A HALF. BUT LOOK WHAT YOU DO, ARTIE! YOU'RE DROPPING ON THE CARPET CIGARETTE ASHES. YOU WANT IT SHOULD BE LIKE A STABLE HERE?' — ARTIE: 'OOPS. SORRY.'",
                "am": "ቭላዴክ፦ «በሆነ መንገድ ስራውን በአንድ ሰዓት ተኩል ውስጥ አጠናቀቅነው። ግን አንተ የምታደርገውን እይ እስቲ አርቲ! በምንጣፉ ላይ የሲጋራ አመድ ታረግፋለህ፤ እዚህ ቤቱ እንደ ፈረስ በረት እንዲሆን ፈለግክ እንዴ?» — አርቲ፦ «ውይ፣ ይቅርታ።»",
                "notes": "Classic Spiegelman juxtaposition between past trauma and present neuroses."
            },
            {
                "id": "p48-4",
                "speaker": "Vladek & Artie",
                "speakerAm": "ቭላዴክ እና አርቲ",
                "role": "dialogue",
                "en": "VLADEK: 'CLEAN IT, YES? OTHERWISE I HAVE TO DO IT. MALA COULD LET IT SIT LIKE THIS FOR A WEEK AND NEVER TOUCH IT.' — ARTIE: 'OKAY, OKAY. IT'S CLEAN.'",
                "am": "ቭላዴክ፦ «አጽዳው፣ እሺ? አለበለዚያ እኔ ራሴ ማጽዳት አለብኝ። ማላ ብትሆን ለአንድ ሳምንት እንዳለ ትተወዋለች።» — አርቲ፦ «እሺ፣ እሺ፣ ጸድቷል።»",
                "notes": ""
            }
        ]
    },
    {
        "pageNumber": 49,
        "bookPageLabel": "Page 53 (Chapter 3, Comic Page 11)",
        "amharicLabel": "ገጽ 53 (ምዕራፍ 3 - ገጽ 11)",
        "image": "images/page_49.webp",
        "type": "comic",
        "summaryEn": "Jewish POWs freeze in unheated tents during a brutal autumn. While others suffer frostbite and lice, Vladek bathes daily in the freezing river.",
        "summaryAm": "አይሁድ ምርኮኞች በብርድ ድንኳኖች ውስጥ ይንቀጠቀጣሉ፤ ሌሎች በቁስልና በቅማል ሲሰቃዩ፣ ቭላዴክ በየቀኑ በበረዶ ወንዝ ይታጠባል።",
        "panels": [
            {
                "id": "p49-1",
                "speaker": "Jewish POWs",
                "speakerAm": "አይሁድ ምርኮኞች",
                "role": "dialogue",
                "en": "SO WE LIVED AND WORKED A FEW WEEKS IN THE STABLE UNTIL THEY TOOK US TO AN EVEN BIGGER PRISONER OF WAR CAMP. POW 1: 'BRRR. THE POLISH PRISONERS GET HEATED CABINS.' — POW 2: 'YES. AND WE'RE JUST LEFT TO FREEZE IN THESE TENTS.'",
                "am": "ይበልጥ ወደተለቀቀ የጦር ካምፕ እስኪወስዱን ድረስ ለጥቂት ሳምንታት በበረት ውስጥ ኖርን። ምርኮኛ 1፦ «ብርድ! ፖላንዳውያን ምርኮኞች የሞቀ ቤት ተሰጥቷቸዋል።» — ምርኮኛ 2፦ «አዎ፤ እኛ አይሁዶች ግን በዚህ ድንኳን ውስጥ እንድንበርድ ተጥለናል።»",
                "notes": "Discriminatory treatment between non-Jewish and Jewish Polish prisoners of war."
            },
            {
                "id": "p49-2",
                "speaker": "Vladek",
                "speakerAm": "ቭላዴክ (ተራኪ)",
                "role": "narration",
                "en": "IT WAS TERRIBLE COLD THAT AUTUMN. ALL OVER EUROPE IT WAS SO FREEZING THAT BIRDS FELL FROM TREES. TO KEEP WARM WE HAD ONLY OUR SUMMER UNIFORMS AND A THIN BLANKET.",
                "am": "ያ መኸር እጅግ አስከፊ ቅዝቃዜ ነበረው። በመላው አውሮፓ ወፎች ከዛፍ ላይ እስኪረግፉ ድረስ በረዶ ነበር። ለመሞቅ የበጋ ልብሳችንና ቀጭን ብርድ ልብስ ብቻ ነበረን።",
                "notes": ""
            },
            {
                "id": "p49-3",
                "speaker": "POW & Vladek",
                "speakerAm": "ምርኮኛ እና ቭላዴክ",
                "role": "dialogue",
                "en": "THE OTHER PRISONERS GET TWO MEALS A DAY. WE JEWS GET ONLY A CRUST OF BREAD AND A LITTLE SOUP. POW: 'WHERE ARE YOU GOING?' — VLADEK: 'TO BATHE IN THE RIVER.' — POW: 'YOU'VE GONE CRAZY.' — VLADEK: 'BRRR. I'LL BE CLEAN! AND I'LL FEEL WARM ALL DAY BY COMPARISON.'",
                "am": "ሌሎቹ በቀን ሁለት ጊዜ ይመገባሉ፤ እኛ አይሁዶች የዳቦ ፍርፋሪና ጥቂት ሾርባ ብቻ እናገኛለን። ምርኮኛ፦ «ወዴት እየሄድክ ነው?» — ቭላዴክ፦ «ወንዙ ውስጥ ልታጠብ።» — ምርኮኛ፦ «አብደሃል እንዴ?» — ቭላዴክ፦ «ንጹህ እሆናለሁ! ከዚያም ሲነፃፀር ቀኑን ሙሉ ሙቀት ይሰማኛል።»",
                "notes": ""
            },
            {
                "id": "p49-4",
                "speaker": "Vladek",
                "speakerAm": "ቭላዴክ (ተራኪ)",
                "role": "narration",
                "en": "MANY OTHERS GOT FROSTBITE WOUNDS. IN THE WOUNDS WAS PUS, AND IN THE PUS WAS LICE.",
                "am": "በርካታ ሰዎች በብርድ ቁስል ተጠቁ። በቁስሉ ውስጥ መግል ነበረበት፣ በመግሉ ውስጥም ቅማል ይርመሰመስ ነበር።",
                "notes": "Vladek's strict hygiene routine saved him from deadly infections."
            }
        ]
    },
    {
        "pageNumber": 50,
        "bookPageLabel": "Page 54 (Chapter 3, Comic Page 12)",
        "amharicLabel": "ገጽ 54 (ምዕራፍ 3 - ገጽ 12)",
        "image": "images/page_50.webp",
        "type": "comic",
        "summaryEn": "Vladek plays chess with breadcrumbs, receives a Red Cross parcel from Anja, and volunteers for labor to escape the deadly camp.",
        "summaryAm": "ቭላዴክ በዳቦ ፍርፋሪ ቼዝ ይጫወታል፤ ከአንጃ የቀይ መስቀል እቃ ይደርሰዋል፤ ከካምፑ ለመውጣት በፈቃደኝነት ለስራ ይመዘገባል።",
        "panels": [
            {
                "id": "p50-1",
                "speaker": "Vladek",
                "speakerAm": "ቭላዴክ (ተራኪ)",
                "role": "narration",
                "en": "EVERY DAY I BATHED AND DID GYMNASTICS TO KEEP STRONG, ...AND EVERY DAY WE PRAYED. OFTEN WE PLAYED CHESS TO KEEP OUR MINDS BUSY AND MAKE THE TIME GO. I HAD A SET MADE FROM STONES AND BREAD CRUMBS.",
                "am": "ጥንካሬዬን ለመጠበቅ በየቀኑ እታጠብና እንቅስቃሴ አደርግ ነበር... በየቀኑም እንጸልይ ነበር። አዕምሯችን ንቁ እንዲሆንና ጊዜው እንዲሄድ ቼዝ እንጫወት ነበር፤ ከድንጋይና ከዳቦ ፍርፋሪ የተሰራ የቼዝ መጫወቻ ነበረኝ።",
                "notes": ""
            },
            {
                "id": "p50-2",
                "speaker": "Vladek",
                "speakerAm": "ቭላዴክ (ተራኪ)",
                "role": "narration",
                "en": "AND ONE TIME A WEEK WE COULD WRITE LETTERS THROUGH THE INTERNATIONAL RED CROSS. 'DEAR ANJA, I AM FINE. I MISS YOU.' ONLY IN GERMAN, AND VERY CAREFUL. AND THROUGH THIS IT CAME A PACKAGE... CHOCOLATE BARS! CIGARETTES! JAM! IT WAS SO TREASURING FOR ME THIS PACKAGE.",
                "am": "በሳምንት አንድ ጊዜ በአለም አቀፉ ቀይ መስቀል በኩል ደብዳቤ መጻፍ እንችል ነበር፦ «ውድ አንጃ፣ ደህና ነኝ፣ በጣም ናፍቀሽኛል።» በጀርመንኛ ብቻ እና እጅግ በጥንቃቄ። በዚህም በኩል አንድ እቃ ደረሰኝ... ቸኮሌት! ሲጋራ! ጃም! ይህ ጥቅል ለእኔ እጅግ ውድ ሀብት ነበር።",
                "notes": ""
            },
            {
                "id": "p50-3",
                "speaker": "Vladek",
                "speakerAm": "ቭላዴክ (አባት)",
                "role": "dialogue",
                "en": "I HAD A SIGN MY FAMILY WAS SAFE, AND—BECAUSE I NEVER SMOKED—I HAD CIGARETTES TO TRADE FOR FOOD.",
                "am": "ቤተሰቦቼ በሰላም መሆናቸውን የሚያሳይ ምልክት አገኘሁ፤ ሲጋራ የማላጨስ በመሆኔም ሲጋራውን በምግብ እለውጥ ነበር።",
                "notes": "Cigarettes functioned as the supreme prison camp currency."
            },
            {
                "id": "p50-4",
                "speaker": "POW Announcement",
                "speakerAm": "የካምፑ ማስታወቂያ",
                "role": "dialogue",
                "en": "'WORKERS NEEDED. War Prisoners may volunteer for labor assignments to replace German workers called to the front. Housing and abundant food will be supplied.' — POWS: 'IT'S A TRICK! NEVER VOLUNTEER! IF WE HAVE TO DIE, LET'S DIE HERE!'",
                "am": "«ሰራተኞች ይፈለጋሉ። የጦር ምርኮኞች ግንባር ላይ የተሰማሩ የጀርመን ሰራተኞችን ለመተካት በፈቃደኝነት ለስራ መመዝገብ ይችላሉ። ጥሩ ማረፊያ እና የተትረፈረፈ ምግብ ይሰጣል።» — ምርኮኞች፦ «ማታለያ ነው! በፍጹም እንዳትመዘገቡ! መሞት ካለብን እዚሁ እንሙት!»",
                "notes": ""
            },
            {
                "id": "p50-5",
                "speaker": "Vladek",
                "speakerAm": "ቭላዴክ (አባት)",
                "role": "dialogue",
                "en": "I DIDN'T AGREE! 'I'M NOT GOING TO DIE, AND I WON'T DIE HERE! I WANT TO BE TREATED LIKE A HUMAN BEING!'",
                "am": "እኔ ግን አልተስማማሁም! «እኔ አልሞትም፣ እዚህም መሞት አልፈልግም! እንደ ሰው ልጅ ሊያስተናግዱኝ እፈልጋለሁ!»",
                "notes": "Vladek's willingness to take proactive risks to preserve his life."
            }
        ]
    }
  ]
};
