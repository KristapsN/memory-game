import React, { useState, useEffect } from 'react';
import './App.css';
import 'flexboxgrid';
import Card from './components/cards/card'
import Button from './components/buttons/button'
import ButtonSec from './components/buttons/button-secundary'
import 'shuffle-array'
import shuffle from 'shuffle-array';




function Memory() {


  const [cards, setCards] = useState([
    { id: 1, value: "https://picsum.photos/id/1/200/200", opened: false, checked: false, counted: false },
    { id: 2, value: "https://picsum.photos/id/1/200/200", opened: false, checked: false, counted: false },
    { id: 3, value: "https://picsum.photos/id/8/200/200", opened: false, checked: false, counted: false },
    { id: 4, value: "https://picsum.photos/id/8/200/200", opened: false, checked: false, counted: false },
    { id: 5, value: "https://picsum.photos/id/55/200/200", opened: false, checked: false, counted: false },
    { id: 6, value: "https://picsum.photos/id/55/200/200", opened: false, checked: false, counted: false },
    { id: 7, value: "https://picsum.photos/id/101/200/200", opened: false, checked: false, counted: false },
    { id: 8, value: "https://picsum.photos/id/101/200/200", opened: false, checked: false, counted: false },
    { id: 9, value: "https://picsum.photos/id/106/200/200", opened: false, checked: false, counted: false },
    { id: 10, value: "https://picsum.photos/id/106/200/200", opened: false, checked: false, counted: false },
    { id: 11, value: "https://picsum.photos/id/85/200/200", opened: false, checked: false, counted: false },
    { id: 12, value: "https://picsum.photos/id/85/200/200", opened: false, checked: false, counted: false },
    { id: 13, value: "https://picsum.photos/id/555/200/200", opened: false, checked: false, counted: false },
    { id: 14, value: "https://picsum.photos/id/555/200/200", opened: false, checked: false, counted: false },
    { id: 15, value: "https://picsum.photos/id/210/200/200", opened: false, checked: false, counted: false },
    { id: 16, value: "https://picsum.photos/id/210/200/200", opened: false, checked: false, counted: false }
  ])

  let shuffler = () => { return shuffle(cards) }

  const [start, setStart] = useState(false)
  const [counter, setCounter] = useState(0)
  const [win, setWin] = useState(false)

  const clickHandler = () => {
    shuffler()
    const newOpen = [...cards]
    setCards(newOpen)
    cards.forEach((item) => {
      item.opened = false
      item.checked = false
    })
    setStart(true)
    setWin(false)
    setCounter(0)
  }


  const openHandler = ((id: number, value: string, checked: boolean) => {
    const newOpen = [...cards]

    setCounter(counter + 1)


    cards.forEach((item) => {
      item.id === id && (item.opened = !item.opened)
      item.id === id && (item.counted = !item.counted)


      if (item.opened === true && item.value === value && item.id !== id) {

        item.checked = true

        cards.forEach((item) => {
          if (item.checked === false && item.value === value) {
            item.checked = true
          }
        })
      }
    })
    setCards(newOpen)

    let arr = cards.filter(item => item.checked === true)
    arr.length === cards.length && setWin(!win)
  })


  useEffect(() => {
    if (counter % 2 === 0) {
      cards.forEach((item2) => { item2.opened = false })
    }
  }, [cards])




  return (
    <div className="game__wrapper">


      <div className="container">
        <div className="row">
          <div className="col-md-3 col-xs-3">

          </div>
          <div className="col-md-6 col-xs-6">
            <ButtonSec
              buttonHandler={() => clickHandler()}
              buttonName="Restart"
            />

          </div>
          <div className="col-md-3 col-xs-3">
            
          </div>
        </div>
      </div>





      <div className="container">
        <div className="row center-md around-md center-xs around-xs">
          <div className="wrapper">




            {cards.map(({ id, value, opened, checked, counted }, index: number) =>
              <Card
                id={id}
                value={value}
                opened={opened}
                clickHandler={() => { openHandler(id, value, checked) }}
                checked={checked}
                counted={counted}
              />
            )}

          </div>
        </div>

      </div>



      <Button
        buttonHandler={() => clickHandler()}
        start={start}
        win={win}
        title="Memory Game"
        subtitle="Are you ready to play?"
        buttonName="Start"
      />
    </div>
  );
}

export default Memory;
