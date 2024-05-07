/*
スライドメニュー
================================================ */
const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('#menu-panel');
const menuOptions = {
    duration: 1400,
    easing: 'ease',
    fill: 'forwards',
};

//メニューを開く
menuOpen.addEventListener('click', () => {
    menuPanel.animate({translate: ['100vw', 0]}, menuOptions);
});
//メニューを閉じる
menuClose.addEventListener('click', () => {
    menuPanel.animate({translate: [0, '100vw']}, menuOptions);
});

/*
TOP画像
================================================ 
 const topImage = document.querySelector('.top img');
 topImage.animate(
     {
         transform: [
             'scale(1, 1)',
             'scale(0.85, 1.15)',
             'scale(1.1, 0.9)',
             'scale(0.95, 1.08)',
             'scale(0.98, 1.02)',
             'scale(1, 1)',
         ],
     },
     {
         duration: 1000,
         direction: 'alternate',
         fill: 'forwards'
     }
 );
*/

/*
mechanism
================================================ */
const organOpens = document.querySelectorAll('.organ-open');
const organCloses = document.querySelectorAll('.organ-close');
const modals = document.querySelectorAll('.modal');
const organTitle = document.querySelector('#mechanism-title');
const organCap = document.querySelector('#mechanism-caption');
const mask = document.querySelector('#mask');
const showKeyframe = {
    opacity: [0, 1],
    visibility: 'visible',
};
const hiddenKeyframe = {
    opacity: [1, 0],
    visibility: 'hidden',
};
const organOptions = {
    duration: 600,
    easing: 'ease',
    fill: 'forwards'
};

