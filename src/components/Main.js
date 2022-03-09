import React, { useState, useEffect } from "react";
import LocationWeatherNew from "./LocationWeatherNew";
import BottomBar from "./BottomBar";
import HeaderBar from "./HeaderBar";

const Main = () => {

  const [newRequest, setNewRequest] =  useState("not-yet");
  const [cityNameM, setCityNameM] = useState(""); // Input from the location
  const [cityNameArray, setCityNameArray] = useState([]); // Input from the location
  const [components, setComponents] = useState([]);
  const [childRequest, setChildRequest] = useState('');
  const [buttonVisible, setButtonVisible] = useState(true);

  useEffect(() => {
    if(newRequest==='go-for-new-location'){
      setCityNameM(newRequest);
      setNewRequest('not-yet');
    }
  }, [newRequest])



useEffect(() => {
  if (cityNameM !== ''){
    let temp = [...cityNameArray];

    let replacementIndex = temp.indexOf('go-for-new-location');
    if (replacementIndex>=0){
      temp[replacementIndex]=cityNameM;
    } else{
      temp.push(cityNameM);
    }
    setCityNameArray(temp);
    setCityNameM('');
  }
  // eslint-disable-next-line
}, [cityNameM])


useEffect(() => {
  let temp = [...cityNameArray];
  let condition = temp.indexOf('go-for-new-location');
  if (condition===-1){
    setButtonVisible(true);
  } 
}, [cityNameArray])



  const removeComponent = (param)=>{

    let arr0 = [...components]
        let arr3 = [...cityNameArray];
    let ordinalNumber = -10;
    if(param === 'D3l3t3M3'){
      arr3.pop();
      arr0.pop();
    }else{

    function checkIndex(a){
      return (a===param)
    }
    ordinalNumber = arr3.findIndex(checkIndex)
    arr0.splice(ordinalNumber,1);
    arr3.splice(ordinalNumber,1);
  }

    setCityNameArray(arr3);
    setComponents(arr0);
    setCityNameM('');
    setChildRequest('');
  }

  const fillComponents = (array)=>{
    let compArray = [];
    let arr = [...array];

    arr.forEach( (element, index) =>{
      console.log(element);
      compArray.push(<LocationWeatherNew
        element={element} 
        key={`w1${index}`} 
        label={index}
        setChildRequest={setChildRequest}
        setCityNameM={setCityNameM}
        setButtonVisible={setButtonVisible}/>)
    })
    return compArray;
}

  useEffect(() => {
    let temp = fillComponents(cityNameArray)
    setComponents(temp);
    // eslint-disable-next-line
  }, [cityNameM])

  useEffect(() => {
    if (childRequest!==''){
    removeComponent(childRequest)
    }
    // eslint-disable-next-line
  }, [childRequest])



  return (
    <div>
      <HeaderBar/>
        <div className="flex-container">
      {components}
      </div>
      <BottomBar 
        buttonVisible={buttonVisible} 
        setButtonVisible={setButtonVisible}
        setNewRequest={setNewRequest}/>
    </div>
  );
};

export default Main;
