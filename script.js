const revealElements = document.querySelectorAll(".reveal");
const statusElement = document.querySelector("#form-status");
const contactForm = document.querySelector("#contact-form");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealElements.forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index * 70, 350)}ms`;
  observer.observe(element);
});

if (contactForm && statusElement) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) {
      statusElement.textContent = "請先完整填寫表單欄位。";
      statusElement.className = "error";
      return;
    }

    const formData = new FormData(contactForm);
    const body = [
      `聯絡人姓名：${formData.get("name")}`,
      `公司名稱：${formData.get("company")}`,
      `電子郵件：${formData.get("email")}`,
      `聯絡電話：${formData.get("phone") || "未填寫"}`,
      `需求類型：${formData.get("topic")}`,
      "",
      "需求說明：",
      formData.get("message"),
    ].join("\n");

    const mailtoUrl =
      `mailto:hello@workwell.com.tw?subject=${encodeURIComponent("官網聯絡需求｜好好上班公司")}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    statusElement.textContent = "已為你開啟 Email 草稿，確認內容後寄出即可。";
    statusElement.className = "success";
  });
}
