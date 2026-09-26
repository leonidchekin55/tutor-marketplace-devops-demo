/* global document */
import { isValidTutor, tutors } from './content.js';

const tutorList = document.querySelector('#tutor-list');

if (tutorList) {
  tutorList.innerHTML = tutors
    .filter(isValidTutor)
    .map((tutor, index) => `
      <article class="teacher-card">
        <div class="portrait portrait-${['one', 'two', 'three'][index] ?? 'one'}" aria-hidden="true">${['👩🏻‍💻', '👨🏽‍💻', '👩🏾‍🎨'][index] ?? '💻'}</div>
        <div class="teacher-info">
          <div class="profile-label">Пример профиля · ${tutor.age}</div>
          <h3>${tutor.subject}</h3>
          <p>${tutor.experience}</p>
          <div class="tags"><span>${tutor.format}</span></div>
          <a class="profile-link" href="#faq" aria-label="Узнать о формате: ${tutor.subject}">Узнать о формате <span aria-hidden="true">→</span></a>
        </div>
      </article>`)
    .join('');
}
