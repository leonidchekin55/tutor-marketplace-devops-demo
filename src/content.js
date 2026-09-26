export const tutors = [
  { name: 'Анна Смирнова', subject: 'Python и первые игры', rating: 4.9 },
  { name: 'Марк Иванов', subject: 'Сайты и веб-дизайн', rating: 5.0 },
  { name: 'Лиза Ким', subject: 'Scratch и Roblox Studio', rating: 4.9 },
];

export function isValidTutor(tutor) {
  return Boolean(tutor?.name?.trim() && tutor?.subject?.trim())
    && Number.isFinite(tutor.rating)
    && tutor.rating >= 1
    && tutor.rating <= 5;
}
