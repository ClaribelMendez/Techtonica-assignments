function Footer(props) {
  return (
    <footer>
      <div className="footer">
          <span>{props.text} <a href={props.url}>{props.title} </a></span>

        {/* Star Calendar favicon made by
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>
        Find your own on
        <a href="https://www.flaticon.com/" title="Flaticon">
          FlatIcon.com
        </a> */}
      </div>
    </footer>
  );
}

export default Footer;
