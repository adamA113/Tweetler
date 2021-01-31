import "./peopletweet.css";
import { GoComment } from "react-icons/go";
import { AiOutlineRetweet } from "react-icons/ai";
import FavoriteIcon from "@material-ui/icons/Favorite";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { BiImage } from "react-icons/bi";

const PeopleTweet = ({ tweet }) => {
  console.log(',,,', tweet)
  return (
    <div className="box-peopletweet">
      <div>
        <img
          src={tweet.userImage}
          alt="..."
          className="pic-People"
        />
      </div>
      <div className="div-name">
        <p id="pname">{tweet.user}</p>
        <p id="twdate">{tweet.time.split('T')[0] + '  ,' + tweet.time.split('T')[1].split('.')[0]}</p>
      </div>
      <p id="tweet-content">
        {tweet.tweet}
      </p>
      <img
        src={tweet.img}
        alt="..."
        className="pictweet-People"
      />
      <div className="div-comment">
        <div className="div-commentt">
          <GoComment id="comt" />
        </div>
        <p id="commn">Comment</p>
      </div>
      <Button id="retweet-btn">
        <AiOutlineRetweet id="pic-retwt" />
        <p id="retwt"> Retweets</p>
      </Button>
      <div className="div-like">
        <div className="div-likke">
          <FavoriteIcon id="lik" />
        </div>
        <p id="Like"> &nbsp; Like</p>
      </div>
      <div className="div-book">
        <div className="div-boook">
          <BookmarkIcon id="bok" />
        </div>
        <p id="Book"> &nbsp; Save</p>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
          alt="..."
          className="pic-areaa"
        />
      </div>
      <div>
        <TextField
          id="filled-textarea"
          placeholder="tweet your reply"
          multiline
          className="text-areaa"
          variant="filled"
        />
        <div className="addd-pic">
          <Button className="img-btn" variant="contained">
            <BiImage className="add-img" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PeopleTweet;
