import React, { useState } from "react";
import Layout from "./Layout";
import "../style/First.css";

const First = () => {
  const [parentheses, setParentheses] = useState("");

  //Input ได้ไม่เกิน 30 ตัว
  if (parentheses.length > 30) {
    alert("คุณใส่ข้อมูลเกิน 30ตัว");
    setParentheses("");
  }

  //และ สิ่งที่จะใส่ได้จะต้องมีแค่ “(” และ “)” เท่านั้น
  function onlyParentheses(event) {
    const inputValue = event.target.value;
    if (/^[()]*$/.test(inputValue)) {
      setParentheses(inputValue);
    } else {
      alert("ใส่ได้แค่ “(” และ “)” เท่านั้น");
    }
  }

  const openRegex = /\(/g;
  const closeRegex = /\)/g;
  //หาจำนวน ปีกกาเปิด (
  const countOpen = parentheses.match(openRegex) || [];
  //หาจำนวน ปีกกาปิด )
  const countClose = parentheses.match(closeRegex) || [];

  //นับจำนวนที่ต้องเพิ่ม ปีกกาเปิด"("
  let amountOpen = 0;
  //นับจำนวนที่ต้องเพิ่ม ปีกกาปิด ")"
  let amountClose = 0;

  const arrParentheses = parentheses.split("");
  const lastIndexParentheses = arrParentheses.length;
  const indexPlusOpen = []; //เก็บตำแหน่งที่ต้องเพิ่ม ปีกกาเปิด"("
  const indexPlusClose = []; //เก็บตำแหน่งที่ต้องเพิ่ม ปีกกาปิด ")"

  //ถ้าตัวแรกเท่ากับ ปีกกาปิด )
  if (arrParentheses[0] === ")") {
    indexPlusOpen.push(1);
    amountOpen++;
  }

  for (let i = 0; i < arrParentheses.length; i++) {
    if (arrParentheses[i] === ")" && arrParentheses[i + 1] === ")") {
      indexPlusOpen.push(i + 2);
      amountOpen++;
    } else if (arrParentheses[i] === "(" && arrParentheses[i + 1] === "(") {
      indexPlusClose.push(i + 2);
      amountClose++;
    }
  }

  //ถ้า ตัวสุดท้ายเท่ากับ ปีกกาเปิด (
  if (arrParentheses[lastIndexParentheses - 1] === "(") {
    indexPlusClose.push(lastIndexParentheses + 1);
    amountClose++;
  }

  return (
    <Layout>
      <div className="container-first">
        <h1>ข้อที่1</h1>
        <br />
        <input
          type="text"
          value={parentheses}
          onChange={onlyParentheses}
          placeholder="“(” และ “)” เท่านั้น"
        />
        <br />
        <br />
        <span>ความยาวตัวอักษรทั้งหมด{arrParentheses.length} ตัว</span>
        <br />
        <span>วงเล็บเปิดมีจำนวน"(" {countOpen.length} ตัว</span>
        <br />
        <span>วงเล็บปิดมีจำนวน")" {countClose.length} ตัว</span>
        <br />
        <span>ต้องใส่วงเล็บเปิดเพิ่ม{amountOpen} ตัว</span>
        <br />
        <span>ต้องใส่วงเล็บปิดเพิ่ม {amountClose} ตัว</span>
        <br />
        <span>ตำแหน่งที่ต้องใส่วงเล็บเปิดคือ : {indexPlusOpen.join(",")}</span>
        <br />
        <span>ตำแหน่งที่ต้องใส่วงเล็บปิดคือ : {indexPlusClose.join(",")}</span>
        <br />
      </div>
    </Layout>
  );
};

export default First;