//モーダルウィンドウを開く
organOpens.forEach((organOpen) => {
    organOpen.addEventListener('click', (event) => {
        organOpen.classList.add('organ-clicked');

        modals.forEach((modal) => {
            modal.animate(showKeyframe, organOptions);
            mask.animate(showKeyframe, organOptions);

            //クリックされた要素を特定
            const clickElement = event.target;
            //クリックされた要素のインデックスを取得
            const clickElementIndex = Array.from(organOpens).indexOf(clickElement);

            //条件分岐
            if (clickElementIndex == 0) {
                organTitle.textContent = '脳（のう）';
                organCap.textContent = '脳は、人のからだ全体をコントロールしている、とても大切なところです。大きく分けて、以下の3つを調節する司令塔の役割をしています。【大脳(だいのう)】ものを考えたり、決めたりする知的なはたらき　【小脳(しょうのう)】歩く・走るといった運動をコントロールするはたらき　【脳幹(のうかん)】呼吸など、生命をコントロールするはたらき';
            } else if (clickElementIndex == 1) {
                organTitle.textContent = '鼻（はな）';
                organCap.textContent = '鼻は、においを感じたり、呼吸をするはたらきをしています。 また、空気の中のチリやゴミ、ウイルスなどがからだのなかに入るのを防いだり、からだに入ってくる空気の湿度や温度を調節するはたらきもしています。';
            } else if (clickElementIndex == 2) {
                organTitle.textContent = '口（くち）';
                organCap.textContent = '食べ物を食べたり、味わったりするほか、話をしたり、呼吸をしたりする役割をしています。';
            } else if (clickElementIndex == 3) {
                organTitle.textContent = '耳（みみ）';
                organCap.textContent = '耳は、音を伝えたり聞き分けたりする役割のほかに、からだのバランスを知る重要なはたらきもしています。';
            } else if (clickElementIndex == 4) {
                organTitle.textContent = '肺（はい）';
                organCap.textContent = '肺は、空気中の酸素をからだに取り入れ、いらなくなった二酸化炭素を外に出すはたらきをしています。鼻や口から吸い込んだ空気は喉頭（こうとう）を通り、気管（きかん）に入ります。気管は左右の肺のなかに入ると、2つに分かれて気管支（きかんし）となります。気管支はさらに細かく分かれて、その先には肺胞（はいほう）という空気が入った小さな袋（ふくろ）が、ブドウの房（ふさ）のように付いています。';
            } else if (clickElementIndex == 5) {
                organTitle.textContent = '肝臓（かんぞう）';
                organCap.textContent = '肝臓は、栄養素など、さまざまな物質を化学的に作り変えるはたらきを持ち、からだの中で最大の腺※（せん）といわれています。また、何千という酵素（こうそ）を使い、500以上の複雑な化学変化を起こしています。このために、肝臓と同じはたらきをする化学工場を、人間はまだ作ることができないといわれています。肝臓が元気であることは、すべての器官にとっても大切なことなのです。';
            } else if (clickElementIndex == 6) {
                organTitle.textContent = '胆（たん）のう';
                organCap.textContent = '胆のうは、胆嚢（たんのう）と書きます。肝臓（かんぞう）で作られた胆汁（たんじゅう）を溜（た）めておくはたらきをしています。胆のうは、肝臓と十二指腸をつなぐ管の途中にあり、西洋梨（なし）のような形をしています。';
            } else if (clickElementIndex == 7) {
                organTitle.textContent = 'すい臓（ぞう）';
                organCap.textContent = 'すい臓は、膵臓（すいぞう）と書きます。食べ物を消化するすい液を作り、十二指腸（じゅうにしちょう）に送り出すはたらきをしています。また、血液中の糖分の量を調節するホルモンを作り、血液の中に送り出すはたらきもしています。';
            } else if (clickElementIndex == 8) {
                organTitle.textContent = '小腸（しょうちょう）';
                organCap.textContent = '小腸〈空腸（くうちょう）・回腸（かいちょう）〉は、胃や十二指腸で消化された食べ物をさらに分解し、栄養素を吸収するはたらきをしています。十二指腸も小腸の一部ですが、一般的に小腸とは空腸・回腸のことをいいます。小腸はからだの中で最も長い臓器ともいわれ、約6メートルほどあります。「小腸の内側を広げるとテニスコート1面の4分の1ほどの面積になる」ともいわれています。';
            } else if (clickElementIndex == 9) {
                organTitle.textContent = '心臓（しんぞう）';
                organCap.textContent = '心臓はきれいな血液を全身へ送り、よごれた血液を回収して肺に送ります。心臓の中は右心房（うしんぼう）、右心室（うしんしつ）、左心房（さしんぼう）、左心室（さしんしつ）の4つの部屋に分けられています。心房は血液を受け取り、心室は血液を送り出す役割をしています。心房と心室の間には弁膜（べんまく）があり、血液は一方通行で流れています。';
            } else if (clickElementIndex == 10) {
                organTitle.textContent = '胃（い）';
                organCap.textContent = 'まず、食後何時間か、胃の中に食べ物を貯めておきます。そこで、分泌（ぶんぴつ）された胃液と食べ物を良く混ぜます。胃液には食べ物を化学的に細かくするために必要な消化酵素（しょうかこうそ）がふくまれています。たんぱく質、糖分、乳脂肪（にゅうしぼう）など、それぞれを分解するさまざまな消化酵素（しょうかこうそ）があります。また、胃液にふくまれる塩酸は殺菌効果（さっきんこうか）があり、バクテリアの侵入（しんにゅう）などを防いでいます。';
            } else if (clickElementIndex == 11) {
                organTitle.textContent = 'じん臓（ぞう）';
                organCap.textContent = 'じん臓は、腎臓（じんぞう）と書きます。血液をろ過し、尿をつくります。そのほかには、からだの中の水分や血圧、体液のバランスなどを調節したり、生きていくために必要なホルモンなどをつくる大切な臓器です。';
            } else if (clickElementIndex == 12) {
                organTitle.textContent = '大腸（だいちょう）';
                organCap.textContent = '大腸は、水分やミネラルを吸収し、便を作るはたらきをしています。食事をしてから便が排泄（はいせつ）されるまでは通常24〜72時間かかります。大腸の長さは1.5メートルほどで、盲腸（もうちょう）、結腸（けっちょう）、直腸（ちょくちょう）に分けられます。';
            } else if (clickElementIndex == 13) {
                organTitle.textContent = '膀胱（ぼうこう）';
                organCap.textContent = '尿を一時的にため、ある程度の量になったら体の外に出す働きがあります。 尿道の一部分の周りには、尿道を締めることのできる筋肉があり、尿が漏（も）れるのを防いでいます。 膀胱に尿がたまってくると、刺激が脳に伝わり、尿意を感じます。 膀胱の筋肉が収縮し、尿道を締める筋肉が緩（ゆる）むと、尿は尿道を通って体外に排泄（はいせつ）されます。';
            }
        });
    });
});

