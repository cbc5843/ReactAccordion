import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "How long have you been in business?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "Where do you get your coffee beans?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Are refills free?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs}/>
    </div>
  );
}

function Accordion({data}) {
  const [curOpen, setCurOpen] = useState(null)

  return (
    <div>
      {data.map((el,i) => (
        <AccordionItem curOpen={curOpen} onOpen={setCurOpen} num={i} title={el.title} text={el.text} key={el.title}/>
      ))}
    </div>
  )
}

function AccordionItem({num, title, text, curOpen, onOpen}){
  const isOpen = num === curOpen;

  function handleToggle(){
    onOpen(isOpen ? null : num)
  }

  return(
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num +1}</p>
      <p className="text">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  )
}
