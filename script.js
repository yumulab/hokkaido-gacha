// 市町村コードの配列（全179市町村）
const townMap = {
    12092: "夕張市",
    12106: "岩見沢市",
    12157: "美唄市",
    12165: "芦別市",
    12181: "赤平市",
    12220: "三笠市",
    12254: "滝川市",
    12262: "砂川市",
    12271: "歌志内市",
    12289: "深川市",
    14231: "南幌町",
    14249: "奈井江町",
    14257: "上砂川町",
    14273: "由仁町",
    14281: "長沼町",
    14290: "栗山町",
    14303: "月形町",
    14311: "浦臼町",
    14320: "新十津川町",
    14338: "妹背牛町",
    14346: "秩父別町",
    14362: "雨竜町",
    14371: "北竜町",
    14389: "沼田町",
    11002: "札幌市",
    12173: "江別市",
    12246: "千歳市",
    12319: "恵庭市",
    12343: "北広島市",
    12351: "石狩市",
    13030: "当別町",
    13048: "新篠津村",
    12033: "小樽市",
    13919: "島牧村",
    13927: "寿都町",
    13935: "黒松内町",
    13943: "蘭越町",
    13951: "ニセコ町",
    13960: "真狩村",
    13978: "留寿都村",
    13986: "喜茂別町",
    13994: "京極町",
    14001: "倶知安町",
    14010: "共和町",
    14028: "岩内町",
    14036: "泊村",
    14044: "神恵内村",
    14052: "積丹町",
    14061: "古平町",
    14079: "仁木町",
    14087: "余市町",
    14095: "赤井川村",
    12050: "室蘭市",
    12131: "苫小牧市",
    12301: "登別市",
    12335: "伊達市",
    15717: "豊浦町",
    15750: "壮瞥町",
    15784: "白老町",
    15814: "厚真町",
    15849: "洞爺湖町",
    15857: "安平町",
    15865: "むかわ町",
    16012: "日高町",
    16021: "平取町",
    16047: "新冠町",
    16071: "浦河町",
    16080: "様似町",
    16098: "えりも町",
    16101: "新ひだか町",
    12025: "函館市",
    12360: "北斗市",
    13315: "松前町",
    13323: "福島町",
    13331: "知内町",
    13340: "木古内町",
    13374: "七飯町",
    13439: "鹿部町",
    13455: "森町",
    13463: "八雲町",
    13471: "長万部町",
    13617: "江差町",
    13625: "上ノ国町",
    13633: "厚沢部町",
    13641: "乙部町",
    13676: "奥尻町",
    13706: "今金町",
    13714: "せたな町",
    12041: "旭川市",
    12203: "士別市",
    12211: "名寄市",
    12297: "富良野市",
    14524: "鷹栖町",
    14532: "東神楽町",
    14541: "当麻町",
    14559: "比布町",
    14567: "愛別町",
    14575: "上川町",
    14583: "東川町",
    14591: "美瑛町",
    14605: "上富良野町",
    14613: "中富良野町",
    14621: "南富良野町",
    14630: "占冠村",
    14648: "和寒町",
    14656: "剣淵町",
    14681: "下川町",
    14699: "美深町",
    14702: "音威子府村",
    14711: "中川町",
    14729: "幌加内町",
    12122: "留萌市",
    14818: "増毛町",
    14826: "小平町",
    14834: "苫前町",
    14842: "羽幌町",
    14851: "初山別村",
    14869: "遠別町",
    14877: "天塩町",
    12149: "稚内市",
    15113: "猿払村",
    15121: "浜頓別町",
    15130: "中頓別町",
    15148: "枝幸町",
    15164: "豊富町",
    15172: "礼文町",
    15181: "利尻町",
    15199: "利尻富士町",
    15202: "幌延町",
    12084: "北見市",
    12114: "網走市",
    12190: "紋別市",
    15431: "美幌町",
    15440: "津別町",
    15458: "斜里町",
    15466: "清里町",
    15474: "小清水町",
    15491: "訓子府町",
    15504: "置戸町",
    15521: "佐呂間町",
    15555: "遠軽町",
    15598: "湧別町",
    15601: "滝上町",
    15610: "興部町",
    15628: "西興部村",
    15636: "雄武町",
    15644: "大空町",
    12076: "帯広市",
    16314: "音更町",
    16322: "士幌町",
    16331: "上士幌町",
    16349: "鹿追町",
    16357: "新得町",
    16365: "清水町",
    16373: "芽室町",
    16381: "中札内村",
    16390: "更別村",
    16411: "大樹町",
    16420: "広尾町",
    16438: "幕別町",
    16446: "池田町",
    16454: "豊頃町",
    16462: "本別町",
    16471: "足寄町",
    16489: "陸別町",
    16497: "浦幌町",
    16616: "釧路町",
    16624: "厚岸町",
    16632: "浜中町",
    16641: "標茶町",
    16659: "弟子屈町",
    16675: "鶴居村",
    16683: "白糠町",
    16918: "別海町",
    16926: "中標津町",
    16934: "標津町",
    16942: "羅臼町"
};

