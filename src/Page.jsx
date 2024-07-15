import Message from "./Message";
import avatar from "/images/avatar.jpg";
import img1 from "/images/dog-image-1.jpg";
import img2 from "/images/dog-image-2.jpg";
import img3 from "/images/dog-image-3.jpg";

function Page() {
  return (
    <div className="app">
      <div className="page">
        <div className="header row">
          <p className="white">&#10092;</p>
          <img src={avatar} alt="" className="avatar" />
          <div>
            <p className="name white">Samuel Green</p>
            <p className="status">Available to Walk</p>
          </div>
          <p className="white right-symbol">&#10247; </p>
        </div>
        <Message
          divClass={`left`}
          text={`That sounds great. I’d be happy with that.`}
        />
        <Message
          divClass={`left`}
          text={`Could you send over some pictures of your dog, please?`}
        />
        <Message divClass={`right row images`} images={[img1, img2, img3]} />
        <Message
          divClass={`right only-text`}
          text={`Here are a few pictures. She’s a happy girl!`}
        />
        <Message divClass={`right only-text`} text={`Can you make it?`} />
        <Message
          divClass={`left`}
          text={`She looks so happy! The time we discussed works. How long shall I take her out for?`}
        />
        <Message
          divClass={`left exercise row`}
          radio={<input type="radio" name="exercise" />}
          exercise={`30 minute walk`}
          price={`$29`}
        />
        <Message
          divClass={`left exercise row`}
          radio={<input type="radio" name="exercise" />}
          exercise={`1 hour walk`}
          price={`$49`}
        />
        <div className="sendbox">
          <input type="text" placeholder="Type a message…" />
          <button>&gt;</button>
        </div>
      </div>
    </div>
  );
}

export default Page;
