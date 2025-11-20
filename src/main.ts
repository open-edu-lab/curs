import './style.css'

const app = document.getElementById('app')!
app.innerHTML = `
  <main class="card">
    <header class="header">
      <div class="avatar" aria-hidden="true">사진</div>
      <div class="meta">
        <h1 class="name">김가현</h1>
        <p class="role">프론트엔드 개발자</p>
        <p class="contact">Email: example@example.com · GitHub: github.com/yourid</p>
      </div>
    </header>

    <section>
      <h2>간단 소개</h2>
      <p>안녕하세요. 저는 사용자 경험 중심의 웹 인터페이스를 만드는 개발자입니다. 최신 웹 기술과 성능 최적화에 관심이 많습니다.</p>
    </section>

    <section>
      <h2>기술 스택</h2>
      <ul class="chips">
        <li>HTML</li>
        <li>CSS / SCSS</li>
        <li>TypeScript</li>
        <li>Vite / React / Vue</li>
      </ul>
    </section>

    <section>
      <h2>학력 · 경력</h2>
      <ul>
        <li>2020 — 2024: ○○대학교 컴퓨터공학과</li>
        <li>2024 — 현재: ○○회사 프론트엔드 개발자</li>
      </ul>
    </section>

    <section>
      <h2>포트폴리오</h2>
      <p>주요 프로젝트: 프로젝트 A (링크), 프로젝트 B (링크)</p>
    </section>

    <footer class="footer">
      <p>더 자세한 내용은 연락 주세요.</p>
    </footer>
  </main>
`
