// โหลดเสียงเพลงที่ต้องการ
const backgroundMusic = new Audio("background.mp3");

// ตั้งค่าให้เพลงวนซ้ำ (loop)
backgroundMusic.loop = true;

// เล่นเพลงเมื่อโหลดหน้าเว็บ
window.addEventListener("load", function () {
    backgroundMusic.play();
});

const quotes = {
    aries: ["จงกล้าหาญและมุ่งมั่นต่อเป้าหมาย", "อย่ากลัวที่จะลองสิ่งใหม่ ๆ"],
    taurus: ["ความพยายามไม่เคยทำให้ใครล้มเหลว", "อดทนเป็นกุญแจสู่ความสำเร็จ"],
    gemini: ["ชีวิตคือการเดินทาง เรียนรู้จากทุกย่างก้าว", "การสื่อสารที่ดีจะพาคุณไปไกล"],
    cancer: ["เชื่อในความรู้สึกของตัวเองเสมอ", "ความอบอุ่นจากใจทำให้โลกสดใส"],
    leo: ["คุณเป็นผู้นำโดยธรรมชาติ จงมั่นใจในตัวเอง", "แสงของคุณส่องสว่างให้กับคนรอบข้าง"],
    virgo: ["รายละเอียดเล็ก ๆ น้อย ๆ มีค่ามากกว่าที่คิด", "ความสมบูรณ์แบบมาจากความพยายาม"],
    libra: ["สมดุลคือกุญแจสำคัญของชีวิต", "จงให้และรับอย่างเท่าเทียม"],
    scorpio: ["ความลึกลับของคุณทำให้คุณพิเศษ", "เชื่อมั่นในพลังภายในของตัวเอง"],
    sagittarius: ["อย่าหยุดเรียนรู้และออกสำรวจโลก", "ชีวิตคือการผจญภัยที่ไม่มีวันสิ้นสุด"],
    capricorn: ["ความมุ่งมั่นทำให้คุณก้าวไปข้างหน้า", "จงอดทนและสร้างเส้นทางของตัวเอง"],
    aquarius: ["คิดต่างคือพลังของคุณ", "อย่ากลัวที่จะแตกต่างและเป็นตัวของตัวเอง"],
    pisces: ["จินตนาการคือพลังที่ยิ่งใหญ่", "จงเชื่อมั่นในความฝันของคุณ"]
};

// โหลดเสียงคลิก
const clickSound = new Audio("Ding.mp3");

document.getElementById("randomQuoteBtn").addEventListener("click", function () {
    // เล่นเสียงเมื่อกดปุ่ม
    clickSound.play();

    const zodiac = document.getElementById("zodiacSelect").value;
    const quoteDisplay = document.getElementById("quoteDisplay");

    if (!zodiac) {
        quoteDisplay.textContent = "กรุณาเลือก 12 ราศี!";
        return;
    }

    const randomIndex = Math.floor(Math.random() * quotes[zodiac].length);
    
    // ลบ Animation ก่อนแล้วเพิ่มใหม่
    quoteDisplay.classList.remove("fade-in");
    void quoteDisplay.offsetWidth; // รีเซ็ต Animation
    quoteDisplay.classList.add("fade-in");

    quoteDisplay.textContent = quotes[zodiac][randomIndex];
});
