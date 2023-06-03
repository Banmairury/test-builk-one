import React, { useState } from "react";
import Layout from "./Layout";
import "../style/Second.css";

const SecondV2 = () => {
  const [one, setOne] = useState();
  const [two, setTwo] = useState();
  const [three, setThree] = useState();
  const [four, setFour] = useState();

  const arrNumber = [one, two, three, four];

  //const [numbers, setNumbers] = useState("");
  const [result, setResult] = useState(null);
  const [solution, setSolution] = useState(null);

  const calculateResult = () => {
    // String to Number
    const numArr = arrNumber.map((num) => Number(num));

    //แจ้งเตือน เมื่อ กรอกเลขไม่ครบ และ มีเลขซ้ำกัน
    if (numArr.some(isNaN)) {
      alert("โปรดใส่ตัวเลขให้ครบทุกช่อง");
      return;
    } else if (
      numArr.some((num) => num < 1 || num > 9) ||
      new Set(numArr).size !== numArr.length
    ) {
      alert("มีตัวเลขที่ซ้ำกัน");
      return;
    }

    const operator = ["+", "-", "*", "/"];

    //function สร้าง String (6*3+4+2)
    const generateOperatorCombinations = () => {
      const combinations = [];
      for (let i = 0; i < operator.length; i++) {
        for (let j = 0; j < operator.length; j++) {
          for (let k = 0; k < operator.length; k++)
           {combinations.push([numArr[0],operator[i],numArr[1],operator[j],numArr[2],operator[k],numArr[3]])}
        }
      }
      return combinations;
    }

    const operatorCombinations = generateOperatorCombinations();
    const combinationsAsNumber = operatorCombinations.map((combination) =>eval(combination.join("")));//รวมค่า
    const combinationsAsString = operatorCombinations.map((combination) =>combination.join(""));//string วิธีหาค่า

    const calculate = (value, solutionExpression) => {
      if (value === 24) {
        setSolution(solutionExpression);
        return true;
      }
      return false;
    };

    for (let i = 0; i < combinationsAsNumber.length; i++) {
      if (calculate(combinationsAsNumber[i], combinationsAsString[i])) {
        setResult("พบวิธี: เลขชุดนี้สามารถทำให้ผลลัพธ์กลายเป็น 24 ได้");
        return;
      }
      setResult("ไม่พบวิธีที่จะทำให้ได้ผลลัพธ์เท่ากับ 24");
      setSolution(null);
    }
  };
  return (
    <Layout>
      <div className="container-second">
        <h1>ข้อที่4</h1>
        <span>ตัวเลขจะต้องเป็น 1 –9 เท่านั้น (ห้ามใช้ตัวเลขซ้ำกัน)</span>
        <div></div>
        <div className="input-number">
          <input type="number" min={0} max={9} onChange={(event) => setOne(event.target.value)}/>
          <input type="number" min={0} max={9} onChange={(event) => setTwo(event.target.value)}/>
          <input type="number" min={0} max={9} onChange={(event) => setThree(event.target.value)}/>
          <input type="number" min={0} max={9} onChange={(event) => setFour(event.target.value)}/>
        </div>
        <button onClick={calculateResult}>คำนวน</button>
        <div>
          <p>{result}</p>
          {solution && <p>วีธีหาค่า: {solution}</p>}
        </div>
      </div>
    </Layout>
  );
};

export default SecondV2;