import React, { useState } from "react";
import Layout from "./Layout";
import "../style/Second.css";

const Game24 = () => {
  const [one, setOne] = useState();
  const [two, setTwo] = useState();
  const [three, setThree] = useState();
  const [four, setFour] = useState();

  const arrNumber = [one, two, three, four];

  const [result, setResult] = useState(null);
  const [solution, setSolution] = useState(null);

  const calculateResult = () => {
    // String to Number
    const numArr = arrNumber.map((num) => Number(num));

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

    // ถ้า value = 24 จะส่งค่า true และเซ็ตข้อความ (a * b) - (c * d)
    const calculate = (value, solutionExpression) => {
      if (value === 24) {
        setSolution(solutionExpression);
        return true;
      }
      return false;
    };

    for (let i = 0; i < numArr.length; i++) {
      const [a, b, c, d] = numArr;

      if (
        calculate(a + b + c + d, `${a} + ${b} + ${c} + ${d}`) ||
        calculate(a + b + c - d, `${a} + ${b} + ${c} - ${d}`) ||
        calculate(a + b + c * d, `${a} + ${b} + (${c} * ${d})`) ||
        calculate(a + b + c / d, `${a} + ${b} + (${c} / ${d})`) ||
        calculate(a + b - c + d, `${a} + ${b} - ${c} + ${d}`) ||
        calculate(a + b - c - d, `${a} + ${b} - ${c} - ${d}`) ||
        calculate(a + b - c * d, `${a} + ${b} - (${c} * ${d})`) ||
        calculate(a + b - c / d, `${a} + ${b} - (${c} / ${d})`) ||
        calculate(a + b * c + d, `${a} + (${b} * ${c}) + ${d}`) ||
        calculate(a + b * c - d, `${a} + (${b} * ${c}) - ${d}`) ||
        calculate(a + b * c * d, `${a} + (${b} * ${c} * ${d})`) ||
        calculate(a + (b * c) / d, `${a} + (${b} * ${c} / ${d})`) ||
        calculate(a + b / c + d, `${a} + (${b} / ${c}) + ${d}`) ||
        calculate(a + b / c - d, `${a} + (${b} / ${c}) - ${d}`) ||
        calculate(a + (b / c) * d, `${a} + (${b} / ${c} * ${d})`) ||
        calculate(a + b / c / d, `${a} + (${b} / ${c} / ${d})`) ||
        calculate(a - b + c + d, `${a} - ${b} + ${c} + ${d}`) ||
        calculate(a - b + c - d, `${a} - ${b} + ${c} - ${d}`) ||
        calculate(a - b + c * d, `${a} - ${b} + (${c} * ${d})`) ||
        calculate(a - b + c / d, `${a} - ${b} + (${c} / ${d})`) ||
        calculate(a - b - c + d, `${a} - ${b} - ${c} + ${d}`) ||
        calculate(a - b - c - d, `${a} - ${b} - ${c} - ${d}`) ||
        calculate(a - b - c * d, `${a} - ${b} - (${c} * ${d})`) ||
        calculate(a - b - c / d, `${a} - ${b} - (${c} / ${d})`) ||
        calculate(a - b * c + d, `${a} - (${b} * ${c}) + ${d}`) ||
        calculate(a - b * c - d, `${a} - (${b} * ${c}) - ${d}`) ||
        calculate(a - b * c * d, `${a} - (${b} * ${c} * ${d})`) ||
        calculate(a - (b * c) / d, `${a} - (${b} * ${c} / ${d})`) ||
        calculate(a - b / c + d, `${a} - (${b} / ${c}) + ${d}`) ||
        calculate(a - b / c - d, `${a} - (${b} / ${c}) - ${d}`) ||
        calculate(a - (b / c) * d, `${a} - (${b} / ${c} * ${d})`) ||
        calculate(a - b / c / d, `${a} - (${b} / ${c} / ${d})`) ||
        calculate(a * b + c + d, `(${a} * ${b}) + ${c} + ${d}`) ||
        calculate(a * b + c - d, `(${a} * ${b}) + ${c} - ${d}`) ||
        calculate(a * b + c * d, `(${a} * ${b}) + (${c} * ${d})`) ||
        calculate(a * b + c / d, `(${a} * ${b}) + (${c} / ${d})`) ||
        calculate(a * b - c + d, `(${a} * ${b}) - ${c} + ${d}`) ||
        calculate(a * b - c - d, `(${a} * ${b}) - ${c} - ${d}`) ||
        calculate(a * b - c * d, `(${a} * ${b}) - (${c} * ${d})`) ||
        calculate(a * b - c / d, `(${a} * ${b}) - (${c} / ${d})`) ||
        calculate(a * b * c + d, `(${a} * ${b} * ${c}) + ${d}`) ||
        calculate(a * b * c - d, `(${a} * ${b} * ${c}) - ${d}`) ||
        calculate(a * b * c * d, `(${a} * ${b} * ${c} * ${d})`) ||
        calculate(a * b * (c / d), `(${a} * ${b} * ${c} / ${d})`) ||
        calculate(a * (b / c) + d, `(${a} * (${b} / ${c})) + ${d}`) ||
        calculate(a * (b / c) - d, `(${a} * (${b} / ${c})) - ${d}`) ||
        calculate(a * (b / c) * d, `(${a} * (${b} / ${c}) * ${d})`) ||
        calculate((a * (b / c)) / d, `(${a} * (${b} / ${c}) / ${d})`) ||
        calculate(a / b + c + d, `(${a} / ${b}) + ${c} + ${d}`) ||
        calculate(a / b + c - d, `(${a} / ${b}) + ${c} - ${d}`) ||
        calculate(a / b + c * d, `(${a} / ${b}) + (${c} * ${d})`) ||
        calculate(a / b + c / d, `(${a} / ${b}) + (${c} / ${d})`) ||
        calculate(a / b - c + d, `(${a} / ${b}) - ${c} + ${d}`) ||
        calculate(a / b - c - d, `(${a} / ${b}) - ${c} - ${d}`) ||
        calculate(a / b - c * d, `(${a} / ${b}) - (${c} * ${d})`) ||
        calculate(a / b - c / d, `(${a} / ${b}) - (${c} / ${d})`) ||
        calculate(a / (b * c) + d, `(${a} / (${b} * ${c})) + ${d}`) ||
        calculate(a / (b * c) - d, `(${a} / (${b} * ${c})) - ${d}`) ||
        calculate((a / (b * c)) * d, `(${a} / (${b} * ${c}) * ${d})`) ||
        calculate(a / (b * c) / d, `(${a} / (${b} * ${c}) / ${d})`)
      ) {
        //ถ้ามี condition ไหนเป็น true
        setResult("พบวิธี: เลขชุดนี้สามารถทำให้ผลลัพธ์กลายเป็น 24 ได้");
        return;
      }
    }
    setResult("ไม่พบวิธีที่จะทำให้ได้ผลลัพธ์เท่ากับ 24");
    setSolution(null);
  };

  return (
    <Layout>
      <div className="container-second">
        <h1>ข้อที่2</h1>
        <span>ตัวเลขจะต้องเป็น 1 –9 เท่านั้น (ห้ามใช้ตัวเลขซ้ำกัน)</span>
        <div></div>
        <div className="input-number">
          <input
            type="number"
            min={0}
            max={9}
            onChange={(event) => setOne(event.target.value)}
          />
          <input
            type="number"
            min={0}
            max={9}
            onChange={(event) => setTwo(event.target.value)}
          />
          <input
            type="number"
            min={0}
            max={9}
            onChange={(event) => setThree(event.target.value)}
          />
          <input
            type="number"
            min={0}
            max={9}
            onChange={(event) => setFour(event.target.value)}
          />
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

export default Game24;
