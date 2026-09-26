export const tutors = [
  { name: 'Анна Смирнова', subject: 'Python: игры и основы программирования', experience: 'Преподаёт детям и подросткам', format: 'Пробное занятие — знакомство и мини-проект', age: '10–15 лет' },
  { name: 'Марк Иванов', subject: 'Веб-разработка: HTML, CSS и JavaScript', experience: 'Помогает собрать первый сайт', format: 'На занятии создаёте страницу-портфолио', age: '12–16 лет' },
  { name: 'Лиза Ким', subject: 'Scratch и создание игр', experience: 'Объясняет программирование через практику', format: 'Первая встреча — простая игра с персонажем', age: '8–12 лет' },
];

export function isValidTutor(tutor) {
  return Boolean(tutor?.name?.trim() && tutor?.subject?.trim() && tutor?.experience?.trim() && tutor?.format?.trim() && tutor?.age?.trim());
}
