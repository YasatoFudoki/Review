/* ===========================================================
   民俗学×数理モデル 既存研究データ (48件)
   すべて実在の学術論文を対象に、DOI/URLとともに整理。
   study-01〜30: 説話・神話・都市伝説・妖怪・儀礼・民謡
   study-31〜48: 歴史人口学・方言地理・親族構造・地名・
                 寺院分布・相互扶助組織など、民俗学/郷土史の
                 より広い対象領域
   =========================================================== */

var STUDIES = [
  {
    id: "study-01",
    year: 2013,
    titleJa: "赤ずきんの系統樹",
    titleOriginal: "The Phylogeny of Little Red Riding Hood",
    originalLang: "英語",
    authors: "Jamshid J. Tehrani",
    summary:
      "国際的な説話類型ATU333「赤ずきん」とATU123「狼と七匹の子山羊」について、世界58種のバリアントを対象に生物系統学的手法を応用し、両者が共通祖先を持つのか独立に発生したのかを検証した研究。地域ごとの語りの系統関係を推定し、ヨーロッパ・アフリカ・東アジアにおける伝播経路を議論している。",
    mathModelSummary:
      "説話の構成要素（モチーフ）を形質としてコード化し、最節約法や系統ネットワーク分析（NeighborNet等）を用いて系統樹・系統ネットワークを推定する生物系統学的手法を適用。",
    conclusion:
      "系統解析の結果、ヨーロッパの「赤ずきん」はアフリカの「狼と七匹の子山羊」から派生した可能性が高く、両者は独立した起源ではなく共通の祖先譚に由来することが示された。",
    futureIssues:
      "モチーフのコード化基準の主観性や、水平伝播（借用）と垂直伝播（継承）の区別の難しさが今後の課題として指摘されている。",
    url: "https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0078871",
    subjectCategory: "説話・昔話",
    modelCategory: "系統樹・系統ネットワーク分析",
  },
  {
    id: "study-02",
    year: 2016,
    titleJa: "比較系統解析によるインド・ヨーロッパ語族説話の古い起源の解明",
    titleOriginal:
      "Comparative phylogenetic analyses uncover the ancient roots of Indo-European folktales",
    originalLang: "英語",
    authors: "Sara Graça da Silva, Jamshid J. Tehrani",
    summary:
      "インド・ヨーロッパ語族の言語集団におけるATU説話類型の分布データを用い、説話の系譜と言語系統樹・地理的距離との関係を検証。「鍛冶屋と悪魔」などの説話が青銅器時代まで遡る可能性を示し、垂直的な文化継承が説話伝播の主要因であることを示した。",
    mathModelSummary:
      "ベイズ系統推定（言語系統樹）とオートロジスティック回帰モデルを組み合わせ、説話の分布と言語系統・地理的近接性との相関を統計的に検証。",
    conclusion:
      "「鍛冶屋と悪魔」などの一部の説話は青銅器時代まで遡る可能性が高く、説話が主に言語系統に沿って垂直伝播してきたことを示す証拠が得られた。",
    futureIssues:
      "より多くの語族・地域データへの拡張や、垂直伝播と水平伝播の相対的寄与のさらなる精緻化が論文中で今後の課題として言及されている。",
    url: "https://royalsocietypublishing.org/doi/10.1098/rsos.150645",
    subjectCategory: "説話・昔話",
    modelCategory: "系統樹・系統ネットワーク分析",
  },
  {
    id: "study-03",
    year: 2013,
    titleJa: "ヨーロッパにおけるある説話の集団構造と文化地理学",
    titleOriginal: "Population structure and cultural geography of a folktale in Europe",
    originalLang: "英語",
    authors: "Robert M. Ross, Simon J. Greenhill, Quentin D. Atkinson",
    summary:
      "ヨーロッパ全域の民話バリアントデータを用い、集団遺伝学の手法を応用して説話の地理的・文化的構造を分析した研究。説話の変異パターンは単純な地理的距離よりも言語・民族などの文化的境界と強く関連することを示し、遺伝的分化と比較して文化的分化がはるかに大きいことを明らかにした。",
    mathModelSummary:
      "集団遺伝学のF統計量（FST）を説話の変異データに応用して文化的分化の度合いを定量化し、地理的距離・言語系統との回帰分析も実施。",
    conclusion:
      "説話の変異パターンは地理的距離よりも言語・民族的な文化的境界と強く対応しており、文化的分化の度合いは遺伝的分化よりもはるかに大きいことが定量的に示された。",
    futureIssues:
      "より多様な説話類型やより精緻な民族言語境界データを用いた検証が今後の課題として挙げられている。",
    url: "https://royalsocietypublishing.org/doi/10.1098/rspb.2012.3065",
    subjectCategory: "説話・昔話",
    modelCategory: "集団遺伝学的統計モデル(FST分析)",
  },
  {
    id: "study-04",
    year: 2017,
    titleJa: "ゲノムデータを用いた説話伝播パターンの推定",
    titleOriginal: "Inferring patterns of folktale diffusion using genomic data",
    originalLang: "英語",
    authors:
      "Eugenio Bortolini, Luca Pagani, Enrico R. Crema, Stefania Sarno, Chiara Barbieri, Alessio Boattini, Marco Sazzini, Sara Graça da Silva, Gessica Martini, Mait Metspalu, Davide Pettener, Donata Luiselli, Jamshid J. Tehrani",
    summary:
      "インド・ヨーロッパ語族50言語圏における275種のATU「魔法昔話」の分布データと対応する集団のゲノムデータを統合し、説話伝播が人口移動（垂直伝播）と言語境界を介した文化拡散（水平伝播）のいずれによって駆動されたかを検証した研究。",
    mathModelSummary:
      "説話の共有パターンをゲノム由来の集団間類似度・言語系統距離・地理的距離と照合し、複数の拡散モデル（人口拡散・文化拡散・言語バイアス付き拡散）を統計的にモデル比較。",
    conclusion:
      "説話の分布パターンは主に人口移動による垂直伝播よりも、言語境界を越えた水平的な文化拡散モデルによってよく説明されることが示された。",
    futureIssues:
      "サンプルに含まれない地域・語族への拡張や、より高解像度なゲノムデータとの統合が今後の課題として挙げられている。",
    url: "https://www.pnas.org/doi/10.1073/pnas.1614395114",
    subjectCategory: "説話・昔話",
    modelCategory: "系統樹・系統ネットワーク分析",
  },
  {
    id: "study-05",
    year: 2023,
    titleJa: "シンデレラの系譜樹：ATU510/511のフィロミーム研究",
    titleOriginal: "Cinderella's Family Tree. A Phylomemetic Case Study of ATU 510/511",
    originalLang: "英語",
    authors: "Gessica Sakamoto Martini, Jeremy Kendal, Jamshid J. Tehrani",
    summary:
      "シンデレラ型説話（ATU510/511）266バリアントを対象に、従来Roothが提唱した下位類型の妥当性を系統学的手法で検証した研究。ベイズ系統推定・系統ネットワーク・クラスタリング分析を組み合わせ、伝統間の混淆（ハイブリッド化）が広く見られることを示した。",
    mathModelSummary:
      "ベイズ系統推定、NeighborNet系統ネットワーク分析、モデルベースクラスタリング手法STRUCTUREを併用し、説話バリアント間の系統関係と集団構造を推定する「フィロミーム」的アプローチ。",
    conclusion:
      "従来提唱されてきた下位類型の境界は系統関係と必ずしも一致せず、伝統間の混淆（ハイブリッド化）がシンデレラ型説話の多様化に大きく寄与していることが示された。",
    futureIssues:
      "下位類型間の境界があいまいであることから、より精緻な形質コード化や追加バリアントによる検証が今後の課題とされている。",
    url: "https://www.degruyterbrill.com/document/doi/10.1515/fabula-2023-0002/html",
    subjectCategory: "説話・昔話",
    modelCategory: "系統樹・系統ネットワーク分析",
  },
  {
    id: "study-06",
    year: 2016,
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
    conclusion:
      "系統ネットワーク解析の結果、多くのヨーロッパの「赤ずきん」バリアントは口承伝統に起源を持ち、単純にペローらの文学的創作から派生したものではないことが示唆された。",
    futureIssues:
      "サンプル数の制約や、口承と文字記録の境界があいまいな資料の扱いが今後の方法論的課題として指摘されている。",
    url: "https://doi.org/10.1093/llc/fqv016",
    subjectCategory: "説話・昔話",
    modelCategory: "系統樹・系統ネットワーク分析",
  },
  {
    id: "study-07",
    year: 2013,
    titleJa: "ベルベルの空の「宇宙狩猟」神話：旧石器時代神話の系統学的再構築",
    titleOriginal:
      "Une chasse cosmique dans le ciel berbère : reconstruction phylogénétique d'un mythe préhistorique",
    originalLang: "フランス語",
    authors: "Julien d'Huy",
    summary:
      "大熊座・北斗七星に関連する「宇宙狩猟」神話について、世界各地の伝承を比較し系統学的手法で祖形を再構築する試み。北アフリカ・ベルベルの事例を中心に、旧石器時代に遡る可能性のある神話要素の伝播経路を論じている。",
    mathModelSummary:
      "神話のモチーフ（ミセーム）を二値形質としてコード化し、系統推定ソフトウェアを用いて最節約法による系統樹を構築、地理的分布と系統樹の対応関係を検証。",
    conclusion:
      "系統樹の形状と地理的分布との対応関係から、「宇宙狩猟」神話の一部の中核的要素が旧石器時代にまで遡る可能性が示唆された。",
    futureIssues:
      "対象データの地理的偏りや、形質コード化における恣意性の低減が今後の課題として指摘されている。",
    url: "https://shs.hal.science/halshs-00932197/document",
    subjectCategory: "神話",
    modelCategory: "系統樹・系統ネットワーク分析",
  },
  {
    id: "study-08",
    year: 2018,
    titleJa: "世界神話の大規模研究",
    titleOriginal: "A Large-Scale Study of World Myths",
    originalLang: "英語",
    authors: "Marc Thuillard, Jean-Loïc Le Quellec, Julien d'Huy, Yuri E. Berezkin",
    summary:
      "Berezkinが構築した世界957民族集団の神話モチーフデータベースを用い、系統ネットワーク分析により神話要素の進化速度の違いや地理的分布との対応関係を大規模に検証した研究。速く変化する要素と系統的に保存される要素が識別されている。",
    mathModelSummary:
      "系統ネットワーク解析（NeighborNet等）と複数の系統推定アルゴリズムを比較し、モチーフごとの進化速度や地理・系統対応の統計的評価を実施。",
    conclusion:
      "神話モチーフには系統的に安定して保存されるものと急速に変化するものが混在しており、両者を区別することで神話の伝播史をより頑健に推定できることが示された。",
    futureIssues:
      "大規模データベースゆえの記録バイアス（調査密度の地域差）の補正や、水平伝播モデルとの統合が今後の課題とされている。",
    url: "https://kirj.ee/public/trames_pdf/2018/issue_4/Trames-2018-4-407-424.pdf",
    subjectCategory: "神話",
    modelCategory: "系統樹・系統ネットワーク分析",
  },
  {
    id: "study-09",
    year: 2012,
    titleJa: "神話ネットワークの普遍的性質",
    titleOriginal: "Universal Properties of Mythological Networks",
    originalLang: "英語",
    authors: "Pádraig Mac Carron, Ralph Kenna",
    summary:
      "『ベーオウルフ』『イーリアス』『クアルンゲの牛争い（Táin Bó Cúailnge）』という3つの叙事詩の登場人物間相互作用をネットワークとして抽出し、統計物理学的な手法で実社会ネットワークや純粋な創作物語との類似・相違を比較検証した研究。",
    mathModelSummary:
      "登場人物を頂点、相互作用を辺とする社会ネットワークを構築し、次数分布・平均距離・クラスタ係数などのネットワーク統計量を実世界ネットワークと比較。",
    conclusion:
      "『ベーオウルフ』と『イーリアス』のネットワークは実社会ネットワークに近い統計的性質を示した一方、純粋な創作物である『クアルンゲの牛争い』はやや異なる性質を持つことが分かった。",
    futureIssues:
      "より多くの叙事詩・異なる文化圏の物語への適用拡大が、実社会性の判定基準を精緻化する上での今後の課題とされている。",
    url: "https://arxiv.org/abs/1205.4324",
    subjectCategory: "神話",
    modelCategory: "ネットワーク科学",
  },
  {
    id: "study-10",
    year: 2013,
    titleJa: "アイスランド人のサガ「イスレンディンガ・ソグル」のネットワーク分析",
    titleOriginal: "Network analysis of the Íslendinga sögur – the Sagas of Icelanders",
    originalLang: "英語",
    authors: "Pádraig Mac Carron, Ralph Kenna",
    summary:
      "中世アイスランドの散文物語群「サガ」に登場する数千人規模の人物と相互関係をネットワーク化し、その構造的特徴を定量的に分析した研究。サガ社会のネットワークが現実の社会ネットワークと類似した性質を持つことを示した。",
    mathModelSummary:
      "登場人物間の相互作用データから社会ネットワークを構築し、次数分布・スモールワールド性・コミュニティ構造などを算出して実社会ネットワークと比較する統計物理学的ネットワーク解析。",
    conclusion:
      "サガの登場人物ネットワークはスモールワールド性など実社会ネットワークに類似した統計的性質を示し、記録が単なる創作ではなく史実的背景を持つ可能性を支持する結果となった。",
    futureIssues:
      "サガの史実性が不確かであるため、記録バイアスの影響評価やより精緻な相互作用の定義が今後の課題として指摘されている。",
    url: "https://link.springer.com/article/10.1140/epjb/e2013-40583-3",
    subjectCategory: "神話",
    modelCategory: "ネットワーク科学",
  },
  {
    id: "study-11",
    year: 2015,
    titleJa: "ホメロス『イーリアス』の社会ネットワーク分析的アプローチ",
    titleOriginal: "Homer's Iliad – A Social Network Analytic Approach",
    originalLang: "英語",
    authors: "Dimitrios Kydros, Panagiotis Notopoulos, Georgios Exarchos",
    summary:
      "『イーリアス』に登場する全登場人物とその相互作用からなる社会ネットワークを構築し、次数中心性・媒介中心性などの標準的な社会ネットワーク指標を算出した研究。イーリアスのネットワークがスモールワールド性を持ち、非同類選択的で分断されやすい構造であることを明らかにした。",
    mathModelSummary:
      "グラフ理論に基づく社会ネットワーク分析（次数分布、中心性指標、アソータティビティ、連結性等の算出）。",
    conclusion:
      "イーリアスの登場人物ネットワークはスケールフリー的な次数分布とスモールワールド性を示す一方、次数の高い人物同士が結びつきにくい非同類選択的な構造を持つことが明らかになった。",
    futureIssues:
      "他の古典叙事詩との比較分析や、相互作用の重み付け方法の改良が今後の課題として挙げられている。",
    url: "https://doi.org/10.3366/ijhac.2015.0141",
    subjectCategory: "神話",
    modelCategory: "ネットワーク科学",
  },
  {
    id: "study-12",
    year: 2022,
    titleJa: "キーウ・ブィリーナ叙事詩群のネットワーク分析——東スラヴ叙事詩",
    titleOriginal: "Network analysis of the Kyiv bylyny cycle -- east Slavic epic narratives",
    originalLang: "英語",
    authors: "Petro Sarkanych, Nazar Fedorak, Yurij Holovatch, Pádraig Mac Carron, Ralph Kenna",
    summary:
      "ウクライナ発祥の東スラヴ叙事詩「ブィリーナ」を対象にネットワーク科学の手法を初めて適用し、他のヨーロッパ叙事詩と比較した研究。ヴォロディームィル公の物語上の位置づけなど人文学的仮説を定量的に裏付け、新たな仮説も提示した。",
    mathModelSummary:
      "登場人物の相互作用ネットワークを構築し、コミュニティ検出・中心性指標により重要人物のランキングとネットワーク構造の普遍的・特異的性質を分析。",
    conclusion:
      "ネットワーク指標に基づく分析により、ヴォロディームィル公が物語群全体を結びつける中心的ハブであるという従来の人文学的見解が定量的に裏付けられた。",
    futureIssues:
      "写本間の異同や欠落データの影響評価、他文化圏の叙事詩とのさらなる比較が今後の課題とされている。",
    url: "https://arxiv.org/abs/2203.10399",
    subjectCategory: "神話",
    modelCategory: "ネットワーク科学",
  },
  {
    id: "study-13",
    year: 2024,
    titleJa: "アイルランド・サガにおける超自然的存在の役割と欠損データの影響の定量化",
    titleOriginal:
      "Quantifying the role of supernatural entities and the effect of missing data in Irish sagas",
    originalLang: "英語",
    authors: "Pádraig Mac Carron",
    summary:
      "アイルランドの神話辞典に基づき登場人物ネットワークを構築し、中心性指標により重要な人物・超自然的存在を同定した研究。さらに資料の欠損（記録漏れ）がネットワーク指標に与える影響を定量的に検証している。",
    mathModelSummary:
      "社会ネットワーク分析（複数の中心性指標）と、ノード除去シミュレーションによる欠損データの頑健性評価を組み合わせた手法。",
    conclusion:
      "超自然的存在は人間の登場人物と比べて突出して高い中心性を持つわけではない一方、資料の欠損が一部のネットワーク指標を有意に歪めうることが示された。",
    futureIssues:
      "欠損データの体系的バイアスをより正確にモデル化する手法の開発が今後の課題として言及されている。",
    url: "https://arxiv.org/abs/2409.12071",
    subjectCategory: "神話",
    modelCategory: "ネットワーク科学",
  },
  {
    id: "study-14",
    year: 2024,
    titleJa: "神話における女性表象の定量分析",
    titleOriginal: "Female representation across mythologies",
    originalLang: "英語",
    authors: "Madeleine Janickyj, Pádraig Mac Carron, Yohsuke Yose, Ralph Kenna",
    summary:
      "世界各地の21の神話的物語（一部フィクション作品を含む）を対象に、登場人物ネットワークにおける女性キャラクターの表象度・中心性を比較した研究。文化圏によって女性表象の程度に大きな差があることを定量的に示した。",
    mathModelSummary:
      "各物語の登場人物ネットワークにおける女性ノードの比率・中心性指標を算出し、複数文化圏間で統計的に比較するネットワーク科学的手法。",
    conclusion:
      "分析対象とした21の物語群の間で女性キャラクターの比率・中心性には大きなばらつきがあり、文化圏や物語ジャンルによって女性表象の程度が系統的に異なることが示された。",
    futureIssues:
      "サンプルとなる物語の選定バイアスや、時代・文化背景による女性表象の変遷の追跡が今後の課題として挙げられている。",
    url: "https://cmpj2.icmp.lviv.ua/index.php/cmpj/article/view/86",
    subjectCategory: "神話",
    modelCategory: "ネットワーク科学",
  },
  {
    id: "study-15",
    year: 2019,
    titleJa: "説話に埋め込まれた民俗動物学的知識の体系的定量分析",
    titleOriginal:
      "Systematic quantitative analyses reveal the folk-zoological knowledge embedded in folktales",
    originalLang: "英語",
    authors: "Yo Nakawake, Kosuke Sato",
    summary:
      "世界の動物民話データを用い、説話に登場する動物の性質（捕食関係やサイズなど）が現実の生物学的特徴をどの程度反映しているかを統計的に検証した研究。人間の民話創作が実際の生態学的知識に制約されていることを示した。",
    mathModelSummary:
      "一般化線形混合モデル（GLMM）等の統計モデルを用い、説話中の動物間相互作用パターンと実際の生態学的データとの対応を定量的に検証。",
    conclusion:
      "説話に登場する動物の相互作用パターンは偶然の水準を超えて実際の捕食-被食関係を反映しており、民話創作が現実の動物学的知識に制約されていることが示された。",
    futureIssues:
      "対象データの文化的偏り（西洋中心的なデータセット）の是正や、より多様な地域の説話への拡張が今後の課題とされている。",
    url: "https://www.nature.com/articles/s41599-019-0375-x",
    subjectCategory: "説話・昔話",
    modelCategory: "統計モデル(一般化線形混合モデル)",
  },
  {
    id: "study-16",
    year: 2020,
    titleJa: "日本の民俗学データベースの定量分析：統計的概観",
    titleOriginal: "Quantitative Analysis of a Japanese Folkloristic Database: A Statistical Overview",
    originalLang: "日本語",
    authors: "佐藤浩輔（Kosuke Sato）, 中分遥（Yo Nakawake）",
    summary:
      "国際日本文化研究センターの「怪異・妖怪伝承データベース」を対象に、書誌情報や地域分布を計量的に分析した研究。都道府県別の資料数の偏りを可視化し、主要な怪異・妖怪のクラスター分析から地域的特性を明らかにした「計算民話学・計量民俗学」の試み。",
    mathModelSummary:
      "地理的分布の可視化と、怪異・妖怪カテゴリの出現パターンに対する階層的クラスター分析などの統計的手法を適用。",
    conclusion:
      "怪異・妖怪の記録数には都道府県間で大きな偏りがあり、特定のカテゴリが特定地域に集中して分布する傾向がクラスター分析によって明らかになった。",
    futureIssues:
      "データベースの記録密度の地域差（調査バイアス）の補正や、テキストマイニングを用いたより詳細な内容分析が今後の課題として挙げられている。",
    url: "https://cir.nii.ac.jp/crid/1050011097133849984",
    subjectCategory: "妖怪・怪異",
    modelCategory: "統計的分布分析・クラスター分析",
  },
  {
    id: "study-17",
    year: 2024,
    titleJa: "トリックスター動物の生物地理学的分布",
    titleOriginal: "Biogeographical distributions of trickster animals",
    originalLang: "英語",
    authors: "Shota Shibasaki, Ryosuke Nakadai, Yo Nakawake",
    summary:
      "世界の説話に登場する「トリックスター動物」16分類群のデータと実際の動物分布データ（9千万件以上）を統合し、トリックスター動物の分布を規定する要因を生物地理学的に分析した研究。実在動物の分布や気候条件がトリックスター民話の分布を間接的に制約していることを示した。",
    mathModelSummary:
      "一般化線形モデル（GLM）等を用い、トリックスター動物の民話分布を、対応する実在動物の生息分布・年平均気温・降水量などの環境変数で説明する統計モデル。",
    conclusion:
      "トリックスターとして語られる動物種の地理的分布は、対応する実在動物の生息分布や気候条件と有意に関連しており、生態的制約が民話の動物選択に影響することが示された。",
    futureIssues:
      "気候以外の社会文化的要因（交易・移住等）の影響を組み込んだモデルの拡張が今後の課題として言及されている。",
    url: "https://royalsocietypublishing.org/doi/10.1098/rsos.231577",
    subjectCategory: "説話・昔話",
    modelCategory: "統計モデル(一般化線形モデル)",
  },
  {
    id: "study-18",
    year: 2019,
    titleJa: "説話の文化的定着は言語表現に刻まれる",
    titleOriginal: "Cultural entrenchment of folktales is encoded in language",
    originalLang: "英語",
    authors: "Folgert Karsdorp, Lauren Fonteyn",
    summary:
      "「赤ずきん」の18世紀末から2015年までの英語版バリアントを対象に、物語の文化的定着度（知名度の高まり）が登場人物の言語的導入表現（定冠詞使用など）の変化に反映されることを統計的に示した研究。",
    mathModelSummary:
      "混合効果回帰モデルを用い、出版年や物語の普及度と、キャラクター導入時の言語的定式化（構文パターン）との関係を定量的に分析。",
    conclusion:
      "物語の普及度が高まるにつれ登場人物を導入する際の言語表現がより簡潔・定型的になる傾向があり、文化的定着度が言語使用のパターンに反映されることが統計的に確認された。",
    futureIssues:
      "英語以外の言語・他の説話類型への適用や、口承伝承における同様の「定着」効果の検証が今後の課題として挙げられている。",
    url: "https://www.nature.com/articles/s41599-019-0234-9",
    subjectCategory: "説話・昔話",
    modelCategory: "統計モデル(回帰分析)",
  },
  {
    id: "study-19",
    year: 2018,
    titleJa: "伝説の生成モデルに向けて：ピザ、橋、ワクチン、魔女",
    titleOriginal: "Toward a Generative Model of Legend: Pizzas, Bridges, Vaccines, and Witches",
    originalLang: "英語",
    authors: "Timothy R. Tangherlini",
    summary:
      "現代の育児ブログにおけるワクチン関連の語りと、19世紀デンマークの魔女・民間治療に関する伝承という2つの事例をもとに、伝説（legend）というジャンルがどのように生成・伝播するかを説明する多階層の生成モデルを提案した研究。噂の「バイラル」な伝播状態も扱う。",
    mathModelSummary:
      "伝説の構造（登場人物・信念・行為のネットワーク）を多階層でモデル化し、疫学的な伝播動態（バイラルな拡散状態を含む）との類推で議論する生成的モデル。",
    conclusion:
      "育児ブログのワクチン言説と19世紀デンマークの魔女伝承という異なる時代・文脈の事例に共通の生成構造が見出され、伝説というジャンルを多階層モデルで統一的に説明できる可能性が示された。",
    futureIssues:
      "モデルの定量的検証（実データへの当てはめ）や、他の言語圏・ジャンルへの一般化が今後の課題として言及されている。",
    url: "https://doi.org/10.3390/h7010001",
    subjectCategory: "都市伝説・噂",
    modelCategory: "生成モデル（疫学的アナロジー）",
  },
  {
    id: "study-20",
    year: 2010,
    titleJa: "噂伝播モデル：平衡状態の研究",
    titleOriginal: "Rumor Propagation Model: An Equilibrium Study",
    originalLang: "英語",
    authors: "José Roberto Castilho Piqueira",
    summary:
      "Daley–Kendallの古典的な噂伝播モデル（無知者・拡散者・停止者の3群からなるモデル）を発展させ、平衡状態の安定性を数理的に解析した研究。疫学のSIRモデルとの類似性を踏まえ、噂が集団内でどのように定着・収束するかを論じている。",
    mathModelSummary:
      "無知者(ignorant)・拡散者(spreader)・停止者(stifler)の3変数からなる常微分方程式系（SIR型疫学モデルの応用）を構築し、平衡点の安定性解析を実施。",
    conclusion:
      "平衡解析の結果、噂が集団内で完全に消滅する自明な平衡に加えて、無知者が一定割合残存する非自明な安定平衡が存在しうることが数学的に示された。",
    futureIssues:
      "ネットワーク構造（非均質な接触パターン）を組み込んだ拡張モデルの構築が今後の課題として指摘されている。",
    url: "https://doi.org/10.1155/2010/631357",
    subjectCategory: "都市伝説・噂",
    modelCategory: "疫学モデル(SIR等)",
  },
  {
    id: "study-21",
    year: 2018,
    titleJa: "エージェントベースモデルによる宗教性と存在論的安全性の変化予測",
    titleOriginal: "Forecasting Changes in Religiosity and Existential Security with an Agent-Based Model",
    originalLang: "英語",
    authors: "Ross Gore, Carlos Lemos, F. LeRon Shults, Wesley J. Wildman",
    summary:
      "「存在論的安全性（経済・健康・災害等のリスク）」の変化が集団の宗教性にどのような影響を与えるかを、エージェントベースモデルを用いてシミュレーションし、実際の宗教性調査データとの整合性を検証した研究。",
    mathModelSummary:
      "個々のエージェントが安全性認知・宗教的信念を更新するルールベースのエージェントベースモデル（ABM）を構築し、集団レベルの宗教性動態をシミュレーション。",
    conclusion:
      "シミュレーション結果は実際の宗教性調査データの傾向と概ね整合しており、存在論的安全性の変化が集団の宗教性動態を一定程度予測しうることが示された。",
    futureIssues:
      "モデルパラメータの実証的較正の精度向上と、異なる宗教的文脈への一般化可能性の検証が今後の課題とされている。",
    url: "https://www.jasss.org/21/1/4.html",
    subjectCategory: "儀礼・信仰",
    modelCategory: "エージェントベースモデル",
  },
  {
    id: "study-22",
    year: 2012,
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
    conclusion:
      "シミュレーションにより、低頻度・高覚醒の儀礼と高頻度・低覚醒の儀礼がそれぞれ異なるメカニズムで集団の結束や信念伝播を強化することが再現され、分岐様式理論の妥当性が支持された。",
    futureIssues: "モデルの仮定と実地民族誌データとのより厳密な定量的照合が今後の課題として論じられている。",
    url: "https://doi.org/10.1080/2153599X.2012.691033",
    subjectCategory: "儀礼・信仰",
    modelCategory: "エージェントベースモデル",
  },
  {
    id: "study-23",
    year: 2023,
    titleJa: "「女性の伝統」か？チャイルド・バラッドにおけるジェンダー差の定量化",
    titleOriginal: "A woman's tradition? Quantifying gender difference in the Child ballads",
    originalLang: "英語",
    authors: "L. Duggan",
    summary:
      "18世紀半ばから19世紀末にかけて収集された英語圏の伝承バラッド集成（チャイルド・バラッド）を対象に、女性が歌い手・伝承者である場合の歌詞と男性による場合の歌詞の言語的特徴を計量テキスト分析で比較した研究。「女性の伝統」という通説の実質を定量的に検証した。",
    mathModelSummary:
      "LIWC（Linguistic Inquiry and Word Count）による語彙カテゴリ頻度分析を用い、統計的検定によって性別による歌詞の言語パターンの差異を定量的に評価。",
    conclusion:
      "語彙頻度分析の結果、歌い手の性別による歌詞の言語パターンの差は通説ほど明確ではなく、「女性の伝統」という区分は言語的証拠によって部分的にしか裏付けられないことが示された。",
    futureIssues:
      "英語圏以外の伝承歌への適用や、収集者側のバイアス（誰がどの歌を採録したか）の影響評価が今後の課題として挙げられている。",
    url: "https://onlinelibrary.wiley.com/doi/10.1111/oli.12400",
    subjectCategory: "民謡・伝承歌",
    modelCategory: "統計的テキスト分析",
  },
  {
    id: "study-24",
    year: 2022,
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
    conclusion:
      "旋律への影響が小さい変化ほど生じやすいという規則性が日英両方の民謡伝統で共通して見られ、音楽の変異にも遺伝的変異と類似したパターンが存在することが示された。",
    futureIssues: "対象を日英2文化に限定しているため、より多様な音楽文化圏への拡張が今後の課題として言及されている。",
    url: "https://www.cell.com/current-biology/fulltext/S0960-9822(22)00092-6",
    subjectCategory: "民謡・伝承歌",
    modelCategory: "配列アラインメント（生物情報学的手法）",
  },
  {
    id: "study-25",
    year: 2022,
    titleJa: "橋の下のトロールを見つける：モチーフ検出器に関する予備的研究",
    titleOriginal: "Finding Trolls Under Bridges: Preliminary Work on a Motif Detector",
    originalLang: "英語",
    authors: "W. Victor H. Yarlott 他",
    summary:
      "民話・ニュース・プロパガンダ等に繰り返し現れる「モチーフ」を自動検出するシステムの開発に向けた予備研究。従来手作業に頼っていたモチーフ抽出を、比喩検出器などの自然言語処理手法を特徴量として用いる形で自動化することを試みた。",
    mathModelSummary:
      "比喩検出モデル等を特徴量とする機械学習分類器によりモチーフ使用の判定を行い、複数カテゴリでF値による性能評価を実施。",
    conclusion:
      "比喩検出モデルを特徴量とする分類器は一部のモチーフカテゴリで有望な性能を示した一方、カテゴリ間の精度差が大きく、モチーフ自動検出の実用化にはさらなる改善が必要であることが分かった。",
    futureIssues:
      "モチーフカテゴリ間の精度差（F1が0.21〜0.35と低い）の改善と、より大規模な訓練データの構築が今後の課題として論文中に明記されている。",
    url: "https://arxiv.org/abs/2204.06085",
    subjectCategory: "説話・昔話",
    modelCategory: "機械学習・自然言語処理",
  },
  {
    id: "study-26",
    year: 2021,
    titleJa: "社会ネットワーク分析における意味的価値の概念：比較神話学への応用",
    titleOriginal:
      "The Concept of Semantic Value in Social Network Analysis: an Application to Comparative Mythology",
    originalLang: "英語",
    authors: "Javier Fumanal-Idocin, Oscar Cordón, Graçaliz Dimuro, María Minárová, Humberto Bustince",
    summary:
      "従来の社会ネットワーク分析にファジィ理論に基づく「意味的近さ（semantic affinity）」の概念を導入し、登場人物間の意味的関係を考慮した拡張ネットワーク分析手法を提案した研究。ギリシャ・北欧・ケルトという3つの神話体系に適用し、比較神話学における新たな分析軸を示した。",
    mathModelSummary:
      "ファジィ集合理論に基づく意味的親和性関数を定義し、従来のグラフ理論的ネットワーク指標を意味情報で重み付け・拡張する手法。",
    conclusion:
      "意味的近さを考慮した拡張ネットワーク指標により、従来のグラフ理論的指標だけでは捉えられない登場人物間の関係性の違いを3つの神話体系間で比較できることが示された。",
    futureIssues:
      "意味的近さの定義・パラメータ設定の主観性の低減や、より多くの神話体系への適用が今後の課題として挙げられている。",
    url: "https://arxiv.org/abs/2109.08023",
    subjectCategory: "神話",
    modelCategory: "グラフ理論・ファジィネットワーク分析",
  },
  {
    id: "study-27",
    year: 2022,
    titleJa: "謎めいたフラーホと彼の名を冠した物語：初期アイルランド英雄物語のネットワーク分析",
    titleOriginal:
      "The Enigmatic Fráoch and His Eponymous Tale — Network Analysis of an Early Irish Heroic Romance",
    originalLang: "英語",
    authors: "Madeleine Janickyj, Daniel Curley, Pádraig Mac Carron, Mike McCarthy, Joseph Yose, Ralph Kenna",
    summary:
      "アイルランドの英雄物語『タン・ボー・フライヒ』の登場人物ネットワークを構築し、アルスター物語群の中心的叙事詩『タン・ボー・クアルンゲ』および関連する7つの小物語と構造的に比較した研究。物語間の構造的類似性を定量的に明らかにした。",
    mathModelSummary:
      "登場人物相互作用に基づく社会ネットワークを構築し、次数分布・中心性指標などを用いて複数の物語間のネットワーク構造を比較するネットワーク科学的手法。",
    conclusion:
      "『タン・ボー・フライヒ』のネットワーク構造は関連するアルスター物語群の他の小物語と統計的に類似しており、物語群全体が共通の物語的枠組みを共有している可能性が示された。",
    futureIssues: "写本ごとの異同やテキスト解釈の違いがネットワーク構造に与える影響のさらなる検証が今後の課題とされている。",
    url: "https://www.worldscientific.com/doi/abs/10.1142/S0219525922400069",
    subjectCategory: "神話",
    modelCategory: "ネットワーク科学",
  },
  {
    id: "study-28",
    year: 2016,
    titleJa: "民話モチーフの分布データから見る新大陸への人類移住",
    titleOriginal: "Peopling of the New World from Data on Distributions of Folklore Motifs",
    originalLang: "英語",
    authors: "Yuri E. Berezkin",
    summary:
      "世界の神話・民話モチーフの大規模データベースを用い、アメリカ大陸の先住民説話に見られるモチーフの分布パターンを分析することで、人類の新大陸への移住・拡散の経路や時期を推定しようとした研究。考古学・遺伝学的知見との整合性も議論している。",
    mathModelSummary:
      "モチーフの地域別出現頻度データに対するクラスター分析・統計的分布比較により、モチーフ分布と既知の移住ルート・年代との対応関係を検証。",
    conclusion:
      "モチーフの地理的分布パターンは考古学的・遺伝学的に推定されている人類の新大陸への移住経路と概ね整合しており、民話モチーフが人類移住史の傍証となりうることが示された。",
    futureIssues:
      "モチーフの記録密度の地域差の補正や、より精緻な年代推定手法との統合が今後の課題として言及されている。",
    url: "https://link.springer.com/chapter/10.1007/978-3-319-39445-9_5",
    subjectCategory: "神話",
    modelCategory: "統計的分布分析",
  },
  {
    id: "study-29",
    year: 2023,
    titleJa: "シンデレラの身体：ジェンダー・身体性・説話プロットへの定量的アプローチ",
    titleOriginal: "Cinderella's Body. A Quantitative Approach to Gender, Embodiment, and Folktale Plots",
    originalLang: "英語",
    authors: "Jeana Jorgensen",
    summary:
      "ATU510A「シンデレラ」型説話群を対象に、主人公の美しさや身体描写に関するフェミニズム的な主張を定量的テキスト分析によって検証した研究。美しさと若さの結びつきや、援助者との出会いが必ずしも主人公を「美化」する機能を持たないことなどを統計的に示した。",
    mathModelSummary:
      "説話テキストに対する定量的コーディングと統計的頻度分析を用い、身体描写・美醜表現とプロット構造上の機能との関係を検証するテキストマイニング的手法。",
    conclusion:
      "身体描写の定量分析の結果、シンデレラ型説話における美しさの強調は援助者の登場と必ずしも結びついておらず、フェミニズム的な通説の一部は説話テキストの実証的パターンと一致しないことが示された。",
    futureIssues:
      "コーディング基準の主観性の低減や、非西洋圏のシンデレラ型説話への分析対象の拡張が今後の課題として挙げられている。",
    url: "https://www.degruyterbrill.com/document/doi/10.1515/fabula-2023-0003/html",
    subjectCategory: "説話・昔話",
    modelCategory: "統計的テキスト分析",
  },
  {
    id: "study-30",
    year: 2013,
    titleJa: "ポリュペモス（Aa.Th.1137）：先史時代説話の系統学的再構築",
    titleOriginal: "Polyphemus (Aa. Th. 1137): A phylogenetic reconstruction of a prehistoric tale",
    originalLang: "フランス語（英語要旨あり）",
    authors: "Julien d'Huy",
    summary:
      "ギリシャ神話「オデュッセイア」のポリュペモス（単眼の巨人）説話（説話類型Aa.Th.1137）について、ヨーロッパ・北米地域の24バリアントから抽出した79個のモチーフ（ミセーム）を対象に系統学的分析を行い、旧石器時代に遡りうる祖形の再構築を試みた研究。",
    mathModelSummary:
      "モチーフを二値形質としてコード化し、Bio Neighbor Joining法（SplitsTree実装）による系統ネットワーク解析を実施。バリアントの多様化パターンをmtDNAハプログループX2の分布と対比している。",
    conclusion:
      "バリアントの系統的多様化パターンがmtDNAハプログループX2の分布と対応することから、ポリュペモス説話の起源が旧石器時代の北米への移住期まで遡る可能性が示唆された。",
    futureIssues:
      "遺伝学的データとの対応関係の検証は仮説段階にとどまっており、より広範な地域データや独立した年代測定手法による裏付けが今後の課題である。",
    url: "https://hal.science/hal-00826004",
    subjectCategory: "神話",
    modelCategory: "系統樹・系統ネットワーク分析",
  },
  {
    id: "study-31",
    year: 1991,
    titleJa: "中部日本における二世紀にわたる死亡率変化 ―ある寺院の死亡台帳からの証拠―",
    titleOriginal: "Two Centuries of Mortality Change in Central Japan: The Evidence from a Temple Death Register",
    originalLang: "英語",
    authors: "Samuel H. Preston, Ann Bowman Jannetta",
    summary:
      "岐阜県飛騨地方の浄土真宗寺院に残る過去帳(死亡台帳)を用い、1771年から1852年にかけての約8万件の死亡記録から乳幼児死亡率・年齢別死亡率の長期変動を復元し、天然痘など感染症が死亡構造に与えた影響を分析した研究。",
    mathModelSummary:
      "死亡台帳の記録を年齢・死因別に集計し、生命表(life table)およびモデル生命表との比較によって年齢別死亡率曲線を推定する人口統計学的手法を用いた。",
    conclusion:
      "天然痘は10歳未満死亡の最大の死因であり、種痘導入以前の江戸後期日本における乳幼児死亡率の高さと年次変動の大きさを定量的に明らかにした。",
    futureIssues:
      "単一寺院データに基づくため他地域との比較可能性や、出生・死亡登録の脱漏の程度をより精緻に補正する必要がある。",
    url: "https://www.tandfonline.com/doi/abs/10.1080/0032472031000148936",
    subjectCategory: "歴史疫学",
    modelCategory: "人口統計モデル(生命表分析)",
  },
  {
    id: "study-32",
    year: 2005,
    titleJa: "人口と世帯の動態 ―会津山間部の宗門改帳にみる北日本の一山村地域、1750-1850年―",
    titleOriginal:
      "Population and households dynamics: A mountainous district in northern Japan in the Shûmon Aratame Chô of Aizu, 1750–1850",
    originalLang: "英語",
    authors: "Akira Hayami, Aoi Okada",
    summary:
      "福島県会津地方の山間4カ村の宗門改帳(1750-1850年)を家族復元法により個人・世帯単位で接続し、隔絶された山村における人口停滞の実態と直系家族(stem family)世帯構造との関係を分析した。",
    mathModelSummary:
      "家族復元法(family reconstitution)により個人の生残・婚姻・出産履歴を再構成し、コーホート別の人口動態指標を算出する歴史人口学的統計手法を用いた。",
    conclusion:
      "山間部では平地に比べ人口増加が停滞し、直系家族世帯が最も卓越した世帯類型であることを示し、地理的隔絶が人口動態と世帯構造の双方に影響することを明らかにした。",
    futureIssues:
      "対象4カ村の結果を他の地形条件の地域と比較し、山村特有の人口停滞要因をより体系的に検証する必要がある。",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S1081602X05000357",
    subjectCategory: "歴史人口学",
    modelCategory: "人口統計モデル(家族復元法)",
  },
  {
    id: "study-33",
    year: 2008,
    titleJa: "日本歴史人口学の空白を埋める ―19世紀農村日本における婚姻・出生力・世帯―",
    titleOriginal:
      "Filling Gaps in Japanese Historical Demography: Marriage, Fertility, and Households in Nineteenth-Century Rural Japan",
    originalLang: "英語",
    authors: "Satomi Kurosu",
    summary:
      "東北地方の宗門改帳データを用い、19世紀農村日本における結婚年齢・婚姻率・出生力の地域差を推定し、それらが世帯構造(直系家族制)や地域経済発展の水準とどのように関連するかを検討した研究。",
    mathModelSummary:
      "宗門改帳から復元したコーホート生命表・婚姻表を用い、有配偶出生率や婚姻タイミングを年齢別に算出する歴史人口学的統計モデルを適用した。",
    conclusion:
      "出生力・婚姻パターンには地域による顕著な差があり、世帯の相続制度の厳格さや地域の経済発展度がその差を規定する主要因であることを示した。",
    futureIssues:
      "対象地域が東北の限られた村落に偏っているため、西日本など異なる相続慣行を持つ地域データとの体系的比較が今後の課題である。",
    url: "https://kci.go.kr/kciportal/landing/article.kci?arti_id=ART002054789",
    subjectCategory: "歴史人口学",
    modelCategory: "人口統計モデル(コーホート生命表・婚姻表)",
  },
  {
    id: "study-34",
    year: 2025,
    titleJa: "近世日本における経済的困窮と移動 ―人別改帳による農村・都市比較の実証研究―",
    titleOriginal:
      "Economic stress and migration in early modern Japan: Rural-urban comparative evidence from population registers",
    originalLang: "英語",
    authors: "Satomi Kurosu, Hao Dong",
    summary:
      "東北地方の3農村と1都市の人別改帳(1708-1870年)から個人単位のパネルデータを構築し、飢饉や米価変動などの経済的ショックが奉公移動や欠落(失踪)といった人口移動行動に与える影響を検証した研究。",
    mathModelSummary:
      "個人の年次パネルデータにイベントヒストリー分析(離散時間ハザードモデル)を適用し、米価や飢饉ダミー変数を説明変数として移動確率への効果を推定した。",
    conclusion:
      "経済的困窮期には正規の奉公移動は減少する一方で欠落が増加し、農村住民は飢饉に、都市住民は米価変動により敏感に反応するという非対称な脆弱性が明らかになった。",
    futureIssues:
      "対象が東北地方の限定的な地域に留まるため、他地域や身分階層による移動行動の差異を広域データで検証することが今後の課題である。",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0014498325000142",
    subjectCategory: "村落構造・人口移動",
    modelCategory: "統計モデル(イベントヒストリー分析)",
  },
  {
    id: "study-35",
    year: 1998,
    titleJa: "二種類の直系家族制か ―伝統的日本とヨーロッパの比較―",
    titleOriginal: "Two kinds of stem-family system? Traditional Japan and Europe compared",
    originalLang: "英語",
    authors: "Osamu Saito",
    summary:
      "近世日本(諏訪・会津等)とヨーロッパ(ピレネー地方等)の歴史人口学データを比較し、いずれも一子相続を特徴とする「直系家族制」でありながら相続タイミングや世帯内労働配分の点で異なる下位類型が存在することを論じた研究。",
    mathModelSummary:
      "宗門改帳等から復元した世帯構成・相続年齢の分布を集計し、地域間で世帯類型別頻度やライフサイクルステージを比較する歴史人口学的な記述統計・比較分析を用いた。",
    conclusion:
      "日欧の直系家族制は表面的な類似にもかかわらず、相続の時期(生前相続か死後相続か)や非相続子の処遇において本質的に異なる二つの下位類型に分かれることを示した。",
    futureIssues:
      "比較対象地域数が限られており、より多様な地域の家族類型データを収集して類型論を精緻化することが課題として残る。",
    url: "https://www.cambridge.org/core/journals/continuity-and-change/article/abs/two-kinds-of-stemfamily-system-traditional-japan-and-europe-compared/DB44D679B8304ADDBE28678A10EC42D2",
    subjectCategory: "村落構造・家族構造",
    modelCategory: "比較歴史人口学(記述統計モデル)",
  },
  {
    id: "study-36",
    year: 2020,
    titleJa: "中心集団から拡散する方言語彙の空間パターンの定量化",
    titleOriginal: "Quantifying the spatial pattern of dialect words spreading from a central population",
    originalLang: "英語",
    authors: "Takuya Takahashi, Yasuo Ihara",
    summary:
      "柳田國男の方言周圏論が示唆する「文化的中心地から周辺への語彙拡散」という現象を、人口ネットワーク上の言語拡散モデルとして定式化し、理想化ネットワークと日本の都道府県間移動を反映した現実的ネットワークの双方で語の年代分布を導出した研究。",
    mathModelSummary:
      "個体群動態モデルに基づく言語伝達モデル(中心集団で新語が繰り返し生成され隣接集団へ確率的に伝播する拡散過程)を、グラフ上のマルコフ過程として定式化し解析的・数値的に解いた。",
    conclusion:
      "中心地(京都)で新語が繰り返し生まれ周辺へ拡散するというメカニズムだけで、方言周圏論が予測する同心円状の語彙分布パターンを定量的に再現できることを示した。",
    futureIssues:
      "モデルは語の生成・伝播の均質性を仮定しており、交通網の発達や都市化による伝播速度の変化を組み込んだ拡張が今後の課題である。",
    url: "https://royalsocietypublishing.org/doi/10.1098/rsif.2020.0335",
    subjectCategory: "方言・言語地理",
    modelCategory: "個体群ネットワーク上の言語拡散モデル",
  },
  {
    id: "study-37",
    year: 2017,
    titleJa: "人類方言の空間的進化",
    titleOriginal: "Spatial evolution of human dialects",
    originalLang: "英語",
    authors: "James Burridge",
    summary:
      "方言境界の形成過程を、人口密度の変動や海岸線などの地理的境界の影響を受けながら「表面張力」的に安定化する物理モデルとして定式化し、方言連続体・等語線の束化・都市からの波状拡散といった言語地理学的観察を再現した研究。",
    mathModelSummary:
      "統計物理学の界面ダイナミクス(表面張力によるドメイン境界の長さ最小化)を応用した確率的セル空間モデルを構築し、モンテカルロシミュレーションにより方言境界の時間発展を解析した。",
    conclusion:
      "方言地域の境界は人口密度勾配と地形的制約に規定される表面張力的効果によって少数の安定配置へ収束する傾向があり、複雑な初期条件によらず予測可能なパターンが生じることを示した。",
    futureIssues:
      "モデルは語彙的特徴の伝播のみを扱っており、文法・音韻変化など異なる言語変化のタイプへの適用可能性の検証が今後の課題である。",
    url: "https://link.aps.org/doi/10.1103/PhysRevX.7.031008",
    subjectCategory: "方言・言語地理",
    modelCategory: "統計物理モデル(表面張力・界面ダイナミクス)",
  },
  {
    id: "study-38",
    year: 2014,
    titleJa: "方言特徴拡散のコンピュータシミュレーション",
    titleOriginal: "Computer Simulation of Dialect Feature Diffusion",
    originalLang: "英語",
    authors: "William A. Kretzschmar Jr., Ilkka Juuso, C. Thomas Bailey",
    summary:
      "アメリカ言語地図(Linguistic Atlas)のデータを対象に、方言特徴が地域間でどのように拡大・縮小するかをセルオートマトンで再現し、実際の方言分布パターンとの整合性を検証した研究。",
    mathModelSummary:
      "格子状に配置した地点(セル)ごとに近隣セルの言語特徴の状態を参照して更新規則を適用する2種類のセルオートマトンモデルを独立に構築し、多数回の反復計算によって地域的分布パターンの創発を観察した。",
    conclusion:
      "単純な近隣参照の更新規則の反復から、言語地図データに見られるような方言特徴の地域的な拡大・縮小パターンが再現可能であることを示し、方言変化を複雑適応系として捉える妥当性を裏付けた。",
    futureIssues:
      "モデルの更新規則は簡略化されており、話者間の社会的威信や移動パターンなど社会言語学的要因を組み込んだより現実的なモデル化が今後の課題である。",
    url: "https://www.cambridge.org/core/journals/journal-of-linguistic-geography/article/abs/computer-simulation-of-dialect-feature-diffusion/5FC8D58C781597E1FAB72F2413EE1AAE",
    subjectCategory: "方言・言語地理",
    modelCategory: "セルオートマトンモデル",
  },
  {
    id: "study-39",
    year: 2023,
    titleJa:
      "アクセント型統合に基づくアクセント体系のベイズ系統解析 ―日本語方言への新手法の適用―",
    titleOriginal:
      "Bayesian phylogenetic analysis of pitch-accent systems based on accentual class merger: a new method applied to Japanese dialects",
    originalLang: "英語",
    authors: "Takuya Takahashi, Ayaka Onohara, Yasuo Ihara",
    summary:
      "日本語諸方言におけるアクセント型の統合(合流)パターンをデータとして用い、方言間の系統関係を推定する新たなベイズ系統樹推定手法を提案し、これを実際の日本語方言アクセント体系に適用した研究。",
    mathModelSummary:
      "アクセント型の合流を離散的な系統学的形質とみなし、ベイズ統計に基づく系統樹推定(MCMCによる事後分布推定)を用いて方言間の分岐関係と分岐年代を推定するモデルを構築した。",
    conclusion:
      "アクセント合流パターンに基づく系統樹は、従来の語彙比較に基づく方言分類とおおむね整合しつつも一部で異なる系統関係を示唆し、アクセント体系が方言系統推定の有用な情報源となることを示した。",
    futureIssues:
      "系統樹モデルは方言間の空間的接触による特徴の水平伝播を十分に考慮できておらず、系統発生と空間拡散を統合したモデルへの拡張が今後の課題である。",
    url: "https://academic.oup.com/jole/article/8/2/169/7717950",
    subjectCategory: "方言・言語地理",
    modelCategory: "ベイズ系統樹推定モデル",
  },
  {
    id: "study-40",
    year: 2018,
    titleJa: "Dialectones ―Twitterデータを用いた統計的に有意な方言境界の検出―",
    titleOriginal: "Dialectones: Finding Statistically Significant Dialectal Boundaries Using Twitter Data",
    originalLang: "英語",
    authors: "Carlos A. Rodriguez-Diaz, Sergio Jimenez, George Dueñas, Johnatan Estiven Bonilla, Alexander Gelbukh",
    summary:
      "コロンビア国内160地点から収集したスペイン語ツイートのコーパスを用い、生態学の「エコトーン」概念を言語境界に応用した「ダイアレクトーン」概念を提案し、統計的検定によって方言境界を客観的に検出する手法を開発した研究。",
    mathModelSummary:
      "単語の出現頻度(ユニグラム特徴)を地点間で比較し、Hilbert-Schmidt独立性基準(HSIC)およびWilcoxon符号順位検定という2種のノンパラメトリック統計検定を用いて方言境界の統計的有意性を判定した。",
    conclusion:
      "統計的検定に基づき自動検出された方言境界(ダイアレクトーン)は、従来の方言学者による地域区分と部分的に一致しつつも異なる知見を与え、方言境界検出の客観的な代替手法として有効であることを示した。",
    futureIssues:
      "SNSデータの利用者属性の偏り(年齢層・都市部集中等)による代表性の限界があり、より均質なサンプリングやオフラインデータとの統合が今後の課題である。",
    url: "https://www.cys.cic.ipn.mx/ojs/index.php/CyS/article/view/3104",
    subjectCategory: "方言・言語地理",
    modelCategory: "統計的境界検定モデル(HSIC・Wilcoxon検定)",
  },
  {
    id: "study-41",
    year: 2024,
    titleJa: "観念の拡散と中欧における大魔女狩り",
    titleOriginal: "Ideational diffusion and the great witch hunt in Central Europe",
    originalLang: "英語",
    authors: "Kerice Doten-Snitker, Steven Pfaff, Yuan Hsiao",
    summary:
      "近世中欧における魔女裁判の都市間拡大を、悪魔学書の出版動向・気候・国家統制力・都市間ネットワークのデータと組み合わせて分析し、ある都市での魔女裁判の実施が周辺都市の裁判実施行動に及ぼす社会的影響を検証した研究。",
    mathModelSummary:
      "都市を単位とするイベント履歴データに対し、都市間の地理的・宗教的ネットワーク構造を考慮した拡散モデル(空間的相互依存を組み込んだ統計的生存時間分析)を適用し、観念拡散の経路を推定した。",
    conclusion:
      "魔女裁判の拡大は独立した地域的発生ではなく、印刷物を介した観念の伝播と近隣都市の動向を模倣する社会的影響過程によって説明されることが明らかになった。",
    futureIssues:
      "都市単位の集計データに依拠しており、個々の裁判記録レベルでのより詳細な社会ネットワーク再構成が今後の課題として挙げられる。",
    url: "https://digitalcommons.chapman.edu/sociology_articles/104/",
    subjectCategory: "民間信仰・タブー",
    modelCategory: "空間的拡散モデル(イベント履歴・都市間ネットワーク)",
  },
  {
    id: "study-42",
    year: 2022,
    titleJa:
      "妊娠中の食物禁忌 ―農耕民における出産関連圧力を示唆する異文化間比較メタ分析―",
    titleOriginal:
      "Food taboos during pregnancy: meta-analysis on cross cultural differences suggests specific, diet-related pressures on childbirth among agriculturalists",
    originalLang: "英語",
    authors: "Ornella Maggiulli, Fabrizio Rufo, Sarah E. Johns, Jonathan C. K. Wells",
    summary:
      "世界各地の伝統社会における妊娠中の食物禁忌に関する民族誌データを収集し、生業形態(農耕民か非農耕民か)によって禁忌の対象食品や正当化理由がどのように異なるかを異文化間で統計的に比較した研究。",
    mathModelSummary:
      "民族誌横断データベースから抽出した食物禁忌の事例をカテゴリ化し、生業形態等を要因としたカイ二乗検定・フィッシャーの正確検定による異文化間比較メタ分析を行った。",
    conclusion:
      "農耕社会の食物禁忌は栽培・加工食品を対象とし出生時体重増加への懸念と関連する傾向が強く、非農耕社会では非家畜化動物を対象とし生理的要因以外の理由づけが多いという体系的な差異が示された。",
    futureIssues:
      "民族誌記録の質・量が社会間で不均一であり、禁忌の実際の遵守率や個人差を反映したより精緻なデータ収集が今後の課題である。",
    url: "https://peerj.com/articles/13633/",
    subjectCategory: "民間信仰・タブー",
    modelCategory: "異文化間統計メタ分析(カイ二乗検定等)",
  },
  {
    id: "study-43",
    year: 1998,
    titleJa: "スイスの遺伝的構造とアイソニミー(同姓分析) II ―距離による隔離―",
    titleOriginal: "Isonymy and the genetic structure of Switzerland. II. Isolation by distance",
    originalLang: "英語",
    authors: "A. Rodriguez-Larralde, I. Barrai, E. Scapoli, M. Beretta, S. Nesti, E. Mamolini",
    summary:
      "スイス各州の電話帳データに基づく姓(苗字)の分布を用い、アイソニミー(同姓率)分析によって州間の遺伝的類縁関係を推定し、山岳地形や言語境界が集団構造に及ぼす影響を検討した研究。",
    mathModelSummary:
      "姓の一致頻度からラスカー距離(同姓率の対数の負値)を算出し、地理的距離との回帰関係(距離による隔離)をマレコの指数関数的隔離モデルにより検証した。",
    conclusion:
      "州間のアイソニミーは地理的距離の対数と有意な線形関係を示し、山岳による地理的障壁と言語境界がスイス国内の人口集団構造の急激な変化をもたらしていることが明らかになった。",
    futureIssues:
      "姓の分布は移住や改姓等の文化的要因にも影響されるため、実際の遺伝マーカーデータとの比較によりアイソニミーの遺伝的妥当性をさらに検証する必要がある。",
    url: "https://www.tandfonline.com/doi/abs/10.1080/03014469800006772",
    subjectCategory: "親族・同族構造",
    modelCategory: "アイソニミー分析(隔離距離モデル)",
  },
  {
    id: "study-44",
    year: 2024,
    titleJa: "系譜データを用いたケベック創始者集団の遺伝的構造の解明",
    titleOriginal: "Deciphering the genetic structure of the Quebec founder population using genealogies",
    originalLang: "英語",
    authors: "L. Gagnon, C. Moreau, C. Laprise 他",
    summary:
      "17世紀以降のケベック入植者に遡る大規模系譜データベース(BALSAC)を用い、数百万人規模の家系ネットワークを再構成して、地域ごとの創始者効果や移住の履歴が現代ケベック人集団の遺伝的構造に与えた影響を解析した研究。",
    mathModelSummary:
      "系譜記録をノードとエッジからなる巨大な親族ネットワークグラフとして表現し、血縁係数や近交係数を計算するグラフ理論的手法および集団遺伝学的シミュレーションを組み合わせた。",
    conclusion:
      "ケベック内の地域間で祖先構成や創始者効果の強さに明確な差があることを系譜ネットワーク解析から定量的に示し、歴史的な入植・移住パターンが現代の集団遺伝構造を規定していることを裏付けた。",
    futureIssues:
      "系譜データに含まれない移民や記録の欠落した家系の扱いが課題であり、より広い地理的範囲への手法の一般化も今後の検討課題である。",
    url: "https://www.nature.com/articles/s41431-023-01356-2",
    subjectCategory: "親族・同族構造",
    modelCategory: "グラフ理論(系譜ネットワーク解析)",
  },
  {
    id: "study-45",
    year: 2023,
    titleJa: "英語地名の言語的起源に関する確率論的分析",
    titleOriginal: "A Stochastic Analysis of the Linguistic Provenance of English Place Names",
    originalLang: "英語",
    authors: "Michael Dalvean",
    summary:
      "イングランド各地の地名を対象に、地名の語源(古英語・古ノルド語・ケルト語等)ごとの地理的分布を大規模地名データベースから抽出し、その空間的偏りを確率モデルによって定量的に評価した研究。",
    mathModelSummary:
      "地名の言語的起源をカテゴリ変数として扱い、空間的自己相関やクラスタリングの検定を含む確率論的・統計的モデルを用いて地名分布のランダム性からの逸脱を評価した。",
    conclusion:
      "地名の言語的起源には統計的に有意な空間的偏りが存在し、その分布パターンが歴史的な民族移動・定住の波(アングロサクソン・ヴァイキング等)の痕跡を反映していることが確認された。",
    futureIssues:
      "地名の語源同定自体に不確実性が伴うため、語源判定の信頼区間を明示的にモデルへ組み込む拡張が今後の課題とされる。",
    url: "https://arxiv.org/abs/2312.12850",
    subjectCategory: "地名・姓氏",
    modelCategory: "確率論的空間分析モデル",
  },
  {
    id: "study-46",
    year: 2018,
    titleJa: "植物苗字の分類と地域分布に関する統計分析",
    titleOriginal: "植物苗字の分類と地域分布に関する統計分析",
    originalLang: "日本語",
    authors: "塚常健太",
    summary:
      "全国の電話帳由来の苗字統計データから上位1万位の苗字を抽出し、漢字辞典に基づき植物に由来する苗字1,154種を分類したうえで、それらの都道府県別分布に見られる地域的偏りとその要因を統計的に分析した研究。",
    mathModelSummary:
      "苗字の出現頻度データに対し、地域(都道府県)を上位レベルとするマルチレベル分析(階層線形モデル)を適用し、植生分布などの地理的変数が苗字の地域的偏りに与える影響を評価した。",
    conclusion:
      "植物苗字の地域分布には有意な偏りがあり、当該植物の自生・栽培分布(植生分布)が苗字の地域的集中と正の関連を持つことが明らかになった。",
    futureIssues:
      "苗字の成立時期や由来の歴史的経緯が個々に異なるため、地名由来との関係など苗字成立過程の歴史的検証をさらに深める必要がある。",
    url: "https://jglobal.jst.go.jp/detail?JGLOBAL_ID=201902266799508930",
    subjectCategory: "地名・姓氏",
    modelCategory: "マルチレベル分析(階層線形モデル)",
  },
  {
    id: "study-47",
    year: 2025,
    titleJa: "中国厦門における仏教寺院の歴史的発展と空間分布の解明",
    titleOriginal: "Tracing the historical development and spatial distribution of Buddhist temples in Xiamen, China",
    originalLang: "英語",
    authors: "J. Fu, Q. Li, W. Xie, H. Mao, C. Zhang",
    summary:
      "中国厦門市の地方志(地域誌)や考古調査記録に基づき、隋唐時代から明清時代にかけての仏教寺院の建立数と立地の変遷をGISデータベース化し、地形・水系・交通網などの環境要因との関係を定量的に分析した研究。",
    mathModelSummary:
      "歴史地理情報システム(HGIS)を用いて寺院の位置データを時代別にマッピングし、モランのI統計量による空間的自己相関分析やカーネル密度推定、GeoDetectorによる要因分析を行った。",
    conclusion:
      "寺院数は明清期にピークを迎え分布の中心が南へ移動する傾向を示し、低標高・南向き斜面・交通幹線付近に立地が集中するなど、寺院立地が環境要因と都市化の進展に強く規定されていたことが明らかになった。",
    futureIssues:
      "地方志など文献史料に基づく寺院所在地の同定には精度の限界があり、考古学的発掘データとのさらなる照合による位置情報の精緻化が今後の課題である。",
    url: "https://www.nature.com/articles/s40494-025-01857-x",
    subjectCategory: "寺院の空間分布",
    modelCategory: "空間統計モデル(HGIS・空間的自己相関分析)",
  },
  {
    id: "study-48",
    year: 1993,
    titleJa: "回転型貯蓄信用講(ROSCA)の経済学",
    titleOriginal: "The Economics of Rotating Savings and Credit Associations",
    originalLang: "英語",
    authors: "Timothy Besley, Stephen Coate, Glenn Loury",
    summary:
      "世界各地の民俗社会に見られる「講」型の相互扶助金融組織(回転型貯蓄信用講、ROSCA)を対象に、耐久消費財購入のための貯蓄という文脈で、くじ引き型と入札型という二つの資金配分方式の経済的機能と持続可能性を理論的に分析した研究。",
    mathModelSummary:
      "個人が耐久財購入のために貯蓄する動学的最適化モデルを構築し、ランダム配分方式と入札配分方式それぞれについて参加者の期待効用を比較するゲーム理論・厚生経済学的モデルを用いた。",
    conclusion:
      "信用市場にアクセスできない個人にとってROSCA参加はどちらの配分方式でも単独貯蓄より厚生を改善するが、選好が同質的な場合はランダム配分方式の方が望ましいことを理論的に示した。",
    futureIssues:
      "モデルは参加者の選好の同質性を仮定しており、異質な選好や参加者間の血縁・地縁関係(社会的紐帯)がROSCAの安定性に与える影響のさらなる理論的検討が今後の課題である。",
    url: "https://ideas.repec.org/a/aea/aecrev/v83y1993i4p792-810.html",
    subjectCategory: "相互扶助組織",
    modelCategory: "動学的最適化モデル・ゲーム理論",
  },
];
