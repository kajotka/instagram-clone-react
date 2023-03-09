import React from 'react'
import dotsBlack from '../svg/dots-black.svg';
import like from '../svg/like.svg';
import comment from '../svg/comment.svg';
import forward from '../svg/forward.svg';
import save from '../svg/save.svg';
import emoji from '../svg/emoji.svg';


export default function IgPost(props) {
  return (
    <div className="post">
      <div className="post-header">
        <div className="post-header-left">
          <img src="img/post1.jpg" alt="" className="avatar" />
          <span className="user-name">
            {props.name}<span className="nick"> • {props.ago}</span>
          </span>
        </div>
        <div className="post-header-right">
          <img src={dotsBlack} alt="" className="" />
        </div>
      </div>
      <img src={props.img} alt="" className="post-picture" />
      <div className="icons">
        <div className="icon-left">
          <img src={like} alt="" className="" />
          <img src={comment} alt="" className="" />
          <img src={forward} alt="" className="" />
        </div>
        <div className="icon-right">
          <img src={save} alt="" className="" />
        </div>
      </div>
      <h1>Liczba polubień: {props.likes}</h1>
      <div className="mt-8">
        <a href="#" alt="'">
          {props.name}
        </a>
        <span className="post-description">{props.description}</span>
      </div>
      <p className="nick mt-8">Zobacz wszystkie komentarze: {props.comments}</p>
      <div className="space-between">
        <textarea aria-label="Dodaj komentarz..." placeholder="Dodaj komentarz..."
          autoComplete="off" autoCorrect="off" style={{ height: 18 }}
          spellCheck="false"></textarea>
          <img src={emoji} alt="" className="emoji" />
      </div>
    </div>
  )
}
