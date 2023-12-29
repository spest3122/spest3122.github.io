import "./footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="info">
        <p>
          所謂「技術移轉」( technology transfer
          )，就是由技術提供者（技術擁有者）透過簽訂技術移轉合約或其他契約的方式，對技術需用者或技術接受者根據約定提供技、機器設備、技術資料、製程資料或其他資訊與服務，使技術需用者或技術接受者能夠據以實施該等技術。
        </p>
        <p>
          何謂「授權」？
          授權乃是智慧財產權中最普通，也是最常見的一種利用方式。與「移轉」(transfer或assign)不同之處，乃在於移轉是智慧財產權人（例如專利權人）將其所擁有的權利讓與給受讓人，也就是俗稱的「賣斷」，一旦移轉之後，權利人就不再對該智慧財產權擁有任何的權利。
        </p>
      </div>
      <div className="personInfo">
        <p>開發者: Nono Hsu</p>
        <p>
          <a>Github</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
