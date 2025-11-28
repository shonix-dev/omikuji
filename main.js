`use strict`;

{
    //画像リスト
    const images = [
        "images/cyuukichi.png",
        "images/daikichi.png",
        "images/daikyo.png",
        "images/kichi.png",
        "images/kyou.png",
        "images/suekichi.png",
        "images/kyou.png",
    ];

    const RESET_BUTTON_PATH = "images/omikuji.png";

    //DOM要素取得
    const button = document.getElementById("button");
    const omikujiImage = document.getElementById("omikuji_image");
    const resetButton = document.getElementById("reset");

    if (button) {
        button.addEventListener("click", () => {
            button.disabled = true; //連続クリック防止
            resetButton.disabled = true;
            let rollCount = 0;
            const maxRolls = 15; //切り替え最大回数
            const rollInterval = 70; //切り替え間隔（100ms)
            button.style.backgroundColor = "#ccc";

            //繰り返し処理開始
            const intervalId = setInterval(() => {
                //ランダムな画像を表示
                const random = Math.floor(Math.random() * images.length);
                omikujiImage.src = images[random];
                rollCount++;
                //最大回数に達したら繰り返し処理を停止
                if (rollCount >= maxRolls) {
                    clearInterval(intervalId);
                    // 最終的な結果をランダムに決定し表示
                    const finalRandom = Math.floor(Math.random() * images.length);
                    omikujiImage.src = images[finalRandom];
                    resetButton.disabled = false; //ボタンを有効化
                }
            }, rollInterval);
        });
    }

    if (resetButton) {
        resetButton.addEventListener("click", () => {
            resetButton.disabled = true;
            omikujiImage.src = RESET_BUTTON_PATH;
            button.disabled = false;
            button.style.backgroundColor = "#3498db";
        });
    }
}