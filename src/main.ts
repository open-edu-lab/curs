import './style.css'

const app = document.getElementById('app')!
app.innerHTML = `
  <main class="card">
    <header class="header">
      <div class="avatar" aria-hidden="true">🧑‍🏫</div>
      <div class="meta">
        <h1 class="name">김가현</h1>
        <p class="role">오류중학교 기술교사 · 프론트엔드 학습자</p>
        <p class="contact">Email: example@oryu.ms.kr · GitHub: github.com/gahyun</p>
      </div>
    </header>

    <section>
      <h2>간단 소개</h2>
      <p>
        안녕하세요! <strong>오류중학교</strong>에서 학생들을 가르치고 있는 <strong>기술교사 김가현</strong>입니다.<br>
        교육 현장에 필요한 도구를 직접 만들기 위해 코딩을 시작했습니다.
        현재는 '선생님이 만드는 에듀테크'를 목표로 웹 개발을 열심히 공부하고 있습니다.
      </p>
    </section>

    <section>
      <h2>관심 기술 (Learning)</h2>
      <ul class="chips">
        <li>HTML/CSS</li>
        <li>JavaScript/TypeScript</li>
        <li>Education Tech</li>
        <li>Web Service</li>
      </ul>
    </section>

    <section>
      <h2>경력 사항</h2>
      <ul>
        <li>20XX — 현재: <strong>오류중학교 기술교사</strong></li>
        <li>20XX — 20XX: ○○대학교 기술교육과 졸업</li>
        <li>현재: 웹 프론트엔드 개발 과정 학습 중</li>
      </ul>
    </section>

    <section>
      <h2>목표 프로젝트</h2>
      <p>학교 수업 보조 도구 개발, 학생 관리 웹 서비스 구현</p>
    </section>

    <footer class="footer">
      <p>기술과 교육의 연결고리가 되고 싶습니다.</p>
    </footer>
  </main>
`
