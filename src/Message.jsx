function Message({ divClass, text, images, radio, exercise, price }) {
  return (
    <div className={divClass + " " + "msg"}>
      {text ? <p>{text}</p> : null}
      {images
        ? images.map((ig) => (
            <img key={ig} src={ig} alt="" className="msg-img" />
          ))
        : null}
      <div>
        {radio ? radio : null}
        {exercise ? <p className="exercise-text">{exercise}</p> : null}
      </div>
      {price ? <p className="price">{price}</p> : null}
    </div>
  );
}

export default Message;
