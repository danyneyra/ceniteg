interface Props {
    url: string
}
const FlipbookViewer = ({url}: Props) => {
    return (
      <div className="w-full">
        <iframe
          allowFullScreen={true}
          className="fp-iframe"
          src={url}
          style={{ border: "1px solid lightgray", width: "100%", height: "620px" }}
        ></iframe>
      </div>
    );
  };
  
  export default FlipbookViewer;
  