//モーダルウィンドウを閉じる
organCloses.forEach((organClose) => {
    organClose.addEventListener('click', () => {
        organOpens.forEach((organOpen) => {
            organOpen.classList.remove('organ-clicked');
        });
        modals.forEach((modal) => {
            modal.animate(hiddenKeyframe, organOptions);
            mask.animate(hiddenKeyframe, organOptions);
        });
    });
});
//マスクをクリックしても、モーダルウィンドウを閉じる
mask.addEventListener('click', () => {
    organCloses.forEach((organClose) => {
        organClose.click();
        organOpens.forEach((organOpen) => {
            organOpen.classList.remove('organ-clicked');
        });
    });
});

/*
health
================================================ */
const mainImage = document.querySelector('#main-image img');
const thumbs = document.querySelectorAll('.col-thumb img');
const headLine = document.querySelector('#headline');
const subHeading = document.querySelector('#subheading');
const healthCap = document.querySelector('#health-caption');

thumbs.forEach((thumb) => {
    thumb.addEventListener('mouseover', (event) => {

        headLine.textContent = event.target.alt;

        // マウスオーバーされた要素を特定
        const hoverElement = event.target;
        
        //マウスオーバーされた要素のインデックスを取得
        const hoverElementIndex = Array.from(thumbs).indexOf(hoverElement);

        //条件分岐
        if (hoverElementIndex == 0) {
            mainImage.src = "../images/immunity_on.png";
            subHeading.textContent = '外から入ってきたウイルスや細菌(さいきん)から、からだを守る防御(ぼうぎょ)システムだよ。わたしたちのからだが健康（けんこう）でいられるのは、免疫（めんえき）のおかげなんだよ。';
            healthCap.textContent = '免疫は、からだの外から入った侵入者（しんにゅうしゃ）である、細菌（さいきん）やウイルスなどに対して免疫細胞（さいぼう）などが「自分」と「自分でないもの」を識別（しきべつ）して、攻撃（こうげき）したり、追い出したりしてからだを守ります。';
        } else if (hoverElementIndex == 1) {
            mainImage.src = "../images/exercise_on.png";
            subHeading.textContent = 'からだを動かしたり、ストレッチしたり……。適度な運動は骨を丈夫にし、筋肉を強くして、心と体の健康を保（たも）ってくれるよ。';
            healthCap.textContent = 'たとえば、「歩く」ことも運動です。学校に行ったり、買い物をして歩くこと、階段をのぼること、スポーツを行うなど、適度な運動をすることは、病気を予防し、活動的な生活を送る基礎（きそ）となります。';
        } else if (hoverElementIndex == 2) {
            mainImage.src = "../images/meal_on.png";
            subHeading.textContent = 'わたしたちのからだは食べ物を食べることで、それをエネルギーに変えて、からだや精神（せいしん）のはたらきを整えることができるよ。栄養（えいよう）バランスのとれた食事を心がけよう。';
            healthCap.textContent = '勉強したり、おどったり、眠ったりするとき……。どんなときもからだはエネルギーを必要とします。食べることで、エネルギーはつくられます。からだを構成（こうせい）する筋肉（きんにく）や臓器（ぞうき）、骨や血も、食べ物に含まれる栄養素で、日々つくられているのです。';
        }
        mainImage.animate({ opacity: [0, 1] }, 500);
    });
});


