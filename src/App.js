import React from 'react';
import Card from './components/card/Card';
import Counter from './components/Counter/Counter';
import SelectionList from './components/SelectionList/SelectionList';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const App = () => {

  const cards = [
    {
      onPress: () => { alert("this is first button") },
      heading: "first card",
      desc: "Hey this the very first card",
      buttonName: "Click the first Button"
    },
    {
      onPress: () => { alert("this is second button") },
      heading: "second card",
      desc: "Hey this the very second card",
      buttonName: "Click the second Button"
    },
    {
      onPress: () => { alert("this is third button") },
      heading: "third card",
      desc: "Hey this the very third card",
      buttonName: "Click the third Button"
    },
    {
      onPress: () => { alert("this is fourth button") },
      heading: "fourth card",
      desc: "Hey this the very fourth card",
      buttonName: "Click the fourth Button"
    },
    {
      onPress: () => { alert("this is fifth button") },
      heading: "fifth card",
      desc: "Hey this the very fifth card",
      buttonName: "Click the fifth Button"
    },
    {
      onPress: () => { alert("this is sixth button") },
      heading: "sixth card",
      desc: "Hey this the very sixth card",
      buttonName: "Click the sixth Button"
    },
    {
      onPress: () => { alert("this is seventh button") },
      heading: "seventh card",
      desc: "Hey this the very seventh card",
      buttonName: "Click the seventh Button"
    }
  ]

  const RenderList =()=>{return(cards.map((item, index) => {
    return (
      <Card
        key={index}
        onPress={item?.onPress}
        heading={item?.heading}
        desc={item?.desc}
        buttonName={item?.buttonName}
      />
    )
  }))}

  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<SelectionList />} />
          <Route path="counter" element={<Counter />} />
          <Route path="renderList" element={<RenderList/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

