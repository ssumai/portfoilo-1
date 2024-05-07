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
health
================================================ */
const mainImage = document.querySelector('#main-image img');
const thumbs = document.querySelectorAll('.col-thumb img');
const headLine = document.querySelector('#headline');
const subHeading = document.querySelector('#subheading');
const healthCap = document.querySelector('#health-caption');

thumbs.forEach((thumb) => {
    thumb.addEventListener('click', (event) => {

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


