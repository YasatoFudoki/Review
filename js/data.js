/* ===========================================================
   民俗学×数理モデル 既存研究データ (30件)
   すべて実在の学術論文を対象に、DOI/URLとともに整理。
   =========================================================== */

var STUDIES = [
  {
    id: "study-01",
    titleJa: "赤ずきんの系統樹",
    titleOriginal: "The Phylogeny of Little Red Riding Hood",
    originalLang: "英語",
    authors: "Jamshid J. Tehrani",
    summary:
      "国際的な説話類型ATU333「赤ずきん」とATU123「狼と七匹の子山羊」について、世界58種のバリアントを対象に生物系統学的手法を応用し、両者が共通祖先を持つのか独立に発生したのかを検証した研究。地域ごとの語りの系統関係を推定し、ヨーロッパ・アフリカ・東アジアにおける伝播経路を議論している。",
    mathModelSummary:
      "説話の構成要素（モチーフ）を形質としてコード化し、最節約法や系統ネットワーク分析（NeighborNet等）を用いて系統樹・系統ネットワークを推定する生物系統学的手法を適用。",
    futureIssues:
      "モチーフのコード化基準の主観性や、水平伝播（借用）と垂直伝播（継承）の区別の難しさが今後の課題として指摘されている。",
    url: "https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0078871",
    subjectCategory: "説話・昔話",
    modelCategory: "系統樹・系統ネットワーク分析",
  },
  {
    id: "study-02",
    titleJa: "比較系統解析によるインド・ヨーロッパ語族説話の古い起源の解明",
    titleOriginal:
      "Comparative phylogenetic analyses uncover the ancient roots of Indo-European folktales",
    originalLang: "英語",
    authors: "Sara Graça da Silva, Jamshid J. Tehrani",
    summary:
      "インド・ヨーロッパ語族の言語集団におけるATU説話類型の分布データを用い、説話の系譜と言語系統樹・地理的距離との関係を検証。「鍛冶屋と悪魔」などの説話が青銅器時代まで遡る可能性を示し、垂直的な文化継承が説話伝播の主要因であることを示した。",
    mathModelSummary:
      "ベイズ系統推定（言語系統樹）とオートロジスティック回帰モデルを組み合わせ、説話の分布と言語系統・地理的近接性との相関を統計的に検証。",
    futureIssues:
      "より多くの語族・地域データへの拡張や、垂直伝播と水平伝播の相対的寄与のさらなる精緻化が論文中で今後の課題として言及されている。",
    url: "https://royalsocietypublishing.org/doi/10.1098/rsos.150645",
    subjectCategory: "説話・昔話",
    modelCategory: "系統樹・系統ネットワーク分析",
  },
  {
    id: "study-03",
    titleJa: "ヨーロッパにおけるある説話の集団構造と文化地理学",
    titleOriginal: "Population structure and cultural geography of a folktale in Europe",
    originalLang: "英語",
    authors: "Robert M. Ross, Simon J. Greenhill, Quentin D. Atkinson",
    summary:
      "ヨーロッパ全域の民話バリアントデータを用い、集団遺伝学の手法を応用して説話の地理的・文化的構造を分析した研究。説話の変異パターンは単純な地理的距離よりも言語・民族などの文化的境界と強く関連することを示し、遺伝的分化と比較して文化的分化がはるかに大きいことを明らかにした。",
    mathModelSummary:
      "集団遺伝学のF統計量（FST）を説話の変異データに応用して文化的分化の度合いを定量化し、地理的距離・言語系統との回帰分析も実施。",
    futureIssues:
      "より多様な説話類型やより精緻な民族言語境界データを用いた検証が今後の課題として挙げられている。",
    url: "https://royalsocietypublishing.org/doi/10.1098/rspb.2012.3065",
    subjectCategory: "説話・昔話",
    modelCategory: "集団遺伝学的統計モデル(FST分析)",
  },
  {
    id: "study-04",
    titleJa: "ゲノムデータを用いた説話伝播パターンの推定",
    titleOriginal: "Inferring patterns of folktale diffusion using genomic data",
    originalLang: "英語",
    authors:
      "Eugenio Bortolini, Luca Pagani, Enrico R. Crema, Stefania Sarno, Chiara Barbieri, Alessio Boattini, Marco Sazzini, Sara Graça da Silva, Gessica Martini, Mait Metspalu, Davide Pettener, Donata Luiselli, Jamshid J. Tehrani",
    summary:
      "インド・ヨーロッパ語族50言語圏における275種のATU「魔法昔話」の分布データと対応する集団のゲノムデータを統合し、説話伝播が人口移動（垂直伝播）と言語境界を介した文化拡散（水平伝播）のいずれによって駆動されたかを検証した研究。",
    mathModelSummary:
      "説話の共有パターンをゲノム由来の集団間類似度・言語系統距離・地理的距離と照合し、複数の拡散モデル（人口拡散・文化拡散・言語バイアス付き拡散）を統計的にモデル比較。",
    futureIssues:
      "サンプルに含まれない地域・語族への拡張や、より高解像度なゲノムデータとの統合が今後の課題として挙げられている。",
    url: "https://www.pnas.org/doi/10.1073/pnas.1614395114",
    subjectCategory: "説話・昔話",
    modelCategory: "系統樹・系統ネットワーク分析",
  },
  {
    id: "study-05",
    titleJa: "シンデレラの系譜樹：ATU510/511のフィロミーム研究",
    titleOriginal: "Cinderella's Family Tree. A Phylomemetic Case Study of ATU 510/511",
    originalLang: "英語",
    authors: "Gessica Sakamoto Martini, Jeremy Kendal, Jamshid J. Tehrani",
    summary:
      "シンデレラ型説話（ATU510/511）266バリアントを対象に、従来Roothが提唱した下位類型の妥当性を系統学的手法で検証した研究。ベイズ系統推定・系統ネットワーク・クラスタリング分析を組み合わせ、伝統間の混淆（ハイブリッド化）が広く見られることを示した。",
    mathModelSummary:
      "ベイズ系統推定、NeighborNet系統ネットワーク分析、モデルベースクラスタリング手法STRUCTUREを併用し、説話バリアント間の系統関係と集団構造を推定する「フィロミーム」的アプローチ。",
    futureIssues:
      "下位類型間の境界があいまいであることから、より精緻な形質コード化や追加バリアントによる検証が今後の課題とされている。",
    url: "https://www.degruyterbrill.com/document/doi/10.1515/fabula-2023-0002/html",
    subjectCategory: "説話・昔話",
    modelCategory: "系統樹・系統ネットワーク分析",
  },
  {
    id: "study-06",
    titleJa:
      "赤ずきんは口承民話か文学的創作か：系統ネットワーク分析による起源の検証",
    titleOriginal:
      "Oral fairy tale or literary fake? Investigating the origins of Little Red Riding Hood using phylogenetic network analysis",
    originalLang: "英語",
    authors: "Jamshid J. Tehrani, Quan Nguyen, Teemu Roos",
    summary:
      "「赤ずきん」の口承・文学版24バリアントを対象に、最節約法とNeighbourNet・T-Rexという2種の系統ネットワーク解析を用いて、物語が口承伝統に由来するのか、あるいはペロー等の文学的創作から派生したのかを検証した研究。",
    mathModelSummary:
      "最節約法（maximum parsimony）と系統ネットワーク推定法（NeighbourNet、T-Rex）を組み合わせ、バリアント間の系統関係とネットワーク構造の頑健性を比較評価。",
    futureIssues:
      "サンプル数の制約や、口承と文字記録の境界があいまいな資料の扱いが今後の方法論的課題として指摘されている。",
    url: "https://doi.org/10.1093/llc/fqv016",
    subjectCategory: "説話・昔話",
    modelCategory: "系統樹・系統ネットワーク分析",
  },
  {
    id: "study-07",
    titleJa: "ベルベルの空の「宇宙狩猟」神話：旧石器時代神話の系統学的再構築",
    titleOriginal:
      "Une chasse cosmique dans le ciel berbère : reconstruction phylogénétique d'un mythe préhistorique",
    originalLang: "フランス語",
    authors: "Julien d'Huy",
    summary:
      "大熊座・北斗七星に関連する「宇宙狩猟」神話について、世界各地の伝承を比較し系統学的手法で祖形を再構築する試み。北アフリカ・ベルベルの事例を中心に、旧石器時代に遡る可能性のある神話要素の伝播経路を論じている。",
    mathModelSummary:
      "神話のモチーフ（ミセーム）を二値形質としてコード化し、系統推定ソフトウェアを用いて最節約法による系統樹を構築、地理的分布と系統樹の対応関係を検証。",
    futureIssues:
      "対象データの地理的偏りや、形質コード化における恣意性の低減が今後の課題として指摘されている。",
    url: "https://shs.hal.science/halshs-00932197/document",
    subjectCategory: "神話",
    modelCategory: "系統樹・系統ネットワーク分析",
  },
  {
    id: "study-08",
    titleJa: "世界神話の大規模研究",
    titleOriginal: "A Large-Scale Study of World Myths",
    originalLang: "英語",
    authors: "Marc Thuillard, Jean-Loïc Le Quellec, Julien d'Huy, Yuri E. Berezkin",
    summary:
      "Berezkinが構築した世界957民族集団の神話モチーフデータベースを用い、系統ネットワーク分析により神話要素の進化速度の違いや地理的分布との対応関係を大規模に検証した研究。速く変化する要素と系統的に保存される要素が識別されている。",
    mathModelSummary:
      "系統ネットワーク解析（NeighborNet等）と複数の系統推定アルゴリズムを比較し、モチーフごとの進化速度や地理・系統対応の統計的評価を実施。",
    futureIssues:
      "大規模データベースゆえの記録バイアス（調査密度の地域差）の補正や、水平伝播モデルとの統合が今後の課題とされている。",
    url: "https://kirj.ee/public/trames_pdf/2018/issue_4/Trames-2018-4-407-424.pdf",
    subjectCategory: "神話",
    modelCategory: "系統樹・系統ネットワーク分析",
  },
  {
    id: "study-09",
    titleJa: "神話ネットワークの普遍的性質",
    titleOriginal: "Universal Properties of Mythological Networks",
    originalLang: "英語",
    authors: "Pádraig Mac Carron, Ralph Kenna",
    summary:
      "『ベーオウルフ』『イーリアス』『クアルンゲの牛争い（Táin Bó Cúailnge）』という3つの叙事詩の登場人物間相互作用をネットワークとして抽出し、統計物理学的な手法で実社会ネットワークや純粋な創作物語との類似・相違を比較検証した研究。",
    mathModelSummary:
      "登場人物を頂点、相互作用を辺とする社会ネットワークを構築し、次数分布・平均距離・クラスタ係数などのネットワーク統計量を実世界ネットワークと比較。",
    futureIssues:
      "より多くの叙事詩・異なる文化圏の物語への適用拡大が、実社会性の判定基準を精緻化する上での今後の課題とされている。",
    url: "https://arxiv.org/abs/1205.4324",
    subjectCategory: "神話",
    modelCategory: "ネットワーク科学",
  },
  {
    id: "study-10",
    titleJa: "アイスランド人のサガ「イスレンディンガ・ソグル」のネットワーク分析",
    titleOriginal: "Network analysis of the Íslendinga sögur – the Sagas of Icelanders",
    originalLang: "英語",
    authors: "Pádraig Mac Carron, Ralph Kenna",
    summary:
      "中世アイスランドの散文物語群「サガ」に登場する数千人規模の人物と相互関係をネットワーク化し、その構造的特徴を定量的に分析した研究。サガ社会のネットワークが現実の社会ネットワークと類似した性質を持つことを示した。",
    mathModelSummary:
      "登場人物間の相互作用データから社会ネットワークを構築し、次数分布・スモールワールド性・コミュニティ構造などを算出して実社会ネットワークと比較する統計物理学的ネットワーク解析。",
    futureIssues:
      "サガの史実性が不確かであるため、記録バイアスの影響評価やより精緻な相互作用の定義が今後の課題として指摘されている。",
    url: "https://link.springer.com/article/10.1140/epjb/e2013-40583-3",
    subjectCategory: "神話",
    modelCategory: "ネットワーク科学",
  },
  {
    id: "study-11",
    titleJa: "ホメロス『イーリアス』の社会ネットワーク分析的アプローチ",
    titleOriginal: "Homer's Iliad – A Social Network Analytic Approach",
    originalLang: "英語",
    authors: "Dimitrios Kydros, Panagiotis Notopoulos, Georgios Exarchos",
    summary:
      "『イーリアス』に登場する全登場人物とその相互作用からなる社会ネットワークを構築し、次数中心性・媒介中心性などの標準的な社会ネットワーク指標を算出した研究。イーリアスのネットワークがスモールワールド性を持ち、非同類選択的で分断されやすい構造であることを明らかにした。",
    mathModelSummary:
      "グラフ理論に基づく社会ネットワーク分析（次数分布、中心性指標、アソータティビティ、連結性等の算出）。",
    futureIssues:
      "他の古典叙事詩との比較分析や、相互作用の重み付け方法の改良が今後の課題として挙げられている。",
    url: "https://doi.org/10.3366/ijhac.2015.0141",
    subjectCategory: "神話",
    modelCategory: "ネットワーク科学",
  },
  {
    id: "study-12",
    titleJa: "キーウ・ブィリーナ叙事詩群のネットワーク分析——東スラヴ叙事詩",
    titleOriginal: "Network analysis of the Kyiv bylyny cycle -- east Slavic epic narratives",
    originalLang: "英語",
    authors: "Petro Sarkanych, Nazar Fedorak, Yurij Holovatch, Pádraig Mac Carron, Ralph Kenna",
    summary:
      "ウクライナ発祥の東スラヴ叙事詩「ブィリーナ」を対象にネットワーク科学の手法を初めて適用し、他のヨーロッパ叙事詩と比較した研究。ヴォロディームィル公の物語上の位置づけなど人文学的仮説を定量的に裏付け、新たな仮説も提示した。",
    mathModelSummary:
      "登場人物の相互作用ネットワークを構築し、コミュニティ検出・中心性指標により重要人物のランキングとネットワーク構造の普遍的・特異的性質を分析。",
    futureIssues:
      "写本間の異同や欠落データの影響評価、他文化圏の叙事詩とのさらなる比較が今後の課題とされている。",
    url: "https://arxiv.org/abs/2203.10399",
    subjectCategory: "神話",
    modelCategory: "ネットワーク科学",
  },
  {
    id: "study-13",
    titleJa: "アイルランド・サガにおける超自然的存在の役割と欠損データの影響の定量化",
    titleOriginal:
      "Quantifying the role of supernatural entities and the effect of missing data in Irish sagas",
    originalLang: "英語",
    authors: "Pádraig Mac Carron",
    summary:
      "アイルランドの神話辞典に基づき登場人物ネットワークを構築し、中心性指標により重要な人物・超自然的存在を同定した研究。さらに資料の欠損（記録漏れ）がネットワーク指標に与える影響を定量的に検証している。",
    mathModelSummary:
      "社会ネットワーク分析（複数の中心性指標）と、ノード除去シミュレーションによる欠損データの頑健性評価を組み合わせた手法。",
    futureIssues:
      "欠損データの体系的バイアスをより正確にモデル化する手法の開発が今後の課題として言及されている。",
    url: "https://arxiv.org/abs/2409.12071",
    subjectCategory: "神話",
    modelCategory: "ネットワーク科学",
  },
  {
    id: "study-14",
    titleJa: "神話における女性表象の定量分析",
    titleOriginal: "Female representation across mythologies",
    originalLang: "英語",
    authors: "Madeleine Janickyj, Pádraig Mac Carron, Yohsuke Yose, Ralph Kenna",
    summary:
      "世界各地の21の神話的物語（一部フィクション作品を含む）を対象に、登場人物ネットワークにおける女性キャラクターの表象度・中心性を比較した研究。文化圏によって女性表象の程度に大きな差があることを定量的に示した。",
    mathModelSummary:
      "各物語の登場人物ネットワークにおける女性ノードの比率・中心性指標を算出し、複数文化圏間で統計的に比較するネットワーク科学的手法。",
    futureIssues:
      "サンプルとなる物語の選定バイアスや、時代・文化背景による女性表象の変遷の追跡が今後の課題として挙げられている。",
    url: "https://cmpj2.icmp.lviv.ua/index.php/cmpj/article/view/86",
    subjectCategory: "神話",
    modelCategory: "ネットワーク科学",
  },
  {
    id: "study-15",
    titleJa: "説話に埋め込まれた民俗動物学的知識の体系的定量分析",
    titleOriginal:
      "Systematic quantitative analyses reveal the folk-zoological knowledge embedded in folktales",
    originalLang: "英語",
    authors: "Yo Nakawake, Kosuke Sato",
    summary:
      "世界の動物民話データを用い、説話に登場する動物の性質（捕食関係やサイズなど）が現実の生物学的特徴をどの程度反映しているかを統計的に検証した研究。人間の民話創作が実際の生態学的知識に制約されていることを示した。",
    mathModelSummary:
      "一般化線形混合モデル（GLMM）等の統計モデルを用い、説話中の動物間相互作用パターンと実際の生態学的データとの対応を定量的に検証。",
    futureIssues:
      "対象データの文化的偏り（西洋中心的なデータセット）の是正や、より多様な地域の説話への拡張が今後の課題とされている。",
    url: "https://www.nature.com/articles/s41599-019-0375-x",
    subjectCategory: "説話・昔話",
    modelCategory: "統計モデル(一般化線形混合モデル)",
  },
  {
    id: "study-16",
    titleJa: "日本の民俗学データベースの定量分析：統計的概観",
    titleOriginal: "Quantitative Analysis of a Japanese Folkloristic Database: A Statistical Overview",
    originalLang: "日本語",
    authors: "佐藤浩輔（Kosuke Sato）, 中分遥（Yo Nakawake）",
    summary:
      "国際日本文化研究センターの「怪異・妖怪伝承データベース」を対象に、書誌情報や地域分布を計量的に分析した研究。都道府県別の資料数の偏りを可視化し、主要な怪異・妖怪のクラスター分析から地域的特性を明らかにした「計算民話学・計量民俗学」の試み。",
    mathModelSummary:
      "地理的分布の可視化と、怪異・妖怪カテゴリの出現パターンに対する階層的クラスター分析などの統計的手法を適用。",
    futureIssues:
      "データベースの記録密度の地域差（調査バイアス）の補正や、テキストマイニングを用いたより詳細な内容分析が今後の課題として挙げられている。",
    url: "https://cir.nii.ac.jp/crid/1050011097133849984",
    subjectCategory: "妖怪・怪異",
    modelCategory: "統計的分布分析・クラスター分析",
  },
  {
    id: "study-17",
    titleJa: "トリックスター動物の生物地理学的分布",
    titleOriginal: "Biogeographical distributions of trickster animals",
    originalLang: "英語",
    authors: "Shota Shibasaki, Ryosuke Nakadai, Yo Nakawake",
    summary:
      "世界の説話に登場する「トリックスター動物」16分類群のデータと実際の動物分布データ（9千万件以上）を統合し、トリックスター動物の分布を規定する要因を生物地理学的に分析した研究。実在動物の分布や気候条件がトリックスター民話の分布を間接的に制約していることを示した。",
    mathModelSummary:
      "一般化線形モデル（GLM）等を用い、トリックスター動物の民話分布を、対応する実在動物の生息分布・年平均気温・降水量などの環境変数で説明する統計モデル。",
    futureIssues:
      "気候以外の社会文化的要因（交易・移住等）の影響を組み込んだモデルの拡張が今後の課題として言及されている。",
    url: "https://royalsocietypublishing.org/doi/10.1098/rsos.231577",
    subjectCategory: "説話・昔話",
    modelCategory: "統計モデル(一般化線形モデル)",
  },
  {
    id: "study-18",
    titleJa: "説話の文化的定着は言語表現に刻まれる",
    titleOriginal: "Cultural entrenchment of folktales is encoded in language",
    originalLang: "英語",
    authors: "Folgert Karsdorp, Lauren Fonteyn",
    summary:
      "「赤ずきん」の18世紀末から2015年までの英語版バリアントを対象に、物語の文化的定着度（知名度の高まり）が登場人物の言語的導入表現（定冠詞使用など）の変化に反映されることを統計的に示した研究。",
    mathModelSummary:
      "混合効果回帰モデルを用い、出版年や物語の普及度と、キャラクター導入時の言語的定式化（構文パターン）との関係を定量的に分析。",
    futureIssues:
      "英語以外の言語・他の説話類型への適用や、口承伝承における同様の「定着」効果の検証が今後の課題として挙げられている。",
    url: "https://www.nature.com/articles/s41599-019-0234-9",
    subjectCategory: "説話・昔話",
    modelCategory: "統計モデル(回帰分析)",
  },
  {
    id: "study-19",
    titleJa: "伝説の生成モデルに向けて：ピザ、橋、ワクチン、魔女",
    titleOriginal: "Toward a Generative Model of Legend: Pizzas, Bridges, Vaccines, and Witches",
    originalLang: "英語",
    authors: "Timothy R. Tangherlini",
    summary:
      "現代の育児ブログにおけるワクチン関連の語りと、19世紀デンマークの魔女・民間治療に関する伝承という2つの事例をもとに、伝説（legend）というジャンルがどのように生成・伝播するかを説明する多階層の生成モデルを提案した研究。噂の「バイラル」な伝播状態も扱う。",
    mathModelSummary:
      "伝説の構造（登場人物・信念・行為のネットワーク）を多階層でモデル化し、疫学的な伝播動態（バイラルな拡散状態を含む）との類推で議論する生成的モデル。",
    futureIssues:
      "モデルの定量的検証（実データへの当てはめ）や、他の言語圏・ジャンルへの一般化が今後の課題として言及されている。",
    url: "https://doi.org/10.3390/h7010001",
    subjectCategory: "都市伝説・噂",
    modelCategory: "生成モデル（疫学的アナロジー）",
  },
  {
    id: "study-20",
    titleJa: "噂伝播モデル：平衡状態の研究",
    titleOriginal: "Rumor Propagation Model: An Equilibrium Study",
    originalLang: "英語",
    authors: "José Roberto Castilho Piqueira",
    summary:
      "Daley–Kendallの古典的な噂伝播モデル（無知者・拡散者・停止者の3群からなるモデル）を発展させ、平衡状態の安定性を数理的に解析した研究。疫学のSIRモデルとの類似性を踏まえ、噂が集団内でどのように定着・収束するかを論じている。",
    mathModelSummary:
      "無知者(ignorant)・拡散者(spreader)・停止者(stifler)の3変数からなる常微分方程式系（SIR型疫学モデルの応用）を構築し、平衡点の安定性解析を実施。",
    futureIssues:
      "ネットワーク構造（非均質な接触パターン）を組み込んだ拡張モデルの構築が今後の課題として指摘されている。",
    url: "https://doi.org/10.1155/2010/631357",
    subjectCategory: "都市伝説・噂",
    modelCategory: "疫学モデル(SIR等)",
  },
  {
    id: "study-21",
    titleJa: "エージェントベースモデルによる宗教性と存在論的安全性の変化予測",
    titleOriginal: "Forecasting Changes in Religiosity and Existential Security with an Agent-Based Model",
    originalLang: "英語",
    authors: "Ross Gore, Carlos Lemos, F. LeRon Shults, Wesley J. Wildman",
    summary:
      "「存在論的安全性（経済・健康・災害等のリスク）」の変化が集団の宗教性にどのような影響を与えるかを、エージェントベースモデルを用いてシミュレーションし、実際の宗教性調査データとの整合性を検証した研究。",
    mathModelSummary:
      "個々のエージェントが安全性認知・宗教的信念を更新するルールベースのエージェントベースモデル（ABM）を構築し、集団レベルの宗教性動態をシミュレーション。",
    futureIssues:
      "モデルパラメータの実証的較正の精度向上と、異なる宗教的文脈への一般化可能性の検証が今後の課題とされている。",
    url: "https://www.jasss.org/21/1/4.html",
    subjectCategory: "儀礼・信仰",
    modelCategory: "エージェントベースモデル",
  },
  {
    id: "study-22",
    titleJa:
      "社会科学における理論構築へのシミュレーションの役割：宗教性の分岐様式に関する事例研究",
    titleOriginal:
      "The Role for Simulations in Theory Construction for the Social Sciences: Case Studies Concerning Divergent Modes of Religiosity",
    originalLang: "英語",
    authors: "Harvey Whitehouse, Ken Kahn, Michael E. Hochberg, Joanna J. Bryson",
    summary:
      "Whitehouseの「宗教性の分岐様式理論（教義的様式／図像的様式）」を、NetLogo上で実装したエージェントベースモデルによって検証した研究。低頻度・高覚醒の儀礼と高頻度・低覚醒の儀礼が集団の結束や信念伝播に与える異なる効果をシミュレーションで再現した。",
    mathModelSummary:
      "NetLogoを用いたマルチエージェントシミュレーションにより、儀礼参加のネットワーク効果と信念・表象の社会的伝播を再現するエージェントベースモデル。",
    futureIssues: "モデルの仮定と実地民族誌データとのより厳密な定量的照合が今後の課題として論じられている。",
    url: "https://doi.org/10.1080/2153599X.2012.691033",
    subjectCategory: "儀礼・信仰",
    modelCategory: "エージェントベースモデル",
  },
  {
    id: "study-23",
    titleJa: "「女性の伝統」か？チャイルド・バラッドにおけるジェンダー差の定量化",
    titleOriginal: "A woman's tradition? Quantifying gender difference in the Child ballads",
    originalLang: "英語",
    authors: "L. Duggan",
    summary:
      "18世紀半ばから19世紀末にかけて収集された英語圏の伝承バラッド集成（チャイルド・バラッド）を対象に、女性が歌い手・伝承者である場合の歌詞と男性による場合の歌詞の言語的特徴を計量テキスト分析で比較した研究。「女性の伝統」という通説の実質を定量的に検証した。",
    mathModelSummary:
      "LIWC（Linguistic Inquiry and Word Count）による語彙カテゴリ頻度分析を用い、統計的検定によって性別による歌詞の言語パターンの差異を定量的に評価。",
    futureIssues:
      "英語圏以外の伝承歌への適用や、収集者側のバイアス（誰がどの歌を採録したか）の影響評価が今後の課題として挙げられている。",
    url: "https://onlinelibrary.wiley.com/doi/10.1111/oli.12400",
    subjectCategory: "民謡・伝承歌",
    modelCategory: "統計的テキスト分析",
  },
  {
    id: "study-24",
    titleJa: "民謡旋律の配列アラインメントが示す音楽進化の異文化間規則性",
    titleOriginal:
      "Sequence alignment of folk song melodies reveals cross-cultural regularities of musical evolution",
    originalLang: "英語",
    authors:
      "Patrick E. Savage, Sam Passmore, Gakuto Chiba, Thomas E. Currie, Hideaki Suzuki, Quentin D. Atkinson",
    summary:
      "日本と英語圏（英・米）という文化的に大きく異なる2つの民謡伝統から1万曲以上の旋律を収集し、遺伝子配列解析で用いる配列アラインメント手法を応用して近縁な旋律ペアを同定した研究。音楽の変化（変異）が旋律への影響が小さいほど起こりやすいという、遺伝的変異と類似した規則性を発見した。",
    mathModelSummary:
      "DNA配列比較で用いられる配列アラインメントアルゴリズムを旋律データに応用し、旋律間の類似度・変異パターンを定量化して音楽進化の規則性を統計的に検証。",
    futureIssues: "対象を日英2文化に限定しているため、より多様な音楽文化圏への拡張が今後の課題として言及されている。",
    url: "https://www.cell.com/current-biology/fulltext/S0960-9822(22)00092-6",
    subjectCategory: "民謡・伝承歌",
    modelCategory: "配列アラインメント（生物情報学的手法）",
  },
  {
    id: "study-25",
    titleJa: "橋の下のトロールを見つける：モチーフ検出器に関する予備的研究",
    titleOriginal: "Finding Trolls Under Bridges: Preliminary Work on a Motif Detector",
    originalLang: "英語",
    authors: "W. Victor H. Yarlott 他",
    summary:
      "民話・ニュース・プロパガンダ等に繰り返し現れる「モチーフ」を自動検出するシステムの開発に向けた予備研究。従来手作業に頼っていたモチーフ抽出を、比喩検出器などの自然言語処理手法を特徴量として用いる形で自動化することを試みた。",
    mathModelSummary:
      "比喩検出モデル等を特徴量とする機械学習分類器によりモチーフ使用の判定を行い、複数カテゴリでF値による性能評価を実施。",
    futureIssues:
      "モチーフカテゴリ間の精度差（F1が0.21〜0.35と低い）の改善と、より大規模な訓練データの構築が今後の課題として論文中に明記されている。",
    url: "https://arxiv.org/abs/2204.06085",
    subjectCategory: "説話・昔話",
    modelCategory: "機械学習・自然言語処理",
  },
  {
    id: "study-26",
    titleJa: "社会ネットワーク分析における意味的価値の概念：比較神話学への応用",
    titleOriginal:
      "The Concept of Semantic Value in Social Network Analysis: an Application to Comparative Mythology",
    originalLang: "英語",
    authors: "Javier Fumanal-Idocin, Oscar Cordón, Graçaliz Dimuro, María Minárová, Humberto Bustince",
    summary:
      "従来の社会ネットワーク分析にファジィ理論に基づく「意味的近さ（semantic affinity）」の概念を導入し、登場人物間の意味的関係を考慮した拡張ネットワーク分析手法を提案した研究。ギリシャ・北欧・ケルトという3つの神話体系に適用し、比較神話学における新たな分析軸を示した。",
    mathModelSummary:
      "ファジィ集合理論に基づく意味的親和性関数を定義し、従来のグラフ理論的ネットワーク指標を意味情報で重み付け・拡張する手法。",
    futureIssues:
      "意味的近さの定義・パラメータ設定の主観性の低減や、より多くの神話体系への適用が今後の課題として挙げられている。",
    url: "https://arxiv.org/abs/2109.08023",
    subjectCategory: "神話",
    modelCategory: "グラフ理論・ファジィネットワーク分析",
  },
  {
    id: "study-27",
    titleJa: "謎めいたフラーホと彼の名を冠した物語：初期アイルランド英雄物語のネットワーク分析",
    titleOriginal:
      "The Enigmatic Fráoch and His Eponymous Tale — Network Analysis of an Early Irish Heroic Romance",
    originalLang: "英語",
    authors: "Madeleine Janickyj, Daniel Curley, Pádraig Mac Carron, Mike McCarthy, Joseph Yose, Ralph Kenna",
    summary:
      "アイルランドの英雄物語『タン・ボー・フライヒ』の登場人物ネットワークを構築し、アルスター物語群の中心的叙事詩『タン・ボー・クアルンゲ』および関連する7つの小物語と構造的に比較した研究。物語間の構造的類似性を定量的に明らかにした。",
    mathModelSummary:
      "登場人物相互作用に基づく社会ネットワークを構築し、次数分布・中心性指標などを用いて複数の物語間のネットワーク構造を比較するネットワーク科学的手法。",
    futureIssues: "写本ごとの異同やテキスト解釈の違いがネットワーク構造に与える影響のさらなる検証が今後の課題とされている。",
    url: "https://www.worldscientific.com/doi/abs/10.1142/S0219525922400069",
    subjectCategory: "神話",
    modelCategory: "ネットワーク科学",
  },
  {
    id: "study-28",
    titleJa: "民話モチーフの分布データから見る新大陸への人類移住",
    titleOriginal: "Peopling of the New World from Data on Distributions of Folklore Motifs",
    originalLang: "英語",
    authors: "Yuri E. Berezkin",
    summary:
      "世界の神話・民話モチーフの大規模データベースを用い、アメリカ大陸の先住民説話に見られるモチーフの分布パターンを分析することで、人類の新大陸への移住・拡散の経路や時期を推定しようとした研究。考古学・遺伝学的知見との整合性も議論している。",
    mathModelSummary:
      "モチーフの地域別出現頻度データに対するクラスター分析・統計的分布比較により、モチーフ分布と既知の移住ルート・年代との対応関係を検証。",
    futureIssues:
      "モチーフの記録密度の地域差の補正や、より精緻な年代推定手法との統合が今後の課題として言及されている。",
    url: "https://link.springer.com/chapter/10.1007/978-3-319-39445-9_5",
    subjectCategory: "神話",
    modelCategory: "統計的分布分析",
  },
  {
    id: "study-29",
    titleJa: "シンデレラの身体：ジェンダー・身体性・説話プロットへの定量的アプローチ",
    titleOriginal: "Cinderella's Body. A Quantitative Approach to Gender, Embodiment, and Folktale Plots",
    originalLang: "英語",
    authors: "Jeana Jorgensen",
    summary:
      "ATU510A「シンデレラ」型説話群を対象に、主人公の美しさや身体描写に関するフェミニズム的な主張を定量的テキスト分析によって検証した研究。美しさと若さの結びつきや、援助者との出会いが必ずしも主人公を「美化」する機能を持たないことなどを統計的に示した。",
    mathModelSummary:
      "説話テキストに対する定量的コーディングと統計的頻度分析を用い、身体描写・美醜表現とプロット構造上の機能との関係を検証するテキストマイニング的手法。",
    futureIssues:
      "コーディング基準の主観性の低減や、非西洋圏のシンデレラ型説話への分析対象の拡張が今後の課題として挙げられている。",
    url: "https://www.degruyterbrill.com/document/doi/10.1515/fabula-2023-0003/html",
    subjectCategory: "説話・昔話",
    modelCategory: "統計的テキスト分析",
  },
  {
    id: "study-30",
    titleJa: "ポリュペモス（Aa.Th.1137）：先史時代説話の系統学的再構築",
    titleOriginal: "Polyphemus (Aa. Th. 1137): A phylogenetic reconstruction of a prehistoric tale",
    originalLang: "フランス語（英語要旨あり）",
    authors: "Julien d'Huy",
    summary:
      "ギリシャ神話「オデュッセイア」のポリュペモス（単眼の巨人）説話（説話類型Aa.Th.1137）について、ヨーロッパ・北米地域の24バリアントから抽出した79個のモチーフ（ミセーム）を対象に系統学的分析を行い、旧石器時代に遡りうる祖形の再構築を試みた研究。",
    mathModelSummary:
      "モチーフを二値形質としてコード化し、Bio Neighbor Joining法（SplitsTree実装）による系統ネットワーク解析を実施。バリアントの多様化パターンをmtDNAハプログループX2の分布と対比している。",
    futureIssues:
      "遺伝学的データとの対応関係の検証は仮説段階にとどまっており、より広範な地域データや独立した年代測定手法による裏付けが今後の課題である。",
    url: "https://hal.science/hal-00826004",
    subjectCategory: "神話",
    modelCategory: "系統樹・系統ネットワーク分析",
  },
];
