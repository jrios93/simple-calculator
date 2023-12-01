let i = 0
const Calculator = () => {
  const percentages = [
    { id: i++, discount: 5 },
    { id: i++, discount: 10 },
    { id: i++, discount: 15 },
    { id: i++, discount: 25 },
    { id: i++, discount: 50 },
  ]
  return (
    <section>
      <div>
        <form>
          <label>
            Juan
            <input name="money" type="text" />
            <span>$</span>
          </label>
          {percentages.map(percentage => {
            return <button key={percentage.id}>{percentage.discount}</button>
          })}
          <input type="text" name='percentagenow'/>
        </form>
      </div>
      <div></div>
    </section>
  )
}

export default Calculator
