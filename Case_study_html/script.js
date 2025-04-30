class Question {
    constructor(content, answer, correctAnswer, money) {
        this.content = content;
        this.answer = answer;
        this.correctAnswer = correctAnswer;
        this.money = money;
    }

    checkAnswer(answer) {
        return answer === this.correctAnswer;
    }
}


let musicBackground;

function music() {
    musicBackground = new Audio("sound/cauhoi.mpeg");
    musicBackground.play();
}

music();

let musicWin;

function win() {
    musicWin = new Audio("sound/intro_2021.mp3");
    musicWin.play();
}

function stopMusic() {
    if (musicBackground && !musicBackground.paused) {
        musicBackground.pause(); // Dừng phát
        musicBackground.currentTime = 0; // phát nhạc lại từ đầu
    }
}


let countDown;
const timerElement = document.getElementById("timer");

function timeCount() {
    let time = 20; // Bắt đầu từ 20 giây
    countDown = setInterval(function () {
        timerElement.innerText = time + "s";
        time--;

        if (time <= 0) {
            clearInterval(countDown);
            Swal.fire({
                icon: "error",
                text: "Hết giờ!",
            }).then(() => {
                reload();
            });
        }
        if (time <= 5) { //từ 5s chuyển số màu đỏ
            timerElement.style.color = 'red';
        }
    }, 1000);
}


let question1 = new Question("Câu 1: Thủ đô của Viêt Nam là ?", ["A. TP. Hồ Chí Minh", "B. Hà Nội", "C. Huế", "D. Đà Nẵng"], "B. Hà Nội", "200.000 VND")
let question2 = new Question("Câu 2: Màu sắc nào có trong lá cờ Việt Nam?", ["A. Đỏ", "B. Xanh", "C. Đen", "D. Tím"], "A. Đỏ", "400.000 VND")
let question3 = new Question("Câu 3: Một tuần có bao nhiêu ngày?", ["A. 5", "B. 6", "C. 7", "D. 8"], "C. 7", "600.000 VND");
let question4 = new Question("Câu 4: Trong toán học, 5 + 7 bằng mấy?", ["A. 5", "B. 6", "C. 12", "D. 8"], "C. 12", "1.000.000 VND");
let question5 = new Question("Câu 5: Tác giả truyện \"Dế Mèn phiêu lưu ký\" là ai?", ["A. Nguyễn Du", "B. Tô Hoài", "C. Nam Cao", "D. Ngô Tất Tố"], "B. Tô Hoài", "2.000.000 VND");
let question6 = new Question("Câu 6: Quốc gia nào có biểu tượng là con rồng?", ["A. Nhật Bản", "B. Trung Quốc", "C. Thái Lan", "D. Ấn Độ"], "B. Trung Quốc", "3.000.000 VND");
let question7 = new Question("Câu 7: Nước nào có nhiều dân nhất thế giới (tính đến 2023)?", ["A. Ấn Độ", "B. Mỹ", "C. Nga", "D. Trung Quốc"], "A. Ấn Độ", "6.000.000 VND");
let question8 = new Question("Câu 8: Kim tự tháp nổi tiếng nằm ở quốc gia nào?", ["A. Mexico", "B. Peru", "C. Ai Cập", "D. Hy Lạp"], "C. Ai Cập", "10.000.000 VND");
let question9 = new Question("Câu 9: Thành phần chính của không khí là gì?", ["A. Oxy", "B. Nitơ", "C. CO2", "D. Hydro"], "B. Nitơ", "14.000.000 VND");
let question10 = new Question("Câu 10: Ai là người phát minh ra bóng đèn?", ["A. Isaac Newton", "B. Albert Einstein", "C. Thomas Edison", "D. Galileo Galilei"], "C. Thomas Edison", "22.000.000 VND");
let question11 = new Question("Câu 11: \"Truyện Kiều\" gồm bao nhiêu câu thơ?", ["A. 2548", "B. 3254", "C. 3350", "D. 3250"], "D. 3250", "30.000.000 VND");
let question12 = new Question("Câu 12: Đơn vị tiền tệ của Nhật Bản là gì?", ["A. Won", "B. Yuan", "C. Yen", "D. Ringgit"], "C. Yen", "40.000.000 VND");
let question13 = new Question("Câu 13: Chất nào sau đây là kim loại nhẹ nhất?", ["A. Nhôm", "B. Kẽm", "C. Magie", "D. Liti"], "D. Liti", "60.000.000 VND");
let question14 = new Question("Câu 14: Ký hiệu nguyên tử của vàng là gì?", ["A. Ag", "B. Au", "C. Gd", "D. Pt"], "B. Au", "85.000.000 VND");
let questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14];
let questionElm = document.getElementById("question");

function showQuestion(question_1) {
    clearInterval(countDown);
    timeCount();
    questionElm.innerHTML = question_1.content;
    document.getElementById('bonus').innerHTML = (questions[0].money);// hiện tiền thưởng
    questionElm.setAttribute("questionScreen", questions.indexOf(question_1).toString());
    timerElement.style.color = 'gold';
    for (let i = 0; i < 4; i++) {
        let getaswId = document.getElementById('answer_' + (i + 1));
        getaswId.innerHTML = question_1.answer[i];
    }
}

showQuestion(question1);


let index = 0

function nextQuestion() {
    index++;
    showQuestion(questions[index]);

}

function checkAnswer(id) {
    let answer = document.getElementById(id).innerHTML;
    Swal.fire({
        title: "Bạn chắc chắn chứ?", icon: "question"
    }).then((result) => {
        if (result.isConfirmed) {
            if (questions[index].checkAnswer(answer)) {
                Swal.fire({
                    icon: "success",
                    title: "Câu trả lời của bạn hoàn toàn chính xác !",
                    showConfirmButton: false,
                    timer: 1500
                });
                stopMusic();
                // right();
                if (index === 13) {
                    Swal.fire({
                        title: "🎉🎉🎉Chúc Mừng Bạn Đã Dành Chiến Thắng🎉🎉🎉 \n Giải thưởng : 85.000.000 VND",
                        width: 1250,
                        padding: "3em",
                        color: "white",
                        background: "url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGRhcGljb2RwNnI0azVxaG9raXRmODByZG42MmVoZnFhdGwwMDk4eiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/9sxNJzfVvnilI0Dkoi/giphy.gif')",
                    }).then(() => {
                        reload()
                    });
                    win();
                }
                nextQuestion();
                music();
                document.getElementById('bonus').innerHTML = (questions[index].money);
            } else {
                Swal.fire({
                    icon: "error", title: "Sai", text: "Bạn đã thua!",
                }).then(() => {
                    reload();
                });
            }
        }
    });
}

function reload() {
    location.replace('Start_Game.html');
}

