export const Home = (disabled) => {
  return `
    <div class="buttons">
      <div class="buttons__question">
        <button id="addQuestion-btn" ${disabled ? "disabled" : null}>Добавить вопрос</button>
      </div>
      <div class="buttons__test">
        <button id="startTest-btn" ${disabled ? "disabled" : null}>Начать тест</button>
      </div>
    </div>
  `
}
