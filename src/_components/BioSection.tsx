const BioSection = () => {
  return (
    <div className="bio-section">
      <div className="bio-image" id="about">
        <img src="./_imagesthor.jpg" alt="Author" />
      </div>
      <div className="bio-text">
        <p>
          'Sphere' is licensed under CC BY 3.0 — free for personal and
          commercial use, as long as the footer link to One Page Love remains.
          Remove the credit with a Sphere Pro upgrade.
        </p>
        <div className="bio-links">
          <ul>
            <li>
              <a href="https://onepagelove.com/go/sphere-upgrade">Upgrade</a>
            </li>
            <li>
              <a href="https://onepagelove.com/sphere">Download</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="https://onepagelove.com/sphere">LinkedIn</a>
            </li>
            <li>
              <a href="https://onepagelove.com/sphere">Email</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BioSection;
