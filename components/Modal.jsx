import TweetMockup from "./TweetMockup";

export default function Modal ({props}) {
  return (
    <>
      <input type="checkbox" id="modal-tweet-mockup" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="modal-tweet-mockup" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <div className="h-auto w-[935px] overflow-auto">
            < TweetMockup props={props}/>
          </div>    
        </div>
      </div>
    </>
  );
}