document.getElementById('gachaButton').addEventListener('click', function() {
    const sleepHours = parseInt(document.getElementById('sleepHours').value);
    
    // 睡眠時間に応じたガチャの回数を決定
    let count;
    /*
    if (sleepHours <= 4) {
        count = 1;
    } else if (sleepHours === 5) {
        count = 2;
    } else if (sleepHours === 6) {
        count = 3;
    } else if (sleepHours >= 7) {
        count = 5;
    } else {
        alert('有効な睡眠時間を入力してください');
        return;
    }
    */
    count = sleepHours;

    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '';

    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            // フラッシュエフェクトを表示
            const flash = document.createElement('div');
            flash.classList.add('flash-effect');
            document.body.appendChild(flash);

            // フラッシュエフェクトの表示と削除
            flash.style.opacity = '1'; // フラッシュ表示
            setTimeout(() => {
                flash.style.opacity = '0'; // フラッシュ消去
                document.body.removeChild(flash); // フラッシュエレメント削除
            }, 250); // エフェクトの持続時間を250ミリ秒に短縮

            const gachaItem = document.createElement('div');
            gachaItem.classList.add('gacha-item');

            // ランダムに市町村コードを選択
            const randomIndex = Math.floor(Math.random() * Object.keys(townMap).length);
            const townCode = Object.keys(townMap)[randomIndex];
            const townName = townMap[townCode];

            // 画像の生成
            const characterImage = document.createElement('img');
            characterImage.src = `images/${townCode}.png`;
            characterImage.alt = `キャラクター${townName}`;

            // 市町村名の表示
            const townNameElement = document.createElement('div');
            townNameElement.classList.add('town-name'); // 追加したクラスを適用
            townNameElement.textContent = townName;

            // 画像と市町村名を結果コンテナに追加
            gachaItem.appendChild(characterImage);
            gachaItem.appendChild(townNameElement);
            resultContainer.appendChild(gachaItem);
        }, 1000 * i);
    }

    // フラッシュエフェクトを表示
    // const flash = document.createElement('div');
    // flash.classList.add('flash-effect');
    // document.body.appendChild(flash);

    // setTimeout(() => {
    //     flash.style.opacity = '1'; // フラッシュ表示
    // }, 100);

    // setTimeout(() => {
    //     flash.style.opacity = '0'; // フラッシュ消去
    //     document.body.removeChild(flash); // フラッシュエレメント削除
    // }, 500);

    // 最後のガチャが終わった後の処理
    // 最初に戻るボタンの処理を追加
    setTimeout(() => {
        const resetButton = document.createElement('button');
        resetButton.textContent = '最初に戻る';
        resetButton.classList.add('reset-button');
        resetButton.addEventListener('click', function() {
            document.getElementById('sleepHours').value = ''; // 睡眠時間入力をクリア
            resultContainer.innerHTML = ''; // ガチャの結果をクリア
        });
        resultContainer.appendChild(resetButton);
    }, 1000 * count);
});
