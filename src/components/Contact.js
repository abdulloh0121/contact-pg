import "./contact.scss";
import loga from "../assets/tel-icon.png";
import xxxIcon from "../assets/red-loga.png";
import { useState } from "react";

function Contact() {
  const [showModal, setShowModal] = useState(false);

  // modall
  const newContactHandler = (e) => {
    e.preventDefault();
    setShowModal(true);
  };
  const xxxHandler = (e) => {
    setShowModal(false);
  };
  const [input, setInput] = useState("");
  const [number, setInpu] = useState("");
  const [img, setInp] = useState("");
  const [todo, setTodo] = useState([
    {
      id: 1,
      tatle: "Abdulloh",
      number: "90 007 07 07",
      img: "https://picsum.photos/200/300",
    },
  ]);

  const addTodohandler = () => {
    setShowModal(false)
    const newTodo = {
      id: Math.random().toString(),
      tatle: input,
      number: number,
      img: img,
    };
    setTodo([...todo, newTodo]);
    setInput("");
    setInpu("");
    setInp("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bag">
      {showModal && (
        <div className="boxs">
          <a onClick={xxxHandler} className="boxs__herf" href="#">
            <img width={28} height={28} src={xxxIcon} alt="" />
          </a>
          <form onSubmit={submitHandler} className="boxs__form" action="">
            <input
              value={input}
              onChange={(evt) => setInput(evt.target.value)}
              className="boxs__input"
              placeholder="your name"
              type="text"
            />

            <input
              value={number}
              onChange={(evt) => setInpu(evt.target.value)}
              className="boxs__input"
              placeholder="your tel number"
              type="number"
              name=""
              id=""
            />
            <input
              value={img}
              onChange={(evt) => setInp(evt.target.value)}
              className="boxs__input"
              placeholder="your img"
              type="url"
              name=""
              id=""
            />
            <a onClick={addTodohandler} className="boxs__inputa" href="#">
              add
            </a>
          </form>
        </div>
      )}
      <div className="box">
        <div className="box__card">
          <a onClick={newContactHandler} href="" className="box__button">
            <p className="box__newContact">New contact</p>
          </a>
          {todo.map((item) => (
            <div key={item.id} className="box__itim">
              <img
                className="box__imgContact"
                width={100}
                height={100}
                src={item.img}
                alt="image"
              />
              <div className="cart">
                <strong className="cart__name"> {item.tatle}</strong>
                <div className="cart__texts">
                  <a href="">
                    <img
                      className="cart__imgContact"
                      src={loga}
                      width={28}
                      height={28}
                      alt="tel-icon.png"
                    />
                  </a>
                  <a className="cart__nomer" href="">
                    {" "}
                    <span>+998</span> {item.number}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
